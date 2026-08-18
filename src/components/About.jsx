import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

import SpotlightCard from '@/components/ui/spotlight-card';
import StarBorder from '@/components/ui/star-border';
import { Button } from '@/components/ui/button';
import {
  getLanguageFromPath,
  localizePath,
} from '@/i18n/languageRoutes';

const smoothEase = [0.22, 1, 0.36, 1];

const quickPointKeys = [
  'smallBusinessFocused',
  'practicalModernSetups',
  'clearCommunication',
  'reliableSupport',
];

const About = () => {
  const { t } = useTranslation('home');
  const location = useLocation();

  const language = getLanguageFromPath(location.pathname);
  const aboutPath = localizePath('/about', language);
  const isSpanish = language === 'es';

  const ctaLabel = isSpanish ? 'Conoce Ozony Tech' : 'Meet Ozony Tech';

  const supportingLabel = isSpanish
    ? 'Conoce nuestra forma de trabajar'
    : 'See how we approach the work';

  return (
    <section
      id="about"
      className="ozony-flow ozony-flow-about relative overflow-hidden py-20 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[-10rem] top-[-8rem] h-[420px] w-[420px] rounded-full bg-blue-500/[0.03] blur-[130px]" />

        <div className="absolute bottom-[-12rem] right-[-8rem] h-[460px] w-[460px] rounded-full bg-cyan-400/[0.018] blur-[145px]" />
      </div>

      <div className="ozony-container-wide relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{
              opacity: 0,
              x: -36,
              y: 8,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.28,
            }}
            transition={{
              duration: 0.72,
              ease: smoothEase,
            }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              <Sparkles className="h-4 w-4" />

              {t('about.whyOzony.eyebrow')}
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              {t('about.title')}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              {t('about.description')}
            </p>

            <div className="mt-8">
              <motion.div
                whileHover={{
                  y: -2,
                  scale: 1.015,
                }}
                whileTap={{
                  scale: 0.985,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 22,
                }}
                className="group relative inline-flex"
              >
                <div className="absolute -inset-1 rounded-2xl bg-blue-500/25 opacity-70 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

                <StarBorder className="rounded-xl">
                  <Button
                    asChild
                    size="lg"
                    className="group relative h-14 overflow-hidden rounded-xl border-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-7 text-base font-bold text-white shadow-[0_14px_45px_rgba(37,99,235,0.24)] transition-shadow duration-300 hover:shadow-[0_18px_55px_rgba(37,99,235,0.34)] md:px-9"
                  >
                    <Link to={aboutPath}>
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

                      <span className="relative z-10 inline-flex items-center">
                        {ctaLabel}

                        <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                </StarBorder>
              </motion.div>
            </div>

            <p className="mt-4 text-sm text-white/40">
              {supportingLabel}
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 36,
              y: 8,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.24,
            }}
            transition={{
              duration: 0.72,
              delay: 0.06,
              ease: smoothEase,
            }}
            className="relative"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[2.4rem] bg-blue-500/[0.03] blur-3xl"
            />

            <SpotlightCard className="relative rounded-[2rem] border border-white/[0.07] bg-slate-950/46 p-7 shadow-[0_24px_70px_rgba(2,6,23,0.32)] backdrop-blur-xl md:p-9">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                    {t('about.whyOzony.eyebrow')}
                  </p>

                  <h3 className="mt-4 max-w-xl text-2xl font-semibold leading-tight text-white md:text-3xl">
                    {t('about.whyOzony.title')}
                  </h3>
                </div>

                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-500/10 sm:flex">
                  <Cpu className="h-6 w-6 text-blue-300" />
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
                {t('about.whyOzony.description')}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {quickPointKeys.map((key, index) => (
                  <motion.div
                    key={key}
                    initial={{
                      opacity: 0,
                      y: 16,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: 0.12 + index * 0.06,
                      ease: smoothEase,
                    }}
                    className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />

                    <span className="text-sm leading-6 text-white/75">
                      {t(`about.quickPoints.${key}`)}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-7 flex items-start gap-3 border-t border-white/[0.07] pt-6 text-sm leading-6 text-white/45">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-300/80" />

                <span>
                  {isSpanish
                    ? 'Soluciones prácticas, comunicación clara y tecnología pensada para el negocio.'
                    : 'Practical solutions, clear communication, and technology built around the business.'}
                </span>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;