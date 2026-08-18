import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DecodedText from '@/components/ui/decode-text';

const CallToAction = () => {
  const scrollToSection = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="ozony-flow ozony-flow-cta px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-slate-950/46 px-8 py-14 text-center shadow-lg shadow-black/25"
        >
          {/* Glow accents */}
          <div className="pointer-events-none absolute -top-10 left-10 h-40 w-40 rounded-full bg-blue-500/[0.03] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 right-10 h-40 w-40 rounded-full bg-purple-500/[0.018] blur-3xl" />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="relative z-10 mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400"
          >
            Ozony Tech
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative z-10 mx-auto max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl"
          >
            Ready to improve your business IT setup?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative z-10 mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg"
          >
            Whether you need better Wi-Fi, cleaner networking, device setup, troubleshooting,
            or practical IT support, Ozony Tech is ready to help you build a more reliable setup.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 text-base"
            >
              <Mail className="w-5 h-5 mr-2" />
              <DecodedText speed={12}>Request a Quote</DecodedText>
            </Button>

            <Button
              onClick={() => scrollToSection('#services')}
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-6 py-6 text-base"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              <DecodedText speed={12}>View Services</DecodedText>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;