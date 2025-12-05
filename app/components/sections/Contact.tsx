"use client";

import { useState, FormEvent } from "react";
import { Container, SectionHeading, Card, Button } from "@/app/components/ui";
import { contactInfo, openingHours } from "@/app/lib/data";

/**
 * Contact Section Component
 *
 * Comprehensive contact section with:
 * - Contact form with validation
 * - Business information display
 * - Interactive map placeholder
 * - Direct contact options
 *
 * Form handles client-side validation and displays success/error states.
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
    } catch {
      setSubmitStatus("error");
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
        <SectionHeading
          title="Kontakt oss"
          subtitle="Vi hører gjerne fra deg – ta kontakt for spørsmål eller avtale"
          light
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form - takes 3 columns */}
          <div className="lg:col-span-3">
            <Card padding="lg">
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="sm:col-span-2 md:col-span-1">
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
                        text-text-light placeholder-text-muted
                        transition-colors duration-200
                        ${
                          errors.name
                            ? "border-red-500 focus:border-red-500"
                            : "border-border-subtle focus:border-accent"
                        }
                      `}
                      placeholder="Ditt fulle navn"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-2 text-sm text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div className="sm:col-span-2 md:col-span-1">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-text-light mb-2"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="
                        w-full px-4 py-3 rounded-lg
                        bg-primary-dark border border-border-subtle
                        text-text-light placeholder-text-muted
                        transition-colors duration-200
                        focus:border-accent
                      "
                      placeholder="Ditt telefonnummer"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="sm:col-span-2">
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
                        text-text-light placeholder-text-muted
                        transition-colors duration-200
                        ${
                          errors.email
                            ? "border-red-500 focus:border-red-500"
                            : "border-border-subtle focus:border-accent"
                        }
                      `}
                      placeholder="din@epost.no"
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-2 text-sm text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="sm:col-span-2">
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
                        text-text-light placeholder-text-muted
                        transition-colors duration-200
                        resize-none
                        ${
                          errors.message
                            ? "border-red-500 focus:border-red-500"
                            : "border-border-subtle focus:border-accent"
                        }
                      `}
                      placeholder="Fortell oss hva du lurer på..."
                      aria-invalid={!!errors.message}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="mt-2 text-sm text-red-400"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button & Status */}
                <div className="mt-8">
                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    loading={isSubmitting}
                    disabled={isSubmitting}
                  >
                    Send melding
                  </Button>

                  {/* Success Message */}
                  {submitStatus === "success" && (
                    <div
                      className="mt-4 p-4 rounded-lg bg-green-900/30 border border-green-700 text-green-400 text-sm"
                      role="alert"
                    >
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>
                          Takk for din henvendelse! Vi tar kontakt snart.
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === "error" && (
                    <div
                      className="mt-4 p-4 rounded-lg bg-red-900/30 border border-red-700 text-red-400 text-sm"
                      role="alert"
                    >
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Noe gikk galt. Vennligst prøv igjen.</span>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </Card>
          </div>

          {/* Contact Info - takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Direct Contact */}
            <Card>
              <h3 className="text-lg font-semibold text-text-light mb-6">
                Direkte kontakt
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="
                    flex items-center gap-4 p-4 rounded-xl
                    bg-primary-dark border border-border-subtle
                    hover:border-accent/50
                    transition-colors duration-200
                    group
                  "
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
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
                    <p className="text-sm text-text-muted">Telefon</p>
                    <p className="text-text-light font-medium group-hover:text-accent transition-colors">
                      {contactInfo.phone}
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="
                    flex items-center gap-4 p-4 rounded-xl
                    bg-primary-dark border border-border-subtle
                    hover:border-accent/50
                    transition-colors duration-200
                    group
                  "
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
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
                    <p className="text-sm text-text-muted">E-post</p>
                    <p className="text-text-light font-medium group-hover:text-accent transition-colors">
                      {contactInfo.email}
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-primary-dark border border-border-subtle">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
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
                    <p className="text-sm text-text-muted">Adresse</p>
                    <address className="not-italic text-text-light font-medium">
                      {contactInfo.address}
                      <br />
                      {contactInfo.postalCode} {contactInfo.city}
                    </address>
                  </div>
                </div>
              </div>
            </Card>

            {/* Map Placeholder */}
            <Card padding="none" className="overflow-hidden">
              <div className="aspect-video bg-secondary-dark relative">
                {/* Map placeholder - replace with actual map embed */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 mx-auto text-accent/20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                    <p className="mt-4 text-text-muted text-sm">
                      Kartvisning kommer her
                    </p>
                    <p className="text-text-muted/60 text-xs mt-1">
                      (Google Maps eller lignende)
                    </p>
                  </div>
                </div>

                {/* Actual map embed would go here */}
                {/* <iframe
                  src="https://www.google.com/maps/embed?..."
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kart til LM Studio & Musikkservice"
                /> */}
              </div>

              {/* Address bar */}
              <div className="p-4 bg-primary-dark border-t border-border-subtle">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${contactInfo.address}, ${contactInfo.postalCode} ${contactInfo.city}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-between
                    text-sm text-text-muted hover:text-accent
                    transition-colors duration-200
                  "
                >
                  <span>Åpne i Google Maps</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </Card>

            {/* Opening Hours */}
            <Card>
              <h3 className="text-lg font-semibold text-text-light mb-4">
                Åpningstider
              </h3>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-primary-dark border border-border-subtle">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
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
                  <p className="text-accent font-semibold text-lg">
                    {openingHours.note}
                  </p>
                  <p className="text-text-muted text-sm mt-1">
                    {openingHours.description}
                  </p>
                  <p className="text-text-muted/70 text-xs mt-2">
                    Tilgjengelig: {openingHours.availability}
                  </p>
                </div>
              </div>
            </Card>

            {/* Organization Number */}
            <div className="text-center py-4">
              <p className="text-text-muted text-sm">
                Org.nr:{" "}
                <span className="font-medium">{contactInfo.orgNumber}</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
