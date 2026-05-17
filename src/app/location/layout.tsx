import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location & Contact — Chayson's Barbershop",
  description:
    "Find Chayson's Barbershop — get directions, check our hours, and message us on Facebook to book your next cut.",
};

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
