/**
 * Typed project content layer. Designed so a CMS can replace this file
 * without rewriting page components.
 *
 * Version 2.0 (2026-07-26): populated with the practice's real portfolio
 * supplied in the "Version 2.0 corrections" pack — 17 projects with verified
 * write-ups and photography/renders extracted from the client's deck. Facts
 * (client, contractor, areas, cost, status) are transcribed from that source.
 *
 * Development fixtures live in fixtures.dev.ts and are only included when
 * NEXT_PUBLIC_ENABLE_FIXTURES === "true" AND NODE_ENV !== "production".
 */

/** Project categories, matching the practice's own project menu. */
export const TYPOLOGIES = [
  "Railway Stations",
  "Office Buildings",
  "Group Housing",
  "Sports Complex",
  "Market Complex",
  "Educational",
  "Urban Development",
] as const;
export type Typology = (typeof TYPOLOGIES)[number];

export const PROJECT_STATUSES = ["Completed", "Ongoing", "Tender Stage"] as const;
export type ProjectStatus = (typeof PROJECT_STATUSES)[number];

export interface ProjectImage {
  /** Path under /public — remote URLs are not permitted. */
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  typology: Typology;
  services?: string[];
  client?: string;
  /** EPC / execution contractor, where the practice is design consultant. */
  contractor?: string;
  year?: number;
  status: ProjectStatus;
  siteArea?: string;
  builtUpArea?: string;
  configuration?: string;
  projectCost?: string;
  greenRating?: string;
  brief?: string;
  context?: string;
  challenge?: string;
  architecturalResponse?: string;
  materialStrategy?: string;
  climateResponse?: string;
  userOutcome?: string;
  images: ProjectImage[];
  team?: string[];
  consultants?: string[];
  awards?: string[];
  publications?: string[];
  relatedProjects?: string[];
  /** Only `published: true` projects render anywhere in production. */
  published: boolean;
}

