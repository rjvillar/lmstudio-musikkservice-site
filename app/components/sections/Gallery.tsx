"use client";

import { useState } from "react";
import { Container, SectionHeading } from "@/app/components/ui";
import { galleryImages, type GalleryImage } from "@/app/lib/data";

/**
 * Gallery Section Component
 *
 * Masonry-style image gallery with:
 * - Category filtering
 * - Lightbox modal for enlarged view
 * - Hover effects with zoom
 * - Responsive grid layout
 * - Keyboard accessible
 */

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Alle");

  // Get unique categories
  const categories = [
    "Alle",
    ...new Set(galleryImages.map((img) => img.category)),
  ];

  // Filter images by category
  const filteredImages =
    activeCategory === "Alle"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  // Handle lightbox close
  const closeLightbox = () => setSelectedImage(null);

  // Handle keyboard navigation in lightbox
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <section
      id="galleri"
      className="py-24 md:py-32 bg-primary-dark"
      aria-labelledby="gallery-heading"
    >
      <Container>
        <SectionHeading
          title="Galleri"
          subtitle="Et innblikk i vårt arbeid, studio og instrumenter"
          light
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-5 py-2.5 rounded-full text-sm font-medium
                transition-all duration-200
                ${
                  activeCategory === category
                    ? "bg-accent text-primary-dark"
                    : "bg-secondary-dark text-text-muted hover:text-text-light border border-border-subtle hover:border-accent/50"
                }
              `}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          role="list"
          aria-label="Bildegalleri"
        >
          {filteredImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className={`
                group relative overflow-hidden rounded-xl
                aspect-[4/3]
                bg-secondary-dark
                focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark
                ${
                  index === 0
                    ? "sm:col-span-2 sm:row-span-2 sm:aspect-square"
                    : ""
                }
              `}
              aria-label={`Åpne bilde: ${image.alt}`}
            >
              {/* Placeholder - replace with actual images */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark to-primary-dark flex items-center justify-center">
                <div className="text-center p-4">
                  <svg
                    className="w-12 h-12 mx-auto text-accent/20"
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
                  <p className="mt-2 text-text-muted text-xs">{image.alt}</p>
                </div>
              </div>

              {/* Image will go here */}
              {/* <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              /> */}

              {/* Overlay on hover */}
              <div
                className="
                  absolute inset-0 bg-primary-dark/60
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  flex items-center justify-center
                "
                aria-hidden="true"
              >
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-2">
                    <svg
                      className="w-6 h-6 text-accent"
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
                  <span className="text-text-light text-sm font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </Container>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="
            fixed inset-0 z-50
            bg-primary-dark/95 backdrop-blur-md
            flex items-center justify-center
            p-4
          "
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label={`Forstørret bilde: ${selectedImage.alt}`}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="
              absolute top-6 right-6
              w-12 h-12 rounded-full
              bg-secondary-dark border border-border-subtle
              flex items-center justify-center
              text-text-light hover:text-accent
              transition-colors duration-200
              z-10
            "
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

          {/* Image container */}
          <div
            className="relative max-w-5xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Placeholder for image */}
            <div className="aspect-video bg-secondary-dark rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-24 h-24 mx-auto text-accent/30"
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
                <p className="mt-4 text-text-muted">{selectedImage.alt}</p>
              </div>
            </div>

            {/* Image will go here */}
            {/* <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            /> */}

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark to-transparent p-6">
              <p className="text-text-light font-medium">{selectedImage.alt}</p>
              <p className="text-text-muted text-sm">
                {selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
