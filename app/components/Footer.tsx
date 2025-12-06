import Link from "next/link";
import Image from "next/image";
import { Container } from "@/app/components/ui";
import {
  businessInfo,
  contactInfo,
  navigationLinks,
  additionalContacts,
} from "@/app/lib/data";

/**
 * Footer Component - Redesigned
 *
 * Modern footer inspired by professional service websites with:
 * - Clean 3-column layout (Brand + Navigation + Contact)
 * - Organized business information
 * - Direct contact details with icons
 * - Simplified bottom bar with copyright and legal info
 * - Minimal, professional aesthetic
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-secondary-dark border-t border-border-subtle"
      role="contentinfo"
    >
      {/* Main Footer Content */}
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Brand & Info Column */}
            <div>
              {/* Logo */}
              <Link href="/" className="flex items-center gap-4 group mb-0">
                <div className="relative w-21 h-21 shrink-0">
                  <Image
                    src="/images/logos/lm-studio-logo.png"
                    alt="LM Studio & Musikkservice"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-text-light tracking-tight leading-tight">
                    LM Studio
                  </span>
                  <span className="text-sm text-accent font-medium -mt-0.5">
                    & Musikkservice
                  </span>
                </div>
              </Link>

              {/* Company Info */}
              <div className="space-y-2 text-sm mb-4">
                <p className="text-text-muted mb-0">
                  <span className="text-text-light font-semibold">Org.nr:</span>{" "}
                  {contactInfo.orgNumber}
                </p>
                <p className="text-text-muted">
                  <span className="text-text-light font-semibold">
                    Etablert:
                  </span>{" "}
                  2001
                </p>
              </div>

              {/* Description */}
              <p className="text-text-muted text-sm leading-relaxed max-w-xs mb-6">
                {businessInfo.tagline}
              </p>
            </div>

            {/* Navigate Column */}
            <div>
              <h3 className="text-sm font-bold text-text-light uppercase tracking-wider mb-5">
                Navigasjon
              </h3>
              <ul className="space-y-2">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-text-muted text-sm hover:text-accent transition-colors duration-200 inline-flex items-center gap-2.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="https://www.google.com/maps/place/Rennbergsvegen+24,+2384+Brumunddal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted text-sm hover:text-accent transition-colors duration-200 inline-flex items-center gap-2.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                    Finn oss
                  </a>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-text-muted text-sm hover:text-accent transition-colors duration-200 inline-flex items-center gap-2.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                    Personvern
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-sm font-bold text-text-light uppercase tracking-wider mb-5">
                Kontakt
              </h3>
              <address className="not-italic space-y-3">
                {/* Phone - Geir-Harry */}
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-text-muted hover:text-accent transition-colors duration-200 group"
                >
                  <svg
                    className="w-4 h-4 text-accent shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-sm">{contactInfo.phone}</span>
                </a>

                {/* Phone - Eva */}
                <a
                  href={`tel:${additionalContacts.evaPhone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-text-muted hover:text-accent transition-colors duration-200 group"
                >
                  <svg
                    className="w-4 h-4 text-accent shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-sm">{additionalContacts.evaPhone}</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-text-muted hover:text-accent transition-colors duration-200 group"
                >
                  <svg
                    className="w-4 h-4 text-accent shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm">{contactInfo.email}</span>
                </a>

                {/* Address */}
                <div className="flex items-start gap-3 text-text-muted">
                  <svg
                    className="w-4 h-4 text-accent mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm">
                    {contactInfo.address}
                    <br />
                    {contactInfo.postalCode} {contactInfo.city}
                  </span>
                </div>
              </address>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-border-subtle bg-primary-dark/50">
        <Container>
          <div className="py-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-text-muted">
            <p>
              © {currentYear} {businessInfo.name}. Alle rettigheter reservert.
            </p>
            <p>Profesjonell tjeneste siden 2001</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
