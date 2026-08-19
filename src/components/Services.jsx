import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Headphones,
  Network,
  Shield,
  Wifi,
  Wrench,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

import {
  getLanguageFromPath,
  localizePath,
} from '@/i18n/languageRoutes';

const smoothEase = [0.22, 1, 0.36, 1];

const featuredServices = [
  {
    key: 'networking',
    icon: Network,
    href: '/network-setup-nyc',
    number: '01',
  },
  {
    key: 'businessWifi',
    icon: Wifi,
    href: '/business-wifi-nyc',
    number: '02',
  },
  {
    key: 'security',
    icon: Shield,
    href: '/firewall-setup-nyc',
    number: '03',
  },
  {
    key: 'support',
    icon: Wrench,
    href: '/it-support-nyc',
    number: '04',
  },
];

const supportingServices = [
  {
    key: 'managedIT',
    icon: Headphones,
    href: '/managed-it-services',
  },
  {
    key: 'troubleshooting',
    icon: Wrench,
    href: '/network-troubleshooting-nyc',
  },
  {
    key: 'itSolutions',
    icon: Network,
    href: '/it-solutions',
  },
  {
    key: 'packages',
    icon: Shield,
    href: '/packages',
  },
];

const getFeaturedContent = (t, key) => {
  if (key === 'businessWifi') {
    return {
      title: t('services.chips.businessWifi'),
      description: t('services.groups.networking.description'),
      takeaways: t('services.groups.networking.takeaways', {
        returnObjects: true,
      }),
      linkLabel: t('services.groups.networking.linkLabel'),
    };
  }

  return {
    title: t(`services.groups.${key}.title`),
    description: t(`services.groups.${key}.description`),
    takeaways: t(`services.groups.${key}.takeaways`, {
      returnObjects: true,
    }),
    linkLabel: t(`services.groups.${key}.linkLabel`),
  };
};

const getSupportingContent = (language, key) => {
  const isSpanish = language === 'es';

  const content = {
    managedIT: {
      en: {
        title: 'Managed IT Services',
        description:
          'Ongoing support, maintenance, and a more consistent path for handling business technology.',
        label: 'Explore managed IT',
      },
      es: {
        title: 'Servicios Administrados de TI',
        description:
          'Soporte continuo, mantenimiento y una forma más consistente de manejar la tecnología del negocio.',
        label: 'Explorar TI administrada',
      },
    },

    troubleshooting: {
      en: {
        title: 'Network Troubleshooting',
        description:
          'Focused help for unstable Wi-Fi, connectivity problems, device issues, and recurring network failures.',
        label: 'Explore troubleshooting',
      },
      es: {
        title: 'Diagnóstico de Redes',
        description:
          'Ayuda enfocada en Wi-Fi inestable, problemas de conectividad, dispositivos y fallas recurrentes de red.',
        label: 'Explorar diagnóstico',
      },
    },

    itSolutions: {
      en: {
        title: 'IT Solutions',
        description:
          'A broader path for businesses that need help combining networking, support, security, and technology planning.',
        label: 'Explore IT solutions',
      },
      es: {
        title: 'Soluciones de TI',
        description:
          'Una opción más amplia para negocios que necesitan combinar redes, soporte, seguridad y planificación tecnológica.',
        label: 'Explorar soluciones de TI',
      },
    },

    packages: {
      en: {
        title: 'Network Packages',
        description:
          'Structured starting points for businesses that want a clearer way to plan equipment, coverage, and network growth.',
        label: 'View packages',
      },
      es: {
        title: 'Paquetes de Red',
        description:
          'Opciones estructuradas para negocios que quieren planificar mejor equipos, cobertura y crecimiento de la red.',
        label: 'Ver paquetes',
      },
    },
  };

  return content[key]?.[isSpanish ? 'es' : 'en'];
};

