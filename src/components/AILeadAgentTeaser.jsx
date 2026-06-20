import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bell,
  Bot,
  CheckCircle,
  MessageSquare,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

const smoothEase = [0.22, 1, 0.36, 1];

const highlights = [
  {
    icon: Zap,
    title: 'Instant response',
    text: 'Respond to new inquiries before they go cold.',
  },
  {
    icon: Target,
    title: 'Smart qualification',
    text: 'Ask the right intake questions automatically.',
  },
  {
    icon: Bell,
    title: 'Team alerts',
    text: 'Send clean lead summaries to your team.',
  },
];

const trustChips = [
  'Website inquiry capture',
  'AI qualification',
  'Team alerts',
  'After-hours coverage',
];

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const staggerItem = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.985,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.62,
      ease: smoothEase,
    },
  },
};

const MotionReveal = ({
  children,
  className = '',
  delay = 0,
  y = 34,
  amount = 0.2,
}) => (
  <motion.div
    initial={{ opacity: 0, y, scale: 0.985 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
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

const PrimaryCtaButton = ({ to, children }) => (
  <motion.div
    whileHover={{ y: -2, scale: 1.015 }}
    whileTap={{ scale: 0.985 }}
    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    className="group relative inline-flex"
  >
    <div className="absolute -inset-1 rounded-2xl bg-blue-500/25 opacity-70 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

    <Button
      asChild
      size="lg"
      className="relative h-14 min-w-[240px] overflow-hidden rounded-xl border border-blue-300/30 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-7 text-base font-bold text-white shadow-[0_14px_45px_rgba(37,99,235,0.28)] transition-shadow duration-300 hover:shadow-[0_18px_55px_rgba(37,99,235,0.38)] md:h-16 md:min-w-[285px] md:px-9 md:text-lg"
    >
      <Link to={to}>
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

        <span className="relative z-10 inline-flex items-center justify-center">
          {children}
          <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </Button>
  </motion.div>
);

const SecondaryCtaButton = ({ to, children }) => (
  <Button
    asChild
    size="lg"
    variant="outline"
    className="h-14 min-w-[220px] border-blue-400/30 bg-transparent px-7 text-base font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-blue-500/10 md:h-16 md:px-9 md:text-lg"
  >
    <Link to={to}>
      <span className="inline-flex items-center justify-center">
        {children}
        <MessageSquare className="ml-3 h-5 w-5" />
      </span>
    </Link>
  </Button>
);

const AILeadAgentTeaser = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-10 bottom-10 h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-[110px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        <MotionReveal className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
            <Sparkles className="h-4 w-4" />
            New Premium Service
          </div>

          <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            AI Lead Response Agent
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
            Turn website inquiries into qualified opportunities with instant
            response, automated intake, and team alerts. Built for businesses
            that cannot afford to let hot leads sit unanswered.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
            <PrimaryCtaButton to="/ai-lead-agent">
              Explore AI Lead Agent
            </PrimaryCtaButton>

            <SecondaryCtaButton to="/ai-agent-lead-capture">
              View AI Lead Capture
            </SecondaryCtaButton>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {trustChips.map((chip) => (
              <motion.span
                key={chip}
                variants={staggerItem}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur"
              >
                {chip}
              </motion.span>
            ))}
          </motion.div>
        </MotionReveal>

        <MotionReveal delay={0.08} y={42} className="mt-14">
          <Link to="/ai-lead-agent" className="group relative block">
            <div className="absolute -inset-5 rounded-[2.25rem] bg-blue-500/15 opacity-70 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-700/60 bg-slate-900/50 p-2 shadow-lg shadow-blue-500/10 backdrop-blur-xl transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-blue-500/20">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[1.35rem] bg-slate-950">
                <img
                  src="/images/AILeadAgentTeaser.png"
                  width="1672"
                  height="941"
                  alt="AI Lead Response Agent workflow showing website inquiry, AI qualification, and team alert"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </Link>
        </MotionReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-10 grid gap-5 md:grid-cols-3"
        >
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.22, ease: smoothEase },
                }}
                className="rounded-3xl border border-slate-700/50 bg-slate-900/50 p-7 text-center backdrop-blur-sm transition-colors duration-300 hover:border-blue-500/50 hover:bg-slate-900/70"
              >
                <div className="mx-auto mb-5 inline-flex rounded-xl bg-blue-500/10 p-3">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-gray-400">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <MotionReveal delay={0.05} className="mt-8">
          <div className="mx-auto flex max-w-xl items-center justify-center gap-3 rounded-2xl border border-blue-400/15 bg-blue-500/10 px-5 py-4 text-center text-sm text-gray-300 backdrop-blur">
            <CheckCircle className="h-5 w-5 flex-none text-blue-400" />
            <span>Capture, qualify, and alert your team instantly.</span>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

export default AILeadAgentTeaser;