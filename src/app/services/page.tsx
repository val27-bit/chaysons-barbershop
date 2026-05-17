"use client";

import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Service data ─────────────────────────────── */
interface ServiceItem {
  name: string;
  description: string;
  price: string;
}

interface ServiceCategory {
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

const SERVICES: ServiceCategory[] = [
  {
    title: "Haircut Service",
    subtitle: "Precision cuts tailored to your style",
    items: [
      {
        name: "Classic Haircut / Long Trim",
        description: "Tailored cut with finishing style — sharp, clean, and always on point.",
        price: "₱350",
      },
      {
        name: "Fade / Taper",
        description: "Smooth, precise blending from skin to length for a seamless finish.",
        price: "₱250",
      },
      {
        name: "Kids Cut",
        description: "Tailored cut with finishing style — same precision, just smaller.",
        price: "₱250",
      },
    ],
  },
  {
    title: "Beard & Grooming",
    subtitle: "Detail work for a sharper, cleaner look",
    items: [
      {
        name: "Beard Trim",
        description: "Clean and shaped to fit your face — defined lines, even length.",
        price: "₱120",
      },
      {
        name: "Beard Shave & Face, Head Massage",
        description: "Full razor shave with a relaxing face and head massage to unwind.",
        price: "₱170",
      },
      {
        name: "Beard Line-Up",
        description: "Precise detailing for a sharper, more defined look.",
        price: "₱150",
      },
    ],
  },
  {
    title: "Packages",
    subtitle: "Best value — bundle and save",
    items: [
      {
        name: "Haircut & Shave",
        description: "Fresh cut paired with a clean shave — the essentials, handled.",
        price: "₱400",
      },
      {
        name: "Haircut, Shave, Face, Head & Back Massage",
        description: "The full experience — walk out looking and feeling brand new.",
        price: "₱500",
      },
    ],
  },
];

/* ── Also available services ─────────────────── */
const ALSO_AVAILABLE = ["Tattoo", "Perm", "Piercing", "Braiding"];

/* ── Hair products ───────────────────────────── */
const PRODUCTS = ["Pomade", "Sea Salt Spray", "Texture Powder"];

export default function ServicesPage() {
  return (
    <>
      {/* ════════════════════════════════════════════
          HEADER IMAGE
          ════════════════════════════════════════════ */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 pt-6 pb-0 sm:px-5 lg:px-8 sm:pt-8">
          <ScrollReveal>
            <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-lg shadow-slate-200/50" style={{ aspectRatio: "16/7" }}>
              <Image
                src="/images/services-header.jpg"
                alt="Chayson's Barbershop Wall Mural"
                fill
                className="object-cover object-center"
                priority
                quality={90}
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          PAGE HEADING
          ════════════════════════════════════════════ */}
      <section className="bg-surface pb-4 pt-10 sm:pt-14">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-5 lg:px-8">
          <ScrollReveal>
            <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-metallic">
              What We Offer
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Services & Pricing
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-text-secondary sm:text-base">
              Transparent pricing, no surprises. Every service includes a
              consultation so we nail the look you&apos;re after.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SERVICE MENU
          ════════════════════════════════════════════ */}
      <section className="bg-surface pb-10 pt-8 sm:pt-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-5 lg:px-8">
          {SERVICES.map((category, catIdx) => (
            <ScrollReveal key={category.title} delay={catIdx * 100}>
              <div className={catIdx > 0 ? "mt-12 sm:mt-16" : ""}>
                {/* Category header */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <h2 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl md:text-3xl whitespace-nowrap">
                      {category.title}
                    </h2>
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>
                  <p className="mt-1 text-sm text-text-secondary">
                    {category.subtitle}
                  </p>
                </div>

                {/* Service items */}
                <div className="space-y-1">
                  {category.items.map((item, itemIdx) => (
                    <ScrollReveal key={item.name} delay={itemIdx * 60}>
                      <div className="group rounded-xl px-3 py-4 transition-all duration-200 hover:bg-white hover:shadow-md hover:shadow-slate-200/50 sm:px-5 sm:py-5">
                        {/* Top row: name + price */}
                        <div className="flex items-baseline justify-between gap-2 sm:gap-4">
                          <h3 className="text-sm font-bold text-foreground sm:text-base">
                            {item.name}
                          </h3>
                          {/* Dotted filler - hidden on very small screens */}
                          <div className="hidden flex-1 border-b border-dotted border-slate-300 translate-y-[-4px] sm:block" />
                          <span className="text-base font-extrabold tracking-tight text-foreground sm:text-lg shrink-0">
                            {item.price}
                          </span>
                        </div>
                        {/* Description */}
                        <p className="mt-1 text-xs leading-relaxed text-text-secondary sm:mt-1.5 sm:text-sm">
                          {item.description}
                        </p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* ── Also Available ────────────────────── */}
          <ScrollReveal>
            <div className="mt-12 sm:mt-16">
              <div className="mb-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <h2 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl md:text-3xl whitespace-nowrap">
                    Also Available
                  </h2>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>
                <p className="mt-1 text-sm text-text-secondary">
                  By appointment only — please book in advance
                </p>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {ALSO_AVAILABLE.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-foreground shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 sm:px-5 sm:py-2.5 sm:text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ── Hair Products ────────────────────── */}
          <ScrollReveal>
            <div className="mt-12 sm:mt-16">
              <div className="mb-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <h2 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl md:text-3xl whitespace-nowrap">
                    Hair Products
                  </h2>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>
                <p className="mt-1 text-sm text-text-secondary">
                  Premium styling products available in-shop
                </p>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {PRODUCTS.map((product) => (
                  <span
                    key={product}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-foreground shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 sm:px-5 sm:py-2.5 sm:text-sm"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ── Bottom CTA ────────────────────────── */}
          <ScrollReveal>
            <div className="mt-12 sm:mt-16 text-center">
              <div className="mx-auto mb-6 max-w-md rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-4 sm:px-6 sm:py-5">
                <p className="text-xs leading-relaxed text-text-secondary sm:text-sm">
                  Walk-ins are always welcome — or shoot us a message to check
                  availability and book your slot.
                </p>
              </div>
              <CTAButton href="https://www.facebook.com/messages/t/100082972645064/">
                Walk In or Message Us to Book
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
    </>
  );
}
