const ALLOWED_ORIGINS = new Set([
  "https://ozony.tech",
  "https://www.ozony.tech",

  // Vite dev / preview
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:5174",
  "http://127.0.0.1:5174",
  "http://localhost:4173",
  "http://127.0.0.1:4173",
]);

const RESEND_EMAIL_ENDPOINT = "https://api.resend.com/emails";

const LEAD_EMAIL_TO = "contact@ozony.tech";
const LEAD_EMAIL_FROM = "Ozony Tech Leads <leads@ozony.tech>";

// This sends the confirmation email to the lead.
// If Resend complains later, we can change this back to "Ozony Tech Leads <leads@ozony.tech>".
const LEAD_AUTO_REPLY_FROM = "Ozony Tech <leads@ozony.tech>";

const ARYA_DISCORD_USER_ID = "1512669484211638513";

const ELEVENLABS_WEBHOOK_PATH = "/elevenlabs/post-call";

const DISCORD_CONTENT_LIMIT = 1900;
const DISCORD_FIELD_LIMIT = 1000;
const DISCORD_SHORT_FIELD_LIMIT = 250;

function isAllowedOrigin(origin) {
  if (!origin) return true;

  if (ALLOWED_ORIGINS.has(origin)) return true;

  // Extra safety for local Vite dev servers using random ports
  if (/^http:\/\/localhost:\d+$/.test(origin)) return true;
  if (/^http:\/\/127\.0\.0\.1:\d+$/.test(origin)) return true;

  return false;
}

function getCorsHeaders(origin) {
  const allowedOrigin = origin || "https://ozony.tech";

  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Accept, X-Ozony-Webhook-Token",
    "Access-Control-Max-Age": "86400",
    "Content-Type": "application/json",
  };
}

function jsonResponse(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers,
  });
}

function clean(value, fallback = "Not provided", maxLength = 1000) {
  if (value === null || value === undefined || String(value).trim() === "") {
    return fallback;
  }

  const text = String(value).trim();

  if (text.length <= maxLength) return text;

  if (maxLength <= 3) return text.slice(0, maxLength);

  return `${text.slice(0, maxLength - 3)}...`;
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());
}

function clampNumber(number, min, max) {
  return Math.max(min, Math.min(max, number));
}

function hasProvided(value) {
  const normalized = String(value || "")
    .trim()
    .toLowerCase();

  return (
    normalized &&
    normalized !== "not provided" &&
    normalized !== "unknown" &&
    normalized !== "null" &&
    normalized !== "undefined"
  );
}

function includesAny(text, terms) {
  const normalized = String(text || "").toLowerCase();
  return terms.some((term) => normalized.includes(term));
}

function discordValue(
  value,
  fallback = "Not provided",
  maxLength = DISCORD_FIELD_LIMIT,
) {
  return clean(value, fallback, maxLength);
}

function discordContent(value) {
  return clean(value, "Not provided", DISCORD_CONTENT_LIMIT);
}

function discordField(
  name,
  value,
  inline = true,
  maxLength = DISCORD_FIELD_LIMIT,
) {
  return {
    name,
    value: discordValue(value, "Not provided", maxLength),
    inline,
  };
}

function getConsentStatus(body) {
  const rawConsent =
    body.consentToContact ??
    body.contactConsent ??
    body.phoneConsent ??
    body.agreeToContact ??
    body.consent ??
    body.canContact;

  if (rawConsent === null || rawConsent === undefined || rawConsent === "") {
    return "Not provided";
  }

  if (typeof rawConsent === "boolean") {
    return rawConsent ? "Yes" : "No";
  }

  const normalized = String(rawConsent).trim().toLowerCase();

  if (
    ["yes", "true", "1", "on", "agree", "agreed", "accepted"].includes(
      normalized,
    )
  ) {
    return "Yes";
  }

  if (["no", "false", "0", "off", "decline", "declined"].includes(normalized)) {
    return "No";
  }

  return clean(rawConsent, "Not provided", 250);
}

function buildLeadData(body) {
  return {
    source: clean(body.source, "Website Contact Form", 250),
    name: clean(body.name, "Not provided", 250),
    business: clean(body.businessName || body.business, "Not provided", 250),
    email: clean(body.email, "Not provided", 250),
    phone: clean(body.phone, "Not provided", 250),
    service: clean(body.service, "Not provided", 250),
    urgency: clean(body.urgency, "Website Contact", 250),
    consentToContact: getConsentStatus(body),
    message: clean(body.message, "Not provided", 2000),
    submittedAt: new Date().toISOString(),
  };
}

