"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  useLanguage,
  localeLabels,
  localeFullNames,
  type Locale,
} from "@/i18n/LanguageProvider";
import { Globe } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();
  const pathname = usePathname();

  if (pathname?.startsWith("/agent")) return null;

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/customer", label: t.nav.customer },
    { href: "/merchant", label: t.nav.merchant },
    { href: "/agent/login", label: t.nav.agent },
  ];

  const locales: Locale[] = ["en", "te", "hi"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center transition-transform group-hover:scale-110 relative bg-brand/5 border border-brand/20">
              <Image src="/logo.png" alt="Kart Mithra Logo" fill className="object-contain p-1" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Kart<span className="text-brand">Mithra</span>
            </span>
          </Link>

          {/* Desktop nav + Language Switcher */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted hover:text-brand rounded-lg transition-colors duration-200 hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="relative ml-2">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-muted hover:text-brand rounded-lg transition-colors duration-200 hover:bg-white/5 border border-surface-border"
                aria-label="Switch language"
              >
                <Globe className="w-4 h-4" />
                <span>{localeLabels[locale]}</span>
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-40 rounded-xl border border-surface-border bg-surface-card shadow-xl overflow-hidden"
                  >
                    {locales.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          setLocale(loc);
                          setLangOpen(false);
                        }}
                        className={`w-full px-4 py-2.5 text-left text-sm flex items-center justify-between transition-colors ${
                          locale === loc
                            ? "bg-brand/10 text-brand"
                            : "text-muted hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>{localeFullNames[loc]}</span>
                        <span className="text-xs opacity-60">
                          {localeLabels[loc]}
                        </span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile: Language + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-2 py-1.5 text-xs font-medium text-muted hover:text-brand rounded-lg transition-colors border border-surface-border"
                aria-label="Switch language"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{localeLabels[locale]}</span>
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-36 rounded-xl border border-surface-border bg-surface-card shadow-xl overflow-hidden z-50"
                  >
                    {locales.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          setLocale(loc);
                          setLangOpen(false);
                        }}
                        className={`w-full px-3 py-2 text-left text-sm flex items-center justify-between transition-colors ${
                          locale === loc
                            ? "bg-brand/10 text-brand"
                            : "text-muted hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>{localeFullNames[loc]}</span>
                        <span className="text-xs opacity-60">
                          {localeLabels[loc]}
                        </span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-foreground"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-foreground"
              />
              <motion.span
                animate={
                  isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                }
                className="block w-6 h-0.5 bg-foreground"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-surface-card border-b border-surface-border"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-muted hover:text-brand hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
