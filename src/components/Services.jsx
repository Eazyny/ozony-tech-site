import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Network, Shield, Wrench } from 'lucide-react';

const Services = () => {
  const serviceGroups = [
    {
      icon: Network,
      title: 'Networking & Wi-Fi',
      stack: ['Router & Switch Setup', 'Guest Wi-Fi', 'Segmentation'],
      description:
        'Build cleaner, more reliable connectivity for small businesses with practical network setup, Wi-Fi improvement, and better device organization.',
      takeaways: [
        'Small office network setup and layout',
        'Guest and staff network separation',
        'Coverage, performance, and connectivity troubleshooting',
      ],
      href: '/network-setup-nyc',
      linkLabel: 'Explore network setup',
    },
    {
      icon: Building2,
      title: 'Device & Office Setup',
      stack: ['Workstations', 'Printers', 'Shared Devices'],
      description:
        'Get offices, teams, and shared workspaces set up faster with consistent device configuration and practical day-to-day readiness.',
      takeaways: [
        'PC, printer, and office device setup',
        'Shared workspace and new-user readiness',
        'Basic Windows and macOS support',
      ],
      href: '/it-support-nyc',
      linkLabel: 'Explore IT support',
    },
    {
      icon: Shield,
      title: 'Shared Access & Security',
      stack: ['Shared Files', 'Permissions', 'MFA', 'Accounts'],
      description:
        'Help teams work more efficiently and securely with cleaner shared access, better permissions, and simple business security essentials.',
      takeaways: [
        'Shared folder and access organization',
        'User account setup and permission planning',
        'MFA, update hygiene, and safer access practices',
      ],
      href: '/firewall-setup-nyc',
      linkLabel: 'Explore firewall setup',
    },
    {
      icon: Wrench,
      title: 'Support & Troubleshooting',
      stack: ['Remote Support', 'Issue Triage', 'Troubleshooting'],
      description:
        'Keep day-to-day operations running smoothly with practical remote and on-site support for recurring IT problems and common office issues.',
      takeaways: [
        'Wi-Fi, device, and printer troubleshooting',
        'Root-cause investigation and practical fixes',
        'Remote assistance, follow-ups, and ongoing help',
      ],
      href: '/it-support-nyc',
      linkLabel: 'Explore IT support',
    },
  ];

  return (
    <section id="services" className="bg-slate-800/30 px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-14 grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
              Small Business IT Services
            </p>

            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Services Built for Small Business Needs
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-400">
              Ozony Tech provides practical IT and network help for the everyday needs
              small businesses face, from connectivity and device setup to shared
              access, security, and ongoing support.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                'Networking',
                'Business Wi-Fi',
                'Shared Access',
                'Security',
                'Troubleshooting',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-2 text-sm text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/10 opacity-60 blur-3xl transition-opacity duration-300 group-hover:opacity-90" />

            <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/50 shadow-lg shadow-blue-500/10">
              <img
                src="/images/NetworkSetup.png"
                width="1672"
                height="941"
                alt="Ozony Tech small business IT, networking, Wi-Fi, security, and support visual"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {serviceGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  to={group.href}
                  className="group block h-full rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-blue-500/10 p-2">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold leading-tight text-white">
                      {group.title}
                    </h3>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {group.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-700/50 bg-slate-800/80 px-3 py-1 text-sm text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-gray-400">
                    {group.description}
                  </p>

                  <div className="border-t border-slate-700/50 pt-4">
                    <p className="mb-2 text-xs font-semibold text-gray-300">
                      What it covers
                    </p>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-gray-400">
                      {group.takeaways.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors duration-200 group-hover:text-blue-300">
                    <span>{group.linkLabel}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;