import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Wrench, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SpotlightCard from '@/components/ui/spotlight-card';

const About = () => {
  const { t } = useTranslation('home');

  const aboutItems = [
    {
      key: 'smallBusiness',
      icon: Building2,
    },
    {
      key: 'howWeWork',
      icon: Wrench,
    },
    {
      key: 'priorities',
      icon: ShieldCheck,
    },
  ];

  const quickPointKeys = [
    'smallBusinessFocused',
    'practicalModernSetups',
    'clearCommunication',
    'reliableSupport',
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/30">
      <div className="ozony-container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('about.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </motion.div>

        <SpotlightCard
          as={motion.div}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-8 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900/80 to-slate-800/70 p-6 shadow-lg shadow-blue-500/10"
        >
          <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400 mb-3">
                {t('about.whyOzony.eyebrow')}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {t('about.whyOzony.title')}
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-3xl">
                {t('about.whyOzony.description')}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 md:justify-end">
              {quickPointKeys.map((key) => (
                <span
                  key={key}
                  className="rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-2 text-sm text-gray-300"
                >
                  {t(`about.quickPoints.${key}`)}
                </span>
              ))}
            </div>
          </div>
        </SpotlightCard>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:gap-8">
          {aboutItems.map((item, index) => {
            const Icon = item.icon;
            const points = t(`about.items.${item.key}.points`, {
              returnObjects: true,
            });

            return (
              <SpotlightCard
                as={motion.div}
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-700/50 bg-slate-900/55 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg shrink-0">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {t(`about.items.${item.key}.title`)}
                    </h3>
                    <p className="text-blue-400 text-sm font-semibold mt-1">
                      {t(`about.items.${item.key}.subtitle`)}
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {t(`about.items.${item.key}.description`)}
                </p>

                <div className="space-y-2">
                  {Array.isArray(points) &&
                    points.map((point) => (
                      <div key={point} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0" />
                        <p className="text-gray-300 text-sm">{point}</p>
                      </div>
                    ))}
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;