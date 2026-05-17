"use client";

import Image from "next/image";
import { useState } from "react";
import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";
import Lightbox from "@/components/Lightbox";

/* Varied aspect ratios to create an organic masonry feel */
const ASPECT_RATIOS = [
  "3/4",
  "1/1",
  "4/5",
  "3/4",
  "1/1",
  "4/3",
  "4/5",
  "3/4",
  "1/1",
  "3/4",
  "4/5",
  "1/1",
];

const TOTAL_IMAGES = 12;

const IMAGES = Array.from({ length: TOTAL_IMAGES }, (_, i) => ({
  src: `/images/cut${i + 1}.jpg`,
  alt: `Haircut Style ${i + 1}`,
}));

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* ── Page header ─────────────────────────── */}
          <ScrollReveal>
            <div className="mb-14 text-center">
              <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-metallic">
                Our Work
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Gallery
              </h1>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-text-secondary">
                Every cut tells a story. Browse our work — from precision fades
                to textured crops, classic pomps to modern styles.
              </p>
            </div>
          </ScrollReveal>

          {/* ── Masonry grid ────────────────────────── */}
          <div className="masonry-grid">
            {IMAGES.map((img, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div
                  className="group relative w-full cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                  style={{ aspectRatio: ASPECT_RATIOS[i] }}
                  onClick={() => setLightboxIndex(i)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-75">
                      <svg className="h-5 w-5 text-foreground" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* ── Bottom CTA ──────────────────────────── */}
          <ScrollReveal>
            <div className="mt-16 text-center">
              <p className="mb-4 text-sm text-text-secondary">
                Want a specific style? Send us a photo.
              </p>
              <CTAButton href="https://www.facebook.com/messages/t/100082972645064/">
                Message Us on Facebook
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

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={IMAGES}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
