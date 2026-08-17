import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';
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

const quickPointVisuals = [
  { key: 'collection', icon: Database },
  { key: 'ai', icon: Bot },
  { key: 'security', icon: Lock },
  { key: 'rights', icon: UserCheck },
];

const sectionVisuals = [
  { key: 'informationWeCollect', id: 'information-we-collect', icon: Database },
  { key: 'howWeUseInformation', id: 'how-we-use-information', icon: FileText },
  { key: 'aiLeadResponseAgent', id: 'ai-lead-response-agent', icon: Bot },
  { key: 'phoneSmsEmail', id: 'phone-sms-email', icon: Phone },
  { key: 'sharingInformation', id: 'sharing-information', icon: ShieldCheck },
  { key: 'clientData', id: 'client-data', icon: UserCheck },
  { key: 'security', id: 'security', icon: Lock },
  { key: 'retention', id: 'retention', icon: Clock },
  { key: 'cookiesAnalytics', id: 'cookies-analytics', icon: Eye },
  { key: 'yourChoices', id: 'your-choices', icon: CheckCircle },
  { key: 'children', id: 'children', icon: ShieldCheck },
  { key: 'updates', id: 'updates', icon: Trash2 },
];

const PrivacyPolicy = () => {
  const location = useLocation();
  const { t } = useTranslation('privacyPolicy');

  const language = getLanguageFromPath(location.pathname);
  const isSpanish = language === 'es';
  const contactPath = localizePath('/contact', language);

  const pageUrl = isSpanish
    ? `${SITE_URL}/es/privacy-policy`
    : `${SITE_URL}/privacy-policy`;

  const quickPoints = quickPointVisuals.map(({ key, icon }) => ({
    key,
    icon,
    title: t(`quickPoints.${key}.title`),
    text: t(`quickPoints.${key}.text`),
  }));

  const sections = sectionVisuals.map(({ key, id, icon }) => ({
    key,
    id,
    icon,
    title: t(`sections.${key}.title`),
    body: t(`sections.${key}.body`, { returnObjects: true }),
    bullets: t(`sections.${key}.bullets`, { returnObjects: true }),
  }));

  const privacySchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t('schema.pageName'),
    description: t('schema.description'),
    url: pageUrl,
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
        name: t('schema.home'),
        item: isSpanish ? `${SITE_URL}/es` : `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('schema.pageName'),
        item: pageUrl,
      },
    ],
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

        <link rel="canonical" href={pageUrl} />

        <link
          rel="alternate"
          hrefLang="en"
          href={`${SITE_URL}/privacy-policy`}
        />

        <link
          rel="alternate"
          hrefLang="es"
          href={`${SITE_URL}/es/privacy-policy`}
        />

        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${SITE_URL}/privacy-policy`}
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Ozony Tech" />
        <meta property="og:title" content={t('seo.ogTitle')} />
        <meta
          property="og:description"
          content={t('seo.ogDescription')}
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content={t('seo.ogImageAlt')}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('seo.twitterTitle')} />
        <meta
          name="twitter:description"
          content={t('seo.twitterDescription')}
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
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
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

                <div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-blue-300/15 bg-blue-500/10 p-5 text-center backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.18em] text-blue-200/80">
                    {t('hero.lastUpdatedLabel')}
                  </p>

                  <p className="mt-2 text-xl font-semibold text-white">
                    {t('hero.lastUpdatedDate')}
                  </p>
                </div>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
                  <Button
                    asChild
                    size="lg"
                    className="h-14 rounded-xl border border-blue-300/30 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 text-base font-bold text-white shadow-[0_14px_45px_rgba(37,99,235,0.28)] transition-shadow hover:shadow-[0_18px_55px_rgba(37,99,235,0.38)]"
                  >
                    <a href="#privacy-details">
                      {t('hero.readPolicy')}
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-14 border-blue-400/30 bg-transparent px-8 text-base font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-blue-500/10"
                  >
                    <Link to={contactPath}>
                      {t('hero.contact')}
                    </Link>
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
                      key={point.key}
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
                    {t('onThisPage')}
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
                  transition={{
                    duration: 0.58,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="scroll-mt-28 rounded-[1.75rem] border border-blue-300/15 bg-blue-500/10 p-6 text-center backdrop-blur md:p-10"
                >
                  <Mail className="mx-auto mb-5 h-8 w-8 text-blue-300" />

                  <h2 className="text-3xl font-semibold text-white">
                    {t('contactSection.title')}
                  </h2>

                  <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-white/68">
                    {t('contactSection.description')}
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