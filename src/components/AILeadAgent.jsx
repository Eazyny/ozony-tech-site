import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';
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
import { useTranslation } from 'react-i18next';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import StarfieldBackground from '@/components/ui/starfield-background';
import {
  getLanguageFromPath,
  localizePath,
} from '@/i18n/languageRoutes';

const SITE_URL = 'https://ozony.tech';
const OG_IMAGE = `${SITE_URL}/images/ozony-og-preview.png`;

const createResponsiveImage = (name) => ({
  src: `/images/${name}-1200.webp`,
  srcSet: `/images/${name}-800.webp 800w, /images/${name}-1200.webp 1200w, /images/${name}-1600.webp 1600w`,
  sizes:
    '(max-width: 768px) calc(100vw - 32px), (max-width: 1280px) calc(100vw - 32px), 1200px',
  width: '1200',
  height: '675',
});

const AI_AGENT_HERO_IMAGE = {
  ...createResponsiveImage('AIAgent1'),
  sizes: '(max-width: 1024px) calc(100vw - 32px), 1200px',
};

const AI_AGENT_WORKFLOW_IMAGE = createResponsiveImage('AIAgent2');
const AI_AGENT_CAPABILITIES_IMAGE = createResponsiveImage('AIAgent3');

const responseCapabilityKeys = [
  'websiteForms',
  'qualifyingQuestions',
  'customerDetails',
  'urgentRouting',
  'instantAlerts',
  'leadSummaries',
  'multichannel',
  'noMissedOpportunities',
];

const qualificationQuestionKeys = [
  'service',
  'issue',
  'location',
  'urgency',
  'contact',
  'sameDay',
];

const agentFeatures = [
  { icon: Zap, key: 'instantCapture' },
  { icon: Brain, key: 'smartQualification' },
  { icon: Headphones, key: 'teamAlerts' },
  { icon: Route, key: 'businessLogic' },
];

const industryKeys = [
  'itProviders',
  'homeServices',
  'contractors',
  'cleaning',
  'realEstate',
  'medical',
  'repair',
  'consultants',
  'agencies',
  'appointmentBased',
];

const useCases = [
  { icon: Send, key: 'websiteResponse' },
  { icon: Clock, key: 'afterHours' },
  { icon: Target, key: 'serviceQualification' },
  { icon: CalendarCheck, key: 'followUpPrep' },
];

const buildProcessKeys = [
  'mapSources',
  'identifyDelays',
  'createQuestions',
  'writeMessaging',
  'connectAlerts',
  'testWorkflow',
  'refineSystem',
];

const controlRuleKeys = [
  'agentCanSay',
  'questionsToAsk',
  'teamAlerts',
  'urgentLeads',
  'approvalMode',
];

const serviceOptionKeys = ['starter', 'growth', 'premium'];

