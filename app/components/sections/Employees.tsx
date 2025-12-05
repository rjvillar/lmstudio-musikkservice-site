import { Container, SectionHeading, Card } from "@/app/components/ui";
import { employees, type Employee } from "@/app/lib/data";

/**
 * Employees Section Component
 *
 * Team member showcase with:
 * - Profile cards with images
 * - Contact information per employee
 * - Hover effects for interactivity
 * - Responsive grid layout
 */

function EmployeeCard({ employee }: { employee: Employee }) {
  return (
    <Card padding="none" className="overflow-hidden group">
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary-dark">
        {/* Placeholder - replace with actual images */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark to-primary-dark flex items-center justify-center">
          <svg
            className="w-20 h-20 text-accent/20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>

        {/* Image will go here */}
        {/* <Image
          src={employee.image}
          alt={`Portrett av ${employee.name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        /> */}

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-60"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name and role */}
        <h3 className="text-xl font-semibold text-text-light">
          {employee.name}
        </h3>
        <p className="text-accent text-sm font-medium mt-1">{employee.role}</p>

        {/* Bio */}
        <p className="text-text-muted text-sm mt-4 leading-relaxed line-clamp-3">
          {employee.bio}
        </p>

        {/* Contact links */}
        <div className="mt-6 flex flex-wrap gap-3">
          {employee.phone && (
            <a
              href={`tel:${employee.phone.replace(/\s/g, "")}`}
              className="
                inline-flex items-center gap-2
                px-3 py-1.5 rounded-lg
                bg-secondary-dark border border-border-subtle
                text-text-muted text-sm
                hover:border-accent/50 hover:text-accent
                transition-colors duration-200
              "
              aria-label={`Ring ${employee.name}`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Ring</span>
            </a>
          )}
          {employee.email && (
            <a
              href={`mailto:${employee.email}`}
              className="
                inline-flex items-center gap-2
                px-3 py-1.5 rounded-lg
                bg-secondary-dark border border-border-subtle
                text-text-muted text-sm
                hover:border-accent/50 hover:text-accent
                transition-colors duration-200
              "
              aria-label={`Send e-post til ${employee.name}`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>E-post</span>
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}

export default function Employees() {
  return (
    <section
      id="ansatte"
      className="py-24 md:py-32 bg-off-white overflow-hidden"
      aria-labelledby="employees-heading"
    >
      <Container>
        <SectionHeading
          title="Vårt team"
          subtitle="Møt menneskene bak LM Studio & Musikkservice"
        />

        {/* Employees Grid - Centered for 2 employees */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {employees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>

        {/* Team values - Simplified */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-primary-dark text-sm mb-1">
              Lidenskap
            </h3>
            <p className="text-xs text-primary-dark/60">
              Musikken driver alt vi gjør
            </p>
          </div>
          <div className="p-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-primary-dark text-sm mb-1">
              Tillit
            </h3>
            <p className="text-xs text-primary-dark/60">30+ års erfaring</p>
          </div>
          <div className="p-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-primary-dark text-sm mb-1">
              Personlig
            </h3>
            <p className="text-xs text-primary-dark/60">Tilpasset hver kunde</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
