import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  Building2,
  CalendarCheck,
  CheckCircle,
  Clock,
  Headphones,
  Mail,
  MessageSquare,
  Phone,
  Route,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
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

const AI_AGENT_HERO_IMAGE = '/images/AIAgent1.png';
const AI_AGENT_WORKFLOW_IMAGE = '/images/AIAgent2.png';
const AI_AGENT_CAPABILITIES_IMAGE = '/images/AIAgent3.png';

const responseCapabilities = [
  'Respond to website form submissions',
  'Ask pre-approved qualifying questions',
  'Collect customer details and service context',
  'Route urgent leads to the right person',
  'Send instant alerts to your team',
  'Create clean internal lead summaries',
  'Support phone, SMS, and email workflows when appropriate',
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
    icon: Headphones,
    title: 'Team Alerts',
    text: 'Send clean summaries to the channels your team actually checks, including email, Discord, SMS, or another internal workflow.',
  },
  {
    icon: Route,
    title: 'Custom Business Logic',
    text: 'Follow rules based on location, service type, urgency, pricing range, lead quality, or the next step your team wants taken.',
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

const useCases = [
  {
    icon: Send,
    title: 'Website Form Response',
    text: 'A customer fills out your website form and gets a fast approved response while your team receives a clean lead alert.',
  },
  {
    icon: Clock,
    title: 'After-Hours Intake',
    text: 'The agent collects important details overnight so your team starts the next day with qualified leads instead of cold form submissions.',
  },
  {
    icon: Target,
    title: 'Service Request Qualification',
    text: 'The agent asks about the issue, location, urgency, and service needed before your team follows up.',
  },
  {
    icon: CalendarCheck,
    title: 'Follow-Up Preparation',
    text: 'Your team gets the context needed to respond faster, prioritize the lead, and sound more prepared.',
  },
];

const buildProcess = [
  'Map where your leads currently come from',
  'Identify delays, missed alerts, and weak intake points',
  'Create approved qualifying questions',
  'Write approved response messaging',
  'Connect alerts and delivery channels',
  'Test the workflow before launch',
  'Refine the system after real lead activity',
];

const controlRules = [
  'What the agent can say',
  'Which questions it should ask',
  'When your team should be alerted',
  'Which leads need urgent attention',
  'Whether responses are automatic or human-reviewed',
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

const smoothEase = [0.22, 1, 0.36, 1];

const getRevealOffset = (direction) => {
  const offsets = {
    up: { x: 0, y: 34 },
    down: { x: 0, y: -34 },
    left: { x: 44, y: 0 },
    right: { x: -44, y: 0 },
    none: { x: 0, y: 0 },
  };

  return offsets[direction] || offsets.up;
};

const MotionReveal = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  amount = 0.22,
}) => {
  const offset = getRevealOffset(direction);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        scale: direction === 'none' ? 1 : 0.985,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.72,
        delay,
        ease: smoothEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const staggerItem = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.985,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.62,
      ease: smoothEase,
    },
  },
};

const slideLeftItem = {
  hidden: {
    opacity: 0,
    x: 36,
    scale: 0.985,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.62,
      ease: smoothEase,
    },
  },
};

