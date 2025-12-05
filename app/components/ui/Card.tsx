import { ReactNode } from "react";

/**
 * Card Component
 *
 * A versatile card component with subtle hover effects.
 * Follows the dark aesthetic of a music studio with warm accents.
 */

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export default function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
}: CardProps) {
  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const hoverClasses = hover
    ? "hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1"
    : "";

  return (
    <div
      className={`
        bg-secondary-dark rounded-2xl
        border border-border-subtle
        transition-all duration-300
        ${paddingClasses[padding]}
        ${hoverClasses}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
