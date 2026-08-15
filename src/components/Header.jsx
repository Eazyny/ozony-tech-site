import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DecodedText from '@/components/ui/decode-text';
import StarBorder from '@/components/ui/star-border';

const CONTACT_PAGE_PATH = '/contact';

const MotionLink = motion(Link);

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = location.pathname === '/';

  const navItems = [
    { label: 'AI Lead Agent', to: '/ai-lead-agent' },
    { label: 'Services', href: '#services' },
    { label: 'Certifications', to: '/certifications' },
    { label: 'About', href: '#about' },
    { label: 'Contact', to: CONTACT_PAGE_PATH },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isHomePage || !location.hash) return;

    const timeoutId = window.setTimeout(() => {
      const element = document.querySelector(location.hash);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 80);

    return () => window.clearTimeout(timeoutId);
  }, [isHomePage, location.hash]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSectionClick = (event, href) => {
    event.preventDefault();
    closeMobileMenu();

    if (isHomePage) {
      scrollToSection(href);
      return;
    }

    navigate(`/${href}`);
  };

  const handleBrandClick = (event) => {
    closeMobileMenu();

    if (isHomePage) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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

      <nav className="ozony-container-wide py-4" aria-label="Primary navigation">
        <div className="flex items-center justify-between gap-4">
          <MotionLink
            to="/"
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
          </MotionLink>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item, index) =>
              item.to ? (
                <MotionLink
                  key={item.label}
                  to={item.to}
                  onClick={closeMobileMenu}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="font-medium text-gray-300 transition-colors duration-200 hover:text-white"
                >
                  <DecodedText speed={12}>{item.label}</DecodedText>
                </MotionLink>
              ) : (
                <motion.a
                  key={item.label}
                  href={`/${item.href}`}
                  onClick={(event) => handleSectionClick(event, item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="font-medium text-gray-300 transition-colors duration-200 hover:text-white"
                >
                  <DecodedText speed={12}>{item.label}</DecodedText>
                </motion.a>
              )
            )}

            <MotionLink
              to="/packages"
              onClick={closeMobileMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36 }}
              className="font-medium text-gray-300 transition-colors duration-200 hover:text-white"
            >
              <DecodedText speed={12}>Packages</DecodedText>
            </MotionLink>

            <StarBorder
              as={MotionLink}
              to={CONTACT_PAGE_PATH}
              onClick={closeMobileMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="rounded-full"
              innerClassName="rounded-full border border-blue-400/30 bg-slate-950/80 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-all duration-200 hover:border-blue-300/50 hover:bg-blue-500/20 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Request a Quote
            </StarBorder>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-primary-navigation"
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
            id="mobile-primary-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 rounded-xl border border-white/10 bg-slate-900/60 p-3 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) =>
                item.to ? (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={closeMobileMenu}
                    className="block w-full rounded-lg px-4 py-3 text-left text-gray-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                  >
                    <DecodedText speed={12}>{item.label}</DecodedText>
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={`/${item.href}`}
                    onClick={(event) => handleSectionClick(event, item.href)}
                    className="block w-full rounded-lg px-4 py-3 text-left text-gray-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                  >
                    <DecodedText speed={12}>{item.label}</DecodedText>
                  </a>
                )
              )}

              <Link
                to="/packages"
                onClick={closeMobileMenu}
                className="block w-full rounded-lg px-4 py-3 text-left text-gray-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                <DecodedText speed={12}>Packages</DecodedText>
              </Link>

              <StarBorder className="mt-2 w-full rounded-lg">
                <Link
                  to={CONTACT_PAGE_PATH}
                  onClick={closeMobileMenu}
                  className="w-full rounded-lg border border-blue-400/30 bg-slate-950/80 px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-500/20"
                >
                  Request a Quote
                </Link>
              </StarBorder>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;