function scoreLead(lead) {
  let score = 20;
  const signals = [];

  const combinedText =
    `${lead.source} ${lead.business} ${lead.service} ${lead.urgency} ${lead.message}`.toLowerCase();

  if (hasProvided(lead.phone)) {
    score += 15;
    signals.push("+ Phone number provided");
  }

  if (hasProvided(lead.business)) {
    score += 10;
    signals.push("+ Business name provided");
  }

  if (
    lead.consentToContact === "Yes" ||
    lead.consentToContact === "Phone call"
  ) {
    score += 10;
    signals.push("+ Contact path confirmed");
  }

  const urgentTerms = [
    "urgent",
    "asap",
    "immediately",
    "right now",
    "emergency",
    "down",
    "not working",
    "broken",
    "outage",
    "no internet",
    "firewall issue",
    "firewall",
    "payment system",
    "pos system",
    "payments",
    "can't process",
    "cannot process",
    "today",
    "same day",
  ];

  if (includesAny(combinedText, urgentTerms)) {
    score += 25;
    signals.push("+ Urgent/high-impact language detected");
  }

  const highIntentTerms = [
    "need help",
    "looking to hire",
    "quote",
    "estimate",
    "consultation",
    "book",
    "schedule",
    "call me",
    "interested",
    "ready",
    "setup",
    "install",
    "fix",
    "repair",
    "business",
    "client",
    "customers",
    "leads",
  ];

  if (includesAny(combinedText, highIntentTerms)) {
    score += 15;
    signals.push("+ High-intent wording detected");
  }

  const aiLeadAgentTerms = [
    "ai lead",
    "lead response",
    "lead capture",
    "ai agent",
    "automation",
    "automate",
    "calls leads",
    "call leads",
    "follow up",
    "follow-up",
    "crm",
  ];

  if (includesAny(combinedText, aiLeadAgentTerms)) {
    score += 20;
    signals.push("+ AI Lead Response Agent interest detected");
  }

  const itEmergencyTerms = [
    "network",
    "wifi",
    "wi-fi",
    "router",
    "switch",
    "firewall",
    "vpn",
    "server",
    "computer",
    "workstation",
    "internet",
    "security camera",
    "pos",
    "payment",
  ];

  if (includesAny(combinedText, itEmergencyTerms)) {
    score += 12;
    signals.push("+ IT/networking service match detected");
  }

  const websiteTerms = [
    "website",
    "web design",
    "seo",
    "landing page",
    "contact form",
    "domain",
    "hosting",
  ];

  if (includesAny(combinedText, websiteTerms)) {
    score += 10;
    signals.push("+ Website/service-page interest detected");
  }

  const lowIntentTerms = [
    "just curious",
    "just browsing",
    "free",
    "cheap",
    "student",
    "homework",
    "job",
    "career",
    "hiring",
    "sell you",
    "marketing agency",
    "guest post",
    "backlinks",
  ];

  if (includesAny(combinedText, lowIntentTerms)) {
    score -= 25;
    signals.push("- Possible low-intent/spam wording detected");
  }

  const spamTerms = [
    "seo backlinks",
    "casino",
    "crypto recovery",
    "loan offer",
    "viagra",
    "adult",
    "forex",
    "telegram marketing",
  ];

  if (includesAny(combinedText, spamTerms)) {
    score -= 40;
    signals.push("- Strong spam signal detected");
  }

  score = clampNumber(score, 0, 100);

  let quality = "cold";
  let label = "❄️ Cold Lead";
  let color = 3447003;
  let recommendedAction =
    "Reply politely, clarify fit, and do not over-invest time until the lead shows clearer intent.";

  if (score >= 70) {
    quality = "hot";
    label = "🔥 Hot Lead";
    color = 15158332;
    recommendedAction =
      "Respond ASAP. Offer a quick call/booking and focus on the immediate business problem.";
  } else if (score >= 40) {
    quality = "warm";
    label = "🌤️ Warm Lead";
    color = 16753920;
    recommendedAction =
      "Send a helpful reply with 2-3 clarifying questions and offer a discovery call.";
  }

  return {
    score,
    quality,
    label,
    color,
    recommendedAction,
    signals: signals.length ? signals : ["Basic inquiry"],
  };
}

