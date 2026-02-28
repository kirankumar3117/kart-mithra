"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeatureCard from "@/components/FeatureCard";
import CTAButton from "@/components/CTAButton";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Store, User, Phone, X, CheckCircle2, Loader2, ChevronDown } from "lucide-react";

export default function MerchantPage() {
  const { t } = useLanguage();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");
  const [merchantName, setMerchantName] = useState("");
  const [shopType, setShopType] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const shopTypes = ["Groceries", "Juice Shop", "Biryani Shop", "Electrical Shop", "Other"];

  const handleOpenWaitlist = () => {
    setIsDrawerOpen(true);
    setFormState("idle");
    setMerchantName("");
    setShopType("");
    setPhone("");
    setErrorMsg("");
  };

  const handleCloseWaitlist = () => {
    setIsDrawerOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!merchantName || !shopType || !phone) {
      setErrorMsg("Please fill in all fields.");
      return;
    }
    
    setErrorMsg("");
    setFormState("loading");

    // Mock API simulation
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      title: t.merchant.feature1Title,
      description: t.merchant.feature1Desc,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>
      ),
      title: t.merchant.feature2Title,
      description: t.merchant.feature2Desc,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
      ),
      title: t.merchant.feature3Title,
      description: t.merchant.feature3Desc,
    },
  ];

  const stats = [
    { value: t.merchant.stat1Value, label: t.merchant.stat1Label },
    { value: t.merchant.stat2Value, label: t.merchant.stat2Label },
    { value: t.merchant.stat3Value, label: t.merchant.stat3Label },
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
              {t.merchant.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight"
          >
            {t.merchant.heroHeadline1}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              {t.merchant.heroHeadlineHighlight}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed"
          >
            {t.merchant.heroSubtext}
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
              {t.merchant.ctaHeading}
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t.merchant.ctaSubtext}
            </p>
            <CTAButton label={t.merchant.ctaButton} variant="accent" onClick={handleOpenWaitlist} />
          </motion.div>
        </div>
      </section>

      {/* Waitlist Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseWaitlist}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Join Waitlist</h2>
                  <button 
                    onClick={handleCloseWaitlist}
                    className="p-2 text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {formState === "success" ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in slide-in-from-bottom-4">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Success!</h3>
                    <p className="text-gray-600 max-w-xs leading-relaxed">
                      Thank you for your interest, {merchantName}! An agent will visit your shop soon to complete the onboarding process.
                    </p>
                    <button 
                      onClick={handleCloseWaitlist}
                      className="mt-8 px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-xl hover:bg-gray-200 transition-colors w-full"
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {errorMsg && (
                      <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-100">
                        {errorMsg}
                      </div>
                    )}
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-0.5">Your Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          value={merchantName}
                          onChange={(e) => setMerchantName(e.target.value)}
                          className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-gray-900 outline-none"
                          placeholder="e.g. Ramesh Kumar"
                          disabled={formState === "loading"}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-0.5">Type of Shop</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Store className="h-5 w-5 text-gray-400" />
                        </div>
                        <select
                          value={shopType}
                          onChange={(e) => setShopType(e.target.value)}
                          className="block w-full pl-11 pr-10 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-gray-900 outline-none appearance-none"
                          disabled={formState === "loading"}
                        >
                          <option value="" disabled>Select shop type</option>
                          {shopTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-0.5">Mobile Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-gray-900 outline-none"
                          placeholder="10-digit mobile number"
                          maxLength={10}
                          disabled={formState === "loading"}
                        />
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={formState === "loading"}
                        className="w-full bg-accent text-white py-4 px-6 rounded-2xl font-bold text-lg flex items-center justify-center hover:bg-accent-dark transition-colors shadow-lg shadow-accent/20 disabled:opacity-75 relative overflow-hidden group"
                      >
                        {formState === "loading" ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Submit Request"
                        )}
                        <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 ease-out" />
                      </button>
                      <p className="text-center text-xs text-gray-500 mt-4 leading-relaxed px-2">
                        By submitting, you agree to allow an agent to visit your shop using the provided information.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
