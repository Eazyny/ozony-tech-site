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

const BusinessWifiNYC = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="Business Wi-Fi Installation in NYC for Small Businesses | Ozony Tech"
      pageDescription="Ozony Tech provides business Wi-Fi installation in NYC for small businesses that need stronger coverage, better wireless performance, and a more reliable setup."
      eyebrow="OZONY TECH · BUSINESS WI-FI NYC"
      title="Business Wi-Fi Installation in NYC for Small Businesses"
      description="Ozony Tech provides business Wi-Fi installation in NYC for small businesses that need stronger coverage, cleaner performance, and a more reliable wireless experience for staff, guests, and daily operations."
      heroImage="/images/services/business-wifi-nyc.webp"
      heroImageAlt="Business Wi-Fi installation in NYC for small businesses"
      includeTitle="What’s Included"
      ogImage="/images/services/business-wifi-nyc.webp"
      twitterImage="/images/services/business-wifi-nyc.webp"
      includeDescription="Everything needed to build a stronger, more reliable wireless setup for your business without the signal issues, dead zones, and inconsistent performance."
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
          title: 'Better Coverage',
          text: 'Improve signal strength and reduce dead zones so staff and customers stay connected where it matters most throughout your space.',
        },
        {
          icon: Gauge,
          title: 'More Reliable Performance',
          text: 'Support smoother browsing, stronger device connectivity, and more dependable day-to-day operations with a cleaner wireless setup.',
        },
        {
          icon: Wifi,
          title: 'Smarter Wi-Fi Design',
          text: 'Get a practical wireless layout built around your space, your users, and the way your business actually operates.',
        },
      ]}
      industriesTitle="Built for Local Businesses"
      idealFor={[
        {
          title: 'Retail Stores',
          description:
            'Reliable business Wi-Fi for staff systems, customer access, POS workflows, and back-office devices.',
          icon: Store,
        },
        {
          title: 'Restaurants & Cafés',
          description:
            'Wireless coverage for registers, kitchen tools, staff devices, and guest internet access in busy customer-facing spaces.',
          icon: UtensilsCrossed,
        },
        {
          title: 'Offices',
          description:
            'Stable wireless connectivity for laptops, shared devices, printers, meetings, and everyday business operations.',
          icon: Briefcase,
        },
      ]}
      midCtaEyebrow="Need Better Wi-Fi?"
      midCtaTitle="Get Business Wi-Fi That Actually Reaches Where You Need It"
      midCtaDescription="From weak coverage to dead zones and unstable connections, Ozony Tech helps build a wireless setup that works better for staff, customers, and everyday business use."
      seoTitle="Why Choose Ozony Tech for Business Wi-Fi Installation in NYC"
      seoParagraphs={[
        'Ozony Tech provides business Wi-Fi installation in NYC for small businesses that need stronger coverage, more dependable performance, and a cleaner wireless setup overall. Whether you are upgrading weak Wi-Fi in an existing location or setting up a new space, we help create wireless systems that feel reliable in real-world use.',
        'Business Wi-Fi installation can include access point planning, coverage improvements, guest and staff separation, performance tuning, and practical wireless organization. The goal is to deliver Wi-Fi that supports your business instead of slowing it down with dead zones, poor signal, or unstable connections.',
        'Businesses choose Ozony Tech because the focus is on practical wireless setups that work well, feel organized, and are built around the real needs of small business spaces across NYC.',
      ]}
      areasServed="Serving businesses across Manhattan, Brooklyn, Queens, the Bronx, Staten Island, and nearby areas in NYC."
      faqItems={[
        {
          question: 'Do you provide business Wi-Fi installation for small businesses in NYC?',
          answer:
            'Yes. Ozony Tech provides business Wi-Fi installation in NYC for offices, retail stores, restaurants, and other small business spaces that need stronger and more reliable wireless coverage.',
        },
        {
          question: 'What does business Wi-Fi installation include?',
          answer:
            'Business Wi-Fi installation can include access point placement planning, wireless setup, coverage improvements, guest and staff separation, performance tuning, and basic wireless security hardening.',
        },
        {
          question: 'Can you improve weak Wi-Fi in an existing business location?',
          answer:
            'Yes. Existing Wi-Fi setups can often be improved through better placement, cleaner wireless design, stronger segmentation, and practical performance optimization.',
        },
        {
          question: 'Can you separate guest Wi-Fi from staff and business devices?',
          answer:
            'Yes. Guest and staff Wi-Fi can be separated to improve security, organization, and overall performance for your business network.',
        },
      ]}
      finalTitle="Need Business Wi-Fi Installation in NYC?"
      finalDescription="Get stronger coverage, better wireless performance, and a cleaner setup built for the way your business actually operates."
    />
  );
};

export default BusinessWifiNYC;