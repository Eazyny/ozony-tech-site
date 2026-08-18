import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle2,
  LoaderCircle,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import DecodedText from '@/components/ui/decode-text';
import SpotlightCard from '@/components/ui/spotlight-card';
import StarBorder from '@/components/ui/star-border';

const CONTACT_ENDPOINT = 'https://ozony-lead-alerts.ozonye.workers.dev';

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

const Contact = () => {
  const { t } = useTranslation('home');

  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    service: '',
    urgency: '',
    message: '',
    consentToContact: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const submissionIdRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.urgency || !formData.message) {
      toast({
        title: t('contact.toasts.requiredFields'),
        variant: 'destructive',
      });
      return;
    }

    if (!formData.consentToContact) {
      toast({
        title: t('contact.toasts.permissionRequiredTitle'),
        description: t('contact.toasts.permissionRequiredDescription'),
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
          source: 'Homepage Contact Section',
          name: formData.name,
          businessName: formData.businessName,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          urgency: formData.urgency || 'Not specified',
          message: formData.message,
          consentToContact: formData.consentToContact,
          website: '',
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const msg =
          data?.errors?.[0]?.message ||
          data?.error ||
          t('contact.toasts.sendErrorFallback');

        throw new Error(msg);
      }

      toast({
        title: t('contact.toasts.successTitle'),
        description: t('contact.toasts.successDescription'),
        icon: <CheckCircle2 className="h-4 w-4 text-emerald-300" />,
      });

      submissionIdRef.current = null;

      setFormData({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        service: '',
        urgency: '',
        message: '',
        consentToContact: false,
      });
    } catch (err) {
      toast({
        title: t('contact.toasts.failureTitle'),
        description: err?.message || t('contact.toasts.failureDescription'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    submissionIdRef.current = null;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: 'contact@ozony.tech',
      href: 'mailto:contact@ozony.tech',
    },
    {
      icon: Phone,
      label: t('contact.info.phone'),
      value: '(347) 653-7655',
      href: 'tel:+13476537655',
    },
    {
      icon: MapPin,
      label: t('contact.info.serviceArea'),
      value: t('contact.info.serviceAreaValue'),
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Eazyny',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ozony-elsevif/',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://x.com/ozonytech',
    },
  ];

  return (
    <section id="contact" className="ozony-flow ozony-flow-contact py-20">
      <div className="ozony-container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            {t('contact.title')}
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-gray-400">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] 2xl:grid-cols-[0.85fr_1.15fr] 2xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <SpotlightCard className="rounded-xl border border-white/[0.07] bg-slate-950/46 p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-2xl font-bold text-white">
                {t('contact.businessContact')}
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="shrink-0 rounded-lg bg-blue-500/10 p-3">
                        <Icon className="h-6 w-6 text-blue-400" />
                      </div>

                      <div>
                        <p className="mb-1 text-sm text-gray-400">
                          {item.label}
                        </p>

                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium text-white transition-colors hover:text-blue-400"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-white">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 border-t border-slate-700/50 pt-8">
                <p className="mb-4 text-sm text-gray-400">
                  {t('contact.connectOnline')}
                </p>

                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-white/[0.03] p-3 transition-all duration-200 hover:scale-110 hover:bg-blue-500/10"
                        aria-label={social.label}
                      >
                        <Icon className="h-5 w-5 text-gray-400 transition-colors hover:text-blue-400" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="rounded-xl border border-white/[0.07] bg-slate-950/46 p-6 backdrop-blur-sm">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">
                  {t('contact.serviceArea.title')}
                </h3>

                <p className="mt-2 max-w-lg text-sm leading-relaxed text-gray-400">
                  {t('contact.serviceArea.description')}
                </p>
              </div>

              <div className="relative h-[250px] overflow-hidden rounded-lg border border-white/[0.07] bg-slate-950/55 lg:h-[260px]">
                <img
                  src="/service_area_map.png"
                  alt={t('contact.serviceArea.imageAlt')}
                  loading="lazy"
                  className="absolute left-1/2 top-1/2 h-full w-full min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-[1.5] object-cover object-center"
                />
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SpotlightCard
              as="form"
              onSubmit={handleSubmit}
              className="rounded-xl border border-white/[0.07] bg-slate-950/46 p-8 backdrop-blur-sm"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block font-medium text-white">
                    {t('contact.form.nameLabel')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/[0.08] bg-slate-950/55 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="businessName" className="mb-2 block font-medium text-white">
                    {t('contact.form.businessNameLabel')}
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/[0.08] bg-slate-950/55 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('contact.form.businessNamePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block font-medium text-white">
                    {t('contact.form.emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/[0.08] bg-slate-950/55 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block font-medium text-white">
                    {t('contact.form.phoneLabel')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/[0.08] bg-slate-950/55 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('contact.form.phonePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="mb-2 block font-medium text-white">
                    {t('contact.form.serviceLabel')}
                  </label>
                  <input
                    type="text"
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/[0.08] bg-slate-950/55 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('contact.form.servicePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="urgency" className="mb-2 block font-medium text-white">
                    {t('contact.form.urgencyLabel')}
                  </label>

                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/[0.08] bg-slate-950/55 px-4 py-3 text-white transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" disabled>
                      {t('contact.form.urgencyPlaceholder')}
                    </option>
                    <option value="Planning / not urgent">
                      {t('contact.form.urgencyOptions.planning')}
                    </option>
                    <option value="This week">
                      {t('contact.form.urgencyOptions.thisWeek')}
                    </option>
                    <option value="ASAP">
                      {t('contact.form.urgencyOptions.asap')}
                    </option>
                    <option value="Emergency / business impacted">
                      {t('contact.form.urgencyOptions.emergency')}
                    </option>
                  </select>

                  <p className="mt-2 text-xs text-gray-500">
                    {t('contact.form.urgencyHelp')}
                  </p>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block font-medium text-white">
                    {t('contact.form.projectDetailsLabel')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none rounded-lg border border-white/[0.08] bg-slate-950/55 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('contact.form.projectDetailsPlaceholder')}
                  />
                </div>

                <div className="rounded-lg border border-white/[0.07] bg-white/[0.025] p-4">
                  <label htmlFor="consentToContact" className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      id="consentToContact"
                      name="consentToContact"
                      checked={formData.consentToContact}
                      onChange={handleChange}
                      required
                      className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-900 text-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-sm leading-relaxed text-gray-300">
                      {t('contact.form.consent')}
                    </span>
                  </label>
                </div>
              </div>

              {isSubmitting ? (
                <div className="mt-6 w-full overflow-hidden rounded-md border border-blue-400/30 bg-blue-600/90 shadow-[0_10px_30px_rgba(37,99,235,0.18)]">
                  <Button
                    type="submit"
                    disabled
                    aria-busy="true"
                    className="w-full border-0 bg-transparent py-6 text-base font-semibold text-white opacity-100 disabled:cursor-wait disabled:opacity-100"
                  >
                    <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
                    {t('contact.form.sending')}
                  </Button>
                </div>
              ) : (
                <StarBorder className="mt-6 w-full rounded-md">
                  <Button
                    type="submit"
                    className="w-full border-0 bg-blue-600 py-6 text-base font-semibold text-white hover:bg-blue-700"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    <DecodedText speed={12}>
                      {t('contact.form.sendInquiry')}
                    </DecodedText>
                  </Button>
                </StarBorder>
              )}
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;