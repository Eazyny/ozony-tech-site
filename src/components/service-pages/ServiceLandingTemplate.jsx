import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  MapPin,
  Network,
  Shield,
  Server,
  Briefcase,
  Wifi,
  Building2,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import StarfieldBackground from '@/components/ui/starfield-background';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  getLanguageFromPath,
  localizePath,
  stripLanguagePrefix,
} from '@/i18n/languageRoutes';

const SITE_URL = 'https://ozony.tech';
const DEFAULT_OG_IMAGE = '/images/ozony-og-preview.png';

const ALL_SERVICE_LINKS = [
  { key: 'aiLeadAgent', to: '/ai-lead-agent' },
  { key: 'businessNetworkSetupNYC', to: '/network-setup-nyc' },
  { key: 'businessWifiConnecticut', to: '/business-wifi-connecticut' },
  { key: 'businessWifiNYC', to: '/business-wifi-nyc' },
  { key: 'firewallSetupConnecticut', to: '/firewall-setup-connecticut' },
  { key: 'firewallSetupNYC', to: '/firewall-setup-nyc' },
  { key: 'itServicesNearMe', to: '/it-services-near-me' },
  { key: 'itSolutions', to: '/it-solutions' },
  { key: 'itSupport', to: '/it-support' },
  { key: 'itSupportConnecticut', to: '/it-support-connecticut' },
  { key: 'itSupportNJ', to: '/it-support-nj' },
  { key: 'itSupportNYC', to: '/it-support-nyc' },
  { key: 'managedITServices', to: '/managed-it-services' },
  { key: 'networkServicesNearMe', to: '/network-services-near-me' },
  { key: 'networkSetupConnecticut', to: '/network-setup-connecticut' },
  { key: 'networkSetupNJ', to: '/network-setup-nj' },
  { key: 'networkSetupNYC', to: '/network-setup-nyc' },
  { key: 'networkTroubleshootingNYC', to: '/network-troubleshooting-nyc' },
  { key: 'smallBusinessNetworkNYC', to: '/small-business-network-nyc' },
];

const sectionClass = 'border-t border-white/5 py-20';

const normalizePathname = (pathname) => {
  if (!pathname) return '/';

  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }

  return pathname;
};

const absoluteUrl = (value) => {
  if (!value) return '';

  if (value.startsWith('http://') || value.startsWith('https://')) {
    return value;
  }

  if (value.startsWith('/')) {
    return `${SITE_URL}${value}`;
  }

  return `${SITE_URL}/${value}`;
};

