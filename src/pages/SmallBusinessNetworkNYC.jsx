import React from 'react';
import {
  Network,
  Shield,
  Briefcase,
  Store,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';
import { getLanguageFromPath, localizePath } from '@/i18n/languageRoutes';

const SmallBusinessNetworkNYC = () => {
  const location = useLocation();
  const { t } = useTranslation('servicePages');
  const language = getLanguageFromPath(location.pathname);
  const localized = (path) => localizePath(path, language);
  const base = 'smallBusinessNetworkNYC';

  const outcomes = [
    { icon: Network, title: t(`${base}.outcomes.0.title`), text: t(`${base}.outcomes.0.text`) },
    { icon: Shield, title: t(`${base}.outcomes.1.title`), text: t(`${base}.outcomes.1.text`) },
    { icon: CheckCircle2, title: t(`${base}.outcomes.2.title`), text: t(`${base}.outcomes.2.text`) }
  ];

  const idealFor = [
    { icon: Briefcase, title: t(`${base}.idealFor.0.title`), description: t(`${base}.idealFor.0.description`) },
    { icon: Store, title: t(`${base}.idealFor.1.title`), description: t(`${base}.idealFor.1.description`) },
    { icon: Building2, title: t(`${base}.idealFor.2.title`), description: t(`${base}.idealFor.2.description`) }
  ];

  const relatedServices = [
    { label: t(`relatedLabels.networkSetupNYC`), to: localized('/network-setup-nyc') },
    { label: t(`relatedLabels.businessWifiNYC`), to: localized('/business-wifi-nyc') },
    { label: t(`relatedLabels.firewallSetupNYC`), to: localized('/firewall-setup-nyc') },
    { label: t(`relatedLabels.networkTroubleshootingNYC`), to: localized('/network-troubleshooting-nyc') }
  ];

  return (
    <ServiceLandingTemplate
      pageTitle={t(`${base}.pageTitle`)}
      pageDescription={t(`${base}.pageDescription`)}
      canonicalPath="/small-business-network-nyc"
      eyebrow={t(`${base}.eyebrow`)}
      title={t(`${base}.title`)}
      description={t(`${base}.description`)}
      heroImage="/images/services/small-business-network-nyc.webp"
      heroImageAlt={t(`${base}.heroImageAlt`)}
      ogImage="/images/services/small-business-network-nyc.webp"
      twitterImage="/images/services/small-business-network-nyc.webp"
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

export default SmallBusinessNetworkNYC;
