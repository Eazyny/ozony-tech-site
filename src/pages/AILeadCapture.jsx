import React from 'react';
import {
  Bot,
  Building2,
  Clock,
  Headphones,
  Target,
  Zap,
} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';
import {
  getLanguageFromPath,
  localizePath,
} from '@/i18n/languageRoutes';

const AILeadCapture = () => {
  const location = useLocation();
  const { t } = useTranslation('aiLeadCapture');

  const language = getLanguageFromPath(location.pathname);
  const localizedPath = (path) => localizePath(path, language);

  const trustChips = t('trustChips', { returnObjects: true });
  const serviceIncludes = t('serviceIncludes', { returnObjects: true });
  const seoParagraphs = t('seoParagraphs', { returnObjects: true });
  const faqItems = t('faqItems', { returnObjects: true });

  const outcomes = [
    {
      icon: Zap,
      title: t('outcomes.respondFaster.title'),
      text: t('outcomes.respondFaster.text'),
    },
    {
      icon: Target,
      title: t('outcomes.qualifyBetter.title'),
      text: t('outcomes.qualifyBetter.text'),
    },
    {
      icon: Headphones,
      title: t('outcomes.alertTeam.title'),
      text: t('outcomes.alertTeam.text'),
    },
  ];

  const idealFor = [
    {
      title: t('idealFor.smallBusiness.title'),
      description: t('idealFor.smallBusiness.description'),
      icon: Building2,
    },
    {
      title: t('idealFor.serviceProviders.title'),
      description: t('idealFor.serviceProviders.description'),
      icon: Bot,
    },
    {
      title: t('idealFor.afterHours.title'),
      description: t('idealFor.afterHours.description'),
      icon: Clock,
    },
  ];

  const relatedServices = [
    {
      label: t('relatedServices.premiumAgent'),
      to: localizedPath('/ai-lead-agent'),
    },
    {
      label: t('relatedServices.itSolutions'),
      to: localizedPath('/it-solutions'),
    },
    {
      label: t('relatedServices.managedIT'),
      to: localizedPath('/managed-it-services'),
    },
    {
      label: t('relatedServices.itSupport'),
      to: localizedPath('/it-support'),
    },
    {
      label: t('relatedServices.networkSetupNYC'),
      to: localizedPath('/network-setup-nyc'),
    },
    {
      label: t('relatedServices.businessWifiNYC'),
      to: localizedPath('/business-wifi-nyc'),
    },
    {
      label: t('relatedServices.firewallSetupNYC'),
      to: localizedPath('/firewall-setup-nyc'),
    },
    {
      label: t('relatedServices.packages'),
      to: localizedPath('/packages'),
    },
    {
      label: t('relatedServices.contact'),
      to: localizedPath('/contact'),
    },
  ];

  return (
    <ServiceLandingTemplate
      pageTitle={t('pageTitle')}
      pageDescription={t('pageDescription')}
      canonicalPath={localizedPath('/ai-agent-lead-capture')}
      eyebrow={t('eyebrow')}
      title={t('title')}
      description={t('description')}
      primaryCta={t('primaryCta')}
      secondaryCta={t('secondaryCta')}
      primaryCtaTo={localizedPath('/contact')}
      secondaryCtaTo={localizedPath('/ai-lead-agent')}
      heroImage="/images/ozony-og-preview.png"
      heroImageAlt={t('heroImageAlt')}
      ogImage="/images/ozony-og-preview.png"
      twitterImage="/images/ozony-og-preview.png"
      trustChips={trustChips}
      includeTitle={t('includeTitle')}
      includeDescription={t('includeDescription')}
      serviceIncludes={serviceIncludes}
      outcomes={outcomes}
      industriesTitle={t('industriesTitle')}
      idealFor={idealFor}
      midCtaEyebrow={t('midCtaEyebrow')}
      midCtaTitle={t('midCtaTitle')}
      midCtaDescription={t('midCtaDescription')}
      seoTitle={t('seoTitle')}
      seoParagraphs={seoParagraphs}
      areasServed={t('areasServed')}
      faqItems={faqItems}
      relatedServices={relatedServices}
      finalTitle={t('finalTitle')}
      finalDescription={t('finalDescription')}
    />
  );
};

export default AILeadCapture;