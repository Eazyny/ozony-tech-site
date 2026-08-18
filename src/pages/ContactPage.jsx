import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Network,
  Send,
  Shield,
  Wifi,
} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from '@/components/ui/use-toast';
import LightRays from '@/components/ui/lightrays';
import SpotlightCard from '@/components/ui/spotlight-card';
import StarBorder from '@/components/ui/star-border';
import { getLanguageFromPath } from '@/i18n/languageRoutes';

const CONTACT_ENDPOINT = 'https://ozony-lead-alerts.ozonye.workers.dev';

const serviceOptions = [
  'Network Setup',
  'Business Wi-Fi',
  'Firewall Setup',
  'IT Support',
  'Managed IT Services',
  'Website / Digital Services',
  'AI Lead Response Agent',
  'Not Sure Yet',
];

const urgencyOptions = [
  'Planning / not urgent',
  'This week',
  'ASAP',
  'Emergency / business impacted',
];

const contactHighlights = [
  { icon: Network, key: 'networkSetup' },
  { icon: Wifi, key: 'businessWifi' },
  { icon: Shield, key: 'firewallSecurity' },
];

const processStepKeys = ['submit', 'review', 'followUp'];

const ContactLightRaysBackground = () => (
  <div
    className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    aria-hidden="true"
  >
    <div className="absolute inset-0 bg-[linear-gradient(180deg,#020617_0%,#06111f_42%,#020617_100%)]" />

    <div className="absolute inset-x-0 top-0 h-[740px] opacity-60 [mask-image:linear-gradient(to_bottom,black_0%,black_62%,transparent_100%)]">
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={0.28}
        lightSpread={0.62}
        rayLength={2}
        followMouse={true}
        mouseInfluence={0.025}
        noiseAmount={0}
        distortion={0}
        className="opacity-[0.28] sm:opacity-[0.34]"
        pulsating={false}
        fadeDistance={0.28}
        saturation={0.65}
      />
    </div>

    <div className="absolute left-1/2 top-[-8rem] h-[620px] w-[720px] -translate-x-1/2 rounded-full bg-blue-500/[0.14] blur-[170px]" />
    <div className="absolute right-[-14rem] top-[16rem] h-[560px] w-[560px] rounded-full bg-cyan-400/[0.08] blur-[145px]" />
    <div className="absolute left-[-14rem] bottom-[6rem] h-[520px] w-[520px] rounded-full bg-blue-500/[0.08] blur-[145px]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(96,165,250,0.12),transparent_32%),radial-gradient(circle_at_80%_28%,rgba(34,211,238,0.055),transparent_30%),linear-gradient(to_bottom,transparent_0%,rgba(2,6,23,0.72)_78%,#020617_100%)]" />
  </div>
);

