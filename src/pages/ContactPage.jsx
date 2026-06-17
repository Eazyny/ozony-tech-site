import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
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

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from '@/components/ui/use-toast';

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
  {
    icon: Network,
    title: 'Network Setup',
    text: 'Structured small business networks built for stability, growth, and cleaner device management.',
  },
  {
    icon: Wifi,
    title: 'Business Wi-Fi',
    text: 'Reliable Wi-Fi planning for offices, shops, restaurants, and customer-facing spaces.',
  },
  {
    icon: Shield,
    title: 'Firewall & Security',
    text: 'Practical firewall setup, guest network separation, and better protection for business devices.',
  },
];

const processSteps = [
  'Submit your request with the details you already know.',
  'Ozony Tech reviews the setup, location, urgency, and service needs.',
  'We follow up with the best next step, quote, or walkthrough recommendation.',
];

const ContactPage = () => {
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

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

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

    setIsSubmitting(true);

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source: 'Dedicated Contact Page',
          name: formData.name,
          businessName: formData.business,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          urgency: formData.urgency || 'Not specified',
          consentToContact: formData.consentToContact,
          message: `Location: ${formData.location || 'Not provided'}\n\n${formData.message}`,
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
        title: 'Message failed to send',
        description: err?.message || 'Please try again in a moment.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Ozony Tech | IT & Network Support for Small Businesses</title>
        <meta
          name="description"
          content="Contact Ozony Tech for small business IT support, network setup, business Wi-Fi, firewall setup, and managed IT services in NYC, New Jersey, and Connecticut."
        />
        <link rel="canonical" href="https://ozony.tech/contactpage" />
        <meta
          name="robots"
          content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        />

        <meta property="og:title" content="Contact Ozony Tech | IT & Network Support" />
        <meta
          property="og:description"
          content="Need help with business Wi-Fi, network setup, firewall configuration, or IT support? Contact Ozony Tech today."
        />
        <meta property="og:url" content="https://ozony.tech/contactpage" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ozony Tech" />
        <meta property="og:image" content="https://ozony.tech/images/ozony-og-preview.png" />
        <meta
          property="og:image:alt"
          content="Contact Ozony Tech for IT and network support"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Ozony Tech | IT & Network Support" />
        <meta
          name="twitter:description"
          content="Need help with business Wi-Fi, network setup, firewall configuration, or IT support? Contact Ozony Tech today."
        />
        <meta name="twitter:image" content="https://ozony.tech/images/ozony-og-preview.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Ozony Tech',
            url: 'https://ozony.tech',
            email: 'contact@ozony.tech',
            telephone: '+1-347-653-7655',
            image: 'https://ozony.tech/images/ozony-og-preview.png',
            areaServed: ['New York City', 'New Jersey', 'Connecticut'],
            serviceType: [
              'IT Support',
              'Network Setup',
              'Business Wi-Fi',
              'Firewall Setup',
              'Managed IT Services',
              'AI Lead Response Agent',
            ],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-white">
        <Header />

        <main className="relative overflow-hidden bg-slate-950 text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />
            <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_35%),linear-gradient(to_bottom,rgba(2,6,23,0.2),rgba(2,6,23,1))]" />
            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:72px_72px]" />
          </div>

          <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 sm:pt-36 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
              >
                <div className="mb-5 inline-flex items-center rounded-full border border-blue-400/25 bg-blue-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
                  Ozony Tech · Contact
                </div>

                <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Need IT or network help for your business?
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Tell us what you need help with and Ozony Tech will help you figure out
                  the right next step — whether that is business Wi-Fi, network setup,
                  firewall configuration, IT support, or a full walkthrough.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="mailto:contact@ozony.tech"
                    className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
                  >
                    Email Ozony Tech
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>

                  <Link
                    to="/packages"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:border-blue-300/50 hover:bg-white/10"
                  >
                    View Packages
                  </Link>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {contactHighlights.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
                      >
                        <Icon className="mb-4 h-6 w-6 text-blue-300" />
                        <h2 className="text-sm font-bold text-white">{item.title}</h2>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/30 backdrop-blur-xl"
              >
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6 sm:p-8">
                  <div className="mb-7">
                    <h2 className="text-2xl font-bold text-white">Send a request</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Send your request directly to Ozony Tech. No email app needed.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-semibold text-slate-200"
                        >
                          Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300/70"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="business"
                          className="mb-2 block text-sm font-semibold text-slate-200"
                        >
                          Business Name
                        </label>
                        <input
                          id="business"
                          name="business"
                          type="text"
                          value={formData.business}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300/70"
                          placeholder="Company or shop name"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-semibold text-slate-200"
                        >
                          Email *
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
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-sm font-semibold text-slate-200"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300/70"
                          placeholder="Best callback number"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="location"
                          className="mb-2 block text-sm font-semibold text-slate-200"
                        >
                          Location
                        </label>
                        <input
                          id="location"
                          name="location"
                          type="text"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300/70"
                          placeholder="NYC, NJ, CT, etc."
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="mb-2 block text-sm font-semibold text-slate-200"
                        >
                          Service Needed
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-300/70"
                        >
                          <option value="">Select a service</option>
                          {serviceOptions.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="urgency"
                        className="mb-2 block text-sm font-semibold text-slate-200"
                      >
                        Urgency *
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        required
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-300/70"
                      >
                        <option value="" disabled>
                          Select urgency
                        </option>
                        {urgencyOptions.map((urgency) => (
                          <option key={urgency} value={urgency}>
                            {urgency}
                          </option>
                        ))}
                      </select>
                      <p className="mt-2 text-xs text-slate-500">
                        This helps Ozony Tech prioritize business-impacting issues.
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-semibold text-slate-200"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300/70"
                        placeholder="Tell us what is going on, what you need installed, fixed, upgraded, or planned."
                      />
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <label
                        htmlFor="consentToContact"
                        className="flex cursor-pointer items-start gap-3"
                      >
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
                          I agree that Ozony Tech may contact me by phone, text, or
                          email about my request. Calls may be recorded and summarized
                          so the team can follow up accurately. *
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center rounded-xl bg-blue-500 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                      <Send className="ml-2 h-4 w-4" />
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
                <h2 className="text-2xl font-bold text-white">Contact details</h2>

                <div className="mt-7 space-y-5">
                  <a
                    href="mailto:contact@ozony.tech"
                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-blue-300/40 hover:bg-white/[0.07]"
                  >
                    <Mail className="mt-1 h-5 w-5 flex-none text-blue-300" />
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <p className="mt-1 text-sm text-slate-400">contact@ozony.tech</p>
                    </div>
                  </a>

                  <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <MapPin className="mt-1 h-5 w-5 flex-none text-blue-300" />
                    <div>
                      <h3 className="font-semibold text-white">Service Area</h3>
                      <p className="mt-1 text-sm text-slate-400">
                        NYC, New Jersey, Connecticut, and nearby small business locations.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <Clock className="mt-1 h-5 w-5 flex-none text-blue-300" />
                    <div>
                      <h3 className="font-semibold text-white">Best For</h3>
                      <p className="mt-1 text-sm text-slate-400">
                        New installs, upgrades, troubleshooting, Wi-Fi cleanup, firewall
                        setup, and small business IT planning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
                <h2 className="text-2xl font-bold text-white">What happens next?</h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                  The goal is to make the first step simple. You do not need to know all the
                  technical details yet. Send the request, and Ozony Tech can help sort out
                  the right path.
                </p>

                <div className="mt-7 space-y-4">
                  {processSteps.map((step, index) => (
                    <div
                      key={step}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/50 p-5"
                    >
                      <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-blue-500/15 text-sm font-bold text-blue-200">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{step}</h3>
                        <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                          <CheckCircle className="h-4 w-4 text-blue-300" />
                          Simple, practical, and built around the business need.
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-blue-300/20 bg-blue-500/10 p-5">
                  <p className="text-sm leading-6 text-blue-100">
                    For urgent business network or Wi-Fi issues, include as much detail as
                    possible: internet provider, router/firewall model, number of devices,
                    business type, and what stopped working.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;