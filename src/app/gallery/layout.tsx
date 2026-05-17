import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Chayson's Barbershop",
  description:
    "Browse our gallery of precision cuts, fades, and styles. See the craft behind every chair at Chayson's Barbershop.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
