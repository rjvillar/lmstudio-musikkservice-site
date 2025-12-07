import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/i18n/request";
// @ts-expect-error - CSS imports don't have type declarations
import "../globals.css";

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
  title: "Trekkspill og musikkstudio | LM Studio & Musikkservice",
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
    "trekkspill reparasjon",
    "musikkutstyr",
    "lydteknikk",
    "digitalisering musikk",
    "trekkspill Norge",
    "musikkservice Hedmark",
    "toradere salg",
    "Moelv",
    "Ringsaker",
  ],
  authors: [{ name: "LM Studio & Musikkservice" }],
  creator: "LM Studio & Musikkservice",
  publisher: "LM Studio & Musikkservice",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Trekkspill og musikkstudio | LM Studio & Musikkservice",
    description:
      "Salg, service, kurs og studioinnspilling for trekkspill og toradere i Brumunddal. Profesjonell musikkservice siden 2001.",
    url: "https://lmstudio-musikkservice-site.vercel.app",
    siteName: "LM Studio & Musikkservice",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "LM Studio & Musikkservice - Din spesialist på trekkspill og toradere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trekkspill og musikkstudio | LM Studio & Musikkservice",
    description:
      "Salg, service, kurs og studioinnspilling for trekkspill og toradere i Brumunddal. Profesjonell musikkservice siden 2001.",
    images: ["/images/preview.png"],
  },
  alternates: {
    canonical: "https://lmstudio-musikkservice-site.vercel.app",
  },
  category: "Music",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!locales.includes(locale as "no" | "en")) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="scroll-smooth overflow-x-hidden">
      <body
        className={`${inter.variable} ${manrope.variable} antialiased bg-primary-dark text-text-light overflow-x-hidden`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
