export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  bulletPoints?: string[];
  icon: string;
  image: string;
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

export interface GalleryCategory {
  name: string;
  images: GalleryImage[];
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

export const additionalContacts = {
  evaPhone: "472 93 768",
};

export const openingHours = {
  note: "Etter avtale",
  description:
    "Vi tar imot besøkende etter avtale. Ring eller send e-post for å avtale tidspunkt.",
  availability: "Hele året",
};

// ============================================================================ SERVICES DATA
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

// ============================================================================ EMPLOYEES DATA
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

// =========================================================================== GALLERY IMAGES DATA
export const galleryImages: GalleryImage[] = [
  // Verksted (Workshop)
  {
    id: "workshop-1",
    src: "/images/gallery/workshop-1.jpg",
    alt: "Trekkspill reparasjon på verkstedet",
    category: "Verksted",
  },
  {
    id: "workshop-2",
    src: "/images/gallery/workshop-2.jpg",
    alt: "Detaljert arbeid med trekkspillmekanikk",
    category: "Verksted",
  },
  {
    id: "workshop-3",
    src: "/images/gallery/workshop-3.jpg",
    alt: "Verktøy og utstyr på verkstedet",
    category: "Verksted",
  },
  {
    id: "workshop-4",
    src: "/images/gallery/workshop-4.jpg",
    alt: "Profesjonell trekkspillservice",
    category: "Verksted",
  },

  // Studio
  {
    id: "studio-1",
    src: "/images/gallery/studio-1.png",
    alt: "Lydmannen, Geir Harry Haugland.",
    category: "Studio",
  },
  {
    id: "studio-2",
    src: "/images/gallery/studio-2.png",
    alt: "Tore-Arnfinn Ødegård (mus. leder) og Kjell Sponnich sitter klar til opptak.",
    category: "Studio",
  },
  {
    id: "studio-3",
    src: "/images/gallery/studio-3.png",
    alt: "Bjørn Brennhaugen i bua, trofast bassist gjennom over 10 år, populært kalt Bjørn Bass.",
    category: "Studio",
  },
  {
    id: "studio-4",
    src: "/images/gallery/studio-4.png",
    alt: "Vår nye gitarist, Odd Kvarmestøl, ble bokstavlig talt kastet inn i prosjektet, men løste oppgaven med glans.",
    category: "Studio",
  },
  {
    id: "studio-5",
    src: "/images/gallery/studio-5.png",
    alt: "Toril Kjenslie og Tone C. Hundére, her i 3. stemme-båsen.",
    category: "Studio",
  },
  {
    id: "studio-6",
    src: "/images/gallery/studio-6.png",
    alt: "Lillian Hansson og Else Marit Vesteng i 2. stemmebåsen.",
    category: "Studio",
  },
  {
    id: "studio-7",
    src: "/images/gallery/studio-7.png",
    alt: "Roar Hensvold, ett av våre nyeste medlemmer, har funnet seg vel til rette blant resten.",
    category: "Studio",
  },
  {
    id: "studio-8",
    src: "/images/gallery/studio-8.png",
    alt: 'Tore-Arnfinn Ødegård under "take".',
    category: "Studio",
  },
  {
    id: "studio-9",
    src: "/images/gallery/studio-9.png",
    alt: "Her lages det en rå-mix CD, for vi var jo svært spente på resultatet!",
    category: "Studio",
  },

  // Arrangementer (Events)
  {
    id: "events-1",
    src: "/images/gallery/events-1.jpg",
    alt: "Jubileumskonsert i Lillestrøm Kultursenter 12. februar 2005 med Tangoensemble Dal Segno og Strømmen Trekkspillklubb",
    category: "Arrangementer",
  },
  {
    id: "events-2",
    src: "/images/gallery/events-2.jpg",
    alt: "T.v.: Nåværende formann Erik Ringerike",
    category: "Arrangementer",
  },
  {
    id: "events-3",
    src: "/images/gallery/events-3.jpg",
    alt: "",
    category: "Arrangementer",
  },
  {
    id: "events-4",
    src: "/images/gallery/events-4.jpg",
    alt: "Fra v.: Frank Andresen, tidligere musikalsk leder i nærmere 20 år, Bjørn Tuv Dahl og Bente Midtsveen  med fellesnevnere som komponister og arrangører.",
    category: "Arrangementer",
  },
  {
    id: "events-5",
    src: "/images/gallery/events-5.jpg",
    alt: "Dal Segno utvidet fra salongbesetning til stor besetning med hovedvekt på Astor Piazzollas musikk for noen år siden.",
    category: "Arrangementer",
  },
  {
    id: "events-6",
    src: "/images/gallery/events-6.jpg",
    alt: "Strømmen Trekkspillklubb stilte med 11 trekkspillere til kveldens konsert i tillegg til deres faste bassist og gitarist samt gjestetrommeslager.",
    category: "Arrangementer",
  },
  {
    id: "events-7",
    src: "/images/gallery/events-7.jpg",
    alt: "Rolfsnes hadde hjelp av Tron Tangeraas, også fiolin.",
    category: "Arrangementer",
  },
  {
    id: "events-8",
    src: "/images/gallery/events-8.jpg",
    alt: "Foran t.h.: Jan Olav Rolfsnes - primus motor, stifter, musiker og arrangør",
    category: "Arrangementer",
  },
  {
    id: "events-9",
    src: "/images/gallery/events-9.jpg",
    alt: 'T.h.: Svetislav Mitic, som er "skyld" i samarbeidet med Dal Segno, har vært en god læremester for Strømmen TK i Balkan-musikk.',
    category: "Arrangementer",
  },
  {
    id: "events-10",
    src: "/images/gallery/events-10.jpg",
    alt: '.... og akkompagnert av Per Bredesen på bass i "All The Things you are".',
    category: "Arrangementer",
  },
  {
    id: "events-11",
    src: "/images/gallery/events-11.jpg",
    alt: 'Mer solospill ble det på Strømmen TKs nåværende musikalske leder, Kjell Harald. Her med imponerende fingerferdigheter i "Spansk Mosaikk"....',
    category: "Arrangementer",
  },
  {
    id: "events-12",
    src: "/images/gallery/events-12.jpg",
    alt: 'Kjell Harald Langhaug som solist i Charmichaels kjente "Star Dust".',
    category: "Arrangementer",
  },
  {
    id: "events-13",
    src: "/images/gallery/events-13.jpg",
    alt: "Aage Thuen - konferansier.",
    category: "Arrangementer",
  },
  {
    id: "events-14",
    src: "/images/gallery/events-14.jpg",
    alt: "Dal Segno stilte med også med Kjersti Birketvedt på cello og en uannonsert utøver på bratsj.",
    category: "Arrangementer",
  },
  {
    id: "events-15",
    src: "/images/gallery/events-15.jpg",
    alt: 'Beate her med Josefines sang "Å æ kjinne ein kar" fra Bør Børson - her akkompagnert av Bente Midtsveen på trekkspill og selvsagt Dal Segno.',
    category: "Arrangementer",
  },
  {
    id: "events-16",
    src: "/images/gallery/events-16.jpg",
    alt: 'Gjestesolist, Beate Kronen, sang "I love Paris".',
    category: "Arrangementer",
  },
  {
    id: "events-17",
    src: "/images/gallery/events-17.jpg",
    alt: "Musikalsk utfoldelse med innlevelse.",
    category: "Arrangementer",
  },
  {
    id: "events-18",
    src: "/images/gallery/events-18.jpg",
    alt: "Frank Andresen overrekker blomster til klubbens tidligere formann, Kjell Ringerike, for hans uvurderlige innsats.",
    category: "Arrangementer",
  },
  {
    id: "events-19",
    src: "/images/gallery/events-19.jpg",
    alt: "Aage Thuen var også en av mange som fortjente blomster, ikke minst pga. hans konferansieroppgave denne kvelden.",
    category: "Arrangementer",
  },
  {
    id: "events-20",
    src: "/images/gallery/events-20.jpg",
    alt: 'Bente Midtsveen og Frank Andresen framførte paso doblen "Hälsning från Södern" av A. Walther arrangert av K. H. Langhaug.',
    category: "Arrangementer",
  },
  {
    id: "events-21",
    src: "/images/gallery/events-21.jpg",
    alt: 'Gjestesolist på gitar - Roy Henning Snyen i Piazzollas "Concierto para Quinteto" i et arr. av Rolfsnes.',
    category: "Arrangementer",
  },
  {
    id: "events-22",
    src: "/images/gallery/events-22.jpg",
    alt: "LM Studio og Musikkservice med Geir Harry Haugland var ansvarlig for lyden, denne kvelden med god hjelp av sønnen.",
    category: "Arrangementer",
  },
  {
    id: "events-23",
    src: "/images/gallery/events-23.jpg",
    alt: "Rundt 300 publikummere må jubilantene si seg godt fornøyd med.",
    category: "Arrangementer",
  },

  // Salg (Sale)
  {
    id: "sale-1",
    src: "/images/gallery/sale-1.webp",
    alt: "Trekkspill",
    category: "Salg",
  },
  {
    id: "sale-2",
    src: "/images/gallery/sale-2.png",
    alt: "Trekkspill til salgs",
    category: "Salg",
  },
  {
    id: "sale-3",
    src: "/images/gallery/sale-3.jpg",
    alt: "Instrumenter i utstilling",
    category: "Salg",
  },
  {
    id: "sale-4",
    src: "/images/gallery/sale-4.jpg",
    alt: "Kvalitetstrekkspill",
    category: "Salg",
  },
  {
    id: "sale-5",
    src: "/images/gallery/sale-5.jpg",
    alt: "Rødt trekkspill",
    category: "Salg",
  },

  // Samling (Collection)
  {
    id: "collection-1",
    src: "/images/gallery/collection-1.jpg",
    alt: "Vintage trekkspill samling",
    category: "Samling",
  },
  {
    id: "collection-2",
    src: "/images/gallery/collection-2.jpg",
    alt: "Sjeldne trekkspill",
    category: "Samling",
  },
  {
    id: "collection-3",
    src: "/images/gallery/collection-3.jpg",
    alt: "Vinylplater",
    category: "Samling",
  },
];

// ============================================================================ NAVIGATION LINKS
export const navigationLinks = [
  { href: "#tjenester", label: "Tjenester" },
  { href: "#om-oss", label: "Om oss" },
  { href: "#musikk", label: "Musikk" },
  { href: "#galleri", label: "Galleri" },
  { href: "#kontakt", label: "Kontakt" },
];

// ============================================================================ ALBUMS DATA
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
    title: "Vorspiel",
    artist: "Anette",
    year: "2004",
    coverImage: "/images/music/album-1.jpg",
    discogsUrl: "https://www.discogs.com/release/13614433-Anette-Vorspiel",
    description: "Folkemusikk, verdensmusikk og country.",
  },
  {
    id: "album-2",
    title: "Finnskogen Fusel Og Svartkopp",
    artist: "Finnskogen Fusel Og Svartkopp",
    year: "2004",
    coverImage: "/images/albums/album-2.jpg",
    discogsUrl:
      "https://www.discogs.com/release/26464289-Finnskogen-Fusel-Og-Svartkopp-Finnskogen-Fusel-Og-Svartkopp",
    description: "Folkemusikk, verdensmusikk og country.",
  },
  {
    id: "album-3",
    title: "Hauglands Med Ove Normann Bakke",
    artist: "Hauglands Med Ove Normann Bakke",
    year: "2012",
    coverImage: "/images/albums/album-3.jpg",
    discogsUrl:
      "https://www.discogs.com/release/35508496-Hauglands-Med-Ove-Normann-Bakke-Hauglands-Med-Ove-Normann-Bakke",
    description: "Folkemusikk, verdensmusikk og country.",
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
