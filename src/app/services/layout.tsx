import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing — Chayson's Barbershop",
  description:
    "Explore our full menu of haircuts, beard grooming, and combo packages. Transparent pricing, premium results.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
