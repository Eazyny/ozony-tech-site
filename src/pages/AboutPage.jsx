import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight,
  Bot,
  Building2,
  CheckCircle2,
  Headphones,
  MapPin,
  MessageSquare,
  Network,
  ShieldCheck,
  Sparkles,
  Wifi,
  Wrench,
} from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import SpotlightCard from '@/components/ui/spotlight-card';
import StarBorder from '@/components/ui/star-border';
import StarfieldBackground from '@/components/ui/starfield-background';
import {
  getLanguageFromPath,
  localizePath,
} from '@/i18n/languageRoutes';

const SITE_URL = 'https://ozony.tech';
const OG_IMAGE = `${SITE_URL}/images/ozony-og-preview.png`;
const smoothEase = [0.22, 1, 0.36, 1];

const pillarVisuals = [
  { key: 'practical', icon: Wrench },
  { key: 'reliable', icon: ShieldCheck },
  { key: 'clear', icon: MessageSquare },
];

const approachVisuals = [
  { key: 'understand', number: '01' },
  { key: 'simplify', number: '02' },
  { key: 'build', number: '03' },
  { key: 'support', number: '04' },
];

const serviceVisuals = [
  { key: 'network', icon: Network, to: '/network-setup-nyc' },
  { key: 'wifi', icon: Wifi, to: '/business-wifi-nyc' },
  { key: 'support', icon: Headphones, to: '/it-support' },
  { key: 'security', icon: ShieldCheck, to: '/firewall-setup-nyc' },
  { key: 'managed', icon: Building2, to: '/managed-it-services' },
  { key: 'ai', icon: Bot, to: '/ai-lead-agent' },
];

const fitVisuals = [
  { key: 'offices', icon: Building2 },
  { key: 'retail', icon: MapPin },
  { key: 'service', icon: Wrench },
];