const AnimatedCard = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  hover = true,
}) => {
  const offset = getRevealOffset(direction);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        scale: 0.985,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay,
        ease: smoothEase,
      }}
      whileHover={
        hover
          ? {
              y: -5,
              transition: { duration: 0.22, ease: smoothEase },
            }
          : undefined
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SectionIntro = ({ eyebrow, title, description, className = '' }) => (
  <MotionReveal
    direction="up"
    className={`mx-auto max-w-4xl text-center ${className}`}
  >
    <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
      {eyebrow}
    </p>
    <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-semibold md:text-5xl">
      {title}
    </h2>
    {description && (
      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/65">
        {description}
      </p>
    )}
  </MotionReveal>
);

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

const VisualImageCard = ({
  src,
  alt,
  eager = false,
  className = '',
  imageClassName = '',
}) => (
  <motion.div
    initial={{ opacity: 0, y: 36, scale: 0.975 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.18 }}
    transition={{ duration: 0.78, ease: smoothEase }}
    className={`group relative ${className}`}
  >
    <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/10 opacity-60 blur-3xl transition-opacity duration-300 group-hover:opacity-90" />

    <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-700/60 bg-slate-900/50 shadow-lg shadow-blue-500/10 transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-blue-500/20">
      <img
        src={src}
        width="1672"
        height="941"
        alt={alt}
        className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015] ${imageClassName}`}
        loading={eager ? 'eager' : 'lazy'}
        decoding={eager ? 'sync' : 'async'}
        fetchPriority={eager ? 'high' : 'auto'}
      />
    </div>
  </motion.div>
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
              <div className="mx-auto max-w-[92rem]">
                <motion.div
                  initial={{ opacity: 0, y: 24, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, ease: smoothEase }}
                  className="mx-auto max-w-5xl text-center"
                >
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
                    <Sparkles className="h-4 w-4" />
                    Premium AI Service
                  </div>

                  <h1 className="mx-auto max-w-5xl text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
                    Never Let a Hot Lead Go Cold Again
                  </h1>

                  <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70 md:text-xl">
                    Ozony Tech builds AI Lead Response Agents that instantly capture
                    new inquiries, ask the right qualifying questions, alert your team,
                    and prepare a clean follow-up summary so you can respond faster.
                  </p>

                  <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-blue-300/15 bg-blue-500/10 p-6 text-center backdrop-blur">
                    <p className="text-lg font-semibold text-white">
                      This is not just a chatbot.
                    </p>
                    <p className="mx-auto mt-2 max-w-2xl text-base leading-7 text-blue-100/80">
                      It is a custom lead response workflow built around your business,
                      your services, and your follow-up process.
                    </p>
                  </div>

                  <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
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

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="mt-8 flex flex-wrap justify-center gap-3"
                  >
                    {[
                      'Instant response',
                      'Lead qualification',
                      'After-hours coverage',
                      'Team alerts',
                    ].map((chip) => (
                      <motion.span
                        key={chip}
                        variants={staggerItem}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur"
                      >
                        {chip}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 44, scale: 0.965 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.82, delay: 0.12, ease: smoothEase }}
                  className="group relative mt-20 md:mt-24"
                >
                  <div className="absolute -inset-5 rounded-[2.25rem] bg-blue-500/15 opacity-80 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-2 shadow-[0_0_80px_rgba(37,99,235,0.22)] backdrop-blur-xl transition-all duration-300 group-hover:border-blue-400/35 group-hover:shadow-blue-500/25">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-[1.35rem] bg-slate-950">
                      <img
                        src={AI_AGENT_HERO_IMAGE}
                        width="1672"
                        height="941"
                        alt="AI Lead Response Agent dashboard showing lead capture, AI reply, lead qualification, and team alert workflow"
                        className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                        loading="eager"
                        decoding="sync"
                        fetchPriority="high"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-700/50 bg-slate-800/30 px-4 py-20 md:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionIntro
                eyebrow="Problem + Solution"
                title="Slow follow-up costs money. Fast response creates opportunity."
                description="Most small businesses do not have a lead problem. They have a response problem. When someone reaches out and nobody responds quickly, that lead can move on to a competitor."
              />

              <MotionReveal direction="up" delay={0.06}>
                <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
                  <div className="mx-auto max-w-3xl text-center">
                    <Clock className="mx-auto mb-5 h-8 w-8 text-blue-300" />
                    <h3 className="text-2xl font-semibold text-white">
                      What the system can do
                    </h3>
                    <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-white/60">
                      The agent responds immediately, collects useful context, and alerts
                      your team while the customer is still interested.
                    </p>
                  </div>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                  >
                    {responseCapabilities.map((item) => (
                      <motion.div
                        key={item}
                        variants={slideLeftItem}
                        className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors duration-300 hover:border-blue-400/30 hover:bg-white/[0.07]"
                      >
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-none text-blue-300" />
                        <p className="text-sm leading-6 text-white/75">{item}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </MotionReveal>
            </div>
          </section>

          <section
            id="how-it-works"
            className="border-t border-slate-700/50 px-4 py-20 md:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-7xl">
              <SectionIntro
                eyebrow="How It Works"
                title="From cold form submission to active sales opportunity."
                description="Instead of waiting for someone to manually review the request, the agent starts the intake process and prepares your team with useful context."
              />

              <VisualImageCard
                src={AI_AGENT_WORKFLOW_IMAGE}
                alt="AI Lead Agent workflow showing a lead coming in, the agent responding, qualification, team notification, and smarter follow-up"
                className="mt-10"
              />

              <MotionReveal direction="up" delay={0.05}>
                <div className="mt-10 rounded-[2rem] border border-blue-300/15 bg-blue-500/10 p-8 text-center backdrop-blur md:p-10">
                  <h3 className="text-2xl font-semibold">
                    The agent can ask questions like:
                  </h3>
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.24 }}
                    className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
                  >
                    {qualificationQuestions.map((question) => (
                      <motion.div
                        key={question}
                        variants={staggerItem}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-blue-400/30 hover:bg-white/[0.07]"
                      >
                        <p className="text-sm leading-6 text-blue-100">{question}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </MotionReveal>

              <MotionReveal direction="up" delay={0.05}>
                <div className="mt-10 rounded-[2rem] border border-blue-400/15 bg-gradient-to-br from-white/8 to-blue-500/10 p-8 text-center shadow-[0_0_50px_rgba(37,99,235,0.10)] backdrop-blur md:p-12">
                  <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                    Need Faster Lead Response?
                  </p>
                  <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-semibold md:text-5xl">
                    Turn new inquiries into organized opportunities before they go cold.
                  </h2>
                  <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/65">
                    Ozony Tech can review your current lead process and map out where an AI
                    Lead Response Agent would help.
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
              </MotionReveal>
            </div>
          </section>

          <section className="border-t border-slate-700/50 bg-slate-800/30 px-4 py-20 md:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionIntro
                eyebrow="What the Agent Can Handle"
                title="Built to support real intake, not just answer basic questions."
                description="The agent supports the parts of lead response that slow teams down: intake, qualification, routing, alerts, and follow-up preparation."
              />

              <VisualImageCard
                src={AI_AGENT_CAPABILITIES_IMAGE}
                alt="AI Lead Agent capabilities visual showing instant lead capture, smart qualification, team alerts, after-hours coverage, custom business logic, and follow-up support"
                className="mt-10"
              />

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.18 }}
                className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
              >
                {agentFeatures.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <motion.div
                      key={feature.title}
                      variants={staggerItem}
                      whileHover={{
                        y: -6,
                        transition: { duration: 0.22, ease: smoothEase },
                      }}
                      className="rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur transition-colors duration-300 hover:border-blue-400/35 hover:bg-white/[0.07]"
                    >
                      <Icon className="mx-auto mb-5 h-6 w-6 text-blue-300" />
                      <h3 className="text-2xl font-semibold">{feature.title}</h3>
                      <p className="mt-3 text-base leading-7 text-white/65">
                        {feature.text}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>

          <section className="border-t border-slate-700/50 px-4 py-20 md:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionIntro
                eyebrow="Built for Service Businesses"
                title="Ideal for businesses where fast response matters."
                description="If your business receives leads through website forms, phone calls, ads, referrals, or after-hours inquiries, this system can help capture more opportunities before they go cold."
              />

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.18 }}
                className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
              >
                {useCases.map((useCase) => {
                  const Icon = useCase.icon;

                  return (
                    <motion.div
                      key={useCase.title}
                      variants={staggerItem}
                      whileHover={{
                        y: -6,
                        transition: { duration: 0.22, ease: smoothEase },
                      }}
                      className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur transition-colors duration-300 hover:border-blue-400/35 hover:bg-white/[0.07]"
                    >
                      <Icon className="mx-auto mb-4 h-6 w-6 text-blue-300" />
                      <h3 className="text-lg font-semibold text-white">
                        {useCase.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-white/65">
                        {useCase.text}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>

              <MotionReveal direction="up" delay={0.08}>
                <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center backdrop-blur md:p-8">
                  <Building2 className="mx-auto mb-6 h-8 w-8 text-blue-300" />
                  <h3 className="text-2xl font-semibold text-white">
                    Strong fit for:
                  </h3>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
                  >
                    {industries.map((industry) => (
                      <motion.div
                        key={industry}
                        variants={slideLeftItem}
                        className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors duration-300 hover:border-blue-400/30 hover:bg-white/[0.07]"
                      >
                        <CheckCircle className="h-5 w-5 flex-none text-blue-300" />
                        <span className="text-sm text-white/75">{industry}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </MotionReveal>
            </div>
          </section>

          <section className="border-t border-slate-700/50 bg-slate-800/30 px-4 py-20 md:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionIntro
                eyebrow="Custom Built"
                title="Mapped around your business, your team, and your lead process."
                description="Ozony Tech does not install generic bots and walk away. The workflow is built around approved messaging, business rules, team alerts, and real follow-up needs."
              />

              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <AnimatedCard
                  direction="right"
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur md:p-10"
                >
                  <Wrench className="mx-auto mb-6 h-8 w-8 text-blue-300" />
                  <h2 className="text-3xl font-semibold md:text-4xl">
                    Custom built by Ozony Tech.
                  </h2>
                  <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
                    We map the workflow around your current lead sources, delays, missed
                    alerts, and intake process.
                  </p>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.18 }}
                    className="mt-8 grid gap-4"
                  >
                    {buildProcess.map((item) => (
                      <motion.div
                        key={item}
                        variants={staggerItem}
                        className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left"
                      >
                        <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-blue-300" />
                        <p className="text-sm leading-6 text-white/75">{item}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatedCard>

                <AnimatedCard
                  direction="left"
                  delay={0.08}
                  className="rounded-[2rem] border border-blue-300/15 bg-blue-500/10 p-8 text-center backdrop-blur md:p-10"
                >
                  <ShieldCheck className="mx-auto mb-6 h-8 w-8 text-blue-300" />
                  <h2 className="text-3xl font-semibold md:text-4xl">
                    You stay in control.
                  </h2>
                  <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
                    The goal is not to replace your team. The goal is to help your team
                    respond faster with better information.
                  </p>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.18 }}
                    className="mt-8 grid gap-4"
                  >
                    {controlRules.map((rule) => (
                      <motion.div
                        key={rule}
                        variants={staggerItem}
                        className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/35 p-5 text-left"
                      >
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-none text-blue-300" />
                        <p className="text-sm leading-6 text-white/75">{rule}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatedCard>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-700/50 px-4 py-20 md:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionIntro
                eyebrow="Premium Service Options"
                title="Custom quoted based on your workflow."
                description="Every AI Lead Agent is priced based on the complexity of your workflow, channels, automations, and integrations."
              />

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.16 }}
                className="mt-10 grid gap-5 lg:grid-cols-3"
              >
                {serviceOptions.map((option) => (
                  <motion.div
                    key={option.title}
                    variants={staggerItem}
                    whileHover={{
                      y: -7,
                      transition: { duration: 0.22, ease: smoothEase },
                    }}
                    className="rounded-[2rem] border border-white/10 bg-white/5 p-7 text-center backdrop-blur transition-colors duration-300 hover:border-blue-400/35 hover:bg-white/[0.07]"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
                      {option.eyebrow}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold">{option.title}</h3>
                    <p className="mt-3 text-base leading-7 text-white/65">{option.text}</p>

                    <div className="mt-6 space-y-3 text-left">
                      {option.items.map((item) => (
                        <div key={item} className="flex gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-none text-blue-300" />
                          <p className="text-sm leading-6 text-white/70">{item}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          <section className="border-t border-slate-700/50 bg-slate-800/30 px-4 py-24 md:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionIntro
                eyebrow="FAQ"
                title="Questions businesses usually ask before building an AI lead agent."
                description="Clear answers before you book a consultation."
              />

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.12 }}
                className="mt-12 grid items-start gap-5 lg:grid-cols-2"
              >
                {faqs.map((faq, index) => {
                  const isActive = activeFaqIndex === index;

                  return (
                    <motion.div
                      key={faq.question}
                      variants={staggerItem}
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
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.28, ease: smoothEase }}
                          className="mt-5 border-t border-white/10 pt-5"
                        >
                          <p className="text-base leading-7 text-white/65">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>

          <section className="border-t border-slate-700/50 px-4 py-24 md:px-6 lg:px-8">
            <MotionReveal direction="up">
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
            </MotionReveal>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AILeadAgent;