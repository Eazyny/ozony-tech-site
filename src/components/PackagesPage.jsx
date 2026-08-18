import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Bot,
  CheckCircle2,
  Headphones,
  Network,
  ShieldCheck,
  Wifi,
  Wrench,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import DecodedText from '@/components/ui/decode-text';
import StarfieldBackground from '@/components/ui/starfield-background';
import FlipCard from '@/components/FlipCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  getLanguageFromPath,
  localizePath,
} from '@/i18n/languageRoutes';

const SITE_URL = 'https://ozony.tech';
const OG_IMAGE = `${SITE_URL}/images/packages/complete-stack.webp`;

const tierKeys = ['starter', 'growth', 'complete'];
const comparisonKeys = [
  'bestFor',
  'wifiCoverage',
  'networkSegmentation',
  'scalability',
  'supportFocus',
];
const brandKeys = ['unifi', 'omada', 'aruba'];
const servicePathKeys = [
  'networkSetup',
  'businessWifi',
  'firewallSetup',
  'itSupport',
  'managedIT',
  'aiLeadAgent',
];
const setupStepKeys = ['review', 'choose', 'build'];
const faqKeys = [
  'rightPackage',
  'customized',
  'brands',
  'upgradeLater',
  'itSupport',
  'aiLead',
];

const tierVisuals = {
  starter: {
    image: '/images/packages/starter-stack.webp',
    imageClassName: 'object-[center_42%]',
    serviceLink: '/network-setup-nyc',
  },
  growth: {
    image: '/images/packages/growth-stack.webp',
    imageClassName: 'object-[center_46%]',
    serviceLink: '/business-wifi-nyc',
  },
  complete: {
    image: '/images/packages/complete-stack.webp',
    imageClassName:
      'object-[center_62%] brightness-[0.52] saturate-[0.72] contrast-[1.04]',
    serviceLink: '/firewall-setup-nyc',
  },
};

const brandVisuals = {
  unifi: {
    icon: Wifi,
    title: 'UniFi',
    image: '/images/brands/Unifi.webp',
  },
  omada: {
    icon: Network,
    title: 'TP-Link Omada',
    image: '/images/brands/Omada.webp',
  },
  aruba: {
    icon: ShieldCheck,
    title: 'Aruba Instant On',
    image: '/images/brands/Aruba.webp',
  },
};

const servicePathVisuals = {
  networkSetup: {
    icon: Network,
    to: '/network-setup-nyc',
  },
  businessWifi: {
    icon: Wifi,
    to: '/business-wifi-nyc',
  },
  firewallSetup: {
    icon: ShieldCheck,
    to: '/firewall-setup-nyc',
  },
  itSupport: {
    icon: Wrench,
    to: '/it-support-nyc',
  },
  managedIT: {
    icon: Headphones,
    to: '/managed-it-services',
  },
  aiLeadAgent: {
    icon: Bot,
    to: '/ai-lead-agent',
  },
};

