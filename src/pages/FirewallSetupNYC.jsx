import React from 'react';
import {
  Shield,
  Lock,
  Network
} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';
import { getLanguageFromPath, localizePath } from '@/i18n/languageRoutes';

const FirewallSetupNYC = () => {
  const location = useLocation();
  const { t } = useTranslation('servicePages');
  const language = getLanguageFromPath(location.pathname);
  const localized = (path) => localizePath(path, language);
  const base = 'firewallSetupNYC';

  const outcomes = [
    { icon: Shield, title: t(`${base}.outcomes.0.title`), text: t(`${base}.outcomes.0.text`) },
    { icon: Lock, title: t(`${base}.outcomes.1.title`), text: t(`${base}.outcomes.1.text`) },
    { icon: Network, title: t(`${base}.outcomes.2.title`), text: t(`${base}.outcomes.2.text`) }
  ];

  const idealFor = [
    
  ];

  const relatedServices = [
    
  ];

  return (
    <ServiceLandingTemplate
      pageTitle={t(`${base}.pageTitle`)}
      pageDescription={t(`${base}.pageDescription`)}
      canonicalPath="/firewall-setup-nyc"
      eyebrow={t(`${base}.eyebrow`)}
      title={t(`${base}.title`)}
      description={t(`${base}.description`)}
      heroImage="/images/services/firewall-setup-nyc.webp"
      heroImageAlt={t(`${base}.heroImageAlt`)}
      ogImage="/images/services/firewall-setup-nyc.webp"
      twitterImage="/images/services/firewall-setup-nyc.webp"
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

export default FirewallSetupNYC;
