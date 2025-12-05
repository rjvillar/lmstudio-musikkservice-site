"use client";

import Link from "next/link";
import { Container, SectionHeading, Button } from "@/app/components/ui";
import { albums, musicSectionInfo, type Album } from "@/app/lib/data";

/**
 * Music & Recordings Section Component
 *
 * Showcases albums and music produced by LM Studio with:
 * - Grid of album covers with hover effects
 * - Optional audio player placeholder
 * - Link to Discogs catalog
 * - Scandinavian-modern visual design
 */

function AlbumCard({ album }: { album: Album }) {
  return (
    <article className="group relative">
      {/* Album Cover */}
      <div className="relative aspect-square rounded-xl overflow-hidden bg-secondary-dark shadow-lg">
        {/* Placeholder - replace with actual album art */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-accent/20 via-secondary-dark to-primary-dark p-6">
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
          <p className="text-accent/60 text-xs text-center">Album artwork</p>
        </div>

        {/* Hover overlay with play icon */}
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
              className="w-6 h-6 text-primary-dark ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Year badge */}
        <div className="absolute top-3 right-3 bg-primary-dark/80 backdrop-blur-sm text-text-light text-xs font-medium px-2 py-1 rounded">
          {album.year}
        </div>
      </div>

      {/* Album Info */}
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
  );
}

export default function Music() {
  return (
    <section
      id="musikk"
      className="py-24 md:py-32 bg-primary-dark"
      aria-labelledby="music-heading"
    >
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <SectionHeading
            title={musicSectionInfo.title}
            subtitle={musicSectionInfo.subtitle}
            light
          />
          <p className="mt-4 text-text-muted max-w-2xl mx-auto">
            {musicSectionInfo.description}
          </p>
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>

        {/* Discogs CTA */}
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

        {/* Decorative Sound Waves */}
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
