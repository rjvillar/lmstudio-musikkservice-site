/**
 * SectionHeading Component
 *
 * Consistent heading style for all page sections.
 * Features a subtle accent line and optional subtitle.
 */

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  alignment = "center",
  light = false,
}: SectionHeadingProps) {
  const alignmentClasses = alignment === "center" ? "text-center" : "text-left";
  const titleColor = light ? "text-text-light" : "text-primary-dark";
  const subtitleColor = light ? "text-text-muted" : "text-text-muted";
  const linePosition = alignment === "center" ? "mx-auto" : "";

  return (
    <div className={`mb-12 md:mb-16 ${alignmentClasses}`}>
      {/* Accent line */}
      <div
        className={`w-12 h-1 bg-accent rounded-full mb-6 ${linePosition}`}
        aria-hidden="true"
      />

      {/* Main title */}
      <h2
        className={`
          text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight
          ${titleColor}
        `}
      >
        {title}
      </h2>

      {/* Optional subtitle */}
      {subtitle && (
        <p
          className={`
            mt-4 text-lg md:text-xl max-w-2xl
            ${alignment === "center" ? "mx-auto" : ""}
            ${subtitleColor}
          `}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
