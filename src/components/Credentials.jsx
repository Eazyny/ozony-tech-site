import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Credentials = () => {
  const supportingCerts = [
    'Technical Support Fundamentals',
    'The Bits and Bytes of Computer Networking',
    'Operating Systems and You',
    'System Administration and IT Infrastructure Services',
    'IT Security: Defense against the Digital Dark Arts',
  ];

  const featuredCert = {
    title: 'Google IT Support Professional Certificate',
    issuer: 'Google',
    date: 'January 2026',
    shortDescription:
      'Completion of the full Google IT Support Professional Certificate, covering troubleshooting, networking, operating systems, system administration, and security.',
    verificationUrl: 'https://coursera.org/verify/professional-cert/2FLTPOHX1URJ',
    image565: '/images/credentials/GoogleITSupportCert.webp',
    image440: '/images/credentials/GoogleITSupportCert-440.webp',
    image320: '/images/credentials/GoogleITSupportCert-320.webp',
  };

  return (
    <section id="credentials" className="ozony-flow ozony-flow-credentials px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Credentials
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Verified technical training that supports the practical IT and network services
            offered by Ozony Tech.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="overflow-hidden rounded-2xl border border-white/[0.07] bg-slate-950/46 shadow-lg shadow-black/25"
        >
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* Featured cert visual */}
            <div className="relative min-h-[340px] lg:min-h-[460px]">
              <div className="absolute inset-0">
                <img
                  src={featuredCert.image440}
                  srcSet={`
                    ${featuredCert.image320} 320w,
                    ${featuredCert.image440} 440w,
                    ${featuredCert.image565} 565w
                  `}
                  sizes="(min-width: 1024px) 440px, 92vw"
                  width="565"
                  height="612"
                  alt={`${featuredCert.title} certificate preview`}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/15 via-slate-950/35 to-slate-950/88" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/18 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_28%)]" />

              <div className="relative z-10 flex h-full flex-col justify-between p-6 lg:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-xl border border-blue-500/10 bg-blue-500/10 p-3 backdrop-blur-sm">
                    <Award className="h-7 w-7 text-blue-400" />
                  </div>

                  <div className="inline-flex items-center gap-1 rounded-full border border-green-400/20 bg-green-400/10 px-2.5 py-1 text-xs font-medium text-green-400 backdrop-blur-sm">
                    <CheckCircle className="h-3 w-3" />
                    <span>Verified</span>
                  </div>
                </div>

                <div className="max-w-xl">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                    Featured Certification
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold leading-tight text-white">
                    {featuredCert.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium text-blue-300">
                    {featuredCert.issuer} · Issued {featuredCert.date}
                  </p>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="p-6 lg:p-8 flex flex-col justify-between">
              <div>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  {featuredCert.shortDescription}
                </p>

                <div className="mt-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400 mb-4">
                    Also backed by 5 supporting certifications
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {supportingCerts.map((cert) => (
                      <span
                        key={cert}
                        className="rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-2 text-sm text-gray-300"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <a
                    href={featuredCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Verify Certificate
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400/10"
                >
                  <Link to="/certifications">
                    View All Certifications
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Credentials;