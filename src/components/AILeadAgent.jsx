import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Brain,
  Building2,
  CalendarCheck,
  CheckCircle,
  Clock,
  Headphones,
  Mail,
  MessageSquare,
  Moon,
  Phone,
  PhoneCall,
  Route,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wrench,
  Zap,
} from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import StarfieldBackground from '@/components/ui/starfield-background';

const SITE_URL = 'https://ozony.tech';
const PAGE_URL = `${SITE_URL}/ai-lead-agent`;
const OG_IMAGE = `${SITE_URL}/images/ozony-og-preview.png`;

const responseCapabilities = [
  'Respond to website form submissions',
  'Support consent-aware phone, SMS, and email workflows',
  'Ask pre-approved qualifying questions',
  'Collect customer details and service context',
  'Route urgent leads to the right person',
  'Send instant alerts to your team',
  'Create clean internal lead summaries',
  'Help prepare follow-up steps',
  'Keep valuable opportunities from sitting unanswered',
];

const qualificationQuestions = [
  'What service do you need?',
  'What issue are you experiencing?',
  'Where are you located?',
  'How urgent is the request?',
  'What is the best number or email to reach you?',
  'Do you need same-day service?',
];

const workflowSteps = [
  {
    icon: Send,
    title: 'A Lead Comes In',
    text: 'A customer submits a form, requests a quote, calls, or reaches out through one of your connected channels.',
  },
  {
    icon: Bot,
    title: 'The AI Agent Responds',
    text: 'The agent replies instantly using your approved messaging, business rules, and lead response workflow.',
  },
  {
    icon: Target,
    title: 'The Agent Qualifies the Lead',
    text: 'It asks the right questions, gathers useful details, and determines how valuable or urgent the opportunity is.',
  },
  {
    icon: Headphones,
    title: 'Your Team Gets Notified',
    text: 'Lead details are sent through the channels your team actually checks, such as email, Discord, SMS, or another internal workflow.',
  },
  {
    icon: CalendarCheck,
    title: 'You Follow Up Smarter',
    text: 'Instead of starting from zero, your team already knows who they are, what they need, and how urgent it is.',
  },
];

const industries = [
  'IT service providers',
  'Home service companies',
  'Contractors',
  'Cleaning companies',
  'Real estate teams',
  'Medical and wellness offices',
  'Local repair businesses',
  'Consultants',
  'Agencies',
  'Appointment-based businesses',
];

const selfQualifiers = [
  'Leads come in while your team is busy',
  'Website form submissions sometimes get missed',
  'After-hours requests wait until the next day',
  'Your team asks the same intake questions repeatedly',
  'You need better lead summaries before calling back',
  'You want faster response without hiring a full-time receptionist',
];

const deliverables = [
  'Custom lead intake flow',
  'Approved response scripts',
  'Qualifying questions',
  'Website form integration',
  'Internal team alerts',
  'Email summaries',
  'SMS or phone workflow options when appropriate',
  'After-hours response logic',
  'Lead routing rules',
  'Testing and refinement after launch',
];

const useCases = [
  {
    title: 'Website Form Response',
    text: 'A customer fills out your website form and receives a fast approved response while your team gets a clean alert.',
  },
  {
    title: 'After-Hours Intake',
    text: 'The agent collects details overnight so your team starts the next day with qualified leads instead of cold form submissions.',
  },
  {
    title: 'Service Request Qualification',
    text: 'The agent asks key questions about the issue, location, urgency, and service needed before your team calls back.',
  },
  {
    title: 'Internal Lead Alerts',
    text: 'Your team receives instant summaries through the channels they actually check, such as email, Discord, or SMS.',
  },
  {
    title: 'Follow-Up Preparation',
    text: 'The system helps prepare the next step so your team can respond faster and more professionally.',
  },
];

const controlRules = [
  'What the agent can say',
  'Which questions it should ask',
  'When your team should be alerted',
  'Which leads need urgent attention',
  'Whether responses are automatic or human-reviewed',
];

