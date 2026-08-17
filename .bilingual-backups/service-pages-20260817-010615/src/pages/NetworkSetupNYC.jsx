import React from 'react';
import {
  Network,
  Shield,
  Briefcase,
  Building2,
  Store,
  CheckCircle2,
} from 'lucide-react';
import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';

const NetworkSetupNYC = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="Business Network Setup in NYC for Small Businesses | Ozony Tech"
      pageDescription="Ozony Tech provides business network setup in NYC for small businesses that need reliable Wi-Fi, clean network structure, secure connectivity, and room to grow."
      eyebrow="OZONY TECH · NETWORK SETUP NYC"
      title="Network Setup in NYC for Small Businesses"
      description="Ozony Tech provides business network setup in NYC for small businesses that need reliable Wi-Fi, organized connectivity, secure network structure, and a setup built to support real-world daily operations."
      heroImage="/images/services/network-setup-nyc.webp"
      heroImageAlt="Business network setup in NYC for small businesses"
      ogImage="/images/services/network-setup-nyc.webp"
      twitterImage="/images/services/network-setup-nyc.webp"
      includeTitle="What’s Included"
      includeDescription="Everything needed to build a reliable, organized, and business-ready network without the clutter, confusion, or day-to-day connectivity issues that slow work down."
      serviceIncludes={[
        'Business network setup and configuration',
        'Router and firewall setup',
        'Wi-Fi deployment and optimization',
        'Guest and staff network separation',
        'Printer, POS, and workstation connectivity',
        'Structured network planning for future growth',
      ]}
      outcomes={[
        {
          icon: Network,
          title: 'Cleaner Network Structure',
          text: 'Build a more organized business network with practical structure, dependable connectivity, and less day-to-day friction for your team.',
        },
        {
          icon: Shield,
          title: 'More Reliable Connectivity',
          text: 'Create a stronger foundation for business devices, internet access, wireless coverage, and long-term network stability.',
        },
        {
          icon: CheckCircle2,
          title: 'Built to Grow With You',
          text: 'Set up your business with a network that is easier to manage now and easier to expand as your needs grow.',
        },
      ]}
      industriesTitle="Built for Local Businesses"
      idealFor={[
        {
          title: 'Offices',
          description:
            'Reliable business network setup for teams, workstations, printers, phones, and shared office operations.',
          icon: Briefcase,
        },
        {
          title: 'Retail Stores',
          description:
            'Clean connectivity for POS systems, staff devices, guest Wi-Fi, back-office systems, and daily customer-facing workflows.',
          icon: Store,
        },
        {
          title: 'Restaurants & Small Business Spaces',
          description:
            'Practical network setup for restaurants, cafés, studios, and service businesses that need stable connectivity and organized device access.',
          icon: Building2,
        },
      ]}
      midCtaEyebrow="Need a Better Setup?"
      midCtaTitle="Get a Business Network That Works the Way It Should"
      midCtaDescription="From Wi-Fi and device connectivity to cleaner structure and better reliability, Ozony Tech helps build business networks that support daily operations without unnecessary complexity."
      seoTitle="Why Choose Ozony Tech for Network Setup in NYC"
      seoParagraphs={[
        'Ozony Tech provides business network setup in NYC for small businesses that need dependable internet, organized internal connectivity, and room to grow. We help design and configure networks that support daily business operations without overcomplicating the environment.',
        'From office network setup and Wi-Fi deployment to router configuration, device connectivity, and guest and staff segmentation, the focus is on practical systems built for real-world small business use across New York City.',
        'Businesses choose Ozony Tech because the goal is not to overengineer the setup. The goal is to create a clean, scalable network that works well, feels organized, and supports long-term reliability.',
      ]}
      areasServed="Serving businesses across Manhattan, Brooklyn, Queens, the Bronx, Staten Island, and nearby areas in NYC."
      faqItems={[
        {
          question: 'Do you provide business network setup for small businesses in NYC?',
          answer:
            'Yes. Ozony Tech provides business network setup in NYC for offices, retail stores, restaurants, and other small business environments that need reliable and organized connectivity.',
        },
        {
          question: 'What does a business network setup include?',
          answer:
            'A business network setup can include router and firewall configuration, Wi-Fi deployment, printer and workstation connectivity, network segmentation, and a cleaner overall structure for everyday business use.',
        },
        {
          question: 'Can you improve an existing network instead of building a new one?',
          answer:
            'Yes. Existing networks can often be cleaned up, reorganized, and optimized to improve performance, coverage, reliability, and day-to-day usability.',
        },
        {
          question: 'Can you separate guest, staff, and business devices on the network?',
          answer:
            'Yes. Networks can be segmented to better separate guest access, staff use, and business-critical devices for stronger organization and security.',
        },
      ]}
      finalTitle="Need Business Network Setup in NYC?"
      finalDescription="Get a clean, reliable network setup built for your business, your devices, and the way your team actually works."
    />
  );
};

export default NetworkSetupNYC;