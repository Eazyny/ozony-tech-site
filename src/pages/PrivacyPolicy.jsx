import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Bot,
  CheckCircle,
  Clock,
  Database,
  Eye,
  FileText,
  Lock,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Trash2,
  UserCheck,
} from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import StarfieldBackground from '@/components/ui/starfield-background';

const SITE_URL = 'https://ozony.tech';
const PAGE_URL = `${SITE_URL}/privacy-policy`;
const OG_IMAGE = `${SITE_URL}/images/ozony-og-preview.png`;

const lastUpdated = 'July 3, 2026';

const quickPoints = [
  {
    icon: Database,
    title: 'We collect only what helps us respond.',
    text: 'Most information comes from forms, emails, calls, messages, service requests, and business consultations.',
  },
  {
    icon: Bot,
    title: 'AI workflows support intake and follow-up.',
    text: 'AI tools may help summarize inquiries, draft responses, route alerts, and organize lead details.',
  },
  {
    icon: Lock,
    title: 'We use reasonable safeguards.',
    text: 'We work to protect personal information through access controls, secure tools, and limited internal use.',
  },
  {
    icon: UserCheck,
    title: 'You can contact us about your data.',
    text: 'You may request access, correction, deletion, or opt out of non-essential communications.',
  },
];

const sections = [
  {
    id: 'information-we-collect',
    icon: Database,
    title: '1. Information We Collect',
    body: [
      'Ozony Tech collects personal information that you choose to provide when you contact us, request a quote, submit a form, schedule a consultation, purchase a service, communicate with us, or use one of our lead response workflows.',
      'This may include your name, business name, email address, phone number, service address or general location, company details, project details, support request details, preferred contact method, and any information you include in messages, forms, calls, or emails.',
      'For technical support, networking, website, automation, or AI lead response services, we may also collect information about your business systems, devices, website forms, workflow needs, communication channels, and service history when needed to provide the service.',
    ],
    bullets: [
      'Contact details such as name, email, and phone number',
      'Business information such as company name, service needs, and project details',
      'Inquiry details submitted through website forms or lead forms',
      'Communication records such as emails, call notes, SMS replies, or support messages',
      'Technical details needed to troubleshoot, configure, or support a service',
      'Payment, billing, or transaction details when you purchase a service',
    ],
  },
  {
    id: 'how-we-use-information',
    icon: FileText,
    title: '2. How We Use Personal Information',
    body: [
      'We use personal information to respond to inquiries, provide quotes, deliver services, support customers, improve our workflows, protect our business, and communicate about active or requested services.',
      'We may also use information to prepare internal summaries, prioritize urgent requests, troubleshoot technical issues, schedule appointments, send follow-ups, and maintain records related to services we provide.',
    ],
    bullets: [
      'Respond to questions, quote requests, and service inquiries',
      'Provide IT, networking, website, automation, and AI lead response services',
      'Send confirmations, updates, reminders, and follow-up messages',
      'Create internal notes, lead summaries, and service records',
      'Route urgent inquiries to the right person or communication channel',
      'Improve our website, intake process, and customer support workflows',
      'Prevent fraud, abuse, unauthorized access, or misuse of our systems',
      'Comply with legal, tax, security, or business record requirements',
    ],
  },
  {
    id: 'ai-lead-response-agent',
    icon: Bot,
    title: '3. AI Lead Response Agent and Automation Workflows',
    body: [
      'Ozony Tech may use AI and automation tools to support lead intake, response preparation, internal alerts, and customer follow-up. These systems are designed to help businesses respond faster and organize inquiries more clearly.',
      'When someone submits a website form or lead request, the AI Lead Response Agent may process the submitted information to generate a confirmation message, draft a follow-up response, ask approved qualifying questions, create an internal lead summary, and notify the appropriate team member.',
      'AI tools are used to support workflow efficiency. They do not replace human judgment for important business decisions, pricing decisions, or service commitments unless specifically reviewed and approved by a person.',
    ],
    bullets: [
      'Capture website form submissions and lead details',
      'Generate internal summaries for review',
      'Draft suggested replies or follow-up messages',
      'Ask approved qualifying questions when appropriate',
      'Send team alerts through approved channels',
      'Help organize service requests and follow-up tasks',
    ],
  },
  {
    id: 'phone-sms-email',
    icon: Phone,
    title: '4. Phone, SMS, and Email Communications',
    body: [
      'When you provide your phone number, email address, or other contact information, you authorize Ozony Tech to contact you about your inquiry, requested service, consultation, quote, project, account, or support request.',
      'Depending on the workflow, we may contact you by phone, email, SMS/text message, or another communication channel you provide. Message and data rates may apply for SMS messages.',
      'You can opt out of non-essential SMS messages by replying STOP, asking us directly, or contacting us at contact@ozony.tech. Service-related messages may still be necessary when they are required to complete an active request or provide a requested service.',
    ],
    bullets: [
      'We may send confirmation messages after you submit a form',
      'We may follow up about quotes, consultations, or active service requests',
      'We may send internal alerts to help our team respond faster',
      'You can request that we stop non-essential marketing or follow-up messages',
    ],
  },
  {
    id: 'sharing-information',
    icon: ShieldCheck,
    title: '5. How We Share Information',
    body: [
      'Ozony Tech does not sell personal information. We may share personal information with trusted service providers and tools that help us operate the business, deliver services, communicate with customers, host systems, process payments, send emails, send SMS messages, manage workflows, or protect our systems.',
      'We may also share information when required by law, to protect our rights, to prevent fraud or security issues, or as part of a business transfer such as a merger, acquisition, restructuring, or sale of assets.',
    ],
    bullets: [
      'Website hosting and infrastructure providers',
      'Email, phone, SMS, and messaging providers',
      'Payment processors and invoicing tools',
      'Automation, AI, CRM, or lead management tools',
      'Security, monitoring, and troubleshooting tools',
      'Professional advisors such as accountants, attorneys, or consultants when needed',
    ],
  },
  {
    id: 'client-data',
    icon: UserCheck,
    title: '6. Client Data and Customer Workflows',
    body: [
      'When Ozony Tech builds, manages, or supports a workflow for a client, information submitted through that client’s forms, systems, or communication channels may be processed on behalf of that client.',
      'In those cases, Ozony Tech uses the information to provide the requested service, maintain the workflow, troubleshoot issues, and support the client’s business process. The client may also have its own privacy policy or legal obligations that apply to how they collect and use data.',
    ],
    bullets: [
      'We process client workflow data to provide the requested service',
      'We limit access to people and tools that need it for the workflow',
      'We do not use client lead data for unrelated advertising or resale',
      'We may retain limited records needed for support, security, billing, or legal reasons',
    ],
  },
  {
    id: 'security',
    icon: Lock,
    title: '7. How We Protect Information',
    body: [
      'Ozony Tech uses reasonable administrative, technical, and organizational safeguards designed to protect personal information from unauthorized access, misuse, loss, disclosure, alteration, or destruction.',
      'No website, network, software tool, or online service can be guaranteed to be completely secure. However, we work to limit access, use reputable service providers, maintain safer workflows, and protect information based on the sensitivity of the data and the nature of the service.',
    ],
    bullets: [
      'Limiting access to information based on business need',
      'Using trusted service providers and secure platforms',
      'Maintaining account security and access controls',
      'Reducing unnecessary collection where possible',
      'Reviewing workflows for security and privacy risks',
    ],
  },
  {
    id: 'retention',
    icon: Clock,
    title: '8. How Long We Keep Information',
    body: [
      'We keep personal information only as long as reasonably necessary for the purposes described in this policy, including providing services, responding to inquiries, maintaining business records, resolving disputes, improving workflows, protecting security, and meeting legal or accounting obligations.',
      'When information is no longer needed, we work to delete, de-identify, archive, or securely dispose of it in a reasonable manner.',
    ],
    bullets: [
      'Lead and inquiry records may be kept for follow-up and business history',
      'Service records may be kept for support, warranty, troubleshooting, and documentation',
      'Billing records may be kept for tax, accounting, and legal requirements',
      'Old or unnecessary records may be deleted or archived when no longer needed',
    ],
  },
  {
    id: 'cookies-analytics',
    icon: Eye,
    title: '9. Website Data, Cookies, and Analytics',
    body: [
      'Our website may collect basic technical information such as browser type, device type, pages visited, approximate location, referring pages, and interactions with the website. This information helps us understand site performance, security, and how visitors use the website.',
      'We may use cookies, local storage, analytics tools, security tools, or similar technologies. You can adjust browser settings to block or delete cookies, but some website features may not work as expected.',
    ],
    bullets: [
      'Understand website traffic and performance',
      'Improve page layout, services, and content',
      'Detect errors, abuse, spam, or security issues',
      'Support basic website functionality',
    ],
  },
  {
    id: 'your-choices',
    icon: CheckCircle,
    title: '10. Your Choices and Privacy Requests',
    body: [
      'You may contact Ozony Tech to request access to personal information we maintain about you, ask us to correct inaccurate information, request deletion, or ask us to stop certain communications.',
      'Depending on your location, you may have additional privacy rights under applicable law. We may need to verify your identity before completing certain privacy requests.',
    ],
    bullets: [
      'Request access to your personal information',
      'Ask us to correct or update information',
      'Ask us to delete information when legally and operationally possible',
      'Opt out of non-essential marketing or follow-up messages',
      'Reply STOP to opt out of SMS messages when available',
    ],
  },
  {
    id: 'children',
    icon: ShieldCheck,
    title: '11. Children’s Privacy',
    body: [
      'Ozony Tech services are intended for businesses and adults. We do not knowingly collect personal information from children under 13.',
      'If you believe a child has provided personal information to us, contact us and we will review the request and take appropriate action.',
    ],
    bullets: [],
  },
  {
    id: 'updates',
    icon: Trash2,
    title: '12. Updates to This Privacy Policy',
    body: [
      'We may update this Privacy Policy from time to time to reflect changes in our services, workflows, legal requirements, or business practices.',
      'When we update the policy, we will revise the “Last updated” date at the top of this page. Your continued use of the website or services after an update means the updated policy applies moving forward.',
    ],
    bullets: [],
  },
];