const PackagesPage = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();
  const { t } = useTranslation('packages');

  const language = getLanguageFromPath(location.pathname);
  const isSpanish = language === 'es';
  const homePath = localizePath('/', language);
  const contactPath = localizePath('/contact', language);
  const aiLeadPath = localizePath('/ai-lead-agent', language);
  const itSolutionsPath = localizePath('/it-solutions', language);

  const canonicalUrl = isSpanish
    ? `${SITE_URL}/es/packages`
    : `${SITE_URL}/packages`;

  const packageTiers = tierKeys.map((key) => ({
    key,
    name: t(`tiers.${key}.name`),
    badge: t(`tiers.${key}.badge`),
    image: tierVisuals[key].image,
    imageClassName: tierVisuals[key].imageClassName,
    stackLabel: t(`tiers.${key}.stackLabel`),
    stackName: t(`tiers.${key}.stackName`),
    description: t(`tiers.${key}.description`),
    bestFor: t(`tiers.${key}.bestFor`),
    includes: t(`tiers.${key}.includes`, { returnObjects: true }),
    serviceLink: localizePath(tierVisuals[key].serviceLink, language),
    serviceLabel: t(`tiers.${key}.serviceLabel`),
  }));

  const comparisonRows = comparisonKeys.map((key) => ({
    key,
    label: t(`comparison.rows.${key}.label`),
    starter: t(`comparison.rows.${key}.starter`),
    growth: t(`comparison.rows.${key}.growth`),
    complete: t(`comparison.rows.${key}.complete`),
  }));

  const brandLogic = brandKeys.map((key) => ({
    key,
    ...brandVisuals[key],
    eyebrow: t(`brands.${key}.eyebrow`),
    description: t(`brands.${key}.description`),
  }));

  const servicePaths = servicePathKeys.map((key) => ({
    key,
    ...servicePathVisuals[key],
    to: localizePath(servicePathVisuals[key].to, language),
    title: t(`servicePaths.${key}.title`),
    description: t(`servicePaths.${key}.description`),
    label: t(`servicePaths.${key}.label`),
  }));

  const setupSteps = setupStepKeys.map((key) => ({
    key,
    title: t(`setupSteps.${key}.title`),
    text: t(`setupSteps.${key}.text`),
  }));

  const fitCards = t('fit.cards', { returnObjects: true });

  const packageFaqs = faqKeys.map((key) => ({
    key,
    question: t(`faq.items.${key}.question`),
    answer: t(`faq.items.${key}.answer`),
  }));

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const packagesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: t('schema.serviceName'),
    provider: {
      '@type': 'ProfessionalService',
      name: 'Ozony Tech',
      url: SITE_URL,
      email: 'contact@ozony.tech',
      telephone: '+1-347-653-7655',
    },
    url: canonicalUrl,
    areaServed: ['New York City', 'New Jersey', 'Connecticut'],
    serviceType: t('schema.serviceTypes', { returnObjects: true }),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t('schema.catalogName'),
      itemListElement: packageTiers.map((tier) => ({
        '@type': 'Offer',
        name: t('schema.packageOfferName', { name: tier.name }),
        description: tier.description,
        itemOffered: {
          '@type': 'Service',
          name: t('schema.packageServiceName', { name: tier.name }),
          serviceType: tier.includes,
        },
      })),
    },
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
        name: t('schema.packages'),
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: packageFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{t('seo.title')}</title>

        <meta
          name="description"
          content={t('seo.description')}
        />

        <meta
          name="robots"
          content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        />

        <link rel="canonical" href={canonicalUrl} />

        <link
          rel="alternate"
          hrefLang="en"
          href={`${SITE_URL}/packages`}
        />

        <link
          rel="alternate"
          hrefLang="es"
          href={`${SITE_URL}/es/packages`}
        />

        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${SITE_URL}/packages`}
        />

        <meta
          property="og:title"
          content={t('seo.ogTitle')}
        />

        <meta
          property="og:description"
          content={t('seo.ogDescription')}
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Ozony Tech" />
        <meta property="og:image" content={OG_IMAGE} />

        <meta
          property="og:image:alt"
          content={t('seo.ogImageAlt')}
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content={t('seo.twitterTitle')}
        />

        <meta
          name="twitter:description"
          content={t('seo.twitterDescription')}
        />

        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">
          {JSON.stringify(packagesSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="ozony-page-canvas min-h-screen">
        <Header />

        <section className="bg-[#05080d] pt-28 pb-2 md:pt-32">
          <div className="ozony-container-wide">
            <Link
              to={homePath}
              className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('backToHome')}
            </Link>
          </div>
        </section>

        <main>
          <section className="ozony-flow ozony-flow-hero relative overflow-hidden py-14 md:py-20">
            <StarfieldBackground />

            <div className="ozony-container-wide relative">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mx-auto max-w-5xl text-center"
              >
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
                  {t('hero.eyebrow')}
                </p>

                <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
                  {t('hero.title')}
                </h1>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
                  {t('hero.description')}
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <Button
                    asChild
                    className="bg-blue-600 px-6 py-6 text-base text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700"
                  >
                    <Link to={contactPath}>
                      <DecodedText speed={12}>
                        {t('hero.primaryCta')}
                      </DecodedText>
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="border-blue-400 px-6 py-6 text-base text-blue-400 hover:bg-blue-400/10"
                  >
                    <Link to={aiLeadPath}>
                      <DecodedText speed={12}>
                        {t('hero.secondaryCta')}
                      </DecodedText>
                    </Link>
                  </Button>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-400">
                  {t('hero.chips', { returnObjects: true }).map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-2"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section className="ozony-flow ozony-flow-services pb-20 pt-6">
            <div className="ozony-container-wide">
              <div className="grid gap-6 lg:grid-cols-3 2xl:gap-8">
                {packageTiers.map((tier, index) => (
                  <motion.div
                    key={tier.key}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="flex h-full flex-col"
                  >
                    <FlipCard
                      name={tier.name}
                      badge={tier.badge}
                      image={tier.image}
                      imageClassName={tier.imageClassName}
                      description={tier.description}
                      bestFor={tier.bestFor}
                      includes={tier.includes}
                      stackLabel={tier.stackLabel}
                      stackName={tier.stackName}
                    />

                    <div className="mt-4">
                      <Link
                        to={tier.serviceLink}
                        className="group inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                      >
                        <span>{tier.serviceLabel}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-slate-700/50 bg-slate-900/50 px-6 py-5 text-center">
                <p className="text-sm uppercase tracking-[0.18em] text-blue-400">
                  {t('platformFit.eyebrow')}
                </p>

                <p className="mx-auto mt-2 max-w-3xl text-gray-400">
                  {t('platformFit.description')}
                </p>
              </div>
            </div>
          </section>

          <section className="ozony-flow ozony-flow-ai py-20">
            <div className="ozony-container-wide">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                  {t('comparison.title')}
                </h2>

                <p className="mx-auto max-w-3xl text-lg text-gray-400">
                  {t('comparison.description')}
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-700/50 bg-slate-900/70">
                <div className="min-w-[720px]">
                  <div className="grid grid-cols-4 border-b border-slate-700/50 bg-slate-900/80">
                    <div className="p-4 text-sm font-semibold text-gray-400">
                      {t('comparison.category')}
                    </div>

                    <div className="p-4 text-sm font-semibold text-white">
                      {t('tiers.starter.name')}
                    </div>

                    <div className="p-4 text-sm font-semibold text-white">
                      {t('tiers.growth.name')}
                    </div>

                    <div className="p-4 text-sm font-semibold text-white">
                      {t('tiers.complete.name')}
                    </div>
                  </div>

                  {comparisonRows.map((row, index) => (
                    <div
                      key={row.key}
                      className={`grid grid-cols-4 ${
                        index !== comparisonRows.length - 1
                          ? 'border-b border-slate-700/50'
                          : ''
                      }`}
                    >
                      <div className="p-4 text-sm font-medium text-gray-300">
                        {row.label}
                      </div>

                      <div className="p-4 text-sm text-gray-400">
                        {row.starter}
                      </div>

                      <div className="p-4 text-sm text-gray-400">
                        {row.growth}
                      </div>

                      <div className="p-4 text-sm text-gray-400">
                        {row.complete}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="ozony-flow ozony-flow-about py-20">
            <div className="ozony-container-wide">
              <div className="mb-12 text-center">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
                  {t('servicePathsSection.eyebrow')}
                </p>

                <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                  {t('servicePathsSection.title')}
                </h2>

                <p className="mx-auto max-w-3xl text-lg text-gray-400">
                  {t('servicePathsSection.description')}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {servicePaths.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <motion.div
                      key={service.key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.06,
                      }}
                      className="flex h-full flex-col rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6"
                    >
                      <div className="mb-5 inline-flex w-fit rounded-xl bg-blue-500/10 p-3">
                        <Icon className="h-6 w-6 text-blue-400" />
                      </div>

                      <h3 className="text-2xl font-bold text-white">
                        {service.title}
                      </h3>

                      <p className="mt-3 flex-1 leading-relaxed text-gray-400">
                        {service.description}
                      </p>

                      <Link
                        to={service.to}
                        className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                      >
                        <span>{service.label}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="ozony-flow ozony-flow-work py-20">
            <div className="ozony-container-wide">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                  {t('selection.title')}
                </h2>

                <p className="mx-auto max-w-3xl text-lg text-gray-400">
                  {t('selection.description')}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3 2xl:gap-8">
                {setupSteps.map((step, index) => (
                  <motion.div
                    key={step.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6"
                  >
                    <div className="mb-5 inline-flex rounded-xl bg-green-500/10 p-3">
                      <CheckCircle2 className="h-6 w-6 text-green-400" />
                    </div>

                    <h3 className="text-xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-relaxed text-gray-400">
                      {step.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="ozony-flow ozony-flow-credentials py-20">
            <div className="ozony-container-wide">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                  {t('brandsSection.title')}
                </h2>

                <p className="mx-auto max-w-3xl text-lg text-gray-400">
                  {t('brandsSection.description')}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3 2xl:gap-8">
                {brandLogic.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6"
                    >
                      <div className="mb-5 overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-950/50">
                        <div className="relative h-44 overflow-hidden">
                          <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-500/10 via-transparent to-slate-900/40" />

                          <img
                            src={item.image}
                            alt={t('brandImageAlt', {
                              title: item.title,
                            })}
                            className="h-full w-full object-contain p-4"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      <div className="mb-4 inline-flex rounded-xl bg-blue-500/10 p-3">
                        <Icon className="h-6 w-6 text-blue-400" />
                      </div>

                      <p className="text-xs uppercase tracking-[0.18em] text-blue-400">
                        {item.eyebrow}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 leading-relaxed text-gray-400">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="ozony-flow ozony-flow-faq py-20">
            <div className="ozony-container-wide">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                  {t('fit.title')}
                </h2>

                <p className="mx-auto max-w-3xl text-lg text-gray-400">
                  {t('fit.description')}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {fitCards.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    className="rounded-xl border border-slate-700/50 bg-slate-900/60 p-5"
                  >
                    <p className="font-medium text-white">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="ozony-flow ozony-flow-contact py-20">
            <div className="ozony-container-wide">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                  {t('faq.title')}
                </h2>

                <p className="mx-auto max-w-3xl text-lg text-gray-400">
                  {t('faq.description')}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {packageFaqs.map((faq, index) => (
                  <motion.div
                    key={faq.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6"
                  >
                    <h3 className="text-xl font-semibold text-white">
                      {faq.question}
                    </h3>

                    <p className="mt-3 leading-relaxed text-gray-400">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="ozony-flow ozony-flow-cta pb-20">
            <div className="ozony-container">
              <div className="rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900/90 to-slate-800/80 px-8 py-14 text-center shadow-lg shadow-blue-500/10">
                <h2 className="text-3xl font-bold text-white md:text-5xl">
                  {t('finalCta.title')}
                </h2>

                <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-400">
                  {t('finalCta.description')}
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Button
                    asChild
                    className="bg-blue-600 px-6 py-6 text-base text-white hover:bg-blue-700"
                  >
                    <Link to={contactPath}>
                      <DecodedText speed={12}>
                        {t('finalCta.primaryCta')}
                      </DecodedText>
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="border-blue-400 px-6 py-6 text-base text-blue-400 hover:bg-blue-400/10"
                  >
                    <Link to={itSolutionsPath}>
                      <ArrowRight className="mr-2 h-5 w-5" />
                      <DecodedText speed={12}>
                        {t('finalCta.secondaryCta')}
                      </DecodedText>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />

        <AnimatePresence>
          {showBackToTop && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-6 right-6 z-50"
            >
              <button
                onClick={scrollToTop}
                aria-label={t('backToTop')}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/30 bg-slate-900/90 text-blue-400 shadow-lg shadow-blue-500/20 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-blue-500/10 hover:text-white"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default PackagesPage;