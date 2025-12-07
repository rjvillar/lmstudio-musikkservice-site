"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, SectionHeading, Button, Card } from "@/app/components/ui";
import { contactInfo, additionalContacts, openingHours } from "@/app/lib/data";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  privacyConsent: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  privacyConsent?: string;
}

function ErrorPopover({ message }: { message: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-6 h-6 rounded bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center cursor-help">
        <span className="text-yellow-500 text-sm font-bold">!</span>
      </div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-10 right-0 top-8 w-64"
          >
            <div className="bg-yellow-900/95 backdrop-blur-sm border border-yellow-700/50 rounded-lg p-3 shadow-xl">
              <div className="absolute -top-1 right-2 w-2 h-2 bg-yellow-900 border-t border-l border-yellow-700/50 rotate-45"></div>
              <p className="text-yellow-200 text-xs leading-relaxed">
                {message}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

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

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = "Du må godta vilkårene for å sende skjemaet";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        privacyConsent: false,
      });

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch {
      setSubmitStatus("error");

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      id="kontakt"
      className="py-24 md:py-32 bg-primary-dark overflow-x-hidden"
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

        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            className="order-2 lg:order-1"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
          >
            <Card padding="lg" className="h-full flex flex-col">
              <h3 className="text-xl font-semibold text-text-light mb-2">
                Send oss en melding
              </h3>
              <p className="text-text-muted text-sm mb-6">
                Fyll ut skjemaet nedenfor, så tar vi kontakt så snart som mulig
              </p>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5 flex-1 flex flex-col"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-light mb-2"
                    >
                      Navn <span className="text-accent">*</span>
                    </label>
                    <div className="relative">
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
                              ? "border-yellow-500/60 focus:border-yellow-500 ring-2 ring-yellow-500/20 pr-12"
                              : "border-border-subtle hover:border-accent/30 focus:border-accent"
                          }
                        `}
                        placeholder="Ditt fulle navn"
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <ErrorPopover message={errors.name} />
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-text-light mb-2"
                    >
                      Telefon
                    </label>
                    <div className="relative">
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
                              ? "border-yellow-500/60 focus:border-yellow-500 ring-2 ring-yellow-500/20 pr-12"
                              : "border-border-subtle hover:border-accent/30 focus:border-accent"
                          }
                        `}
                        placeholder="Ditt telefonnummer"
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <ErrorPopover message={errors.phone} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-light mb-2"
                  >
                    E-post <span className="text-accent">*</span>
                  </label>
                  <div className="relative">
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
                            ? "border-yellow-500/60 focus:border-yellow-500 ring-2 ring-yellow-500/20 pr-12"
                            : "border-border-subtle hover:border-accent/30 focus:border-accent"
                        }
                      `}
                      placeholder="din@epost.no"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <ErrorPopover message={errors.email} />
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-light mb-2"
                  >
                    Melding <span className="text-accent">*</span>
                  </label>
                  <div className="relative flex-1">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`
                        w-full h-full min-h-[100px] px-4 py-3 rounded-lg
                        bg-primary-dark border
                        text-text-light placeholder-text-muted/50
                        transition-all duration-200
                        resize-none
                        focus:outline-none focus:ring-2 focus:ring-accent/50
                        ${
                          errors.message
                            ? "border-yellow-500/60 focus:border-yellow-500 ring-2 ring-yellow-500/20 pr-12"
                            : "border-border-subtle hover:border-accent/30 focus:border-accent"
                        }
                      `}
                      placeholder="Fortell oss hva du lurer på..."
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <div className="absolute right-3 top-3">
                        <ErrorPopover message={errors.message} />
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacyConsent"
                    checked={formData.privacyConsent}
                    onChange={handleChange}
                    className={`mt-1 w-4 h-4 rounded border bg-primary-dark text-accent focus:ring-2 focus:ring-accent/50 focus:ring-offset-0 cursor-pointer ${
                      errors.privacyConsent
                        ? "border-yellow-500/60 ring-2 ring-yellow-500/20"
                        : "border-border-subtle"
                    }`}
                  />
                  <div className="flex-1">
                    <label
                      htmlFor="privacy"
                      className="text-sm text-text-muted leading-relaxed cursor-pointer"
                    >
                      Jeg godtar at LM Studio & Musikkservice kan lagre og
                      behandle mine opplysninger for å svare på denne
                      henvendelsen.
                    </label>
                    {errors.privacyConsent && (
                      <p className="text-yellow-500 text-xs mt-1">
                        {errors.privacyConsent}
                      </p>
                    )}
                  </div>
                </div>

                <div>
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
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex flex-col justify-between"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
          >
            <div>
              <h3 className="text-lg font-semibold text-text-light mb-4">
                Direkte kontakt
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-3">
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

              <a
                href={`mailto:${contactInfo.email}`}
                className="
                  flex items-center gap-4 p-4 rounded-xl mb-3
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

              <div className="flex items-start gap-4 p-4 rounded-xl mb-4 bg-secondary-dark border border-border-subtle">
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

            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-border-subtle mb-4 md:mb-2"></div>
              </div>
              <div className="relative flex justify-center mb-4 md:mb-2">
                <span className="bg-primary-dark px-4 text-sm text-text-muted">
                  Vi er alltid klare til å hjelpe
                </span>
              </div>
            </div>

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
          </motion.div>
        </motion.div>
      </Container>

      {submitStatus === "success" && (
        <div
          key="success-toast"
          className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-300"
        >
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
                type="button"
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
        <div
          key="error-toast"
          className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-300"
        >
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
                type="button"
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
