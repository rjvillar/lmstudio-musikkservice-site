"use client";

export default function Map() {
  return (
    <section className="w-full h-[300px] md:h-[340px] bg-secondary-dark relative overflow-x-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1845.3501283801445!2d10.836125299999997!3d60.8832408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4641d8ae9ee2b6ed%3A0xd56ebf6cf96256b8!2sLM%20STUDIO%20%26%20MUSIKKSERVICE!5e1!3m2!1sen!2sph!4v1765068428243!5m2!1sen!2sph"
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
