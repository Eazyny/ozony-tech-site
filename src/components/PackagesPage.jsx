import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
import { Button } from '@/components/ui/button';
import DecodedText from '@/components/ui/decode-text';
import StarfieldBackground from '@/components/ui/starfield-background';
import FlipCard from '@/components/FlipCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const packageTiers = [
  {
    name: 'Starter',
    badge: 'Best for small spaces',
    image: '/images/packages/starter-stack.webp',
    imageClassName: 'object-[center_42%]',
    stackLabel: 'Recommended stack',
    stackName: 'Omada / compact business setup',
    description:
      'A clean entry point for smaller businesses that need better Wi-Fi, basic network structure, and more reliable device connectivity without overcomplicating the setup.',
    bestFor:
      'Barbershops, salons, small retail spaces, home offices, simple offices, and smaller service businesses',
    includes: [
      'Router / firewall setup',
      'Basic switch and device connectivity',
      'Wi-Fi optimization and coverage tuning',
      'Printer / workstation connectivity help',
      'Basic security and account setup guidance',
    ],
    serviceLink: '/network-setup-nyc',
    serviceLabel: 'Explore network setup',
  },
  {
    name: 'Growth',
    badge: 'Most flexible',
    image: '/images/packages/growth-stack.webp',
    imageClassName: 'object-[center_46%]',
    stackLabel: 'Recommended stack',
    stackName: 'UniFi / managed small business setup',
    description:
      'Built for growing businesses that need stronger Wi-Fi, cleaner guest and staff separation, better performance, and a more organized upgrade path.',
    bestFor:
      'Busier offices, multi-room businesses, restaurants, retail stores, growing teams, and businesses with guest Wi-Fi needs',
    includes: [
      'Managed networking upgrade path',
      'Guest and staff network separation',
      'Multiple device / workstation setup support',
      'Improved wireless coverage planning',
      'Cleaner organization and business-ready structure',
    ],
    serviceLink: '/business-wifi-nyc',
    serviceLabel: 'Explore business Wi-Fi',
  },
  {
    name: 'Complete',
    badge: 'Best for long-term setup',
    image: '/images/packages/complete-stack.webp',
    imageClassName:
      'object-[center_62%] brightness-[0.52] saturate-[0.72] contrast-[1.04]',
    stackLabel: 'Recommended stack',
    stackName: 'Aruba Instant On / premium SMB setup',
    description:
      'A more complete small-business network package designed for cleaner deployment, stronger control, better reliability, and future growth.',
    bestFor:
      'Larger small businesses, higher device counts, professional spaces, polished offices, and long-term network builds',
    includes: [
      'Business-grade gateway and switching',
      'Managed Wi-Fi and network segmentation',
      'Multiple access point deployment planning',
      'Cleaner organization for long-term reliability',
      'Scalable foundation for future upgrades',
    ],
    serviceLink: '/firewall-setup-nyc',
    serviceLabel: 'Explore firewall setup',
  },
];

const comparisonRows = [
  {
    label: 'Best For',
    starter: 'Small spaces',
    growth: 'Growing businesses',
    complete: 'Long-term setups',
  },
  {
    label: 'Wi-Fi Coverage',
    starter: 'Basic optimization',
    growth: 'Improved multi-area coverage',
    complete: 'Broader coverage planning',
  },
  {
    label: 'Network Segmentation',
    starter: 'Light / basic',
    growth: 'Guest + staff separation',
    complete: 'More complete segmentation',
  },
  {
    label: 'Scalability',
    starter: 'Entry-level',
    growth: 'Growth-ready',
    complete: 'Best long-term path',
  },
  {
    label: 'Support Focus',
    starter: 'Setup + stability',
    growth: 'Performance + structure',
    complete: 'Reliability + expandability',
  },
];

