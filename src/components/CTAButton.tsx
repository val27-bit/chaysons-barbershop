import React from "react";
import Link from "next/link";

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

/**
 * Reusable CTA button with two visual variants.
 * Renders as a Next.js Link when `href` is provided, otherwise a <button>.
 */
export default function CTAButton({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: CTAButtonProps) {
  const base = `
    inline-flex items-center justify-center gap-2
    px-8 py-3.5 rounded-full
    text-sm font-semibold tracking-wide uppercase
    transition-all duration-300 ease-out
    cursor-pointer
  `;

  const variants = {
    primary: `
      bg-foreground text-white
      hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/10
      hover:-translate-y-0.5
      active:translate-y-0
    `,
    secondary: `
      bg-transparent text-foreground
      border-2 border-foreground/15
      hover:border-foreground/40 hover:shadow-lg hover:shadow-slate-900/5
      hover:-translate-y-0.5
      active:translate-y-0
    `,
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