const ServiceLandingTemplate = ({
  pageTitle,
  pageDescription,
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  primaryCtaTo = '/contact',
  secondaryCtaTo = '/contact',
  heroImage = '/images/services/network-setup-nyc.webp',
  heroImageAlt,
  trustChips,
  includeTitle,
  includeDescription,
  serviceIncludes,
  outcomes,
  industriesTitle,
  idealFor,
  seoTitle,
  seoParagraphs,
  areasServed,
  faqItems,
  relatedServices = null,
  canonicalPath = null,
  midCtaEyebrow,
  midCtaTitle,
  midCtaDescription,
  finalTitle,
  finalDescription,
  ogImage = DEFAULT_OG_IMAGE,
  twitterImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();
  const { t } = useTranslation('serviceLanding');

  const language = getLanguageFromPath(location.pathname);
  const homePath = localizePath('/', language);

  const normalizedPathname = useMemo(
    () => normalizePathname(location.pathname),
    [location.pathname]
  );

  const canonicalBasePath = useMemo(() => {
    const sourcePath = canonicalPath
      ? normalizePathname(canonicalPath)
      : normalizedPathname;

    return normalizePathname(stripLanguagePrefix(sourcePath));
  }, [canonicalPath, normalizedPathname]);

  const localizedCanonicalPath = useMemo(
    () => localizePath(canonicalBasePath, language),
    [canonicalBasePath, language]
  );

  const canonicalUrl = useMemo(
    () => absoluteUrl(localizedCanonicalPath),
    [localizedCanonicalPath]
  );

  const englishCanonicalUrl = useMemo(
    () => absoluteUrl(localizePath(canonicalBasePath, 'en')),
    [canonicalBasePath]
  );

  const spanishCanonicalUrl = useMemo(
    () => absoluteUrl(localizePath(canonicalBasePath, 'es')),
    [canonicalBasePath]
  );

  const ogImageUrl = useMemo(
    () => absoluteUrl(ogImage || DEFAULT_OG_IMAGE),
    [ogImage]
  );

  const twitterImageUrl = useMemo(
    () => absoluteUrl(twitterImage || ogImage || DEFAULT_OG_IMAGE),
    [twitterImage, ogImage]
  );

  const defaultIncludes = useMemo(
    () => t('defaults.includes', { returnObjects: true }),
    [t, language]
  );

  const defaultIdealFor = useMemo(
    () => [
      {
        title: t('defaults.idealFor.offices.title'),
        description: t('defaults.idealFor.offices.description'),
        icon: Briefcase,
      },
      {
        title: t('defaults.idealFor.retail.title'),
        description: t('defaults.idealFor.retail.description'),
        icon: Building2,
      },
      {
        title: t('defaults.idealFor.restaurants.title'),
        description: t('defaults.idealFor.restaurants.description'),
        icon: Wifi,
      },
    ],
    [t, language]
  );

  const defaultFaqItems = useMemo(
    () => t('defaults.faqItems', { returnObjects: true }),
    [t, language]
  );

  const effectivePageTitle =
    pageTitle || t('defaults.pageTitle');
  const effectivePageDescription =
    pageDescription || t('defaults.pageDescription');
  const effectiveEyebrow =
    eyebrow || t('defaults.eyebrow');
  const effectiveTitle =
    title || t('defaults.title');
  const effectiveDescription =
    description || t('defaults.description');
  const effectivePrimaryCta =
    primaryCta || t('defaults.primaryCta');
  const effectiveSecondaryCta =
    secondaryCta || t('defaults.secondaryCta');
  const effectiveHeroImageAlt =
    heroImageAlt || t('defaults.heroImageAlt');
  const effectiveTrustChips =
    trustChips || t('defaults.trustChips', { returnObjects: true });
  const effectiveIncludeTitle =
    includeTitle || t('defaults.includeTitle');
  const effectiveIncludeDescription =
    includeDescription || t('defaults.includeDescription');
  const effectiveServiceIncludes =
    serviceIncludes || defaultIncludes;
  const effectiveOutcomes =
    outcomes || [
      {
        icon: Network,
        title: t('defaults.outcomes.professional.title'),
        text: t('defaults.outcomes.professional.text'),
      },
      {
        icon: Shield,
        title: t('defaults.outcomes.security.title'),
        text: t('defaults.outcomes.security.text'),
      },
      {
        icon: MapPin,
        title: t('defaults.outcomes.local.title'),
        text: t('defaults.outcomes.local.text'),
      },
    ];
  const effectiveIndustriesTitle =
    industriesTitle || t('defaults.industriesTitle');
  const effectiveIdealFor =
    idealFor || defaultIdealFor;
  const effectiveSeoTitle =
    seoTitle || t('defaults.seoTitle');
  const effectiveSeoParagraphs =
    seoParagraphs || t('defaults.seoParagraphs', { returnObjects: true });
  const effectiveAreasServed =
    areasServed || t('defaults.areasServed');
  const effectiveFaqItems =
    faqItems || defaultFaqItems;
  const effectiveMidCtaEyebrow =
    midCtaEyebrow || t('defaults.midCtaEyebrow');
  const effectiveMidCtaTitle =
    midCtaTitle || t('defaults.midCtaTitle');
  const effectiveMidCtaDescription =
    midCtaDescription || t('defaults.midCtaDescription');
  const effectiveFinalTitle =
    finalTitle || t('defaults.finalTitle');
  const effectiveFinalDescription =
    finalDescription || t('defaults.finalDescription');

  const localizedPrimaryCtaTo = localizePath(primaryCtaTo, language);
  const localizedSecondaryCtaTo = localizePath(secondaryCtaTo, language);

  const relatedServicesToRender = useMemo(() => {
    if (relatedServices && relatedServices.length > 0) {
      return relatedServices.map((service) => ({
        ...service,
        to: localizePath(service.to, language),
      }));
    }

    return ALL_SERVICE_LINKS
      .filter(
        (service) =>
          normalizePathname(service.to) !== canonicalBasePath
      )
      .map((service) => ({
        label: t(`serviceLinks.${service.key}`),
        to: localizePath(service.to, language),
      }));
  }, [
    relatedServices,
    canonicalBasePath,
    language,
    t,
  ]);

  const faqSchema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: effectiveFaqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    }),
    [effectiveFaqItems]
  );

  const serviceSchema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: effectiveTitle,
      name: effectivePageTitle,
      description: effectivePageDescription,
      provider: {
        '@type': 'ProfessionalService',
        name: 'Ozony Tech',
        url: SITE_URL,
        email: 'contact@ozony.tech',
        telephone: '+1-347-653-7655',
        image: absoluteUrl(DEFAULT_OG_IMAGE),
      },
      areaServed: effectiveAreasServed,
      url: canonicalUrl,
      image: ogImageUrl,
    }),
    [
      effectiveTitle,
      effectivePageTitle,
      effectivePageDescription,
      effectiveAreasServed,
      canonicalUrl,
      ogImageUrl,
    ]
  );

  const breadcrumbSchema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: t('breadcrumbs.home'),
          item: absoluteUrl(homePath),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: t('breadcrumbs.services'),
          item: `${absoluteUrl(homePath)}#services`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: effectiveTitle,
          item: canonicalUrl,
        },
      ],
    }),
    [t, homePath, effectiveTitle, canonicalUrl]
  );

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

  return (
    <>
      <Helmet>
        <title>{effectivePageTitle}</title>
        <meta
          name="description"
          content={effectivePageDescription}
        />
        <meta
          name="robots"
          content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        />

        <link rel="canonical" href={canonicalUrl} />

        <link
          rel="alternate"
          hrefLang="en"
          href={englishCanonicalUrl}
        />
        <link
          rel="alternate"
          hrefLang="es"
          href={spanishCanonicalUrl}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={englishCanonicalUrl}
        />

        <meta property="og:title" content={effectivePageTitle} />
        <meta property="og:description" content={effectivePageDescription} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Ozony Tech" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={effectiveHeroImageAlt} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={effectivePageTitle} />
        <meta name="twitter:description" content={effectivePageDescription} />
        <meta name="twitter:image" content={twitterImageUrl} />

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        {effectiveFaqItems.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      <div className="min-h-screen app-bg text-white">
        <Header />

        <main>
          <section className="relative overflow-hidden">
            <StarfieldBackground />

            <div className="relative z-10">
              <section className="pt-24 pb-8">
                <div className="ozony-container-wide">
                  <Link
                    to={homePath}
                    className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    {t('ui.backToHome')}
                  </Link>
                </div>
              </section>

              <section className="pb-16">
                <div className="ozony-container-narrow text-center">
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-sm font-medium uppercase tracking-[0.24em] text-blue-400/90"
                  >
                    {effectiveEyebrow}
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.05 }}
                    className="mx-auto mt-6 max-w-5xl text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl"
                  >
                    {effectiveTitle}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-xl"
                  >
                    {effectiveDescription}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.15 }}
                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                  >
                    <Button asChild size="lg" className="group min-w-[190px]">
                      <Link to={localizedPrimaryCtaTo}>
                        {effectivePrimaryCta}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </Button>

                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="min-w-[190px] border-blue-400/30 bg-transparent text-white hover:bg-blue-500/10"
                    >
                      <Link to={localizedSecondaryCtaTo}>
                        {effectiveSecondaryCta}
                      </Link>
                    </Button>
                  </motion.div>

                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    {effectiveTrustChips.map((chip) => (
                      <div
                        key={chip}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur"
                      >
                        {chip}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="pb-20">
                <div className="ozony-container-visual">
                  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(37,99,235,0.12)] backdrop-blur">
                    <img
                      src={heroImage}
                      alt={effectiveHeroImageAlt}
                      className="h-full max-h-[560px] w-full object-cover"
                    />
                  </div>
                </div>
              </section>
            </div>
          </section>

          <div className="bg-[#08152b]">
            <section className={sectionClass}>
              <div className="ozony-container-wide grid gap-6 lg:grid-cols-3 2xl:gap-8">
                {effectiveOutcomes.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
                    >
                      <Icon className="mb-5 h-6 w-6 text-blue-300" />
                      <h2 className="text-2xl font-semibold">{item.title}</h2>
                      <p className="mt-3 text-base leading-7 text-white/65">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className={sectionClass}>
              <div className="ozony-container-wide">
                <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                    {t('ui.services')}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                    {effectiveIncludeTitle}
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-white/65">
                    {effectiveIncludeDescription}
                  </p>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:gap-7">
                  {effectiveServiceIncludes.map((item) => (
                    <div
                      key={item}
                      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                    >
                      <Server className="mb-4 h-5 w-5 text-blue-300" />
                      <p className="text-base leading-7 text-white/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="border-t border-white/5 py-16">
              <div className="ozony-container-visual rounded-[2rem] border border-blue-400/15 bg-gradient-to-br from-white/8 to-blue-500/10 p-8 text-center shadow-[0_0_50px_rgba(37,99,235,0.10)] backdrop-blur md:p-12">
                <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                  {effectiveMidCtaEyebrow}
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                  {effectiveMidCtaTitle}
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/65">
                  {effectiveMidCtaDescription}
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button asChild size="lg" className="group min-w-[190px]">
                    <Link to={localizedPrimaryCtaTo}>
                      {effectivePrimaryCta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="min-w-[190px] border-blue-400/30 bg-transparent text-white hover:bg-blue-500/10"
                  >
                    <Link to={localizedSecondaryCtaTo}>
                      {effectiveSecondaryCta}
                    </Link>
                  </Button>
                </div>
              </div>
            </section>

            <section className={sectionClass}>
              <div className="ozony-container-wide">
                <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                    {t('ui.whoItsFor')}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                    {effectiveIndustriesTitle}
                  </h2>
                </div>

                <div className="mt-10 grid gap-5 lg:grid-cols-3 2xl:gap-7">
                  {effectiveIdealFor.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
                      >
                        <Icon className="mb-5 h-6 w-6 text-blue-300" />
                        <h3 className="text-2xl font-semibold">{item.title}</h3>
                        <p className="mt-3 text-base leading-7 text-white/65">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            <section className={sectionClass}>
              <div className="ozony-container-wide grid gap-6 lg:grid-cols-[1fr_1fr] 2xl:gap-8">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
                  <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                    {t('ui.whyOzonyTech')}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                    {effectiveSeoTitle}
                  </h2>

                  <div className="mt-6 space-y-5 text-base leading-8 text-white/70">
                    {effectiveSeoParagraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                    <p className="text-white/90">{effectiveAreasServed}</p>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
                  <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                    {t('ui.faq')}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                    {t('ui.commonQuestions')}
                  </h2>

                  <div className="mt-8 space-y-6">
                    {effectiveFaqItems.map((item) => (
                      <div key={item.question}>
                        <h3 className="text-lg font-semibold">{item.question}</h3>
                        <p className="mt-2 text-base leading-7 text-white/65">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {relatedServicesToRender.length > 0 && (
              <section className={sectionClass}>
                <div className="ozony-container-wide">
                  <div className="max-w-3xl">
                    <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                      {t('ui.relatedServices')}
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                      {t('ui.exploreMoreSolutions')}
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-white/65">
                      {t('ui.relatedDescription')}
                    </p>
                  </div>

                  <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4 2xl:gap-7">
                    {relatedServicesToRender.map((service) => (
                      <Link
                        key={service.to}
                        to={service.to}
                        className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:border-blue-400/40 hover:bg-white/10"
                      >
                        <h3 className="text-xl font-semibold text-white">
                          {service.label}
                        </h3>

                        <div className="mt-4 inline-flex items-center gap-2 text-sm text-blue-400 group-hover:text-blue-300">
                          <span>{t('ui.viewService')}</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )}

            <section className="border-t border-white/5 py-24">
              <div className="ozony-container-visual rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur md:p-14">
                <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                  {t('ui.getStarted')}
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                  {effectiveFinalTitle}
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/65">
                  {effectiveFinalDescription}
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button asChild size="lg" className="group min-w-[190px]">
                    <Link to={localizedPrimaryCtaTo}>
                      {effectivePrimaryCta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="min-w-[190px] border-blue-400/30 bg-transparent text-white hover:bg-blue-500/10"
                  >
                    <Link to={localizedSecondaryCtaTo}>
                      {effectiveSecondaryCta}
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
          </div>
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
                aria-label={t('ui.backToTop')}
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

export default ServiceLandingTemplate;