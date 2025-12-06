"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container, SectionHeading } from "@/app/components/ui";
import { galleryImages, type GalleryImage } from "@/app/lib/data";

/**
 * Gallery Section Component - Redesigned
 *
 * Features:
 * - Refined balanced grid layout with proper spacing
 * - Category filtering with smooth transitions
 * - Auto-cycling images in "All" mode
 * - Enhanced lightbox modal with navigation
 * - Responsive design with Scandinavian minimalism
 * - Framer Motion animations for polish
 */

interface CategoryGroup {
  category: string;
  images: GalleryImage[];
  currentIndex: number;
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Alle");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxCategory, setLightboxCategory] = useState<string>("");
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [categoryIndices, setCategoryIndices] = useState<{
    [key: string]: number;
  }>({});

  // Get unique categories (memoized)
  const categories = useMemo(
    () => ["Alle", ...new Set(galleryImages.map((img) => img.category))],
    []
  );

  // Group images by category (computed)
  const categoryGroups: CategoryGroup[] = (() => {
    const groups: { [key: string]: GalleryImage[] } = {};

    galleryImages.forEach((img) => {
      if (!groups[img.category]) {
        groups[img.category] = [];
      }
      groups[img.category].push(img);
    });

    return Object.entries(groups).map(([category, images]) => ({
      category,
      images,
      currentIndex: categoryIndices[category] || 0,
    }));
  })();

  // Auto-cycle images in "All" mode only
  useEffect(() => {
    if (selectedCategory !== "Alle") return;

    const interval = setInterval(() => {
      setCategoryIndices((prev) => {
        const newIndices: { [key: string]: number } = {};
        categories.forEach((cat) => {
          if (cat === "Alle") return;
          const categoryImages = galleryImages.filter(
            (img) => img.category === cat
          );
          const currentIdx = prev[cat] || 0;
          newIndices[cat] = (currentIdx + 1) % categoryImages.length;
        });
        return newIndices;
      });
    }, 3500); // Cycle every 3.5 seconds

    return () => clearInterval(interval);
  }, [selectedCategory, categories]);

  // Get filtered images based on selected category
  const getDisplayImages = (): GalleryImage[] => {
    if (selectedCategory === "Alle") {
      // Return first image of each category for "All" view
      return categoryGroups.map((group) => group.images[group.currentIndex]);
    }
    // Return all images for selected category
    return galleryImages.filter((img) => img.category === selectedCategory);
  };

