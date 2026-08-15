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
} from 'lucide-react';
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
        title: 'Please fill in all required fields',
        variant: 'destructive',
      });
      return;
    }

    if (!formData.consentToContact) {
      toast({
        title: 'Contact permission required',
        description:
          'Please confirm that Ozony Tech may contact you about your request.',
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
          'Something went wrong sending your message. Please try again.';

        throw new Error(msg);
      }

      toast({
        title: 'Inquiry sent successfully!',
        description: "Thanks for reaching out to Ozony Tech. I'll get back to you soon.",
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
        title: 'Message failed to send',
        description: err?.message || 'Please try again in a moment.',
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
      label: 'Email',
      value: 'contact@ozony.tech',
      href: 'mailto:contact@ozony.tech',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(347) 653-7655',
      href: 'tel:+13476537655',
    },
    {
      icon: MapPin,
      label: 'Service Area',
      value: 'New York City',
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
    <section id="contact" className="py-20 px-4 bg-slate-800/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Contact Ozony Tech
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-gray-400">
            Need help with Wi-Fi, networking, device setup, troubleshooting, or
            general IT support? Send over a few details and let’s talk through
            your business needs.
          </p>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <SpotlightCard className="rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-2xl font-bold text-white">
                Business Contact
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
                          <p className="font-medium text-white">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 border-t border-slate-700/50 pt-8">
                <p className="mb-4 text-sm text-gray-400">
                  Connect online
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
                        className="rounded-lg bg-slate-800/80 p-3 transition-all duration-200 hover:scale-110 hover:bg-blue-500/10"
                        aria-label={social.label}
                      >
                        <Icon className="h-5 w-5 text-gray-400 transition-colors hover:text-blue-400" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-6 backdrop-blur-sm">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">
                  Service Area
                </h3>

                <p className="mt-2 max-w-lg text-sm leading-relaxed text-gray-400">
                  Serving businesses across the Tri-State area, with nearby service
                  availability based on project needs.
                </p>
              </div>

              <div className="relative h-[250px] overflow-hidden rounded-lg border border-slate-700/50 bg-slate-900/70 lg:h-[260px]">
                <img
                  src="/service_area_map.png"
                  alt="Ozony Tech service area map covering the Tri-State area"
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
              className="rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-8 backdrop-blur-sm"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-medium text-white"
                  >
                    Name *
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="businessName"
                    className="mb-2 block font-medium text-white"
                  >
                    Business Name
                  </label>

                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your business or organization"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-medium text-white"
                  >
                    Email *
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block font-medium text-white"
                  >
                    Phone
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Best callback number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block font-medium text-white"
                  >
                    Service Needed
                  </label>

                  <input
                    type="text"
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Wi-Fi, networking, setup, troubleshooting, etc."
                  />
                </div>

                <div>
                  <label
                    htmlFor="urgency"
                    className="mb-2 block font-medium text-white"
                  >
                    Urgency *
                  </label>

                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-white transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" disabled>
                      Select urgency
                    </option>

                    <option value="Planning / not urgent">
                      Planning / not urgent
                    </option>

                    <option value="This week">
                      This week
                    </option>

                    <option value="ASAP">
                      ASAP
                    </option>

                    <option value="Emergency / business impacted">
                      Emergency / business impacted
                    </option>
                  </select>

                  <p className="mt-2 text-xs text-gray-500">
                    This helps us prioritize urgent business-impacting issues.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-medium text-white"
                  >
                    Project Details *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell me about your setup, the issue you’re having, or the kind of help you need."
                  />
                </div>

                <div className="rounded-lg border border-slate-700/70 bg-slate-900/40 p-4">
                  <label
                    htmlFor="consentToContact"
                    className="flex cursor-pointer items-start gap-3"
                  >
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
                      I agree that Ozony Tech may contact me by phone, text, or
                      email about my request. Calls may be recorded and
                      summarized so the team can follow up accurately. *
                    </span>
                  </label>
                </div>
              </div>

              <StarBorder className="mt-6 w-full rounded-md">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full border-0 bg-blue-600 py-6 text-base font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send className="mr-2 h-5 w-5" />

                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <DecodedText speed={12}>
                      Send Inquiry
                    </DecodedText>
                  )}
                </Button>
              </StarBorder>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;