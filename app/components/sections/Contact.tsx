"use client";

import { useState, type FormEvent } from "react";
import { Container, SectionHeading, Button, Card } from "@/app/components/ui";
import { contactInfo, additionalContacts, openingHours } from "@/app/lib/data";

/**
 * Contact Section Component - Redesigned
 *
 * Professional contact section with improved UX and real LM Studio data:
 * - Left: Clean contact form with enhanced validation
 * - Right: Direct contact cards (phone, email, address) + embedded Google Maps + opening hours
 * - Balanced spacing and visual hierarchy
 * - Dark theme with gold accents
 * - Mobile-responsive layout
 *
 * Real contact information:
 * - Geir-Harry: 901 69 390
 * - Eva: 472 93 768
 * - Email: ghh42@live.no
 * - Address: Rennbergsvegen 24, 2384 Brumunddal
 * - Opening: By appointment (Etter avtale)
 */

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Validate form fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Vennligst fyll inn navn";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Vennligst fyll inn telefonnummer";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Vennligst fyll inn e-postadresse";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Vennligst fyll inn en gyldig e-postadresse";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Vennligst skriv en melding";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call - replace with actual form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch {
      setSubmitStatus("error");

      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      id="kontakt"
      className="py-24 md:py-32 bg-primary-dark"
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className="mb-16">
          <SectionHeading
            title="Kontakt oss"
            subtitle="Vi hører gjerne fra deg – ta kontakt for spørsmål, service eller en uforpliktende prat"
            light
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Form */}
          <div className="order-2 lg:order-1">
            <Card padding="lg" className="h-full">
              <h3 className="text-xl font-semibold text-text-light mb-2">
                Send oss en melding
              </h3>
              <p className="text-text-muted text-sm mb-8">
                Fyll ut skjemaet nedenfor, så tar vi kontakt så snart som mulig
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name and Phone Row */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-light mb-2"
                    >
                      Navn <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`
                        w-full px-4 py-3 rounded-lg
                        bg-primary-dark border
                        text-text-light placeholder-text-muted/50
                        transition-all duration-200
                        focus:outline-none focus:ring-2 focus:ring-accent/50
                        ${
                          errors.name
                            ? "border-red-500 focus:border-red-500 ring-2 ring-red-500/20"
                            : "border-border-subtle hover:border-accent/30 focus:border-accent"
                        }
                      `}
                      placeholder="Ditt fulle navn"
                      title={errors.name || ""}
                      aria-invalid={!!errors.name}
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-text-light mb-2"
                    >
                      Telefon <span className="text-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`
                        w-full px-4 py-3 rounded-lg
                        bg-primary-dark border
                        text-text-light placeholder-text-muted/50
                        transition-all duration-200
                        focus:outline-none focus:ring-2 focus:ring-accent/50
                        ${
                          errors.phone
                            ? "border-red-500 focus:border-red-500 ring-2 ring-red-500/20"
                            : "border-border-subtle hover:border-accent/30 focus:border-accent"
                        }
                      `}
                      placeholder="Ditt telefonnummer"
                      title={errors.phone || ""}
                      aria-invalid={!!errors.phone}
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-light mb-2"
                  >
                    E-post <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`
                      w-full px-4 py-3 rounded-lg
                      bg-primary-dark border
                      text-text-light placeholder-text-muted/50
                      transition-all duration-200
                      focus:outline-none focus:ring-2 focus:ring-accent/50
                      ${
                        errors.email
                          ? "border-red-500 focus:border-red-500 ring-2 ring-red-500/20"
                          : "border-border-subtle hover:border-accent/30 focus:border-accent"
                      }
                    `}
                    placeholder="din@epost.no"
                    title={errors.email || ""}
                    aria-invalid={!!errors.email}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-light mb-2"
                  >
                    Melding <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`
                      w-full px-4 py-3 rounded-lg
                      bg-primary-dark border
                      text-text-light placeholder-text-muted/50
                      transition-all duration-200
                      resize-none
                      focus:outline-none focus:ring-2 focus:ring-accent/50
                      ${
                        errors.message
                          ? "border-red-500 focus:border-red-500 ring-2 ring-red-500/20"
                          : "border-border-subtle hover:border-accent/30 focus:border-accent"
                      }
                    `}
                    placeholder="Fortell oss hva du lurer på..."
                    title={errors.message || ""}
                    aria-invalid={!!errors.message}
                  />
                </div>

                {/* Submit Button & Status */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    loading={isSubmitting}
                    disabled={isSubmitting}
                  >
                    Send melding
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          {/* Right Column: Contact Info, Map, Hours */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-light mb-4">
                Direkte kontakt
              </h3>

              {/* Phone Cards - Side by Side */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Geir-Harry Phone */}
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="
                    flex items-center gap-4 p-4 rounded-xl
                    bg-secondary-dark border border-border-subtle
                    hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5
                    transition-all duration-200
                    group
                  "
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-colors">
                    <svg
                      className="w-6 h-6 text-accent"
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
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Geir-Harry</p>
                    <p className="text-text-light font-medium group-hover:text-accent transition-colors">
                      {contactInfo.phone}
                    </p>
                  </div>
                </a>

                {/* Eva Phone */}
                <a
                  href={`tel:${additionalContacts.evaPhone.replace(/\s/g, "")}`}
                  className="
                    flex items-center gap-4 p-4 rounded-xl
                    bg-secondary-dark border border-border-subtle
                    hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5
                    transition-all duration-200
                    group
                  "
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-colors">
                    <svg
                      className="w-6 h-6 text-accent"
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
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Eva</p>
                    <p className="text-text-light font-medium group-hover:text-accent transition-colors">
                      {additionalContacts.evaPhone}
                    </p>
                  </div>
                </a>
              </div>

              {/* Email Card */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="
                  flex items-center gap-4 p-4 rounded-xl
                  bg-secondary-dark border border-border-subtle
                  hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5
                  transition-all duration-200
                  group
                "
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-colors">
                  <svg
                    className="w-6 h-6 text-accent"
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
                </div>
                <div>
                  <p className="text-xs text-text-muted">E-post</p>
                  <p className="text-text-light font-medium group-hover:text-accent transition-colors break-all">
                    {contactInfo.email}
                  </p>
                </div>
              </a>

              {/* Address Card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary-dark border border-border-subtle">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-accent"
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
                </div>
                <div>
                  <p className="text-xs text-text-muted mb-1">Adresse</p>
                  <address className="not-italic text-text-light font-medium leading-relaxed">
                    {contactInfo.address}
                    <br />
                    {contactInfo.postalCode} {contactInfo.city}
                  </address>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <Card>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary-dark border border-border-subtle">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-text-muted mb-1">Åpningstider</p>
                  <p className="text-accent font-semibold text-lg">
                    {openingHours.note}
                  </p>
                  <p className="text-text-muted text-sm mt-2">
                    Vi har ingen faste åpningstider – alt ordnes etter behov.
                    Ring eller send e-post for å avtale tid.
                  </p>
                </div>
              </div>
            </Card>

            {/* Organization Number */}
            <div className="text-center pt-2">
              <p className="text-text-muted text-sm">
                Org.nr:{" "}
                <span className="font-medium text-text-light">
                  {contactInfo.orgNumber}
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Toast Notifications - Fixed Position */}
      {submitStatus === "success" && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div
            className="p-4 rounded-xl bg-green-900/95 backdrop-blur-sm border border-green-700/50 text-green-300 shadow-2xl shadow-green-900/50 min-w-[320px]"
            role="alert"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-green-700/30 flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white">Melding sendt!</p>
                <p className="text-sm mt-1 text-green-300/90">
                  Takk for din henvendelse. Vi tar kontakt så snart som mulig.
                </p>
              </div>
              <button
                onClick={() => setSubmitStatus("idle")}
                className="text-green-400 hover:text-green-300 transition-colors cursor-pointer"
                aria-label="Lukk melding"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div
            className="p-4 rounded-xl bg-red-900/95 backdrop-blur-sm border border-red-700/50 text-red-300 shadow-2xl shadow-red-900/50 min-w-[320px]"
            role="alert"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-red-700/30 flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-red-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white">Noe gikk galt</p>
                <p className="text-sm mt-1 text-red-300/90">
                  Beklager, vi kunne ikke sende meldingen. Vennligst prøv igjen
                  eller kontakt oss direkte.
                </p>
              </div>
              <button
                onClick={() => setSubmitStatus("idle")}
                className="text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                aria-label="Lukk melding"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
