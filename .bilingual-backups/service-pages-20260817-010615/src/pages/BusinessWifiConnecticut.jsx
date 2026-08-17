import React from 'react';
import {
  Wifi,
  Radio,
  Gauge,
  Store,
  UtensilsCrossed,
  Briefcase,
} from 'lucide-react';
import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';

const BusinessWifiConnecticut = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="Business Wi-Fi Installation in Connecticut | Ozony Tech"
      pageDescription="Ozony Tech provides business Wi-Fi installation in Connecticut for small businesses, offices, retail stores, restaurants, clinics, studios, and professional spaces that need stronger wireless coverage."
      eyebrow="OZONY TECH · CONNECTICUT BUSINESS WI-FI"
      title="Business Wi-Fi Installation in Connecticut"
      description="Business Wi-Fi setup for Connecticut small businesses that need stronger coverage, better wireless performance, cleaner access point placement, and reliable connectivity for staff, guests, and daily operations."
      heroImage="/images/services/business-wifi-nyc.webp"
      heroImageAlt="Business Wi-Fi installation in Connecticut for small businesses"
      ogImage="/images/services/business-wifi-nyc.webp"
      twitterImage="/images/services/business-wifi-nyc.webp"
      includeTitle="What Connecticut Business Wi-Fi Can Include"
      includeDescription="Practical wireless setup for small business spaces that need stronger signal, fewer dead zones, better device connectivity, and cleaner separation between staff and guest access."
      serviceIncludes={[
        'Business Wi-Fi design and installation',
        'Access point placement planning',
        'Coverage improvements and dead zone reduction',
        'Guest and staff Wi-Fi separation',
        'Wireless performance tuning and optimization',
        'Basic wireless security and password hardening',
      ]}
      outcomes={[
        {
          icon: Radio,
          title: 'Better Wireless Coverage',
          text: 'Improve signal strength across the areas where staff, customers, devices, and business systems need dependable connectivity.',
        },
        {
          icon: Gauge,
          title: 'More Reliable Performance',
          text: 'Reduce weak spots, unstable connections, and frustrating wireless issues that slow down daily operations.',
        },
        {
          icon: Wifi,
          title: 'Smarter Wi-Fi Structure',
          text: 'Build a cleaner wireless setup around your space, your users, guest access, staff devices, and the way your business actually operates.',
        },
      ]}
      industriesTitle="Business Wi-Fi for Connecticut Small Businesses"
      idealFor={[
        {
          title: 'Offices & Professional Spaces',
          description:
            'Stable wireless connectivity for laptops, shared devices, printers, meetings, phones, and day-to-day business workflows.',
          icon: Briefcase,
        },
        {
          title: 'Retail Stores',
          description:
            'Reliable business Wi-Fi for POS systems, staff devices, customer access, back-office tools, and customer-facing operations.',
          icon: Store,
        },
        {
          title: 'Restaurants, Cafés & Local Service Businesses',
          description:
            'Wireless coverage for registers, tablets, kitchen tools, guest access, staff devices, and busy customer-facing spaces.',
          icon: UtensilsCrossed,
        },
      ]}
      midCtaEyebrow="Need Better Wi-Fi Coverage?"
      midCtaTitle="Build Business Wi-Fi That Reaches Where It Should"
      midCtaDescription="From weak signal and dead zones to unstable connections and messy guest access, Ozony Tech helps Connecticut businesses build cleaner wireless setups that support daily operations."
      seoTitle="Business Wi-Fi Installation for Small Businesses in Connecticut"
      seoParagraphs={[
        'Ozony Tech provides business Wi-Fi installation in Connecticut for small businesses that need stronger coverage, more dependable performance, cleaner access point placement, and better wireless organization for staff, guests, and business devices.',
        'Business Wi-Fi installation can include access point planning, coverage improvements, guest and staff separation, wireless performance tuning, password hardening, and cleanup of weak or unreliable Wi-Fi setups. The goal is to create Wi-Fi that supports daily business use instead of creating frustration.',
        'For Connecticut businesses in Stamford, Greenwich, Norwalk, Bridgeport, New Haven, Danbury, and nearby areas, Ozony Tech helps create wireless setups that are easier to manage, easier to troubleshoot, and better prepared for real small business use.',
      ]}
      areasServed="Serving businesses across Connecticut, including Stamford, Greenwich, Norwalk, Bridgeport, New Haven, Danbury, and nearby areas."
      faqItems={[
        {
          question:
            'Do you provide business Wi-Fi installation in Connecticut?',
          answer:
            'Yes. Ozony Tech provides business Wi-Fi installation in Connecticut for offices, retail stores, restaurants, clinics, studios, and other small business spaces that need stronger and more reliable wireless coverage.',
        },
        {
          question: 'What does business Wi-Fi installation include?',
          answer:
            'Business Wi-Fi installation can include access point placement planning, wireless setup, coverage improvements, guest and staff separation, performance tuning, and basic wireless security hardening.',
        },
        {
          question:
            'Can you improve weak Wi-Fi in an existing business location?',
          answer:
            'Yes. Existing Wi-Fi setups can often be improved through better access point placement, cleaner wireless design, stronger segmentation, and practical performance optimization.',
        },
        {
          question:
            'Can you separate guest Wi-Fi from staff and business devices?',
          answer:
            'Yes. Guest and staff Wi-Fi can be separated to improve security, organization, and overall performance for your business network.',
        },
      ]}
      relatedServices={[
        {
          label: 'Business Network Setup Connecticut',
          to: '/network-setup-connecticut',
        },
        {
          label: 'Firewall Setup Connecticut',
          to: '/firewall-setup-connecticut',
        },
        {
          label: 'IT Support Connecticut',
          to: '/it-support-connecticut',
        },
        { label: 'Local Network Services', to: '/network-services-near-me' },
      ]}
      finalTitle="Need Business Wi-Fi Installation in Connecticut?"
      finalDescription="Get stronger wireless coverage, cleaner access point planning, better guest and staff separation, and a Wi-Fi setup built for the way your business actually operates."
    />
  );
};

export default BusinessWifiConnecticut;