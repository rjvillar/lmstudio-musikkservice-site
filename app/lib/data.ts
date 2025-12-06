/**
 * Data Layer for LM Studio & Musikkservice
 *
 * This file contains all placeholder data structured for easy replacement
 * with real content or CMS integration in the future.
 */

// ============================================================================
// TYPES
// ============================================================================

export interface Service {
  id: string;
  title: string;
  shortDescription: string; // 1-2 sentences for homepage preview
  fullDescription: string; // Detailed description for /services page
  bulletPoints?: string[]; // Optional structured details
  icon: string;
  image: string; // Placeholder image path
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  phone?: string;
  email?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface ContactInfo {
  address: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  orgNumber: string;
}

// ============================================================================
// BUSINESS INFORMATION (Based on official website: hauglands.no)
// ============================================================================

export const businessInfo = {
  name: "LM Studio & Musikkservice",
  tagline: "Din spesialist på trekkspill, toradere og musikk",
  shortDescription:
    "Salg, service og kurs innen trekkspill og toradere, samt musikkstudio, PA og digitalisering.",
  longDescription:
    "LM Studio & Musikkservice ligger mellom Brumunddal og Moelv, og leverer alt innen trekkspill, toradere og musikk-tekniske tjenester. Siden 2001 har vi hjulpet både entusiaster og profesjonelle med alt fra kjøp og service til innspilling og lydteknikk.",
  valueProps: [
    {
      title: "Riktig pris – riktig kvalitet",
      description:
        "Direkte import, lave kostnader og garanti på brukte instrumenter.",
    },
    {
      title: "Alt på ett sted",
      description:
        "Alt fra salg og service til kurs, studio og lydteknikk – hos oss får du alt under ett tak.",
    },
    {
      title: "Personlig oppfølging",
      description: "Vi tilpasser våre tjenester til dine ønsker og behov.",
    },
  ],
};

export const contactInfo: ContactInfo = {
  address: "Rennbergsvegen 24",
  postalCode: "2384",
  city: "Brumunddal",
  country: "Norge",
  phone: "901 69 390",
  email: "ghh42@live.no",
  orgNumber: "885 274 242",
};

// Additional phone for Eva
export const additionalContacts = {
  evaPhone: "472 93 768",
};

// Opening hours - by appointment
export const openingHours = {
  note: "Etter avtale",
  description:
    "Vi tar imot besøkende etter avtale. Ring eller send e-post for å avtale tidspunkt.",
  availability: "Hele året",
};

// ============================================================================
// SERVICES DATA
// ============================================================================

export const services: Service[] = [
  {
    id: "salg",
    title: "Salg av trekkspill og toradere",
    shortDescription:
      "Nye og brukte instrumenter med 3 måneders garanti. Direkte import gir riktig pris – riktig kvalitet.",
    fullDescription:
      "LM Studio & Musikkservice leverer alt innen trekkspill og toradere – både nye og brukte instrumenter. Gjennom direkte import og lave kostnader kan vi tilby konkurransedyktige priser uten å gå på kompromiss med kvalitet. Alle brukte instrumenter er nøye kontrollert og kommer med 3 måneders garanti.",
    bulletPoints: [
      "Nye trekkspill og toradere fra anerkjente produsenter",
      "Kontrollerte brukte instrumenter med 3 måneders garanti",
      "Direkte import gir deg riktig pris – riktig kvalitet",
      "Personlig veiledning og tilpasning til dine behov",
      "Prøv før du kjøper – book time for instrumenttesting",
    ],
    icon: "accordion",
    image: "/images/services/sale-of-accordions.png",
  },
  {
    id: "verksted",
    title: "Verksted og service",
    shortDescription:
      "Reparasjon, stemming og vedlikehold av alle typer trekkspill. Over 20 års erfaring.",
    fullDescription:
      "Vårt velutstyrte verksted håndterer alle typer reparasjoner, stemming og vedlikehold av trekkspill og toradere. Med over 20 års erfaring sikrer vi at instrumentet ditt kommer tilbake i topp stand. Små justeringer gjøres ofte mens du venter – større jobber planlegges etter pågangen.",
    bulletPoints: [
      "Reparasjon og stemming av alle typer trekkspill og toradere",
      "MIDI og digital montering på forespørsel",
      "Vedlikehold og generell service",
      "Små justeringer tas ofte fortløpende mens du venter",
      "Leveringstid varierer med størrelsen på reparasjonen",
    ],
    icon: "wrench",
    // Image: Nærbilde av verktøy som reparerer et trekkspill, stemmeutstyr
    image: "/images/services/reparerer-et-trekkspill.jpg",
  },
  {
    id: "kurs",
    title: "Kurs og undervisning",
    shortDescription:
      "Skreddersydd undervisning i trekkspill og toradere for alle nivåer.",
    fullDescription:
      "Vi tilbyr skreddersydd undervisning i trekkspill og toradere – uansett om du er nybegynner eller ønsker å utvikle ferdighetene dine videre. Kursene tilpasses ditt nivå og dine musikalske mål, og støttetimer kan bestilles ved behov.",
    bulletPoints: [
      "Individuell undervisning tilpasset nivå og mål",
      "Kurser for både nybegynnere og viderekomne",
      "Støttetimer kan bestilles ved behov",
      "Fleksible tidspunkter etter avtale",
      "Fokus på både teknikk og musikalsk utvikling",
    ],
    icon: "music-note",
    // Image: Undervisningssetting, trekkspillinstruktør med elev
    image: "/images/services/trekkspillkurs.png",
  },
  {
    id: "studio",
    title: "Musikkstudio",
    shortDescription:
      "Profesjonell innspilling, miksing og mastering. Fra demo til ferdig album siden 2001.",
    fullDescription:
      "LM Studio har produsert og spilt inn musikk for artister fra hele landet siden 2001. Vi følger deg gjennom hele prosessen – fra idé til ferdig innspilt demo eller album. Med erfaring innen både tradisjonell og moderne musikk sikrer vi at ditt prosjekt får det lydbilde det fortjener.",
    bulletPoints: [
      "Innspilling, miksing og mastering",
      "Oppfølging fra idé til ferdig produkt",
      "Kopiering og CD-produksjon",
      "Erfaring med både tradisjonell og moderne musikk",
      "Se våre utgivelser på Discogs",
    ],
    icon: "microphone",
    // Image: Miksebord, mikrofon-oppsett, lite studio-interiør
    image: "/images/services/music-studio.png",
  },
  {
    id: "pa",
    title: "Lyd og PA-tjenester",
    shortDescription:
      "Profesjonell lydløsning til konserter og arrangementer – tilpasset ditt budsjett.",
    fullDescription:
      "Vi leverer profesjonell lyd-tjenester til konserter, arrangementer og festivaler. Uansett størrelse eller budsjett, tilpasser vi løsningen slik at lyden blir optimal. Med erfaring fra utallige arrangementer har vi utstyret og kompetansen som trengs.",
    bulletPoints: [
      "Leveranse av PA-utstyr til events og konserter",
      "Lydteknisk assistanse og rigging",
      "Tilpasset løsning etter arrangement og budsjett",
      "Erfaring fra festivaler, konserter og private arrangementer",
      "Høykvalitets utstyr og profesjonell oppfølging",
    ],
    icon: "speaker",
    // Image: Høyttalere, live-event lydoppsett, scenemiksebord
    image: "/images/services/pa.png",
  },
  {
    id: "digitalisering",
    title: "Digitalisering og overføring",
    shortDescription:
      "Bevar dine musikkminner. Vi overfører kassetter, spolebånd og LP til digitalt.",
    fullDescription:
      "Bevar dine musikkminner for ettertiden. Vi digitaliserer kassetter, spolebånd og LP-plater til moderne filformater som MP3, WAV eller FLAC – slik at du kan nyte musikken på alle dagens enheter.",
    bulletPoints: [
      "Digitalisering av kassetter og spolebånd",
      "Overføring av LP-plater til digitale formater",
      "Ulike filformater tilgjengelig (MP3, WAV, FLAC)",
      "Bevaring av musikkminner for fremtiden",
      "Profesjonell behandling av verdifulle opptak",
    ],
    icon: "digital",
    // Image: Kassetter, spolebånd-opptaker, vinyl-digitalisering
    image: "/images/services/spoleband-opptaker.jpg",
  },
  {
    id: "midi",
    title: "Fabrikk montert MIDI",
    shortDescription:
      "MIDI-system installert direkte fra produsent. Garantert kvalitet og pålitelighet.",
    fullDescription:
      "Vi tilbyr fabrikkferdig MIDI-montering, installert og testet direkte fra produsenten. Dette sikrer høy kvalitet, rask installasjon og en pålitelig løsning som er perfekt tilpasset ditt instrument. Vi kan også sjekke og vedlikeholde eksisterende MIDI-systemer.",
    bulletPoints: [
      "Fabrikk-montert MIDI fra anerkjente produsenter",
      "Ferdig installert og testet før levering",
      "Høy kvalitet og pålitelighet garantert",
      "Vedlikehold og service av eksisterende MIDI-systemer",
      "Tilpasset dine behov og spillestil",
    ],
    icon: "midi",
    // Image: Trekkspill med MIDI-grensesnitt, elektroniske komponenter
    image: "/images/services/trekkspill-med-midi-grensesnitt.jpg",
  },
  {
    id: "noter",
    title: "Noter og tilbehør",
    shortDescription:
      "Noter og tilbehør på bestilling – vi hjelper deg med å finne det du trenger.",
    fullDescription:
      "Vi skaffer noter og annet tilbehør på bestilling. Ta kontakt dersom det er noe du savner, så hjelper vi deg med å finne det du trenger.",
    bulletPoints: [
      "Noter skaffes på bestilling",
      "Tilbehør til trekkspill og toradere",
      "Personlig hjelp til å finne det du trenger",
      "Ta kontakt for forespørsel",
    ],
    icon: "notes",
    // Image: Notehefter, trekkspilltilbehør
    image: "/images/services/notehefter.jpg",
  },
];

// ============================================================================
// EMPLOYEES DATA
// ============================================================================

export const employees: Employee[] = [
  {
    id: "geir-harry",
    name: "Geir-Harry Haugland",
    role: "Daglig leder, trekkspiller, lydtekniker og kursinstruktør",
    bio: "Spesialist på trekkspill og toradere, studio, service og PA. Med over 30 års erfaring og en dyp lidenskap for musikk, grunnla Geir-Harry LM Studio & Musikkservice. Hans fleksibilitet og personlige tilnærming til hver kunde gjør samarbeidet enkelt.",
    image: "/images/employees/geir-harry.jpg",
    phone: "901 69 390",
    email: "ghh42@live.no",
  },
  {
    id: "eva",
    name: "Eva T. Haugland",
    role: "Trekkspiller, studio og CD-design",
    bio: "Trekkspiller som bidrar i studioet, samt CD-design og kopiering. Evas kreative øye og musikalske bakgrunn sikrer at alle produksjoner holder høy kvalitet.",
    image: "/images/employees/eva.jpg",
    phone: "472 93 768",
    email: "ghh42@live.no",
  },
];

// ============================================================================
// GALLERY DATA
// ============================================================================

export const galleryImages: GalleryImage[] = [
  {
    id: "gallery-1",
    src: "/images/gallery/placeholder-1.jpg",
    alt: "Trekkspill på verksted",
    category: "Verksted",
  },
  {
    id: "gallery-2",
    src: "/images/gallery/placeholder-2.jpg",
    alt: "Studioinnspilling",
    category: "Studio",
  },
  {
    id: "gallery-3",
    src: "/images/gallery/placeholder-3.jpg",
    alt: "Konsert med PA-system",
    category: "Arrangementer",
  },
  {
    id: "gallery-4",
    src: "/images/gallery/placeholder-4.jpg",
    alt: "Trekkspill i utstilling",
    category: "Salg",
  },
  {
    id: "gallery-5",
    src: "/images/gallery/placeholder-5.jpg",
    alt: "Kursundervisning",
    category: "Kurs",
  },
  {
    id: "gallery-6",
    src: "/images/gallery/placeholder-6.jpg",
    alt: "Vintage instrumenter",
    category: "Samling",
  },
];

// ============================================================================
// NAVIGATION DATA
// ============================================================================

export const navigationLinks = [
  { href: "#tjenester", label: "Tjenester" },
  { href: "#om-oss", label: "Om oss" },
  { href: "#musikk", label: "Musikk" },
  { href: "#galleri", label: "Galleri" },
  { href: "#ansatte", label: "Vårt team" },
  { href: "#kontakt", label: "Kontakt" },
];

// ============================================================================
// MUSIC & RECORDINGS DATA (Based on Discogs: LM Studio & Musikkservice)
// ============================================================================

export interface Album {
  id: string;
  title: string;
  artist: string;
  year: string;
  coverImage: string;
  discogsUrl?: string;
  description?: string;
}

export const albums: Album[] = [
  {
    id: "album-1",
    title: "Trekkspillminner",
    artist: "LM Studio Artister",
    year: "2020",
    coverImage: "/images/music/album-1.jpg",
    discogsUrl: "https://www.discogs.com/label/1637943-LM-Studio-Musikkservice",
    description: "Klassiske trekkspillmelodier fremført av lokale artister.",
  },
  {
    id: "album-2",
    title: "Nordiske Toner",
    artist: "Geir-Harry Haugland",
    year: "2018",
    coverImage: "/images/music/album-2.jpg",
    discogsUrl: "https://www.discogs.com/label/1637943-LM-Studio-Musikkservice",
    description: "Et musikalsk møte mellom tradisjon og modernitet.",
  },
  {
    id: "album-3",
    title: "Toraderspill",
    artist: "LM Studio Ensemble",
    year: "2015",
    coverImage: "/images/music/album-3.jpg",
    discogsUrl: "https://www.discogs.com/label/1637943-LM-Studio-Musikkservice",
    description: "Stemningsfulle toraderlåter fra det norske musikklandskapet.",
  },
];

export const musicSectionInfo = {
  title: "Musikk & Innspillinger",
  subtitle: "Hør resultatet av arbeidet vårt",
  description:
    "LM Studio har siden oppstarten produsert og spilt inn musikk for artister fra hele landet. Utforsk noen av våre utgivelser, eller besøk Discogs for å se hele katalogen.",
  ctaLabel: "Se hele katalogen på Discogs",
  ctaUrl: "https://www.discogs.com/label/1637943-LM-Studio-Musikkservice",
};
