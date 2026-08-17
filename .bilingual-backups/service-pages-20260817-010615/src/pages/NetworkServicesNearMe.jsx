import React from 'react';
import {
  Network,
  Shield,
  Wifi,
  MapPin,
  Store,
  Briefcase,
} from 'lucide-react';
import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';

const NetworkServicesNearMe = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="Local Network Services for Small Businesses | Ozony Tech"
      pageDescription="Find local network services from Ozony Tech for small businesses across NYC, New Jersey, Connecticut, and nearby areas, including network setup, business Wi-Fi, firewall setup, and troubleshooting."
      eyebrow="OZONY TECH · LOCAL NETWORK SERVICES"
      title="Local Network Services for Small Businesses"
      description="Looking for network services near your business? Ozony Tech helps small businesses find the right support path for Wi-Fi, connectivity, firewall setup, network troubleshooting, and cleaner business network structure."
      heroImage="/images/services/network-setup-nyc.webp"
      heroImageAlt="Local network services for small businesses"
      ogImage="/service_area_map.png"
      twitterImage="/service_area_map.png"
      includeTitle="Local Network Services We Can Help With"
      includeDescription="A practical overview of network support options for small businesses that need stronger connectivity, cleaner structure, better wireless performance, and more reliable day-to-day operations."
      serviceIncludes={[
        'Local business network setup and configuration',
        'Business Wi-Fi planning and optimization',
        'Firewall setup and traffic separation',
        'Network troubleshooting and issue diagnosis',
        'Printer, POS, and workstation connectivity support',
        'Small business network planning for future growth',
      ]}
      outcomes={[
        {
          icon: Network,
          title: 'The Right Network Service Path',
          text: 'Use this page to find the right next step, whether your business needs network setup, Wi-Fi help, firewall setup, or troubleshooting.',
        },
        {
          icon: Wifi,
          title: 'Stronger Connectivity Options',
          text: 'Explore support for Wi-Fi coverage, unstable connections, business devices, customer access, and everyday connectivity issues.',
        },
        {
          icon: Shield,
          title: 'Cleaner Network Control',
          text: 'Find support options for better network organization, guest and staff separation, firewall planning, and more reliable business operations.',
        },
      ]}
      industriesTitle="Built for Local Business Environments"
      idealFor={[
        {
          title: 'Offices',
          description:
            'Reliable network services for teams, printers, phones, workstations, meetings, and shared office operations.',
          icon: Briefcase,
        },
        {
          title: 'Retail Stores',
          description:
            'Clean connectivity for POS systems, staff devices, guest Wi-Fi, and back-office workflows that need to stay online.',
          icon: Store,
        },
        {
          title: 'Businesses Searching for Nearby Help',
          description:
            'A practical option for small businesses looking for local network services and a clear support path when connectivity starts getting in the way.',
          icon: MapPin,
        },
      ]}
      midCtaEyebrow="Find the Right Network Service"
      midCtaTitle="Choose the Best Network Support Path"
      midCtaDescription="Whether you need hands-on NYC network setup, business Wi-Fi help, firewall setup, or troubleshooting, Ozony Tech can help you choose the right next step."
      seoTitle="Local Network Services Near Your Small Business"
      seoParagraphs={[
        'Ozony Tech provides local network services for small businesses that need practical support with Wi-Fi, connectivity, firewall setup, troubleshooting, device connections, and cleaner business network organization. This page helps route businesses toward the right network service based on their needs.',
        'Some businesses need a full network setup for a new office or location. Others need better Wi-Fi coverage, firewall planning, printer and POS connectivity, guest network separation, or troubleshooting for recurring network problems. The right service depends on what is actually slowing the business down.',
        'Ozony Tech focuses on practical network support for real small business environments across NYC, New Jersey, Connecticut, and nearby areas. The goal is to reduce confusion, improve reliability, and help businesses get to the right network solution without unnecessary complexity.',
      ]}
      areasServed="Serving small businesses across NYC, New Jersey, Connecticut, and nearby areas."
      faqItems={[
        {
          question: 'Does Ozony Tech provide local network services?',
          answer:
            'Yes. Ozony Tech provides local network services for small businesses across NYC, New Jersey, Connecticut, and nearby areas, depending on the type of support needed.',
        },
        {
          question: 'What network services can Ozony Tech help with?',
          answer:
            'Ozony Tech can help with business network setup, business Wi-Fi planning, firewall setup, network troubleshooting, device connectivity, printer and POS connectivity, and general network cleanup.',
        },
        {
          question: 'Is this the main NYC network setup page?',
          answer:
            'No. This page is a local network services discovery page. For businesses specifically looking for hands-on network setup in New York City, the Business Network Setup NYC page is the best place to start.',
        },
        {
          question: 'Can Ozony Tech help with Wi-Fi and firewall issues too?',
          answer:
            'Yes. Ozony Tech can help with business Wi-Fi issues, firewall setup, traffic separation, connectivity problems, and network troubleshooting for small business environments.',
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
        {
          label: 'Small Business Network Guide',
          to: '/small-business-network-nyc',
        },
      ]}
      finalTitle="Need Local Network Services for Your Business?"
      finalDescription="Start with the network service that best matches your business need, or contact Ozony Tech for help choosing the right next step."
    />
  );
};

export default NetworkServicesNearMe;