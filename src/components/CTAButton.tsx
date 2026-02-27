"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CTAButtonProps {
  label: string;
  href?: string;
  variant?: "primary" | "accent";
  onClick?: () => void;
}

export default function CTAButton({
  label,
  href,
  variant = "primary",
  onClick,
}: CTAButtonProps) {
  const gradientClass =
    variant === "primary"
      ? "from-brand to-brand-dark hover:from-brand-light hover:to-brand"
      : "from-accent to-accent-dark hover:from-accent-light hover:to-accent";

  const shadowClass =
    variant === "primary" ? "shadow-brand/20" : "shadow-accent/20";

  const content = (
    <motion.span
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r ${gradientClass} text-white font-semibold text-sm shadow-lg ${shadowClass} cursor-pointer transition-all duration-300`}
    >
      {label}
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </motion.span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return <button onClick={onClick}>{content}</button>;
}
