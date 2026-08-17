import React from 'react';
import {
  ShieldCheck,
  Monitor,
  Headphones,
  Briefcase,
  Store,
  Network,
} from 'lucide-react';
import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';

const ManagedITServices = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="Managed IT Services for Small Businesses | Ozony Tech"
      pageDescription="Ozony Tech provides managed IT services for small businesses that need ongoing support, cleaner technology management, device help, network troubleshooting, and dependable day-to-day IT assistance."
      eyebrow="OZONY TECH · MANAGED IT SERVICES"
      title="Managed IT Services for Small Businesses"
      description="Ongoing IT support for small businesses that need cleaner systems, fewer recurring tech problems, better device organization, and practical help keeping day-to-day operations moving."
      heroImage="/images/services/it-support-nyc.webp"
      heroImageAlt="Managed IT services for small businesses"
      ogImage="/service_area_map.png"
      twitterImage="/service_area_map.png"
      includeTitle="What Managed IT Support Can Include"
      includeDescription="Ongoing support for small businesses that want a cleaner, more reliable technology environment without waiting for every issue to become a fire drill."
      serviceIncludes={[
        'Recurring small business IT support',
        'Device and workstation setup help',
        'Printer and shared device troubleshooting',
        'Wi-Fi and connectivity issue support',
        'User onboarding and device setup assistance',
        'Practical support planning for recurring technology issues',
      ]}
      outcomes={[
        {
          icon: ShieldCheck,
          title: 'Fewer Recurring Problems',
          text: 'Create a more consistent support path for the technology issues that keep coming back and slowing down daily business operations.',
        },
        {
          icon: Monitor,
          title: 'Cleaner Technology Management',
          text: 'Keep devices, shared tools, printers, connectivity, and business systems better organized, easier to support, and more dependable.',
        },
        {
          icon: Headphones,
          title: 'Ongoing Support Path',
          text: 'Get practical help for day-to-day IT issues instead of only reacting when devices, Wi-Fi, printers, or access problems interrupt work.',
        },
      ]}
      industriesTitle="Managed IT Support for Local Businesses"
      idealFor={[
        {
          title: 'Offices',
          description:
            'Ongoing IT support for teams that rely on workstations, printers, shared tools, connectivity, and smooth daily operations.',
          icon: Briefcase,
        },
        {
          title: 'Retail Stores',
          description:
            'Practical support for POS systems, staff devices, guest Wi-Fi, printers, and the technology issues that disrupt customer-facing environments.',
          icon: Store,
        },
        {
          title: 'Growing Small Businesses',
          description:
            'A strong fit for businesses that need more consistent support, cleaner organization, and a better long-term technology foundation.',
          icon: Network,
        },
      ]}
      midCtaEyebrow="Need Ongoing IT Support?"
      midCtaTitle="Build a Cleaner Support Path for Your Business"
      midCtaDescription="If your business keeps running into the same device, Wi-Fi, printer, access, or troubleshooting issues, managed IT services can help create a more consistent way to handle them."
      seoTitle="Managed IT Services for Small Business Operations"
      seoParagraphs={[
        'Ozony Tech provides managed IT services for small businesses that need ongoing support with devices, connectivity, troubleshooting, user setup, printers, shared access, and everyday business technology issues. This page is focused on recurring support needs, not one-time emergency fixes.',
        'Managed IT services can help small businesses create a cleaner support path for workstations, printers, Wi-Fi, connectivity problems, device setup, user onboarding, and general technology organization. The goal is to reduce repeated friction and make the environment easier to manage over time.',
        'Some businesses only need help with a specific issue. Others need a more consistent support relationship as their team, devices, and network grow. Ozony Tech keeps managed IT support practical, small-business focused, and built around real daily operations instead of unnecessary complexity.',
      ]}
      areasServed="Serving small businesses across NYC, New Jersey, Connecticut, and nearby areas."
      faqItems={[
        {
          question: 'What are managed IT services?',
          answer:
            'Managed IT services provide ongoing support for business technology needs such as devices, workstations, printers, Wi-Fi issues, connectivity problems, user setup, troubleshooting, and general technology organization.',
        },
        {
          question: 'Are managed IT services useful for small businesses?',
          answer:
            'Yes. Small businesses can benefit from managed IT services when they need more consistent support, cleaner device organization, fewer recurring technology problems, and a better way to handle day-to-day IT issues.',
        },
        {
          question: 'Is this different from one-time IT support?',
          answer:
            'Yes. One-time IT support is usually focused on a specific problem. Managed IT services are better for businesses that need ongoing help, recurring support, and a cleaner long-term technology support path.',
        },
        {
          question: 'Can managed IT services include network and Wi-Fi help?',
          answer:
            'Yes. Managed IT support can include help with Wi-Fi issues, network troubleshooting, device connectivity, shared access, printers, and other small business technology problems.',
        },
      ]}
      relatedServices={[
        { label: 'Small Business IT Support NYC', to: '/it-support-nyc' },
        { label: 'IT Support Services', to: '/it-support' },
        { label: 'IT Services Near Me', to: '/it-services-near-me' },
        {
          label: 'Network Troubleshooting NYC',
          to: '/network-troubleshooting-nyc',
        },
      ]}
      finalTitle="Need Ongoing IT Support for Your Business?"
      finalDescription="Get a cleaner support path for devices, connectivity, troubleshooting, and the recurring technology issues that slow your business down."
    />
  );
};

export default ManagedITServices;