  // Open lightbox
  const openLightbox = (category: string, index: number = 0) => {
    setLightboxCategory(category);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setLightboxCategory("");
    setLightboxIndex(0);
  }, []);

  // Handle body overflow when lightbox opens/closes
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxOpen]);

  // Navigate lightbox
  const navigateLightbox = useCallback(
    (direction: "prev" | "next" | number) => {
      const categoryImages = galleryImages.filter(
        (img) => img.category === lightboxCategory
      );

      // If direction is a number, jump directly to that index
      if (typeof direction === "number") {
        setLightboxIndex(direction);
        return;
      }

      // Otherwise navigate prev/next
      if (direction === "next") {
        setLightboxIndex((prev) => (prev + 1) % categoryImages.length);
      } else {
        setLightboxIndex(
          (prev) => (prev - 1 + categoryImages.length) % categoryImages.length
        );
      }
    },
    [lightboxCategory]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateLightbox("next");
      if (e.key === "ArrowLeft") navigateLightbox("prev");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, closeLightbox, navigateLightbox]);

  const displayImages = getDisplayImages();
  const isAllMode = selectedCategory === "Alle";

  return (
    <section
      id="galleri"
      className="py-24 md:py-32 bg-primary-dark"
      aria-labelledby="gallery-heading"
    >
      <Container>
        <div className="text-center mb-16">
          <SectionHeading
            title="Galleri"
            subtitle="Et innblikk i vårt arbeid, studio og instrumenter"
            light
          />
        </div>

        {/* Category Filter - Refined */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                relative px-6 py-2.5 rounded-full text-sm font-medium
                transition-all duration-300
                ${
                  selectedCategory === category
                    ? "text-primary-dark"
                    : "text-text-muted hover:text-text-light bg-secondary-dark/50 border border-border-subtle hover:border-accent/30"
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {selectedCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-accent rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid - Refined Balanced Layout */}
        <motion.div
          layout
          className={`
            grid gap-4 md:gap-5 lg:gap-6
            ${
              isAllMode
                ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                : displayImages.length === 1
                ? "grid-cols-1 max-w-md mx-auto"
                : displayImages.length === 2
                ? "grid-cols-2 max-w-3xl mx-auto"
                : displayImages.length === 3
                ? "grid-cols-1 sm:grid-cols-3 max-w-5xl mx-auto"
                : displayImages.length <= 4
                ? "grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto"
                : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            }
          `}
        >
          <AnimatePresence mode="popLayout">
            {displayImages.map((image, index) => {
              const categoryImages = galleryImages.filter(
                (img) => img.category === image.category
              );
              const isLargeCard = isAllMode && index === 0;
              // Find the actual index of this image in its category
              const imageIndexInCategory = categoryImages.findIndex(
                (img) => img.id === image.id
              );

              return (
                <motion.div
                  key={`${image.category}-${image.id}`}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`
                    ${isLargeCard ? "col-span-2 row-span-2" : "col-span-1"}
                  `}
                >
                  <GalleryCard
                    image={image}
                    isLargeCard={isLargeCard}
                    isAnimating={isAllMode}
                    onClick={() =>
                      openLightbox(image.category, imageIndexInCategory)
                    }
                    totalImages={categoryImages.length}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </Container>

      {/* Enhanced Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            category={lightboxCategory}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onNavigate={navigateLightbox}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/**
 * Gallery Card Component
 */
interface GalleryCardProps {
  image: GalleryImage;
  isLargeCard: boolean;
  isAnimating: boolean;
  onClick: () => void;
  totalImages: number;
}

function GalleryCard({
  image,
  isLargeCard,
  isAnimating,
  onClick,
  totalImages,
}: GalleryCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      className="group relative w-full h-full aspect-square overflow-hidden rounded-xl bg-secondary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image */}
      <div className="absolute inset-0">
        {!imageError ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes={
              isLargeCard
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 768px) 50vw, 25vw"
            }
            onError={() => setImageError(true)}
          />
        ) : (
          // Placeholder for missing images
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-br from-secondary-dark via-primary-dark to-secondary-dark/50 p-6">
            <svg
              className="w-12 h-12 md:w-16 md:h-16 text-accent/20 mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-accent/40 text-xs md:text-sm text-center font-medium">
              {image.category}
            </p>
          </div>
        )}
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-primary-dark via-primary-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
          <svg
            className="w-6 h-6 text-primary-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
            />
          </svg>
        </div>
        {isAnimating && (
          <>
            <span className="text-text-light text-sm font-semibold mt-3">
              {image.category}
            </span>
            {totalImages > 1 && (
              <span className="text-text-muted text-xs mt-1">
                {totalImages} bilder
              </span>
            )}
          </>
        )}
      </div>

      {/* Category Badge */}
      <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-primary-dark/80 backdrop-blur-sm">
        <span className="text-text-light text-xs font-medium">
          {image.category}
        </span>
      </div>

      {/* Animation Indicator for "All" mode */}
      {isAnimating && totalImages > 1 && (
        <div className="absolute bottom-3 right-3 flex gap-1">
          {Array.from({ length: Math.min(totalImages, 4) }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-accent/60" />
          ))}
        </div>
      )}
    </motion.button>
  );
}

/**
 * Lightbox Modal Component
 */
interface LightboxProps {
  category: string;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next" | number) => void;
}

function Lightbox({
  category,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const categoryImages = galleryImages.filter(
    (img) => img.category === category
  );
  const currentImage = categoryImages[currentIndex];
  const [imageError, setImageError] = useState(false);

  if (!currentImage) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-primary-dark/98 backdrop-blur-xl flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 px-2">
          <div>
            <h3 className="text-text-light text-xl md:text-2xl font-semibold">
              {category}
            </h3>
            <p className="text-text-muted text-sm mt-1">
              {currentIndex + 1} / {categoryImages.length}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-secondary-dark border border-border-subtle flex items-center justify-center text-text-light hover:text-accent hover:border-accent/50 transition-all duration-200"
            aria-label="Lukk bildevisning"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Main Image */}
        <div className="relative flex-1 flex items-center justify-center mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full h-full min-h-[70vh] rounded-2xl overflow-hidden bg-secondary-dark shadow-2xl ring-1 ring-accent/10"
            >
              {!imageError ? (
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1536px) 100vw, 1536px"
                  priority
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-br from-secondary-dark to-primary-dark p-8">
                  <svg
                    className="w-24 h-24 text-accent/30 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-text-muted text-center">
                    {currentImage.alt}
                  </p>
                </div>
              )}

              {/* Navigation Arrows */}
              {categoryImages.length > 1 && (
                <>
                  <button
                    onClick={() => onNavigate("prev")}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary-dark/90 backdrop-blur-sm border border-border-subtle flex items-center justify-center text-text-light hover:text-accent hover:border-accent/50 transition-all duration-200"
                    aria-label="Forrige bilde"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => onNavigate("next")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary-dark/90 backdrop-blur-sm border border-border-subtle flex items-center justify-center text-text-light hover:text-accent hover:border-accent/50 transition-all duration-200"
                    aria-label="Neste bilde"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Caption */}
        <div className="mt-4 text-center px-2">
          <p className="text-text-light text-sm md:text-base">
            {currentImage.alt}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