function buildEmailText(lead, assessment) {
  return `NEW OZONY TECH WEBSITE LEAD

Lead Quality: ${assessment.label} (${assessment.score}/100)
Recommended Action: ${assessment.recommendedAction}
Signals: ${assessment.signals.join("; ")}

Source: ${lead.source}
Name: ${lead.name}
Business: ${lead.business}
Email: ${lead.email}
Phone: ${lead.phone}
Service: ${lead.service}
Urgency: ${lead.urgency}
Consent To Contact: ${lead.consentToContact}
Submitted At: ${lead.submittedAt}

Message:
${lead.message}
`;
}

function buildEmailHtml(lead, assessment) {
  return `
    <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
      <h2 style="margin-bottom: 8px;">🚨 New Ozony Tech Website Lead</h2>
      <p style="margin-top: 0; color: #4b5563;">A new lead was submitted from ozony.tech.</p>

      <div style="padding: 14px; background: #fff7ed; border: 1px solid #fed7aa; border-radius: 8px; max-width: 680px; margin-bottom: 18px;">
        <h3 style="margin: 0 0 8px 0;">${escapeHtml(assessment.label)} (${assessment.score}/100)</h3>
        <p style="margin: 0 0 8px 0;"><strong>Recommended Action:</strong> ${escapeHtml(assessment.recommendedAction)}</p>
        <p style="margin: 0;"><strong>Signals:</strong> ${escapeHtml(assessment.signals.join("; "))}</p>
      </div>

      <table style="border-collapse: collapse; width: 100%; max-width: 680px;">
        <tr>
          <td style="padding: 8px; border: 1px solid #e5e7eb; font-weight: bold;">Source</td>
          <td style="padding: 8px; border: 1px solid #e5e7eb;">${escapeHtml(lead.source)}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #e5e7eb; font-weight: bold;">Name</td>
          <td style="padding: 8px; border: 1px solid #e5e7eb;">${escapeHtml(lead.name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #e5e7eb; font-weight: bold;">Business</td>
          <td style="padding: 8px; border: 1px solid #e5e7eb;">${escapeHtml(lead.business)}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #e5e7eb; font-weight: bold;">Email</td>
          <td style="padding: 8px; border: 1px solid #e5e7eb;">
            <a href="mailto:${escapeHtml(lead.email)}">${escapeHtml(lead.email)}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #e5e7eb; font-weight: bold;">Phone</td>
          <td style="padding: 8px; border: 1px solid #e5e7eb;">
            <a href="tel:${escapeHtml(lead.phone)}">${escapeHtml(lead.phone)}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #e5e7eb; font-weight: bold;">Service</td>
          <td style="padding: 8px; border: 1px solid #e5e7eb;">${escapeHtml(lead.service)}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #e5e7eb; font-weight: bold;">Urgency</td>
          <td style="padding: 8px; border: 1px solid #e5e7eb;">${escapeHtml(lead.urgency)}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #e5e7eb; font-weight: bold;">Consent To Contact</td>
          <td style="padding: 8px; border: 1px solid #e5e7eb;">${escapeHtml(lead.consentToContact)}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #e5e7eb; font-weight: bold;">Submitted At</td>
          <td style="padding: 8px; border: 1px solid #e5e7eb;">${escapeHtml(lead.submittedAt)}</td>
        </tr>
      </table>

      <h3 style="margin-top: 24px;">Message</h3>
      <div style="white-space: pre-wrap; padding: 14px; background: #f3f4f6; border-radius: 8px; max-width: 680px;">
${escapeHtml(lead.message)}
      </div>
    </div>
  `;
}

function buildLeadAutoReplyText(lead) {
  return `Hi ${lead.name},

Thank you for reaching out to Ozony Tech. We received your request and will review the details you sent over.

Here is what we received:

Service: ${lead.service}
Urgency: ${lead.urgency}

Message:
${lead.message}

A member of the Ozony Tech team will follow up with you as soon as possible. If this is urgent, you can reply directly to this email with any extra details that may help us understand the issue.

Thank you,
Ozony Tech`;
}

