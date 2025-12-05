import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui";
import { businessInfo } from "@/app/lib/data";

/**
 * Hero Section Component (Redesigned)
 *
 * Fullscreen hero matching boss's reference design patterns:
 * - Full viewport height with background image
 * - Center-aligned content with logo/company name
 * - Tagline and dual CTA buttons
 * - Top bar with contact info
 * - Responsive across all devices
 */

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background Image using Next.js Image for optimization */}
        <Image
          src="/images/hero-background.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Fallback gradient (shown behind image if loading) */}
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary-dark via-secondary-dark to-primary-dark" />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-primary-dark/60" />

        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(201, 166, 107, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201, 166, 107, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Main Hero Content - Centered */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo Image */}
          <div className="mb-6">
            <Image
              src="/images/logos/lm-studio-logo.png"
              alt="LM Studio & Musikkservice"
              width={400}
              height={120}
              className="h-24 sm:h-28 md:h-32 lg:h-40 w-auto mx-auto object-contain"
              priority
            />
          </div>

          {/* Company Name */}
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-light tracking-tight"
          >
            <span className="block">
              {businessInfo.name.split("&")[0].trim()}
            </span>
            <span className="block text-accent">&amp; Musikkservice</span>
          </h1>

          {/* Tagline */}
          <p className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl text-text-light/90 max-w-2xl mx-auto leading-relaxed">
            {businessInfo.tagline}
          </p>

          {/* Short Description */}
          <p className="mt-4 text-base md:text-lg text-text-muted max-w-xl mx-auto">
            {businessInfo.shortDescription}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#tjenester">
              <Button size="lg" className="w-full sm:w-auto min-w-[200px]">
                <span>Utforsk tjenester</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            </Link>
            <Link href="#kontakt">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto min-w-[200px]"
              >
                Ta kontakt
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div
        className="relative z-10 pb-8 flex justify-center"
        aria-hidden="true"
      >
        <Link
          href="#tjenester"
          className="flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase">Scroll ned</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
          </div>
        </Link>
      </div>

      {/* Decorative Corner Elements */}
      <div
        className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-accent/20 hidden lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-accent/20 hidden lg:block"
        aria-hidden="true"
      />
    </section>
  );
}
