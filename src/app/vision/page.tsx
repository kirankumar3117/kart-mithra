"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ListChecks, Bot, PackageCheck, User, Globe, Linkedin, Github, Bike, Truck, ArrowRight, ArrowDown, Sparkles, X, Send } from "lucide-react";
import Link from "next/link";
import emailjs from "emailjs-com";
import { useLanguage } from "@/i18n/LanguageProvider";
import AnimatedWireframe from "@/components/AnimatedWireframe";

export default function VisionPage() {
  const { t } = useLanguage();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [suggestion, setSuggestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSuggestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestion.trim()) return;

    setIsSubmitting(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "dummy_service",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "dummy_template",
        { suggested_name: suggestion },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "dummy_key"
      );
      setSuggestion("");
      setIsModalOpen(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      console.log(error);
      console.error("EmailJS Error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <motion.p
            {...animations.fadeInUp}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-sm text-muted-foreground max-w-xl mx-auto italic"
          >
            {t.vision.heroMutedStart}
            <span className="text-orange-400 font-medium">{t.vision.heroMutedHighlight}</span>
            {t.vision.heroMutedEnd}
          </motion.p>

          {/* Rebrand Callout */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-brand/10 to-accent/10 border border-brand/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6"
          >
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                <Sparkles className="w-5 h-5 text-brand" />
                {t.vision.rebrandTitle}
              </h3>
              <p className="text-muted mt-1">{t.vision.rebrandText}</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="whitespace-nowrap px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-lg shadow-white/5 active:scale-95 flex-shrink-0"
            >
              {t.vision.rebrandBtn}
            </button>
          </motion.div>
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
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-4"
            >
              {t.vision.problemDesc3}
            </motion.p>
            <p className="mt-6 text-xl text-white font-medium">
              {t.vision.problemConclusion}
            </p>
          </motion.div>
        </div>
      </section>

    {/* Section 2.5: Animated Experience Wireframe */}
    <AnimatedWireframe />

      {/* Section 3: The Conceptual Wireframe (How It Works) */}
      <section className="py-24 px-4 border-b border-surface-border relative overflow-hidden">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[500px] w-full bg-brand/5 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="w-full max-w-5xl mx-auto relative z-10 flex flex-col items-center justify-center">
          <motion.div {...animations.fadeInUp} className="text-center mb-16 flex flex-col items-center justify-center w-full">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">{t.vision.solutionHeading}</h2>
            <p className="text-muted text-center max-w-2xl">{t.vision.solutionSubtext}</p>
          </motion.div>

          <motion.div 
            variants={animations.staggerContainer.whileInView}
            initial="initial"
            whileInView="whileInView"
            viewport={animations.staggerContainer.viewport}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center justify-center items-center relative mb-20 w-full"
          >
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-transparent via-brand/30 to-transparent -translate-y-1/2 z-0" />

            {/* Step 1 */}
            <motion.div variants={animations.itemFadeInUp} className="relative z-10 group">
              <div className="bg-surface-card border border-surface-border rounded-2xl p-6 hover:border-brand/40 transition-colors h-full flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand mb-4 group-hover:scale-110 transition-transform">
                  <ListChecks className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{t.vision.step1Title}</h3>
                <p className="text-muted text-xs leading-relaxed">
                  {t.vision.step1Desc}
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={animations.itemFadeInUp} className="relative z-10 group">
              <div className="bg-surface-card border border-surface-border rounded-2xl p-6 hover:border-brand/40 transition-colors h-full flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                  <Bot className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{t.vision.step2Title}</h3>
                <p className="text-muted text-xs leading-relaxed">
                  {t.vision.step2Desc}
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={animations.itemFadeInUp} className="relative z-10 group">
              <div className="bg-surface-card border border-surface-border rounded-2xl p-6 hover:border-brand/40 transition-colors h-full flex flex-col items-center text-center">
                <div className="flex gap-2 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:-translate-y-1 transition-transform">
                    <PackageCheck className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:translate-x-1 transition-transform">
                    <User className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{t.vision.step3Title}</h3>
                <p className="text-muted text-xs leading-relaxed">
                  {t.vision.step3Desc}
                </p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div variants={animations.itemFadeInUp} className="relative z-10 group">
              <div className="bg-surface-card border border-surface-border rounded-2xl p-6 hover:border-brand/40 transition-colors h-full flex flex-col items-center text-center">
                <div className="flex gap-2 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:translate-x-1 transition-transform">
                    <Bike className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:translate-x-1 transition-transform">
                    <Truck className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{t.vision.step4Title}</h3>
                <p className="text-muted text-xs leading-relaxed">
                  {t.vision.step4Desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Branching Flow Diagram */}
          <motion.div {...animations.fadeInUp} className="bg-surface-card/30 border border-surface-border/50 rounded-2xl p-8 backdrop-blur-sm mx-auto w-full max-w-4xl flex flex-col items-center justify-center">
            {/* Pickup Path */}
            <div className="mb-10 text-center w-full flex flex-col items-center justify-center">
              <div className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-sm font-semibold mb-4 border border-brand/20">
                {t.vision.flowPickup}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base font-medium text-white/80">
                <span className="bg-surface p-3 rounded-lg border border-surface-border">{t.vision.flowDeliveryUpload}</span>
                <ArrowRight className="w-4 h-4 text-muted mx-1" />
                <span className="bg-surface p-3 rounded-lg border border-surface-border">{t.vision.flowDeliveryReads}</span>
                <ArrowRight className="w-4 h-4 text-muted mx-1" />
                <span className="bg-surface p-3 rounded-lg border border-surface-border">{t.vision.flowDeliveryPack}</span>
                <ArrowRight className="w-4 h-4 text-muted mx-1" />
                <span className="bg-brand/20 text-brand p-3 rounded-lg border border-brand/30">Customer Walk-In Pickup</span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-surface-border to-transparent my-8" />

            {/* Delivery Path */}
            <div className="text-center">
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4 border border-accent/20">
                {t.vision.flowDelivery}
              </div>
              
              <div className="flex flex-col items-center w-full">
                {/* Horizontal Flow */}
                <div className="flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base font-medium text-white/80">
                  <span className="bg-surface p-3 rounded-lg border border-surface-border">{t.vision.flowDeliveryUpload}</span>
                  <ArrowRight className="w-4 h-4 text-muted mx-1" />
                  <span className="bg-surface p-3 rounded-lg border border-surface-border">{t.vision.flowDeliveryReads}</span>
                  <ArrowRight className="w-4 h-4 text-muted mx-1" />
                  <span className="bg-surface p-3 rounded-lg border border-surface-border">{t.vision.flowDeliveryPack}</span>
                  <ArrowRight className="w-4 h-4 text-muted mx-1" />
                  <span className="bg-surface-card p-3 rounded-lg border border-surface-border text-white relative">
                    {t.vision.flowDeliveryShop}
                    
                    {/* Vertical Flow arrow connecting down from shop delivery */}
                    <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 flex flex-col items-center z-10">
                      <div className="w-px h-6 bg-accent/40" />
                      <ArrowDown className="w-4 h-4 text-accent/60 -mt-1" />
                    </div>
                  </span>
                </div>
                
                {/* Branching down item */}
                <div className="mt-12 flex items-center justify-center w-full border-t-0 pt-0">
                  <span className="w-full sm:w-auto bg-gradient-to-r from-accent/20 to-brand/20 text-white p-4 rounded-xl border border-accent/30 shadow-lg shadow-accent/5">
                    {t.vision.flowDeliveryFuture}
                  </span>
                </div>
              </div>
            </div>
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
          
          <motion.div 
            {...animations.fadeInUp} transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
              {t.vision.engineFooter}
            </p>
          </motion.div>
        </div>
      </section>

      {/* NEW Section 5: Product Roadmap */}
      <section className="py-24 px-4 border-b border-surface-border overflow-hidden relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div {...animations.fadeInUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm font-medium text-orange-400 mb-6">
              {t.vision.roadmapNote}
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight max-w-4xl mx-auto">
              {t.vision.roadmapHeading}
            </h2>
          </motion.div>

          <motion.div 
            variants={animations.staggerContainer.whileInView}
            initial="initial"
            whileInView="whileInView"
            viewport={animations.staggerContainer.viewport}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Phase 1 */}
            <motion.div 
              variants={animations.itemFadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-8 rounded-2xl bg-surface-card border border-surface-border hover:border-brand/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand/10 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-150" />
              <div className="text-brand font-mono text-sm uppercase tracking-wider mb-2">{t.vision.roadmapPhase} 1</div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.vision.roadmap1Desc}</h3>
              <div className="w-8 h-1 bg-brand/40 rounded-full" />
            </motion.div>

            {/* Phase 2 */}
            <motion.div 
              variants={animations.itemFadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-8 rounded-2xl bg-surface-card border border-surface-border hover:border-accent/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-150" />
              <div className="text-accent font-mono text-sm uppercase tracking-wider mb-2">{t.vision.roadmapPhase} 2</div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.vision.roadmap2Desc}</h3>
              <div className="w-8 h-1 bg-accent/40 rounded-full" />
            </motion.div>

            {/* Phase 3 */}
            <motion.div 
              variants={animations.itemFadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-surface-card to-surface-card/60 border border-surface-border hover:border-white/20 transition-all duration-300 relative overflow-hidden group shadow-[0_0_30px_rgba(255,255,255,0.03)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute right-4 top-4">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-20"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white/10 border border-white/20"></span>
                </span>
              </div>
              <div className="text-white/60 font-mono text-sm uppercase tracking-wider mb-2">{t.vision.roadmapPhase} 3</div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.vision.roadmap3Desc}</h3>
              <div className="w-8 h-1 bg-white/30 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: The Builder (Footer Reference) */}
      <section className="py-24 px-4 border-b border-surface-border">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...animations.fadeInUp}>
            <h2 className="text-2xl font-bold text-white mb-4">{t.vision.builderHeading}</h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-8">
              {t.vision.builderDesc}
            </p>

            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mb-8"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-6 py-2.5 border border-brand/50 text-base font-medium rounded-full text-brand bg-brand/10 hover:bg-brand/20 transition-colors shadow-lg"
              >
                {t.vision.rebrandBtn}
              </button>
            </motion.div>

            <div className="flex items-center justify-center gap-4">
              <Link href="https://softwareguru.in" target="_blank" className="p-3 bg-surface-card border border-surface-border rounded-full hover:border-brand/40 text-muted hover:text-white transition-all group">
                <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link href="https://linkedin.com/in/kirankumar3117" target="_blank" className="p-3 bg-surface-card border border-surface-border rounded-full hover:border-[#0A66C2]/40 text-muted hover:text-[#0A66C2] transition-all group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link href="https://github.com/kirankumar3117" target="_blank" className="p-3 bg-surface-card border border-surface-border rounded-full hover:border-white/40 text-muted hover:text-white transition-all group">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Toast Notification */}
      <AnimatePresence>
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 50, x: "-50%" }}
          className="fixed bottom-6 left-1/2 z-[100] bg-green-500 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-medium"
        >
          <PackageCheck className="w-5 h-5" />
          {t.vision.rebrandSuccess}
        </motion.div>
      )}
      </AnimatePresence>

      {/* Suggestion Modal */}
      <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-surface border border-surface-border rounded-2xl p-6 sm:p-8 w-full max-w-md relative z-10 shadow-2xl"
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-muted hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-bold text-white mb-2">{t.vision.rebrandModalTitle}</h2>
            <p className="text-muted text-sm mb-6">{t.vision.rebrandModalDesc}</p>
            
            <form onSubmit={handleSuggestionSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5 text-left">
                  {t.vision.rebrandInputLabel}
                </label>
                <input
                  type="text"
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  placeholder={t.vision.rebrandInputPlaceholder}
                  required
                  className="w-full bg-surface-card border border-surface-border rounded-xl px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all text-left"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || !suggestion.trim()}
                className="w-full flex items-center justify-center gap-2 bg-brand text-white font-semibold rounded-xl py-3 hover:bg-brand/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t.vision.rebrandSubmitting : (
                  <>
                    <Send className="w-4 h-4" />
                    {t.vision.rebrandSubmit}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
      </AnimatePresence>
    </div>
  );
}
