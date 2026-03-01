"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();

  if (pathname?.startsWith("/agent")) return null;

  return (
    <footer className="border-t border-surface-border bg-surface-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center relative bg-brand/5 border border-brand/20 block">
                <Image src="/logo.png" alt="Kart Mithra Logo" fill className="object-contain p-1" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Kart<span className="text-brand">Mithra</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: t.footer.linkHome },
                { href: "/customer", label: t.footer.linkCustomers },
                { href: "/merchant", label: t.footer.linkMerchants },
                { href: "/agent/login", label: t.footer.linkAgents },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-brand text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t.footer.getInTouch}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.footer.contactText}
              <br />
              {t.footer.contactCta}
              <a
                href="mailto:kartmithra@gmail.com"
                className="text-brand hover:underline"
              >
                kartmithra@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <p className="text-muted-foreground text-xs">{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
