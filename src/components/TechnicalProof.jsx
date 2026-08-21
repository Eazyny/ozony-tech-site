import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  Cable,
  CheckCircle2,
  Globe2,
  Router,
  Server,
  ShieldCheck,
  Wifi,
} from 'lucide-react';

import {
  getLanguageFromPath,
  localizePath,
} from '@/i18n/languageRoutes';

const smoothEase = [0.22, 1, 0.36, 1];

const platforms = [
  {
    name: 'UniFi',
    image: '/images/brands/Unifi.webp',
    scale: 2,
  },
  {
    name: 'TP-Link Omada',
    image: '/images/brands/Omada.webp',
    scale: 2.1,
  },
  {
    name: 'Aruba Instant On',
    image: '/images/brands/Aruba.webp',
    scale: 1.2,
  },
];

const MotionReveal = ({
  children,
  className = '',
  delay = 0,
  amount = 0.16,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount }}
    transition={{
      duration: 0.66,
      delay,
      ease: smoothEase,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const NetworkNode = ({
  icon: Icon,
  title,
  description,
  highlighted = false,
  compact = false,
}) => (
  <div
    className={[
      'relative flex items-start gap-4 border px-5',
      compact ? 'min-h-[118px] py-5' : 'min-h-[88px] py-5',
      highlighted
        ? 'border-blue-300/[0.24] bg-blue-500/[0.07]'
        : 'border-white/[0.08] bg-white/[0.018]',
    ].join(' ')}
  >
    <div
      className={[
        'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border',
        highlighted
          ? 'border-blue-300/[0.25] bg-blue-400/[0.08] text-blue-300'
          : 'border-white/[0.08] bg-white/[0.025] text-white/[0.55]',
      ].join(' ')}
    >
      <Icon className="h-5 w-5" />
    </div>

    <div>
      <h4 className="text-sm font-semibold text-white/[0.92]">
        {title}
      </h4>

      <p className="mt-1.5 text-xs leading-5 text-white/[0.42]">
        {description}
      </p>
    </div>
  </div>
);

const TechnicalProof = () => {
  const location = useLocation();

  const language = getLanguageFromPath(location.pathname);
  const isSpanish = language === 'es';

  const certificationsPath = localizePath(
    '/certifications',
    language
  );

  const copy = isSpanish
    ? {
        eyebrow: 'Fundamento técnico',

        title:
          'Diseñado alrededor de cómo funciona la infraestructura real de un negocio.',

        description:
          'Ozony Tech combina experiencia práctica en redes con capacitación técnica verificada. El objetivo no es añadir complejidad, sino construir una base clara, segura y fácil de administrar.',

        architectureEyebrow: 'Arquitectura de ejemplo',

        architectureTitle:
          'Una estructura de red clara para pequeñas empresas.',

        architectureDescription:
          'Ejemplo conceptual de cómo podemos organizar conectividad, seguridad, Wi-Fi y dispositivos empresariales. No representa un proyecto específico de cliente.',

        internet: 'Internet / ISP',
        internetDescription:
          'Conexión principal del negocio',

        firewall: 'Firewall / Gateway',
        firewallDescription:
          'Seguridad, políticas y control de tráfico',

        managedSwitch: 'Switch administrado',
        switchDescription:
          'Distribución cableada y segmentación',

        businessDevices: 'Dispositivos del negocio',
        businessDevicesDescription:
          'Computadoras, impresoras y sistemas internos',

        wifi: 'Wi-Fi empresarial',
        wifiDescription:
          'Redes separadas para personal e invitados',

        cameras: 'Cámaras / IoT',
        camerasDescription:
          'Dispositivos aislados del tráfico principal',

        criticalSystems: 'POS / Sistemas críticos',
        criticalSystemsDescription:
          'Segmentación para sistemas sensibles',

        principleTitle:
          'La tecnología debe ser fácil de entender y administrar.',

        principleText:
          'Una buena red permite que los dispositivos correctos se comuniquen, mantiene los sistemas sensibles mejor protegidos y deja espacio para crecer.',

        trainingEyebrow: 'Capacitación verificada',

        trainingTitle:
          'Conocimiento respaldado por formación técnica.',

        trainingDescription:
          'Capacitación en redes, diagnóstico, sistemas operativos, administración de sistemas y fundamentos de seguridad.',

        googleCertification:
          'Google IT Support Professional Certificate',

        compTIA: 'CompTIA A+',

        viewCertifications:
          'Ver certificaciones',

        platformsEyebrow:
          'Experiencia con plataformas',

        platformsTitle:
          'Tecnología empresarial que conocemos y utilizamos.',

        platformsDescription:
          'Trabajamos con plataformas de red diseñadas para implementaciones modernas de pequeñas empresas.',

        disclaimer:
          'Las marcas representan plataformas con las que trabajamos y no implican una asociación oficial.',
      }
    : {
        eyebrow: 'Technical foundation',

        title:
          'Designed around how real business infrastructure works.',

        description:
          'Ozony Tech combines practical networking experience with verified technical training. The goal is not to add complexity, it is to build a clear, secure foundation that is easier to manage.',

        architectureEyebrow: 'Example architecture',

        architectureTitle:
          'A clear small-business network structure.',

        architectureDescription:
          'A conceptual example of how connectivity, security, Wi-Fi, and business devices can be organized. It does not represent a specific client project.',

        internet: 'Internet / ISP',
        internetDescription:
          'Primary business connection',

        firewall: 'Firewall / Gateway',
        firewallDescription:
          'Security, policy, and traffic control',

        managedSwitch: 'Managed Switch',
        switchDescription:
          'Wired distribution and segmentation',

        businessDevices: 'Business Devices',
        businessDevicesDescription:
          'Computers, printers, and internal systems',

        wifi: 'Business Wi-Fi',
        wifiDescription:
          'Separate staff and guest access',

        cameras: 'Cameras / IoT',
        camerasDescription:
          'Devices isolated from primary traffic',

        criticalSystems: 'POS / Critical Systems',
        criticalSystemsDescription:
          'Segmentation for sensitive systems',

        principleTitle:
          'Technology should be easier to understand and manage.',

        principleText:
          'A good network lets the right devices communicate, keeps sensitive systems better protected, and leaves room for the business to grow.',

        trainingEyebrow: 'Verified training',

        trainingTitle:
          'Knowledge backed by technical training.',

        trainingDescription:
          'Training across networking, troubleshooting, operating systems, system administration, and security fundamentals.',

        googleCertification:
          'Google IT Support Professional Certificate',

        compTIA: 'CompTIA A+',

        viewCertifications:
          'View certifications',

        platformsEyebrow:
          'Platform experience',

        platformsTitle:
          'Business networking technology we know and work with.',

        platformsDescription:
          'Experience with networking platforms designed for modern small-business deployments.',

        disclaimer:
          'Brands represent platforms we work with and do not imply an official partnership.',
      };

  return (
    <section
      id="technical-proof"
      className="ozony-flow ozony-flow-credentials relative overflow-hidden py-20 md:py-24"
    >
      <div className="ozony-container-wide relative z-10">

        {/* SECTION INTRO */}
        <MotionReveal>
          <div className="grid gap-8 border-b border-white/[0.08] pb-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
                {copy.eyebrow}
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight text-white md:text-5xl xl:text-6xl">
                {copy.title}
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-white/[0.60] lg:pb-1">
              {copy.description}
            </p>
          </div>
        </MotionReveal>

        {/* ARCHITECTURE */}
        <MotionReveal
          delay={0.04}
          className="pt-12"
        >
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/[0.72]">
                {copy.architectureEyebrow}
              </p>

              <h3 className="mt-3 max-w-lg text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {copy.architectureTitle}
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/[0.44]">
                {copy.architectureDescription}
              </p>
            </div>

            <div>
              <div className="mx-auto max-w-3xl">

                {/* INTERNET */}
                <div className="mx-auto max-w-md">
                  <NetworkNode
                    icon={Globe2}
                    title={copy.internet}
                    description={copy.internetDescription}
                  />
                </div>

                <div className="mx-auto h-7 w-px bg-blue-300/[0.25]" />

                {/* FIREWALL */}
                <div className="mx-auto max-w-md">
                  <NetworkNode
                    icon={ShieldCheck}
                    title={copy.firewall}
                    description={copy.firewallDescription}
                    highlighted
                  />
                </div>

                <div className="mx-auto h-7 w-px bg-blue-300/[0.25]" />

                {/* SWITCH */}
                <div className="mx-auto max-w-md">
                  <NetworkNode
                    icon={Server}
                    title={copy.managedSwitch}
                    description={copy.switchDescription}
                  />
                </div>

                {/* DISTRIBUTION LINE */}
                <div className="mx-auto h-8 w-px bg-white/[0.10]" />

                <div className="mx-auto hidden h-px w-[78%] bg-gradient-to-r from-transparent via-blue-300/[0.30] to-transparent sm:block" />

                {/* ENDPOINTS */}
                <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  <NetworkNode
                    icon={Building2}
                    title={copy.businessDevices}
                    description={copy.businessDevicesDescription}
                    compact
                  />

                  <NetworkNode
                    icon={Wifi}
                    title={copy.wifi}
                    description={copy.wifiDescription}
                    compact
                  />

                  <NetworkNode
                    icon={Router}
                    title={copy.cameras}
                    description={copy.camerasDescription}
                    compact
                  />

                  <NetworkNode
                    icon={Cable}
                    title={copy.criticalSystems}
                    description={copy.criticalSystemsDescription}
                    compact
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-y border-white/[0.08] py-6">
            <div className="flex max-w-4xl items-start gap-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />

              <div>
                <p className="font-semibold text-white/[0.90]">
                  {copy.principleTitle}
                </p>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-white/[0.44]">
                  {copy.principleText}
                </p>
              </div>
            </div>
          </div>
        </MotionReveal>

        {/* CREDENTIALS + PLATFORMS */}
        <div className="grid gap-12 pt-14 lg:grid-cols-2 lg:gap-0">

          {/* TRAINING */}
          <MotionReveal>
            <div className="lg:pr-12 xl:pr-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/[0.72]">
                {copy.trainingEyebrow}
              </p>

              <h3 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {copy.trainingTitle}
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/[0.44]">
                {copy.trainingDescription}
              </p>

              <div className="mt-8 border-y border-white/[0.08]">

                {/* GOOGLE */}
                <Link
                  to={certificationsPath}
                  className="group grid grid-cols-[64px_1fr_auto] items-center gap-5 py-5"
                >
                  <div className="h-14 w-14 overflow-hidden rounded-lg border border-white/[0.08] bg-white">
                    <img
                      src="/images/credentials/GoogleITSupportCert-320.webp"
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold leading-6 text-white/[0.88]">
                      {copy.googleCertification}
                    </p>

                    <p className="mt-0.5 text-xs text-white/[0.35]">
                      Google
                    </p>
                  </div>

                  <ArrowRight className="h-4 w-4 text-blue-300/[0.60] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-200" />
                </Link>

                {/* COMPTIA */}
                <Link
                  to={certificationsPath}
                  className="group grid grid-cols-[64px_1fr_auto] items-center gap-5 border-t border-white/[0.08] py-5"
                >
                  <div className="flex h-14 w-14 items-center justify-center">
                    <img
                      src="/A+-png.png"
                      alt=""
                      aria-hidden="true"
                      className="max-h-14 max-w-14 object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white/[0.88]">
                      {copy.compTIA}
                    </p>

                    <p className="mt-0.5 text-xs text-white/[0.35]">
                      CompTIA
                    </p>
                  </div>

                  <ArrowRight className="h-4 w-4 text-blue-300/[0.60] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-200" />
                </Link>
              </div>

              <Link
                to={certificationsPath}
                className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-300"
              >
                <span>
                  {copy.viewCertifications}
                </span>

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </MotionReveal>

          {/* PLATFORMS */}
          <MotionReveal delay={0.07}>
            <div className="border-t border-white/[0.08] pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0 xl:pl-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/[0.72]">
                {copy.platformsEyebrow}
              </p>

              <h3 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {copy.platformsTitle}
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/[0.44]">
                {copy.platformsDescription}
              </p>

              <div className="mt-9 grid grid-cols-3 items-center gap-6 border-y border-white/[0.08] py-8">
                {platforms.map((platform) => (
                  <div
                    key={platform.name}
                    className="flex h-[90px] items-center justify-center overflow-visible"
                  >
                    <img
                      src={platform.image}
                      alt={platform.name}
                      title={platform.name}
                      style={{
                        transform: `scale(${platform.scale})`,
                      }}
                      className="h-14 w-auto object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>

              <p className="mt-5 max-w-xl text-xs leading-5 text-white/[0.28]">
                {copy.disclaimer}
              </p>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};

export default TechnicalProof;