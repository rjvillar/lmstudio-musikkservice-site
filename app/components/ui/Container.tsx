import { ReactNode } from "react";

/**
 * Container Component
 *
 * A responsive container that provides consistent horizontal padding
 * and maximum width across the site. Based on Scandinavian design
 * principles with generous whitespace.
 */

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export default function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  const maxWidthClasses = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1440px]",
  };

  return (
    <div
      className={`
        mx-auto w-full px-4 sm:px-6 lg:px-8
        ${maxWidthClasses[size]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
