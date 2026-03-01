"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Store, CheckCircle, Clock, ListChecks } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function AnimatedWireframe() {
  const { t } = useLanguage();

  // Animation Wireframe State
  const [animStage, setAnimStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimStage((prev) => (prev + 1) % 5);
    }, 2500); // 2.5s per stage
    return () => clearInterval(timer);
  }, []);

  const animations = {
    fadeInUp: {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.7 },
    },
  };

  return (
    <section className="py-24 px-4 bg-surface-card/20 border-b border-surface-border overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-brand/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div {...animations.fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            The Experience
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Customer orders from mobile. Shopkeeper accepts. You don't wait.
          </p>
        </motion.div>

        <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mx-auto md:h-[400px] gap-8 md:gap-0">
          {/* Left Side: Customer Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-72 h-[380px] bg-surface rounded-[2rem] border-8 border-surface-card p-4 relative shadow-2xl flex flex-col pt-8 z-10 mx-auto md:mx-0"
          >
            {/* Dynamic island */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-surface-card rounded-b-xl" />

            <div className="flex items-center gap-2 mb-6">
              <Smartphone className="w-5 h-5 text-brand" />
              <span className="text-sm font-semibold text-white">
                {t.vision.animCustomerApp}
              </span>
            </div>

            <div className="flex-1 space-y-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex gap-3 items-center bg-surface-card/50 p-2 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-card" />
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-full bg-surface-card rounded-full" />
                    <div className="h-2 w-2/3 bg-surface-card rounded-full" />
                  </div>
                </div>
              ))}
            </div>

            <AnimatePresence mode="popLayout">
              {animStage >= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-4 p-3 bg-brand/20 border border-brand/50 rounded-xl text-center shadow-[0_0_15px_rgba(255,165,0,0.3)] mb-4"
                >
                  <span className="text-brand font-medium tracking-wide">
                    {t.vision.animOrderPlaced}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Center Connection Line */}
          <div className="flex-1 flex flex-col md:flex-row items-center justify-center relative w-full md:w-auto py-8 md:py-0">
            {/* Horizontal connect line for desktop */}
            <div className="hidden md:block w-full h-1 bg-surface-border rounded-full relative overflow-hidden">
              <AnimatePresence>
                {animStage === 1 && (
                  <motion.div
                    initial={{ left: "-10%" }}
                    animate={{ left: "100%" }}
                    transition={{ duration: 2.5, ease: "linear" }}
                    className="absolute top-0 w-24 h-full bg-gradient-to-r from-transparent via-brand to-transparent"
                  />
                )}
              </AnimatePresence>
            </div>
            {/* Vertical connect line for mobile */}
            <div className="block md:hidden w-1 h-16 bg-surface-border rounded-full relative overflow-hidden">
              <AnimatePresence>
                {animStage === 1 && (
                  <motion.div
                    initial={{ top: "-10%" }}
                    animate={{ top: "100%" }}
                    transition={{ duration: 2.5, ease: "linear" }}
                    className="absolute left-0 w-full h-8 bg-gradient-to-b from-transparent via-brand to-transparent"
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Zero Wait Tag */}
            <AnimatePresence>
              {animStage >= 4 && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute z-20 md:bottom-20 bg-green-500/10 border border-green-500/30 text-green-400 px-6 py-3 rounded-full font-bold shadow-[0_0_30px_rgba(34,197,94,0.3)] flex items-center gap-2 backdrop-blur-md whitespace-nowrap"
                >
                  <Clock className="w-5 h-5" />
                  {t.vision.animZeroWait}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Side: Merchant Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-sm md:w-80 h-[380px] bg-surface-card rounded-2xl border border-surface-border relative shadow-2xl flex flex-col overflow-hidden z-10 mx-auto md:mx-0"
          >
            <div className="h-14 border-b border-surface-border flex items-center px-4 gap-3 bg-surface/50">
              <Store className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-white">
                {t.vision.animMerchantApp}
              </span>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-center gap-4">
              <AnimatePresence mode="popLayout">
                {animStage >= 2 && animStage < 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, height: 0, margin: 0 }}
                    className="bg-accent/10 border border-accent/30 p-4 rounded-xl relative overflow-hidden"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <span className="text-white font-medium">
                        {t.vision.animNewOrder}
                      </span>
                    </div>
                    {animStage === 3 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-3 text-sm text-accent flex items-center gap-2"
                      >
                        <ListChecks className="w-4 h-4" />
                        {t.vision.animAccepting}
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {animStage >= 4 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-500/10 border border-green-500/30 p-6 rounded-xl flex flex-col items-center justify-center text-center gap-3 h-full"
                  >
                    <CheckCircle className="w-12 h-12 text-green-400" />
                    <span className="text-green-400 font-bold text-lg">
                      {t.vision.animReady}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Dummy rows */}
              <div className="h-10 w-full bg-surface rounded-xl opacity-50" />
              <div className="h-10 w-full bg-surface rounded-xl opacity-30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
