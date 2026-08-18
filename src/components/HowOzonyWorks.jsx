import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, Wrench, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HowOzonyWorks = () => {
  const { t } = useTranslation('home');

  const points = [
    { key: 'practicalSolutions', icon: Zap },
    { key: 'secureByDesign', icon: ShieldCheck },
    { key: 'builtToSupport', icon: Wrench },
  ];

  return (
    <section className="ozony-flow ozony-flow-work py-20">
      <div className="ozony-container-wide">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
            {t('howOzonyWorks.eyebrow')}
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl">
            {t('howOzonyWorks.title')}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-400">
            {t('howOzonyWorks.description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-slate-950/45 shadow-lg shadow-black/25"
        >
          <img
            src="/images/HowWeWork-1200.webp"
            srcSet="/images/HowWeWork-800.webp 800w, /images/HowWeWork-1200.webp 1200w, /images/HowWeWork-1600.webp 1600w"
            sizes="(max-width: 768px) calc(100vw - 32px), (max-width: 1280px) calc(100vw - 32px), 1200px"
            width="1200"
            height="675"
            alt={t('howOzonyWorks.imageAlt')}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {points.map((point, index) => {
            const Icon = point.icon;

            return (
              <motion.div
                key={point.key}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-xl border border-white/[0.07] bg-slate-950/42 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 inline-flex rounded-lg bg-blue-500/10 p-2">
                  <Icon className="h-5 w-5 text-blue-400" />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {t(`howOzonyWorks.points.${point.key}.title`)}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {t(`howOzonyWorks.points.${point.key}.text`)}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-blue-400">
                  <CheckCircle className="h-4 w-4" />
                  <span>{t('howOzonyWorks.outcome')}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowOzonyWorks;