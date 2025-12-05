"use client";

import { useState, useEffect } from "react";
import { contactInfo, additionalContacts } from "@/app/lib/data";

/**
 * TopBar Component
 *
 * Top contact bar that appears above the main navigation.
 * Contains phone numbers and email on the left, location on the right.
 * Transparent when at top, solid accent background when scrolled.
 */

export default function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        hidden md:block
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled ? "bg-accent" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center">
        <div className="flex-1 flex flex-wrap justify-between items-center gap-2 text-sm">
          {/* Left - Contact Info */}
          <div
            className={`
              flex flex-wrap items-center gap-4 transition-colors duration-300
              ${
                isScrolled
                  ? "text-primary-dark"
                  : "text-text-light drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
              }
            `}
          >
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className={`
                flex items-center gap-2 transition-colors
                ${
                  isScrolled
                    ? "hover:text-primary-dark/70"
                    : "hover:text-accent"
                }
              `}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>{contactInfo.phone}</span>
            </a>
            <span
              className={`hidden md:inline ${
                isScrolled ? "text-primary-dark/50" : "text-text-light/50"
              }`}
            >
              |
            </span>
            <a
              href={`tel:${additionalContacts.evaPhone.replace(/\s/g, "")}`}
              className={`
                hidden md:flex items-center gap-2 transition-colors
                ${
                  isScrolled
                    ? "hover:text-primary-dark/70"
                    : "hover:text-accent"
                }
              `}
            >
              <span>{additionalContacts.evaPhone}</span>
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className={`
                flex items-center gap-2 transition-colors
                ${
                  isScrolled
                    ? "hover:text-primary-dark/70"
                    : "hover:text-accent"
                }
              `}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="hidden sm:inline">{contactInfo.email}</span>
            </a>
          </div>

          {/* Right - Location */}
          <div
            className={`
              hidden lg:flex items-center gap-2 transition-colors duration-300
              ${
                isScrolled
                  ? "text-primary-dark/80"
                  : "text-text-light/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
              }
            `}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
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
            <span>
              {contactInfo.address}, {contactInfo.postalCode} {contactInfo.city}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