const agentFeatures = [
  {
    icon: Zap,
    title: 'Instant Lead Capture',
    text: 'Collect names, emails, phone numbers, service needs, locations, urgency, and custom details specific to your business.',
  },
  {
    icon: Brain,
    title: 'Smart Qualification',
    text: 'Ask the questions your team normally asks before deciding how valuable, urgent, or ready a lead is.',
  },
  {
    icon: PhoneCall,
    title: 'Phone, SMS, and Email Workflows',
    text: 'The agent can support email, phone, and SMS workflows when appropriate, using approved messaging and consent-aware processes.',
  },
  {
    icon: Headphones,
    title: 'Team Alerts',
    text: 'Get instant notifications when a lead comes in, including a clean summary of what the customer needs.',
  },
  {
    icon: Moon,
    title: 'After-Hours Coverage',
    text: 'Your business can continue responding even when nobody is actively watching the inbox.',
  },
  {
    icon: Route,
    title: 'Custom Business Logic',
    text: 'The agent can follow rules based on location, service type, urgency, pricing range, or lead quality.',
  },
];

const businessBenefits = [
  'Respond before competitors do',
  'Reduce missed website leads',
  'Capture better lead details',
  'Improve after-hours coverage',
  'Save time on repetitive intake questions',
  'Prioritize urgent opportunities',
  'Give your team cleaner information before follow-up',
  'Create a more professional first impression',
];

const buildProcess = [
  'Mapping where leads come from today',
  'Identifying delays, missed alerts, and weak intake points',
  'Creating approved qualifying questions',
  'Writing approved agent responses',
  'Connecting alerts and delivery channels',
  'Testing the workflow before launch',
  'Improving the system after real lead activity',
];

const serviceOptions = [
  {
    eyebrow: 'Starter',
    title: 'Starter Lead Agent',
    text: 'Best for businesses that need fast website form response, clean lead summaries, and internal team alerts.',
    items: [
      'Website form intake workflow',
      'Basic qualification questions',
      'Email, Discord, or internal alert delivery',
      'Clean lead summary for follow-up',
      'Approved response messaging',
    ],
  },
  {
    eyebrow: 'Growth',
    title: 'Growth Lead Agent',
    text: 'Best for businesses that need advanced qualification, urgency handling, and stronger follow-up support.',
    items: [
      'Everything in Starter',
      'Multi-step intake flow',
      'Lead routing rules',
      'Urgency and priority scoring',
      'Follow-up reminder support',
    ],
  },
  {
    eyebrow: 'Premium',
    title: 'Premium AI Response System',
    text: 'Best for businesses that want a complete automated intake system across multiple response channels.',
    items: [
      'Everything in Growth',
      'Consent-aware phone or SMS workflow options',
      'Advanced business logic',
      'Custom integrations',
      'Deeper launch testing and refinement',
    ],
  },
];

const faqs = [
  {
    question: 'Is this just a chatbot?',
    answer:
      'No. A chatbot usually sits on a website and answers basic questions. An AI Lead Response Agent is designed to capture, qualify, and route leads as part of your business process.',
  },
  {
    question: 'Can the agent call leads?',
    answer:
      'Yes. Phone-based workflows can be included when appropriate, using approved messaging and consent-aware processes for your business.',
  },
  {
    question: 'Can it send text messages?',
    answer:
      'Yes. SMS workflows can be added when appropriate. Ozony Tech designs these around your workflow, approved messaging, and consent requirements for your industry and location.',
  },
  {
    question: 'Can I approve what the agent says?',
    answer:
      'Yes. The agent is built around approved messaging, approved qualifying questions, and clear business rules so you stay in control.',
  },
  {
    question: 'Can it work after hours?',
    answer:
      'Yes. After-hours response is one of the strongest use cases for this type of system.',
  },
  {
    question: 'Will this replace my team?',
    answer:
      'No. The goal is to help your team respond faster and spend less time on repetitive intake tasks.',
  },
  {
    question: 'Can it connect to my website?',
    answer:
      'Yes. The agent can be connected to your website forms and lead capture points.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Pricing depends on the complexity of the agent, the number of channels, and the integrations required. Ozony Tech offers custom quotes after reviewing your workflow.',
  },
];

