import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Award,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarfieldBackground from '@/components/ui/starfield-background';
import {
  getLanguageFromPath,
  localizePath,
} from '@/i18n/languageRoutes';

const SITE_URL = 'https://ozony.tech';
const OG_IMAGE =
  'https://ozony.tech/images/credentials/GoogleITSupportCert.webp';

const credentials = [
  {
    key: 'technicalSupportFundamentals',
    title: 'Technical Support Fundamentals',
    issuer: 'Google',
    credentialId: 'GOOG-IT-001',
    verificationUrl: 'https://www.coursera.org/verify/EYCM6K2LYK10',
    image: '/images/credentials/TechnicalSupportFundamentalCert.webp',
  },
  {
    key: 'bitsAndBytes',
    title: 'The Bits and Bytes of Computer Networking',
    issuer: 'Google',
    credentialId: 'GOOG-IT-003',
    verificationUrl: 'https://www.coursera.org/verify/GXACQZY45CW7',
    image: '/images/credentials/TheBitsandBytesCert.webp',
  },
  {
    key: 'operatingSystems',
    title: 'Operating Systems and You: Becoming a Power User',
    issuer: 'Google',
    credentialId: 'GOOG-IT-002',
    verificationUrl: 'https://www.coursera.org/verify/9QNIGDEBM1MT',
    image: '/images/credentials/OperatingSystemsandYou.webp',
  },
  {
    key: 'systemAdministration',
    title: 'System Administration and IT Infrastructure Services',
    issuer: 'Google',
    credentialId: 'GOOG-IT-004',
    verificationUrl: 'https://www.coursera.org/verify/IBZO8E1TFB3U',
    image: '/images/credentials/SystemAdministrator.webp',
  },
  {
    key: 'itSecurity',
    title: 'IT Security: Defense against the Digital Dark Arts',
    issuer: 'Google',
    credentialId: 'GOOG-IT-005',
    verificationUrl: 'https://coursera.org/verify/YS67E8K4K2V4',
    image: '/images/credentials/ITSecurity.webp',
  },
  {
    key: 'professionalCertificate',
    title: 'Google IT Support Professional Certificate',
    issuer: 'Google',
    credentialId: 'GOOG-IT-PRO',
    verificationUrl:
      'https://coursera.org/verify/professional-cert/2FLTPOHX1URJ',
    image: '/images/credentials/GoogleITSupportCert.webp',
    featured: true,
  },
];