function buildLeadAutoReplyHtml(lead) {
  return `
    <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
      <h2 style="margin-bottom: 8px;">We received your Ozony Tech request</h2>

      <p>Hi ${escapeHtml(lead.name)},</p>

      <p>
        Thank you for reaching out to Ozony Tech. We received your request and will review the details you sent over.
      </p>

      <div style="padding: 14px; background: #f3f4f6; border-radius: 8px; max-width: 680px;">
        <p style="margin: 0 0 8px 0;"><strong>Service:</strong> ${escapeHtml(lead.service)}</p>
        <p style="margin: 0;"><strong>Urgency:</strong> ${escapeHtml(lead.urgency)}</p>
      </div>

      <h3 style="margin-top: 24px;">Your Message</h3>
      <div style="white-space: pre-wrap; padding: 14px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; max-width: 680px;">
${escapeHtml(lead.message)}
      </div>

      <p>
        A member of the Ozony Tech team will follow up with you as soon as possible.
        If this is urgent, you can reply directly to this email with any extra details that may help us understand the issue.
      </p>

      <p>
        Thank you,<br />
        Ozony Tech
      </p>
    </div>
  `;
}

function buildAryaDraftPrompt(lead, assessment) {
  return `<@${ARYA_DISCORD_USER_ID}> Draft a short professional reply for this Ozony Tech lead.

Lead Quality:
${assessment.label} (${assessment.score}/100)

Recommended Action:
${assessment.recommendedAction}

Scoring Signals:
${assessment.signals.join("; ")}

Lead:
Name: ${lead.name}
Business: ${lead.business}
Email: ${lead.email}
Phone: ${lead.phone}
Service: ${lead.service}
Urgency: ${lead.urgency}
Consent To Contact: ${lead.consentToContact}
Message: ${clean(lead.message, "Not provided", 650)}

Rules:
- Draft only.
- Do not claim the message was sent.
- Do not quote pricing.
- Do not promise same-day service.
- Do not ask for passwords.
- Ask 2-4 useful follow-up questions max.
- Keep it professional, calm, and helpful.
- If the lead is hot, make the reply direct and action-oriented.
- If the lead is warm, ask clarifying questions and offer a short consultation.
- If the lead is cold, keep the reply polite but do not overcommit.
- Do not mention Eazy in the signature.
- Do not sign as Eazy.
- Do not sign as Arya.
- Do not include any personal name in the signature.
- The reply must end with exactly these two lines and nothing after them:

Thank you,
Ozony Tech`;
}

async function sendDiscordWebhook(env, payload, label = "Discord webhook") {
  const response = await fetch(env.DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const body = await response.text();

    console.error(`${label} failed`, {
      status: response.status,
      body: clean(body, "No body", 1500),
    });

    return {
      ok: false,
      status: response.status,
      body,
    };
  }

  return {
    ok: true,
    status: response.status,
    body: "",
  };
}

async function sendDiscordAlert(env, lead, assessment) {
  const discordPayload = {
    username: "Ozony Lead Bot",
    content: discordContent(buildAryaDraftPrompt(lead, assessment)),
    allowed_mentions: {
      users: [ARYA_DISCORD_USER_ID],
      parse: [],
    },
    embeds: [
      {
        title: `🚨 New Website Lead — ${assessment.label}`,
        color: assessment.color,
        fields: [
          discordField(
            "Lead Quality",
            `${assessment.label} (${assessment.score}/100)`,
            true,
          ),
          discordField(
            "Recommended Action",
            assessment.recommendedAction,
            false,
            700,
          ),
          discordField("Signals", assessment.signals.join("\n"), false, 700),
          discordField("Source", lead.source, true, DISCORD_SHORT_FIELD_LIMIT),
          discordField("Name", lead.name, true, DISCORD_SHORT_FIELD_LIMIT),
          discordField(
            "Business",
            lead.business,
            true,
            DISCORD_SHORT_FIELD_LIMIT,
          ),
          discordField("Email", lead.email, true, DISCORD_SHORT_FIELD_LIMIT),
          discordField("Phone", lead.phone, true, DISCORD_SHORT_FIELD_LIMIT),
          discordField(
            "Service",
            lead.service,
            true,
            DISCORD_SHORT_FIELD_LIMIT,
          ),
          discordField(
            "Urgency",
            lead.urgency,
            true,
            DISCORD_SHORT_FIELD_LIMIT,
          ),
          discordField(
            "Consent To Contact",
            lead.consentToContact,
            true,
            DISCORD_SHORT_FIELD_LIMIT,
          ),
          discordField("Message", lead.message, false, 900),
        ],
        footer: {
          text: "ozony.tech contact form",
        },
        timestamp: lead.submittedAt,
      },
    ],
  };

  return sendDiscordWebhook(env, discordPayload, "Website Discord alert");
}

