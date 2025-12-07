"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container, SectionHeading } from "@/app/components/ui";

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

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function Slideshow({ delay = 0 }: { delay?: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState(storyImages);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setImages(shuffleArray(storyImages)), 0);
    const timer2 = setTimeout(() => setIsClient(true), 0);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    if (!isClient || images.length === 0) return;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 4000);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isClient, images.length, delay]);

  if (images.length === 0) {
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
          <div className="absolute inset-0 bg-linear-to-br from-primary-dark/10 to-primary-dark/30" />
        </div>
      ))}
    </div>
  );
}

export default function About() {
  const t = useTranslations("about");

  return (
    <section
      id="om-oss"
      className="py-24 md:py-32 bg-off-white overflow-x-hidden"
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="flex justify-center mb-12" aria-hidden="true">
          <div className="w-16 h-1 bg-accent rounded-full" />
        </div>

        <SectionHeading
          title={t("heading")}
          subtitle={t("subtitle")}
          alignment="center"
        />

        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-lg text-primary-dark/90 leading-relaxed">
            {t.rich("description", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
        </div>

        <motion.div
          className="mt-12 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-xl p-6 text-center space-y-3 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 flex items-center justify-center">
                <ValuePropIcon index={0} />
              </div>
              <h3 className="text-lg font-bold text-primary-dark">
                {t("valueProp1Title")}
              </h3>
              <p className="text-sm text-primary-dark/70 leading-relaxed">
                {t("valueProp1Desc")}
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-xl p-6 text-center space-y-3 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 flex items-center justify-center">
                <ValuePropIcon index={1} />
              </div>
              <h3 className="text-lg font-bold text-primary-dark">
                {t("valueProp2Title")}
              </h3>
              <p className="text-sm text-primary-dark/70 leading-relaxed">
                {t("valueProp2Desc")}
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-xl p-6 text-center space-y-3 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 flex items-center justify-center">
                <ValuePropIcon index={2} />
              </div>
              <h3 className="text-lg font-bold text-primary-dark">
                {t("valueProp3Title")}
              </h3>
              <p className="text-sm text-primary-dark/70 leading-relaxed">
                {t("valueProp3Desc")}
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mt-20 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-2 border-accent/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-accent via-accent/70 to-accent" />

              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-accent/10 flex items-center justify-center border-2 border-accent/30">
                    <svg
                      className="w-10 h-10 md:w-12 md:h-12 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">
                      Anerkjent av bransjen
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary-dark mb-2">
                    Offisielt Verksted for Trekkspill & Toradere
                  </h3>
                  <p className="text-primary-dark/70 leading-relaxed mb-3">
                    LM Studio & Musikkservice er oppført på{" "}
                    <strong className="text-primary-dark">
                      musikkhandel.no
                    </strong>{" "}
                    som anerkjent serviceverksted for trekkspill og toradere.
                    Dette bekrefter vår ekspertise og pålitelighet som
                    leverandør av profesjonelle reparasjons- og
                    vedlikeholdstjenester.
                  </p>
                  <a
                    href="https://www.musikkhandel.no/serviceverksted"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors group"
                  >
                    <span>Se oppføring på musikkhandel.no</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>

                <div className="hidden lg:block shrink-0">
                  <div className="text-center">
                    <div className="inline-flex flex-col items-center gap-1 px-4 py-3 rounded-xl bg-accent/5 border border-accent/20">
                      <svg
                        className="w-8 h-8 text-accent"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs font-bold text-accent">
                        Verifisert
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-24 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-3">
              Historien bak studioet
            </h2>
            <div
              className="w-16 h-1 bg-accent rounded-full mx-auto"
              aria-hidden="true"
            />
          </div>

          <div className="space-y-12">
            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center"
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary-dark">
                  Fra lidenskap til virksomhet
                </h3>
                <p className="text-primary-dark/80 leading-relaxed">
                  I 2001 etablerte Geir-Harry Haugland LM Studio &
                  Musikkservice, med erfaring som trekkspiller og teknisk
                  kunnskap innen lydteknikk.
                </p>
              </div>
              <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden shadow-lg order-first md:order-last">
                <Slideshow delay={0} />
              </div>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center"
              variants={{
                hidden: { opacity: 0, x: 40 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden shadow-lg">
                <Slideshow delay={2000} />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary-dark">
                  Vekst gjennom kvalitet
                </h3>
                <p className="text-primary-dark/80 leading-relaxed">
                  Fra de første innspillingene i 2002 har vi produsert musikk
                  for artister fra hele landet og utviklet verkstedet til et
                  kompetansesenter for reparasjon og vedlikehold av alle typer
                  trekkspill.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-2xl mx-auto text-center space-y-4">
                <h3 className="text-xl font-bold text-primary-dark">
                  Vår forpliktelse til musikere
                </h3>
                <p className="text-primary-dark/80 leading-relaxed">
                  Vi kombinerer teknisk ekspertise med musikalsk forståelse. Som
                  musikere selv forstår vi hva instrumentet betyr for deg, og
                  gir samme personlige oppfølging til alle.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mt-32 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            className="text-center mb-12"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Møt teamet
            </h2>
            <div
              className="w-16 h-1 bg-accent rounded-full mx-auto"
              aria-hidden="true"
            />
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-96 md:h-auto">
                <Image
                  src="/images/employees/geir-eva.png"
                  alt="Geir-Harry Haugland og Eva Haugland - LM Studio & Musikkservice"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center space-y-8">
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

                <div className="h-px bg-gray-200" aria-hidden="true" />

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
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function ValuePropIcon({ index }: { index: number }) {
  const iconClasses = "w-6 h-6 text-accent";

  switch (index) {
    case 0:
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
    case 1:
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
    case 2:
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
