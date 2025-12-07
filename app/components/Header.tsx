"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/app/components/ui";
import {
  navigationLinks,
  businessInfo,
  contactInfo,
  additionalContacts,
} from "@/app/lib/data";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

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
        transition-all duration-500 ease-out
        ${
          isScrolled
            ? "bg-primary-dark/95 backdrop-blur-md shadow-lg shadow-primary-dark/20 border-b border-border-subtle"
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
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

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

      {mounted &&
        createPortal(
          <div
            id="mobile-menu"
            className={`
            md:hidden fixed inset-0 z-100
            transition-all duration-300
            ${
              isMenuOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            }
          `}
            aria-hidden={!isMenuOpen}
          >
            <button
              type="button"
              aria-label="Lukk meny"
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-md"
            />

            <aside
              className={`
            absolute top-0 bottom-0 right-0
            w-[calc(100%-80px)] max-w-xs
            border-l border-border-subtle shadow-2xl
            transform transition-transform duration-300 ease-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
              role="dialog"
              aria-modal="true"
              style={{ backgroundColor: "#1a1a1a" }}
            >
              <div className="flex h-full flex-col px-6 py-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/logos/lm-studio-logo.png"
                      alt="LM Studio & Musikkservice"
                      width={64}
                      height={35}
                      className="h-8 w-auto object-contain"
                    />
                    <span className="text-sm font-semibold tracking-wide text-text-light/80">
                      {businessInfo.name}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Lukk meny"
                    className="rounded-full p-2 text-text-light/70 hover:text-accent transition-colors"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6L6 18" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <nav className="mt-10 flex-1">
                  <ul className="flex flex-col gap-3">
                    {navigationLinks.map((link, index) => (
                      <li
                        key={link.href}
                        style={{
                          transitionDelay: isMenuOpen
                            ? `${index * 40}ms`
                            : "0ms",
                        }}
                        className={`
                      transform transition-all duration-300
                      ${
                        isMenuOpen
                          ? "translate-x-0 opacity-100"
                          : "translate-x-4 opacity-0"
                      }
                    `}
                      >
                        <Link
                          href={link.href}
                          onClick={handleLinkClick}
                          className="
                        block rounded-xl px-4 py-4
                        text-lg font-medium text-text-light
                        hover:bg-secondary-dark/60 hover:text-accent
                        transition-colors duration-200
                        border border-border-subtle/40
                      "
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div
                  className={`
                mt-6 pt-6 border-t border-border-subtle/40
                transform transition-all duration-300 delay-300
                ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }
              `}
                >
                  <div className="space-y-3 text-sm">
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-text-light/80 hover:text-accent transition-colors duration-200"
                    >
                      <svg
                        className="w-4 h-4 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span>{contactInfo.phone} (Geir-Harry)</span>
                    </a>

                    <a
                      href={`tel:${additionalContacts.evaPhone.replace(
                        /\s/g,
                        ""
                      )}`}
                      className="flex items-center gap-3 text-text-light/80 hover:text-accent transition-colors duration-200"
                    >
                      <svg
                        className="w-4 h-4 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span>{additionalContacts.evaPhone} (Eva)</span>
                    </a>

                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="flex items-center gap-3 text-text-light/80 hover:text-accent transition-colors duration-200"
                    >
                      <svg
                        className="w-4 h-4 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="break-all">{contactInfo.email}</span>
                    </a>

                    <div className="flex items-start gap-3 text-text-light/70 pt-2">
                      <svg
                        className="w-4 h-4 shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="leading-relaxed">
                        {contactInfo.address}, {contactInfo.postalCode}{" "}
                        {contactInfo.city}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </header>
  );
}