async function sendLeadEmail(env, lead, assessment) {
  const subjectService =
    lead.service && lead.service !== "Not provided"
      ? lead.service
      : "Website Inquiry";

  const emailPayload = {
    from: LEAD_EMAIL_FROM,
    to: [LEAD_EMAIL_TO],
    subject: `New Ozony Tech Lead: ${assessment.quality.toUpperCase()} (${assessment.score}/100) - ${subjectService}`,
    html: buildEmailHtml(lead, assessment),
    text: buildEmailText(lead, assessment),
    reply_to: lead.email,
  };

  return fetch(RESEND_EMAIL_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailPayload),
  });
}

async function sendLeadAutoReply(env, lead) {
  const emailPayload = {
    from: LEAD_AUTO_REPLY_FROM,
    to: [lead.email],
    subject: "We received your Ozony Tech request",
    html: buildLeadAutoReplyHtml(lead),
    text: buildLeadAutoReplyText(lead),
    reply_to: LEAD_EMAIL_TO,
  };

  return fetch(RESEND_EMAIL_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailPayload),
  });
}

function getDataCollectionResult(data, identifier) {
  const results = data?.analysis?.data_collection_results;

  if (!results) return null;

  if (Array.isArray(results)) {
    return (
      results.find((item) => {
        return (
          item?.identifier === identifier ||
          item?.id === identifier ||
          item?.key === identifier ||
          item?.name === identifier
        );
      }) || null
    );
  }

  return results[identifier] ?? null;
}

function extractResultValue(result) {
  if (result === null || result === undefined) return null;

  if (typeof result !== "object") return result;

  const value =
    result.value ??
    result.result ??
    result.answer ??
    result.text ??
    result.string ??
    result.extracted_value ??
    result.extractedValue ??
    result.data ??
    null;

  if (value && typeof value === "object") {
    return extractResultValue(value);
  }

  return value;
}

function extractDataValue(
  data,
  identifier,
  fallback = "Not provided",
  maxLength = 1000,
) {
  const result = getDataCollectionResult(data, identifier);
  const value = extractResultValue(result);

  return clean(value, fallback, maxLength);
}

function extractCallerIdentifier(data) {
  const metadata = data?.metadata || {};
  const phoneCall = metadata?.phone_call || {};
  const twilioBody = metadata?.body || metadata?.twilio?.body || {};

  const candidates = [
    data?.user_id,
    metadata?.user_id,
    metadata?.caller_id,
    metadata?.phone_number,
    metadata?.from_number,
    metadata?.from,
    metadata?.to,
    phoneCall?.external_number,
    phoneCall?.caller_id,
    phoneCall?.from,
    phoneCall?.to,
    twilioBody?.From,
    twilioBody?.Caller,
    twilioBody?.To,
    twilioBody?.Called,
  ];

  const found = candidates.find((value) => {
    return value !== null && value !== undefined && String(value).trim() !== "";
  });

  return clean(found, "Not provided", 250);
}

function buildPhoneLeadFromElevenLabsEvent(event) {
  const data = event?.data || {};
  const analysis = data?.analysis || {};
  const metadata = data?.metadata || {};

  const fullName = extractDataValue(data, "full_name", "Not provided", 250);
  const callbackNumber = extractDataValue(
    data,
    "callback_number",
    "Not provided",
    250,
  );
  const callerIdentifier = extractCallerIdentifier(data);

  const summary =
    extractDataValue(data, "issue_summary", "", 750) ||
    clean(analysis?.transcript_summary, "Not provided", 750);

  return {
    source: "ElevenLabs Phone Call",
    name: fullName,
    business: extractDataValue(data, "business_name", "Not provided", 250),
    email: "Not provided",
    phone: hasProvided(callbackNumber) ? callbackNumber : callerIdentifier,
    callerId: callerIdentifier,
    service: extractDataValue(data, "service_needed", "Not provided", 250),
    urgency: extractDataValue(data, "urgency_level", "unknown", 250),
    consentToContact: "Phone call",
    message: summary,
    submittedAt: new Date().toISOString(),

    conversationId: clean(data?.conversation_id, "Not provided", 250),
    agentId: clean(data?.agent_id, "Not provided", 250),
    agentName: clean(data?.agent_name, "Ozony Tech Lead Assistant", 250),
    conversationStatus: clean(data?.status, "Not provided", 250),
    callSuccessful: clean(analysis?.call_successful, "Not provided", 250),
    transcriptSummary: clean(analysis?.transcript_summary, "Not provided", 750),
    preferredFollowUpTime: extractDataValue(
      data,
      "preferred_follow_up_time",
      "Not provided",
      250,
    ),
    callDuration: clean(metadata?.call_duration_secs, "Not provided", 50),
  };
}