function createSubmissionId() {
  if (
    typeof crypto !== 'undefined' &&
    typeof crypto.randomUUID === 'function'
  ) {
    return crypto.randomUUID();
  }

  if (
    typeof crypto !== 'undefined' &&
    typeof crypto.getRandomValues === 'function'
  ) {
    const bytes = new Uint8Array(16);

    crypto.getRandomValues(bytes);

    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;

    const hex = Array.from(bytes, (byte) =>
      byte.toString(16).padStart(2, '0')
    ).join('');

    return [
      hex.slice(0, 8),
      hex.slice(8, 12),
      hex.slice(12, 16),
      hex.slice(16, 20),
      hex.slice(20),
    ].join('-');
  }

  return `fallback-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

const ContactPage = () => {
  const location = useLocation();
  const { t } = useTranslation('contactPage');
  const language = getLanguageFromPath(location.pathname);
  const isSpanish = language === 'es';

  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    urgency: '',
    message: '',
    consentToContact: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const submissionIdRef = useRef(null);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    submissionIdRef.current = null;

    setFormData((currentData) => ({
      ...currentData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.urgency ||
      !formData.message
    ) {
      toast({
        title: t('toasts.requiredFields'),
        variant: 'destructive',
      });

      return;
    }

    if (!formData.consentToContact) {
      toast({
        title: t('toasts.permissionTitle'),
        description: t('toasts.permissionDescription'),
        variant: 'destructive',
      });

      return;
    }

    if (!submissionIdRef.current) {
      submissionIdRef.current = createSubmissionId();
    }

    const submissionId = submissionIdRef.current;
    setIsSubmitting(true);

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          submissionId,
          source: 'Dedicated Contact Page',
          name: formData.name,
          businessName: formData.business,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          service: formData.service,
          urgency: formData.urgency || 'Not specified',
          consentToContact: formData.consentToContact,
          message: formData.message,
          website: '',
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const msg =
          data?.errors?.[0]?.message ||
          data?.error ||
          t('toasts.sendErrorFallback');

        throw new Error(msg);
      }

      toast({
        title: t('toasts.successTitle'),
        description: t('toasts.successDescription'),
        icon: <CheckCircle2 className="h-4 w-4 text-emerald-300" />,
      });

      submissionIdRef.current = null;

      setFormData({
        name: '',
        business: '',
        email: '',
        phone: '',
        location: '',
        service: '',
        urgency: '',
        message: '',
        consentToContact: false,
      });
    } catch (err) {
      toast({
        title: t('toasts.failureTitle'),
        description: err?.message || t('toasts.failureDescription'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const canonicalUrl = isSpanish
    ? 'https://ozony.tech/es/contact'
    : 'https://ozony.tech/contact';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Ozony Tech',
    url: 'https://ozony.tech',
    email: 'contact@ozony.tech',
    telephone: '+1-347-653-7655',
    image: 'https://ozony.tech/images/ozony-og-preview.png',
    areaServed: [
      'New York City',
      'New Jersey',
      'Connecticut',
    ],
    serviceType: [
      'IT Support',
      'Network Setup',
      'Business Wi-Fi',
      'Firewall Setup',
      'Managed IT Services',
      'AI Lead Response Agent',
    ],
  };

  return (
    <>
      <Helmet>
        <title>{t('seo.title')}</title>

        <meta
          name="description"
          content={t('seo.description')}
        />

        <link
          rel="canonical"
          href={canonicalUrl}
        />

        <link
          rel="alternate"
          hrefLang="en"
          href="https://ozony.tech/contact"
        />

        <link
          rel="alternate"
          hrefLang="es"
          href="https://ozony.tech/es/contact"
        />

        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://ozony.tech/contact"
        />

        <meta
          name="robots"
          content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        />

        <meta property="og:title" content={t('seo.ogTitle')} />
        <meta property="og:description" content={t('seo.ogDescription')} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ozony Tech" />
        <meta property="og:image" content="https://ozony.tech/images/ozony-og-preview.png" />
        <meta property="og:image:alt" content={t('seo.ogImageAlt')} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('seo.ogTitle')} />
        <meta name="twitter:description" content={t('seo.ogDescription')} />
        <meta name="twitter:image" content="https://ozony.tech/images/ozony-og-preview.png" />

        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <div className="ozony-page-canvas min-h-screen text-white">
        <Header />

        <main className="ozony-flow ozony-flow-contact relative overflow-hidden text-white">
          <ContactLightRaysBackground />

          <section className="ozony-container-wide relative z-10 pb-20 pt-32 sm:pt-36">
            <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr] 2xl:grid-cols-[minmax(0,0.9fr)_minmax(680px,1.1fr)] 2xl:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
              >
                <div className="mb-5 inline-flex items-center rounded-full border border-blue-400/25 bg-blue-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
                  {t('hero.badge')}
                </div>

                <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {t('hero.title')}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  {t('hero.description')}
                </p>

                <div className="mt-8 max-w-2xl rounded-2xl border border-blue-300/[0.15] bg-blue-500/[0.08] p-5 backdrop-blur">
                  <p className="text-sm leading-6 text-blue-100/[0.85]">
                    {t('hero.helper')}
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {contactHighlights.map((item) => {
                    const Icon = item.icon;

                    return (
                      <SpotlightCard
                        key={item.key}
                        spotlightColor="rgba(96, 165, 250, 0.26)"
                        spotlightSize={300}
                        className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur transition-colors duration-300 hover:border-blue-300/30 hover:bg-white/[0.055]"
                      >
                        <Icon className="mb-4 h-6 w-6 text-blue-300" />

                        <h2 className="text-sm font-bold text-white">
                          {t(`highlights.${item.key}.title`)}
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {t(`highlights.${item.key}.text`)}
                        </p>
                      </SpotlightCard>
                    );
                  })}
                </div>
              </motion.div>

              <SpotlightCard
                as={motion.div}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
                spotlightColor="rgba(125, 211, 252, 0.24)"
                spotlightSize={520}
                className="rounded-[2rem] border border-blue-300/[0.15] bg-white/[0.045] p-4 shadow-2xl shadow-black/35 backdrop-blur-xl transition-all duration-300 hover:border-blue-300/30 hover:shadow-blue-500/10"
              >
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6 sm:p-8">
                  <div className="mb-7">
                    <h2 className="text-2xl font-bold text-white">
                      {t('form.title')}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {t('form.description')}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-200">
                          {t('form.nameLabel')}
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300/70"
                          placeholder={t('form.namePlaceholder')}
                        />
                      </div>

                      <div>
                        <label htmlFor="business" className="mb-2 block text-sm font-semibold text-slate-200">
                          {t('form.businessLabel')}
                        </label>
                        <input
                          id="business"
                          name="business"
                          type="text"
                          value={formData.business}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300/70"
                          placeholder={t('form.businessPlaceholder')}
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-200">
                          {t('form.emailLabel')}
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300/70"
                          placeholder="you@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-200">
                          {t('form.phoneLabel')}
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300/70"
                          placeholder={t('form.phonePlaceholder')}
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="location" className="mb-2 block text-sm font-semibold text-slate-200">
                          {t('form.locationLabel')}
                        </label>
                        <input
                          id="location"
                          name="location"
                          type="text"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300/70"
                          placeholder={t('form.locationPlaceholder')}
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="mb-2 block text-sm font-semibold text-slate-200">
                          {t('form.serviceLabel')}
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-300/70"
                        >
                          <option value="">{t('form.servicePlaceholder')}</option>
                          {serviceOptions.map((service) => (
                            <option key={service} value={service}>
                              {t(`serviceOptions.${service}`)}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="urgency" className="mb-2 block text-sm font-semibold text-slate-200">
                        {t('form.urgencyLabel')}
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        required
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-300/70"
                      >
                        <option value="" disabled>{t('form.urgencyPlaceholder')}</option>
                        {urgencyOptions.map((urgency) => (
                          <option key={urgency} value={urgency}>
                            {t(`urgencyOptions.${urgency}`)}
                          </option>
                        ))}
                      </select>
                      <p className="mt-2 text-xs text-slate-500">
                        {t('form.urgencyHelp')}
                      </p>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-200">
                        {t('form.messageLabel')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300/70"
                        placeholder={t('form.messagePlaceholder')}
                      />
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <label htmlFor="consentToContact" className="flex cursor-pointer items-start gap-3">
                        <input
                          id="consentToContact"
                          name="consentToContact"
                          type="checkbox"
                          required
                          checked={formData.consentToContact}
                          onChange={handleChange}
                          className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900 text-blue-500 focus:ring-2 focus:ring-blue-400"
                        />
                        <span className="text-sm leading-6 text-slate-300">
                          {t('form.consent')}
                        </span>
                      </label>
                    </div>

                    <StarBorder
                      as="button"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-xl shadow-lg shadow-blue-500/25 disabled:cursor-not-allowed disabled:opacity-60"
                      innerClassName="rounded-xl bg-blue-500 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-400"
                    >
                      {isSubmitting ? t('form.sending') : t('form.sendInquiry')}
                      <Send className="ml-2 h-4 w-4" />
                    </StarBorder>
                  </form>
                </div>
              </SpotlightCard>
            </div>
          </section>

          <section className="ozony-container-wide relative z-10 pb-24">
            <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] 2xl:gap-10">
              <SpotlightCard
                spotlightColor="rgba(96, 165, 250, 0.22)"
                spotlightSize={520}
                className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur transition-colors duration-300 hover:border-blue-300/30 hover:bg-white/[0.055]"
              >
                <h2 className="text-2xl font-bold text-white">
                  {t('details.title')}
                </h2>

                <div className="mt-7 space-y-5">
                  <a
                    href="mailto:contact@ozony.tech"
                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-blue-300/40 hover:bg-white/[0.07]"
                  >
                    <Mail className="mt-1 h-5 w-5 flex-none text-blue-300" />
                    <div>
                      <h3 className="font-semibold text-white">{t('details.email')}</h3>
                      <p className="mt-1 text-sm text-slate-400">contact@ozony.tech</p>
                    </div>
                  </a>

                  <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <MapPin className="mt-1 h-5 w-5 flex-none text-blue-300" />
                    <div>
                      <h3 className="font-semibold text-white">{t('details.serviceAreaTitle')}</h3>
                      <p className="mt-1 text-sm text-slate-400">{t('details.serviceAreaText')}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <Clock className="mt-1 h-5 w-5 flex-none text-blue-300" />
                    <div>
                      <h3 className="font-semibold text-white">{t('details.bestForTitle')}</h3>
                      <p className="mt-1 text-sm text-slate-400">{t('details.bestForText')}</p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard
                spotlightColor="rgba(125, 211, 252, 0.20)"
                spotlightSize={560}
                className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur transition-colors duration-300 hover:border-blue-300/30 hover:bg-white/[0.055]"
              >
                <h2 className="text-2xl font-bold text-white">{t('next.title')}</h2>

                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                  {t('next.description')}
                </p>

                <div className="mt-7 space-y-4">
                  {processStepKeys.map((key, index) => (
                    <div
                      key={key}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/50 p-5"
                    >
                      <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-blue-500/15 text-sm font-bold text-blue-200">
                        {index + 1}
                      </div>

                      <div>
                        <h3 className="font-semibold text-white">
                          {t(`next.steps.${key}`)}
                        </h3>

                        <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                          <CheckCircle className="h-4 w-4 text-blue-300" />
                          {t('next.stepNote')}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-blue-300/20 bg-blue-500/10 p-5">
                  <p className="text-sm leading-6 text-blue-100">
                    {t('next.urgentNote')}
                  </p>
                </div>
              </SpotlightCard>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;