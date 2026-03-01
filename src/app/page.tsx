"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, BrainCircuit, Boxes, Lightbulb } from "lucide-react";
import StatusBadge from "@/components/StatusBadge";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function HomePage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: t.home.feature1Title,
      problem: t.home.feature1Problem,
      solution: t.home.feature1Solution,
      gradient: "from-brand/20 to-brand/5",
      iconColor: "text-brand",
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: t.home.feature2Title,
      problem: t.home.feature2Problem,
      solution: t.home.feature2Solution,
      gradient: "from-accent/20 to-accent/5",
      iconColor: "text-accent",
    },
    {
      icon: <Boxes className="w-6 h-6" />,
      title: t.home.feature3Title,
      problem: t.home.feature3Problem,
      solution: t.home.feature3Solution,
      gradient: "from-brand/15 to-accent/10",
      iconColor: "text-brand-light",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-accent/6 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Status Badge */}
          <div className="mb-8 flex flex-col items-center gap-4">
            <StatusBadge />
            <Link href="/vision">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface-card/40 px-5 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-card hover:text-white"
              >
                <span className="absolute inset-0 rounded-full bg-brand/10 opacity-0 transition-opacity group-hover:opacity-100 group-hover:animate-pulse"></span>
                <Lightbulb className="w-4 h-4 text-brand" />
                <span>{t.home.readVision}</span>
              </motion.button>
            </Link>
          </div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight"
          >
            {t.home.heroHeadline1}
            <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
              {t.home.heroHeadlineHighlight}
            </span>
            {t.home.heroHeadline2}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
          >
            {t.home.heroSubtext}
            <span className="text-white font-medium">
              {t.home.heroSubtextBold}
            </span>
          </motion.p>
        </div>
      </section>

      {/* Split CTA Section */}
      <section className="pb-24 sm:pb-32 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Customer Card */}
            <Link href="/customer" className="group">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative p-8 sm:p-10 rounded-2xl border border-surface-border bg-surface-card/70 backdrop-blur-sm overflow-hidden cursor-pointer transition-colors duration-300 hover:border-brand/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {t.home.customerCardTitle}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {t.home.customerCardDesc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-brand font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    {t.home.customerCardCta}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Merchant Card */}
            <Link href="/merchant" className="group">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative p-8 sm:p-10 rounded-2xl border border-surface-border bg-surface-card/70 backdrop-blur-sm overflow-hidden cursor-pointer transition-colors duration-300 hover:border-accent/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {t.home.merchantCardTitle}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {t.home.merchantCardDesc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    {t.home.merchantCardCta}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* The Problems We Solve */}
      <section className="pb-24 sm:pb-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            {t.home.problemsHeading1}
            <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
              {t.home.problemsHeadingHighlight}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted max-w-2xl mx-auto mb-14 leading-relaxed"
          >
            {t.home.problemsSubtext}
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative p-8 rounded-2xl border border-surface-border bg-surface-card/50 text-left hover:border-brand/30 transition-colors duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center ${item.iconColor} mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-accent-light text-sm font-medium mb-2 italic">
                    &ldquo;{item.problem}&rdquo;
                  </p>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
