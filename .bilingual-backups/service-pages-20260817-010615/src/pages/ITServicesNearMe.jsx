import React from 'react';
import {
  Wrench,
  Monitor,
  Headphones,
  MapPin,
  Store,
  Briefcase,
} from 'lucide-react';
import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';

const ITServicesNearMe = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="Local IT Services for Small Businesses | Ozony Tech"
      pageDescription="Find local IT services from Ozony Tech for small businesses across NYC, New Jersey, Connecticut, and nearby areas, including device support, Wi-Fi help, troubleshooting, and managed IT options."
      eyebrow="OZONY TECH · LOCAL IT SERVICES"
      title="Local IT Services for Small Businesses"
      description="Looking for IT services near your business? Ozony Tech helps small businesses find the right support path for device issues, Wi-Fi problems, troubleshooting, network help, and ongoing technology support."
      heroImage="/images/services/it-support-nyc.webp"
      heroImageAlt="Local IT services for small businesses"
      ogImage="/service_area_map.png"
      twitterImage="/service_area_map.png"
      includeTitle="Local IT Services We Can Help With"
      includeDescription="A practical overview of local IT support options for small businesses that need help with devices, connectivity, Wi-Fi, troubleshooting, and ongoing support."
      serviceIncludes={[
        'Local IT support for small businesses',
        'Device and workstation setup help',
        'Printer and shared device troubleshooting',
        'Wi-Fi and connectivity issue support',
        'Network troubleshooting and cleanup',
        'Managed IT service options for ongoing support',
      ]}
      outcomes={[
        {
          icon: Wrench,
          title: 'Local Problem Solving',
          text: 'Get practical help for the technology issues that interrupt work, slow down your team, or create frustration during daily operations.',
        },
        {
          icon: Monitor,
          title: 'Device & Connectivity Help',
          text: 'Support for computers, printers, shared devices, Wi-Fi, access issues, and the systems small businesses rely on every day.',
        },
        {
          icon: Headphones,
          title: 'The Right Support Path',
          text: 'Use this page to find the right next step, whether you need NYC IT support, managed IT services, network troubleshooting, or broader service-area help.',
        },
      ]}
      industriesTitle="Built for Local Business Environments"
      idealFor={[
        {
          title: 'Offices',
          description:
            'Reliable IT help for teams, workstations, printers, phones, connectivity, and shared office operations.',
          icon: Briefcase,
        },
        {
          title: 'Retail Stores',
          description:
            'Practical support for POS systems, staff devices, customer Wi-Fi, and the everyday tech problems that disrupt service.',
          icon: Store,
        },
        {
          title: 'Businesses That Need Nearby Help',
          description:
            'A practical option for small businesses searching for local IT services and a clear support path when technology gets in the way.',
          icon: MapPin,
        },
      ]}
      midCtaEyebrow="Find the Right IT Support Option"
      midCtaTitle="Choose the Best Local IT Support Path"
      midCtaDescription="Whether you need hands-on NYC support, ongoing managed IT services, or help with a specific network issue, Ozony Tech can help you choose the right next step."
      seoTitle="Local IT Services Near Your Small Business"
      seoParagraphs={[
        'Ozony Tech provides local IT services for small businesses that need practical support with devices, connectivity, troubleshooting, Wi-Fi issues, network problems, and everyday business technology challenges. This page helps route businesses toward the right support option based on location and need.',
        'Some businesses need help with a specific issue, such as printer problems, Wi-Fi drops, workstation setup, or network troubleshooting. Others need ongoing support through managed IT services. For businesses in New York City, the local NYC IT support page is the best place to start for hands-on support.',
        'Ozony Tech focuses on straightforward support for real small business environments across NYC, New Jersey, Connecticut, and nearby areas. The goal is to reduce confusion, improve reliability, and help businesses get to the right solution without unnecessary complexity.',
      ]}
      areasServed="Serving small businesses across NYC, New Jersey, Connecticut, and nearby areas."
      faqItems={[
        {
          question: 'Does Ozony Tech provide local IT services?',
          answer:
            'Yes. Ozony Tech provides local IT services for small businesses across NYC, New Jersey, Connecticut, and nearby areas, depending on the type of support needed.',
        },
        {
          question: 'What local IT services can Ozony Tech help with?',
          answer:
            'Ozony Tech can help with device setup, workstation support, printer troubleshooting, Wi-Fi and connectivity issues, network troubleshooting, shared access help, and managed IT service options.',
        },
        {
          question: 'Is this the main NYC IT support page?',
          answer:
            'No. This page is a local IT services discovery page. For businesses specifically looking for hands-on IT support in New York City, the Small Business IT Support NYC page is the best place to start.',
        },
        {
          question: 'Can Ozony Tech help with ongoing IT support?',
          answer:
            'Yes. Businesses that need recurring help, cleaner systems, and more consistent support can review Ozony Tech managed IT service options.',
        },
      ]}
      relatedServices={[
        { label: 'Small Business IT Support NYC', to: '/it-support-nyc' },
        { label: 'IT Support NJ', to: '/it-support-nj' },
        { label: 'IT Support Connecticut', to: '/it-support-connecticut' },
        { label: 'Managed IT Services', to: '/managed-it-services' },
        {
          label: 'Network Troubleshooting NYC',
          to: '/network-troubleshooting-nyc',
        },
      ]}
      finalTitle="Need Local IT Services for Your Business?"
      finalDescription="Start with the service area or support option that best matches your business, or contact Ozony Tech for help choosing the right next step."
    />
  );
};

export default ITServicesNearMe;