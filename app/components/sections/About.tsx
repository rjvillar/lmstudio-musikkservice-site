import { Container, SectionHeading } from "@/app/components/ui";
import { businessInfo } from "@/app/lib/data";

/**
 * About Section Component (Refined)
 *
 * Two-column layout with:
 * - Balanced image sizing (not overwhelming)
 * - Shorter text blocks with visual breaks
 * - Value propositions with icons
 * - Fixed overflow issue with floating accent card
 * - Scandinavian minimalism maintained
 */

export default function About() {
  return (
    <section
      id="om-oss"
      className="py-24 md:py-32 bg-off-white overflow-hidden"
      aria-labelledby="about-heading"
    >
      <Container>
        {/* Section Header - Centered */}
        <div className="text-center mb-16">
          <SectionHeading
            title="Om oss"
            subtitle="Historien bak LM Studio & Musikkservice"
            alignment="center"
          />
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image Column - Proportionally balanced */}
          <div className="relative order-2 lg:order-1">
            {/* Main image container - balanced aspect ratio */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary-dark shadow-xl">
              {/* Placeholder - replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary-dark to-primary-dark">
                <div className="text-center p-8">
                  <svg
                    className="w-20 h-20 mx-auto text-accent/30"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="mt-4 text-text-muted text-sm">
                    Bilde av verkstedet
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative accent - positioned safely within bounds */}
            <div
              className="
                absolute -bottom-4 right-4 sm:right-8 lg:-bottom-6 lg:right-8
                bg-accent text-primary-dark
                px-5 py-3 rounded-xl
                shadow-lg z-10
              "
            >
              <p className="text-2xl sm:text-3xl font-bold">30+</p>
              <p className="text-xs sm:text-sm font-medium">års erfaring</p>
            </div>

            {/* Secondary image - small accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-xl overflow-hidden shadow-lg hidden md:block">
              <div className="w-full h-full bg-accent/20 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            {/* Founder highlight */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary-dark text-lg">
                  Geir-Harry Haugland
                </h3>
                <p className="text-sm text-primary-dark/60">
                  Grunnlegger & Daglig leder
                </p>
              </div>
            </div>

            {/* Main text - shortened and scannable */}
            <div className="space-y-4 text-primary-dark/80 leading-relaxed">
              <p>
                LM Studio & Musikkservice er drevet av{" "}
                <strong className="text-primary-dark">
                  Geir-Harry Haugland
                </strong>
                , en erfaren trekkspiller og musikkentusiast med solid bakgrunn
                innen instrumentservice og lydteknikk.
              </p>
              <p>
                Virksomheten er bygget på lidenskap for musikk, personlig
                service og pålitelig samarbeid. Vi tar imot besøkende etter
                avtale og tilbyr fleksible åpningstider hele året.
              </p>
            </div>

            {/* Value Props Grid */}
            <div className="mt-8 grid grid-cols-1 gap-4">
              {businessInfo.valueProps.map((prop, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark text-sm">
                      {prop.title}
                    </h4>
                    <p className="text-sm text-primary-dark/60 mt-0.5">
                      {prop.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