const faqKeys = [
  'chatbot',
  'callLeads',
  'sms',
  'approveMessaging',
  'afterHours',
  'replaceTeam',
  'website',
  'pricing',
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
  srcSet,
  sizes,
  width = '1200',
  height = '675',
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
        srcSet={srcSet}
        sizes={sizes}
        width={width}
        height={height}
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
  const location = useLocation();
  const { t } = useTranslation('aiLeadAgent');

  const language = getLanguageFromPath(location.pathname);
  const isSpanish = language === 'es';
  const pageUrl = isSpanish
    ? `${SITE_URL}/es/ai-lead-agent`
    : `${SITE_URL}/ai-lead-agent`;
  const contactPath = localizePath('/contact', language);

  const faqs = faqKeys.map((key) => ({
    key,
    question: t(`faq.items.${key}.question`),
    answer: t(`faq.items.${key}.answer`),
  }));

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: t('schema.serviceName'),
    serviceType: t('schema.serviceType'),
    description: t('schema.serviceDescription'),
    url: pageUrl,
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
        name: t('schema.home'),
        item: isSpanish ? `${SITE_URL}/es` : `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('schema.breadcrumbName'),
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
        <meta
          name="robots"
          content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        />
        <link rel="canonical" href={pageUrl} />

        <link
          rel="alternate"
          hrefLang="en"
          href={`${SITE_URL}/ai-lead-agent`}
        />
        <link
          rel="alternate"
          hrefLang="es"
          href={`${SITE_URL}/es/ai-lead-agent`}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${SITE_URL}/ai-lead-agent`}
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Ozony Tech" />
        <meta property="og:title" content={t('seo.ogTitle')} />
        <meta property="og:description" content={t('seo.ogDescription')} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={t('seo.ogImageAlt')} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('seo.twitterTitle')} />
        <meta name="twitter:description" content={t('seo.twitterDescription')} />
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

            <div className="relative z-10 pb-24 pt-32">
              <div className="ozony-container-wide">
                <motion.div
                  initial={{ opacity: 0, y: 24, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, ease: smoothEase }}
                  className="mx-auto max-w-5xl text-center"
                >
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
                    <Sparkles className="h-4 w-4" />
                    {t('hero.badge')}
                  </div>

                  <h1 className="mx-auto max-w-5xl text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
                    {t('hero.title')}
                  </h1>

                  <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70 md:text-xl">
                    {t('hero.description')}
                  </p>

                  <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-blue-300/15 bg-blue-500/10 p-6 text-center backdrop-blur">
                    <p className="text-lg font-semibold text-white">
                      {t('hero.notChatbotTitle')}
                    </p>
                    <p className="mx-auto mt-2 max-w-2xl text-base leading-7 text-blue-100/80">
                      {t('hero.notChatbotText')}
                    </p>
                  </div>

                  <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
                    <PrimaryCtaButton to={contactPath}>
                      {t('cta.bookConsultation')}
                    </PrimaryCtaButton>

                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="h-14 min-w-[220px] border-blue-400/30 bg-transparent px-8 text-base font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-blue-500/10 md:h-16 md:px-10 md:text-lg"
                    >
                      <a href="#how-it-works">{t('cta.seeWorkflow')}</a>
                    </Button>
                  </div>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="mt-8 flex flex-wrap justify-center gap-3"
                  >
                    {['instantResponse', 'qualification', 'afterHours', 'teamAlerts'].map((key) => (
                      <motion.span
                        key={key}
                        variants={staggerItem}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur"
                      >
                        {t(`hero.chips.${key}`)}
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
                        src={AI_AGENT_HERO_IMAGE.src}
                        srcSet={AI_AGENT_HERO_IMAGE.srcSet}
                        sizes={AI_AGENT_HERO_IMAGE.sizes}
                        width={AI_AGENT_HERO_IMAGE.width}
                        height={AI_AGENT_HERO_IMAGE.height}
                        alt={t('images.heroAlt')}
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

          <section className="border-t border-slate-700/50 bg-slate-800/30 py-20">
            <div className="ozony-container-wide">
              <SectionIntro
                eyebrow={t('problem.eyebrow')}
                title={t('problem.title')}
                description={t('problem.description')}
              />

              <MotionReveal direction="up" delay={0.06}>
                <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
                  <div className="mx-auto max-w-3xl text-center">
                    <Clock className="mx-auto mb-5 h-8 w-8 text-blue-300" />
                    <h3 className="text-2xl font-semibold text-white">
                      {t('problem.systemTitle')}
                    </h3>
                    <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-white/60">
                      {t('problem.systemText')}
                    </p>
                  </div>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-5"
                  >
                    {responseCapabilityKeys.map((key) => (
                      <motion.div
                        key={key}
                        variants={slideLeftItem}
                        className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors duration-300 hover:border-blue-400/30 hover:bg-white/[0.07]"
                      >
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-none text-blue-300" />
                        <p className="text-sm leading-6 text-white/75">
                          {t(`problem.capabilities.${key}`)}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </MotionReveal>
            </div>
          </section>

          <section
            id="how-it-works"
            className="border-t border-slate-700/50 py-20"
          >
            <div className="ozony-container-wide">
              <SectionIntro
                eyebrow={t('workflow.eyebrow')}
                title={t('workflow.title')}
                description={t('workflow.description')}
              />

              <VisualImageCard
                {...AI_AGENT_WORKFLOW_IMAGE}
                alt={t('images.workflowAlt')}
                className="mt-10"
              />

              <MotionReveal direction="up" delay={0.05}>
                <div className="mt-10 rounded-[2rem] border border-blue-300/15 bg-blue-500/10 p-8 text-center backdrop-blur md:p-10">
                  <h3 className="text-2xl font-semibold">
                    {t('workflow.questionsTitle')}
                  </h3>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.24 }}
                    className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
                  >
                    {qualificationQuestionKeys.map((key) => (
                      <motion.div
                        key={key}
                        variants={staggerItem}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-blue-400/30 hover:bg-white/[0.07]"
                      >
                        <p className="text-sm leading-6 text-blue-100">
                          {t(`workflow.questions.${key}`)}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </MotionReveal>

              <MotionReveal direction="up" delay={0.05}>
                <div className="mt-10 rounded-[2rem] border border-blue-400/15 bg-gradient-to-br from-white/8 to-blue-500/10 p-8 text-center shadow-[0_0_50px_rgba(37,99,235,0.10)] backdrop-blur md:p-12">
                  <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                    {t('workflow.ctaEyebrow')}
                  </p>
                  <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-semibold md:text-5xl">
                    {t('workflow.ctaTitle')}
                  </h2>
                  <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/65">
                    {t('workflow.ctaDescription')}
                  </p>

                  <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
                    <PrimaryCtaButton to={contactPath}>
                      {t('cta.bookConsultation')}
                    </PrimaryCtaButton>

                    <SecondaryCtaButton to={contactPath}>
                      {t('cta.findMissedLeads')}
                    </SecondaryCtaButton>
                  </div>
                </div>
              </MotionReveal>
            </div>
          </section>

          <section className="border-t border-slate-700/50 bg-slate-800/30 py-20">
            <div className="ozony-container-wide">
              <SectionIntro
                eyebrow={t('capabilities.eyebrow')}
                title={t('capabilities.title')}
                description={t('capabilities.description')}
              />

              <VisualImageCard
                {...AI_AGENT_CAPABILITIES_IMAGE}
                alt={t('images.capabilitiesAlt')}
                className="mt-10"
              />

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.18 }}
                className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4 2xl:gap-7"
              >
                {agentFeatures.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <motion.div
                      key={feature.key}
                      variants={staggerItem}
                      whileHover={{
                        y: -6,
                        transition: { duration: 0.22, ease: smoothEase },
                      }}
                      className="rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur transition-colors duration-300 hover:border-blue-400/35 hover:bg-white/[0.07]"
                    >
                      <Icon className="mx-auto mb-5 h-6 w-6 text-blue-300" />
                      <h3 className="text-2xl font-semibold">
                        {t(`capabilities.features.${feature.key}.title`)}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-white/65">
                        {t(`capabilities.features.${feature.key}.text`)}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>

          <section className="border-t border-slate-700/50 py-20">
            <div className="ozony-container-wide">
              <SectionIntro
                eyebrow={t('businesses.eyebrow')}
                title={t('businesses.title')}
                description={t('businesses.description')}
              />

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.18 }}
                className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4 2xl:gap-7"
              >
                {useCases.map((useCase) => {
                  const Icon = useCase.icon;

                  return (
                    <motion.div
                      key={useCase.key}
                      variants={staggerItem}
                      whileHover={{
                        y: -6,
                        transition: { duration: 0.22, ease: smoothEase },
                      }}
                      className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur transition-colors duration-300 hover:border-blue-400/35 hover:bg-white/[0.07]"
                    >
                      <Icon className="mx-auto mb-4 h-6 w-6 text-blue-300" />
                      <h3 className="text-lg font-semibold text-white">
                        {t(`businesses.useCases.${useCase.key}.title`)}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-white/65">
                        {t(`businesses.useCases.${useCase.key}.text`)}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>

              <MotionReveal direction="up" delay={0.08}>
                <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center backdrop-blur md:p-8">
                  <Building2 className="mx-auto mb-6 h-8 w-8 text-blue-300" />
                  <h3 className="text-2xl font-semibold text-white">
                    {t('businesses.fitTitle')}
                  </h3>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
                  >
                    {industryKeys.map((key) => (
                      <motion.div
                        key={key}
                        variants={slideLeftItem}
                        className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors duration-300 hover:border-blue-400/30 hover:bg-white/[0.07]"
                      >
                        <CheckCircle className="h-5 w-5 flex-none text-blue-300" />
                        <span className="text-sm text-white/75">
                          {t(`businesses.industries.${key}`)}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </MotionReveal>
            </div>
          </section>

          <section className="border-t border-slate-700/50 bg-slate-800/30 py-20">
            <div className="ozony-container-wide">
              <SectionIntro
                eyebrow={t('custom.eyebrow')}
                title={t('custom.title')}
                description={t('custom.description')}
              />

              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <AnimatedCard
                  direction="right"
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur md:p-10"
                >
                  <Wrench className="mx-auto mb-6 h-8 w-8 text-blue-300" />
                  <h2 className="text-3xl font-semibold md:text-4xl">
                    {t('custom.buildTitle')}
                  </h2>
                  <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
                    {t('custom.buildDescription')}
                  </p>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.18 }}
                    className="mt-8 grid gap-4"
                  >
                    {buildProcessKeys.map((key) => (
                      <motion.div
                        key={key}
                        variants={staggerItem}
                        className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left"
                      >
                        <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-blue-300" />
                        <p className="text-sm leading-6 text-white/75">
                          {t(`custom.buildProcess.${key}`)}
                        </p>
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
                    {t('custom.controlTitle')}
                  </h2>
                  <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
                    {t('custom.controlDescription')}
                  </p>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.18 }}
                    className="mt-8 grid gap-4"
                  >
                    {controlRuleKeys.map((key) => (
                      <motion.div
                        key={key}
                        variants={staggerItem}
                        className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/35 p-5 text-left"
                      >
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-none text-blue-300" />
                        <p className="text-sm leading-6 text-white/75">
                          {t(`custom.controlRules.${key}`)}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatedCard>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-700/50 py-20">
            <div className="ozony-container-wide">
              <SectionIntro
                eyebrow={t('plans.eyebrow')}
                title={t('plans.title')}
                description={t('plans.description')}
              />

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.16 }}
                className="mt-10 grid gap-5 lg:grid-cols-3 2xl:gap-7"
              >
                {serviceOptionKeys.map((key) => {
                  const items = t(`plans.options.${key}.items`, {
                    returnObjects: true,
                  });

                  return (
                    <motion.div
                      key={key}
                      variants={staggerItem}
                      whileHover={{
                        y: -7,
                        transition: { duration: 0.22, ease: smoothEase },
                      }}
                      className="rounded-[2rem] border border-white/10 bg-white/5 p-7 text-center backdrop-blur transition-colors duration-300 hover:border-blue-400/35 hover:bg-white/[0.07]"
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
                        {t(`plans.options.${key}.eyebrow`)}
                      </p>
                      <h3 className="mt-4 text-2xl font-semibold">
                        {t(`plans.options.${key}.title`)}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-white/65">
                        {t(`plans.options.${key}.text`)}
                      </p>

                      <div className="mt-6 space-y-3 text-left">
                        {items.map((item) => (
                          <div key={item} className="flex gap-3">
                            <CheckCircle className="mt-0.5 h-5 w-5 flex-none text-blue-300" />
                            <p className="text-sm leading-6 text-white/70">{item}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>

          <section className="border-t border-slate-700/50 bg-slate-800/30 py-24">
            <div className="ozony-container-wide">
              <SectionIntro
                eyebrow={t('faq.eyebrow')}
                title={t('faq.title')}
                description={t('faq.description')}
              />

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.12 }}
                className="mt-12 grid items-start gap-5 lg:grid-cols-2 2xl:gap-8"
              >
                {faqs.map((faq, index) => {
                  const isActive = activeFaqIndex === index;

                  return (
                    <motion.div
                      key={faq.key}
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

          <section className="border-t border-slate-700/50 py-24">
            <MotionReveal direction="up">
              <div className="ozony-container-visual rounded-[2rem] border border-blue-400/15 bg-gradient-to-br from-white/8 to-blue-500/10 p-8 text-center shadow-[0_0_50px_rgba(37,99,235,0.10)] backdrop-blur md:p-14">
                <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                  {t('finalCta.eyebrow')}
                </p>
                <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-semibold md:text-5xl">
                  {t('finalCta.title')}
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/65">
                  {t('finalCta.description')}
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
                  <PrimaryCtaButton to={contactPath}>
                    {t('cta.bookConsultation')}
                  </PrimaryCtaButton>

                  <SecondaryCtaButton to={contactPath}>
                    {t('cta.findMissedLeads')}
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
                    {t('finalCta.consultationLabel')}
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