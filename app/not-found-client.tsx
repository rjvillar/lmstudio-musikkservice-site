"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function NotFoundClient() {
  const [mounted, setMounted] = useState(false);
  const [locale, setLocale] = useState<"no" | "en">("no");

  useEffect(() => {
    const pathLocale = window.location.pathname.split("/")[1];
    if (pathLocale === "en" || pathLocale === "no") {
      setLocale(pathLocale);
    }
    setMounted(true);
  }, []);

  const translations = {
    no: {
      code: "404",
      heading: "Siden ble ikke funnet",
      message: "Beklager, siden du leter etter finnes ikke.",
      button: "Tilbake til forsiden",
    },
    en: {
      code: "404",
      heading: "Page not found",
      message: "Sorry, the page you're looking for doesn't exist.",
      button: "Back to home",
    },
  };

  const t = translations[locale as keyof typeof translations];

  if (!mounted) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2d2d2d",
          zIndex: 9999,
        }}
      />
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        backgroundColor: "#2d2d2d",
        margin: 0,
        overflow: "hidden",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "32rem",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "6rem",
            fontWeight: 700,
            color: "#c9a66b",
            margin: "0 0 1rem 0",
            lineHeight: 1,
            fontFamily:
              "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          {t.code}
        </h1>

        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#f8f7f5",
            margin: "0 0 0.75rem 0",
            fontFamily:
              "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          {t.heading}
        </h2>

        <p
          style={{
            fontSize: "1rem",
            color: "#e8e6e3",
            margin: "0 0 2rem 0",
            lineHeight: 1.6,
            fontFamily:
              "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          {t.message}
        </p>

        <Link
          href={locale === "en" ? "/en" : "/"}
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            fontWeight: 500,
            backgroundColor: "#c9a66b",
            color: "#1a1a1a",
            textDecoration: "none",
            borderRadius: "0.375rem",
            transition: "background-color 0.2s",
            fontFamily:
              "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#d4b67a";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#c9a66b";
          }}
        >
          {t.button}
        </Link>
      </div>
    </div>
  );
}
