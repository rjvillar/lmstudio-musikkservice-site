"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container, SectionHeading, Button } from "@/app/components/ui";
import { albums, musicSectionInfo, type Album } from "@/app/lib/data";

function AlbumCard({ album }: { album: Album }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
      <Link
        href={album.discogsUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block"
      >
        <article>
          <div className="relative aspect-square rounded-xl overflow-hidden bg-secondary-dark shadow-lg">
            {!imageError ? (
              <Image
                src={album.coverImage}
                alt={`${album.title} av ${album.artist}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-br from-accent/20 via-secondary-dark to-primary-dark p-6">
                <svg
                  className="w-16 h-16 text-accent/40 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                  />
                </svg>
                <p className="text-accent/60 text-sm text-center font-medium">
                  {album.title}
                </p>
                <p className="text-accent/40 text-xs text-center mt-1">
                  {album.artist}
                </p>
              </div>
            )}

            <div
              className="
            absolute inset-0 bg-primary-dark/60
            opacity-0 group-hover:opacity-100
            transition-all duration-300
            flex items-center justify-center
          "
            >
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-primary-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </div>

            <div className="absolute top-3 right-3 bg-primary-dark/80 backdrop-blur-sm text-text-light text-xs font-medium px-2 py-1 rounded">
              {album.year}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-text-light text-lg group-hover:text-accent transition-colors">
              {album.title}
            </h3>
            <p className="text-text-muted text-sm mt-1">{album.artist}</p>
            {album.description && (
              <p className="text-text-muted/70 text-xs mt-2 line-clamp-2">
                {album.description}
              </p>
            )}
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

export default function Music() {
  const t = useTranslations("music");

  return (
    <section
      id="musikk"
      className="py-24 md:py-32 bg-primary-dark overflow-x-hidden"
      aria-labelledby="music-heading"
    >
      <Container>
        <div className="text-center mb-16">
          <SectionHeading title={t("heading")} subtitle={t("subtitle")} light />
          <p className="mt-4 text-text-muted max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Albums Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {albums.map((album) => (
            <motion.div
              key={album.id}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <AlbumCard album={album} />
            </motion.div>
          ))}
        </motion.div>

        {/* YouTube Embed */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-accent"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <span className="text-accent text-sm font-medium">Video</span>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-text-light mb-2">
              Produksjon fra LM Studio
            </h3>
            <p className="text-text-muted text-sm md:text-base">
              Astrid og Harald – Fine gamle melodier, innspilt hos LM Studio &
              Musikkservice
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-linear-to-r from-accent/20 via-accent/5 to-accent/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-secondary-dark ring-1 ring-accent/10">
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/qAq8CU7tGgY"
                  title="Astrid og Harald – Fine gamle melodier"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-secondary-dark/50 border border-border-subtle">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-text-light font-medium">Vil du høre mer?</p>
                <p className="text-text-muted text-sm">
                  Utforsk hele katalogen vår på Discogs
                </p>
              </div>
            </div>
            <Link
              href={musicSectionInfo.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="md">
                <span>{musicSectionInfo.ctaLabel}</span>
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>

        <div
          className="mt-16 flex justify-center items-end gap-1 h-12 opacity-20"
          aria-hidden="true"
        >
          {[
            40, 70, 30, 85, 50, 65, 25, 90, 45, 75, 35, 80, 55, 60, 20, 95, 42,
            68, 38, 72,
          ].map((height, i) => (
            <div
              key={i}
              className="w-1.5 bg-accent rounded-full animate-pulse"
              style={{
                height: `${height}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${0.8 + (i % 5) * 0.1}s`,
              }}
            />
          ))}{" "}
        </div>
      </Container>
    </section>
  );
}
