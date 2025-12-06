import { Header, Footer, TopBar } from "@/app/components";
import {
  Hero,
  Services,
  About,
  Music,
  Gallery,
  Contact,
  Map,
} from "@/app/components/sections";

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

      <TopBar />
      <Header />

      <main id="main-content">
        <Hero />
        <Services />
        <About />
        <Music />
        <Gallery />
        <Contact />
        <Map />
      </main>

      <Footer />
    </>
  );
}
