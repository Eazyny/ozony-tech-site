import React from "react";
import {
  Network,
  Shield,
  Briefcase,
  Store,
  Building2,
  CheckCircle2,
} from "lucide-react";
import ServiceLandingTemplate from "@/components/service-pages/ServiceLandingTemplate";

const NetworkSetupNJ = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="Business Network Setup in New Jersey | Ozony Tech"
      pageDescription="Ozony Tech provides business network setup in New Jersey for small businesses that need reliable Wi-Fi, cleaner connectivity, router and firewall planning, and organized network structure."
      eyebrow="OZONY TECH · NEW JERSEY NETWORK SETUP"
      title="Business Network Setup in New Jersey"
      description="Network setup for New Jersey small businesses that need reliable Wi-Fi, organized device connectivity, cleaner network structure, and a setup built around real day-to-day operations."
      heroImage="/images/services/network-setup-nyc.webp"
      heroImageAlt="Business network setup in New Jersey for small businesses"
      ogImage="/images/services/network-setup-nyc.webp"
      twitterImage="/images/services/network-setup-nyc.webp"
      includeTitle="What New Jersey Network Setup Can Include"
      includeDescription="Practical network setup for small businesses that need stronger connectivity, cleaner organization, and a network foundation that can support daily operations."
      serviceIncludes={[
        "Business network setup and configuration",
        "Router and firewall planning",
        "Business Wi-Fi setup and access point planning",
        "Guest and staff network separation",
        "Printer, POS, workstation, and shared device connectivity",
        "Network cleanup and planning for future growth",
      ]}
      outcomes={[
        {
          icon: Network,
          title: "Cleaner Network Structure",
          text: "Build a more organized network foundation for business devices, internet access, Wi-Fi, printers, POS systems, and shared tools.",
        },
        {
          icon: Shield,
          title: "Better Control & Separation",
          text: "Support cleaner separation between guest access, staff devices, business systems, and network traffic that should not be mixed together.",
        },
        {
          icon: CheckCircle2,
          title: "Built for Daily Business Use",
          text: "Create a setup that is easier to use, easier to troubleshoot, and better prepared for future changes as your business grows.",
        },
      ]}
      industriesTitle="Network Setup for New Jersey Small Businesses"
      idealFor={[
        {
          title: "Offices",
          description:
            "Network setup for offices that rely on workstations, printers, phones, shared tools, meetings, and stable day-to-day connectivity.",
          icon: Briefcase,
        },
        {
          title: "Retail Stores",
          description:
            "Clean connectivity for POS systems, staff devices, guest Wi-Fi, back-office systems, and customer-facing workflows that need to stay online.",
          icon: Store,
        },
        {
          title: "Restaurants, Studios & Local Businesses",
          description:
            "Practical network setup for restaurants, cafés, studios, clinics, and service businesses that need stable Wi-Fi and organized device access.",
          icon: Building2,
        },
      ]}
      midCtaEyebrow="Need a Cleaner Network Setup?"
      midCtaTitle="Build a Network That Supports the Way Your Business Works"
      midCtaDescription="From Wi-Fi and device connectivity to router planning, firewall structure, and cleaner network organization, Ozony Tech helps New Jersey businesses build stronger network foundations."
      seoTitle="Network Setup for Small Businesses in New Jersey"
      seoParagraphs={[
        "Ozony Tech provides business network setup in New Jersey for small businesses that need dependable internet access, organized connectivity, business Wi-Fi, router planning, firewall structure, and device support. The focus is on practical setups that support daily operations without unnecessary complexity.",
        "A proper small business network setup may include Wi-Fi planning, router and firewall configuration, guest and staff network separation, printer and POS connectivity, workstation support, and cleanup of messy or unreliable network environments. This is especially useful for offices, storefronts, restaurants, studios, clinics, and growing local businesses.",
        "For New Jersey businesses near Jersey City, Hoboken, Newark, Fort Lee, Union City, Weehawken, North Bergen, and nearby areas, Ozony Tech helps create cleaner network foundations that are easier to manage, troubleshoot, and expand over time.",
      ]}
      areasServed="Serving businesses across New Jersey, including Jersey City, Hoboken, Newark, Fort Lee, Union City, Weehawken, North Bergen, and nearby areas."
      faqItems={[
        {
          question:
            "Do you provide business network setup for small businesses in New Jersey?",
          answer:
            "Yes. Ozony Tech provides business network setup for New Jersey small businesses that need reliable Wi-Fi, organized connectivity, router and firewall planning, and cleaner network structure.",
        },
        {
          question: "What does a business network setup include?",
          answer:
            "A business network setup can include router and firewall planning, Wi-Fi setup, printer and workstation connectivity, POS connectivity, guest and staff separation, and network cleanup for day-to-day business use.",
        },
        {
          question:
            "Can you improve an existing business network instead of building a new one?",
          answer:
            "Yes. Existing networks can often be cleaned up, reorganized, and optimized to improve reliability, Wi-Fi coverage, device connectivity, and overall usability.",
        },
        {
          question:
            "Can you separate guest Wi-Fi from staff and business devices?",
          answer:
            "Yes. Guest access, staff devices, and business-critical systems can be separated to create a cleaner and more organized network environment.",
        },
      ]}
      relatedServices={[
        { label: "IT Support NJ", to: "/it-support-nj" },
        { label: "Local Network Services", to: "/network-services-near-me" },
        { label: "Managed IT Services", to: "/managed-it-services" },
        { label: "Business Wi-Fi NYC", to: "/business-wifi-nyc" },
      ]}
      finalTitle="Need Business Network Setup in New Jersey?"
      finalDescription="Get a cleaner, more reliable network setup built around your business, your devices, and the way your team works every day."
    />
  );
};

export default NetworkSetupNJ;