export const publishedProjects: Project[] = [
  {
    slug: "bmc-office-building",
    title: "Bhubaneswar Municipal Corporation (BMC) Headquarters",
    location: "Bhubaneswar, Odisha",
    typology: "Office Buildings",
    status: "Completed",
    year: 2024,
    client: "Bhubaneswar Smart City Ltd (BSCL) / Bhubaneswar Municipal Corporation",
    contractor: "URC Construction (P) Ltd. (EPC)",
    services: ["Architecture", "Structural", "MEP"],
    siteArea: "4.04 acres",
    builtUpArea: "approx. 2,31,000 sq.ft (21,470 m²)",
    configuration: "Basement + Ground + 11 Floors",
    projectCost: "approx. ₹74 Crore",
    greenRating: "GRIHA 4-Star",
    brief: "A landmark civic headquarters under the Bhubaneswar Smart City Mission, housing BMC, BSCL, ICOMC and ICCC under one roof as a centralized hub for smart-city governance.",
    context: "Delivered under the Bhubaneswar Smart City Mission, the headquarters consolidates the Municipal Corporation, Bhubaneswar Smart City Limited, the Intelligent City Operations & Management Centre (ICOMC) and the Integrated Command & Control Centre (ICCC) in a single building — supporting integrated, data-driven urban management and improved coordination among city agencies.",
    architecturalResponse: "A basement-plus-eleven-storey configuration organises civic administration, command-and-control operations and public-interaction zones into a clear vertical hierarchy, creating a professional, technology-enabled seat of city government.",
    climateResponse: "The approximately 66,000 sq.ft basement is designed with 100% natural cross ventilation, eliminating mechanical ventilation — providing continuous fresh-air circulation, zero ventilation maintenance cost and reliable operation even during power outages. The building is GRIHA 4-Star certified.",
    images: [
      { src: "/images/projects/bmc-office-building/01.jpg", alt: "Bhubaneswar Municipal Corporation (BMC) Headquarters — view 1", width: 1600, height: 900 },
      { src: "/images/projects/bmc-office-building/02.jpg", alt: "Bhubaneswar Municipal Corporation (BMC) Headquarters — view 2", width: 1600, height: 900 },
      { src: "/images/projects/bmc-office-building/03.jpg", alt: "Bhubaneswar Municipal Corporation (BMC) Headquarters — view 3", width: 1535, height: 1024 },
      { src: "/images/projects/bmc-office-building/04.jpg", alt: "Bhubaneswar Municipal Corporation (BMC) Headquarters — view 4", width: 1600, height: 900 },
      { src: "/images/projects/bmc-office-building/05.jpg", alt: "Bhubaneswar Municipal Corporation (BMC) Headquarters — view 5", width: 1456, height: 1080 },
      { src: "/images/projects/bmc-office-building/06.jpg", alt: "Bhubaneswar Municipal Corporation (BMC) Headquarters — view 6", width: 1600, height: 940 },
      { src: "/images/projects/bmc-office-building/07.jpg", alt: "Bhubaneswar Municipal Corporation (BMC) Headquarters — view 7", width: 1492, height: 1054 },
      { src: "/images/projects/bmc-office-building/08.jpg", alt: "Bhubaneswar Municipal Corporation (BMC) Headquarters — view 8", width: 1537, height: 1023 },
    ],
    published: true,
  },
  {
    slug: "bhubaneswar-railway-station",
    title: "Integrated Redevelopment of Bhubaneswar Railway Station",
    location: "Bhubaneswar, Odisha",
    typology: "Railway Stations",
    status: "Ongoing",
    client: "Indian Railways",
    contractor: "URC Construction Pvt Ltd (EPC)",
    services: ["Architecture", "Structural", "MEP", "Pre-tender costing"],
    brief: "Transforming Bhubaneswar station into a modern, airport-style multimodal transit hub with an air-concourse connecting all platforms.",
    context: "Executed under a tender floated by Indian Railways, the redevelopment is transforming the station into a modern, airport-style, multimodal transit hub across a large footprint of multiple blocks.",
    architecturalResponse: "An air-concourse connects all platforms, served by 34 lifts and 20 escalators, with separate arrival and departure corridors for smooth, airport-like passenger movement. Dedicated road access, elevated driveways and segregated pick-up/drop-off zones streamline vehicular traffic. Waiting lounges, dormitories, cloak rooms, food plazas, retail and integrated ticketing complete the programme, with inclusive design for differently-abled passengers.",
    userOutcome: "As of late 2025 the east-side G+3 block is complete, the west-side G+11 block has reached the fourth floor, and the air-concourse roof and finishing works are in progress — with the first phase expected operational by late 2025.",
    images: [
      { src: "/images/projects/bhubaneswar-railway-station/01.jpg", alt: "Integrated Redevelopment of Bhubaneswar Railway Station — view 1", width: 1600, height: 900 },
      { src: "/images/projects/bhubaneswar-railway-station/02.jpg", alt: "Integrated Redevelopment of Bhubaneswar Railway Station — view 2", width: 1600, height: 900 },
      { src: "/images/projects/bhubaneswar-railway-station/03.jpg", alt: "Integrated Redevelopment of Bhubaneswar Railway Station — view 3", width: 1600, height: 900 },
      { src: "/images/projects/bhubaneswar-railway-station/04.jpg", alt: "Integrated Redevelopment of Bhubaneswar Railway Station — view 4", width: 1600, height: 900 },
      { src: "/images/projects/bhubaneswar-railway-station/05.jpg", alt: "Integrated Redevelopment of Bhubaneswar Railway Station — view 5", width: 1600, height: 900 },
      { src: "/images/projects/bhubaneswar-railway-station/06.jpg", alt: "Integrated Redevelopment of Bhubaneswar Railway Station — view 6", width: 1600, height: 2844 },
      { src: "/images/projects/bhubaneswar-railway-station/07.jpg", alt: "Integrated Redevelopment of Bhubaneswar Railway Station — view 7", width: 1600, height: 900 },
      { src: "/images/projects/bhubaneswar-railway-station/08.jpg", alt: "Integrated Redevelopment of Bhubaneswar Railway Station — view 8", width: 1600, height: 900 },
    ],
    published: true,
  },
  {
    slug: "birsa-munda-stadium",
    title: "Birsa Munda Athletic Stadium Complex",
    location: "Rourkela, Odisha",
    typology: "Sports Complex",
    status: "Ongoing",
    client: "Government of Odisha",
    contractor: "URC Construction (P) Ltd. (EPC)",
    services: ["Architecture", "Structural", "MEP"],
    greenRating: "GRIHA 4-Star",
    brief: "A multi-sport stadium complex upgrading sports infrastructure in Sundergarh district — athletics, football and aquatics under one campus.",
    context: "Developed as part of a government initiative to upgrade sports infrastructure in Sundergarh district, aimed at fostering athletics, football, aquatics and multi-sport development.",
    architecturalResponse: "The complex features a 400-metre synthetic athletics track and a natural-turf football field with floodlights, four spectator galleries totalling around 10,000 seats (with accessibility for differently-abled spectators), and an Olympic-sized indoor swimming pool with a dedicated 500-seat aquatics gallery. Players' changing rooms, lounges and support spaces enable national-level competition.",
    userOutcome: "A multi-level car-parking facility for over 180 cars and integrated commercial/office space complete the campus, which is GRIHA 4-Star certified.",
    images: [
      { src: "/images/projects/birsa-munda-stadium/01.jpg", alt: "Birsa Munda Athletic Stadium Complex — view 1", width: 1536, height: 1024 },
      { src: "/images/projects/birsa-munda-stadium/02.jpg", alt: "Birsa Munda Athletic Stadium Complex — view 2", width: 1448, height: 1086 },
      { src: "/images/projects/birsa-munda-stadium/03.jpg", alt: "Birsa Munda Athletic Stadium Complex — view 3", width: 1535, height: 1024 },
      { src: "/images/projects/birsa-munda-stadium/04.jpg", alt: "Birsa Munda Athletic Stadium Complex — view 4", width: 1600, height: 505 },
      { src: "/images/projects/birsa-munda-stadium/05.jpg", alt: "Birsa Munda Athletic Stadium Complex — view 5", width: 1600, height: 1131 },
      { src: "/images/projects/birsa-munda-stadium/06.jpg", alt: "Birsa Munda Athletic Stadium Complex — view 6", width: 1600, height: 900 },
      { src: "/images/projects/birsa-munda-stadium/07.jpg", alt: "Birsa Munda Athletic Stadium Complex — view 7", width: 1600, height: 900 },
      { src: "/images/projects/birsa-munda-stadium/08.jpg", alt: "Birsa Munda Athletic Stadium Complex — view 8", width: 1600, height: 900 },
    ],
    published: true,
  },
  {
    slug: "cuttack-netaji-bus-terminal",
    title: "Cuttack Netaji Bus Terminal (CNBT)",
    location: "Khannagar, Cuttack, Odisha",
    typology: "Urban Development",
    status: "Completed",
    year: 2023,
    client: "Odisha Bridge & Construction Corporation (OBCC)",
    contractor: "URC Construction Pvt Ltd (EPC)",
    services: ["Architecture", "Structural", "MEP"],
    siteArea: "approx. 14.95 acres",
    builtUpArea: "approx. 1.18 lakh sq.ft",
    configuration: "Three-storey terminal",
    greenRating: "GRIHA-compliant",
    brief: "A modern airport-style inter-state bus terminal with 32 active bus bays, retail, dormitories and passenger amenities, inaugurated in September 2023.",
    context: "A modern inter-state bus terminal executed under a tender floated by the Odisha Bridge & Construction Corporation. The three-storey terminal accommodates 32 retail shops, the OSRTC office, a restaurant and administrative and passenger amenities.",
    architecturalResponse: "The terminal provides 32 active bus bays, 72 idle bays and 2 emergency vehicle bays, with a dedicated service station and workshop for fleet maintenance. Waiting halls, dormitories, cloak rooms, food courts, ATMs and integrated bus-management/display systems deliver an airport-style transit experience.",
    userOutcome: "Designed as a GRIHA-compliant green building, the terminal was formally inaugurated by the Hon'ble Chief Minister on 16 September 2023 — a significant milestone in Odisha's transport-infrastructure modernization.",
    images: [
      { src: "/images/projects/cuttack-netaji-bus-terminal/01.jpg", alt: "Cuttack Netaji Bus Terminal (CNBT) — view 1", width: 1600, height: 693 },
      { src: "/images/projects/cuttack-netaji-bus-terminal/02.jpg", alt: "Cuttack Netaji Bus Terminal (CNBT) — view 2", width: 1600, height: 1200 },
      { src: "/images/projects/cuttack-netaji-bus-terminal/03.jpg", alt: "Cuttack Netaji Bus Terminal (CNBT) — view 3", width: 1600, height: 1200 },
      { src: "/images/projects/cuttack-netaji-bus-terminal/04.jpg", alt: "Cuttack Netaji Bus Terminal (CNBT) — view 4", width: 1600, height: 1200 },
      { src: "/images/projects/cuttack-netaji-bus-terminal/05.jpg", alt: "Cuttack Netaji Bus Terminal (CNBT) — view 5", width: 1600, height: 1200 },
      { src: "/images/projects/cuttack-netaji-bus-terminal/06.jpg", alt: "Cuttack Netaji Bus Terminal (CNBT) — view 6", width: 1600, height: 1200 },
      { src: "/images/projects/cuttack-netaji-bus-terminal/07.jpg", alt: "Cuttack Netaji Bus Terminal (CNBT) — view 7", width: 1600, height: 900 },
      { src: "/images/projects/cuttack-netaji-bus-terminal/08.jpg", alt: "Cuttack Netaji Bus Terminal (CNBT) — view 8", width: 1600, height: 1003 },
    ],
    published: true,
  },
  {
    slug: "banijyakar-bhavan",
    title: "Banijyakar Bhavan (GST Office Complex)",
    location: "Odisha",
    typology: "Office Buildings",
    status: "Ongoing",
    client: "Engineer-in-Chief (Buildings), Odisha",
    contractor: "B.C. Bhuyan Construction (EPC turnkey)",
    services: ["Master Planning", "Architecture", "Structural", "MEP"],
    brief: "A major administrative complex strengthening Odisha's commercial-tax governance, consolidating key departments in a professional, technology-enabled workplace.",
    context: "Tendered through the Engineer-in-Chief (Buildings), Odisha and awarded on an EPC turnkey basis, Banijyakar Bhavan is designed to strengthen the state's commercial-tax governance and service-delivery system.",
    architecturalResponse: "The building consolidates key commercial-tax administrative departments under one roof — with well-planned office floors, public-interaction zones, conference facilities, archive rooms, secure IT infrastructure, smart building systems and dedicated parking — improving inter-departmental coordination and citizen service.",
    userOutcome: "Once operational, the facility will significantly enhance administrative efficiency and the public-interface experience for businesses and taxpayers across the state.",
    images: [
      { src: "/images/projects/banijyakar-bhavan/01.jpg", alt: "Banijyakar Bhavan (GST Office Complex) — view 1", width: 1600, height: 900 },
      { src: "/images/projects/banijyakar-bhavan/02.jpg", alt: "Banijyakar Bhavan (GST Office Complex) — view 2", width: 1600, height: 900 },
      { src: "/images/projects/banijyakar-bhavan/03.jpg", alt: "Banijyakar Bhavan (GST Office Complex) — view 3", width: 1600, height: 900 },
      { src: "/images/projects/banijyakar-bhavan/04.jpg", alt: "Banijyakar Bhavan (GST Office Complex) — view 4", width: 1600, height: 900 },
      { src: "/images/projects/banijyakar-bhavan/05.jpg", alt: "Banijyakar Bhavan (GST Office Complex) — view 5", width: 1600, height: 900 },
      { src: "/images/projects/banijyakar-bhavan/06.jpg", alt: "Banijyakar Bhavan (GST Office Complex) — view 6", width: 1600, height: 900 },
      { src: "/images/projects/banijyakar-bhavan/07.jpg", alt: "Banijyakar Bhavan (GST Office Complex) — view 7", width: 1600, height: 900 },
      { src: "/images/projects/banijyakar-bhavan/08.jpg", alt: "Banijyakar Bhavan (GST Office Complex) — view 8", width: 1600, height: 900 },
    ],
    published: true,
  },
  {
    slug: "panposh-market",
    title: "Redevelopment of Panposh Market, Rourkela",
    location: "Panposh, Rourkela, Odisha",
    typology: "Market Complex",
    status: "Completed",
    client: "Rourkela Smart City",
    contractor: "URC Construction Pvt. Ltd. (EPC)",
    services: ["Architecture", "Structural", "MEP"],
    siteArea: "approx. 5 acres",
    configuration: "Three-storey complex, ~212 shops",
    brief: "A state-of-the-art three-storey commercial hub of around 212 shops replacing the earlier market under Rourkela Smart City.",
    context: "Redeveloped into a state-of-the-art commercial hub under Rourkela Smart City, replacing the earlier outdated market.",
    architecturalResponse: "The modern three-storey complex spans about 5 acres and accommodates around 212 shops, with escalators, lifts and ample parking. The service level is designed for natural cross-ventilation through permanent openings, eliminating mechanical ventilation and its maintenance cost.",
    userOutcome: "The market has opened for commercial allocation, with shop allotment initiated by the municipal authority — a major upgrade to Rourkela's retail infrastructure.",
    images: [
      { src: "/images/projects/panposh-market/01.jpg", alt: "Redevelopment of Panposh Market, Rourkela — view 1", width: 1600, height: 900 },
      { src: "/images/projects/panposh-market/02.jpg", alt: "Redevelopment of Panposh Market, Rourkela — view 2", width: 1600, height: 926 },
      { src: "/images/projects/panposh-market/03.jpg", alt: "Redevelopment of Panposh Market, Rourkela — view 3", width: 1600, height: 1108 },
      { src: "/images/projects/panposh-market/04.jpg", alt: "Redevelopment of Panposh Market, Rourkela — view 4", width: 1600, height: 900 },
      { src: "/images/projects/panposh-market/05.jpg", alt: "Redevelopment of Panposh Market, Rourkela — view 5", width: 949, height: 633 },
      { src: "/images/projects/panposh-market/06.jpg", alt: "Redevelopment of Panposh Market, Rourkela — view 6", width: 949, height: 633 },
      { src: "/images/projects/panposh-market/07.jpg", alt: "Redevelopment of Panposh Market, Rourkela — view 7", width: 949, height: 633 },
      { src: "/images/projects/panposh-market/08.jpg", alt: "Redevelopment of Panposh Market, Rourkela — view 8", width: 949, height: 633 },
    ],
    published: true,
  },
  {
    slug: "amns-residential-township",
    title: "AMNS Residential Township, Paradip",
    location: "Paradip, Odisha",
    typology: "Group Housing",
    status: "Ongoing",
    client: "ArcelorMittal Nippon Steel India (AMNS)",
    contractor: "KMV Projects, Hyderabad (EPC turnkey)",
    services: ["Master Planning", "Architecture", "Structural", "MEP"],
    brief: "A large-scale, self-sufficient integrated township for AMNS employees and families, benchmarking employee-centric industrial housing in Odisha.",
    context: "A large-scale integrated housing development for the employees and families of ArcelorMittal Nippon Steel India, part of the company's expanding industrial presence in Odisha.",
    architecturalResponse: "Conceived as a self-sufficient township, the development integrates residential blocks, villas and apartment clusters for multiple employee categories with commercial and convenience retail, a clubhouse, indoor and outdoor sports, a health centre, community centre, temple, landscaped parks, and a full road, utility, lighting and security network.",
    userOutcome: "Planned around livability, walkability, safety and greenery, the township will serve as a premium residential ecosystem supporting AMNS operations in the Paradip region.",
    images: [
      { src: "/images/projects/amns-residential-township/01.jpg", alt: "AMNS Residential Township, Paradip — view 1", width: 1600, height: 1132 },
      { src: "/images/projects/amns-residential-township/02.jpg", alt: "AMNS Residential Township, Paradip — view 2", width: 1600, height: 1132 },
      { src: "/images/projects/amns-residential-township/03.jpg", alt: "AMNS Residential Township, Paradip — view 3", width: 1600, height: 1132 },
      { src: "/images/projects/amns-residential-township/04.jpg", alt: "AMNS Residential Township, Paradip — view 4", width: 1600, height: 1131 },
      { src: "/images/projects/amns-residential-township/05.jpg", alt: "AMNS Residential Township, Paradip — view 5", width: 1600, height: 1132 },
      { src: "/images/projects/amns-residential-township/06.jpg", alt: "AMNS Residential Township, Paradip — view 6", width: 1600, height: 1132 },
      { src: "/images/projects/amns-residential-township/07.jpg", alt: "AMNS Residential Township, Paradip — view 7", width: 1600, height: 1132 },
      { src: "/images/projects/amns-residential-township/08.jpg", alt: "AMNS Residential Township, Paradip — view 8", width: 1600, height: 1131 },
    ],
    published: true,
  },
  {
    slug: "cuttack-railway-station",
    title: "Redevelopment of Cuttack Railway Station",
    location: "Cuttack, Odisha",
    typology: "Railway Stations",
    status: "Ongoing",
    year: 2024,
    client: "Indian Railways",
    contractor: "URC Construction Pvt Ltd",
    services: ["Architecture", "Structural", "MEP", "Pre-tender costing"],
    brief: "A station-modernisation redevelopment with a new east-side entry building, 108-metre concourse and airport-style passenger amenities.",
    context: "Carried out under the national station-modernisation programme as part of the broader upgrade of Odisha's railway infrastructure, with Architec Allied engaged from the pre-tender stage.",
    architecturalResponse: "A newly constructed east-side entry building of about 21,270 sq.ft of air-conditioned space provides a food court, ticket counters, waiting halls, accessible toilets, lifts and escalators. A new 108-metre-wide concourse, improved platform shelters, granite flooring and elevated steel structures constitute major structural and passenger-amenity upgrades, with airport-style separate entry, drop-off zones and integrated parking.",
    userOutcome: "The east-side building and new entry point were inaugurated on 8 December 2024; the station remains operational while air-concourse and safety modernization works continue through 2025.",
    images: [
      { src: "/images/projects/cuttack-railway-station/01.jpg", alt: "Redevelopment of Cuttack Railway Station — view 1", width: 1600, height: 900 },
      { src: "/images/projects/cuttack-railway-station/02.jpg", alt: "Redevelopment of Cuttack Railway Station — view 2", width: 1600, height: 900 },
      { src: "/images/projects/cuttack-railway-station/03.jpg", alt: "Redevelopment of Cuttack Railway Station — view 3", width: 1600, height: 900 },
      { src: "/images/projects/cuttack-railway-station/04.jpg", alt: "Redevelopment of Cuttack Railway Station — view 4", width: 1600, height: 900 },
      { src: "/images/projects/cuttack-railway-station/05.jpg", alt: "Redevelopment of Cuttack Railway Station — view 5", width: 1600, height: 900 },
      { src: "/images/projects/cuttack-railway-station/06.jpg", alt: "Redevelopment of Cuttack Railway Station — view 6", width: 1600, height: 900 },
      { src: "/images/projects/cuttack-railway-station/07.jpg", alt: "Redevelopment of Cuttack Railway Station — view 7", width: 1600, height: 900 },
      { src: "/images/projects/cuttack-railway-station/08.jpg", alt: "Redevelopment of Cuttack Railway Station — view 8", width: 1600, height: 900 },
    ],
    published: true,
  },
  {
    slug: "pandra-fish-market",
    title: "Modern Wholesale Fish Market, Pandra",
    location: "Pandra, Bhubaneswar, Odisha",
    typology: "Market Complex",
    status: "Ongoing",
    contractor: "Dilip Construction Pvt. Ltd. (EPC turnkey)",
    services: ["Master Planning", "Architecture", "Structural", "MEP"],
    brief: "A hygienic, technology-enabled wholesale fish-trading hub with auction halls, cold storage and effluent treatment.",
    context: "A flagship commercial infrastructure development creating a hygienic, organized and technology-enabled platform for wholesale fish trading and distribution in Bhubaneswar.",
    architecturalResponse: "Designed for high-volume handling to food-safety standards: dedicated auction halls and wholesale zones, cold-storage and pre-processing, segregated loading/unloading bays, retail kiosks, effluent treatment and odor-control, an ice plant, worker amenities and administration — with CCTV, digital entry management and fire-fighting systems.",
    userOutcome: "Once operational, the Pandra market is set to become one of Bhubaneswar's most advanced organized wholesale fish-trading hubs, improving the city's seafood supply chain.",
    images: [
      { src: "/images/projects/pandra-fish-market/01.jpg", alt: "Modern Wholesale Fish Market, Pandra — view 1", width: 1600, height: 1067 },
      { src: "/images/projects/pandra-fish-market/02.jpg", alt: "Modern Wholesale Fish Market, Pandra — view 2", width: 1600, height: 900 },
      { src: "/images/projects/pandra-fish-market/03.jpg", alt: "Modern Wholesale Fish Market, Pandra — view 3", width: 1320, height: 1049 },
      { src: "/images/projects/pandra-fish-market/04.jpg", alt: "Modern Wholesale Fish Market, Pandra — view 4", width: 1320, height: 742 },
    ],
    published: true,
  },
  {
    slug: "irwo-housing-ambattur",
    title: "IRWO Housing Phase II, Ambattur",
    location: "Ambattur, Chennai",
    typology: "Group Housing",
    status: "Ongoing",
    client: "Indian Railway Welfare Organisation (IRWO)",
    services: ["Master Planning", "Architecture", "Structural", "MEP", "Landscape"],
    brief: "Phase-2A and 2B railway-personnel housing expanding the established Phase-I campus with community-oriented planning.",
    context: "A major residential project providing high-quality planned housing for Indian Railways personnel and their families, comprising Phase-2A and Phase-2B to expand and enhance the established Phase-I campus.",
    architecturalResponse: "The layout integrates apartment blocks of varied sizes for multiple employee grades, planned parking, a clubhouse and community hall, children's play areas, landscaped parks, an internal road network with street-lighting and access control, and 24×7 water and power provisions.",
    userOutcome: "The masterplan prioritises walkability, greenery and a safe residential environment, with central open spaces fostering community interaction.",
    images: [
      { src: "/images/projects/irwo-housing-ambattur/01.jpg", alt: "IRWO Housing Phase II, Ambattur — view 1", width: 916, height: 506 },
      { src: "/images/projects/irwo-housing-ambattur/02.jpg", alt: "IRWO Housing Phase II, Ambattur — view 2", width: 895, height: 633 },
      { src: "/images/projects/irwo-housing-ambattur/03.jpg", alt: "IRWO Housing Phase II, Ambattur — view 3", width: 903, height: 591 },
    ],
    published: true,
  },
  {
    slug: "amrit-bharat-stations",
    title: "Amrit Bharat Station Redevelopment — Trichy Division",
    location: "Trichy Division, Tamil Nadu",
    typology: "Railway Stations",
    status: "Ongoing",
    client: "Southern Railway — Trichy Division",
    services: ["Master Planning", "Architecture", "Structural", "MEP"],
    brief: "Master planning and design for six stations — Srirangam, Polur, Lalgudi, Thiruvannamalai, Vellore Cantonment and Ariyalur — under the Amrit Bharat Station Scheme.",
    context: "Under the flagship Amrit Bharat Station Scheme of Indian Railways, Southern Railway's Trichy Division has taken up the redevelopment of six key stations. Architec Allied is entrusted with the complete master planning, architectural, structural and MEP design.",
    architecturalResponse: "Each station is designed for airport-like comfort with railway-scale efficiency: expanded forecourts, segregated arrival and departure movement, classified waiting halls, commercial and food-court integration, smart building systems, upgraded parking with EV-charging, and universal barrier-free access — with heritage sensitivity where appropriate.",
    userOutcome: "Collectively the stations represent a transformative upgrade to passenger infrastructure in the Trichy Division, scalable for future expansion.",
    images: [
      { src: "/images/projects/amrit-bharat-stations/01.jpg", alt: "Amrit Bharat Station Redevelopment — Trichy Division — view 1", width: 1254, height: 756 },
      { src: "/images/projects/amrit-bharat-stations/02.jpg", alt: "Amrit Bharat Station Redevelopment — Trichy Division — view 2", width: 1320, height: 693 },
      { src: "/images/projects/amrit-bharat-stations/03.jpg", alt: "Amrit Bharat Station Redevelopment — Trichy Division — view 3", width: 1242, height: 770 },
      { src: "/images/projects/amrit-bharat-stations/04.jpg", alt: "Amrit Bharat Station Redevelopment — Trichy Division — view 4", width: 1322, height: 682 },
      { src: "/images/projects/amrit-bharat-stations/05.jpg", alt: "Amrit Bharat Station Redevelopment — Trichy Division — view 5", width: 1600, height: 900 },
      { src: "/images/projects/amrit-bharat-stations/06.jpg", alt: "Amrit Bharat Station Redevelopment — Trichy Division — view 6", width: 1280, height: 720 },
      { src: "/images/projects/amrit-bharat-stations/07.jpg", alt: "Amrit Bharat Station Redevelopment — Trichy Division — view 7", width: 1200, height: 678 },
      { src: "/images/projects/amrit-bharat-stations/08.jpg", alt: "Amrit Bharat Station Redevelopment — Trichy Division — view 8", width: 960, height: 540 },
    ],
    published: true,
  },
  {
    slug: "ernakulam-town-railway-station",
    title: "Redevelopment of Ernakulam Town Railway Station",
    location: "Ernakulam, Kerala",
    typology: "Railway Stations",
    status: "Ongoing",
    client: "Indian Railways",
    contractor: "RANK Projects & Development Pvt Ltd (EPC)",
    services: ["Architecture", "Structural", "MEP"],
    brief: "A multi-modal, airport-style redevelopment with a 36-metre central air-concourse connecting the north and south terminals.",
    context: "Executed under an EPC contract by RANK Projects & Development Pvt Ltd, the redevelopment reorganises the station around a 36-metre-wide central air-concourse connecting the north and south terminals.",
    architecturalResponse: "Segregated arrival and departure terminals, a Multi-Level Car Parking facility and residential quarters for station staff are complemented by waiting lounges, ticketing, retail kiosks, food courts, lifts and escalators. Existing platforms, shelters and foot-overbridges are being upgraded alongside new utility infrastructure.",
    userOutcome: "As of late 2025, site works, piling and foundations for major structures including the MLCP and residential quarters are in progress, positioning the station as a modern multi-modal transit hub.",
    images: [
      { src: "/images/projects/ernakulam-town-railway-station/01.jpg", alt: "Redevelopment of Ernakulam Town Railway Station — view 1", width: 1600, height: 668 },
      { src: "/images/projects/ernakulam-town-railway-station/02.jpg", alt: "Redevelopment of Ernakulam Town Railway Station — view 2", width: 1600, height: 900 },
    ],
    published: true,
  },
  {
    slug: "puducherry-railway-station",
    title: "Redevelopment of Puducherry Railway Station",
    location: "Puducherry",
    typology: "Railway Stations",
    status: "Ongoing",
    client: "Indian Railways",
    contractor: "Engineering Projects (India) Ltd. (EPIL) (EPC)",
    services: ["Architecture", "Structural", "MEP", "Pre-tender costing"],
    brief: "Two modern terminal buildings and a 36-metre air-concourse forming an airport-style multi-modal hub for Puducherry.",
    context: "Executed under EPC by Engineering Projects (India) Ltd., the redevelopment is progressing with major structural and civil works underway.",
    architecturalResponse: "The project comprises beach-side and Villupuram-side terminal buildings — an East Terminal of G+Mezzanine+1 — a 36-metre-wide central air-concourse connecting all platforms, and a G+3 Officers' Rest House. Centralized air-conditioning, segregated arrival/departure flows, organised parking, waiting lounges, food courts and two new foot-overbridges deliver airport-style comfort.",
    userOutcome: "With preliminary works complete, construction continues toward a modern, multi-modal transit hub for Puducherry.",
    images: [
      { src: "/images/projects/puducherry-railway-station/01.jpg", alt: "Redevelopment of Puducherry Railway Station — view 1", width: 1600, height: 736 },
      { src: "/images/projects/puducherry-railway-station/02.jpg", alt: "Redevelopment of Puducherry Railway Station — view 2", width: 1378, height: 503 },
    ],
    published: true,
  },
  {
    slug: "malar-group-housing-illupur",
    title: "Group Housing for Malar Energy & Infrastructure",
    location: "Illupur, Trichy",
    typology: "Group Housing",
    status: "Ongoing",
    client: "Malar Energy & Infrastructure Pvt. Ltd.",
    services: ["Master Planning", "Architecture", "Structural", "MEP"],
    brief: "A planned group-housing development at Illupur, Trichy for Malar Energy & Infrastructure Pvt. Ltd.",
    context: "A group-housing development at Illupur, Trichy, master-planned and designed by Architec Allied for Malar Energy & Infrastructure Pvt. Ltd.",
    images: [
      { src: "/images/projects/malar-group-housing-illupur/01.jpg", alt: "Group Housing for Malar Energy & Infrastructure — view 1", width: 912, height: 631 },
      { src: "/images/projects/malar-group-housing-illupur/02.jpg", alt: "Group Housing for Malar Energy & Infrastructure — view 2", width: 990, height: 658 },
      { src: "/images/projects/malar-group-housing-illupur/03.jpg", alt: "Group Housing for Malar Energy & Infrastructure — view 3", width: 990, height: 658 },
      { src: "/images/projects/malar-group-housing-illupur/04.jpg", alt: "Group Housing for Malar Energy & Infrastructure — view 4", width: 990, height: 658 },
      { src: "/images/projects/malar-group-housing-illupur/05.jpg", alt: "Group Housing for Malar Energy & Infrastructure — view 5", width: 990, height: 658 },
    ],
    published: true,
  },
  {
    slug: "maharishi-vidya-mandir-school",
    title: "Maharishi Vidya Mandir CBSE School, Trichy",
    location: "Trichy, Tamil Nadu",
    typology: "Educational",
    status: "Ongoing",
    client: "Maharishi Vidya Mandir",
    services: ["Architecture", "Structural", "MEP"],
    brief: "A CBSE school campus at Trichy, Tamil Nadu.",
    context: "A CBSE school campus designed by Architec Allied at Trichy, Tamil Nadu.",
    images: [
      { src: "/images/projects/maharishi-vidya-mandir-school/01.jpg", alt: "Maharishi Vidya Mandir CBSE School, Trichy — view 1", width: 912, height: 529 },
      { src: "/images/projects/maharishi-vidya-mandir-school/02.jpg", alt: "Maharishi Vidya Mandir CBSE School, Trichy — view 2", width: 1503, height: 1002 },
      { src: "/images/projects/maharishi-vidya-mandir-school/03.jpg", alt: "Maharishi Vidya Mandir CBSE School, Trichy — view 3", width: 1600, height: 635 },
      { src: "/images/projects/maharishi-vidya-mandir-school/04.jpg", alt: "Maharishi Vidya Mandir CBSE School, Trichy — view 4", width: 880, height: 752 },
      { src: "/images/projects/maharishi-vidya-mandir-school/05.jpg", alt: "Maharishi Vidya Mandir CBSE School, Trichy — view 5", width: 1577, height: 469 },
      { src: "/images/projects/maharishi-vidya-mandir-school/06.jpg", alt: "Maharishi Vidya Mandir CBSE School, Trichy — view 6", width: 1024, height: 680 },
    ],
    published: true,
  },
  {
    slug: "barc-school-mysore",
    title: "CBSE School for Bhabha Atomic Research Centre, Mysore",
    location: "Yelewala, Mysore",
    typology: "Educational",
    status: "Ongoing",
    client: "Bhabha Atomic Research Centre (BARC)",
    services: ["Architecture", "Structural", "MEP"],
    brief: "A CBSE school for the Bhabha Atomic Research Centre at Yelewala, Mysore.",
    context: "A CBSE school designed for the Bhabha Atomic Research Centre at Yelewala, Mysore.",
    images: [
      { src: "/images/projects/barc-school-mysore/01.jpg", alt: "CBSE School for Bhabha Atomic Research Centre, Mysore — view 1", width: 1600, height: 1200 },
      { src: "/images/projects/barc-school-mysore/02.jpg", alt: "CBSE School for Bhabha Atomic Research Centre, Mysore — view 2", width: 892, height: 519 },
    ],
    published: true,
  },
  {
    slug: "entry-arches",
    title: "Entry Arches — AMNS Township & Rail Sadan",
    location: "Odisha",
    typology: "Urban Development",
    status: "Ongoing",
    services: ["Architecture", "Structural"],
    brief: "Landmark entry arches for the AMNS Residential Township and for Rail Sadan, the East Coast Railway headquarters.",
    context: "Sculptural gateway structures designed as landmark thresholds — the AMNS Residential Township entry arch and the entry arch for Rail Sadan, the East Coast Railway headquarters.",
    images: [
      { src: "/images/projects/entry-arches/01.jpg", alt: "Entry Arches — AMNS Township & Rail Sadan — view 1", width: 1600, height: 900 },
      { src: "/images/projects/entry-arches/02.jpg", alt: "Entry Arches — AMNS Township & Rail Sadan — view 2", width: 1600, height: 1200 },
      { src: "/images/projects/entry-arches/03.jpg", alt: "Entry Arches — AMNS Township & Rail Sadan — view 3", width: 1600, height: 900 },
      { src: "/images/projects/entry-arches/04.jpg", alt: "Entry Arches — AMNS Township & Rail Sadan — view 4", width: 1600, height: 900 },
    ],
    published: true,
  },
];
