export type Service = {
  slug: string;
  title: string;
  icon: string;
  tagline: string;
  description: string;
  features: string[];
  deliverables: string[];
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "hvac-design-installation",
    title: "HVAC Design & Installation",
    icon: "Snowflake",
    tagline: "Comfort engineered for every square foot.",
    description:
      "From load calculations to full installation, we design and build heating, ventilation and air-conditioning systems that are energy-efficient, code-compliant and built to last.",
    features: [
      "Heating & cooling load calculations",
      "Duct design & air balancing",
      "VRF, split & packaged systems",
      "Ventilation & IAQ solutions",
      "Energy-efficient retrofits",
    ],
    deliverables: ["Load calculations", "Equipment schedules", "Installation drawings", "Commissioning reports"],
    image: "/images/service-hvac.jpg",
  },
  {
    slug: "mep-engineering",
    title: "MEP Engineering",
    icon: "Wrench",
    tagline: "Mechanical, electrical and plumbing — fully coordinated.",
    description:
      "Our MEP engineers deliver integrated mechanical, electrical and plumbing designs in Revit, coordinated with architecture and structure to eliminate clashes before site work.",
    features: [
      "Mechanical (HVAC) design",
      "Electrical power & lighting",
      "Plumbing & sanitary design",
      "Fire protection systems",
      "Revit MEP coordination",
    ],
    deliverables: ["MEP design packages", "Revit MEP models", "Coordination drawings", "Clash reports"],
    image: "/images/service-mep.jpg",
  },
  {
    slug: "duct-manufacturing",
    title: "Duct Manufacturing",
    icon: "Factory",
    tagline: "Precision sheet metal, made to order.",
    description:
      "In-house spiral, rectangular and custom duct manufacturing with CNC precision — delivering clean, consistent, code-compliant ductwork for contractors nationwide.",
    features: [
      "Spiral & rectangular ductwork",
      "Custom fittings & transitions",
      "Galvanized, stainless & aluminum",
      "CNC plasma cutting",
      "Insulated & acoustic lining",
    ],
    deliverables: ["Shop drawings", "Cut schedules", "Spool drawings", "Delivery logistics"],
    image: "/images/service-duct.jpg",
  },
  {
    slug: "bim-revit-coordination",
    title: "BIM & Revit Coordination",
    icon: "Boxes",
    tagline: "Clash-free zones before concrete is poured.",
    description:
      "Federated Revit models and clash detection across architecture, structure and MEP — resolving conflicts in the office, not on the ladder.",
    features: [
      "Federated model coordination",
      "Clash detection & resolution",
      "LOD 200–400 modeling",
      "Shop drawing review",
      "As-built model delivery",
    ],
    deliverables: ["Coordinated models", "Clash reports", "Shop drawings", "As-built documentation"],
    image: "/images/service-bim.jpg",
  },
  {
    slug: "hvac-maintenance",
    title: "HVAC Maintenance & Service",
    icon: "Settings",
    tagline: "Preventive care that protects your investment.",
    description:
      "Scheduled maintenance, diagnostics and 24/7 emergency service for commercial and industrial HVAC systems — keeping uptime high and energy bills low.",
    features: [
      "Preventive maintenance plans",
      "24/7 emergency response",
      "Chiller & boiler service",
      "Filter & coil replacement",
      "Energy performance audits",
    ],
    deliverables: ["Maintenance schedules", "Service reports", "Performance audits", "Compliance certificates"],
    image: "/images/gallery-2.jpg",
  },
  {
    slug: "energy-audits",
    title: "Energy Audits & Retrofits",
    icon: "Gauge",
    tagline: "Find the waste. Cut the bill.",
    description:
      "Detailed energy audits that identify savings, followed by engineered retrofit solutions that pay for themselves.",
    features: [
      "Building energy assessments",
      "Thermal imaging surveys",
      "Retrofit feasibility studies",
      "Utility bill analysis",
      "ROI modelling",
    ],
    deliverables: ["Audit reports", "Retrofit proposals", "ROI analysis", "Implementation plans"],
    image: "/images/gallery-1.jpg",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: "Commercial" | "Healthcare" | "Manufacturing" | "Institutional";
  service: string;
  client: string;
  year: string;
  image: string;
  size: string;
  duration: string;
  challenge: string;
  solution: string;
  results: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "riverside-commercial-tower",
    title: "Riverside Commercial Tower",
    category: "Commercial",
    service: "HVAC Design & Installation",
    client: "Riverside Properties",
    year: "2025",
    image: "/images/project1.jpg",
    size: "24,000 m²",
    duration: "14 months",
    challenge:
      "A 24-storey tower needing a low-energy HVAC backbone with tight floor-to-floor heights and zero tolerance for rework.",
    solution:
      "Full Revit-coordinated VRF and DOAS design with prefabricated spiral duct risers, delivered clash-free to the mechanical contractor.",
    results: [
      "Zero major clashes at installation",
      "31% lower energy use vs. baseline",
      "Delivered 3 weeks ahead of schedule",
    ],
  },
  {
    slug: "central-care-hospital",
    title: "Central Care Hospital",
    category: "Healthcare",
    service: "MEP Engineering",
    client: "Central Care Group",
    year: "2024",
    image: "/images/project2.jpg",
    size: "18,500 m²",
    duration: "18 months",
    challenge:
      "Operating theatres and patient wards demanding strict IAQ, pressurization and redundancy — with infection-control compliance.",
    solution:
      "Specialized HVAC zoning, HEPA filtration, and fully redundant MEP systems coordinated in Revit with the architectural team.",
    results: [
      "ISO 14644-compliant clean zones",
      "99.9% uptime on critical systems",
      "Full BIM handover for facilities team",
    ],
  },
  {
    slug: "precision-duct-facility",
    title: "Precision Duct Facility Expansion",
    category: "Manufacturing",
    service: "Duct Manufacturing",
    client: "Precision Sheet Metal",
    year: "2024",
    image: "/images/project3.jpg",
    size: "6,000 m²",
    duration: "6 months",
    challenge:
      "Ramping duct production capacity with new CNC lines while keeping quality consistent across a bigger output.",
    solution:
      "New automated spiral line, standardized shop drawings and spooling workflows delivered alongside the facility fit-out.",
    results: [
      "3× production capacity",
      "Weld rejection rate under 0.5%",
      "Same-week delivery on standard sizes",
    ],
  },
  {
    slug: "meridian-office-interior",
    title: "Meridian Office Interior",
    category: "Commercial",
    service: "BIM & Revit Coordination",
    client: "Meridian Workspaces",
    year: "2023",
    image: "/images/project4.jpg",
    size: "9,200 m²",
    duration: "9 months",
    challenge:
      "An exposed-ceiling office fit-out where ducts, sprinklers, lighting and AV all had to coexist in open view.",
    solution:
      "Federated Revit coordination with the interior design team produced a clean, intentional ceiling layout with no visible conflicts.",
    results: [
      "Design-quality exposed services",
      "All trades coordinated in one model",
      "As-built model handed over on day one",
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Their Revit-coordinated HVAC design eliminated every clash before we set foot on site. The mechanical install went in without a single rework order.",
    name: "Daniel Reyes",
    role: "Facility Manager, Riverside Properties",
    rating: 5,
  },
  {
    quote:
      "As architects we handed them our model and they returned a fully coordinated MEP package. The collaboration was seamless — exactly what BIM should be.",
    name: "Amira Hassan",
    role: "Principal Architect, Forma Studio",
    rating: 5,
  },
  {
    quote:
      "The duct spools arrived cut, labeled and ready to hang. Our crew saved weeks of on-site fabrication time.",
    name: "Marcus Webb",
    role: "Mechanical Contractor, Webb Mechanical",
    rating: 5,
  },
  {
    quote:
      "Their energy audit found $180k in annual savings and the retrofit they engineered paid for itself in 26 months.",
    name: "Priya Sharma",
    role: "Operations Director, Northgate Manufacturing",
    rating: 5,
  },
  {
    quote:
      "Twenty-four hour emergency response and they actually answered at 2am. Our production line never went down twice.",
    name: "Tom Okafor",
    role: "Plant Manager, Okafor Industries",
    rating: 5,
  },
  {
    quote:
      "From load calcs to commissioning, everything was documented and on time. This is how commercial HVAC should be done.",
    name: "Elena Petrova",
    role: "Development Manager, Skyline Build Group",
    rating: 5,
  },
];

