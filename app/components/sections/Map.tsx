"use client";

import { contactInfo } from "@/app/lib/data";

export default function Map() {
  return (
    <section className="w-full h-[300px] md:h-[340px] bg-secondary-dark relative">
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
          `${contactInfo.address}, ${contactInfo.postalCode} ${contactInfo.city}`
        )}&zoom=15`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Kart til LM Studio & Musikkservice"
        className="absolute inset-0"
      />
    </section>
  );
}
