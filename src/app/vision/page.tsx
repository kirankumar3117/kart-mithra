"use client";

import { motion } from "framer-motion";
import { ListChecks, Bot, PackageCheck, User, Globe, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function VisionPage() {
  const { t } = useLanguage();

  const animations = {
    fadeInUp: {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.7 }
    },
    staggerContainer: {
      initial: {},
      whileInView: { transition: { staggerChildren: 0.15 } },
      viewport: { once: true, margin: "-50px" }
    },
    itemFadeInUp: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand/30 pb-20">
      
      {/* Section 1: The Mission (Hero) */}
      <section className="relative pt-40 pb-24 px-4 overflow-hidden border-b border-surface-border">
        {/* Background gradient orbs */}
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-brand/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-surface-border bg-surface-card/50 text-xs font-semibold text-brand tracking-widest uppercase mb-8"
          >
            {t.vision.badge}
          </motion.div>
          <motion.h1 
            {...animations.fadeInUp}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6"
          >
            {t.vision.heroHeadline1}<span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">{t.vision.heroHeadlineHighlight}</span>{t.vision.heroHeadline2}
          </motion.h1>
          <motion.p 
            {...animations.fadeInUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
          >
            {t.vision.heroSubtext}<span className="text-white font-medium">{t.vision.heroSubtextBold}</span>
          </motion.p>
        </div>
      </section>

      {/* Section 2: The Core Pain Point (Laser Focus) */}
      <section className="py-24 px-4 border-b border-surface-border bg-surface/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...animations.fadeInUp} className="mb-6">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              {t.vision.problemHeadline1}<span className="text-red-400">{t.vision.problemHeadlineHighlight}</span>
            </h2>
          </motion.div>
          
          <motion.div 
            {...animations.fadeInUp}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-lg mx-auto text-muted-foreground leading-relaxed text-left sm:text-center"
          >
            <p>
              {t.vision.problemDesc1}<strong className="text-white">{t.vision.problemDescHighlight}</strong>{t.vision.problemDesc2}
            </p>
            <p className="mt-6 text-xl text-white font-medium">
              {t.vision.problemConclusion}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: The Conceptual Wireframe (How It Works) */}
      <section className="py-24 px-4 border-b border-surface-border relative overflow-hidden">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[500px] w-full bg-brand/5 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div {...animations.fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.vision.solutionHeading}</h2>
            <p className="text-muted">{t.vision.solutionSubtext}</p>
          </motion.div>

          <motion.div 
            variants={animations.staggerContainer.whileInView}
            initial="initial"
            whileInView="whileInView"
            viewport={animations.staggerContainer.viewport}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
          >
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-brand/30 to-transparent -translate-y-1/2 z-0" />

            {/* Step 1 */}
            <motion.div variants={animations.itemFadeInUp} className="relative z-10 group">
              <div className="bg-surface-card border border-surface-border rounded-2xl p-8 hover:border-brand/40 transition-colors h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform">
                  <ListChecks className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t.vision.step1Title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {t.vision.step1Desc}
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={animations.itemFadeInUp} className="relative z-10 group">
              <div className="bg-surface-card border border-surface-border rounded-2xl p-8 hover:border-brand/40 transition-colors h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <Bot className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t.vision.step2Title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {t.vision.step2Desc}
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={animations.itemFadeInUp} className="relative z-10 group">
              <div className="bg-surface-card border border-surface-border rounded-2xl p-8 hover:border-brand/40 transition-colors h-full flex flex-col items-center text-center">
                <div className="flex gap-2 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:-translate-y-1 transition-transform">
                    <PackageCheck className="w-6 h-6" />
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:translate-x-1 transition-transform">
                    <User className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t.vision.step3Title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {t.vision.step3Desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: The Engine (Tech Stack) */}
      <section className="py-24 px-4 bg-surface/30 border-b border-surface-border">
        <div className="max-w-5xl mx-auto">
          <motion.div {...animations.fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.vision.engineHeading}</h2>
            <p className="text-muted">{t.vision.engineSubtext}</p>
          </motion.div>

          {/* Bento Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 auto-rows-[200px]">
            {/* Next.js */}
            <motion.div 
              {...animations.fadeInUp} transition={{ delay: 0.1 }}
              className="md:col-span-2 md:row-span-1 rounded-2xl bg-gradient-to-br from-surface-card to-surface-card/50 border border-surface-border p-8 flex flex-col justify-center relative overflow-hidden group hover:border-white/20 transition-colors"
            >
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">{t.vision.tech1Title}</h3>
              <p className="text-muted relative z-10">{t.vision.tech1Desc}</p>
            </motion.div>

            {/* React Native */}
            <motion.div 
              {...animations.fadeInUp} transition={{ delay: 0.2 }}
              className="md:col-span-1 md:row-span-1 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-cyan-900/10 border border-surface-border p-8 flex flex-col justify-center relative overflow-hidden group hover:border-cyan-500/30 transition-colors"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-2 relative z-10">{t.vision.tech2Title}</h3>
              <p className="text-muted relative z-10">{t.vision.tech2Desc}</p>
            </motion.div>

            {/* Python / FastAPI */}
            <motion.div 
              {...animations.fadeInUp} transition={{ delay: 0.3 }}
              className="md:col-span-1 md:row-span-1 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-emerald-900/10 border border-surface-border p-8 flex flex-col justify-center relative overflow-hidden group hover:border-emerald-500/30 transition-colors"
            >
              <h3 className="text-2xl font-bold text-emerald-400 mb-2 relative z-10">{t.vision.tech3Title}</h3>
              <p className="text-muted relative z-10">{t.vision.tech3Desc}</p>
            </motion.div>

            {/* PostgreSQL */}
            <motion.div 
              {...animations.fadeInUp} transition={{ delay: 0.4 }}
              className="md:col-span-1 md:row-span-1 rounded-2xl bg-gradient-to-br from-blue-950/40 to-blue-900/10 border border-surface-border p-8 flex flex-col justify-center relative overflow-hidden group hover:border-blue-500/30 transition-colors"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-2 relative z-10">{t.vision.tech4Title}</h3>
              <p className="text-muted relative z-10">{t.vision.tech4Desc}</p>
            </motion.div>

            {/* Tesseract AI */}
            <motion.div 
              {...animations.fadeInUp} transition={{ delay: 0.5 }}
              className="md:col-span-1 md:row-span-1 rounded-2xl bg-gradient-to-br from-purple-950/40 to-purple-900/10 border border-surface-border p-8 flex flex-col justify-center relative overflow-hidden group hover:border-purple-500/30 transition-colors"
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-2 relative z-10">{t.vision.tech5Title}</h3>
              <p className="text-muted relative z-10">{t.vision.tech5Desc}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: The Builder (Footer Reference) */}
      <section className="py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...animations.fadeInUp}>
            <h2 className="text-2xl font-bold text-white mb-4">{t.vision.builderHeading}</h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-8">
              {t.vision.builderDesc}
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <motion.a 
                href="https://softwareguru.in" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border border-surface-border bg-surface-card flex items-center justify-center text-muted hover:text-white hover:border-white/30 transition-colors"
                aria-label="Portfolio"
              >
                <Globe className="w-5 h-5" />
              </motion.a>
              
              <motion.a 
                href="https://linkedin.com/in/kirankumar3117" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border border-surface-border bg-surface-card flex items-center justify-center text-muted hover:text-[#0a66c2] hover:border-[#0a66c2]/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>

              <motion.a 
                href="https://github.com/kirankumar3117" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border border-surface-border bg-surface-card flex items-center justify-center text-muted hover:text-white hover:border-white/50 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