export const TEAM = [
  {
    name: "Robert Castellano",
    title: "Founder & Principal Engineer",
    bio: "25 years in HVAC and MEP design, PE licensed, led projects across 12 countries.",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "Fatima Al-Sayed",
    title: "Director of BIM & Coordination",
    bio: "Revit specialist who has coordinated 500,000+ m² of MEP services without a major clash.",
    image: "https://i.pravatar.cc/300?img=47",
  },
  {
    name: "James Whitfield",
    title: "Head of Duct Manufacturing",
    bio: "Runs our CNC shop floor with a 20-year record in precision sheet metal fabrication.",
    image: "https://i.pravatar.cc/300?img=15",
  },
  {
    name: "Lucia Moretti",
    title: "Senior Mechanical Engineer",
    bio: "Energy modelling expert; her retrofit designs have cut client bills by 30% on average.",
    image: "https://i.pravatar.cc/300?img=32",
  },
];

export const TIMELINE = [
  { year: "2009", title: "Founded", text: "mep-services launched as a two-person HVAC design consultancy." },
  { year: "2013", title: "First manufacturing line", text: "Opened our duct fabrication shop with a single CNC plasma cutter." },
  { year: "2017", title: "BIM-first adoption", text: "Became a fully Revit-coordinated practice — architecture, structure and MEP in one model." },
  { year: "2021", title: "500th project", text: "Crossed 500 completed projects and earned ISO 9001 certification." },
  { year: "2024", title: "National reach", text: "Expanded duct manufacturing to serve contractors in 40+ cities." },
  { year: "2026", title: "Today", text: "A 40-person team delivering design, engineering, manufacturing and service under one roof." },
];

