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

const ITSupportNJ = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="Small Business IT Support in New Jersey | Ozony Tech"
      pageDescription="Ozony Tech provides small business IT support in New Jersey for offices, retail stores, restaurants, and local businesses that need help with devices, connectivity, printers, Wi-Fi, and everyday tech issues."
      eyebrow="OZONY TECH · NEW JERSEY IT SUPPORT"
      title="Small Business IT Support in New Jersey"
      description="Practical IT support for New Jersey small businesses that need help with devices, workstations, printers, Wi-Fi, connectivity, access issues, and the everyday tech problems that slow work down."
      heroImage="/images/services/it-support-nyc.webp"
      heroImageAlt="Small business IT support in New Jersey"
      ogImage="/images/services/it-support-nyc.webp"
      twitterImage="/images/services/it-support-nyc.webp"
      includeTitle="What New Jersey IT Support Can Include"
      includeDescription="Straightforward support for the technology issues that interrupt small business operations, waste time, and create unnecessary frustration."
      serviceIncludes={[
        'Device and workstation setup support',
        'Printer and shared device troubleshooting',
        'Wi-Fi and connectivity issue support',
        'POS, staff device, and back-office support',
        'New user onboarding and device setup help',
        'Shared access, permissions, and general IT troubleshooting',
      ]}
      outcomes={[
        {
          icon: Wrench,
          title: 'Faster Issue Resolution',
          text: 'Get practical help for the device, printer, Wi-Fi, access, and connectivity problems that interrupt daily business operations.',
        },
        {
          icon: Monitor,
          title: 'More Reliable Business Devices',
          text: 'Keep workstations, printers, shared devices, staff systems, and everyday business technology easier to use and more dependable.',
        },
        {
          icon: Headphones,
          title: 'Local Support Path',
          text: 'Build a clearer support path for New Jersey business technology issues instead of waiting for every small problem to become a bigger disruption.',
        },
      ]}
      industriesTitle="IT Support for New Jersey Small Businesses"
      idealFor={[
        {
          title: 'Offices',
          description:
            'Support for teams that rely on workstations, printers, shared files, phones, Wi-Fi, and reliable daily technology workflows.',
          icon: Briefcase,
        },
        {
          title: 'Retail Stores',
          description:
            'Practical IT help for POS systems, staff devices, printers, guest Wi-Fi, connectivity, and customer-facing technology issues.',
          icon: Store,
        },
        {
          title: 'Restaurants & Local Service Businesses',
          description:
            'Useful for restaurants, cafés, studios, clinics, salons, and service businesses that need stable devices, Wi-Fi, and smoother operations.',
          icon: Building2,
        },
      ]}
      midCtaEyebrow="Need Local IT Help?"
      midCtaTitle="Get New Jersey IT Support Without the Headaches"
      midCtaDescription="From device issues and printer problems to Wi-Fi drops, access trouble, and everyday troubleshooting, Ozony Tech helps New Jersey businesses keep work moving."
      seoTitle="IT Support for Small Businesses in New Jersey"
      seoParagraphs={[
        'Ozony Tech provides small business IT support in New Jersey for teams that need practical help with devices, connectivity, printers, shared access, Wi-Fi issues, and everyday troubleshooting. The focus is on the real technology problems that interrupt work and frustrate teams during daily operations.',
        'Support can include workstation setup, printer troubleshooting, device support, POS and staff device connectivity, Wi-Fi issue resolution, shared access help, onboarding assistance, and general cleanup of business technology environments.',
        'For New Jersey businesses near Jersey City, Hoboken, Newark, Fort Lee, Union City, Weehawken, North Bergen, and nearby areas, Ozony Tech provides straightforward support built around small business needs without unnecessary complexity.',
      ]}
      areasServed="Serving businesses across New Jersey, including Jersey City, Hoboken, Newark, Fort Lee, Union City, Weehawken, North Bergen, and nearby areas."
      faqItems={[
        {
          question: 'Do you provide small business IT support in New Jersey?',
          answer:
            'Yes. Ozony Tech provides small business IT support in New Jersey for offices, retail shops, restaurants, studios, and other local business environments that need practical day-to-day technology help.',
        },
        {
          question: 'What does small business IT support include?',
          answer:
            'Small business IT support can include device setup, workstation support, printer troubleshooting, Wi-Fi and connectivity issue resolution, shared access help, POS connectivity support, onboarding assistance, and general troubleshooting.',
        },
        {
          question: 'Can you help with Wi-Fi and network issues too?',
          answer:
            'Yes. Ozony Tech can help New Jersey businesses with Wi-Fi issues, device connectivity, basic network troubleshooting, and cleaner network organization.',
        },
        {
          question: 'Can you improve an existing business tech setup?',
          answer:
            'Yes. Existing business environments can often be improved through better device organization, clearer setup, more reliable connectivity, and practical troubleshooting that helps everything run more smoothly.',
        },
      ]}
      relatedServices={[
        { label: 'Business Network Setup NJ', to: '/network-setup-nj' },
        { label: 'IT Services Near Me', to: '/it-services-near-me' },
        { label: 'Managed IT Services', to: '/managed-it-services' },
        { label: 'Local Network Services', to: '/network-services-near-me' },
      ]}
      finalTitle="Need Small Business IT Support in New Jersey?"
      finalDescription="Get dependable help with devices, connectivity, printers, Wi-Fi, troubleshooting, and the everyday tech issues that slow your business down."
    />
  );
};

export default ITSupportNJ;