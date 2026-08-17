import React from 'react';
import {
  Wrench,
  Monitor,
  Headphones,
  Briefcase,
  Store,
  Network,
} from 'lucide-react';
import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';

const ITSupport = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="Small Business IT Support Services | Ozony Tech"
      pageDescription="Explore Ozony Tech IT support services for small businesses, including NYC IT support, managed IT services, troubleshooting, Wi-Fi help, device setup, and network support."
      eyebrow="OZONY TECH · IT SUPPORT HUB"
      title="Small Business IT Support Services"
      description="Explore practical IT support options for small businesses, from local NYC support and managed IT services to troubleshooting, Wi-Fi help, device setup, and network support."
      heroImage="/images/services/it-support-nyc.webp"
      heroImageAlt="Small business IT support services"
      ogImage="/images/services/it-support-nyc.webp"
      twitterImage="/images/services/it-support-nyc.webp"
      includeTitle="IT Support Options for Small Businesses"
      includeDescription="A practical overview of the support areas Ozony Tech can help with, from everyday troubleshooting to local NYC IT support and ongoing managed service needs."
      serviceIncludes={[
        'Local IT support for small businesses in NYC',
        'Device and workstation setup and support',
        'Printer and shared device troubleshooting',
        'Basic network and Wi-Fi issue resolution',
        'New user onboarding and device setup help',
        'Managed IT service options for ongoing support',
      ]}
      outcomes={[
        {
          icon: Wrench,
          title: 'Troubleshooting Support',
          text: 'Get help with common technology problems before they turn into bigger disruptions for your team, customers, or daily workflow.',
        },
        {
          icon: Monitor,
          title: 'Device & Workstation Help',
          text: 'Support for workstations, printers, shared devices, access issues, setup needs, and the everyday systems small businesses rely on.',
        },
        {
          icon: Headphones,
          title: 'Support Path Guidance',
          text: 'Use this hub to find the right support option, whether you need local NYC IT help, troubleshooting, managed IT services, or network support.',
        },
      ]}
      industriesTitle="Built for Small Business Environments"
      idealFor={[
        {
          title: 'Offices',
          description:
            'Reliable IT support for teams, workstations, printers, phones, connectivity, and smooth daily operations.',
          icon: Briefcase,
        },
        {
          title: 'Retail Stores',
          description:
            'Practical help for POS systems, staff devices, customer Wi-Fi, and the technology issues that disrupt service.',
          icon: Store,
        },
        {
          title: 'Growing Small Businesses',
          description:
            'A strong fit for businesses that need cleaner organization, more reliable systems, and practical support they can count on.',
          icon: Network,
        },
      ]}
      midCtaEyebrow="Need the Right IT Support Path?"
      midCtaTitle="Find the Right Support Option for Your Business"
      midCtaDescription="Whether you need local NYC IT support, help troubleshooting a specific issue, or ongoing managed IT services, Ozony Tech can help you choose the right next step."
      seoTitle="Small Business IT Support Services from Ozony Tech"
      seoParagraphs={[
        'Ozony Tech provides practical IT support services for small businesses that need help with devices, connectivity, shared access, troubleshooting, Wi-Fi issues, and everyday business technology problems. This page acts as a hub for the different types of IT support Ozony Tech offers.',
        'Small business IT support may include device setup, workstation help, printer troubleshooting, Wi-Fi and connectivity support, shared access assistance, network troubleshooting, and general cleanup of business technology environments. For businesses in New York City, our local IT support page is the best place to start for hands-on support.',
        'Some businesses need help with a specific issue. Others need ongoing support, cleaner systems, or a better plan for managing devices, users, and network reliability. Ozony Tech keeps the focus on straightforward support that fits real small business environments without unnecessary complexity.',
      ]}
      areasServed="Serving small businesses across NYC, New Jersey, Connecticut, and nearby areas."
      faqItems={[
        {
          question: 'What kind of IT support does Ozony Tech provide?',
          answer:
            'Ozony Tech helps small businesses with practical IT support, including device setup, workstation help, printer troubleshooting, Wi-Fi and connectivity issues, shared access support, and general troubleshooting.',
        },
        {
          question: 'Is this the main NYC IT support page?',
          answer:
            'No. This page is a general IT support services hub. For local service in New York City, the best page to visit is the Small Business IT Support NYC page.',
        },
        {
          question: 'Do you offer ongoing IT support?',
          answer:
            'Yes. Businesses that need recurring support, cleaner systems, and help managing day-to-day technology needs can review Ozony Tech managed IT service options.',
        },
        {
          question: 'Can you help with network and Wi-Fi problems too?',
          answer:
            'Yes. Ozony Tech can help with network troubleshooting, Wi-Fi issues, device connectivity, and related small business technology problems.',
        },
      ]}
      relatedServices={[
        { label: 'Small Business IT Support NYC', to: '/it-support-nyc' },
        { label: 'Managed IT Services', to: '/managed-it-services' },
        { label: 'IT Services Near Me', to: '/it-services-near-me' },
        {
          label: 'Network Troubleshooting NYC',
          to: '/network-troubleshooting-nyc',
        },
      ]}
      finalTitle="Need Local IT Support for Your Business?"
      finalDescription="Start with our NYC IT support page or contact Ozony Tech for help choosing the right support option for your business."
    />
  );
};

export default ITSupport;