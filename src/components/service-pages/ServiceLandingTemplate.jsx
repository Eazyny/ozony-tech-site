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
import { Button } from '@/components/ui/button';
import StarfieldBackground from '@/components/ui/starfield-background';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SITE_URL = 'https://ozony.tech';
const DEFAULT_OG_IMAGE = '/images/ozony-og-preview.png';

const ALL_SERVICE_LINKS = [
  { label: 'AI Lead Agent', to: '/ai-lead-agent' },
  { label: 'Business Network Setup NYC', to: '/network-setup-nyc' },
  { label: 'Business Wi-Fi Connecticut', to: '/business-wifi-connecticut' },
  { label: 'Business Wi-Fi NYC', to: '/business-wifi-nyc' },
  { label: 'Firewall Setup Connecticut', to: '/firewall-setup-connecticut' },
  { label: 'Firewall Setup NYC', to: '/firewall-setup-nyc' },
  { label: 'IT Services Near Me', to: '/it-services-near-me' },
  { label: 'IT Solutions', to: '/it-solutions' },
  { label: 'IT Support', to: '/it-support' },
  { label: 'IT Support Connecticut', to: '/it-support-connecticut' },
  { label: 'IT Support NJ', to: '/it-support-nj' },
  { label: 'IT Support NYC', to: '/it-support-nyc' },
  { label: 'Managed IT Services', to: '/managed-it-services' },
  { label: 'Network Services Near Me', to: '/network-services-near-me' },
  { label: 'Network Setup Connecticut', to: '/network-setup-connecticut' },
  { label: 'Network Setup NJ', to: '/network-setup-nj' },
  { label: 'Network Setup NYC', to: '/network-setup-nyc' },
  { label: 'Network Troubleshooting NYC', to: '/network-troubleshooting-nyc' },
  { label: 'Small Business Network NYC', to: '/small-business-network-nyc' },
];

const defaultIncludes = [
  'Router and firewall configuration',
  'Business Wi-Fi setup and optimization',
  'Guest and staff network separation',
  'Printer, POS, and workstation connectivity',
  'Structured network planning for growth',
  'Basic security and performance hardening',
];

const defaultIdealFor = [
  {
    title: 'Offices',
    description:
      'Reliable wired and wireless connectivity for teams, printers, phones, and daily operations.',
    icon: Briefcase,
  },
  {
    title: 'Retail Stores',
    description:
      'Dependable networking for POS systems, guest Wi-Fi, back-office devices, and business operations.',
    icon: Building2,
  },
  {
    title: 'Restaurants & Cafés',
    description:
      'Stable connectivity for registers, kitchen devices, staff systems, and customer internet access.',
    icon: Wifi,
  },
];

const defaultFaqItems = [
  {
    question: 'Do you provide network setup for small businesses in NYC?',
    answer:
      'Yes. Ozony Tech helps small businesses in NYC with network setup, Wi-Fi deployment, firewall configuration, and overall connectivity planning.',
  },
  {
    question: 'Can you separate guest and staff Wi-Fi?',
    answer:
      'Yes. We can configure separate networks for staff, guests, and specific business devices to improve security and organization.',
  },
  {
    question: 'Do you help with existing networks or only new installs?',
    answer:
      'Both. We can build a new network from scratch or improve and troubleshoot an existing business setup.',
  },
];

