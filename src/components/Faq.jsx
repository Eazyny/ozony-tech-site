import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const faqKeys = [
  'businessTypes',
  'existingNetworks',
  'wifiImprovements',
  'supportTypes',
  'serviceAreas',
  'getQuote',
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useTranslation('home');

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900/80 to-slate-800/70 shadow-lg shadow-blue-500/10"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/15 via-slate-950/35 to-slate-950/88" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/18 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_28%)]" />

          <div className="relative z-10 p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl text-center"
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
                {t('faq.eyebrow')}
              </p>

              <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                {t('faq.title')}
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
                {t('faq.description')}
              </p>
            </motion.div>

            <div className="mx-auto mt-12 max-w-5xl space-y-4">
              {faqKeys.map((key, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/45 backdrop-blur-sm"
                  >
                    <button
                      type="button"
                      onClick={() => handleToggle(index)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-7"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-2 text-lg font-semibold leading-snug text-white md:text-xl">
                        {t(`faq.items.${key}.question`)}
                      </span>

                      <span className="shrink-0 rounded-full border border-slate-700/60 bg-slate-950/50 p-2">
                        <ChevronDown
                          className={`h-5 w-5 text-blue-400 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-slate-700/40 px-6 py-5 md:px-7">
                          <div className="text-base leading-8 text-gray-400">
                            {key === 'getQuote' ? (
                              <Trans
                                i18nKey="faq.items.getQuote.answer"
                                ns="home"
                                components={{
                                  contactLink: (
                                    <a
                                      href="#contact"
                                      className="font-medium text-blue-400 underline underline-offset-4 transition-colors hover:text-white"
                                    />
                                  ),
                                }}
                              />
                            ) : (
                              t(`faq.items.${key}.answer`)
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;