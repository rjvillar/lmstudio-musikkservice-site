"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/app/components/ui";
import { businessInfo, contactInfo, additionalContacts } from "@/app/lib/data";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("nav");
  const tServices = useTranslations("services");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const serviceItems = [
    { id: "salg", href: "#service-salg" },
    { id: "verksted", href: "#service-verksted" },
    { id: "kurs", href: "#service-kurs" },
    { id: "studio", href: "#service-studio" },
    { id: "pa", href: "#service-pa" },
    { id: "digitalisering", href: "#service-digitalisering" },
    { id: "midi", href: "#service-midi" },
    { id: "noter", href: "#service-noter" },
  ];

  const navigationLinks = [
    { href: "#tjenester", label: t("services"), hasDropdown: true },
    { href: "#om-oss", label: t("about") },
    { href: "#musikk", label: t("music") },
    { href: "#galleri", label: t("gallery") },
    { href: "#kontakt", label: t("contact") },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const handleServicesMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200); // 200ms delay before closing

    closeTimeoutRef.current = timeout;
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
        fixed top-0 md:top-9 left-0 right-0 z-40
        transition-all duration-300 ease-out
        ${
          isScrolled
            ? "bg-primary-dark/95 backdrop-blur-md shadow-lg shadow-primary-dark/20 border-b border-border-subtle"
            : "bg-transparent border-b border-transparent"
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
              <li key={link.href} className="relative group">
                {link.hasDropdown ? (
                  <div
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <Link
                      href={link.href}
                      className="
                        text-text-light/80 hover:text-accent
                        text-sm font-medium tracking-wide
                        transition-colors duration-200
                        relative py-2 flex items-center gap-1
                        after:absolute after:bottom-0 after:left-0 after:right-0
                        after:h-0.5 after:bg-accent
                        after:scale-x-0 hover:after:scale-x-100
                        after:transition-transform after:duration-200
                        after:origin-left
                      "
                    >
                      {link.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>

                    {/* Desktop Dropdown */}
                    <div
                      className={`
                        absolute top-full left-0 mt-2 w-72
                        bg-primary-dark/95 backdrop-blur-md
                        border border-border-subtle rounded-xl
                        shadow-xl shadow-black/20
                        transition-all duration-150 origin-top
                        ${
                          isServicesOpen
                            ? "opacity-100 visible scale-100"
                            : "opacity-0 invisible scale-95 pointer-events-none"
                        }
                      `}
                    >
                      <div className="py-2">
                        {serviceItems.map((service) => (
                          <Link
                            key={service.id}
                            href={service.href}
                            onClick={handleLinkClick}
                            className="
                              block px-4 py-2.5
                              text-sm text-text-light/80
                              hover:bg-secondary-dark/60 hover:text-accent
                              transition-all duration-150 ease-out
                              border-l-2 border-transparent hover:border-accent
                            "
                          >
                            {tServices(`${service.id}.title` as "salg.title")}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
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
                )}
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
            w-[calc(100%-60px)] max-w-xs
            border-l border-border-subtle shadow-2xl
            transform transition-transform duration-300 ease-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
              role="dialog"
              aria-modal="true"
              style={{ backgroundColor: "#1a1a1a" }}
            >
              <div className="flex h-full flex-col px-4 py-6 overflow-y-auto">
                <div className="flex items-center justify-between shrink-0 mb-6">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/logos/lm-studio-logo.png"
                      alt="LM Studio & Musikkservice"
                      width={56}
                      height={30}
                      className="h-7 w-auto object-contain"
                    />
                    <span className="text-xs font-semibold tracking-wide text-text-light/80 truncate">
                      {businessInfo.name}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Lukk meny"
                    className="rounded-full p-1.5 text-text-light/70 hover:text-accent transition-colors shrink-0"
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

                <nav className="flex-1 min-h-0 overflow-y-auto -mx-4 px-4">
                  <ul className="flex flex-col gap-1.5">
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
                        {link.hasDropdown ? (
                          <div>
                            <button
                              onClick={() => setIsServicesOpen(!isServicesOpen)}
                              className="
                                w-full flex items-center justify-between
                                rounded-lg px-3 py-2.5
                                text-sm font-medium text-text-light
                                hover:bg-secondary-dark/60 hover:text-accent
                                transition-colors duration-200
                                border border-border-subtle/40
                              "
                            >
                              {link.label}
                              <svg
                                className={`w-4 h-4 transition-transform duration-200 shrink-0 ${
                                  isServicesOpen ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>

                            {/* Mobile Dropdown */}
                            <div
                              className={`
                                overflow-hidden transition-all duration-300
                                ${
                                  isServicesOpen
                                    ? "max-h-[400px] opacity-100 mt-1.5"
                                    : "max-h-0 opacity-0"
                                }
                              `}
                            >
                              <div className="space-y-0.5 pl-1">
                                {serviceItems.map((service) => (
                                  <Link
                                    key={service.id}
                                    href={service.href}
                                    onClick={handleLinkClick}
                                    className="
                                      block rounded-md px-3 py-2
                                      text-xs text-text-light/80
                                      hover:bg-secondary-dark/40 hover:text-accent
                                      transition-colors duration-150
                                      border-l-2 border-border-subtle/40 hover:border-accent
                                    "
                                  >
                                    {tServices(
                                      `${service.id}.title` as "salg.title"
                                    )}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={link.href}
                            onClick={handleLinkClick}
                            className="
                              block rounded-lg px-3 py-2.5
                              text-sm font-medium text-text-light
                              hover:bg-secondary-dark/60 hover:text-accent
                              transition-colors duration-200
                              border border-border-subtle/40
                            "
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>

                <div
                  className={`
                mt-4 pt-3 border-t border-border-subtle/40 shrink-0
                transform transition-all duration-300 delay-300
                ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }
              `}
                >
                  <div className="space-y-2 text-[11px]">
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-text-light/80 hover:text-accent transition-colors duration-200"
                    >
                      <svg
                        className="w-3 h-3 shrink-0"
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
                      <span className="truncate">
                        {contactInfo.phone} (Geir-Harry)
                      </span>
                    </a>

                    <a
                      href={`tel:${additionalContacts.evaPhone.replace(
                        /\s/g,
                        ""
                      )}`}
                      className="flex items-center gap-2 text-text-light/80 hover:text-accent transition-colors duration-200"
                    >
                      <svg
                        className="w-3 h-3 shrink-0"
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
                      <span className="truncate">
                        {additionalContacts.evaPhone} (Eva)
                      </span>
                    </a>

                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="flex items-center gap-2 text-text-light/80 hover:text-accent transition-colors duration-200"
                    >
                      <svg
                        className="w-3 h-3 shrink-0"
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
                      <span className="truncate">{contactInfo.email}</span>
                    </a>

                    <div className="flex items-start gap-2 text-text-light/70 pt-0.5">
                      <svg
                        className="w-3 h-3 shrink-0 mt-0.5"
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
                      <span className="leading-tight text-[10px]">
                        {contactInfo.address}, {contactInfo.postalCode}{" "}
                        {contactInfo.city}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-border-subtle/40">
                    <LanguageSwitcher variant="mobile" />
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
