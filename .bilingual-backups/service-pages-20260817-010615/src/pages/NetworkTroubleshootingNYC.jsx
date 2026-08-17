import React from 'react';
import {
  Wrench,
  WifiOff,
  Activity,
  Store,
  Briefcase,
  Building2,
} from 'lucide-react';
import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';

const NetworkTroubleshootingNYC = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="Network Troubleshooting in NYC for Small Businesses | Ozony Tech"
      pageDescription="Ozony Tech provides network troubleshooting in NYC for small businesses dealing with slow internet, Wi-Fi issues, dropped connections, and unreliable network performance."
      eyebrow="OZONY TECH · NETWORK TROUBLESHOOTING NYC"
      title="Network Troubleshooting in NYC for Small Businesses"
      description="Ozony Tech provides network troubleshooting in NYC for small businesses dealing with slow internet, Wi-Fi issues, dropped connections, and network problems that interrupt daily operations."
      heroImage="/images/services/network-troubleshooting-nyc.webp"
      heroImageAlt="Network troubleshooting services in NYC for small businesses"     
      ogImage="/images/services/network-troubleshooting-nyc.webp"
      twitterImage="/images/services/network-troubleshooting-nyc.webp"
      includeTitle="What’s Included"
      includeDescription="Practical troubleshooting to identify, fix, and stabilize the network issues that slow your business down."
      serviceIncludes={[
        'Diagnosis of slow or unstable internet',
        'Wi-Fi troubleshooting and signal issues',
        'Dropped connection and outage investigation',
        'Device and network conflict resolution',
        'Router, firewall, and access point checks',
        'General network performance optimization',
      ]}
      outcomes={[
        {
          icon: WifiOff,
          title: 'Fix Unstable Connections',
          text: 'Identify and resolve the root causes of dropped connections, weak Wi-Fi, and inconsistent internet performance.',
        },
        {
          icon: Activity,
          title: 'Improve Network Performance',
          text: 'Reduce slow speeds, lag, and connectivity issues so your team can work without constant interruptions.',
        },
        {
          icon: Wrench,
          title: 'Practical Problem Solving',
          text: 'Get straightforward troubleshooting that actually fixes the problem instead of masking it with temporary workarounds.',
        },
      ]}
      industriesTitle="Built for Local Businesses"
      idealFor={[
        {
          title: 'Offices',
          description:
            'Resolve slow internet, unstable connections, and device issues affecting productivity and daily workflows.',
          icon: Briefcase,
        },
        {
          title: 'Retail Stores',
          description:
            'Fix network problems impacting POS systems, customer Wi-Fi, and back-office connectivity.',
          icon: Store,
        },
        {
          title: 'Restaurants & Service Businesses',
          description:
            'Stabilize connectivity for registers, kitchen systems, staff devices, and guest networks.',
          icon: Building2,
        },
      ]}
      midCtaEyebrow="Having Network Issues?"
      midCtaTitle="Fix Your Network Without the Guesswork"
      midCtaDescription="From slow internet to dropped connections and Wi-Fi problems, Ozony Tech helps diagnose and fix network issues so your business can run without constant interruptions."
      seoTitle="Why Choose Ozony Tech for Network Troubleshooting in NYC"
      seoParagraphs={[
        'Ozony Tech provides network troubleshooting in NYC for small businesses dealing with slow internet, unstable Wi-Fi, dropped connections, and general connectivity issues. Instead of guessing or applying temporary fixes, we focus on identifying the root cause of the problem and resolving it properly.',
        'Network troubleshooting can include analyzing Wi-Fi performance, reviewing device connectivity, checking router and firewall configurations, identifying interference or bottlenecks, and improving overall network stability. The goal is to restore reliable performance and reduce recurring issues.',
        'Businesses choose Ozony Tech because the approach is practical and focused on real-world results. That means less downtime, fewer recurring problems, and a network that works the way it should.',
      ]}
      areasServed="Serving businesses across Manhattan, Brooklyn, Queens, the Bronx, Staten Island, and nearby areas in NYC."
      faqItems={[
        {
          question: 'Do you provide network troubleshooting for small businesses in NYC?',
          answer:
            'Yes. Ozony Tech provides network troubleshooting in NYC for offices, retail stores, restaurants, and other small business environments experiencing connectivity issues.',
        },
        {
          question: 'What types of network problems can you fix?',
          answer:
            'Common issues include slow internet speeds, Wi-Fi signal problems, dropped connections, device connectivity issues, and general network instability.',
        },
        {
          question: 'Can you fix an existing network without replacing everything?',
          answer:
            'Yes. Many network problems can be resolved by improving configuration, optimizing performance, and addressing specific issues without needing a full replacement.',
        },
        {
          question: 'Why does my business Wi-Fi keep dropping?',
          answer:
            'Wi-Fi issues can be caused by poor placement, interference, outdated equipment, or configuration problems. Troubleshooting helps identify and fix the exact cause.',
        },
      ]}
      finalTitle="Need Network Troubleshooting in NYC?"
      finalDescription="Get your network issues diagnosed and fixed properly so your business can run smoothly without constant connectivity problems."
    />
  );
};

export default NetworkTroubleshootingNYC;