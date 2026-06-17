import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import DecodedText from '@/components/ui/decode-text';

const CONTACT_PAGE_PATH = '/contactpage';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'AI Lead Agent', to: '/ai-lead-agent' },
    { label: 'Services', href: '#services' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'About', href: '#about' },
    { label: 'Contact', to: CONTACT_PAGE_PATH },
  ];

  const goToSection = (href) => {
    setIsMobileMenuOpen(false);

    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    navigate(`/${href}`);
  };

  const goToPage = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  const handleNavItemClick = (item) => {
    if (item.to) {
      goToPage(item.to);
      return;
    }

    goToSection(item.href);
  };

  const handleBrandClick = () => {
    setIsMobileMenuOpen(false);

    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigate('/');
  };

  const goToPackages = () => {
    goToPage('/packages');
  };

  const goToContact = () => {
    goToPage(CONTACT_PAGE_PATH);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-white/10 bg-slate-900/35 backdrop-blur-lg shadow-lg shadow-blue-500/10'
          : 'border-b border-white/10 bg-slate-900/35 backdrop-blur-lg lg:border-transparent lg:bg-transparent lg:backdrop-blur-none',
      ].join(' ')}
    >
      <div
        className={[
          'pointer-events-none absolute inset-x-0 top-0 h-24 -z-10 transition-opacity duration-300',
          isScrolled ? 'opacity-100' : 'opacity-0 lg:opacity-0',
        ].join(' ')}
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(59,130,246,.18), transparent 60%), radial-gradient(circle at 80% 30%, rgba(168,85,247,.14), transparent 60%)',
          filter: 'blur(16px)',
        }}
      />

      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <motion.button
            type="button"
            onClick={handleBrandClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex shrink-0 items-center gap-3.5 text-[1.35rem] font-bold leading-none tracking-tight text-white"
            aria-label="Go to homepage"
          >
            <span
              className="oz-logo-wrap scale-[1.12] transform"
              aria-hidden="true"
            >
              <span className="oz-logo" />
            </span>
            <span>Ozony Tech</span>
          </motion.button>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                onClick={() => handleNavItemClick(item)}
                className="font-medium text-gray-300 transition-colors duration-200 hover:text-white"
              >
                <DecodedText speed={12}>{item.label}</DecodedText>
              </motion.button>
            ))}

            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36 }}
              onClick={goToPackages}
              className="font-medium text-gray-300 transition-colors duration-200 hover:text-white"
            >
              <DecodedText speed={12}>Packages</DecodedText>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              onClick={goToContact}
              className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:border-blue-300/50 hover:bg-blue-500/20 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Request a Quote
            </motion.button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 rounded-xl border border-white/10 bg-slate-900/60 p-3 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavItemClick(item)}
                  className="block w-full rounded-lg px-4 py-3 text-left text-gray-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                >
                  <DecodedText speed={12}>{item.label}</DecodedText>
                </button>
              ))}

              <button
                onClick={goToPackages}
                className="block w-full rounded-lg px-4 py-3 text-left text-gray-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                <DecodedText speed={12}>Packages</DecodedText>
              </button>

              <button
                onClick={goToContact}
                className="mt-2 w-full rounded-lg border border-blue-400/30 bg-blue-500/10 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-500/20"
              >
                Request a Quote
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;