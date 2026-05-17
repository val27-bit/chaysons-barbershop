"use client";

import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════════
          HERO SECTION
          ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-surface">
        {/* Decorative subtle grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Text content */}
            <ScrollReveal className="order-2 lg:order-1">
              <span className="mb-4 inline-block rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-metallic shadow-sm">
                Premium Barbershop
              </span>
              <h1 className="mt-2 text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                Precision.
                <br />
                <span className="text-metallic">Style.</span>
                <br />
                Confidence.
              </h1>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary sm:mt-6 sm:text-base">
                Expert cuts. Premium service. Step into a modern space dedicated
                to top-tier grooming and walk out looking your absolute best.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                <CTAButton href="https://www.facebook.com/messages/t/100082972645064/">
                  Walk In or Message Us
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </CTAButton>
                <CTAButton href="/gallery" variant="secondary">
                  View Gallery
                </CTAButton>
              </div>
            </ScrollReveal>

            {/* Hero image */}
            <ScrollReveal className="order-1 lg:order-2" delay={200}>
              <div className="relative">
                {/* Decorative ring behind image */}
                <div className="absolute -inset-4 rounded-2xl border border-dashed border-metallic/20" />
                <div className="relative w-full overflow-hidden rounded-2xl shadow-xl shadow-slate-200/50" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/images/hero-interior.jpg"
                    alt="Chayson's Barbershop Interior"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          RECENT CUTS — CURATED TEASER
          ════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Section header */}
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-metallic">
                Our Work
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Recent Cuts
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-text-secondary">
                A selection of our latest work — precision fades, textured crops,
                and classic styles executed with care.
              </p>
            </div>
          </ScrollReveal>

          {/* 6-card grid with hover overlay */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
            {Array.from({ length: 6 }, (_, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <a
                  href="/gallery"
                  className="group relative block w-full overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                  style={{ aspectRatio: "1/1" }}
                >
                  <Image
                    src={`/images/cut${i + 1}.jpg`}
                    alt={`Fresh Cut ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex w-full items-center justify-between p-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-white">
                        View in Gallery
                      </span>
                      <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal>
            <div className="mt-12 text-center">
              <CTAButton href="/gallery" variant="secondary">
                View Full Gallery
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          THE SHOP VIBE
          ════════════════════════════════════════════ */}
      <section id="location" className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Shop image placeholder */}
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-slate-100 to-transparent" />
                <Image
                  src="/images/shop-vibe.jpg"
                  alt="Chayson's Barbershop Interior"
                  width={800}
                  height={600}
                  className="relative w-full h-auto rounded-2xl shadow-lg shadow-slate-200/50"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            {/* Text content */}
            <ScrollReveal delay={150}>
              <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-metallic">
                The Space
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                The Shop Vibe
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                Step into a space where every detail is intentional. Our shop
                blends modern industrial aesthetics with a relaxed, welcoming
                atmosphere — clean stations, premium tools, and an attention to
                hygiene that speaks for itself.
              </p>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                Whether you&apos;re here for a quick lineup or a full
                transformation, you&apos;ll leave looking and feeling your
                absolute best.
              </p>

              {/* Feature highlights */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: "✦", text: "Premium Tools" },
                  { icon: "◈", text: "Sanitized Stations" },
                  { icon: "▣", text: "Walk-Ins Welcome" },
                  { icon: "◉", text: "Relaxed Atmosphere" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm text-metallic">
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
