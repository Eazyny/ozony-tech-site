import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AILeadAgentTeaser from '@/components/AILeadAgentTeaser';
import HowOzonyWorks from '@/components/HowOzonyWorks';
import About from '@/components/About';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ContactPage from '@/pages/ContactPage';
import LanguageSync from '@/components/LanguageSync';
import { getLanguageFromPath } from '@/i18n/languageRoutes';

const PackagesPage = lazy(() => import('@/components/PackagesPage'));
const AILeadCapture = lazy(() => import('@/pages/AILeadCapture'));
const Certifications = lazy(() => import('@/components/CertificationsPage'));
const AILeadAgentPage = lazy(() => import('@/components/AILeadAgent'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const NetworkSetupNYC = lazy(() => import('@/pages/NetworkSetupNYC'));
const BusinessWifiNYC = lazy(() => import('@/pages/BusinessWifiNYC'));
const FirewallSetupNYC = lazy(() => import('@/pages/FirewallSetupNYC'));
const ITSupportNYC = lazy(() => import('@/pages/ITSupportNYC'));
const NetworkTroubleshootingNYC = lazy(() =>
  import('@/pages/NetworkTroubleshootingNYC')
);
const SmallBusinessNetworkNYC = lazy(() =>
  import('@/pages/SmallBusinessNetworkNYC')
);

const NetworkSetupNJ = lazy(() => import('@/pages/NetworkSetupNJ'));
const ITSupportNJ = lazy(() => import('@/pages/ITSupportNJ'));

const NetworkSetupConnecticut = lazy(() =>
  import('@/pages/NetworkSetupConnecticut')
);
const ITSupportConnecticut = lazy(() =>
  import('@/pages/ITSupportConnecticut')
);
const FirewallSetupConnecticut = lazy(() =>
  import('@/pages/FirewallSetupConnecticut')
);
const BusinessWifiConnecticut = lazy(() =>
  import('@/pages/BusinessWifiConnecticut')
);

const ITServicesNearMe = lazy(() => import('@/pages/ITServicesNearMe'));
const NetworkServicesNearMe = lazy(() =>
  import('@/pages/NetworkServicesNearMe')
);
const ManagedITServices = lazy(() => import('@/pages/ManagedITServices'));
const ITSupport = lazy(() => import('@/pages/ITSupport'));
const ITSolutions = lazy(() => import('@/pages/ITSolutions'));
const NotFound = lazy(() => import('@/pages/not-found'));

const HomePage = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  const language = getLanguageFromPath(location.pathname);
  const isSpanish = language === 'es';

  const canonicalUrl = isSpanish
    ? 'https://ozony.tech/es'
    : 'https://ozony.tech/';

  const seo = isSpanish
    ? {
        title:
          'Ozony Tech | Soluciones de TI y Redes para Pequeñas Empresas',
        description:
          'Ozony Tech ofrece soluciones prácticas de TI y redes para pequeñas empresas, incluyendo configuración de Wi-Fi, redes, soporte de dispositivos, diagnóstico, automatización de respuesta a leads con IA y servicios empresariales de TI.',
        ogTitle:
          'Ozony Tech | Soluciones de TI y Redes para Pequeñas Empresas',
        ogDescription:
          'Soluciones prácticas de TI, Wi-Fi, redes, sitios web y respuesta a leads con IA para pequeñas empresas en NYC, NJ y Connecticut.',
        imageAlt:
          'Ozony Tech, soluciones de TI y redes para pequeñas empresas',
        backToTop: 'Volver arriba',
        locale: 'es_ES',
        serviceTypes: [
          'Soporte de TI',
          'Configuración de Redes',
          'Wi-Fi Empresarial',
          'Configuración de Firewall',
          'Servicios Administrados de TI',
          'Servicios de Sitios Web',
          'Automatización de Respuesta a Leads con IA',
        ],
      }
    : {
        title:
          'Ozony Tech | IT & Network Solutions for Small Businesses',
        description:
          'Ozony Tech provides practical IT and network solutions for small businesses, including Wi-Fi setup, networking, device support, troubleshooting, AI lead response automation, and business IT services.',
        ogTitle:
          'Ozony Tech | IT & Network Solutions for Small Businesses',
        ogDescription:
          'Practical IT, Wi-Fi, networking, website, and AI lead response solutions for small businesses in NYC, NJ, and CT.',
        imageAlt:
          'Ozony Tech IT and network solutions for small businesses',
        backToTop: 'Back to top',
        locale: 'en_US',
        serviceTypes: [
          'IT Support',
          'Network Setup',
          'Business Wi-Fi',
          'Firewall Setup',
          'Managed IT Services',
          'Website Services',
          'AI Lead Response Automation',
        ],
      };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>

        <meta
          name="description"
          content={seo.description}
        />

        <meta
          name="robots"
          content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        />

        <link rel="canonical" href={canonicalUrl} />

        <link
          rel="alternate"
          hrefLang="en"
          href="https://ozony.tech/"
        />

        <link
          rel="alternate"
          hrefLang="es"
          href="https://ozony.tech/es"
        />

        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://ozony.tech/"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Ozony Tech" />
        <meta property="og:locale" content={seo.locale} />

        <meta
          property="og:title"
          content={seo.ogTitle}
        />

        <meta
          property="og:description"
          content={seo.ogDescription}
        />

        <meta
          property="og:image"
          content="https://ozony.tech/images/ozony-og-preview.png"
        />

        <meta
          property="og:image:secure_url"
          content="https://ozony.tech/images/ozony-og-preview.png"
        />

        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta
          property="og:image:alt"
          content={seo.imageAlt}
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content={seo.ogTitle}
        />

        <meta
          name="twitter:description"
          content={seo.ogDescription}
        />

        <meta
          name="twitter:image"
          content="https://ozony.tech/images/ozony-og-preview.png"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Ozony Tech',
            url: canonicalUrl,
            inLanguage: language,
            email: 'contact@ozony.tech',
            telephone: '+1-347-653-7655',
            image: 'https://ozony.tech/images/ozony-og-preview.png',
            areaServed: ['New York City', 'New Jersey', 'Connecticut'],
            serviceType: seo.serviceTypes,
            sameAs: [
              'https://x.com/ozonytech',
              'https://github.com/eazyny',
              'https://linkedin.com/in/ozony-elsevif',
            ],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Ozony Tech',
            url: canonicalUrl,
            inLanguage: language,
          })}
        </script>
      </Helmet>

      <div className="min-h-screen app-bg">
        <Header />

        <main>
          <Hero />
          <Services />
          <AILeadAgentTeaser />
          <About />
          <HowOzonyWorks />
          <Faq />
          <Contact />
        </main>

        <Footer />

        <AnimatePresence>
          {showBackToTop && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-6 right-6 z-50"
            >
              <button
                onClick={scrollToTop}
                aria-label={seo.backToTop}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/30 bg-slate-900/90 text-blue-400 shadow-lg shadow-blue-500/20 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-blue-500/10 hover:text-white"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};


const SpanishRoutes = () => (
  <Routes>
    <Route index element={<HomePage />} />

    <Route path="packages" element={<PackagesPage />} />
    <Route path="certifications" element={<Certifications />} />
    <Route
      path="credentials"
      element={<Navigate to="/es/certifications" replace />}
    />

    <Route path="ai-lead-agent" element={<AILeadAgentPage />} />
    <Route path="ai-agent-lead-capture" element={<AILeadCapture />} />
    <Route
      path="ai-lead-capture"
      element={<Navigate to="/es/ai-agent-lead-capture" replace />}
    />

    <Route path="network-setup-nyc" element={<NetworkSetupNYC />} />
    <Route path="business-wifi-nyc" element={<BusinessWifiNYC />} />
    <Route path="firewall-setup-nyc" element={<FirewallSetupNYC />} />
    <Route path="it-support-nyc" element={<ITSupportNYC />} />

    <Route
      path="network-troubleshooting-nyc"
      element={<NetworkTroubleshootingNYC />}
    />
    <Route
      path="small-business-network-nyc"
      element={<SmallBusinessNetworkNYC />}
    />

    <Route path="network-setup-nj" element={<NetworkSetupNJ />} />
    <Route path="it-support-nj" element={<ITSupportNJ />} />

    <Route
      path="network-setup-connecticut"
      element={<NetworkSetupConnecticut />}
    />
    <Route
      path="it-support-connecticut"
      element={<ITSupportConnecticut />}
    />
    <Route
      path="firewall-setup-connecticut"
      element={<FirewallSetupConnecticut />}
    />
    <Route
      path="business-wifi-connecticut"
      element={<BusinessWifiConnecticut />}
    />

    <Route path="it-services-near-me" element={<ITServicesNearMe />} />
    <Route
      path="network-services-near-me"
      element={<NetworkServicesNearMe />}
    />
    <Route path="managed-it-services" element={<ManagedITServices />} />
    <Route path="it-support" element={<ITSupport />} />

    <Route path="it-solutions" element={<ITSolutions />} />
    <Route
      path="itsolutions"
      element={<Navigate to="/es/it-solutions" replace />}
    />

    <Route path="privacy-policy" element={<PrivacyPolicy />} />
    <Route
      path="privacy"
      element={<Navigate to="/es/privacy-policy" replace />}
    />

    <Route path="contact" element={<ContactPage />} />
    <Route path="contactpage" element={<ContactPage />} />

    <Route path="*" element={<NotFound />} />
  </Routes>
);

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const timer = setTimeout(() => {
      const hash = location.hash;

      if (hash) {
        const el = document.querySelector(hash);

        if (el) {
          el.scrollIntoView({
            behavior:
              location.pathname === '/' || location.pathname === '/es'
                ? 'smooth'
                : 'auto',
            block: 'start',
          });
          return;
        }
      }

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      });
    }, 150);

    return () => {
      clearTimeout(timer);

      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, [location.pathname, location.hash]);

  return null;
};