const PrimaryCtaButton = ({ to, children }) => (
  <motion.div
    whileHover={{ y: -2, scale: 1.015 }}
    whileTap={{ scale: 0.985 }}
    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    className="group relative inline-flex"
  >
    <div className="absolute -inset-1 rounded-2xl bg-blue-500/25 opacity-70 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

    <Button
      asChild
      size="lg"
      className="relative h-14 min-w-[290px] overflow-hidden rounded-xl border border-blue-300/30 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 text-base font-bold tracking-[0.01em] text-white shadow-[0_14px_45px_rgba(37,99,235,0.28)] transition-shadow duration-300 hover:shadow-[0_18px_55px_rgba(37,99,235,0.38)] md:h-16 md:min-w-[340px] md:px-10 md:text-lg"
    >
      <Link to={to}>
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

        <span className="relative z-10 inline-flex items-center justify-center">
          {children}
          <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </Button>
  </motion.div>
);

const SecondaryCtaButton = ({ to, children }) => (
  <Button
    asChild
    size="lg"
    variant="outline"
    className="h-14 min-w-[220px] border-blue-400/30 bg-transparent px-8 text-base font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-blue-500/10 md:h-16 md:px-10 md:text-lg"
  >
    <Link to={to}>{children}</Link>
  </Button>
);

