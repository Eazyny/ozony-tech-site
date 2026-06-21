import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DecodedText from '@/components/ui/decode-text';
import StarfieldBackground from '@/components/ui/starfield-background';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToSection = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden px-4 pt-24 pb-12 md:pt-28 md:pb-16 lg:min-h-[780px] lg:flex lg:items-center">
      <StarfieldBackground />

      <div className="relative mx-auto w-full max-w-[1400px] px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 xl:grid-cols-[1.16fr_0.84fr] xl:gap-12 2xl:grid-cols-[1.2fr_0.8fr] 2xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="min-w-0 space-y-7 lg:pr-2 xl:pr-6 2xl:pr-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-[760px] space-y-5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white md:text-base">
                Small Business IT Solutions
              </p>

              <div className="space-y-4">
                <p className="text-3xl font-bold uppercase tracking-[0.08em] text-blue-400 md:text-4xl xl:text-5xl">
                  Ozony Tech
                </p>

                <h1 className="text-[clamp(2.45rem,8vw,4.35rem)] font-bold leading-[0.92] tracking-[-0.03em] text-white">
                  <span className="block md:whitespace-nowrap">
                    IT &amp; Networking.
                  </span>

                  <span className="block text-white/95 sm:hidden">
                    Built for Small
                  </span>
                  <span className="block text-white/95 sm:hidden">
                    Business.
                  </span>

                  <span className="hidden text-white/95 sm:block xl:hidden">
                    Built for Small
                  </span>
                  <span className="hidden text-white/95 sm:block xl:hidden">
                    Business.
                  </span>

                  <span className="hidden text-white/95 xl:block 2xl:whitespace-nowrap">
                    Built for Small Business.
                  </span>
                </h1>
              </div>

              <p className="max-w-[38rem] text-base leading-relaxed text-gray-300 md:text-lg">
                Reliable Wi-Fi, secure networking, support, and practical IT
                solutions that help your business stay connected and productive.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 sm:flex-row sm:flex-wrap"
            >
              <Button
                onClick={() => navigate('/contact')}
                className="bg-blue-600 px-6 py-6 text-base text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700"
              >
                <Mail className="mr-2 h-5 w-5" />
                <DecodedText speed={12}>Request a Quote</DecodedText>
              </Button>

              <Button
                onClick={() => scrollToSection('#services')}
                variant="outline"
                className="border-blue-400 px-6 py-6 text-base text-blue-400 hover:bg-blue-400/10"
              >
                <DecodedText speed={12}>View Services</DecodedText>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full"
          >
            <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[460px] lg:ml-auto lg:max-w-[460px] xl:max-w-[500px] 2xl:max-w-[520px]">
              <div className="absolute -inset-8 rounded-[2.75rem] bg-blue-500/10 blur-3xl" />
              <div className="absolute inset-0 rounded-[2rem] border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-transparent to-slate-900/20" />

              <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-slate-700/60 bg-slate-900/65 shadow-2xl shadow-blue-500/10 backdrop-blur-sm">
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-slate-950/25 via-transparent to-blue-500/5" />

                <div className="relative z-0 h-full w-full">
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src="/videos/it_services.webm" type="video/webm" />
                    <source src="/videos/it_services.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;