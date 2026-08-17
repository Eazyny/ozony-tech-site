import React from 'react';
import {
  Shield,
  Lock,
  Network,
  Briefcase,
  Store,
  Building2,
} from 'lucide-react';
import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';

const FirewallSetupConnecticut = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="Business Firewall Setup in Connecticut | Ozony Tech"
      pageDescription="Ozony Tech provides business firewall setup in Connecticut for small businesses, offices, retail stores, clinics, studios, and local service businesses that need cleaner network control and traffic separation."
      eyebrow="OZONY TECH · CONNECTICUT FIREWALL SETUP"
      title="Business Firewall Setup in Connecticut"
      description="Firewall setup for Connecticut small businesses that need cleaner network control, better guest and staff separation, safer device access, and a stronger foundation for daily operations."
      heroImage="/images/services/firewall-setup-nyc.webp"
      heroImageAlt="Business firewall setup in Connecticut for small businesses"
      ogImage="/images/services/firewall-setup-nyc.webp"
      twitterImage="/images/services/firewall-setup-nyc.webp"
      includeTitle="What Connecticut Firewall Setup Can Include"
      includeDescription="Practical firewall setup and traffic separation for small businesses that want stronger network control without unnecessary complexity."
      serviceIncludes={[
        'Business firewall setup and configuration',
        'Router and firewall planning',
        'Guest and staff traffic separation',
        'POS, workstation, and business device separation',
        'Basic firewall rules and policy cleanup',
        'Remote access preparation where needed',
      ]}
      outcomes={[
        {
          icon: Shield,
          title: 'Stronger Network Boundaries',
          text: 'Create cleaner separation between guest access, staff devices, POS systems, shared tools, and business-critical network traffic.',
        },
        {
          icon: Lock,
          title: 'Better Access Control',
          text: 'Support a more controlled network setup with practical firewall rules, cleaner device organization, and safer day-to-day access.',
        },
        {
          icon: Network,
          title: 'Cleaner Business Network Structure',
          text: 'Build a firewall and network foundation that is easier to manage, easier to troubleshoot, and better prepared for future growth.',
        },
      ]}
      industriesTitle="Firewall Setup for Connecticut Small Businesses"
      idealFor={[
        {
          title: 'Offices & Professional Spaces',
          description:
            'Firewall setup for offices, clinics, studios, and professional spaces that need cleaner access control for staff devices, shared tools, and business systems.',
          icon: Briefcase,
        },
        {
          title: 'Retail Stores',
          description:
            'Practical firewall and traffic separation for POS systems, staff devices, guest Wi-Fi, back-office tools, and customer-facing environments.',
          icon: Store,
        },
        {
          title: 'Restaurants & Local Service Businesses',
          description:
            'Useful for restaurants, cafés, salons, studios, and service businesses that need better separation between guest access and business devices.',
          icon: Building2,
        },
      ]}
      midCtaEyebrow="Need Cleaner Network Control?"
      midCtaTitle="Set Up a Firewall That Supports Daily Business Use"
      midCtaDescription="From guest and staff separation to POS protection, firewall rules, and cleaner traffic control, Ozony Tech helps Connecticut businesses build practical firewall setups."
      seoTitle="Firewall Setup for Small Businesses in Connecticut"
      seoParagraphs={[
        'Ozony Tech provides business firewall setup in Connecticut for small businesses that need stronger network control, cleaner traffic separation, and a better foundation for daily operations. A properly configured firewall can help separate guest access, staff devices, POS systems, shared tools, and business-critical traffic.',
        'Firewall setup can include router and firewall planning, basic firewall rules, guest and staff Wi-Fi separation, network segmentation support, remote access preparation where needed, and practical policy cleanup for small business environments.',
        'For Connecticut businesses in Stamford, Greenwich, Norwalk, Bridgeport, New Haven, Danbury, and nearby areas, Ozony Tech focuses on practical firewall setups that are useful, understandable, and built around real small business needs.',
      ]}
      areasServed="Serving businesses across Connecticut, including Stamford, Greenwich, Norwalk, Bridgeport, New Haven, Danbury, and nearby areas."
      faqItems={[
        {
          question:
            'Do you provide business firewall setup in Connecticut?',
          answer:
            'Yes. Ozony Tech provides business firewall setup in Connecticut for offices, retail stores, restaurants, clinics, studios, and other small business environments that need cleaner network control and traffic separation.',
        },
        {
          question: 'What does business firewall setup include?',
          answer:
            'Business firewall setup can include firewall configuration, router planning, basic security rules, guest and staff separation, POS and workstation separation, network segmentation support, and practical policy cleanup.',
        },
        {
          question:
            'Can firewall setup separate guest Wi-Fi from business devices?',
          answer:
            'Yes. Firewall and network segmentation can help separate guest Wi-Fi, staff devices, POS systems, and business-critical devices so traffic is better organized.',
        },
        {
          question:
            'Can firewall setup improve an existing business network?',
          answer:
            'Yes. A properly configured firewall can improve network organization, support cleaner traffic control, reduce messy access patterns, and make the environment easier to manage.',
        },
      ]}
      relatedServices={[
        {
          label: 'Business Network Setup Connecticut',
          to: '/network-setup-connecticut',
        },
        {
          label: 'Business Wi-Fi Connecticut',
          to: '/business-wifi-connecticut',
        },
        {
          label: 'IT Support Connecticut',
          to: '/it-support-connecticut',
        },
        { label: 'Local Network Services', to: '/network-services-near-me' },
      ]}
      finalTitle="Need Business Firewall Setup in Connecticut?"
      finalDescription="Get cleaner traffic control, better guest and staff separation, and a practical firewall setup built around the way your business actually operates."
    />
  );
};

export default FirewallSetupConnecticut;