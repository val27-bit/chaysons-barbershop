"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** If true, element gently floats after reveal (great for cards/boxes) */
  float?: boolean;
}

/**
 * Wraps children in a fade-in + slide-up animation triggered on scroll into view.
 * Optionally applies a subtle continuous floating effect after reveal.
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  float = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        animation: isVisible && float
          ? `float 4s ease-in-out ${1 + delay / 1000}s infinite`
          : undefined,
      }}
    >
      {children}
    </div>
  );
}
