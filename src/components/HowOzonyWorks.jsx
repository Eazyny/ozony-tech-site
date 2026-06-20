import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, Wrench, Zap } from 'lucide-react';

const HowOzonyWorks = () => {
  const points = [
    {
      icon: Zap,
      title: 'Practical solutions',
      text: 'Designed around real small business needs, not overbuilt enterprise fluff.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure by design',
      text: 'Clean access, safer workflows, and better protection from the start.',
    },
    {
      icon: Wrench,
      title: 'Built to support',
      text: 'Clear follow-up, troubleshooting, and improvements after launch.',
    },
  ];

  return (
    <section className="bg-slate-800/30 px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
            How We Work
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl">
            Practical IT, networking, and automation built around your business.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-400">
            Ozony Tech keeps the process clear: understand the issue, build the
            right solution, secure it, and support it over time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/50 shadow-lg shadow-blue-500/10"
        >
          <img
            src="/images/HowWeWork.png"
            width="1672"
            height="941"
            alt="How Ozony Tech works process from assessment to support and optimization"
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
                key={point.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 inline-flex rounded-lg bg-blue-500/10 p-2">
                  <Icon className="h-5 w-5 text-blue-400" />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {point.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {point.text}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-blue-400">
                  <CheckCircle className="h-4 w-4" />
                  <span>Built for small business outcomes</span>
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