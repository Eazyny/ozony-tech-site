import React from 'react';
import {
  Bot,
  Brain,
  Building2,
  Clock,
  Headphones,
  MessageSquare,
  PhoneCall,
  Route,
  ShieldCheck,
  Target,
  Zap,
} from 'lucide-react';

import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';

const AILeadCapture = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="AI Agent Lead Capture Service | Ozony Tech"
      pageDescription="Ozony Tech builds AI agent lead capture systems for small businesses that need faster response, lead qualification, customer intake, and automated team alerts."
      canonicalPath="/ai-lead-agent"
      eyebrow="OZONY TECH · AI LEAD CAPTURE SERVICE"
      title="AI Agent Lead Capture for Small Businesses"
      description="Capture, qualify, and organize new leads before they go cold. Ozony Tech builds AI agent lead capture systems that respond quickly, collect the right customer details, and alert your team with clean lead summaries."
      primaryCta="Get an AI Lead Capture Consultation"
      secondaryCta="View Premium AI Lead Agent"
      primaryCtaTo="/contact"
      secondaryCtaTo="/ai-lead-agent"
      heroImage="/images/ozony-og-preview.png"
      heroImageAlt="Ozony Tech AI agent lead capture service for small businesses"
      ogImage="/images/ozony-og-preview.png"
      twitterImage="/images/ozony-og-preview.png"
      trustChips={[
        'AI lead capture',
        'Lead qualification',
        'After-hours intake',
        'Website form automation',
        'Team alerts',
        'Custom business workflows',
      ]}
      includeTitle="What AI Agent Lead Capture Includes"
      includeDescription="An AI lead capture system helps your business respond faster, gather better information, and prepare your team for smarter follow-up."
      serviceIncludes={[
        'Website form lead capture automation',
        'AI-powered lead intake workflows',
        'Pre-approved customer response messaging',
        'Custom lead qualification questions',
        'Customer name, email, phone, and location collection',
        'Service need, urgency, and project detail capture',
        'After-hours lead intake support',
        'Internal lead alerts for your team',
        'Clean lead summaries for faster follow-up',
        'Lead routing based on service type or urgency',
        'Phone, SMS, or email workflow planning when appropriate',
        'Testing and refinement after launch',
      ]}
      outcomes={[
        {
          icon: Zap,
          title: 'Respond Faster',
          text: 'Capture new inquiries quickly so leads do not sit unanswered while customers look for another provider.',
        },
        {
          icon: Target,
          title: 'Qualify Better Leads',
          text: 'Ask the right intake questions before your team follows up, including service need, urgency, location, and contact details.',
        },
        {
          icon: Headphones,
          title: 'Alert Your Team',
          text: 'Send clean lead summaries to the channels your business already checks, such as email, Discord, SMS, or another workflow.',
        },
      ]}
      industriesTitle="AI Lead Capture for Service-Based Businesses"
      idealFor={[
        {
          title: 'Small Businesses',
          description:
            'A strong fit for businesses that receive website forms, quote requests, phone inquiries, emails, referrals, or after-hours leads.',
          icon: Building2,
        },
        {
          title: 'Service Providers',
          description:
            'Useful for IT providers, contractors, home service companies, repair businesses, cleaning companies, consultants, agencies, and appointment-based teams.',
          icon: Bot,
        },
        {
          title: 'After-Hours Leads',
          description:
            'Ideal for businesses that receive inquiries outside normal hours and want new leads captured before the customer moves on.',
          icon: Clock,
        },
      ]}
      midCtaEyebrow="Turn Website Visitors Into Organized Leads"
      midCtaTitle="Your lead capture process should work even when your team is busy."
      midCtaDescription="Ozony Tech can help your business capture inquiries, qualify leads, collect customer details, and notify your team before the opportunity goes cold."
      seoTitle="AI Agent Lead Capture Services Built Around Your Workflow"
      seoParagraphs={[
        'AI agent lead capture is designed to help businesses respond to new inquiries faster and collect better information before a human follow-up happens. Instead of letting website forms, missed calls, emails, or after-hours requests sit untouched, an AI lead capture workflow can begin the intake process immediately.',
        'For small businesses, speed matters. A customer who submits a quote request or asks for help may also be contacting other providers. If your team responds slowly, the lead can go cold before you ever speak to them. An AI lead capture system helps reduce that delay by responding quickly and gathering the details your team needs.',
        'Ozony Tech builds AI lead capture systems around your actual business process. That may include website form automation, approved response scripts, custom qualifying questions, lead summaries, internal alerts, after-hours intake, and routing rules based on service type, urgency, or location.',
        'The goal is not to replace your team. The goal is to give your team a faster and cleaner starting point. By the time someone follows up, they can already know who the customer is, what they need, where they are located, how urgent the request is, and the best way to contact them.',
        'An AI agent lead capture system can be especially useful for service-based businesses that depend on fast response times, including IT companies, home service providers, contractors, consultants, agencies, medical offices, wellness offices, repair businesses, and appointment-based teams.',
        'Ozony Tech also offers a premium AI Lead Response Agent page for businesses that want a more complete sales-focused workflow with deeper intake, automated routing, team alerts, and advanced response planning.',
      ]}
      areasServed="Serving small businesses across NYC, New Jersey, Connecticut, and remote clients across the United States."
      faqItems={[
        {
          question: 'What is AI agent lead capture?',
          answer:
            'AI agent lead capture uses an automated AI workflow to respond to new inquiries, collect customer details, ask qualifying questions, and notify your team with a lead summary.',
        },
        {
          question: 'Is this different from a regular contact form?',
          answer:
            'Yes. A regular contact form only collects information and waits for someone to check it. An AI lead capture system can respond, qualify, summarize, and route the lead.',
        },
        {
          question: 'Can this connect to my website?',
          answer:
            'Yes. Ozony Tech can connect AI lead capture workflows to website forms, landing pages, quote forms, and other lead capture points.',
        },
        {
          question: 'Can it qualify leads?',
          answer:
            'Yes. The workflow can ask approved intake questions based on your business, such as service needed, urgency, location, issue details, and best callback time.',
        },
        {
          question: 'Can it work after hours?',
          answer:
            'Yes. After-hours intake is one of the strongest use cases because the system can capture and organize the lead even when your team is unavailable.',
        },
        {
          question: 'Can it send alerts to my team?',
          answer:
            'Yes. Lead alerts can be delivered through email, Discord, SMS, or other internal workflows depending on the setup.',
        },
        {
          question: 'Can it call or text leads?',
          answer:
            'Phone and SMS workflows can be planned when appropriate, using approved messaging and consent-aware processes for your business.',
        },
        {
          question: 'Will this replace my sales team?',
          answer:
            'No. The goal is to support your team by handling repetitive intake, organizing lead details, and helping your team follow up faster.',
        },
        {
          question: 'What businesses is this best for?',
          answer:
            'It is best for service-based businesses where response speed matters, including IT providers, contractors, home service businesses, consultants, agencies, cleaning companies, repair businesses, and appointment-based teams.',
        },
        {
          question: 'How much does AI lead capture setup cost?',
          answer:
            'Pricing depends on the workflow, number of channels, response logic, and integrations required. Ozony Tech provides custom quotes after reviewing your lead process.',
        },
      ]}
      relatedServices={[
        { label: 'Premium AI Lead Agent', to: '/ai-lead-agent' },
        { label: 'IT Solutions', to: '/it-solutions' },
        { label: 'Managed IT Services', to: '/managed-it-services' },
        { label: 'IT Support', to: '/it-support' },
        { label: 'Network Setup NYC', to: '/network-setup-nyc' },
        { label: 'Business Wi-Fi NYC', to: '/business-wifi-nyc' },
        { label: 'Firewall Setup NYC', to: '/firewall-setup-nyc' },
        { label: 'Packages', to: '/packages' },
        { label: 'Contact Ozony Tech', to: '/contact' },
      ]}
      finalTitle="Need AI Lead Capture for Your Business?"
      finalDescription="Ozony Tech can build an AI agent lead capture workflow that responds faster, qualifies new inquiries, collects customer details, and alerts your team before leads go cold."
    />
  );
};

export default AILeadCapture;