"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

type LanguageSwitcherProps = {
  isScrolled?: boolean;
  variant?: "topbar" | "mobile";
};

const FlagIcon = ({ locale }: { locale: "no" | "en" }) => {
  if (locale === "no") {
    return (
      <svg className="w-4 h-3" viewBox="0 0 24 18" aria-hidden="true">
        <rect width="24" height="18" fill="#d21f3c" />
        <rect x="5" width="4" height="18" fill="#fff" />
        <rect y="7" width="24" height="4" fill="#fff" />
        <rect x="6" width="2" height="18" fill="#00205b" />
        <rect y="8" width="24" height="2" fill="#00205b" />
      </svg>
    );
  }

  return (
    <svg className="w-4 h-3" viewBox="0 0 24 18" aria-hidden="true">
      <rect width="24" height="18" fill="#012169" />
      <path
        fill="#fff"
        d="M0 0h3.5L24 14v4h-3.5L0 4V0zm24 0v4L7 18H3.5L24 0z"
      />
      <path
        fill="#c8102e"
        d="M3.5 0L24 15v-2L5.5 0H3.5zm17 18L0 3v2l18.5 13H20.5z"
      />
      <path fill="#fff" d="M9.5 0h5v18h-5z" />
      <path fill="#fff" d="M0 6.5h24v5H0z" />
      <path fill="#c8102e" d="M10.5 0h3v18h-3z" />
      <path fill="#c8102e" d="M0 7.5h24v3H0z" />
    </svg>
  );
};

export default function LanguageSwitcher({
  isScrolled,
  variant = "topbar",
}: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
      const newPath = `/${newLocale}${pathWithoutLocale}`;
      router.push(newPath);
    });
  };

  const languages: Array<{ code: "no" | "en"; label: string }> = [
    { code: "no", label: "NO" },
    { code: "en", label: "EN" },
  ];

  // Mobile variant - full width buttons matching mobile menu style
  if (variant === "mobile") {
    return (
      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium text-text-light/60 mb-1">
          Language / Språk
        </p>
        <div className="flex gap-2">
          {languages.map((lang) => {
            const isActive = locale === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => switchLocale(lang.code)}
                disabled={isPending}
                aria-label={`Switch to ${
                  lang.label === "NO" ? "Norwegian" : "English"
                }`}
                aria-pressed={isActive}
                className={`
                  flex-1 flex items-center justify-center gap-2
                  rounded-xl px-4 py-3
                  text-sm font-medium
                  transition-all duration-200
                  border
                  ${
                    isActive
                      ? "bg-accent/10 text-accent border-accent/40"
                      : "bg-secondary-dark/60 text-text-light/70 border-border-subtle/40 hover:bg-secondary-dark hover:text-accent hover:border-accent/20"
                  }
                  ${isPending ? "opacity-50 cursor-wait" : "cursor-pointer"}
                `}
              >
                <FlagIcon locale={lang.code} />
                <span>{lang.code === "no" ? "Norwegian" : "English"}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Topbar variant - compact horizontal layout
  return (
    <div className="flex items-center gap-2">
      {languages.map((lang, index) => {
        const isActive = locale === lang.code;
        return (
          <div key={lang.code} className="flex items-center gap-2">
            <button
              onClick={() => switchLocale(lang.code)}
              disabled={isPending}
              aria-label={`Switch to ${
                lang.label === "NO" ? "Norwegian" : "English"
              }`}
              aria-pressed={isActive}
              className={`flex items-center gap-1.5 transition-colors text-xs font-medium uppercase cursor-pointer ${
                isActive
                  ? isScrolled
                    ? "text-primary-dark"
                    : "text-text-light drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                  : isScrolled
                  ? "text-primary-dark/50 hover:text-primary-dark/80"
                  : "text-text-light/50 hover:text-text-light/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
              } ${isPending ? "opacity-50 cursor-wait" : ""}`}
            >
              <FlagIcon locale={lang.code} />
              <span>{lang.label}</span>
            </button>
            {index === 0 && (
              <span
                className={
                  isScrolled ? "text-primary-dark/30" : "text-text-light/30"
                }
              >
                |
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
