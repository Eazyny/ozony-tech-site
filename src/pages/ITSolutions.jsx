import React from 'react';
import {
  Wrench,
  Monitor,
  Network,
  Shield,
  Briefcase,
  Store
} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';
import { getLanguageFromPath, localizePath } from '@/i18n/languageRoutes';

const ITSolutions = () => {
  const location = useLocation();
  const { t } = useTranslation('servicePages');
  const language = getLanguageFromPath(location.pathname);
  const localized = (path) => localizePath(path, language);
  const base = 'itSolutions';

  const outcomes = [
    { icon: Wrench, title: t(`${base}.outcomes.0.title`), text: t(`${base}.outcomes.0.text`) },
    { icon: Network, title: t(`${base}.outcomes.1.title`), text: t(`${base}.outcomes.1.text`) },
    { icon: Shield, title: t(`${base}.outcomes.2.title`), text: t(`${base}.outcomes.2.text`) }
  ];

  const idealFor = [
    { icon: Briefcase, title: t(`${base}.idealFor.0.title`), description: t(`${base}.idealFor.0.description`) },
    { icon: Store, title: t(`${base}.idealFor.1.title`), description: t(`${base}.idealFor.1.description`) },
    { icon: Monitor, title: t(`${base}.idealFor.2.title`), description: t(`${base}.idealFor.2.description`) }
  ];

  const relatedServices = [
    { label: t(`relatedLabels.itSupportNYC`), to: localized('/it-support-nyc') },
    { label: t(`relatedLabels.managedITServices`), to: localized('/managed-it-services') },
    { label: t(`relatedLabels.networkSetupNYC`), to: localized('/network-setup-nyc') },
    { label: t(`relatedLabels.businessWifiNYC`), to: localized('/business-wifi-nyc') },
    { label: t(`relatedLabels.firewallSetupNYC`), to: localized('/firewall-setup-nyc') },
    { label: t(`relatedLabels.networkTroubleshootingNYC`), to: localized('/network-troubleshooting-nyc') },
    { label: t(`relatedLabels.aiLeadAgent`), to: localized('/ai-lead-agent') },
    { label: t(`relatedLabels.packages`), to: localized('/packages') }
  ];

  return (
    <ServiceLandingTemplate
      pageTitle={t(`${base}.pageTitle`)}
      pageDescription={t(`${base}.pageDescription`)}
      canonicalPath="/it-solutions"
      eyebrow={t(`${base}.eyebrow`)}
      title={t(`${base}.title`)}
      description={t(`${base}.description`)}
      heroImage="/images/services/it-support-nyc.webp"
      heroImageAlt={t(`${base}.heroImageAlt`)}
      ogImage="/service_area_map.png"
      twitterImage="/service_area_map.png"
      includeTitle={t(`${base}.includeTitle`)}
      includeDescription={t(`${base}.includeDescription`)}
      serviceIncludes={t(`${base}.serviceIncludes`, { returnObjects: true })}
      outcomes={outcomes}
      industriesTitle={t(`${base}.industriesTitle`)}
      idealFor={idealFor.length ? idealFor : undefined}
      midCtaEyebrow={t(`${base}.midCtaEyebrow`)}
      midCtaTitle={t(`${base}.midCtaTitle`)}
      midCtaDescription={t(`${base}.midCtaDescription`)}
      seoTitle={t(`${base}.seoTitle`)}
      seoParagraphs={t(`${base}.seoParagraphs`, { returnObjects: true })}
      areasServed={t(`${base}.areasServed`)}
      faqItems={t(`${base}.faqItems`, { returnObjects: true })}
      relatedServices={relatedServices.length ? relatedServices : null}
      finalTitle={t(`${base}.finalTitle`)}
      finalDescription={t(`${base}.finalDescription`)}
    />
  );
};

export default ITSolutions;