async function sendElevenLabsCallDiscordAlert(env, callLead, assessment) {
  const discordPayload = {
    username: "Ozony Lead Bot",
    content: `<@${ARYA_DISCORD_USER_ID}> New Ozony Tech phone lead received. Draft a short professional follow-up message based on the summary below.

Rules:
- Draft only.
- Do not claim the message was sent.
- Do not quote pricing.
- Do not promise same-day service.
- Do not ask for passwords.
- End with:

Thank you,
Ozony Tech`,
    allowed_mentions: {
      users: [ARYA_DISCORD_USER_ID],
      parse: [],
    },
    embeds: [
      {
        title: `📞 New Phone Lead — ${assessment.label}`,
        color: assessment.color,
        fields: [
          discordField(
            "Lead Quality",
            `${assessment.label} (${assessment.score}/100)`,
            true,
            250,
          ),
          discordField(
            "Recommended Action",
            assessment.recommendedAction,
            false,
            500,
          ),
          discordField("Name", callLead.name, true, 250),
          discordField("Callback Number", callLead.phone, true, 250),
          discordField("Business", callLead.business, true, 250),
          discordField("Service Needed", callLead.service, true, 250),
          discordField("Urgency", callLead.urgency, true, 250),
          discordField(
            "Preferred Follow-Up",
            callLead.preferredFollowUpTime,
            true,
            250,
          ),
          discordField("Call Duration", callLead.callDuration, true, 250),
          discordField("Issue Summary", callLead.message, false, 750),
          discordField("Conversation ID", callLead.conversationId, false, 250),
        ],
        footer: {
          text: "ElevenLabs post-call webhook",
        },
        timestamp: callLead.submittedAt,
      },
    ],
  };

  return sendDiscordWebhook(
    env,
    discordPayload,
    "ElevenLabs call Discord alert",
  );
}

async function sendElevenLabsFailureDiscordAlert(env, event) {
  const data = event?.data || {};
  const metadata = data?.metadata || {};
  const metadataBody = metadata?.body || {};

  const discordPayload = {
    username: "Ozony Lead Bot",
    embeds: [
      {
        title: "⚠️ ElevenLabs Call Failed",
        color: 16753920,
        fields: [
          discordField(
            "Failure Reason",
            data?.failure_reason || "Not provided",
            true,
            700,
          ),
          discordField(
            "Conversation ID",
            data?.conversation_id || "Not provided",
            true,
            DISCORD_SHORT_FIELD_LIMIT,
          ),
          discordField(
            "Agent ID",
            data?.agent_id || "Not provided",
            true,
            DISCORD_SHORT_FIELD_LIMIT,
          ),
          discordField(
            "Provider",
            metadata?.type || "Not provided",
            true,
            DISCORD_SHORT_FIELD_LIMIT,
          ),
          discordField(
            "Call Status",
            metadataBody?.CallStatus ||
              metadataBody?.call_status ||
              "Not provided",
            true,
            DISCORD_SHORT_FIELD_LIMIT,
          ),
          discordField(
            "From",
            metadataBody?.From || metadataBody?.from_number || "Not provided",
            true,
            DISCORD_SHORT_FIELD_LIMIT,
          ),
          discordField(
            "To",
            metadataBody?.To || metadataBody?.to_number || "Not provided",
            true,
            DISCORD_SHORT_FIELD_LIMIT,
          ),
        ],
        footer: {
          text: "ElevenLabs call initiation failure",
        },
        timestamp: new Date().toISOString(),
      },
    ],
  };

  return sendDiscordWebhook(
    env,
    discordPayload,
    "ElevenLabs failure Discord alert",
  );
}

