import React from 'react';
import {
  Wrench,
  Monitor,
  Network,
  Shield,
  Briefcase,
  Store,
} from 'lucide-react';
import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';

const ITSolutions = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="Small Business IT Solutions Hub | Ozony Tech"
      pageDescription="Explore Ozony Tech IT solutions for small businesses, including IT support, managed IT services, network setup, business Wi-Fi, firewall setup, troubleshooting, AI lead agents, and service packages."
      eyebrow="OZONY TECH · IT SOLUTIONS HUB"
      title="Small Business IT Solutions Hub"
      description="Explore practical IT, networking, automation, and support services for small businesses that need better connectivity, cleaner systems, stronger reliability, and a smarter technology foundation."
      heroImage="/images/services/it-support-nyc.webp"
      heroImageAlt="Small business IT solutions hub"
      ogImage="/service_area_map.png"
      twitterImage="/service_area_map.png"
      includeTitle="Explore Ozony Tech Services"
      includeDescription="Use this hub to find the right solution for your business, whether you need IT support, network setup, Wi-Fi help, firewall setup, troubleshooting, managed services, or AI lead automation."
      serviceIncludes={[
        'Small business IT support and troubleshooting',
        'Managed IT services for recurring support needs',
        'Business network setup and configuration',
        'Business Wi-Fi setup and optimization',
        'Firewall setup and traffic separation',
        'AI Lead Response Agent services for faster follow-up',
      ]}
      outcomes={[
        {
          icon: Wrench,
          title: 'Support for Daily Issues',
          text: 'Find practical IT support options for the everyday technology problems that slow down your team, interrupt work, and create unnecessary frustration.',
        },
        {
          icon: Network,
          title: 'Network & Wi-Fi Services',
          text: 'Explore services for business network setup, Wi-Fi coverage, connectivity issues, firewall setup, and cleaner network structure.',
        },
        {
          icon: Shield,
          title: 'Stronger Business Foundation',
          text: 'Build a cleaner technology foundation with better organization, improved reliability, practical support, and room to grow.',
        },
      ]}
      industriesTitle="Built for Small Business Environments"
      idealFor={[
        {
          title: 'Offices',
          description:
            'IT solutions for teams that rely on workstations, printers, shared devices, stable Wi-Fi, and smooth daily operations.',
          icon: Briefcase,
        },
        {
          title: 'Retail Stores',
          description:
            'Practical technology support for POS systems, staff devices, guest Wi-Fi, and customer-facing workflows.',
          icon: Store,
        },
        {
          title: 'Growing Small Businesses',
          description:
            'A strong fit for businesses that need cleaner systems, better connectivity, stronger support, automation, and a more reliable technology foundation.',
          icon: Monitor,
        },
      ]}
      midCtaEyebrow="Find the Right Service"
      midCtaTitle="Not Sure Which IT Solution You Need?"
      midCtaDescription="Start with the service that matches your biggest issue: IT support, managed services, network setup, business Wi-Fi, firewall setup, troubleshooting, or AI lead response automation."
      seoTitle="Small Business IT Solutions from Ozony Tech"
      seoParagraphs={[
        'Ozony Tech provides practical IT solutions for small businesses that need help with support, connectivity, Wi-Fi, network setup, firewall configuration, troubleshooting, managed technology services, and AI lead response systems. This page acts as a hub for the main services Ozony Tech offers.',
        'Small businesses often need more than one isolated fix. A reliable technology foundation may include IT support, managed services, business Wi-Fi, network setup, firewall setup, troubleshooting, device support, and cleaner systems for daily operations.',
        'Ozony Tech keeps the focus on practical solutions that fit real small business environments. Whether the issue is unreliable Wi-Fi, recurring device problems, weak network structure, slow lead follow-up, or general technology frustration, this hub helps point businesses toward the right service page.',
      ]}
      areasServed="Serving small businesses across NYC, New Jersey, Connecticut, and nearby areas."
      faqItems={[
        {
          question: 'What IT solutions does Ozony Tech offer?',
          answer:
            'Ozony Tech offers small business IT support, managed IT services, network setup, business Wi-Fi setup, firewall setup, network troubleshooting, and AI Lead Response Agent services.',
        },
        {
          question: 'Is this page the main service hub?',
          answer:
            'Yes. This page is a broad IT solutions hub that helps small businesses find the right Ozony Tech service based on their needs.',
        },
        {
          question: 'Where should I start if I need local IT support?',
          answer:
            'If your business needs hands-on IT support in New York City, the Small Business IT Support NYC page is the best place to start.',
        },
        {
          question: 'Where should I start if my Wi-Fi or network is the main problem?',
          answer:
            'If the issue is Wi-Fi coverage, connectivity, network setup, firewall configuration, or recurring network problems, start with the business Wi-Fi, network setup, firewall setup, or network troubleshooting pages.',
        },
      ]}
      relatedServices={[
        { label: 'Small Business IT Support NYC', to: '/it-support-nyc' },
        { label: 'Managed IT Services', to: '/managed-it-services' },
        { label: 'Business Network Setup NYC', to: '/network-setup-nyc' },
        { label: 'Business Wi-Fi NYC', to: '/business-wifi-nyc' },
        { label: 'Firewall Setup NYC', to: '/firewall-setup-nyc' },
        {
          label: 'Network Troubleshooting NYC',
          to: '/network-troubleshooting-nyc',
        },
        { label: 'AI Lead Response Agent', to: '/ai-lead-agent' },
        { label: 'Business IT & Network Packages', to: '/packages' },
      ]}
      finalTitle="Need Help Choosing the Right IT Solution?"
      finalDescription="Explore the service that matches your biggest business need, or contact Ozony Tech for help choosing the right next step."
    />
  );
};

export default ITSolutions;