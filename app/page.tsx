import { Header, Footer, TopBar } from "@/app/components";
import {
  Hero,
  Services,
  About,
  Music,
  Gallery,
  Contact,
} from "@/app/components/sections";

/**
 * LM Studio & Musikkservice - Home Page
 *
 * This is the main landing page for the website, featuring:
 * - Hero section with brand introduction
 * - Services overview
 * - About section with founder story
 * - Music & Recordings showcase
 * - Image gallery
 * - Contact form and information
 *
 * Design Philosophy:
 * The page follows Scandinavian minimalist principles with a music studio
 * aesthetic. Dark backgrounds with warm accent colors create a professional
 * yet inviting atmosphere appropriate for a music service business.
 */

export default function Home() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="
          sr-only focus:not-sr-only
          focus:absolute focus:top-4 focus:left-4 focus:z-100
          focus:px-4 focus:py-2 focus:rounded-lg
          focus:bg-accent focus:text-primary-dark
          focus:font-medium
        "
      >
        Hopp til hovedinnhold
      </a>

      {/* Top contact bar */}
      <TopBar />

      {/* Header with navigation */}
      <Header />

      {/* Main content */}
      <main id="main-content">
        {/* Hero - Full screen introduction */}
        <Hero />

        {/* Services - What we offer */}
        <Services />

        {/* About - Our story */}
        <About />

        {/* Music - Recordings showcase */}
        <Music />

        {/* Gallery - Visual showcase */}
        <Gallery />

        {/* Contact - Get in touch */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
