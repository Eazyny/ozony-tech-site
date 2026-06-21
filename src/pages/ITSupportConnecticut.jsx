import React from 'react';
import {
  Wrench,
  Monitor,
  Headphones,
  Briefcase,
  Store,
  Building2,
} from 'lucide-react';
import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';

const ITSupportConnecticut = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="Small Business IT Support in Connecticut | Ozony Tech"
      pageDescription="Ozony Tech provides small business IT support in Connecticut for offices, professional spaces, retail stores, clinics, studios, and local businesses that need help with devices, printers, Wi-Fi, connectivity, and everyday tech issues."
      eyebrow="OZONY TECH · CONNECTICUT IT SUPPORT"
      title="Small Business IT Support in Connecticut"
      description="Practical IT support for Connecticut small businesses that need help with devices, workstations, printers, Wi-Fi, connectivity, access issues, and the day-to-day tech problems that interrupt work."
      heroImage="/images/services/it-support-nyc.webp"
      heroImageAlt="Small business IT support in Connecticut"
      ogImage="/images/services/it-support-nyc.webp"
      twitterImage="/images/services/it-support-nyc.webp"
      includeTitle="What Connecticut IT Support Can Include"
      includeDescription="Straightforward support for the technology issues that slow down offices, professional spaces, storefronts, and service businesses during daily operations."
      serviceIncludes={[
        'Device and workstation setup support',
        'Printer and shared device troubleshooting',
        'Wi-Fi and connectivity issue support',
        'Staff device, POS, and back-office support',
        'New user onboarding and device setup help',
        'Shared access, permissions, and general IT troubleshooting',
      ]}
      outcomes={[
        {
          icon: Wrench,
          title: 'Faster Day-to-Day Fixes',
          text: 'Get practical help for device issues, printer problems, Wi-Fi drops, access trouble, and the everyday tech problems that interrupt work.',
        },
        {
          icon: Monitor,
          title: 'More Reliable Business Devices',
          text: 'Keep workstations, printers, shared devices, staff systems, and common business tools easier to use and more dependable.',
        },
        {
          icon: Headphones,
          title: 'Clearer Support Path',
          text: 'Create a more reliable support path for recurring technology issues instead of waiting for small problems to become larger disruptions.',
        },
      ]}
      industriesTitle="IT Support for Connecticut Small Businesses"
      idealFor={[
        {
          title: 'Offices & Professional Spaces',
          description:
            'Support for offices, clinics, studios, and professional spaces that rely on workstations, printers, phones, Wi-Fi, shared access, and stable daily workflows.',
          icon: Briefcase,
        },
        {
          title: 'Retail Stores',
          description:
            'Practical IT help for POS systems, staff devices, printers, guest Wi-Fi, connectivity issues, and customer-facing technology problems.',
          icon: Store,
        },
        {
          title: 'Restaurants & Local Service Businesses',
          description:
            'Useful for restaurants, cafés, salons, studios, clinics, and service businesses that need reliable devices, Wi-Fi, and smoother operations.',
          icon: Building2,
        },
      ]}
      midCtaEyebrow="Need Local IT Help?"
      midCtaTitle="Get Connecticut IT Support Without the Headaches"
      midCtaDescription="From device issues and printer problems to Wi-Fi drops, access trouble, and everyday troubleshooting, Ozony Tech helps Connecticut businesses keep work moving."
      seoTitle="IT Support for Small Businesses in Connecticut"
      seoParagraphs={[
        'Ozony Tech provides small business IT support in Connecticut for offices, professional spaces, retail stores, restaurants, clinics, studios, and local service businesses that need practical help with devices, connectivity, printers, shared access, Wi-Fi issues, and everyday troubleshooting.',
        'Support can include workstation setup, printer troubleshooting, device support, POS and staff device connectivity, Wi-Fi issue resolution, shared access help, onboarding assistance, and general cleanup of business technology environments.',
        'For Connecticut businesses near Stamford, Greenwich, Norwalk, Bridgeport, New Haven, Danbury, and nearby areas, Ozony Tech provides straightforward support built around real small business needs without unnecessary complexity.',
      ]}
      areasServed="Serving businesses across Connecticut, including Stamford, Greenwich, Norwalk, Bridgeport, New Haven, Danbury, and nearby areas."
      faqItems={[
        {
          question:
            'Do you provide small business IT support in Connecticut?',
          answer:
            'Yes. Ozony Tech provides small business IT support in Connecticut for offices, retail shops, restaurants, clinics, studios, and other local business environments that need practical day-to-day technology help.',
        },
        {
          question: 'What does small business IT support include?',
          answer:
            'Small business IT support can include device setup, workstation support, printer troubleshooting, Wi-Fi and connectivity issue resolution, shared access help, POS connectivity support, onboarding assistance, and general troubleshooting.',
        },
        {
          question: 'Can you help with Wi-Fi and network issues too?',
          answer:
            'Yes. Ozony Tech can help Connecticut businesses with Wi-Fi issues, device connectivity, basic network troubleshooting, and cleaner network organization.',
        },
        {
          question: 'Can you improve an existing business tech setup?',
          answer:
            'Yes. Existing business environments can often be improved through better device organization, clearer setup, more reliable connectivity, and practical troubleshooting that helps everything run more smoothly.',
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
          label: 'Firewall Setup Connecticut',
          to: '/firewall-setup-connecticut',
        },
        { label: 'Managed IT Services', to: '/managed-it-services' },
      ]}
      finalTitle="Need Small Business IT Support in Connecticut?"
      finalDescription="Get dependable help with devices, connectivity, printers, Wi-Fi, troubleshooting, and the everyday tech issues that slow your business down."
    />
  );
};

export default ITSupportConnecticut;