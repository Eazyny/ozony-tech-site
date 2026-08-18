import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, Package, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import {
  getLanguageFromPath,
  localizePath,
} from '@/i18n/languageRoutes';

const SPRITE_URL =
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/15979/404-character-new.png';

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation('notFound');

  const language = getLanguageFromPath(location.pathname);

  const homePath = localizePath('/', language);
  const packagesPath = localizePath('/packages', language);
  const contactPath = `${localizePath('/', language)}#contact`;

  return (
    <>
      <Helmet>
        <title>{t('seo.title')}</title>
        <meta name="robots" content="noindex,follow" />
      </Helmet>

      <section className="ozony-flow ozony-flow-hero relative min-h-screen overflow-hidden">
        <style>{`
          @keyframes sway {
            0% { transform: rotateZ(0deg); }
            20% { transform: rotateZ(0deg); }
            25% { transform: rotateZ(4deg); }
            45% { transform: rotateZ(4deg); }
            50% { transform: rotateZ(0deg); }
            70% { transform: rotateZ(0deg); }
            75% { transform: rotateZ(-4deg); }
            90% { transform: rotateZ(-4deg); }
            100% { transform: rotateZ(0deg); }
          }

          @keyframes headTilt {
            0% { transform: rotateZ(0deg); }
            20% { transform: rotateZ(0deg); }
            25% { transform: rotateZ(-4deg); }
            35% { transform: rotateZ(-4deg); }
            38% { transform: rotateZ(2deg); }
            42% { transform: rotateZ(2deg); }
            45% { transform: rotateZ(-4deg); }
            50% { transform: rotateZ(0deg); }
            70% { transform: rotateZ(0deg); }
            82% { transform: rotateZ(0deg); }
            85% { transform: rotateZ(4deg); }
            90% { transform: rotateZ(4deg); }
            100% { transform: rotateZ(0deg); }
          }

          @keyframes typeLeft {
            0% { transform: rotateZ(0deg); }
            25% { transform: rotateZ(7deg); }
            75% { transform: rotateZ(-6deg); }
            100% { transform: rotateZ(0deg); }
          }

          @keyframes typeRight {
            0% { transform: rotateZ(0deg); }
            25% { transform: rotateZ(-6deg); }
            75% { transform: rotateZ(7deg); }
            100% { transform: rotateZ(0deg); }
          }

          @keyframes tapWobble {
            0% { transform: rotateZ(-0.2deg); }
            50% { transform: rotateZ(0.2deg); }
            100% { transform: rotateZ(-0.2deg); }
          }

          @keyframes tapRight {
            0% { transform: rotateZ(0deg); }
            90% { transform: rotateZ(-6deg); }
            100% { transform: rotateZ(0deg); }
          }

          @keyframes blink404 {
            0% { background-position: -162px -350px; }
            94% { background-position: -162px -350px; }
            98% { background-position: -162px -368px; }
            100% { background-position: -162px -350px; }
          }

          @keyframes pan {
            0% { transform: translateX(-2px); }
            49% { transform: translateX(-2px); }
            50% { transform: translateX(2px); }
            99% { transform: translateX(2px); }
            100% { transform: translateX(-2px); }
          }

          .scene404 {
            --scene-scale: 0.9;
            position: relative;
            width: calc(400px * var(--scene-scale));
            height: calc(800px * var(--scene-scale));
            flex: 0 0 auto;
          }

          .error404page {
            width: 400px;
            height: 800px;
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%) scale(var(--scene-scale));
            transform-origin: bottom center;
          }

          .body404,
          .head404,
          .eyes404,
          .leftarm404,
          .rightarm404,
          .chair404,
          .leftshoe404,
          .rightshoe404,
          .legs404,
          .laptop404 {
            background: url('${SPRITE_URL}') 0 0 no-repeat;
            width: 200px;
            height: 200px;
          }

          .newcharacter404,
          .torso404,
          .body404,
          .head404,
          .eyes404,
          .leftarm404,
          .rightarm404,
          .chair404,
          .leftshoe404,
          .rightshoe404,
          .legs404,
          .laptop404 {
            background-size: 750px;
            position: absolute;
            display: block;
          }

          .newcharacter404 {
            width: 400px;
            height: 800px;
            left: 50%;
            top: 20px;
            margin-left: -200px;
          }

          .torso404 {
            top: 138px;
            left: 0px;
            width: 389px;
            height: 252px;
            animation: sway 20s ease infinite;
            transform-origin: 50% 100%;
          }

          .body404 {
            top: 0px;
            left: 0px;
            width: 389px;
            height: 253px;
          }

          .head404 {
            top: -148px;
            left: 106px;
            width: 160px;
            height: 194px;
            background-position: 0px -265px;
            transform-origin: 50% 85%;
            animation: headTilt 20s ease infinite;
          }

          .eyes404 {
            top: 92px;
            left: 34px;
            width: 73px;
            height: 18px;
            background-position: -162px -350px;
            animation: blink404 10s steps(1) infinite, pan 10s ease-in-out infinite;
          }

          .leftarm404 {
            top: 159px;
            left: 0;
            width: 165px;
            height: 73px;
            background-position: -265px -341px;
            transform-origin: 9% 35%;
            animation: typeLeft 0.4s linear infinite;
          }

          .rightarm404 {
            top: 148px;
            left: 231px;
            width: 157px;
            height: 91px;
            background-position: -442px -323px;
            transform-origin: 90% 25%;
            animation: typeRight 0.4s linear infinite;
          }

          .chair404 {
            top: 430px;
            left: 55px;
            width: 260px;
            height: 365px;
            background-position: -12px -697px;
          }

          .legs404 {
            top: 378px;
            left: 4px;
            width: 370px;
            height: 247px;
            background-position: -381px -443px;
          }

          .leftshoe404 {
            top: 591px;
            left: 54px;
            width: 130px;
            height: 92px;
            background-position: -315px -749px;
          }

          .rightshoe404 {
            top: 594px;
            left: 187px;
            width: 135px;
            height: 81px;
            background-position: -453px -749px;
            transform-origin: 35% 12%;
            animation: tapRight 1s linear infinite;
          }

          .laptop404 {
            top: 186px;
            left: 9px;
            width: 365px;
            height: 216px;
            background-position: -2px -466px;
            transform-origin: 50% 100%;
            animation: tapWobble 0.4s linear infinite;
          }

          @media (max-width: 1536px) {
            .scene404 {
              --scene-scale: 0.84;
            }
          }

          @media (max-width: 1280px) {
            .scene404 {
              --scene-scale: 0.74;
            }
          }

          @media (max-width: 1024px) {
            .scene404 {
              --scene-scale: 0.64;
            }
          }

          @media (max-width: 768px) {
            .scene404 {
              --scene-scale: 0.54;
              margin-inline: auto;
            }
          }

          @media (max-width: 520px) {
            .scene404 {
              --scene-scale: 0.46;
            }
          }
        `}</style>

        <div className="absolute inset-0">
          <svg
            viewBox="0 0 1600 900"
            preserveAspectRatio="xMidYMid slice"
            className="h-full w-full"
            role="img"
            aria-label={t('backgroundAriaLabel')}
          >
            <defs>
              <linearGradient id="ozSkyOnly" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#010818" />
                <stop offset="38%" stopColor="#04102a" />
                <stop offset="72%" stopColor="#07142d" />
                <stop offset="100%" stopColor="#07111f" />
              </linearGradient>

              <linearGradient id="ozGroundOnly" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10203a" />
                <stop offset="100%" stopColor="#06111f" />
              </linearGradient>
            </defs>

            <rect width="1600" height="900" fill="url(#ozSkyOnly)" />

            <path
              d="M0 690 C185 655 345 680 530 700 C720 722 910 730 1110 690 C1285 655 1440 655 1600 690 L1600 900 L0 900 Z"
              fill="#08111f"
              opacity="0.72"
            />
            <path
              d="M0 730 C165 710 345 740 560 760 C785 780 985 772 1188 736 C1360 706 1498 710 1600 730 L1600 900 L0 900 Z"
              fill="url(#ozGroundOnly)"
            />
          </svg>
        </div>

        <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none">
          <span className="select-none font-black leading-none text-white/[0.04] text-[clamp(8rem,22vw,22rem)]">
            404
          </span>
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,8,24,0.97)_0%,rgba(1,8,24,0.93)_34%,rgba(1,8,24,0.76)_56%,rgba(1,8,24,0.36)_76%,rgba(1,8,24,0.12)_100%)]" />

        <div className="relative z-10 container mx-auto grid min-h-screen items-center gap-10 px-4 py-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,460px)] xl:gap-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              {t('badge')}
            </div>

            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[0.95] text-white sm:text-5xl md:text-7xl">
              {t('titleLine1')}
              <br />
              {t('titleLine2')}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-2xl">
              {t('description')}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to={homePath}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700"
              >
                <Home className="h-4 w-4" />
                {t('backToHome')}
              </Link>

              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/75 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-slate-600 hover:bg-slate-800"
              >
                <ArrowLeft className="h-4 w-4" />
                {t('goBack')}
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Link
                to={packagesPath}
                className="rounded-2xl border border-slate-800 bg-slate-950/45 p-5 backdrop-blur-sm transition-all duration-200 hover:border-blue-500/30 hover:bg-slate-900/70"
              >
                <div className="mb-3 inline-flex rounded-xl bg-blue-500/10 p-3">
                  <Package className="h-5 w-5 text-blue-400" />
                </div>

                <h2 className="text-lg font-semibold text-white">
                  {t('packagesCard.title')}
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {t('packagesCard.description')}
                </p>
              </Link>

              <Link
                to={contactPath}
                className="rounded-2xl border border-slate-800 bg-slate-950/45 p-5 backdrop-blur-sm transition-all duration-200 hover:border-blue-500/30 hover:bg-slate-900/70"
              >
                <div className="mb-3 inline-flex rounded-xl bg-blue-500/10 p-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>

                <h2 className="text-lg font-semibold text-white">
                  {t('contactCard.title')}
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {t('contactCard.description')}
                </p>
              </Link>
            </div>
          </div>

          <div className="relative flex min-h-[340px] items-end justify-center lg:min-h-[680px] lg:justify-end lg:pr-4 xl:pr-8">
            <div className="scene404" aria-hidden="true">
              <div className="error404page">
                <div className="newcharacter404">
                  <div className="chair404"></div>
                  <div className="leftshoe404"></div>
                  <div className="rightshoe404"></div>
                  <div className="legs404"></div>
                  <div className="torso404">
                    <div className="body404"></div>
                    <div className="leftarm404"></div>
                    <div className="rightarm404"></div>
                    <div className="head404">
                      <div className="eyes404"></div>
                    </div>
                  </div>
                  <div className="laptop404"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;