export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  type: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    slug: "precast-bridge-engineering-abc",
    title: "Precast Concrete Systems in Accelerated Bridge Construction (ABC)",
    excerpt: "Examining how pretensioned bridge girders and modular precast deck panels reduce highway closure times from months to days while improving structural durability.",
    category: "Bridge Engineering",
    type: "Technical Whitepaper",
    date: "September 04, 2026",
    readTime: "5 min read",
    author: "Structural Engineering Team",
    image: "/precast-technology.jpg",
    content: [
      "Accelerated Bridge Construction (ABC) is transforming transportation infrastructure across the United States. By casting primary structural members in a controlled offsite facility, contractors can replace or build bridge superstructures in a fraction of traditional construction timeframes.",
      "Pretensioned AASHTO bulb-tee girders and full-depth precast deck panels provide superior concrete compaction and curing conditions compared to field-cast alternatives, substantially reducing micro-cracking and permeability under freeze-thaw cycles.",
      "Advanced 3D coordination between precast fabricators and general contractors ensures that bearing seats, utility sleeves, and shear key grouting details align precisely during weekend roadway closures."
    ]
  },
  {
    id: "post-2",
    slug: "concrete-mix-optimization-durability",
    title: "High-Performance Concrete Mixes & Durability in Civil Infrastructure",
    excerpt: "Evaluating low-permeability mix designs, supplementary cementitious materials, and compressive strength testing for long-term bridge longevity.",
    category: "Material Science",
    type: "Engineering Analysis",
    date: "August 28, 2026",
    readTime: "6 min read",
    author: "Materials Engineering Group",
    image: "/concreate_technologies_458x288.png",
    content: [
      "Modern civil infrastructure specifications increasingly require 75- to 100-year design life cycles. Achieving this longevity demands precision mix design, utilizing supplementary cementitious materials (SCMs) like silica fume and fly ash to refine the pore structure and resist chloride penetration.",
      "Automated plant batching equipment and real-time moisture sensors maintain tight water-cement ratios (w/c ≤ 0.38), ensuring uniform 28-day and 56-day compressive strengths exceeding 8,000 to 10,000 psi for prestressed members.",
      "Rigorous quality assurance protocols—including ASTM C39 compressive testing, ASTM C1202 rapid chloride permeability tests, and air-void analysis—guarantee compliance with strict state DOT standards."
    ]
  },
  {
    id: "post-3",
    slug: "lod-400-bim-precast-detailing",
    title: "LOD 400 BIM Detailing: From 3D Models to Automated Bar Bending",
    excerpt: "How clash-free 3D reinforcement modeling and direct CNC machine data exports eliminate plant re-work and field placement errors.",
    category: "3D BIM & Detailing",
    type: "Digital Detailing",
    date: "August 20, 2026",
    readTime: "4 min read",
    author: "BIM Detailing Group",
    image: "/infrastructure/precast_rebar_cage.jpg",
    content: [
      "Level of Development (LOD) 400 modeling represents full fabrication-level precision. Every reinforcement bar, prestressing strand, lifting insert, and embed plate is modeled in exact 3D coordinates before a single yard of concrete is poured.",
      "Automated collision checking resolves congestion between tightly spaced shear stirrups and post-tensioning anchor ducts, preventing expensive delays in the plant casting yard.",
      "Modern BIM platforms export bar bending schedules directly into industry-standard BVBS formats, enabling CNC automated rebar benders and cage mesh welders to fabricate reinforcement with millimeter accuracy."
    ]
  },
  {
    id: "post-4",
    slug: "segmental-viaduct-erection-methods",
    title: "Precast Segmental Viaducts & Span-by-Span Erection Techniques",
    excerpt: "Key engineering considerations for post-tensioned box girder viaducts, tendon profile layouts, and overhead launching gantry erection.",
    category: "Highway Viaducts",
    type: "Construction Method",
    date: "August 12, 2026",
    readTime: "7 min read",
    author: "Civil Infrastructure Team",
    image: "/infrastructure/precast_highway_viaduct.jpg",
    content: [
      "Precast segmental concrete bridges represent the premier solution for long-span highway flyovers and urban transit viaducts where ground-level traffic cannot be disrupted during construction.",
      "Individual match-cast box segments are manufactured in climate-controlled precast plants, transported to site, and hoisted into position using specialized overhead launching gantries.",
      "Comprehensive structural stage-by-stage analysis models calculate camber evolution, creep, shrinkage, and post-tensioning tendon losses across every erection phase to guarantee seamless deck profile transitions."
    ]
  },
  {
    id: "post-5",
    slug: "technical-spec-portals-precast-manufacturers",
    title: "Technical Specification Portals for Precast Infrastructure Producers",
    excerpt: "Building searchable digital load tables, submittal catalogs, and engineering tools for DOT and commercial civil contractors.",
    category: "Digital Solutions",
    type: "Industry Technology",
    date: "July 30, 2026",
    readTime: "4 min read",
    author: "Digital Solutions Team",
    image: "/precast_technologies_458x288.png",
    content: [
      "Precast producers with comprehensive digital product portals give structural engineers and project estimators immediate access to dimensional data, load tables, and downloadable CAD submittal files.",
      "Optimizing product documentation with clear technical search parameters ensures engineers specifying precast culverts, girders, and retaining walls find exact specifications quickly during project design phases.",
      "Interactive specification builders allow civil estimators to request certified quote packages directly, speeding up the submittal and procurement lifecycle."
    ]
  },
  {
    id: "post-6",
    slug: "astm-c1577-box-culverts-drainage",
    title: "ASTM C1577 Box Culverts & Heavy Highway Drainage Design",
    excerpt: "Structural capacity analysis, soil-structure interaction, and joint detailing for precast box culverts under heavy highway live loads.",
    category: "Drainage & Substructure",
    type: "Engineering Standard",
    date: "July 18, 2026",
    readTime: "5 min read",
    author: "Structural Engineering Team",
    image: "/infrastructure/precast_segments_yard.jpg",
    content: [
      "Precast concrete box culverts manufactured to ASTM C1577 standards provide rapid, high-durability solutions for highway drainage, stormwater detention, and stream crossings.",
      "Structural design calculations account for variable earth covers, AASHTO HL-93 live loading, and hydrostatic uplift pressures to ensure long-term stability under severe soil conditions.",
      "Standardized tongue-and-groove joint detailing with preformed flexible rubber gaskets prevents infiltration and exfiltration, protecting roadway embankments from subsurface erosion."
    ]
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