const Credentials = () => {
  const location = useLocation();
  const { t } = useTranslation('certifications');

  const language = getLanguageFromPath(location.pathname);
  const isSpanish = language === 'es';
  const homePath = localizePath('/', language);

  const canonicalUrl = isSpanish
    ? `${SITE_URL}/es/certifications`
    : `${SITE_URL}/certifications`;

  const featuredCert =
    credentials.find((cert) => cert.featured) ||
    credentials[credentials.length - 1];

  const supportAreas = t('supportAreas', { returnObjects: true });

  const credentialSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalCredential',
    name: 'Google IT Support Professional Certificate',
    credentialCategory: t(
      'credentials.professionalCertificate.category'
    ),
    recognizedBy: {
      '@type': 'Organization',
      name: 'Google',
    },
    url: featuredCert.verificationUrl,
    description: t(
      'credentials.professionalCertificate.schemaDescription'
    ),
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
        name: t('schema.certifications'),
        item: canonicalUrl,
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

        <link rel="canonical" href={canonicalUrl} />

        <link
          rel="alternate"
          hrefLang="en"
          href={`${SITE_URL}/certifications`}
        />
        <link
          rel="alternate"
          hrefLang="es"
          href={`${SITE_URL}/es/certifications`}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${SITE_URL}/certifications`}
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
          {JSON.stringify(credentialSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen app-bg">
        <Header />

        <main>
          <section className="px-4 pt-24 pb-2 md:pt-28">
            <div className="container mx-auto max-w-7xl">
              <Link
                to={homePath}
                className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                {t('backToHome')}
              </Link>
            </div>
          </section>

          <section className="relative overflow-hidden px-4 py-14 md:py-20">
            <StarfieldBackground />

            <div className="relative container mx-auto max-w-7xl">
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

                <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-400">
                  {supportAreas.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section className="px-4 pb-12">
            <div className="container mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="overflow-hidden rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900/85 to-slate-800/70 shadow-lg shadow-blue-500/10"
              >
                <div className="grid gap-6 p-6 lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
                  <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-950/50">
                    <div className="absolute inset-0">
                      <img
                        src={featuredCert.image}
                        alt={t('certificatePreviewAlt', {
                          title: featuredCert.title,
                        })}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/12 via-slate-950/32 to-slate-950/88" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/16 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_30%)]" />

                    <div className="relative z-10 flex h-full flex-col justify-between p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="rounded-xl border border-blue-500/10 bg-blue-500/10 p-3 backdrop-blur-sm">
                          <Award className="h-7 w-7 text-blue-400" />
                        </div>

                        <div className="inline-flex items-center gap-1 rounded-full border border-green-400/20 bg-green-400/10 px-2.5 py-1 text-xs font-medium text-green-400 backdrop-blur-sm">
                          <CheckCircle className="h-3 w-3" />
                          <span>{t('featured')}</span>
                        </div>
                      </div>

                      <div className="max-w-lg">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                          {t('featuredCertification')}
                        </p>

                        <h2 className="text-2xl font-bold leading-tight text-white md:text-3xl">
                          {featuredCert.title}
                        </h2>

                        <p className="mt-3 text-sm font-medium text-blue-300">
                          {featuredCert.issuer} ·{' '}
                          {t('issued', {
                            date: t(
                              `credentials.${featuredCert.key}.date`
                            ),
                          })}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="w-fit rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 text-xs font-medium text-blue-300">
                        {t(
                          `credentials.${featuredCert.key}.category`
                        )}
                      </p>

                      <p className="mt-5 text-base leading-relaxed text-gray-300 md:text-lg">
                        {t(
                          `credentials.${featuredCert.key}.description`
                        )}
                      </p>

                      <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-xl border border-slate-700/50 bg-slate-900/45 p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-blue-400">
                            {t('coverage.title')}
                          </p>

                          <p className="mt-2 text-sm text-gray-300">
                            {t('coverage.text')}
                          </p>
                        </div>

                        <div className="rounded-xl border border-slate-700/50 bg-slate-900/45 p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-blue-400">
                            {t('verified.title')}
                          </p>

                          <p className="mt-2 text-sm text-gray-300">
                            {t('verified.text')}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button
                        asChild
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        <a
                          href={featuredCert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <CheckCircle className="mr-2 h-4 w-4" />
                          {t('verifyFeatured')}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="px-4 pb-20">
            <div className="container mx-auto max-w-7xl">
              <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <h2 className="mb-3 text-3xl font-bold text-white md:text-5xl">
                    {t('allCertifications.title')}
                  </h2>

                  <p className="max-w-3xl text-lg text-gray-400">
                    {t('allCertifications.description')}
                  </p>
                </div>

                <div className="hidden rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-2 text-sm text-gray-300 lg:inline-flex">
                  {t('hoverHint')}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:hidden">
                {credentials.map((cert, index) => (
                  <motion.a
                    key={cert.credentialId}
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.05,
                    }}
                    className="group relative min-h-[300px] overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/70 shadow-lg shadow-blue-500/5"
                  >
                    <div className="absolute inset-0">
                      <img
                        src={cert.image}
                        alt={t('certificatePreviewAlt', {
                          title: cert.title,
                        })}
                        className="h-full w-full object-cover object-top opacity-30"
                        loading="lazy"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/15 via-slate-950/45 to-slate-950/92" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/45 via-slate-950/12 to-slate-950/30" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_28%)]" />

                    <div className="relative z-10 flex h-full flex-col justify-between p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="rounded-xl border border-blue-500/10 bg-blue-500/10 p-3">
                          <Award className="h-6 w-6 text-blue-400" />
                        </div>

                        <div className="inline-flex items-center gap-1 rounded-full border border-green-400/20 bg-green-400/10 px-2.5 py-1 text-xs font-medium text-green-400 backdrop-blur-sm">
                          <CheckCircle className="h-3 w-3" />
                          <span>{t('verifiedBadge')}</span>
                        </div>
                      </div>

                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                          {t(`credentials.${cert.key}.category`)}
                        </p>

                        <h3 className="text-xl font-bold leading-tight text-white">
                          {cert.title}
                        </h3>

                        <p className="mt-2 text-sm font-medium text-blue-300">
                          {cert.issuer}
                        </p>

                        <p className="mt-3 text-sm leading-relaxed text-gray-200">
                          {t(`credentials.${cert.key}.description`)}
                        </p>

                        <div className="mt-4 flex items-center justify-between gap-3 text-xs text-gray-400">
                          <span>
                            {t(`credentials.${cert.key}.date`)}
                          </span>

                          <span className="inline-flex items-center gap-1 text-blue-400">
                            {t('verify')}
                            <ExternalLink className="h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="hidden rounded-2xl border border-slate-700/50 bg-slate-900/35 p-2 shadow-lg shadow-blue-500/5 lg:block">
                <div className="flex h-[430px] overflow-hidden rounded-xl">
                  {credentials.map((cert, index) => (
                    <motion.a
                      key={cert.credentialId}
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.05,
                      }}
                      className="group relative min-w-0 flex-1 overflow-hidden border-r border-slate-700/40 bg-slate-900/70 transition-all duration-500 ease-out last:border-r-0 hover:flex-[2.25]"
                    >
                      <div className="absolute inset-0">
                        <img
                          src={cert.image}
                          alt={t('certificatePreviewAlt', {
                            title: cert.title,
                          })}
                          className="h-full w-full object-cover object-top grayscale opacity-45 transition-all duration-500 ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-72"
                          loading="lazy"
                        />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/15 via-slate-950/45 to-slate-950/94 transition-opacity duration-300 group-hover:from-slate-950/8 group-hover:via-slate-950/28 group-hover:to-slate-950/88" />
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/12 to-slate-950/34" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_28%)]" />

                      <div className="absolute left-4 right-4 top-4 z-20 flex items-start justify-between gap-3">
                        <div className="rounded-xl border border-blue-500/10 bg-blue-500/10 p-3 backdrop-blur-sm">
                          <Award className="h-6 w-6 text-blue-400" />
                        </div>

                        <div className="inline-flex items-center gap-1 rounded-full border border-green-400/20 bg-green-400/10 px-2.5 py-1 text-xs font-medium text-green-400 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <CheckCircle className="h-3 w-3" />
                          <span>{t('verifiedBadge')}</span>
                        </div>
                      </div>

                      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 transition-all duration-500 group-hover:items-end group-hover:justify-start group-hover:px-6 group-hover:pb-24">
                        <div className="max-w-[260px] text-center transition-all duration-500 group-hover:text-left">
                          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            {t(`credentials.${cert.key}.category`)}
                          </p>

                          <h3 className="text-xl font-bold leading-tight text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.55)]">
                            {cert.title}
                          </h3>

                          <p className="mt-2 text-sm font-medium text-blue-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 z-20 translate-y-full bg-gradient-to-t from-slate-950/96 via-slate-950/88 to-transparent px-5 pb-5 pt-12 transition-transform duration-300 ease-out group-hover:translate-y-0">
                        <p className="text-sm leading-relaxed text-gray-200">
                          {t(`credentials.${cert.key}.description`)}
                        </p>

                        <div className="mt-4 flex items-center justify-between gap-3 text-xs text-gray-400">
                          <span>
                            {t(`credentials.${cert.key}.date`)}
                          </span>

                          <span className="inline-flex items-center gap-1 text-blue-400">
                            {t('verify')}
                            <ExternalLink className="h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Credentials;