const Reveal = ({ children, className = '', delay = 0, x = 0, y = 28 }) => (
  <motion.div
    initial={{ opacity: 0, x, y, scale: 0.985 }}
    whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.18 }}
    transition={{ duration: 0.68, delay, ease: smoothEase }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionIntro = ({ eyebrow, title, description, align = 'center' }) => {
  const alignment =
    align === 'left'
      ? 'text-left'
      : 'mx-auto text-center';

  return (
    <Reveal className={`max-w-4xl ${alignment}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-white/65 md:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
};

const AboutPage = () => {
  const location = useLocation();
  const { t } = useTranslation('aboutPage');

  const language = getLanguageFromPath(location.pathname);
  const localized = (path) => localizePath(path, language);

  const canonicalPath = localizePath('/about', language);
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const englishUrl = `${SITE_URL}/about`;
  const spanishUrl = `${SITE_URL}/es/about`;
  const homeUrl = language === 'es' ? `${SITE_URL}/es` : `${SITE_URL}/`;

  const chips = t('hero.chips', { returnObjects: true });
  const storyPoints = t('story.points', { returnObjects: true });
  const trainingAreas = t('credibility.areas', { returnObjects: true });
  const serviceAreas = t('fit.areas', { returnObjects: true });

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: t('seo.schemaName'),
    description: t('seo.description'),
    url: canonicalUrl,
    inLanguage: language === 'es' ? 'es' : 'en',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Ozony Tech',
      url: SITE_URL,
    },
    about: {
      '@type': 'ProfessionalService',
      name: 'Ozony Tech',
      url: SITE_URL,
      email: 'contact@ozony.tech',
      telephone: '+1-347-653-7655',
      image: OG_IMAGE,
      areaServed: ['New York City', 'New Jersey', 'Connecticut'],
      serviceType: [
        'IT Support',
        'Network Setup',
        'Business Wi-Fi',
        'Firewall Setup',
        'Managed IT Services',
        'AI Lead Response Automation',
      ],
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('breadcrumbs.home'),
        item: homeUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('breadcrumbs.about'),
        item: canonicalUrl,
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

        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href={englishUrl} />
        <link rel="alternate" hrefLang="es" href={spanishUrl} />
        <link rel="alternate" hrefLang="x-default" href={englishUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Ozony Tech" />
        <meta property="og:title" content={t('seo.ogTitle')} />
        <meta property="og:description" content={t('seo.ogDescription')} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={t('seo.ogImageAlt')} />
        <meta property="og:locale" content={language === 'es' ? 'es_ES' : 'en_US'} />
        <meta
          property="og:locale:alternate"
          content={language === 'es' ? 'en_US' : 'es_ES'}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('seo.ogTitle')} />
        <meta name="twitter:description" content={t('seo.ogDescription')} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="ozony-page-canvas min-h-screen text-white">
        <Header />

        <main>
          <section className="ozony-flow ozony-flow-hero relative overflow-hidden pb-20 pt-32 md:pb-24 md:pt-36">
            <StarfieldBackground />

            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-[-6rem] h-[600px] w-[720px] -translate-x-1/2 rounded-full bg-blue-500/[0.16] blur-[160px]" />
              <div className="absolute right-[-10rem] top-[20rem] h-[430px] w-[430px] rounded-full bg-cyan-400/[0.08] blur-[130px]" />
            </div>

            <div className="ozony-container-wide relative z-10">
              <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] xl:gap-16 2xl:grid-cols-[0.88fr_1.12fr] 2xl:gap-24">
                <motion.div
                  initial={{ opacity: 0, x: -42, scale: 0.985 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.78, ease: smoothEase }}
                  className="max-w-3xl"
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-blue-200 backdrop-blur">
                    <Sparkles className="h-4 w-4" />
                    {t('hero.eyebrow')}
                  </div>

                  <h1 className="mt-7 text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl 2xl:text-7xl">
                    {t('hero.title')}
                  </h1>

                  <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
                    {t('hero.description')}
                  </p>

                  <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                    <StarBorder className="rounded-xl">
                      <Button
                        asChild
                        size="lg"
                        className="h-14 border-0 bg-blue-600 px-7 text-base font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500"
                      >
                        <Link to={localized('/contact')}>
                          {t('hero.primaryCta')}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </StarBorder>

                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="h-14 border-blue-400/30 bg-transparent px-7 text-base text-white hover:bg-blue-500/10"
                    >
                      <Link to={localized('/certifications')}>
                        {t('hero.secondaryCta')}
                      </Link>
                    </Button>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 42, scale: 0.97 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.82, delay: 0.08, ease: smoothEase }}
                  className="group relative"
                >
                  <div className="absolute -inset-6 rounded-[2.5rem] bg-blue-500/15 opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <SpotlightCard className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-2 shadow-[0_0_90px_rgba(37,99,235,0.16)] backdrop-blur-xl">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[1.55rem] bg-slate-950">
                      <img
                        src="/images/HowWeWork-1200.webp"
                        srcSet="/images/HowWeWork-800.webp 800w, /images/HowWeWork-1200.webp 1200w, /images/HowWeWork-1600.webp 1600w"
                        sizes="(max-width: 1024px) calc(100vw - 32px), 760px"
                        width="1200"
                        height="675"
                        alt={t('hero.imageAlt')}
                        className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.018]"
                        loading="eager"
                        decoding="sync"
                        fetchPriority="high"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-blue-500/5" />

                      <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                          {t('hero.visualEyebrow')}
                        </p>
                        <p className="mt-2 text-base font-semibold text-white md:text-lg">
                          {t('hero.visualText')}
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="ozony-flow ozony-flow-services py-20 md:py-24">
            <div className="ozony-container-wide">
              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] xl:gap-16">
                <Reveal x={-34}>
                  <div className="group relative">
                    <div className="absolute -inset-5 rounded-[2.25rem] bg-blue-500/10 blur-3xl" />
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-xl shadow-blue-500/10">
                      <img
                        src="/images/NetworkSetup-1200.webp"
                        srcSet="/images/NetworkSetup-800.webp 800w, /images/NetworkSetup-1200.webp 1200w, /images/NetworkSetup-1600.webp 1600w"
                        sizes="(max-width: 1024px) calc(100vw - 32px), 720px"
                        width="1200"
                        height="675"
                        alt={t('story.imageAlt')}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </Reveal>

                <Reveal x={34} delay={0.06}>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
                    {t('story.eyebrow')}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                    {t('story.title')}
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-white/65">
                    {t('story.paragraphOne')}
                  </p>
                  <p className="mt-4 text-base leading-8 text-white/60">
                    {t('story.paragraphTwo')}
                  </p>

                  <div className="mt-7 space-y-3">
                    {storyPoints.map((point) => (
                      <div key={point} className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-blue-300" />
                        <p className="text-sm leading-7 text-white/70">{point}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          <section className="ozony-flow ozony-flow-ai py-20 md:py-24">
            <div className="ozony-container-wide">
              <SectionIntro
                eyebrow={t('pillars.eyebrow')}
                title={t('pillars.title')}
                description={t('pillars.description')}
              />

              <div className="mt-12 grid gap-6 md:grid-cols-3 2xl:gap-8">
                {pillarVisuals.map((pillar, index) => {
                  const Icon = pillar.icon;

                  return (
                    <Reveal key={pillar.key} delay={index * 0.07} y={34}>
                      <motion.div
                        whileHover={{ y: -7 }}
                        transition={{ duration: 0.22, ease: smoothEase }}
                        className="h-full"
                      >
                        <SpotlightCard className="h-full rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur transition-colors duration-300 hover:border-blue-400/35 hover:bg-white/[0.065]">
                          <div className="inline-flex rounded-2xl border border-blue-400/15 bg-blue-500/10 p-3">
                            <Icon className="h-6 w-6 text-blue-300" />
                          </div>

                          <h3 className="mt-6 text-2xl font-semibold text-white">
                            {t(`pillars.items.${pillar.key}.title`)}
                          </h3>

                          <p className="mt-4 text-base leading-7 text-white/60">
                            {t(`pillars.items.${pillar.key}.text`)}
                          </p>
                        </SpotlightCard>
                      </motion.div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="ozony-flow ozony-flow-about py-20 md:py-24">
            <div className="ozony-container-wide">
              <SectionIntro
                eyebrow={t('approach.eyebrow')}
                title={t('approach.title')}
                description={t('approach.description')}
                align="left"
              />

              <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4 2xl:gap-7">
                {approachVisuals.map((step, index) => (
                  <Reveal key={step.key} delay={index * 0.07} y={30}>
                    <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                      <div className="absolute right-5 top-3 text-5xl font-bold text-white/[0.045]">
                        {step.number}
                      </div>

                      <div className="relative">
                        <h3 className="text-xl font-semibold text-white">
                          {t(`approach.steps.${step.key}.title`)}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-white/60">
                          {t(`approach.steps.${step.key}.text`)}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section className="ozony-flow ozony-flow-work py-20 md:py-24">
            <div className="ozony-container-wide">
              <SectionIntro
                eyebrow={t('services.eyebrow')}
                title={t('services.title')}
                description={t('services.description')}
              />

              <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:gap-7">
                {serviceVisuals.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <Reveal key={service.key} delay={index * 0.045} y={28}>
                      <Link
                        to={localized(service.to)}
                        className="group block h-full"
                      >
                        <SpotlightCard className="h-full rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-400/35 group-hover:bg-white/[0.065]">
                          <div className="flex items-start justify-between gap-5">
                            <div className="rounded-2xl bg-blue-500/10 p-3">
                              <Icon className="h-6 w-6 text-blue-300" />
                            </div>
                            <ArrowRight className="h-5 w-5 text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-300" />
                          </div>

                          <h3 className="mt-5 text-xl font-semibold text-white">
                            {t(`services.items.${service.key}.title`)}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-white/60">
                            {t(`services.items.${service.key}.text`)}
                          </p>
                        </SpotlightCard>
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="ozony-flow ozony-flow-credentials py-20 md:py-24">
            <div className="ozony-container-wide">
              <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] xl:gap-16">
                <Reveal x={-32}>
                  <div className="mx-auto max-w-md">
                    <div className="group relative">
                      <div className="absolute -inset-6 rounded-[2.25rem] bg-blue-500/10 blur-3xl" />
                      <SpotlightCard className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
                        <img
                          src="/images/credentials/GoogleITSupportCert.webp"
                          alt={t('credibility.imageAlt')}
                          className="w-full rounded-[1.4rem] border border-white/10 bg-white object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </SpotlightCard>
                    </div>
                  </div>
                </Reveal>

                <Reveal x={32} delay={0.06}>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
                    {t('credibility.eyebrow')}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                    {t('credibility.title')}
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-white/65">
                    {t('credibility.description')}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {trainingAreas.map((area) => (
                      <span
                        key={area}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="mt-8 border-blue-400/30 bg-transparent text-white hover:bg-blue-500/10"
                  >
                    <Link to={localized('/certifications')}>
                      {t('credibility.cta')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Reveal>
              </div>
            </div>
          </section>

          <section className="ozony-flow ozony-flow-faq py-20 md:py-24">
            <div className="ozony-container-wide">
              <SectionIntro
                eyebrow={t('fit.eyebrow')}
                title={t('fit.title')}
                description={t('fit.description')}
              />

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/[0.07] px-4 py-2 text-sm text-blue-100"
                  >
                    <MapPin className="h-4 w-4 text-blue-300" />
                    {area}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-3 2xl:gap-7">
                {fitVisuals.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Reveal key={item.key} delay={index * 0.06} y={28}>
                      <div className="h-full rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 text-center">
                        <div className="mx-auto inline-flex rounded-2xl bg-blue-500/10 p-3">
                          <Icon className="h-6 w-6 text-blue-300" />
                        </div>
                        <h3 className="mt-5 text-xl font-semibold text-white">
                          {t(`fit.items.${item.key}.title`)}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-white/60">
                          {t(`fit.items.${item.key}.text`)}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="ozony-flow ozony-flow-contact py-24">
            <div className="ozony-container-wide">
              <Reveal>
                <div className="relative overflow-hidden rounded-[2.25rem] border border-blue-300/15 bg-blue-500/[0.08] px-6 py-12 text-center shadow-[0_0_80px_rgba(37,99,235,0.12)] md:px-10 md:py-16">
                  <div className="pointer-events-none absolute left-1/2 top-[-8rem] h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[110px]" />

                  <div className="relative mx-auto max-w-4xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
                      {t('final.eyebrow')}
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                      {t('final.title')}
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
                      {t('final.description')}
                    </p>

                    <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                      <StarBorder className="rounded-xl">
                        <Button
                          asChild
                          size="lg"
                          className="h-14 border-0 bg-blue-600 px-8 text-base font-semibold text-white hover:bg-blue-500"
                        >
                          <Link to={localized('/contact')}>
                            {t('final.primaryCta')}
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                      </StarBorder>

                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="h-14 border-blue-400/30 bg-transparent px-8 text-base text-white hover:bg-blue-500/10"
                      >
                        <Link to={localized('/it-solutions')}>
                          {t('final.secondaryCta')}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;