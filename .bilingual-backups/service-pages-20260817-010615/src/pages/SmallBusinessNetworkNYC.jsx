import React from 'react';
import {
  Network,
  Shield,
  Briefcase,
  Store,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';

const SmallBusinessNetworkNYC = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="Small Business Network Setup Guide for NYC Businesses | Ozony Tech"
      pageDescription="A practical guide for NYC small businesses planning a reliable network setup, including Wi-Fi, routers, firewalls, guest access, POS devices, printers, and future growth."
      eyebrow="OZONY TECH · SMALL BUSINESS NETWORK GUIDE"
      title="Small Business Network Setup Guide for NYC Businesses"
      description="Planning a small business network in NYC? This guide explains what your setup should include, what mistakes to avoid, and when to bring in help for Wi-Fi, routers, firewalls, printers, POS systems, and business devices."
      heroImage="/images/services/small-business-network-nyc.webp"
      heroImageAlt="Small business network setup guide for NYC businesses"
      ogImage="/images/services/small-business-network-nyc.webp"
      twitterImage="/images/services/small-business-network-nyc.webp"
      includeTitle="What a Small Business Network Should Include"
      includeDescription="A practical breakdown of the core pieces NYC small businesses should plan for when building or upgrading a reliable network."
      serviceIncludes={[
        'Router and firewall planning',
        'Business Wi-Fi coverage and access point placement',
        'Guest and staff network separation',
        'Printer, POS, and workstation connectivity planning',
        'Device organization for offices, retail stores, and restaurants',
        'Room for future growth, upgrades, and troubleshooting',
      ]}
      outcomes={[
        {
          icon: Network,
          title: 'Cleaner Connectivity',
          text: 'Understand how to build a more organized network environment with better structure, more dependable connectivity, and fewer day-to-day issues.',
        },
        {
          icon: Shield,
          title: 'Stronger Foundation',
          text: 'Learn what a better setup should include for business devices, internet access, wireless coverage, and long-term reliability.',
        },
        {
          icon: CheckCircle2,
          title: 'Built for Daily Business Use',
          text: 'Plan a practical network setup around the real needs of small businesses instead of unnecessary complexity.',
        },
      ]}
      industriesTitle="Network Planning for Small Business Environments"
      idealFor={[
        {
          title: 'Offices',
          description:
            'Useful for planning reliable connectivity for teams, workstations, printers, phones, and shared office operations.',
          icon: Briefcase,
        },
        {
          title: 'Retail Stores',
          description:
            'Helpful for stores that need clean connectivity for POS systems, staff devices, guest Wi-Fi, and back-office workflows.',
          icon: Store,
        },
        {
          title: 'Restaurants & Service Businesses',
          description:
            'Useful for restaurants, cafés, studios, and customer-facing spaces that depend on stable connectivity.',
          icon: Building2,
        },
      ]}
      midCtaEyebrow="Need Help Building the Actual Network?"
      midCtaTitle="Need Help Building the Actual Network?"
      midCtaDescription="If you are ready to install, clean up, or upgrade your business network, view our NYC network setup service for hands-on help."
      seoTitle="Small Business Network Setup Guide for NYC Businesses"
      seoParagraphs={[
        'A reliable small business network in NYC should be planned around the way the business actually operates. Offices, retail stores, restaurants, studios, and service businesses all need dependable internet, organized device connectivity, and Wi-Fi that supports daily work without constant interruptions.',
        'A proper small business network setup may include router and firewall planning, Wi-Fi coverage, printer and workstation connectivity, POS system support, guest and staff network separation, and room for future growth. The goal is not to overcomplicate the environment. The goal is to create a cleaner foundation that is easier to use, troubleshoot, and expand.',
        'This guide is meant to help NYC small businesses understand what should go into a reliable setup before they invest in hardware, upgrades, or professional installation. When you are ready for hands-on help, Ozony Tech provides business network setup services for small businesses across NYC.',
      ]}
      areasServed="Serving small businesses across Manhattan, Brooklyn, Queens, the Bronx, Staten Island, and nearby areas in NYC."
      faqItems={[
        {
          question: 'What should a small business network setup include?',
          answer:
            'A small business network setup should usually include router and firewall planning, Wi-Fi coverage, device connectivity, printer and POS support, guest access, staff access, and a structure that can support future growth.',
        },
        {
          question: 'Do small businesses need separate guest and staff Wi-Fi?',
          answer:
            'In most business environments, yes. Separating guest and staff Wi-Fi helps keep customer traffic away from internal business devices and creates a cleaner, more organized network structure.',
        },
        {
          question: 'Can an existing small business network be improved?',
          answer:
            'Yes. Existing business networks can often be cleaned up, reorganized, and optimized to improve performance, coverage, reliability, and day-to-day usability.',
        },
        {
          question: 'When should a business get professional network setup help?',
          answer:
            'A business should consider professional help when Wi-Fi is unreliable, devices keep disconnecting, POS systems are affected, guest access is mixed with business devices, or the network has grown beyond a basic home-style setup.',
        },
      ]}
      relatedServices={[
        { label: 'Business Network Setup NYC', to: '/network-setup-nyc' },
        { label: 'Business Wi-Fi NYC', to: '/business-wifi-nyc' },
        { label: 'Firewall Setup NYC', to: '/firewall-setup-nyc' },
        {
          label: 'Network Troubleshooting NYC',
          to: '/network-troubleshooting-nyc',
        },
      ]}
      finalTitle="Ready for Professional Network Setup in NYC?"
      finalDescription="Use this guide to plan your setup, then work with Ozony Tech when you are ready to build a cleaner, more reliable small business network."
    />
  );
};

export default SmallBusinessNetworkNYC;