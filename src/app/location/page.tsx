"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Hours data ───────────────────────────────── */
const HOURS = [
  { day: "Monday", time: "10:00 AM – 9:00 PM" },
  { day: "Tuesday", time: "10:00 AM – 9:00 PM" },
  { day: "Wednesday", time: "10:00 AM – 9:00 PM" },
  { day: "Thursday", time: "10:00 AM – 9:00 PM" },
  { day: "Friday", time: "10:00 AM – 9:00 PM" },
  { day: "Saturday", time: "10:00 AM – 9:00 PM" },
  { day: "Sunday", time: "10:00 AM – 9:00 PM" },
];

export default function LocationPage() {
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(new Date().toLocaleDateString("en-US", { weekday: "long" }));
  }, []);

  return (
    <section className="bg-surface py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        {/* ── Page heading ────────────────────────── */}
        <ScrollReveal>
          <div className="mb-10 text-center sm:mb-14">
            <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-metallic">
              Find Us
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Location & Contact
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-text-secondary sm:text-base">
              We&apos;re easy to find and always ready to serve. Walk in anytime
              or reach out before your visit.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Two-column layout ───────────────────── */}
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ━━ Column 1: Info ━━━━━━━━━━━━━━━━━━━━━ */}
          <div className="space-y-6 sm:space-y-8">
            {/* Address */}
            <ScrollReveal>
              <div className="rounded-2xl bg-white p-5 shadow-sm shadow-slate-200/60 transition-all duration-200 hover:shadow-md sm:p-6 md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-metallic">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </span>
                  <h2 className="text-base font-bold text-foreground sm:text-lg">
                    Our Address
                  </h2>
                </div>
                <div className="space-y-1 pl-[52px] text-sm leading-relaxed text-foreground sm:text-base">
                  <p className="font-semibold">1319 Visaya St., Bo. Nuevo</p>
                  <p className="text-text-secondary">Guadalupe, Makati City</p>
                  <p className="text-text-secondary">Metro Manila, 1214</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Phone */}
            <ScrollReveal delay={80}>
              <div className="rounded-2xl bg-white p-5 shadow-sm shadow-slate-200/60 transition-all duration-200 hover:shadow-md sm:p-6 md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-metallic">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </span>
                  <h2 className="text-base font-bold text-foreground sm:text-lg">
                    Phone
                  </h2>
                </div>
                <div className="pl-[52px]">
                  <a
                    href="tel:09453578178"
                    className="text-sm font-semibold text-foreground transition-colors hover:text-metallic sm:text-base"
                  >
                    0945 357 8178
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Operating Hours */}
            <ScrollReveal delay={160}>
              <div className="rounded-2xl bg-white p-5 shadow-sm shadow-slate-200/60 transition-all duration-200 hover:shadow-md sm:p-6 md:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-metallic">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </span>
                  <h2 className="text-base font-bold text-foreground sm:text-lg">
                    Operating Hours
                  </h2>
                </div>
                <div className="space-y-0 pl-0 sm:pl-[52px]">
                  {HOURS.map((row) => {
                    const isToday = row.day === today;
                    return (
                      <div
                        key={row.day}
                        className={`
                          flex items-center justify-between rounded-lg px-3 py-2 sm:py-2.5
                          transition-colors duration-150
                          ${isToday ? "bg-accent" : "hover:bg-accent/50"}
                        `}
                      >
                        <span
                          className={`text-xs sm:text-sm ${
                            isToday
                              ? "font-bold text-foreground"
                              : "font-medium text-text-secondary"
                          }`}
                        >
                          {row.day}
                          {isToday && (
                            <span className="ml-2 inline-block rounded-full bg-foreground px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white sm:text-[10px]">
                              Today
                            </span>
                          )}
                        </span>
                        <span
                          className={`text-xs sm:text-sm ${
                            isToday
                              ? "font-bold text-foreground"
                              : "font-medium text-foreground"
                          }`}
                        >
                          {row.time}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            {/* Messenger CTA */}
            <ScrollReveal delay={240}>
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-5 text-center transition-all duration-200 hover:shadow-md sm:p-6 md:p-8">
                <h3 className="mb-2 text-sm font-bold text-foreground sm:text-base">
                  Got a question? Need availability?
                </h3>
                <p className="mb-5 text-xs leading-relaxed text-text-secondary sm:mb-6 sm:text-sm">
                  Shoot us a message and we&apos;ll get back to you fast.
                </p>
                <CTAButton href="https://www.facebook.com/messages/t/100082972645064/">
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.434 5.503 3.678 7.2V22l3.378-1.855A11.3 11.3 0 0 0 12 20.485c5.523 0 10-4.144 10-9.242S17.523 2 12 2Zm1.076 12.449-2.55-2.72-4.975 2.72 5.47-5.806 2.612 2.72 4.914-2.72-5.47 5.806Z" />
                  </svg>
                  Message Us on Messenger
                </CTAButton>
              </div>
            </ScrollReveal>
          </div>

          {/* ━━ Column 2: Visuals ━━━━━━━━━━━━━━━━━━ */}
          <div className="space-y-6">
            {/* Map embed */}
            <ScrollReveal delay={100}>
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm shadow-slate-200/60 transition-all duration-200 hover:shadow-md">
                <iframe
                  src="https://www.google.com/maps?q=Chayson's+Barbershop+1319+Visaya+St+Guadalupe+Makati+City&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, aspectRatio: "4/3" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chayson's Barbershop Location"
                  className="w-full"
                />
                {/* Map caption bar */}
                <a
                  href="https://maps.google.com/?q=1319+Visaya+St+Bo+Nuevo+Guadalupe+Makati+City+Metro+Manila"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border-t border-slate-100 px-4 py-3 transition-colors hover:bg-accent sm:px-5 sm:py-3.5"
                >
                  <svg
                    className="h-4 w-4 text-metallic"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                    />
                  </svg>
                  <span className="text-xs font-medium text-text-secondary">
                    Get directions via Google Maps →
                  </span>
                </a>
              </div>
            </ScrollReveal>

            {/* Storefront image */}
            <ScrollReveal delay={200}>
              <div className="relative w-full overflow-hidden rounded-2xl shadow-sm shadow-slate-200/60 transition-all duration-300 hover:shadow-lg" style={{ aspectRatio: "1/1" }}>
                <Image
                  src="/images/store-front.jpg"
                  alt="Chayson's Barbershop Storefront"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