const sectionClass = 'border-t border-white/5 px-4 py-20 md:px-6 lg:px-8';

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
  pageTitle = 'Network Setup Services in NYC | Ozony Tech',
  pageDescription = 'Professional network setup services in NYC for small businesses that need reliable, secure, and scalable connectivity.',
  eyebrow = 'OZONY TECH SERVICES',
  title = 'Network Setup Services in NYC for Small Businesses',
  description = 'Professional network setup for offices, retail spaces, restaurants, and growing teams that need reliable, secure, and scalable connectivity.',
  primaryCta = 'Request a Quote',
  secondaryCta = 'Contact Ozony Tech',
  primaryCtaTo = '/contact',
  secondaryCtaTo = '/contact',
  heroImage = '/images/services/network-setup-nyc.webp',
  heroImageAlt = 'Business network setup services in NYC',
  trustChips = [
    'NYC small business focused',
    'Secure, scalable setup',
    'Wi-Fi, firewall, and device support',
    'Built for growth and reliability',
  ],
  includeTitle = `What’s Included`,
  includeDescription = 'Everything needed to create a stable, organized, and business-ready network environment.',
  serviceIncludes = defaultIncludes,
  outcomes = [
    {
      icon: Network,
      title: 'Professional Setup',
      text: 'Clean, organized network deployment designed for reliability and daily business use.',
    },
    {
      icon: Shield,
      title: 'Security Minded',
      text: 'Better segmentation, stronger protection, and smarter structure for modern small businesses.',
    },
    {
      icon: MapPin,
      title: 'Local Service',
      text: 'Focused on supporting businesses across NYC and nearby areas with practical solutions.',
    },
  ],
  industriesTitle = 'Built for Local Businesses',
  idealFor = defaultIdealFor,
  seoTitle = 'Professional Network Setup in NYC',
  seoParagraphs = [
    'Ozony Tech provides professional network setup services in NYC for small businesses that need reliable, secure, and well-organized connectivity. Whether you are opening a new office, upgrading your current Wi-Fi, or improving the structure of your network, we help design solutions that support daily operations without unnecessary complexity.',
    'Our network setup services can include router and firewall configuration, business Wi-Fi deployment, device connectivity, guest and staff network separation, and performance optimization. We work with small business environments that need dependable service, clear communication, and a setup that can grow with the business.',
  ],
  areasServed = 'Serving businesses across NYC, including Manhattan, Brooklyn, Queens, the Bronx, Staten Island, and nearby areas.',
  faqItems = defaultFaqItems,
  relatedServices = null,
  canonicalPath = null,
  midCtaEyebrow = 'Get Started',
  midCtaTitle = 'Ready to Get Your Business Network Setup?',
  midCtaDescription = 'Get a clean, reliable solution built for your business without unnecessary complexity or guesswork.',
  finalTitle = 'Ready to Improve Your Business Network?',
  finalDescription = 'Whether you need a fresh install, stronger Wi-Fi, or a cleaner setup for your business, Ozony Tech can help you move forward with confidence.',
  ogImage = DEFAULT_OG_IMAGE,
  twitterImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  const normalizedPathname = useMemo(
    () => normalizePathname(location.pathname),
    [location.pathname]
  );

  const canonicalUrl = useMemo(
    () =>
      absoluteUrl(
        canonicalPath
          ? normalizePathname(canonicalPath)
          : normalizedPathname
      ),
    [canonicalPath, normalizedPathname]
  );

  const ogImageUrl = useMemo(
    () => absoluteUrl(ogImage || DEFAULT_OG_IMAGE),
    [ogImage]
  );

  const twitterImageUrl = useMemo(
    () => absoluteUrl(twitterImage || ogImage || DEFAULT_OG_IMAGE),
    [twitterImage, ogImage]
  );

  const relatedServicesToRender = useMemo(() => {
    if (relatedServices && relatedServices.length > 0) {
      return relatedServices;
    }

    return ALL_SERVICE_LINKS.filter(
      (service) => normalizePathname(service.to) !== normalizedPathname
    );
  }, [relatedServices, normalizedPathname]);

  const faqSchema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    }),
    [faqItems]
  );

  const serviceSchema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: title,
      name: pageTitle,
      description: pageDescription,
      provider: {
        '@type': 'ProfessionalService',
        name: 'Ozony Tech',
        url: SITE_URL,
        email: 'contact@ozony.tech',
        telephone: '+1-347-653-7655',
        image: absoluteUrl(DEFAULT_OG_IMAGE),
      },
      areaServed: areasServed,
      url: canonicalUrl,
      image: ogImageUrl,
    }),
    [title, pageTitle, pageDescription, areasServed, canonicalUrl, ogImageUrl]
  );

  const breadcrumbSchema = useMemo(
    () => ({
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
          name: 'Services',
          item: `${SITE_URL}/#services`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
          item: canonicalUrl,
        },
      ],
    }),
    [title, canonicalUrl]
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
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="robots"
          content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Ozony Tech" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={heroImageAlt} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={twitterImageUrl} />

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        {faqItems.length > 0 && (
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
              <section className="px-4 pt-24 pb-8 md:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                  </Link>
                </div>
              </section>

              <section className="px-4 pb-16 md:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl text-center">
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-sm font-medium uppercase tracking-[0.24em] text-blue-400/90"
                  >
                    {eyebrow}
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.05 }}
                    className="mx-auto mt-6 max-w-5xl text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl"
                  >
                    {title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-xl"
                  >
                    {description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.15 }}
                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                  >
                    <Button asChild size="lg" className="group min-w-[190px]">
                      <Link to={primaryCtaTo}>
                        {primaryCta}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </Button>

                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="min-w-[190px] border-blue-400/30 bg-transparent text-white hover:bg-blue-500/10"
                    >
                      <Link to={secondaryCtaTo}>{secondaryCta}</Link>
                    </Button>
                  </motion.div>

                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    {trustChips.map((chip) => (
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

              <section className="px-4 pb-20 md:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(37,99,235,0.12)] backdrop-blur">
                    <img
                      src={heroImage}
                      alt={heroImageAlt}
                      className="h-full max-h-[560px] w-full object-cover"
                    />
                  </div>
                </div>
              </section>
            </div>
          </section>

          <div className="bg-[#08152b]">
            <section className={sectionClass}>
              <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
                {outcomes.map((item) => {
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
              <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                    Services
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                    {includeTitle}
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-white/65">
                    {includeDescription}
                  </p>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {serviceIncludes.map((item) => (
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

            <section className="border-t border-white/5 px-4 py-16 md:px-6 lg:px-8">
              <div className="mx-auto max-w-6xl rounded-[2rem] border border-blue-400/15 bg-gradient-to-br from-white/8 to-blue-500/10 p-8 text-center shadow-[0_0_50px_rgba(37,99,235,0.10)] backdrop-blur md:p-12">
                <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                  {midCtaEyebrow}
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                  {midCtaTitle}
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/65">
                  {midCtaDescription}
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button asChild size="lg" className="group min-w-[190px]">
                    <Link to={primaryCtaTo}>
                      {primaryCta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="min-w-[190px] border-blue-400/30 bg-transparent text-white hover:bg-blue-500/10"
                  >
                    <Link to={secondaryCtaTo}>{secondaryCta}</Link>
                  </Button>
                </div>
              </div>
            </section>

            <section className={sectionClass}>
              <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                    Who It’s For
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                    {industriesTitle}
                  </h2>
                </div>

                <div className="mt-10 grid gap-5 lg:grid-cols-3">
                  {idealFor.map((item) => {
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
              <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_1fr]">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
                  <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                    Why Ozony Tech
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                    {seoTitle}
                  </h2>

                  <div className="mt-6 space-y-5 text-base leading-8 text-white/70">
                    {seoParagraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                    <p className="text-white/90">{areasServed}</p>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
                  <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                    FAQ
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                    Common Questions
                  </h2>

                  <div className="mt-8 space-y-6">
                    {faqItems.map((item) => (
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
                <div className="mx-auto max-w-7xl">
                  <div className="max-w-3xl">
                    <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                      Related Services
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                      Explore More Solutions
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-white/65">
                      See other ways Ozony Tech can support your business with
                      practical IT and network solutions.
                    </p>
                  </div>

                  <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
                          <span>View service</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )}

            <section className="border-t border-white/5 px-4 py-24 md:px-6 lg:px-8">
              <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur md:p-14">
                <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                  Get Started
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                  {finalTitle}
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/65">
                  {finalDescription}
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button asChild size="lg" className="group min-w-[190px]">
                    <Link to={primaryCtaTo}>
                      {primaryCta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="min-w-[190px] border-blue-400/30 bg-transparent text-white hover:bg-blue-500/10"
                  >
                    <Link to={secondaryCtaTo}>{secondaryCta}</Link>
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
                aria-label="Back to top"
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