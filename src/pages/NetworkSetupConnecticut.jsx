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

const NetworkSetupConnecticut = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="Business Network Setup in Connecticut | Ozony Tech"
      pageDescription="Ozony Tech provides business network setup in Connecticut for small businesses, offices, professional spaces, retail stores, and local service businesses that need reliable Wi-Fi and cleaner connectivity."
      eyebrow="OZONY TECH · CONNECTICUT NETWORK SETUP"
      title="Business Network Setup in Connecticut"
      description="Network setup for Connecticut small businesses that need reliable Wi-Fi, cleaner device connectivity, router and firewall planning, and a network structure built for daily operations."
      heroImage="/images/services/network-setup-nyc.webp"
      heroImageAlt="Business network setup in Connecticut for small businesses"
      ogImage="/images/services/network-setup-nyc.webp"
      twitterImage="/images/services/network-setup-nyc.webp"
      includeTitle="What Connecticut Network Setup Can Include"
      includeDescription="Practical network setup for offices, storefronts, professional spaces, and service businesses that need dependable connectivity without messy wiring, weak Wi-Fi, or confusing network structure."
      serviceIncludes={[
        'Business network setup and configuration',
        'Router and firewall planning',
        'Business Wi-Fi setup and access point planning',
        'Guest, staff, and business device separation',
        'Printer, POS, workstation, and shared device connectivity',
        'Network cleanup, documentation, and planning for future growth',
      ]}
      outcomes={[
        {
          icon: Network,
          title: 'Cleaner Business Connectivity',
          text: 'Create a more organized network foundation for workstations, printers, POS systems, phones, shared tools, and business devices.',
        },
        {
          icon: Shield,
          title: 'Better Network Control',
          text: 'Support cleaner separation between guest Wi-Fi, staff devices, business systems, and traffic that should not be mixed together.',
        },
        {
          icon: CheckCircle2,
          title: 'Built for Reliable Daily Use',
          text: 'Set up a network that is easier to use, easier to troubleshoot, and better prepared for future changes as your business grows.',
        },
      ]}
      industriesTitle="Network Setup for Connecticut Small Businesses"
      idealFor={[
        {
          title: 'Offices & Professional Spaces',
          description:
            'Network setup for offices, studios, clinics, and professional spaces that rely on workstations, printers, phones, shared tools, and stable connectivity.',
          icon: Briefcase,
        },
        {
          title: 'Retail Stores',
          description:
            'Clean connectivity for POS systems, staff devices, customer Wi-Fi, back-office systems, and daily customer-facing workflows.',
          icon: Store,
        },
        {
          title: 'Restaurants & Local Service Businesses',
          description:
            'Practical network setup for restaurants, cafés, salons, studios, and service businesses that need stable Wi-Fi and organized device access.',
          icon: Building2,
        },
      ]}
      midCtaEyebrow="Need a Cleaner Network Setup?"
      midCtaTitle="Build a Network That Supports Your Connecticut Business"
      midCtaDescription="From Wi-Fi reliability and device connectivity to router planning, firewall structure, and cleaner network organization, Ozony Tech helps Connecticut businesses build stronger network foundations."
      seoTitle="Network Setup for Small Businesses in Connecticut"
      seoParagraphs={[
        'Ozony Tech provides business network setup in Connecticut for small businesses that need dependable Wi-Fi, organized device connectivity, router and firewall planning, and a cleaner network structure for daily operations.',
        'A proper small business network setup may include Wi-Fi planning, router and firewall configuration, guest and staff network separation, printer and POS connectivity, workstation support, and cleanup of unreliable or confusing network environments.',
        'For Connecticut businesses in Stamford, Greenwich, Norwalk, Bridgeport, New Haven, Danbury, and nearby areas, Ozony Tech helps create cleaner network foundations that are easier to manage, easier to troubleshoot, and better prepared for growth.',
      ]}
      areasServed="Serving businesses across Connecticut, including Stamford, Greenwich, Norwalk, Bridgeport, New Haven, Danbury, and nearby areas."
      faqItems={[
        {
          question:
            'Do you provide business network setup for small businesses in Connecticut?',
          answer:
            'Yes. Ozony Tech provides business network setup for Connecticut small businesses that need reliable Wi-Fi, organized connectivity, router and firewall planning, and cleaner network structure.',
        },
        {
          question: 'What does a business network setup include?',
          answer:
            'A business network setup can include router and firewall planning, Wi-Fi setup, printer and workstation connectivity, POS connectivity, guest and staff separation, and network cleanup for daily business use.',
        },
        {
          question:
            'Can you improve an existing business network instead of building a new one?',
          answer:
            'Yes. Existing networks can often be cleaned up, reorganized, and optimized to improve reliability, Wi-Fi coverage, device connectivity, and day-to-day usability.',
        },
        {
          question:
            'Can you separate guest Wi-Fi from staff and business devices?',
          answer:
            'Yes. Guest access, staff devices, and business-critical systems can be separated to create a cleaner and more organized network environment.',
        },
      ]}
      relatedServices={[
        { label: 'IT Support Connecticut', to: '/it-support-connecticut' },
        {
          label: 'Business Wi-Fi Connecticut',
          to: '/business-wifi-connecticut',
        },
        {
          label: 'Firewall Setup Connecticut',
          to: '/firewall-setup-connecticut',
        },
        { label: 'Local Network Services', to: '/network-services-near-me' },
      ]}
      finalTitle="Need Business Network Setup in Connecticut?"
      finalDescription="Get a cleaner, more reliable network setup built around your business, your devices, and the way your team works every day."
    />
  );
};

export default NetworkSetupConnecticut;