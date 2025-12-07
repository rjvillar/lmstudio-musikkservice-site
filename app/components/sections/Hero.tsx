"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/app/components/ui";

export default function Hero() {
  const t = useTranslations("hero");
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: mounted ? y : 0 }}
      >
        <Image
          src="/images/hero-background.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary-dark via-secondary-dark to-primary-dark" />

        <div className="absolute inset-0 bg-primary-dark/60" />

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
      </motion.div>

      <motion.div
        className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 sm:pb-6 lg:pb-8 pt-20 sm:pt-24 md:pt-32"
        style={{ opacity: mounted ? opacity : 1 }}
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            className="mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Image
              src="/images/logos/lm-studio-logo.png"
              alt="LM Studio & Musikkservice"
              width={400}
              height={120}
              className="h-20 sm:h-24 md:h-32 lg:h-40 w-auto mx-auto object-contain"
              priority
            />
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-text-light tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2,
            }}
          >
            <span className="block">{t("name")}</span>
            <span className="block text-accent">&amp; {t("subtitle")}</span>
          </motion.h1>

          <motion.p
            className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-2xl text-text-light/90 max-w-1xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.4,
            }}
          >
            {t("tagline")}
          </motion.p>

          <motion.div
            className="mt-6 sm:mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 12,
              delay: 0.6,
            }}
          >
            <Link href="#tjenester">
              <Button size="lg" className="w-full sm:w-auto min-w-[200px]">
                <span>{t("exploreServices")}</span>
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
                {t("getInTouch")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

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
