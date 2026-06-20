import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bell,
  Bot,
  CheckCircle,
  Clock,
  MessageSquare,
  Target,
  Zap,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

const AILeadAgentTeaser = () => {
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

  return (
    <section className="px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              <Bot className="h-4 w-4" />
              New Premium Service
            </div>

            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              AI Lead Response Agent
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              Turn website inquiries into qualified opportunities with instant
              response, automated intake, and team alerts. Built for businesses
              that cannot afford to let hot leads sit unanswered.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-4 backdrop-blur-sm"
                  >
                    <div className="mb-3 inline-flex rounded-lg bg-blue-500/10 p-2">
                      <Icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild className="group bg-blue-600 text-white hover:bg-blue-700">
                <Link to="/ai-lead-agent">
                  Explore AI Lead Agent
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400/10"
              >
                <Link to="/ai-agent-lead-capture">
                  View AI Lead Capture
                  <MessageSquare className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-3 text-sm text-gray-400">
              <CheckCircle className="h-4 w-4 text-blue-400" />
              <span>Capture, qualify, and alert your team instantly.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/10 opacity-60 blur-3xl transition-opacity duration-300 group-hover:opacity-90" />

            <Link
              to="/ai-lead-agent"
              className="relative block overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/50 shadow-lg shadow-blue-500/10 transition-all duration-300 hover:border-blue-500/50 hover:shadow-blue-500/20"
            >
              <img
                src="/images/AILeadAgentTeaser.png"
                width="1672"
                height="941"
                alt="AI Lead Response Agent workflow showing website inquiry, AI qualification, and team alert"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AILeadAgentTeaser;