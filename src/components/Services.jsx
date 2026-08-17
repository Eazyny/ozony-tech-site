import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Network, Shield, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SpotlightCard from '@/components/ui/spotlight-card';
import {
  getLanguageFromPath,
  localizePath,
} from '@/i18n/languageRoutes';

const smoothEase = [0.22, 1, 0.36, 1];

const serviceGroups = [
  {
    icon: Network,
    key: 'networking',
    href: '/network-setup-nyc',
  },
  {
    icon: Building2,
    key: 'office',
    href: '/it-support-nyc',
  },
  {
    icon: Shield,
    key: 'security',
    href: '/firewall-setup-nyc',
  },
  {
    icon: Wrench,
    key: 'support',
    href: '/it-support-nyc',
  },
];

const serviceChipKeys = [
  'networking',
  'businessWifi',
  'sharedAccess',
  'security',
  'troubleshooting',
];

const getRevealOffset = (direction) => {
  const offsets = {
    up: { x: 0, y: 34 },
    down: { x: 0, y: -34 },
    left: { x: 56, y: 0 },
    right: { x: -56, y: 0 },
    diagonalLeft: { x: 56, y: 28 },
    diagonalRight: { x: -56, y: 28 },
    none: { x: 0, y: 0 },
  };

  return offsets[direction] || offsets.up;
};

const MotionReveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  amount = 0.2,
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

const chipContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

const chipItem = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
};

const cardContentContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.1,
    },
  },
};

const cardContentItem = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: smoothEase,
    },
  },
};

const Services = () => {
  const location = useLocation();
  const { t } = useTranslation('home');

  const language = getLanguageFromPath(location.pathname);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-800/30 py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute left-10 bottom-16 h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-[110px]" />
        <div className="absolute right-10 top-1/2 h-[260px] w-[260px] rounded-full bg-blue-400/10 blur-[100px]" />
      </div>

      <div className="ozony-container-wide relative z-10">
        <MotionReveal className="mx-auto max-w-5xl text-center" direction="up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
            {t('services.eyebrow')}
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            {t('services.title')}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
            {t('services.description')}
          </p>

          <motion.div
            variants={chipContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {serviceChipKeys.map((key) => (
              <motion.span
                key={key}
                variants={chipItem}
                whileHover={{
                  y: -3,
                  scale: 1.035,
                  transition: { duration: 0.18, ease: smoothEase },
                }}
                className="rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-2 text-sm text-gray-300 backdrop-blur"
              >
                {t(`services.chips.${key}`)}
              </motion.span>
            ))}
          </motion.div>
        </MotionReveal>

        <MotionReveal
          delay={0.08}
          direction="left"
          className="mt-14 mx-auto max-w-[1200px] 2xl:max-w-[1460px]"
        >
          <div className="group relative">
            <div className="absolute -inset-5 rounded-[2.25rem] bg-blue-500/15 opacity-70 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

            <SpotlightCard className="relative rounded-[1.75rem] border border-slate-700/60 bg-slate-900/50 p-2 shadow-lg shadow-blue-500/10 backdrop-blur-xl transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-blue-500/20">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[1.35rem] bg-slate-950">
                <img
                  src="/images/NetworkSetup-1200.webp"
                  srcSet="/images/NetworkSetup-800.webp 800w, /images/NetworkSetup-1200.webp 1200w, /images/NetworkSetup-1600.webp 1600w"
                  sizes="(max-width: 768px) calc(100vw - 32px), (max-width: 1536px) calc(100vw - 64px), 1460px"
                  width="1200"
                  height="675"
                  alt={t('services.imageAlt')}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </SpotlightCard>
          </div>
        </MotionReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 2xl:gap-7">
          {serviceGroups.map((group, index) => {
            const Icon = group.icon;
            const direction =
              index % 2 === 0 ? 'diagonalRight' : 'diagonalLeft';
            const stack = t(`services.groups.${group.key}.stack`, {
              returnObjects: true,
            });
            const takeaways = t(`services.groups.${group.key}.takeaways`, {
              returnObjects: true,
            });

            return (
              <MotionReveal
                key={group.key}
                direction={direction}
                delay={index * 0.045}
                amount={0.18}
              >
                <motion.div
                  whileHover={{
                    y: -7,
                    transition: { duration: 0.22, ease: smoothEase },
                  }}
                  className="h-full"
                >
                  <SpotlightCard className="h-full rounded-3xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm transition-colors duration-300 hover:border-blue-500/50 hover:bg-slate-900/70">
                    <Link
                      to={localizePath(group.href, language)}
                      className="group block h-full p-7 text-center"
                    >
                      <motion.div
                        variants={cardContentContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.35 }}
                      >
                        <motion.div
                          variants={cardContentItem}
                          className="mx-auto mb-5 inline-flex rounded-xl bg-blue-500/10 p-3"
                        >
                          <Icon className="h-7 w-7 text-blue-400" />
                        </motion.div>

                        <motion.h3
                          variants={cardContentItem}
                          className="text-2xl font-semibold leading-tight text-white"
                        >
                          {t(`services.groups.${group.key}.title`)}
                        </motion.h3>

                        <motion.div
                          variants={cardContentItem}
                          className="mt-5 flex flex-wrap justify-center gap-2"
                        >
                          {Array.isArray(stack) &&
                            stack.map((item) => (
                              <span
                                key={item}
                                className="rounded-full border border-slate-700/50 bg-slate-800/80 px-3 py-1 text-sm text-gray-300"
                              >
                                {item}
                              </span>
                            ))}
                        </motion.div>

                        <motion.p
                          variants={cardContentItem}
                          className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400"
                        >
                          {t(`services.groups.${group.key}.description`)}
                        </motion.p>

                        <motion.div
                          variants={cardContentItem}
                          className="mt-6 border-t border-slate-700/50 pt-5"
                        >
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-300">
                            {t('services.whatItCovers')}
                          </p>

                          <ul className="mx-auto max-w-md space-y-2 text-sm text-gray-400">
                            {Array.isArray(takeaways) &&
                              takeaways.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start justify-center gap-2 text-left"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-400" />
                                  <span>{item}</span>
                                </li>
                              ))}
                          </ul>
                        </motion.div>

                        <motion.div
                          variants={cardContentItem}
                          className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-medium text-blue-400 transition-colors duration-200 group-hover:text-blue-300"
                        >
                          <span>
                            {t(`services.groups.${group.key}.linkLabel`)}
                          </span>
                          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </motion.div>
                      </motion.div>
                    </Link>
                  </SpotlightCard>
                </motion.div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;