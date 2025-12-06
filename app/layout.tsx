import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LM Studio & Musikkservice | Din spesialist på trekkspill og toradere",
  description:
    "LM Studio & Musikkservice tilbyr salg, service, kurs og studioinnspilling for trekkspill og toradere i Brumunddal. Profesjonell musikkservice med personlig touch.",
  keywords: [
    "trekkspill",
    "torader",
    "musikkstudio",
    "Brumunddal",
    "service",
    "kurs",
    "PA-utleie",
    "MIDI",
  ],
  authors: [{ name: "LM Studio & Musikkservice" }],
  openGraph: {
    title: "LM Studio & Musikkservice",
    description: "Din spesialist på trekkspill, toradere og musikk",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${inter.variable} ${manrope.variable} antialiased bg-primary-dark text-text-light overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