async function handleElevenLabsWebhook(request, env, corsHeaders) {
  try {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    if (request.method !== "POST") {
      return jsonResponse(
        {
          success: false,
          error: "Method not allowed.",
        },
        405,
        corsHeaders,
      );
    }

    if (!env.DISCORD_WEBHOOK_URL) {
      return jsonResponse(
        {
          success: false,
          error: "Discord webhook is not configured.",
        },
        500,
        corsHeaders,
      );
    }

    if (!env.ELEVENLABS_WEBHOOK_TOKEN) {
      return jsonResponse(
        {
          success: false,
          error: "ElevenLabs webhook token is not configured.",
        },
        500,
        corsHeaders,
      );
    }

    const url = new URL(request.url);

    const suppliedTokenRaw =
      url.searchParams.get("token") ||
      request.headers.get("X-Ozony-Webhook-Token") ||
      request.headers.get("x-ozony-webhook-token") ||
      "";

    const suppliedToken = String(suppliedTokenRaw).trim();
    const envToken = String(env.ELEVENLABS_WEBHOOK_TOKEN || "").trim();

    if (!suppliedToken || suppliedToken !== envToken) {
      console.warn("Unauthorized ElevenLabs webhook request blocked.");

      return jsonResponse(
        {
          success: false,
          error: "Unauthorized webhook request.",
        },
        401,
        corsHeaders,
      );
    }

    let rawBody = "";

    try {
      rawBody = await request.text();
    } catch {
      return jsonResponse(
        {
          success: false,
          error: "Unable to read webhook body.",
        },
        400,
        corsHeaders,
      );
    }

    let event;

    try {
      event = JSON.parse(rawBody);
    } catch {
      return jsonResponse(
        {
          success: false,
          error: "Invalid webhook JSON.",
        },
        400,
        corsHeaders,
      );
    }

    console.log("ElevenLabs webhook received", {
      type: event?.type || "unknown",
      bodyLength: rawBody.length,
      conversationId: event?.data?.conversation_id || "not provided",
    });

    if (event?.type === "post_call_audio") {
      return jsonResponse(
        {
          success: true,
          message:
            "Audio webhook received and ignored. Transcript webhook is used for Discord summaries.",
        },
        200,
        corsHeaders,
      );
    }

    if (event?.type === "call_initiation_failure") {
      const discordResult = await sendElevenLabsFailureDiscordAlert(env, event);

      if (!discordResult.ok) {
        return jsonResponse(
          {
            success: false,
            error: "Failed to send ElevenLabs failure alert to Discord.",
            discordStatus: discordResult.status,
            details: clean(
              discordResult.body,
              "No Discord response body",
              1500,
            ),
          },
          500,
          corsHeaders,
        );
      }

      return jsonResponse(
        {
          success: true,
          message: "ElevenLabs call failure alert sent to Discord.",
          discordSent: true,
        },
        200,
        corsHeaders,
      );
    }

    if (event?.type !== "post_call_transcription") {
      console.log("ElevenLabs webhook ignored", {
        receivedType: event?.type || "unknown",
      });

      return jsonResponse(
        {
          success: true,
          message: "Webhook received but ignored.",
          receivedType: event?.type || "unknown",
        },
        200,
        corsHeaders,
      );
    }

    const callLead = buildPhoneLeadFromElevenLabsEvent(event);
    const assessment = scoreLead(callLead);

    console.log("ElevenLabs call lead extracted", {
      conversationId: callLead.conversationId,
      name: callLead.name,
      business: callLead.business,
      phone: callLead.phone,
      service: callLead.service,
      urgency: callLead.urgency,
      score: assessment.score,
      quality: assessment.quality,
    });

    const discordResult = await sendElevenLabsCallDiscordAlert(
      env,
      callLead,
      assessment,
    );

    if (!discordResult.ok) {
      return jsonResponse(
        {
          success: false,
          error: "Failed to send ElevenLabs call summary to Discord.",
          discordStatus: discordResult.status,
          details: clean(discordResult.body, "No Discord response body", 1500),
        },
        500,
        corsHeaders,
      );
    }

    return jsonResponse(
      {
        success: true,
        message: "ElevenLabs call summary sent to Discord.",
        discordSent: true,
        leadQuality: assessment.quality,
        leadScore: assessment.score,
        conversationId: callLead.conversationId,
      },
      200,
      corsHeaders,
    );
  } catch (error) {
    console.error("ElevenLabs webhook handler crashed", {
      message: error?.message || String(error),
      stack: clean(error?.stack, "No stack", 2000),
    });

    return jsonResponse(
      {
        success: false,
        error: "ElevenLabs webhook handler crashed.",
        details: error?.message || String(error),
      },
      500,
      corsHeaders,
    );
  }
}

