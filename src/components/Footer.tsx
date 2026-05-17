import React from "react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* ── Address ──────────────────────────── */}
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-foreground">
              Location
            </h4>
            <div className="space-y-1 text-sm leading-relaxed text-text-secondary">
              <p>1319 Visaya St., Bo. Nuevo</p>
              <p>Guadalupe, Makati City</p>
              <p>Metro Manila, 1214</p>
              <p className="mt-2">
                <a href="tel:09453578178" className="font-medium text-foreground transition-colors hover:text-metallic">0945 357 8178</a>
              </p>
            </div>
          </div>

          {/* ── Hours ────────────────────────────── */}
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-foreground">
              Operating Hours
            </h4>
            <div className="space-y-1 text-sm leading-relaxed text-text-secondary">
              <p>Open Daily: <span className="text-foreground font-medium">10:00 AM – 9:00 PM</span></p>
            </div>
          </div>

          {/* ── Connect ──────────────────────────── */}
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-foreground">
              Connect
            </h4>
            <a
              href="https://www.facebook.com/messages/t/100082972645064/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5"
            >
              <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.434 5.503 3.678 7.2V22l3.378-1.855A11.3 11.3 0 0 0 12 20.485c5.523 0 10-4.144 10-9.242S17.523 2 12 2Zm1.076 12.449-2.55-2.72-4.975 2.72 5.47-5.806 2.612 2.72 4.914-2.72-5.47 5.806Z" />
              </svg>
              Message on Facebook
            </a>
          </div>
        </div>

        {/* ── Bottom bar ─────────────────────────── */}
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-metallic">
            &copy; {new Date().getFullYear()}{" "}Chayson&apos;s Barbershop. All rights reserved.
          </p>
          <p className="text-xs text-metallic">
            Precision. Style. Confidence.
          </p>
        </div>
      </div>
    </footer>
  );
}
