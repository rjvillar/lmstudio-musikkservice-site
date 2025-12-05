import { Container, SectionHeading, Card } from "@/app/components/ui";
import { services, type Service } from "@/app/lib/data";

/**
 * Services Section Component
 *
 * Grid-based display of all services with:
 * - Responsive card layout (1-3 columns)
 * - Custom icons for each service
 * - Hover effects with accent color highlighting
 * - Alternating dark/light section for visual rhythm
 */

// Service Icons Component - Returns appropriate SVG based on icon name
function ServiceIcon({ icon }: { icon: string }) {
  const iconClasses = "w-8 h-8 text-accent";

  const icons: Record<string, React.ReactNode> = {
    accordion: (
      <svg
        className={iconClasses}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <rect x="4" y="4" width="6" height="16" rx="1" />
        <rect x="14" y="4" width="6" height="16" rx="1" />
        <path d="M10 8h4M10 12h4M10 16h4" strokeLinecap="round" />
      </svg>
    ),
    wrench: (
      <svg
        className={iconClasses}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
        />
      </svg>
    ),
    "music-note": (
      <svg
        className={iconClasses}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
        />
      </svg>
    ),
    microphone: (
      <svg
        className={iconClasses}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
        />
      </svg>
    ),
    speaker: (
      <svg
        className={iconClasses}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
        />
      </svg>
    ),
    digital: (
      <svg
        className={iconClasses}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
    notes: (
      <svg
        className={iconClasses}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
    midi: (
      <svg
        className={iconClasses}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-.628.105a9.002 9.002 0 01-9.014 0l-.628-.105c-1.717-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
  };

  return icons[icon] || icons["music-note"];
}

// Individual Service Card
function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="group h-full">
      {/* Icon container */}
      <div
        className="
          w-14 h-14 rounded-xl
          bg-accent/10 
          flex items-center justify-center
          mb-6
          group-hover:bg-accent/20
          transition-colors duration-300
        "
      >
        <ServiceIcon icon={service.icon} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-text-light mb-3">
        {service.title}
      </h3>
      <p className="text-text-muted leading-relaxed">{service.description}</p>

      {/* Learn more link */}
      <div className="mt-6 flex items-center gap-2 text-accent font-medium group/link">
        <span className="text-sm">Les mer</span>
        <svg
          className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Card>
  );
}

export default function Services() {
  return (
    <section
      id="tjenester"
      className="py-24 md:py-32 bg-primary-dark"
      aria-labelledby="services-heading"
    >
      <Container>
        {/* Visual Divider */}
        <div className="flex justify-center mb-12" aria-hidden="true">
          <div className="w-16 h-1 bg-accent rounded-full" />
        </div>

        <SectionHeading
          title="Våre tjenester"
          subtitle="Alt du trenger – under ett tak"
          light
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Decorative element */}
        <div className="mt-16 flex justify-center" aria-hidden="true">
          <div className="flex items-center gap-4 text-text-muted/50 text-sm">
            <span className="w-12 h-px bg-border-subtle" />
            <span>Siden 2001</span>
            <span className="w-12 h-px bg-border-subtle" />
          </div>
        </div>
      </Container>
    </section>
  );
}
