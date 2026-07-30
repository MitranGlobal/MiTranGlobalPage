import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";
import Lightbox from "@/components/ui/Lightbox";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "MiTran Global — Positivity Framework™ for Teens",
  description:
    "A positive teen today, a confident leader tomorrow. Science-backed mindset, life skills, and leadership programmes for teens 11–17.",
  openGraph: {
    title: "MiTran Global — Positivity Framework™",
    description:
      "Consistently imparting positivity — the mindset and skills every teen needs to thrive.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen antialiased">
        <Nav />
        <main className="relative">{children}</main>
        <Footer />
        <Lightbox />
      </body>
    </html>
  );
}
