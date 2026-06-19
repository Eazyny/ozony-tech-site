import React, { useState } from 'react';
import {
  ChevronDown,
  Facebook,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const [servicePagesOpen, setServicePagesOpen] = useState(false);

  const isHomePage = location.pathname === '/';

  const footerLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'About', href: '#about' },
    { label: 'Contact', to: '/contactpage' },
    { label: 'Packages', to: '/packages' },
    { label: 'AI Lead Agent', to: '/ai-lead-agent' },
  ];

  const servicePageLinks = [
    { label: 'AI Lead Capture', to: '/ai-agent-lead-capture' },
    { label: 'Business Wi-Fi Connecticut', to: '/business-wifi-connecticut' },
    { label: 'Business Wi-Fi NYC', to: '/business-wifi-nyc' },
    { label: 'Firewall Setup Connecticut', to: '/firewall-setup-connecticut' },
    { label: 'Firewall Setup NYC', to: '/firewall-setup-nyc' },
    { label: 'IT Services Near Me', to: '/it-services-near-me' },
    { label: 'IT Solutions', to: '/it-solutions' },
    { label: 'IT Support', to: '/it-support' },
    { label: 'IT Support Connecticut', to: '/it-support-connecticut' },
    { label: 'IT Support NJ', to: '/it-support-nj' },
    { label: 'IT Support NYC', to: '/it-support-nyc' },
    { label: 'Managed IT Services', to: '/managed-it-services' },
    { label: 'Network Services Near Me', to: '/network-services-near-me' },
    { label: 'Network Setup Connecticut', to: '/network-setup-connecticut' },
    { label: 'Network Setup NJ', to: '/network-setup-nj' },
    { label: 'Network Setup NYC', to: '/network-setup-nyc' },
    { label: 'Network Troubleshooting NYC', to: '/network-troubleshooting-nyc' },
    { label: 'Small Business Network NYC', to: '/small-business-network-nyc' },
  ];

  const socialLinks = [
    {
      label: 'X / Twitter',
      href: 'https://x.com/ozonytech',
      icon: Twitter,
    },
    {
      label: 'Facebook',
      href: 'https://facebook.com/ozony.tech',
      icon: Facebook,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/eazyny',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ozony-elsevif',
      icon: Linkedin,
    },
  ];

  const goToSection = (href) => {
    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    navigate(`/${href}`);
  };

  const handleBrandClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigate('/');
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 px-4 py-14">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col gap-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(420px,1.15fr)_minmax(420px,520px)] lg:gap-x-16">
            <div className="max-w-2xl">
              <button
                type="button"
                onClick={handleBrandClick}
                className="flex items-start gap-4 text-left text-gray-400 transition-colors hover:text-gray-200"
                aria-label="Go to homepage"
              >
                <span
                  className="oz-logo-wrap mt-1 scale-[1.12] transform"
                  aria-hidden="true"
                >
                  <span className="oz-logo" />
                </span>

                <div className="flex flex-col">
                  <span className="text-[1.45rem] font-semibold leading-none tracking-tight text-white">
                    Ozony Tech
                  </span>
                  <span className="mt-2 text-base text-gray-400">
                    IT &amp; Network Solutions for Small Businesses
                  </span>
                </div>
              </button>

              <p className="mt-6 max-w-xl text-[15px] leading-8 text-gray-500">
                Practical networking, Wi-Fi, firewall, small business IT support,
                and managed services built to keep local teams connected, secure,
                and ready to grow.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-slate-950/40 text-gray-400 transition-all hover:border-slate-700 hover:text-white"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-[160px_minmax(220px,1fr)] lg:pt-1">
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gray-300">
                  Navigate
                </h3>

                <div className="flex flex-col gap-4">
                  {footerLinks.map((link) =>
                    link.to ? (
                      <Link
                        key={link.label}
                        to={link.to}
                        className="text-[15px] text-gray-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <button
                        key={link.label}
                        type="button"
                        onClick={() => goToSection(link.href)}
                        className="text-left text-[15px] text-gray-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gray-300">
                  Get in Touch
                </h4>

                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:contact@ozony.tech"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    contact@ozony.tech
                  </a>

                  <a
                    href="tel:+13476537655"
                    className="text-[15px] text-gray-400 transition-colors hover:text-white"
                  >
                    347 653 7655
                  </a>

                  <button
                    type="button"
                    onClick={() => navigate('/contactpage')}
                    className="inline-flex w-fit items-center rounded-full border border-slate-800 bg-slate-950/40 px-4 py-2 text-sm text-gray-400 transition-all hover:border-slate-700 hover:text-white"
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <p className="text-sm text-gray-500">
                © {currentYear} Ozony Tech. All rights reserved.
              </p>

              <div className="flex w-full max-w-4xl flex-col gap-4 lg:items-end">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end sm:gap-6">
                  <button
                    type="button"
                    onClick={() => setServicePagesOpen((prev) => !prev)}
                    className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
                    aria-expanded={servicePagesOpen}
                    aria-controls="footer-service-pages"
                  >
                    <span>Service Pages</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        servicePagesOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <p className="text-sm text-gray-500">
                    Serving CT, PA, NJ, and NY/NYC businesses.
                  </p>
                </div>

                <div
                  id="footer-service-pages"
                  className={`w-full overflow-hidden transition-all duration-300 ${
                    servicePagesOpen
                      ? 'max-h-[500px] opacity-100'
                      : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                  {...(!servicePagesOpen ? { inert: '' } : {})}
                >
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-4">
                    <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
                      {servicePageLinks.map((link) => (
                        <Link
                          key={link.label}
                          to={link.to}
                          className="text-sm leading-6 text-gray-500 transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;