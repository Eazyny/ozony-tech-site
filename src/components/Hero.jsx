
import React, {
  Suspense,
  useCallback,
  useRef,
  useState,
} from 'react';

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

import { Mail } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import DecodedText from '@/components/ui/decode-text';
import StarfieldBackground from '@/components/ui/starfield-background';
import StarBorder from '@/components/ui/star-border';

import {
  getLanguageFromPath,
  localizePath,
} from '@/i18n/languageRoutes';

const LaptopHeroScene = React.lazy(
  () => import('@/components/LaptopHeroScene')
);

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation('home');

  const heroRef = useRef(null);

  const prefersReducedMotion = useReducedMotion();

  const [laptopReady, setLaptopReady] = useState(false);

  const markLaptopReady = useCallback(() => {
    setLaptopReady(true);
  }, []);

  // Preserve scroll-controlled laptop animation.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const rawCloseProgress = useTransform(
    scrollYProgress,
    [0.12, 0.78],
    [0, 1]
  );

  const closeProgress = useSpring(rawCloseProgress, {
    stiffness: 115,
    damping: 28,
    mass: 0.4,
  });

  const language = getLanguageFromPath(
    location.pathname
  );

  const isSpanish = language === 'es';

  const scrollToSection = (selector) => {
    const element = document.querySelector(selector);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const goToContact = () => {
    navigate(localizePath('/contact', language));
  };

  return (
    <section
      ref={heroRef}
      className="
        ozony-flow
        ozony-flow-hero
        relative
        overflow-hidden
        pb-12
        pt-24
        md:pb-16
        md:pt-28
        lg:flex
        lg:min-h-[780px]
        lg:items-center
        2xl:min-h-[860px]
      "
    >
      {/* Original seamless starfield background */}
      <StarfieldBackground className="hero-starfield-fade" />

      <div className="ozony-container-wide relative w-full">
        <div
          className="
            grid
            items-center
            gap-10
            lg:grid-cols-[1.08fr_0.92fr]
            lg:gap-10
            xl:grid-cols-[1.16fr_0.84fr]
            xl:gap-12
            2xl:grid-cols-[minmax(0,1.05fr)_minmax(560px,0.95fr)]
            2xl:gap-24
          "
        >
          {/* LEFT SIDE: HERO CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              min-w-0
              space-y-7
              lg:pr-2
              xl:pr-6
              2xl:pr-10
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="
                max-w-[760px]
                space-y-5
                2xl:max-w-[840px]
              "
            >
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-white
                  md:text-base
                "
              >
                {t('hero.eyebrow')}
              </p>

              <div className="space-y-4">
                <p
                  className="
                    text-3xl
                    font-bold
                    uppercase
                    tracking-[0.08em]
                    text-blue-400
                    md:text-4xl
                    xl:text-5xl
                  "
                >
                  Ozony Tech
                </p>

                <h1
                  className="
                    text-[clamp(2.45rem,8vw,4.35rem)]
                    font-bold
                    leading-[0.92]
                    tracking-[-0.03em]
                    text-white
                  "
                >
                  <span className="block md:whitespace-nowrap">
                    {t('hero.titleLineOne')}
                  </span>

                  {/* Mobile headline */}
                  <span className="block text-white/95 sm:hidden">
                    {t('hero.titleLineTwoMobile')}
                  </span>

                  <span className="block text-white/95 sm:hidden">
                    {t('hero.titleLineThreeMobile')}
                  </span>

                  {/* Tablet headline */}
                  <span className="hidden text-white/95 sm:block xl:hidden">
                    {t('hero.titleLineTwoTablet')}
                  </span>

                  <span className="hidden text-white/95 sm:block xl:hidden">
                    {t('hero.titleLineThreeTablet')}
                  </span>

                  {/* Desktop headline: English / Spanish */}
                  {isSpanish ? (
                    <>
                      <span className="hidden text-white/95 xl:block">
                        {t('hero.titleLineTwoTablet')}
                      </span>

                      <span className="hidden text-white/95 xl:block">
                        {t('hero.titleLineThreeTablet')}
                      </span>
                    </>
                  ) : (
                    <span className="hidden text-white/95 xl:block 2xl:whitespace-nowrap">
                      {t('hero.titleLineDesktop')}
                    </span>
                  )}
                </h1>
              </div>

              <p
                className="
                  max-w-[38rem]
                  text-base
                  leading-relaxed
                  text-gray-300
                  md:text-lg
                "
              >
                {t('hero.description')}
              </p>
            </motion.div>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
              }}
              className="
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:flex-wrap
              "
            >
              <StarBorder className="rounded-md">
                <Button
                  onClick={goToContact}
                  className="
                    border-0
                    bg-blue-600
                    px-6
                    py-6
                    text-base
                    text-white
                    shadow-lg
                    shadow-blue-500/20
                    hover:bg-blue-700
                  "
                >
                  <Mail className="mr-2 h-5 w-5" />

                  <DecodedText speed={12}>
                    {t('hero.requestQuote')}
                  </DecodedText>
                </Button>
              </StarBorder>

              <Button
                onClick={() =>
                  scrollToSection('#services')
                }
                variant="outline"
                className="
                  border-blue-400
                  px-6
                  py-6
                  text-base
                  text-blue-400
                  hover:text-white
                "
              >
                <DecodedText speed={12}>
                  {t('hero.viewServices')}
                </DecodedText>
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: FLOATING 3D LAPTOP */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="relative w-full min-w-0"
          >
            {/*
              Larger through layout width, not CSS scale.

              This avoids applying a separate scale
              transform around the WebGL canvas and
              the live Scout HTML screen.

              Negative translation pulls the laptop
              toward the hero text.
            */}
            <div
              className="
                relative
                mx-auto
                w-full
                max-w-[420px]
                sm:max-w-[520px]
                lg:ml-0
                lg:w-[108%]
                lg:max-w-none
                lg:-translate-x-[8%]
                xl:w-[112%]
                xl:-translate-x-[10%]
                2xl:w-[116%]
                2xl:-translate-x-[12%]
              "
            >
              <div
                className="
                  relative
                  aspect-[5/4]
                  w-full
                  overflow-visible
                "
              >
                {/*
                  No card background.
                  No border.
                  No backdrop blur.
                  No outer scale transform.

                  Just the 3D laptop and starfield.
                */}

                <div
                  className="
                    relative
                    h-full
                    w-full
                  "
                  role="img"
                  aria-label={
                    isSpanish
                      ? 'Laptop Ozony Tech mostrando la plataforma Scout'
                      : 'Ozony Tech laptop displaying the live Scout platform'
                  }
                >
                  {/* Loading placeholder */}
                  <div
                    aria-hidden="true"
                    className={`
                      pointer-events-none
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      transition-opacity
                      duration-500
                      ${
                        laptopReady
                          ? 'opacity-0'
                          : 'opacity-100'
                      }
                    `}
                  >
                    <div
                      className="
                        h-36
                        w-64
                        rounded-full
                        bg-blue-500/[0.07]
                        blur-3xl
                      "
                    />

                    <span
                      className="
                        absolute
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.28em]
                        text-blue-200/60
                      "
                    >
                      Ozony Tech
                    </span>
                  </div>

                  {/* Existing laptop with live Scout */}
                  <Suspense fallback={null}>
                    <LaptopHeroScene
                      closeProgress={closeProgress}
                      reducedMotion={Boolean(
                        prefersReducedMotion
                      )}
                      onReady={markLaptopReady}
                    />
                  </Suspense>
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
