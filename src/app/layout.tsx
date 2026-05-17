import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chayson's Barbershop — Precision. Style. Confidence.",
  description:
    "Premium barbershop delivering sharp, modern cuts in a clean and professional environment. Walk in or message us today.",
  keywords: ["barbershop", "haircut", "fresh cut", "men's grooming", "Chayson"],
  openGraph: {
    title: "Chayson's Barbershop",
    description: "Precision. Style. Confidence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-foreground font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
