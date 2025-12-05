"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/app/components/ui";
import { navigationLinks, businessInfo } from "@/app/lib/data";

/**
 * Header Component
 *
 * Sticky navigation header with:
 * - Responsive mobile menu
 * - Scroll-aware background opacity
 * - Accessible navigation with ARIA labels
 * - Smooth scroll to sections
 */

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`
        fixed top-0 md:top-10 left-0 right-0 z-40
        transition-all duration-300
        ${
          isScrolled
            ? "bg-primary-dark/95 backdrop-blur-md shadow-lg border-b border-border-subtle"
            : "bg-transparent"
        }
      `}
      role="banner"
    >
      <Container>
        <nav
          className="flex items-center justify-between h-20"
          role="navigation"
          aria-label="Hovednavigasjon"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label={`${businessInfo.name} - Gå til forsiden`}
          >
            <Image
              src="/images/logos/lm-studio-logo.png"
              alt="LM Studio & Musikkservice"
              width={91}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="
                    text-text-light/80 hover:text-accent
                    text-sm font-medium tracking-wide
                    transition-colors duration-200
                    relative py-2
                    after:absolute after:bottom-0 after:left-0 after:right-0
                    after:h-0.5 after:bg-accent
                    after:scale-x-0 hover:after:scale-x-100
                    after:transition-transform after:duration-200
                    after:origin-left
                  "
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button - Desktop */}
          <Link
            href="#kontakt"
            className="
              hidden md:inline-flex
              px-5 py-2.5 rounded-lg
              bg-accent text-primary-dark
              font-medium text-sm
              hover:bg-accent-hover
              transition-all duration-200
              shadow-md hover:shadow-lg
            "
          >
            Kontakt oss
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
              md:hidden p-2 rounded-lg
              text-text-light hover:bg-secondary-dark
              transition-colors duration-200
            "
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Lukk meny" : "Åpne meny"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </Container>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`
          md:hidden fixed inset-0 top-20 z-40
          bg-primary-dark/98 backdrop-blur-lg
          transition-all duration-300
          ${
            isMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
        aria-hidden={!isMenuOpen}
      >
        <Container>
          <nav className="py-8">
            <ul className="flex flex-col gap-4">
              {navigationLinks.map((link, index) => (
                <li
                  key={link.href}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                  }}
                  className={`
                    transform transition-all duration-300
                    ${
                      isMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-4 opacity-0"
                    }
                  `}
                >
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="
                      block py-4 px-4 rounded-xl
                      text-xl font-medium text-text-light
                      hover:bg-secondary-dark hover:text-accent
                      transition-colors duration-200
                      border-b border-border-subtle/50
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <div
              className={`
                mt-8 transform transition-all duration-300 delay-300
                ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }
              `}
            >
              <Link
                href="#kontakt"
                onClick={handleLinkClick}
                className="
                  block w-full py-4 rounded-xl
                  bg-accent text-primary-dark
                  font-bold text-center text-lg
                  hover:bg-accent-hover
                  transition-colors duration-200
                "
              >
                Kontakt oss
              </Link>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