async function handleWebsiteLeadRequest(request, env, corsHeaders) {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  if (request.method !== "POST") {
    return jsonResponse(
      {
        success: false,
        error: "Method not allowed",
      },
      405,
      corsHeaders,
    );
  }

  try {
    let body;

    try {
      body = await request.json();
    } catch {
      return jsonResponse(
        {
          success: false,
          error: "Invalid JSON.",
        },
        400,
        corsHeaders,
      );
    }

    const { website } = body;

    // Honeypot spam trap. Real users should never fill this hidden field.
    if (website) {
      return jsonResponse(
        {
          success: true,
          message: "Lead sent successfully.",
          discordSent: false,
          emailSent: false,
          leadAutoReplySent: false,
        },
        200,
        corsHeaders,
      );
    }

    if (!body.name || !body.email || !body.message) {
      return jsonResponse(
        {
          success: false,
          error: "Name, email, and message are required.",
        },
        400,
        corsHeaders,
      );
    }

    if (!isValidEmail(body.email)) {
      return jsonResponse(
        {
          success: false,
          error: "Invalid email address.",
        },
        400,
        corsHeaders,
      );
    }

    if (!env.DISCORD_WEBHOOK_URL) {
      return jsonResponse(
        {
          success: false,
          error: "Discord webhook is not configured.",
        },
        500,
        corsHeaders,
      );
    }

    if (!env.RESEND_API_KEY) {
      return jsonResponse(
        {
          success: false,
          error: "Resend API key is not configured.",
        },
        500,
        corsHeaders,
      );
    }

    const lead = buildLeadData(body);
    const assessment = scoreLead(lead);

    const discordResult = await sendDiscordAlert(env, lead, assessment);

    if (!discordResult.ok) {
      return jsonResponse(
        {
          success: false,
          error: "Failed to send Discord alert.",
          discordStatus: discordResult.status,
          details: clean(discordResult.body, "No Discord response body", 1500),
        },
        500,
        corsHeaders,
      );
    }

    const emailResponse = await sendLeadEmail(env, lead, assessment);

    if (!emailResponse.ok) {
      const emailErrorText = await emailResponse.text();

      return jsonResponse(
        {
          success: true,
          message: "Lead sent to Discord, but internal email failed.",
          discordSent: true,
          emailSent: false,
          leadAutoReplySent: false,
          aryaMentioned: true,
          leadQuality: assessment.quality,
          leadScore: assessment.score,
          emailError: emailErrorText,
        },
        200,
        corsHeaders,
      );
    }

    const autoReplyResponse = await sendLeadAutoReply(env, lead);

    if (!autoReplyResponse.ok) {
      const autoReplyErrorText = await autoReplyResponse.text();

      return jsonResponse(
        {
          success: true,
          message:
            "Lead sent to Discord and internal email, but lead auto-reply failed.",
          discordSent: true,
          emailSent: true,
          leadAutoReplySent: false,
          aryaMentioned: true,
          leadQuality: assessment.quality,
          leadScore: assessment.score,
          autoReplyError: autoReplyErrorText,
        },
        200,
        corsHeaders,
      );
    }

    return jsonResponse(
      {
        success: true,
        message: "Lead sent successfully.",
        discordSent: true,
        emailSent: true,
        leadAutoReplySent: true,
        aryaMentioned: true,
        leadQuality: assessment.quality,
        leadScore: assessment.score,
      },
      200,
      corsHeaders,
    );
  } catch (error) {
    console.error("Website lead handler crashed", {
      message: error?.message || String(error),
      stack: clean(error?.stack, "No stack", 2000),
    });

    return jsonResponse(
      {
        success: false,
        error: "Something went wrong.",
      },
      500,
      corsHeaders,
    );
  }
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const corsHeaders = getCorsHeaders(origin);
    const url = new URL(request.url);

    // Webhooks are server-to-server.
    // Do not block them with browser CORS origin checks.
    // Security is handled by ELEVENLABS_WEBHOOK_TOKEN inside handleElevenLabsWebhook().
    if (url.pathname === ELEVENLABS_WEBHOOK_PATH) {
      return handleElevenLabsWebhook(request, env, corsHeaders);
    }

    // Website/contact form traffic still uses origin protection.
    if (!isAllowedOrigin(origin)) {
      return jsonResponse(
        {
          success: false,
          error: `Origin not allowed: ${origin}`,
        },
        403,
        corsHeaders,
      );
    }

    return handleWebsiteLeadRequest(request, env, corsHeaders);
  },
};