const RouteLoader = () => {
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);

  return (
    <div className="min-h-screen app-bg flex items-center justify-center px-4">
      <div className="text-sm uppercase tracking-[0.2em] text-blue-400">
        {language === 'es' ? 'Cargando...' : 'Loading...'}
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <LanguageSync />
      <ScrollManager />

      <Suspense fallback={<RouteLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/es/*" element={<SpanishRoutes />} />

          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route
            path="/credentials"
            element={<Navigate to="/certifications" replace />}
          />

          <Route path="/ai-lead-agent" element={<AILeadAgentPage />} />
          <Route path="/ai-agent-lead-capture" element={<AILeadCapture />} />
          <Route
            path="/ai-lead-capture"
            element={<Navigate to="/ai-agent-lead-capture" replace />}
          />

          <Route path="/network-setup-nyc" element={<NetworkSetupNYC />} />
          <Route path="/business-wifi-nyc" element={<BusinessWifiNYC />} />
          <Route path="/firewall-setup-nyc" element={<FirewallSetupNYC />} />
          <Route path="/it-support-nyc" element={<ITSupportNYC />} />

          <Route
            path="/network-troubleshooting-nyc"
            element={<NetworkTroubleshootingNYC />}
          />
          <Route
            path="/small-business-network-nyc"
            element={<SmallBusinessNetworkNYC />}
          />

          <Route path="/network-setup-nj" element={<NetworkSetupNJ />} />
          <Route path="/it-support-nj" element={<ITSupportNJ />} />

          <Route
            path="/network-setup-connecticut"
            element={<NetworkSetupConnecticut />}
          />
          <Route
            path="/it-support-connecticut"
            element={<ITSupportConnecticut />}
          />
          <Route
            path="/firewall-setup-connecticut"
            element={<FirewallSetupConnecticut />}
          />
          <Route
            path="/business-wifi-connecticut"
            element={<BusinessWifiConnecticut />}
          />

          <Route path="/it-services-near-me" element={<ITServicesNearMe />} />
          <Route
            path="/network-services-near-me"
            element={<NetworkServicesNearMe />}
          />
          <Route path="/managed-it-services" element={<ManagedITServices />} />
          <Route path="/it-support" element={<ITSupport />} />

          <Route path="/it-solutions" element={<ITSolutions />} />
          <Route
            path="/itsolutions"
            element={<Navigate to="/it-solutions" replace />}
          />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />

          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contactpage" element={<ContactPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Toaster />
    </>
  );
}

export default App;