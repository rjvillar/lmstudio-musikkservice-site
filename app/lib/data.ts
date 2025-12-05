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
  description: string;
  icon: string;
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
    description:
      "Nye og brukte trekkspill og toradere – med veiledning, tilpasning og 3 måneders garanti på brukte modeller. Vi hjelper deg å finne instrumentet som passer dine behov.",
    icon: "accordion",
  },
  {
    id: "verksted",
    title: "Verksted og service",
    description:
      "Fullt utstyrt verksted for reparasjon, stemming og vedlikehold av alle typer trekkspill og toradere. Utfører også MIDI- og digital montering på forespørsel.",
    icon: "wrench",
  },
  {
    id: "kurs",
    title: "Kurs og undervisning",
    description:
      "Trekkspill- og toraderundervisning, for både nybegynnere og viderekomne. Undervisningen tilpasses nivå og mål, og støttetimer kan bestilles ved behov.",
    icon: "music-note",
  },
  {
    id: "studio",
    title: "Musikkstudio",
    description:
      "Innspilling, miksing og mastering i eget studio. Vi hjelper deg fra idé til ferdig innspilt demo eller album, og tilbyr også kopiering og CD-produksjon.",
    icon: "microphone",
  },
  {
    id: "pa",
    title: "Lyd og PA-tjenester",
    description:
      "Leveranse av lydutstyr og lydteknisk assistanse til konserter, arrangementer og festivaler. Vi tilpasser løsningen til ditt arrangement og budsjett.",
    icon: "speaker",
  },
  {
    id: "digitalisering",
    title: "Digitalisering og overføring",
    description:
      "Vi bevarer dine musikkminner – digitaliserer kassetter, spolebånd og LP-er til moderne filformater.",
    icon: "digital",
  },
  {
    id: "noter",
    title: "Noter og tilbehør",
    description:
      "Noter og annet tilbehør er tilgjengelig på forespørsel – ta kontakt dersom det er noe du savner.",
    icon: "notes",
  },
  {
    id: "midi",
    title: "Fabrikk montert MIDI",
    description:
      "Vi tilbyr fabrikkferdig MIDI, ferdig installert og testet direkte fra produsenten. Dette sikrer høy kvalitet, rask installasjon og en pålitelig løsning tilpasset dine behov.",
    icon: "midi",
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
