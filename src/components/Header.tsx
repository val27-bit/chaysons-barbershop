"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Services", href: "/services" },
  { label: "Location", href: "/location" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  /* ── Mount check for portal ────────────────────── */
  useEffect(() => setMounted(true), []);

  /* ── Track scroll for sticky header shadow ────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── Close menu on route change ────────────────── */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* ── Mobile menu portal (renders outside header) ── */
  const mobileMenu = mounted
    ? createPortal(
        <>
          {/* Overlay — tap anywhere outside to close */}
          <div
            className={`
              fixed inset-0 z-[998] bg-black/40 backdrop-blur-sm
              transition-opacity duration-300 md:hidden
              ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <div
            className={`
              fixed top-0 right-0 z-[999] h-full w-[280px]
              bg-white shadow-2xl
              transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden
              ${menuOpen ? "translate-x-0" : "translate-x-full"}
            `}
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-foreground transition-colors hover:bg-slate-200"
              aria-label="Close menu"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Nav links */}
            <nav className="flex flex-col gap-1 pt-20 px-5">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3.5 rounded-xl
                      text-[15px] font-semibold tracking-wide
                      transition-all duration-200
                      ${isActive
                        ? "bg-accent text-foreground"
                        : "text-text-secondary hover:bg-accent/60 hover:text-foreground active:bg-accent"
                      }
                    `}
                  >
                    {link.label}
                    {isActive && (
                      <span className="ml-auto h-2 w-2 rounded-full bg-foreground" />
                    )}
                  </Link>
                );
              })}

              {/* Divider */}
              <div className="my-3 h-px bg-slate-200" />

              {/* Mobile CTA */}
              <a
                href="https://www.facebook.com/messages/t/100082972645064/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-slate-800 active:scale-95"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.434 5.503 3.678 7.2V22l3.378-1.855A11.3 11.3 0 0 0 12 20.485c5.523 0 10-4.144 10-9.242S17.523 2 12 2Zm1.076 12.449-2.55-2.72-4.975 2.72 5.47-5.806 2.612 2.72 4.914-2.72-5.47 5.806Z" />
                </svg>
                Message Us
              </a>
            </nav>
          </div>
        </>,
        document.body
      )
    : null;

  return (
    <>
      <header
        className={`
          sticky top-0 z-50 w-full
          transition-all duration-300
          ${scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-sm shadow-slate-200/60"
            : "bg-white"
          }
        `}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          {/* ── Logo ─────────────────────────────────── */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.jpg"
              alt="Chayson's Barbershop Logo"
              width={56}
              height={56}
              className="h-14 w-14 rounded-xl object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-base font-bold tracking-tight text-foreground leading-tight">
                Chayson&apos;s
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-metallic">
                Barbershop
              </span>
            </div>
          </Link>

          {/* ── Desktop navigation ───────────────────── */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-4 py-2 text-[13px] font-medium uppercase tracking-[0.1em]
                    rounded-full transition-all duration-200
                    ${isActive
                      ? "text-foreground bg-accent"
                      : "text-text-secondary hover:text-foreground hover:bg-accent/60"
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ── Mobile hamburger button ──────────────── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-[1000] flex h-10 w-10 items-center justify-center rounded-lg hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-[5px]">
              <span
                className={`block h-[2px] w-5 bg-foreground transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-foreground transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-foreground transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile menu renders via portal at document.body level */}
      {mobileMenu}
    </>
  );
}
