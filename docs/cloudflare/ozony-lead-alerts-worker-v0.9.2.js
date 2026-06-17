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
    "Access-Control-Allow-Headers": "Content-Type, Accept",
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

  return String(value).trim().slice(0, maxLength);
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
  return value && value !== "Not provided";
}

function includesAny(text, terms) {
  const normalized = String(text || "").toLowerCase();
  return terms.some((term) => normalized.includes(term));
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

  if (lead.consentToContact === "Yes") {
    score += 10;
    signals.push("+ Contact consent provided");
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
    signals: signals.length ? signals : ["Basic website inquiry"],
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

function discordField(name, value, inline = true) {
  return {
    name,
    value: clean(value, "Not provided", 1000),
    inline,
  };
}

async function sendDiscordAlert(env, lead, assessment) {
  const discordPayload = {
    username: "Ozony Lead Bot",
    content: buildAryaDraftPrompt(lead, assessment),
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
          ),
          discordField("Signals", assessment.signals.join("\n"), false),
          discordField("Source", lead.source, true),
          discordField("Name", lead.name, true),
          discordField("Business", lead.business, true),
          discordField("Email", lead.email, true),
          discordField("Phone", lead.phone, true),
          discordField("Service", lead.service, true),
          discordField("Urgency", lead.urgency, true),
          discordField("Consent To Contact", lead.consentToContact, true),
          discordField("Message", lead.message, false),
        ],
        footer: {
          text: "ozony.tech contact form",
        },
        timestamp: lead.submittedAt,
      },
    ],
  };

  return fetch(env.DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(discordPayload),
  });
}

async function sendLeadEmail(env, lead, assessment) {
  const subjectService =
    lead.service && lead.service !== "Not provided"
      ? lead.service
      : "Website Inquiry";

  const emailPayload = {
    from: LEAD_EMAIL_FROM,
    to: [LEAD_EMAIL_TO],
    subject: `New Ozony Tech Lead: ${assessment.label} - ${subjectService}`,
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

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const corsHeaders = getCorsHeaders(origin);

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

      const discordResponse = await sendDiscordAlert(env, lead, assessment);

      if (!discordResponse.ok) {
        const discordErrorText = await discordResponse.text();

        return jsonResponse(
          {
            success: false,
            error: "Failed to send Discord alert.",
            details: discordErrorText,
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
      return jsonResponse(
        {
          success: false,
          error: "Something went wrong.",
        },
        500,
        corsHeaders,
      );
    }
  },
};