const MotionReveal = ({
  children,
  className = '',
  delay = 0,
  amount = 0.2,
}) => (
  <motion.div
    initial={{
      opacity: 0,
      y: 26,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: true,
      amount,
    }}
    transition={{
      duration: 0.66,
      delay,
      ease: smoothEase,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const Services = () => {
  const location = useLocation();
  const { t } = useTranslation('home');

  const language = getLanguageFromPath(location.pathname);
  const isSpanish = language === 'es';

  return (
    <section
      id="services"
      className="ozony-flow ozony-flow-services relative overflow-hidden py-20 md:py-24"
    >
      <div className="ozony-container-wide relative z-10">
        <MotionReveal>
          <div className="grid gap-8 border-b border-white/[0.08] pb-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
                {t('services.eyebrow')}
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.04] tracking-tight text-white md:text-5xl xl:text-6xl">
                {t('services.title')}
              </h2>
            </div>

            <div className="lg:pb-1">
              <p className="max-w-2xl text-lg leading-8 text-white/60">
                {t('services.description')}
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/38">
                {isSpanish
                  ? 'Cuatro áreas principales cubren la mayoría de las necesidades tecnológicas de una pequeña empresa. Los servicios especializados siguen disponibles cuando el problema requiere algo más específico.'
                  : 'Four core areas cover most small-business technology needs. Specialized services remain available when the problem calls for something more specific.'}
              </p>
            </div>
          </div>
        </MotionReveal>

        <div className="grid md:grid-cols-2">
          {featuredServices.map((service, index) => {
            const Icon = service.icon;
            const content = getFeaturedContent(t, service.key);

            const takeaways = Array.isArray(content.takeaways)
              ? content.takeaways.slice(0, 3)
              : [];

            const isLeftColumn = index % 2 === 0;
            const isTopRow = index < 2;

            return (
              <MotionReveal
                key={service.key}
                delay={index * 0.055}
                amount={0.12}
                className={[
                  'border-b border-white/[0.08]',
                  isLeftColumn
                    ? 'md:border-r md:border-white/[0.08]'
                    : '',
                ].join(' ')}
              >
                <Link
                  to={localizePath(service.href, language)}
                  className="group relative block h-full px-1 py-9 sm:px-6 md:px-8 md:py-10 xl:px-10 xl:py-11"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-blue-500/[0.035] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-300/15 bg-blue-500/[0.08]">
                          <Icon className="h-5 w-5 text-blue-300" />
                        </div>

                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300/70">
                          {service.number}
                        </span>
                      </div>
                    </div>

                    <h3 className="mt-7 max-w-xl text-2xl font-semibold tracking-tight text-white md:text-3xl">
                      {content.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-base leading-7 text-white/55">
                      {content.description}
                    </p>

                    {takeaways.length > 0 && (
                      <ul className="mt-6 grid gap-3">
                        {takeaways.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-6 text-white/45"
                          >
                            <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-blue-300/80" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-7">
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition-colors group-hover:text-blue-200">
                        <span>{content.linkLabel}</span>

                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </MotionReveal>
            );
          })}
        </div>

        <MotionReveal delay={0.1} className="mt-12 md:mt-14">
          <div>
            <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
                  {isSpanish
                    ? 'Servicios adicionales'
                    : 'Additional services'}
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                  {isSpanish
                    ? 'Cuando necesitas algo más específico.'
                    : 'When the problem needs something more specific.'}
                </h3>
              </div>

              <p className="max-w-2xl text-sm leading-6 text-white/40 md:justify-self-end">
                {isSpanish
                  ? 'Servicios especializados que complementan las cuatro áreas principales sin competir por atención.'
                  : 'Specialized service paths that complement the four core areas without competing for attention.'}
              </p>
            </div>

            <div className="mt-7 divide-y divide-white/[0.07] border-y border-white/[0.07]">
              {supportingServices.map((service) => {
                const Icon = service.icon;
                const content = getSupportingContent(
                  language,
                  service.key
                );

                return (
                  <Link
                    key={service.key}
                    to={localizePath(service.href, language)}
                    className="group grid gap-4 py-5 transition-colors md:grid-cols-[auto_0.8fr_1.4fr_auto] md:items-center md:gap-6"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-white/45 transition-colors group-hover:border-blue-300/30 group-hover:text-blue-300">
                      <Icon className="h-4 w-4" />
                    </div>

                    <h4 className="text-base font-medium text-white/80 transition-colors group-hover:text-white">
                      {content.title}
                    </h4>

                    <p className="max-w-2xl text-sm leading-6 text-white/40">
                      {content.description}
                    </p>

                    <div className="inline-flex items-center gap-2 text-sm text-blue-300/70 transition-colors group-hover:text-blue-200">
                      <span>{content.label}</span>

                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

export default Services;