export const STATS = [
  { value: "500+", label: "Projects completed" },
  { value: "98%", label: "Client satisfaction" },
  { value: "15+", label: "Years of experience" },
  { value: "40+", label: "Cities served" },
];

export const FAQS = [
  {
    q: "Do you handle both design and installation?",
    a: "Yes — we design, engineer, manufacture ductwork in-house, and manage installation through vetted contractor partners. One team, one accountability chain.",
  },
  {
    q: "Do you work with other architects and contractors?",
    a: "Absolutely. We regularly receive Revit models from architects and take on the MEP scope, returning coordinated, clash-free packages.",
  },
  {
    q: "What size projects do you take?",
    a: "From single-suite HVAC retrofits to 24,000 m² commercial towers and national duct supply contracts.",
  },
  {
    q: "Can you meet project deadlines?",
    a: "We plan backwards from commissioning dates, manufacture ahead of site needs, and have delivered 93% of projects on or ahead of schedule.",
  },
  {
    q: "Do you offer maintenance contracts?",
    a: "Yes — preventive maintenance plans with 24/7 emergency response, reporting and compliance documentation included.",
  },
];

export const COMPANY = {
  name: "MEP Services",
  tagline: "HVAC · MEP · Duct Manufacturing",
  description:
    "Design, engineering, manufacturing and service — HVAC and MEP solutions delivered through precision, coordination and one accountable team.",
  email: "hello@mep-services.amsitservices.com",
  phone: "+1 (555) 234-5678",
  address: "Unit 7, Industrial Park East, Houston, TX",
  hours: "Mon–Fri, 8:00–18:00 · 24/7 emergency line",
};
