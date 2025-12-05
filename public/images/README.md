# LM Studio & Musikkservice - Image Assets

This directory contains all image assets for the website.

## Directory Structure

```
images/
├── employees/        # Team member profile photos
│   └── placeholder.jpg
├── gallery/          # Gallery images for the portfolio section
│   ├── placeholder-1.jpg
│   ├── placeholder-2.jpg
│   └── ...
└── README.md
```

## Image Guidelines

### Employee Photos

- **Dimensions:** 600x800px (3:4 aspect ratio)
- **Format:** JPEG or WebP
- **Style:** Professional headshots with neutral background
- **Naming:** Use lowercase with hyphens (e.g., `geir-harry-haugland.jpg`)

### Gallery Images

- **Dimensions:** 1200x900px minimum (4:3 aspect ratio)
- **Format:** JPEG or WebP
- **Categories:** Verksted, Studio, Arrangementer, Salg, Kurs, Samling
- **Naming:** Descriptive names (e.g., `trekkspill-reparasjon-verksted.jpg`)

### General Guidelines

- Optimize all images for web (compress without visible quality loss)
- Use WebP format when possible for better compression
- Include alt text in the data.ts file for each image
- Ensure consistent lighting and color grading across photos

## Placeholder Replacement

When replacing placeholders with actual images:

1. Add images to the appropriate subdirectory
2. Update the image paths in `app/lib/data.ts`
3. Ensure alt text is descriptive and accurate
4. Test responsive display across devices