const brandLogic = [
  {
    icon: Wifi,
    title: 'UniFi',
    image: '/images/brands/Unifi.webp',
    eyebrow: 'Polished ecosystem',
    description:
      'A strong option when a business wants clean management, strong visibility, and a more unified network experience.',
  },
  {
    icon: Network,
    title: 'TP-Link Omada',
    image: '/images/brands/Omada.webp',
    eyebrow: 'Strong value path',
    description:
      'A great value-focused choice for businesses that want solid performance and cleaner management without overspending.',
  },
  {
    icon: ShieldCheck,
    title: 'Aruba Instant On',
    image: '/images/brands/Aruba.webp',
    eyebrow: 'Premium SMB path',
    description:
      'A premium small-business option for businesses that want polished networking, simpler management, and a strong long-term setup path.',
  },
];

const servicePaths = [
  {
    icon: Network,
    title: 'Business Network Setup',
    description:
      'For businesses that need a cleaner router, switch, Wi-Fi, firewall, printer, POS, and device connectivity foundation.',
    to: '/network-setup-nyc',
    label: 'View network setup',
  },
  {
    icon: Wifi,
    title: 'Business Wi-Fi',
    description:
      'For businesses dealing with weak coverage, dead zones, unstable wireless, guest access issues, or growing device counts.',
    to: '/business-wifi-nyc',
    label: 'View business Wi-Fi',
  },
  {
    icon: ShieldCheck,
    title: 'Firewall Setup',
    description:
      'For businesses that need cleaner traffic control, guest and staff separation, stronger boundaries, and better network organization.',
    to: '/firewall-setup-nyc',
    label: 'View firewall setup',
  },
  {
    icon: Wrench,
    title: 'IT Support',
    description:
      'For businesses that need help with devices, printers, access issues, workstations, troubleshooting, and day-to-day tech problems.',
    to: '/it-support-nyc',
    label: 'View IT support',
  },
  {
    icon: Headphones,
    title: 'Managed IT Services',
    description:
      'For businesses that need recurring support, cleaner systems, and a more consistent path for handling technology issues.',
    to: '/managed-it-services',
    label: 'View managed IT',
  },
  {
    icon: Bot,
    title: 'AI Lead Response Agent',
    description:
      'For businesses that want faster lead follow-up, instant notifications, confirmation emails, and AI-assisted response drafts.',
    to: '/ai-lead-agent',
    label: 'View AI lead agent',
  },
];

const setupSteps = [
  {
    title: '1. Review the space',
    text: 'We look at the business layout, device needs, Wi-Fi expectations, current pain points, and how the team actually works.',
  },
  {
    title: '2. Choose the right tier',
    text: 'Starter, Growth, and Complete are starting points. The final recommendation depends on coverage, reliability, control, and budget.',
  },
  {
    title: '3. Build a clean path forward',
    text: 'The goal is not to oversell hardware. The goal is to build a setup that is practical, reliable, manageable, and easier to grow over time.',
  },
];

const fitCards = [
  'Barbershops & salons',
  'Retail shops',
  'Small offices',
  'Restaurants & cafés',
  'Home offices / creators',
  'Growing local businesses',
];

const packageFaqs = [
  {
    question: 'Which package is right for my business?',
    answer:
      'That depends on your space, number of users and devices, Wi-Fi expectations, current setup, and whether you need a cleaner upgrade path for future growth.',
  },
  {
    question: 'Can packages be customized?',
    answer:
      'Yes. These packages are designed as starting points, not rigid boxes. The final recommendation can be adjusted around your business needs, layout, budget, and goals.',
  },
  {
    question: 'Do you only work with one brand?',
    answer:
      'No. Ozony Tech chooses solutions based on reliability, budget, ease of management, and how well the setup fits the business environment.',
  },
  {
    question: 'Can I start with a smaller setup and upgrade later?',
    answer:
      'Yes. A good setup should make it easier to grow over time instead of forcing a full rebuild later.',
  },
  {
    question: 'Do these packages include IT support?',
    answer:
      'Packages can include setup support and practical guidance. Businesses that need recurring help can also review managed IT services or request a custom support plan.',
  },
  {
    question: 'Do you offer AI lead response setup too?',
    answer:
      'Yes. Ozony Tech also offers an AI Lead Response Agent service for businesses that want faster lead follow-up, alerts, confirmation emails, and AI-assisted response drafts.',
  },
];