const AILeadAgent = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Lead Response Agent',
    serviceType: 'AI Lead Response Automation',
    description:
      'Custom AI Lead Response Agents for businesses that need faster follow-up, lead qualification, automated alerts, and better inquiry workflows.',
    url: PAGE_URL,
    image: OG_IMAGE,
    provider: {
      '@type': 'ProfessionalService',
      name: 'Ozony Tech',
      url: SITE_URL,
      email: 'contact@ozony.tech',
      telephone: '+1-347-653-7655',
      image: OG_IMAGE,
    },
    areaServed: ['New York City', 'New Jersey', 'Connecticut', 'United States'],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
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
        name: 'AI Lead Agent',
        item: PAGE_URL,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>AI Lead Response Agent for Small Businesses | Ozony Tech</title>
        <meta
          name="description"
          content="Ozony Tech builds AI Lead Response Agents that capture inquiries, qualify leads, notify your team instantly, and help small businesses follow up faster."
        />
        <meta
          name="robots"
          content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="Ozony Tech" />
        <meta property="og:title" content="AI Lead Response Agent | Ozony Tech" />
        <meta
          property="og:description"
          content="Never let a hot lead go cold again. Ozony Tech builds AI lead response systems that help businesses respond instantly and qualify new opportunities."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Ozony Tech AI Lead Response Agent service preview"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Lead Response Agent | Ozony Tech" />
        <meta
          name="twitter:description"
          content="AI lead response systems that help businesses respond instantly, qualify leads, and notify their team."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen app-bg text-white">
        <Header />

        <main>
          <section className="relative overflow-hidden">
            <StarfieldBackground />

            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />
              <div className="absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />
            </div>

            <div className="relative z-10 px-4 pb-24 pt-32 md:px-6 lg:px-8">
              <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
                    <Sparkles className="h-4 w-4" />
                    Premium AI Service
                  </div>

                  <h1 className="max-w-5xl text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
                    Never Let a Hot Lead Go Cold Again
                  </h1>

                  <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70 md:text-xl">
                    Most small businesses lose leads because they respond too slowly.
                    Ozony Tech builds AI Lead Response Agents that instantly capture new
                    inquiries, ask the right qualifying questions, alert your team, and
                    prepare a clean follow-up summary so you can respond faster and win
                    more opportunities.
                  </p>

                  <div className="mt-8 rounded-3xl border border-blue-300/15 bg-blue-500/10 p-6 backdrop-blur">
                    <p className="text-lg font-semibold text-white">
                      This is not just a chatbot.
                    </p>
                    <p className="mt-2 text-base leading-7 text-blue-100/80">
                      This is a custom lead response workflow built around your business,
                      your services, and your follow-up process.
                    </p>
                  </div>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <PrimaryCtaButton to="/contactpage">
                      Book a Lead Response Consultation
                    </PrimaryCtaButton>

                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="h-14 min-w-[220px] border-blue-400/30 bg-transparent px-8 text-base font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-blue-500/10 md:h-16 md:px-10 md:text-lg"
                    >
                      <a href="#how-it-works">See the Workflow</a>
                    </Button>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {[
                      'Instant response',
                      'Lead qualification',
                      'After-hours coverage',
                      'Team alerts',
                    ].map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.08 }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-[0_0_70px_rgba(37,99,235,0.16)] backdrop-blur-xl"
                >
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/85 p-6 md:p-8">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15">
                        <Bot className="h-7 w-7 text-blue-300" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-blue-300">
                          AI Lead Agent
                        </p>
                        <h2 className="text-2xl font-semibold">
                          Lead comes in. Agent responds.
                        </h2>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        'Customer submits a form or request',
                        'Agent responds instantly',
                        'Agent asks approved questions',
                        'Your team gets a clean alert',
                      ].map((step, index) => (
                        <div
                          key={step}
                          className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                        >
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/15 text-sm font-bold text-blue-200">
                            {index + 1}
                          </div>
                          <p className="text-sm font-medium text-white/85">{step}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-2xl border border-blue-300/20 bg-blue-500/10 p-5">
                      <p className="text-sm leading-6 text-blue-100">
                        Built for businesses that cannot afford to let hot leads sit
                        unanswered while customers move on to competitors.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-700/50 bg-slate-800/30 px-4 py-20 md:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                  What It Is
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                  A custom automation system that responds the moment leads come in.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/65">
                  Every agent is designed around your service, your process, and the way
                  your team works. It can respond, qualify, collect details, route leads,
                  and alert your team before the opportunity goes cold.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {responseCapabilities.map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-none text-blue-300" />
                    <p className="text-sm leading-6 text-white/75">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t border-slate-700/50 px-4 py-20 md:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                  The Problem
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                  Slow follow-up costs money.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/65">
                  Most small businesses do not have a lead problem. They have a response
                  problem. A potential customer reaches out, but nobody responds right
                  away. Maybe the team is busy. Maybe the message gets buried. Maybe the
                  lead comes in after hours.
                </p>
                <p className="mt-5 text-lg leading-8 text-white/65">
                  That delay creates friction. The customer starts looking somewhere else.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
                <Clock className="mb-6 h-8 w-8 text-blue-300" />
                <h3 className="text-3xl font-semibold">
                  With an AI Lead Response Agent, your business can respond immediately,
                  even when you are unavailable.
                </h3>
                <div className="mt-8 grid gap-4">
                  {[
                    'After-hours form submission',
                    'Missed call or quote request',
                    'Customer question from a lead page',
                    'New inquiry that needs fast routing',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <Zap className="h-5 w-5 flex-none text-blue-300" />
                      <span className="text-sm text-white/75">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-700/50 bg-slate-800/30 px-4 py-20 md:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                  Who This Is For
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                  Built for businesses that cannot afford slow follow-up.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/65">
                  This service is for businesses that receive leads through website forms,
                  phone calls, emails, ads, referrals, or after-hours inquiries and need a
                  faster way to respond.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {selfQualifiers.map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                  >
                    <Target className="mt-0.5 h-5 w-5 flex-none text-blue-300" />
                    <p className="text-sm leading-6 text-white/75">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t border-slate-700/50 px-4 py-20 md:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                    What Ozony Tech Builds
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                    A real lead response workflow, not a generic bot widget.
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-white/65">
                    We design the system around where your leads come from, what your team
                    needs to know, how urgent requests should be handled, and what happens
                    after the first response.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                    >
                      <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-blue-300" />
                      <p className="text-sm leading-6 text-white/75">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            id="how-it-works"
            className="border-t border-slate-700/50 bg-slate-800/30 px-4 py-20 md:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                  How It Works
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                  From cold form submission to active sales opportunity.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/65">
                  Instead of waiting for someone to manually review the request, the agent
                  starts the intake process and prepares your team with useful context.
                </p>
              </div>

              <div className="mt-10 grid gap-5 lg:grid-cols-5">
                {workflowSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.title}
                      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                    >
                      <div className="mb-6 flex items-center justify-between">
                        <Icon className="h-6 w-6 text-blue-300" />
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300/70">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/65">{step.text}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 rounded-[2rem] border border-blue-300/15 bg-blue-500/10 p-8 backdrop-blur md:p-10">
                <h3 className="text-2xl font-semibold">
                  The agent can ask questions like:
                </h3>
                <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {qualificationQuestions.map((question) => (
                    <div
                      key={question}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                    >
                      <p className="text-sm leading-6 text-blue-100">{question}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-700/50 px-4 py-20 md:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                    Built for Service Businesses
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                    Ideal for businesses where fast response matters.
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-white/65">
                    If your business receives leads and needs to respond quickly, this
                    system can help you capture more opportunities before they go cold.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {industries.map((industry) => (
                    <div
                      key={industry}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                    >
                      <Building2 className="h-5 w-5 flex-none text-blue-300" />
                      <span className="text-sm text-white/75">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-700/50 bg-slate-800/30 px-4 py-20 md:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                  What the Agent Can Handle
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                  Built to support real intake, not just answer basic questions.
                </h2>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {agentFeatures.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:border-blue-400/35 hover:bg-white/[0.07]"
                    >
                      <Icon className="mb-5 h-6 w-6 text-blue-300" />
                      <h3 className="text-2xl font-semibold">{feature.title}</h3>
                      <p className="mt-3 text-base leading-7 text-white/65">
                        {feature.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="border-t border-slate-700/50 px-4 py-24 md:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl rounded-[2rem] border border-blue-400/15 bg-gradient-to-br from-white/8 to-blue-500/10 p-8 text-center shadow-[0_0_50px_rgba(37,99,235,0.10)] backdrop-blur md:p-14">
              <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                Need Faster Lead Response?
              </p>
              <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-semibold md:text-5xl">
                Turn new inquiries into organized opportunities before they go cold.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/65">
                If leads are coming in through your website, ads, referrals, or after-hours
                inquiries, Ozony Tech can build an AI Lead Response Agent that helps you
                respond faster and follow up smarter.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
                <PrimaryCtaButton to="/contactpage">
                  Book a Lead Response Consultation
                </PrimaryCtaButton>

                <SecondaryCtaButton to="/contactpage">
                  Find Out Where Leads Are Missed
                </SecondaryCtaButton>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-700/50 bg-slate-800/30 px-4 py-20 md:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
                <Users className="mb-6 h-8 w-8 text-blue-300" />
                <h2 className="text-3xl font-semibold md:text-5xl">
                  Why businesses need this.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/65">
                  When someone reaches out to your business, they are usually ready to take
                  action. The faster you respond, the better chance you have of winning the
                  customer.
                </p>

                <div className="mt-8 grid gap-4">
                  {businessBenefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-none text-blue-300" />
                      <p className="text-sm leading-6 text-white/75">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
                <Wrench className="mb-6 h-8 w-8 text-blue-300" />
                <h2 className="text-3xl font-semibold md:text-5xl">
                  Custom built by Ozony Tech.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/65">
                  Ozony Tech does not install generic bots and walk away. We build the
                  workflow around your actual business.
                </p>

                <div className="mt-8 grid gap-4">
                  {buildProcess.map((item) => (
                    <div
                      key={item}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-blue-300" />
                      <p className="text-sm leading-6 text-white/75">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-700/50 px-4 py-20 md:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="rounded-[2rem] border border-blue-400/15 bg-gradient-to-br from-white/8 to-blue-500/10 p-8 shadow-[0_0_50px_rgba(37,99,235,0.10)] backdrop-blur md:p-12">
                <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                      Example Use Case
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                      After-hours lead. Instant response. Clean summary.
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-white/65">
                      A customer visits your website after hours and submits a request for
                      help. Instead of waiting until the next business day, your AI Lead
                      Agent responds immediately.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      'Agent asks what service they need.',
                      'Agent asks how urgent the issue is.',
                      'Agent collects location and contact details.',
                      'Your team receives a clean alert with the full summary.',
                      'You follow up already knowing what the customer needs.',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-5"
                      >
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-none text-blue-300" />
                        <p className="text-sm leading-6 text-white/75">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/40 p-6">
                  <p className="text-base leading-7 text-blue-100">
                    That is the difference between a cold form submission and an active
                    sales opportunity.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-700/50 bg-slate-800/30 px-4 py-20 md:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                  Common Use Cases
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                  Practical automations that protect your lead flow.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/65">
                  The best lead agent is not flashy. It quietly removes delays, captures
                  better context, and keeps your team informed.
                </p>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                {useCases.map((useCase, index) => (
                  <div
                    key={useCase.title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-blue-400/35 hover:bg-white/[0.07]"
                  >
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300/70">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold">{useCase.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/65">{useCase.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t border-slate-700/50 px-4 py-20 md:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                  You Stay in Control
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                  Approved messaging, approved questions, and clear business rules.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/65">
                  The goal is not to replace your team. The goal is to help your team
                  respond faster with better information, while keeping your business in
                  control of the customer experience.
                </p>
              </div>

              <div className="rounded-[2rem] border border-blue-300/15 bg-blue-500/10 p-8 backdrop-blur md:p-10">
                <h3 className="text-2xl font-semibold">You decide:</h3>
                <div className="mt-6 grid gap-4">
                  {controlRules.map((rule) => (
                    <div
                      key={rule}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/35 p-5"
                    >
                      <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-blue-300" />
                      <p className="text-sm leading-6 text-white/75">{rule}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-700/50 bg-slate-800/30 px-4 py-20 md:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                  Premium Service Options
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                  Custom quoted based on your workflow.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/65">
                  Every AI Lead Agent is priced based on the complexity of your workflow,
                  channels, automations, and integrations.
                </p>
              </div>

              <div className="mt-10 grid gap-5 lg:grid-cols-3">
                {serviceOptions.map((option) => (
                  <div
                    key={option.title}
                    className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:border-blue-400/35 hover:bg-white/[0.07]"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
                      {option.eyebrow}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold">{option.title}</h3>
                    <p className="mt-3 text-base leading-7 text-white/65">{option.text}</p>

                    <div className="mt-6 space-y-3">
                      {option.items.map((item) => (
                        <div key={item} className="flex gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-none text-blue-300" />
                          <p className="text-sm leading-6 text-white/70">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t border-slate-700/50 px-4 py-24 md:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                  FAQ
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                  Questions businesses usually ask before building an AI lead agent.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/65">
                  Clear answers before you book a consultation. Every workflow is custom,
                  but these are the questions most business owners ask first.
                </p>
              </div>

              <div className="mt-12 grid items-start gap-5 lg:grid-cols-2">
                {faqs.map((faq, index) => {
                  const isActive = activeFaqIndex === index;

                  return (
                    <div
                      key={faq.question}
                      className={`self-start rounded-[1.5rem] border p-6 shadow-[0_0_40px_rgba(37,99,235,0.05)] backdrop-blur transition-all duration-300 ${
                        isActive
                          ? 'border-blue-400/35 bg-white/[0.07]'
                          : 'border-white/10 bg-white/[0.045] hover:border-blue-400/25 hover:bg-white/[0.06]'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveFaqIndex(isActive ? null : index)}
                        aria-expanded={isActive}
                        className="flex w-full items-start justify-between gap-5 text-left"
                      >
                        <div className="flex gap-4">
                          <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-blue-300/20 bg-blue-500/10 text-xs font-bold text-blue-200">
                            {String(index + 1).padStart(2, '0')}
                          </div>

                          <h3 className="text-lg font-semibold leading-7 text-white">
                            {faq.question}
                          </h3>
                        </div>

                        <div
                          className={`mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-200 transition-transform duration-300 ${
                            isActive ? 'rotate-45' : ''
                          }`}
                        >
                          +
                        </div>
                      </button>

                      {isActive && (
                        <div className="mt-5 border-t border-white/10 pt-5">
                          <p className="text-base leading-7 text-white/65">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="border-t border-slate-700/50 bg-slate-800/30 px-4 py-24 md:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl rounded-[2rem] border border-blue-400/15 bg-gradient-to-br from-white/8 to-blue-500/10 p-8 text-center shadow-[0_0_50px_rgba(37,99,235,0.10)] backdrop-blur md:p-14">
              <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                Ready to Stop Missing Leads?
              </p>
              <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-semibold md:text-5xl">
                Your customers should not have to wait for your business to respond.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/65">
                Ozony Tech can build an AI Lead Response Agent that captures new
                opportunities, qualifies leads, and alerts your team instantly.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
                <PrimaryCtaButton to="/contactpage">
                  Book a Lead Response Consultation
                </PrimaryCtaButton>

                <SecondaryCtaButton to="/contactpage">
                  Find Out Where Leads Are Missed
                </SecondaryCtaButton>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/55">
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-300" />
                  contact@ozony.tech
                </span>
                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-300" />
                  (347) 653-7655
                </span>
                <span className="inline-flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-blue-300" />
                  Custom workflow consultation
                </span>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AILeadAgent;