const PrivacyPolicy = () => {
  const privacySchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy',
    description:
      'Privacy Policy for Ozony Tech explaining how personal information is collected, used, shared, protected, and retained.',
    url: PAGE_URL,
    publisher: {
      '@type': 'ProfessionalService',
      name: 'Ozony Tech',
      url: SITE_URL,
      email: 'contact@ozony.tech',
      telephone: '+1-347-653-7655',
      image: OG_IMAGE,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Privacy Policy',
        item: PAGE_URL,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Ozony Tech</title>
        <meta
          name="description"
          content="Read the Ozony Tech Privacy Policy to learn how we collect, use, protect, and manage personal information for website inquiries, services, and AI lead response workflows."
        />
        <meta
          name="robots"
          content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="Ozony Tech" />
        <meta property="og:title" content="Privacy Policy | Ozony Tech" />
        <meta
          property="og:description"
          content="How Ozony Tech collects, uses, protects, and manages personal information."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Ozony Tech" />
        <meta
          name="twitter:description"
          content="How Ozony Tech collects, uses, protects, and manages personal information."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">
          {JSON.stringify(privacySchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen app-bg text-white">
        <Header />

        <main>
          <section className="relative overflow-hidden px-4 pb-20 pt-32 md:px-6 lg:px-8">
            <StarfieldBackground />

            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-10 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />
              <div className="absolute right-0 top-1/3 h-[380px] w-[380px] rounded-full bg-cyan-400/10 blur-[120px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto max-w-5xl text-center"
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
                  <Sparkles className="h-4 w-4" />
                  Privacy Notice
                </div>

                <h1 className="mx-auto max-w-5xl text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
                  Privacy Policy
                </h1>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70 md:text-xl">
                  This Privacy Policy explains how Ozony Tech collects, uses,
                  shares, protects, and manages personal information when you
                  visit our website, contact us, request services, or use our
                  lead response workflows.
                </p>

                <div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-blue-300/15 bg-blue-500/10 p-5 text-center backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.18em] text-blue-200/80">
                    Last updated
                  </p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    {lastUpdated}
                  </p>
                </div>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
                  <Button
                    asChild
                    size="lg"
                    className="h-14 rounded-xl border border-blue-300/30 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 text-base font-bold text-white shadow-[0_14px_45px_rgba(37,99,235,0.28)] transition-shadow hover:shadow-[0_18px_55px_rgba(37,99,235,0.38)]"
                  >
                    <a href="#privacy-details">Read the Policy</a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-14 border-blue-400/30 bg-transparent px-8 text-base font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-blue-500/10"
                  >
                    <Link to="/contact">Contact Ozony Tech</Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
              >
                {quickPoints.map((point) => {
                  const Icon = point.icon;

                  return (
                    <div
                      key={point.title}
                      className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur transition-colors duration-300 hover:border-blue-400/35 hover:bg-white/[0.07]"
                    >
                      <Icon className="mx-auto mb-5 h-6 w-6 text-blue-300" />
                      <h2 className="text-lg font-semibold text-white">
                        {point.title}
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-white/65">
                        {point.text}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </section>

          <section
            id="privacy-details"
            className="border-t border-slate-700/50 bg-slate-800/30 px-4 py-20 md:px-6 lg:px-8"
          >
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
              <aside className="lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-6 backdrop-blur">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
                    On this page
                  </h2>

                  <nav className="mt-5 space-y-3">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block rounded-xl border border-transparent px-3 py-2 text-sm leading-6 text-white/60 transition-colors hover:border-blue-400/20 hover:bg-blue-500/10 hover:text-white"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              <div className="space-y-6">
                {sections.map((section, index) => {
                  const Icon = section.icon;

                  return (
                    <motion.article
                      key={section.id}
                      id={section.id}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.16 }}
                      transition={{
                        duration: 0.58,
                        delay: Math.min(index * 0.025, 0.12),
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="scroll-mt-28 rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_0_40px_rgba(37,99,235,0.05)] backdrop-blur md:p-8"
                    >
                      <div className="flex flex-col gap-5 md:flex-row md:items-start">
                        <div className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-500/10 text-blue-200">
                          <Icon className="h-6 w-6" />
                        </div>

                        <div>
                          <h2 className="text-2xl font-semibold text-white md:text-3xl">
                            {section.title}
                          </h2>

                          <div className="mt-5 space-y-4">
                            {section.body.map((paragraph) => (
                              <p
                                key={paragraph}
                                className="text-base leading-8 text-white/68"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>

                          {section.bullets.length > 0 && (
                            <div className="mt-6 grid gap-3 md:grid-cols-2">
                              {section.bullets.map((item) => (
                                <div
                                  key={item}
                                  className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/35 p-4"
                                >
                                  <CheckCircle className="mt-0.5 h-5 w-5 flex-none text-blue-300" />
                                  <p className="text-sm leading-6 text-white/70">
                                    {item}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.article>
                  );
                })}

                <motion.article
                  id="contact-us"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.16 }}
                  transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
                  className="scroll-mt-28 rounded-[1.75rem] border border-blue-300/15 bg-blue-500/10 p-6 text-center backdrop-blur md:p-10"
                >
                  <Mail className="mx-auto mb-5 h-8 w-8 text-blue-300" />

                  <h2 className="text-3xl font-semibold text-white">
                    Contact Us About Privacy
                  </h2>

                  <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-white/68">
                    To ask a privacy question, request access, correct
                    information, request deletion, or opt out of certain
                    communications, contact Ozony Tech using the details below.
                  </p>

                  <div className="mt-7 flex flex-wrap justify-center gap-4 text-sm text-white/70">
                    <a
                      href="mailto:contact@ozony.tech"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/35 px-4 py-2 transition-colors hover:border-blue-400/30 hover:text-white"
                    >
                      <Mail className="h-4 w-4 text-blue-300" />
                      contact@ozony.tech
                    </a>

                    <a
                      href="tel:+13476537655"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/35 px-4 py-2 transition-colors hover:border-blue-400/30 hover:text-white"
                    >
                      <Phone className="h-4 w-4 text-blue-300" />
                      347 653 7655
                    </a>
                  </div>
                </motion.article>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;