"use client";

import { motion } from "framer-motion";
import FeatureCard from "@/components/FeatureCard";
import CTAButton from "@/components/CTAButton";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function ShopkeeperPage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      title: t.shopkeeper.feature1Title,
      description: t.shopkeeper.feature1Desc,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>
      ),
      title: t.shopkeeper.feature2Title,
      description: t.shopkeeper.feature2Desc,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
      ),
      title: t.shopkeeper.feature3Title,
      description: t.shopkeeper.feature3Desc,
    },
  ];

  const stats = [
    { value: t.shopkeeper.stat1Value, label: t.shopkeeper.stat1Label },
    { value: t.shopkeeper.stat2Value, label: t.shopkeeper.stat2Label },
    { value: t.shopkeeper.stat3Value, label: t.shopkeeper.stat3Label },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 px-4 overflow-hidden">
        <div className="absolute top-32 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-6"
          >
            <span className="text-xs font-medium text-accent uppercase tracking-wider">
              {t.shopkeeper.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight"
          >
            {t.shopkeeper.heroHeadline1}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              {t.shopkeeper.heroHeadlineHighlight}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed"
          >
            {t.shopkeeper.heroSubtext}
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="pb-16 sm:pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FeatureCard
                key={i}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-16 sm:pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl border border-surface-border bg-surface-card/40"
              >
                <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 sm:pb-32 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-12 rounded-2xl border border-surface-border bg-gradient-to-br from-surface-card to-surface-card/50 backdrop-blur-sm"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {t.shopkeeper.ctaHeading}
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t.shopkeeper.ctaSubtext}
            </p>
            <CTAButton label={t.shopkeeper.ctaButton} variant="accent" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