const PackagesPage = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

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

  const canonicalUrl = 'https://ozony.tech/packages';
  const ogImage = 'https://ozony.tech/images/packages/complete-stack.webp';

  const packagesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Ozony Tech Business IT and Network Packages',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Ozony Tech',
      url: 'https://ozony.tech',
      email: 'contact@ozony.tech',
      telephone: '+1-347-653-7655',
    },
    url: canonicalUrl,
    areaServed: ['New York City', 'New Jersey', 'Connecticut'],
    serviceType: [
      'Network Setup',
      'Business Wi-Fi',
      'Firewall Setup',
      'IT Support',
      'Managed IT Services',
      'AI Lead Response Automation',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Small Business IT and Network Packages',
      itemListElement: packageTiers.map((tier) => ({
        '@type': 'Offer',
        name: `${tier.name} Package`,
        description: tier.description,
        itemOffered: {
          '@type': 'Service',
          name: `${tier.name} Business IT and Network Package`,
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
        name: 'Home',
        item: 'https://ozony.tech/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Packages',
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Small Business IT &amp; Network Packages | Ozony Tech</title>
        <meta
          name="description"
          content="Compare Ozony Tech small business IT and network packages, including Starter, Growth, and Complete options for Wi-Fi, network setup, firewall setup, IT support, and AI lead response services."
        />
        <meta
          name="robots"
          content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        />
        <link rel="canonical" href={canonicalUrl} />

        <meta
          property="og:title"
          content="Small Business IT & Network Packages | Ozony Tech"
        />
        <meta
          property="og:description"
          content="Compare Starter, Growth, and Complete package options for practical small-business IT, Wi-Fi, networking, firewall setup, and support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Ozony Tech" />
        <meta property="og:image" content={ogImage} />
        <meta
          property="og:image:alt"
          content="Ozony Tech Complete package recommended network hardware stack"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Small Business IT & Network Packages | Ozony Tech"
        />
        <meta
          name="twitter:description"
          content="Compare Starter, Growth, and Complete package options for small-business IT and networking."
        />
        <meta name="twitter:image" content={ogImage} />

        <script type="application/ld+json">
          {JSON.stringify(packagesSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      </Helmet>

      <div className="min-h-screen app-bg">
        <Header />

        <section className="px-4 pt-28 pb-2 md:pt-32">
          <div className="container mx-auto max-w-7xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </section>

        <main>
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
                  Ozony Tech Packages
                </p>

                <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
                  Small Business IT &amp; Network Packages Built Around Real Needs
                </h1>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
                  Compare practical package paths for better Wi-Fi, cleaner networking,
                  stronger firewall structure, support planning, and smarter business growth.
                  Each package is a starting point that can be adjusted around your space,
                  budget, and goals.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <Button
                    asChild
                    className="bg-blue-600 px-6 py-6 text-base text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700"
                  >
                    <Link to="/contact">
                      <DecodedText speed={12}>Request a Quote</DecodedText>
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="border-blue-400 px-6 py-6 text-base text-blue-400 hover:bg-blue-400/10"
                  >
                    <Link to="/ai-lead-agent">
                      <DecodedText speed={12}>View AI Lead Agent</DecodedText>
                    </Link>
                  </Button>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-400">
                  <span className="rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-2">
                    Starter
                  </span>
                  <span className="rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-2">
                    Growth
                  </span>
                  <span className="rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-2">
                    Complete
                  </span>
                  <span className="rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-2">
                    Custom options available
                  </span>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="px-4 pb-20 pt-6">
            <div className="container mx-auto max-w-7xl">
              <div className="grid gap-6 lg:grid-cols-3">
                {packageTiers.map((tier, index) => (
                  <motion.div
                    key={tier.name}
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
                  Built around the right fit
                </p>
                <p className="mx-auto mt-2 max-w-3xl text-gray-400">
                  Ozony Tech builds around practical, proven platforms like UniFi,
                  Omada, and Aruba Instant On based on your budget, layout,
                  management needs, and long-term goals.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-slate-800/30 px-4 py-20">
            <div className="container mx-auto max-w-7xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                  Compare the Packages
                </h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-400">
                  A simple view of how the tiers scale based on complexity,
                  coverage, structure, and long-term growth.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-700/50 bg-slate-900/70">
                <div className="min-w-[720px]">
                  <div className="grid grid-cols-4 border-b border-slate-700/50 bg-slate-900/80">
                    <div className="p-4 text-sm font-semibold text-gray-400">
                      Category
                    </div>
                    <div className="p-4 text-sm font-semibold text-white">
                      Starter
                    </div>
                    <div className="p-4 text-sm font-semibold text-white">
                      Growth
                    </div>
                    <div className="p-4 text-sm font-semibold text-white">
                      Complete
                    </div>
                  </div>

                  {comparisonRows.map((row, index) => (
                    <div
                      key={row.label}
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

          <section className="px-4 py-20">
            <div className="container mx-auto max-w-7xl">
              <div className="mb-12 text-center">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
                  Service Paths
                </p>
                <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                  Not Sure Which Service Fits?
                </h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-400">
                  Packages are one way to start. You can also jump directly into
                  the service that matches your biggest issue right now.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {servicePaths.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.06 }}
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

          <section className="bg-slate-800/30 px-4 py-20">
            <div className="container mx-auto max-w-7xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                  How Package Selection Works
                </h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-400">
                  The right setup depends on the business, not a generic checklist.
                  Here’s the basic path.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {setupSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6"
                  >
                    <div className="mb-5 inline-flex rounded-xl bg-green-500/10 p-3">
                      <CheckCircle2 className="h-6 w-6 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <p className="mt-3 leading-relaxed text-gray-400">
                      {step.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20">
            <div className="container mx-auto max-w-7xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                  Why These Solutions?
                </h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-400">
                  Ozony Tech doesn’t recommend equipment based on hype. The right
                  setup depends on your space, budget, business type, and how much
                  control or scalability you need.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {brandLogic.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6"
                    >
                      <div className="mb-5 overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-950/50">
                        <div className="relative h-44 overflow-hidden">
                          <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-500/10 via-transparent to-slate-900/40" />
                          <img
                            src={item.image}
                            alt={`${item.title} recommended hardware stack`}
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

          <section className="bg-slate-800/30 px-4 py-20">
            <div className="container mx-auto max-w-7xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                  Great Fit For
                </h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-400">
                  These packages are designed around the kinds of businesses that
                  benefit most from clean, reliable networking and practical IT support.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {fitCards.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="rounded-xl border border-slate-700/50 bg-slate-900/60 p-5"
                  >
                    <p className="font-medium text-white">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20">
            <div className="container mx-auto max-w-7xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                  Packages FAQ
                </h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-400">
                  A few common questions about how the package tiers work.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {packageFaqs.map((faq, index) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
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

          <section className="px-4 pb-20">
            <div className="container mx-auto max-w-6xl">
              <div className="rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900/90 to-slate-800/80 px-8 py-14 text-center shadow-lg shadow-blue-500/10">
                <h2 className="text-3xl font-bold text-white md:text-5xl">
                  Ready to find the right setup for your business?
                </h2>

                <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-400">
                  Whether you need a smaller starter setup, a more complete
                  long-term solution, or a custom mix of IT support, networking,
                  Wi-Fi, firewall setup, and automation, Ozony Tech can help you
                  choose a practical path forward.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Button
                    asChild
                    className="bg-blue-600 px-6 py-6 text-base text-white hover:bg-blue-700"
                  >
                    <Link to="/contact">
                      <DecodedText speed={12}>Request a Quote</DecodedText>
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="border-blue-400 px-6 py-6 text-base text-blue-400 hover:bg-blue-400/10"
                  >
                    <Link to="/it-solutions">
                      <ArrowRight className="mr-2 h-5 w-5" />
                      <DecodedText speed={12}>Explore IT Solutions</DecodedText>
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

export default PackagesPage;