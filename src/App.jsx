import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Credentials from '@/components/Credentials';
import About from '@/components/About';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ContactPage from '@/pages/ContactPage';

const PackagesPage = lazy(() => import('@/components/PackagesPage'));
const CertificationsPage = lazy(() => import('@/components/CertificationsPage'));
const AILeadAgentPage = lazy(() => import('@/components/AILeadAgent'));

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
        <title>Ozony Tech | IT &amp; Network Solutions for Small Businesses</title>
        <meta
          name="description"
          content="Ozony Tech provides practical IT and network solutions for small businesses, including Wi-Fi setup, networking, device support, troubleshooting, and business IT services."
        />

        <link rel="canonical" href="https://ozony.tech/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ozony.tech/" />
        <meta
          property="og:title"
          content="Ozony Tech | IT & Network Solutions for Small Businesses"
        />
        <meta
          property="og:description"
          content="Practical IT, Wi-Fi, networking, and website solutions for small businesses in NYC, NJ, and CT."
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
          content="Ozony Tech IT and network solutions for small businesses"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ozony Tech | IT & Network Solutions for Small Businesses"
        />
        <meta
          name="twitter:description"
          content="Practical IT, Wi-Fi, networking, and website solutions for small businesses in NYC, NJ, and CT."
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
            url: 'https://ozony.tech',
            email: 'contact@ozony.tech',
            telephone: '+1-347-653-7655',
            image: 'https://ozony.tech/images/ozony-og-preview.png',
            areaServed: ['New York City', 'New Jersey', 'Connecticut'],
            serviceType: [
              'IT Support',
              'Network Setup',
              'Business Wi-Fi',
              'Firewall Setup',
              'Managed IT Services',
              'Website Services',
            ],
            sameAs: [
              'https://x.com/ozonytech',
              'https://github.com/eazyny',
              'https://linkedin.com/in/ozony-elsevif',
            ],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen app-bg">
        <Header />

        <main>
          <Hero />
          <Services />
          <Credentials />
          <About />
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
                aria-label="Back to top"
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
            behavior: location.pathname === '/' ? 'smooth' : 'auto',
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

const RouteLoader = () => (
  <div className="min-h-screen app-bg flex items-center justify-center px-4">
    <div className="text-sm uppercase tracking-[0.2em] text-blue-400">
      Loading...
    </div>
  </div>
);

function App() {
  return (
    <>
      <ScrollManager />

      <Suspense fallback={<RouteLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/ai-lead-agent" element={<AILeadAgentPage />} />

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
          <Route path="/itsolutions" element={<ITSolutions />} />

          <Route path="/contactpage" element={<ContactPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Toaster />
    </>
  );
}

export default App;