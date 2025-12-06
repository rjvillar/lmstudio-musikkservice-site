"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Container, SectionHeading } from "@/app/components/ui";
import { businessInfo } from "@/app/lib/data";

/**
 * About Section Component - Complete Redesign
 *
 * Structure:
 * 1. About Us Introduction (Company overview)
 * 2. Three Value Pillars (Cards with icons)
 * 3. Studio Story (Historical narrative with dual slideshows)
 * 4. Team Section (Geir & Eva with shared image)
 *
 * Design: Scandinavian minimalism with clean spacing and modern typography
 * Features: Independent randomized slideshows with fade transitions
 */

// Story images for slideshows
const storyImages = [
  "/images/story/bjorn.png",
  "/images/story/geir-harry.png",
  "/images/story/lillian-else.png",
  "/images/story/mix-cd.png",
  "/images/story/odd.png",
  "/images/story/roar.png",
  "/images/story/tore-kjell.png",
  "/images/story/tore.png",
  "/images/story/toril-tone.png",
];

// Shuffle array helper
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Slideshow Component
 * Independent image rotator with fade transitions
 * Uses client-side only initialization to avoid hydration mismatch
 */
function Slideshow({ delay = 0 }: { delay?: number }) {
  const [mounted, setMounted] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Initialize only on client-side to avoid hydration mismatch
  useEffect(() => {
    setImages(shuffleArray(storyImages));
    setMounted(true);
  }, []);

  // Auto-advance slideshow
  useEffect(() => {
    if (!mounted || images.length === 0) return;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 4000); // Change image every 4 seconds

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [mounted, images.length, delay]);

  // Show placeholder during SSR and initial client render
  if (!mounted || images.length === 0) {
    return <div className="absolute inset-0 bg-secondary-dark" />;
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt="LM Studio historie"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
          {/* Subtle overlay for better visual hierarchy */}
          <div className="absolute inset-0 bg-linear-to-br from-primary-dark/10 to-primary-dark/30" />
        </div>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <section
      id="om-oss"
      className="py-24 md:py-32 bg-off-white"
      aria-labelledby="about-heading"
    >
      <Container>
        {/* Visual Divider */}
        <div className="flex justify-center mb-12" aria-hidden="true">
          <div className="w-16 h-1 bg-accent rounded-full" />
        </div>

        <SectionHeading
          title="Om oss"
          subtitle="Din spesialist på trekkspill, toradere og musikk siden 2001"
          alignment="center"
        />

        {/* 
          SECTION 1: About Us Introduction 
          Optimized for readability and Scandinavian minimalism
        */}
        <div className="max-w-4xl mx-auto mt-16 space-y-6 text-primary-dark/80 leading-relaxed text-center">
          <p className="text-lg">
            <strong className="text-primary-dark">
              LM Studio & Musikkservice
            </strong>{" "}
            ligger mellom Brumunddal og Moelv, og leverer alt innen trekkspill,
            toradere og musikk-tekniske tjenester. Siden 2001 har vi hjulpet
            både entusiaster og profesjonelle med alt fra kjøp og service til
            innspilling og lydteknikk.
          </p>

          <p>
            Vi tilbyr et komplett spekter av tjenester – fra salg av nye og
            brukte instrumenter til verksted, kurs, studio, PA-utleie og
            digitalisering. Gjennom direkte import kan vi tilby
            konkurransedyktige priser uten å gå på kompromiss med kvalitet.
          </p>

          <p>
            Personlig oppfølging, pålitelig service og riktig pris for riktig
            kvalitet. Vi tar imot besøkende etter avtale hele året og tilpasser
            våre tjenester til dine behov.
          </p>
        </div>

        {/* 
          SECTION 2: Three Value Pillars 
          Minimal inline design
        */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessInfo.valueProps.map((prop, index) => (
              <div key={index} className="text-center space-y-3">
                {/* Icon */}
                <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 flex items-center justify-center">
                  <ValuePropIcon index={index} />
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-primary-dark">
                  {prop.title}
                </h3>
                <p className="text-sm text-primary-dark/60 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 
          SECTION 3: Studio Story 
          Historical narrative with warmth and credibility
        */}
        <div className="mt-32 max-w-5xl mx-auto">
          {/* Story Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Historien bak studioet
            </h2>
            <div
              className="w-16 h-1 bg-accent rounded-full mx-auto"
              aria-hidden="true"
            />
          </div>

          {/* Story Content - Alternating layout with slideshows */}
          <div className="space-y-16">
            {/* Paragraph 1: The Beginning */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary-dark">
                  Fra lidenskap til virksomhet
                </h3>
                <p className="text-primary-dark/80 leading-relaxed">
                  I 2001 tok Geir-Harry Haugland steget fra hobbymusiker til
                  profesjonell entreprenør og etablerte LM Studio &
                  Musikkservice. Med erfaring som trekkspiller og teknisk
                  kunnskap innen lydteknikk, la han grunnlaget for et komplett
                  musikkompetansesenter.
                </p>
              </div>
              {/* First Slideshow */}
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg order-first md:order-last">
                <Slideshow delay={0} />
              </div>
            </div>

            {/* Paragraph 2: Growth & Evolution */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Second Slideshow - Independent from first */}
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                <Slideshow delay={2000} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary-dark">
                  Vekst gjennom kvalitet
                </h3>
                <p className="text-primary-dark/80 leading-relaxed">
                  Fra de første innspillingene med Gamle Aker Spelemannslag i
                  2002 har LM Studio produsert musikk for artister fra hele
                  landet. Verkstedet har vokst til et kompetansesenter for
                  reparasjon, stemming og vedlikehold av alle typer trekkspill.
                </p>
              </div>
            </div>

            {/* Paragraph 3: Philosophy & Commitment */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h3 className="text-2xl font-bold text-primary-dark">
                  Vår forpliktelse til musikere
                </h3>
                <p className="text-primary-dark/80 leading-relaxed">
                  Det som gjør LM Studio unikt er kombinasjonen av teknisk
                  ekspertise og musikalsk forståelse. Vi er selv musikere som
                  forstår hva instrumentet betyr for deg. Enten du er nybegynner
                  eller profesjonell, møter du samme personlige oppfølging.
                </p>
                <p className="text-primary-dark/80 leading-relaxed">
                  Med over 20 års erfaring fortsetter vi å være din partner i
                  musikkens verden. Kontakt oss for å avtale tidspunkt.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 
          SECTION 4: Team Section 
          Geir & Eva with shared image in balanced layout
        */}
        <div className="mt-32 max-w-5xl mx-auto">
          {/* Team Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Møt teamet
            </h2>
            <div
              className="w-16 h-1 bg-accent rounded-full mx-auto"
              aria-hidden="true"
            />
          </div>

          {/* Team Members - Balanced dual-profile layout */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Shared Image Column */}
              <div className="relative h-96 md:h-auto">
                <Image
                  src="/images/employees/geir-eva.png"
                  alt="Geir-Harry Haugland og Eva Haugland - LM Studio & Musikkservice"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Team Info Column */}
              <div className="p-8 md:p-12 flex flex-col justify-center space-y-8">
                {/* Geir Profile */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <span className="text-primary-dark font-bold text-lg">
                        G
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-dark">
                        Geir-Harry Haugland
                      </h3>
                      <p className="text-sm text-primary-dark/60">
                        Daglig leder
                      </p>
                    </div>
                  </div>
                  <p className="text-primary-dark/80 leading-relaxed">
                    Trekkspiller, lydtekniker og kursinstruktør. Spesialist på
                    trekkspill og toradere, studio, service og PA.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary-dark/60">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>901 69 390</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-200" aria-hidden="true" />

                {/* Eva Profile */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <span className="text-primary-dark font-bold text-lg">
                        E
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-dark">
                        Eva T. Haugland
                      </h3>
                      <p className="text-sm text-primary-dark/60">
                        Trekkspiller
                      </p>
                    </div>
                  </div>
                  <p className="text-primary-dark/80 leading-relaxed">
                    Bidrar i studio, CD-design og kopiering.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary-dark/60">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>472 93 768</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * Value Prop Icons Component
 * Returns appropriate icon SVG based on index
 */
function ValuePropIcon({ index }: { index: number }) {
  const iconClasses = "w-6 h-6 text-accent";

  switch (index) {
    case 0: // Riktig pris – riktig kvalitet
      return (
        <svg
          className={iconClasses}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>
      );
    case 1: // Alt på ett sted
      return (
        <svg
          className={iconClasses}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
          />
        </svg>
      );
    case 2: // Personlig oppfølging
      return (
        <svg
          className={iconClasses}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      );
    default:
      return null;
  }
}
