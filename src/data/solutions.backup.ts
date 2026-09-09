export interface SolutionItem {
  slug: string;
  category: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  mediaUrl: string;
  mediaType?: "image" | "video";
  highlights: {
    title: string;
    description: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  applications: string[];
}

export const SOLUTIONS: Record<string, SolutionItem> = {
  "precast-technology": {
    slug: "precast-technology",
    category: "Manufacturing Technology",
    title: "Precast Technology",
    shortDesc: "Factory-controlled precision casting for rapid, durable, and sustainable modular construction assembly.",
    fullDesc: "Precast technology is an advanced construction method where concrete structural elements are cast in reusable, precision-engineered molds within a strictly controlled factory environment. Once fully cured and quality-verified, these components are transported directly to the site for rapid assembly, ensuring superior strength, thermal efficiency, and minimal construction waste.",
    mediaUrl: "/precast-technology.jpg",
    mediaType: "image",
    highlights: [
      {
        title: "Controlled Fabrication",
        description: "Cast in state-of-the-art facilities with strict temperature and curing controls to prevent micro-fissures and material inconsistency."
      },
      {
        title: "Accelerated Timelines",
        description: "Reduces on-site construction schedules by up to 50% compared to traditional cast-in-place concrete methods."
      },
      {
        title: "Structural Integrity",
        description: "Engineered for high load-bearing capacities, seismic resilience, and decades of low-maintenance structural life."
      },
      {
        title: "Sustainable Production",
        description: "Minimizes raw material waste, enables automated recycling of excess mix, and lowers site carbon footprints."
      }
    ],
    specifications: [
      { label: "Compressive Strength", value: "50 MPa – 85 MPa" },
      { label: "Curing Technique", value: "Accelerated Thermal / Steam" },
      { label: "Dimensional Tolerance", value: "± 2.0 mm" },
      { label: "Compliance Standards", value: "PCI, ACI 318, ISO 9001:2015" }
    ],
    applications: [
      "Commercial & Industrial Warehouses",
      "High-Speed Rail & Highway Infrastructure",
      "Highway Overpasses & Bridge Superstructures",
      "Subterranean Utility Vaults & Drainage Fabrics"
    ]
  },

  "concreate-technologies": {
    slug: "concreate-technologies",
    category: "Manufacturing Technology",
    title: "Concrete Technologies",
    shortDesc: "Next-generation material science and automated batching for high-performance industrial concrete.",
    fullDesc: "Concrete Technologies encompasses the latest advancements in chemical admixtures, self-compacting matrices, automated batching plants, and real-time curing telemetry. By optimizing chemical hydration and particle packing density, we deliver concrete solutions that maximize compressive strength, resist environmental degradation, and extend lifecycle longevity.",
    mediaUrl: "/Concreatetechnologies.jpg",
    mediaType: "image",
    highlights: [
      {
        title: "Advanced Admixture Formulations",
        description: "Custom chemical nano-admixtures providing superior workability, self-consolidation, and reduced water-cement ratios."
      },
      {
        title: "Automated Precision Batching",
        description: "IoT-monitored aggregate weighing and moisture compensation algorithms ensuring batch-to-batch uniformity."
      },
      {
        title: "Corrosion & Sulfate Resistance",
        description: "Engineered mineral blends that defend reinforcing rebar against chloride penetration in harsh coastal and industrial environments."
      },
      {
        title: "Low-Carbon Formulations",
        description: "Integration of pozzolanic supplementary cementitious materials reducing embodied carbon by up to 40%."
      }
    ],
    specifications: [
      { label: "Slump Flow Rating", value: "650 mm – 750 mm (Self-Consolidating)" },
      { label: "Chloride Permeability", value: "< 1000 Coulombs (Very Low)" },
      { label: "Batch Variance", value: "< 0.5% by weight" },
      { label: "Quality Standard", value: "ASTM C94 / EN 206" }
    ],
    applications: [
      "Heavy Industrial Flooring & Foundational Slabs",
      "Marine Ports & Coastal Defensive Barriers",
      "Prestressed Bridge Girders & Superstructures",
      "Specialized High-Heat Refractory Installations"
    ]
  },

  "user-research": {
    slug: "user-research",
    category: "UI/UX For Precast",
    title: "User Research & Usability Engineering",
    shortDesc: "Empirical discovery, behavioral analytics, and workflow mapping to design intuitive industrial interfaces.",
    fullDesc: "Our User Research practice translates complex industrial operations into human-centered software architectures. Through field observation, heuristic evaluation, and quantitative telemetry, we uncover workflow bottlenecks and engineer intuitive user interfaces tailored for plant operators, engineers, and executive decision-makers.",
    mediaUrl: "/istockphoto-1472894613-2048x2048.jpg",
    mediaType: "image",
    highlights: [
      {
        title: "Field Observation & Ethnography",
        description: "Studying operators in live factory environments to capture genuine edge-case interactions and environmental constraints."
      },
      {
        title: "Behavioral Journey Mapping",
        description: "Documenting cognitive friction points and decision paths to streamline multi-step industrial tasks."
      },
      {
        title: "Quantitative Usability Testing",
        description: "Measuring task completion times, error rates, and System Usability Scale (SUS) benchmarks across iterative prototypes."
      },
      {
        title: "Accessibility & Ergonomics",
        description: "Designing high-contrast, touch-optimized, and glare-resistant interfaces suitable for harsh factory floor lighting."
      }
    ],
    specifications: [
      { label: "Research Methodologies", value: "Contextual Inquiry, Tree Testing, Eye-Tracking" },
      { label: "Target Cohorts", value: "Machine Operators, Site Supervisors, Executive Leads" },
      { label: "Deliverables", value: "Interactive Wireframes, Journey Maps, SUS Reports" },
      { label: "Accessibility Tier", value: "WCAG 2.1 AA Compliance" }
    ],
    applications: [
      "Industrial SCADA & PLC Operator Panels",
      "Mobile Jobsite Field Inspection Applications",
      "Fleet Telemetry & Asset Tracking Dashboards",
      "Supply Chain Procurement Portals"
    ]
  },

  "information-architecture": {
    slug: "information-architecture",
    category: "UI/UX For Precast",
    title: "Information Architecture (IA)",
    shortDesc: "Structural taxonomy, logical hierarchy, and streamlined data visualization for industrial systems.",
    fullDesc: "Information Architecture bridges massive volumes of real-time operational data with seamless human interaction. We design structured navigation models, data classification hierarchies, and contextual dashboard layouts that allow operators to instantly locate critical telemetry and respond to production anomalies.",
    mediaUrl: "/istockphoto-1412244091-640_adpp_is.mp4",
    mediaType: "video",
    highlights: [
      {
        title: "Structured Data Taxonomies",
        description: "Organizing deep hierarchical manufacturing metrics into intuitive, predictable navigation schemas."
      },
      {
        title: "Context-Aware Navigation",
        description: "Adaptive menus that expose relevant tools and alarms based on operator role and current machine state."
      },
      {
        title: "High-Density Visualization",
        description: "Transforming dense telemetry streams into clear, actionable sparklines, heatmaps, and status cards."
      },
      {
        title: "Multi-Tier Search Systems",
        description: "Instant indexing across part numbers, maintenance logs, and live sensor readings."
      }
    ],
    specifications: [
      { label: "Architecture Type", value: "Faceted Taxonomy & Spatial Hierarchy" },
      { label: "Data Refresh Rate", value: "< 100ms Live Telemetry Streams" },
      { label: "Navigation Depth", value: "Maximum 3-Click Path to Critical Alarms" },
      { label: "Framework Compatibility", value: "React, Next.js, Electron, React Native" }
    ],
    applications: [
      "Plant-Wide Manufacturing Execution Dashboards",
      "Digital Twin 3D Component Hierarchies",
      "Warehouse Inventory & Bin Allocation Matrices",
      "Automated Quality Inspection Interfaces"
    ]
  },

  "search-engine-optimization": {
    slug: "search-engine-optimization",
    category: "Digital Marketing",
    title: "Search Engine Optimization (SEO)",
    shortDesc: "Technical search infrastructure, high-intent content strategy, and authoritative industry positioning.",
    fullDesc: "Our SEO services drive sustainable enterprise pipeline growth through deep technical optimization, keyword intent modeling, and authoritative domain building. We structure web assets for maximum search engine crawlability and top-tier visibility across critical commercial queries.",
    mediaUrl: "/istockphoto-1364968289-612x612.jpg",
    mediaType: "image",
    highlights: [
      {
        title: "Core Web Vitals & Technical SEO",
        description: "Optimizing render trees, server response times, and semantic JSON-LD schema for lightning-fast indexing."
      },
      {
        title: "B2B Intent Keyword Modeling",
        description: "Targeting high-value commercial search terms that align with enterprise procurement and engineering searches."
      },
      {
        title: "Authority Link Acquisition",
        description: "Building authoritative industry citations, trade publication features, and high-trust technical backlinks."
      },
      {
        title: "Conversion-Focused Architecture",
        description: "Directing inbound organic traffic through tailored landing pages with high-converting CTA paths."
      }
    ],
    specifications: [
      { label: "Audit Cadence", value: "Continuous Automated Crawl Monitoring" },
      { label: "Target KPIs", value: "Organic Pipeline, Keyword Dominance, Core Vitals" },
      { label: "Schema Types", value: "Product, Organization, TechArticle, FAQPage" },
      { label: "Reporting Frequency", value: "Weekly Dynamic Executive Dashboards" }
    ],
    applications: [
      "Enterprise Product Catalog Visibility",
      "Engineering Whitepaper Organic Syndication",
      "Regional Manufacturing Hub Local Discovery",
      "Global B2B Distributor Channel Acquisition"
    ]
  },

  "pay-per-click-advertising": {
    slug: "pay-per-click-advertising",
    category: "Digital Marketing",
    title: "Pay-Per-Click (PPC) Advertising",
    shortDesc: "Precision paid search, programmatic display, and account-based advertising for high-value B2B acquisition.",
    fullDesc: "Our PPC campaigns deliver targeted qualified commercial leads by reaching key decision-makers across search, display, and professional networks. We combine granular negative keyword pruning, conversion rate optimization, and automated bidding algorithms to maximize Return on Ad Spend (ROAS).",
    mediaUrl: "/istockphoto-2287580756-612x612.jpg",
    mediaType: "image",
    highlights: [
      {
        title: "Account-Based Targeting (ABM)",
        description: "Reaching specific engineering managers and corporate procurement teams with hyper-relevant messaging."
      },
      {
        title: "Smart Bid Automation",
        description: "Utilizing machine learning bidding models calibrated for high-intent conversion and minimum cost-per-lead."
      },
      {
        title: "A/B Multivariate Creative Testing",
        description: "Continuous experimentation across headlines, value propositions, and landing page layouts."
      },
      {
        title: "Full-Funnel Attribution",
        description: "Connecting ad clicks to CRM deal pipelines to measure true return on enterprise marketing spend."
      }
    ],
    specifications: [
      { label: "Platforms", value: "Google Ads, LinkedIn Marketing, Bing Ads, Meta" },
      { label: "Conversion Tracking", value: "Server-Side Tagging & CRM Sync" },
      { label: "Attribution Model", value: "Multi-Touch & Data-Driven" },
      { label: "Optimization Cycle", value: "Real-Time Algorithmic & Weekly Human Review" }
    ],
    applications: [
      "New Solution Launch Campaigns",
      "Competitor Keyword Displacement",
      "Targeted Industry Trade Show Retargeting",
      "Regional Dealership & Contractor Recruitment"
    ]
  },

  "datacenter-operations": {
    slug: "datacenter-operations",
    category: "Information Technology",
    title: "Mission-Critical Datacenter Operations",
    shortDesc: "High-density server fabrics, redundant power topologies, and 99.999% uptime enterprise hosting.",
    fullDesc: "We engineer and manage high-availability enterprise compute hubs designed for uninterrupted industrial workloads. Featuring multi-redundant power feeds, liquid cooling arrays, and low-latency optical fabrics, our infrastructure guarantees business continuity across distributed manufacturing networks.",
    mediaUrl: "/3975-176000797.mp4",
    mediaType: "video",
    highlights: [
      {
        title: "High-Density Server Compute",
        description: "Accelerated blade servers and GPU clusters engineered for heavy simulation and database transactions."
      },
      {
        title: "N+2 Redundant Architecture",
        description: "Dual utility feeds, backup generator farms, and uninterrupted battery banks preventing downtime."
      },
      {
        title: "Direct Liquid Thermal Control",
        description: "Advanced closed-loop cooling lowering PUE ratings while supporting high TDP processor workloads."
      },
      {
        title: "Global Interconnect Fabrics",
        description: "Ultra-low-latency 100GbE fiber backbones connecting remote plants to centralized core systems."
      }
    ],
    specifications: [
      { label: "Uptime SLA", value: "99.999% Continuous Availability" },
      { label: "Power Usage Effectiveness (PUE)", value: "< 1.18 Average" },
      { label: "Cooling Infrastructure", value: "Direct-to-Chip Liquid & Hot Aisle Containment" },
      { label: "Certifications", value: "Tier IV Ready, SOC 2 Type II, ISO 27001" }
    ],
    applications: [
      "Enterprise ERP & SCADA Core Hosting",
      "High-Performance Finite Element Analysis (FEA)",
      "Centralized Multi-Plant Telemetry Ingestion",
      "Disaster Recovery & Real-Time Data Replication"
    ]
  },

  "cybersecurity-defense": {
    slug: "cybersecurity-defense",
    category: "Information Technology",
    title: "Zero-Trust Threat Defense & Data Vaulting",
    shortDesc: "Continuous threat vector monitoring, military-grade encryption, and automated intrusion response.",
    fullDesc: "Our Zero-Trust cybersecurity framework shields operational technology (OT) and enterprise IT networks from advanced persistent threats. Through continuous micro-segmentation, cryptographic access verification, and automated anomaly containment, we protect sensitive manufacturing blueprints and core infrastructure.",
    mediaUrl: "/card-it-2.jpg",
    mediaType: "image",
    highlights: [
      {
        title: "Micro-Segmented Network Zones",
        description: "Isolating industrial control networks from public interfaces to prevent lateral threat movement."
      },
      {
        title: "Automated Threat Containment",
        description: "AI-driven endpoint detection instantly quarantining compromised nodes within milliseconds."
      },
      {
        title: "Immutable Data Vaults",
        description: "Air-gapped, write-once-read-many (WORM) backups safeguarding against ransomware extortion."
      },
      {
        title: "Continuous Compliance Auditing",
        description: "Automated vulnerability scanning and compliance mapping against NIST and ISO frameworks."
      }
    ],
    specifications: [
      { label: "Security Framework", value: "NIST SP 800-82, IEC 62443, Zero-Trust" },
      { label: "Encryption Tier", value: "AES-256-GCM / TLS 1.3 Strict" },
      { label: "Response Time", value: "< 50ms Automated Node Isolation" },
      { label: "Audit Logging", value: "Immutable Distributed SIEM" }
    ],
    applications: [
      "Industrial Control System (ICS) Protection",
      "Proprietary CAD & BIM File Vaulting",
      "Secure Remote Machine Diagnostics",
      "Executive Identity & Access Management"
    ]
  },

  "hardware-diagnostics": {
    slug: "hardware-diagnostics",
    category: "Machine Learning",
    title: "Micro-Sensor Array & Hardware Diagnostics",
    shortDesc: "High-frequency IoT sensor telemetry and automated anomaly detection for predictive equipment health.",
    fullDesc: "Deploy dense arrays of vibration, thermal, acoustic, and magnetic IoT sensors across critical machinery. Our edge machine learning processors analyze millions of signals per second locally, identifying micro-anomalies and predicting component degradation weeks before mechanical failure occurs.",
    mediaUrl: "/card-ml-1.jpg",
    mediaType: "image",
    highlights: [
      {
        title: "Multi-Axis Vibration Telemetry",
        description: "Capturing high-frequency spectral signatures to detect bearing wear, shaft misalignment, and imbalance."
      },
      {
        title: "On-Chip Edge Inference",
        description: "Micro-controllers executing trained neural models directly at the sensor without requiring cloud round-trips."
      },
      {
        title: "Ultrasonic Acoustic Monitoring",
        description: "Listening for microscopic friction spikes and pneumatic leaks across high-pressure hydraulic lines."
      },
      {
        title: "Predictive Health Scoring",
        description: "Aggregating sensor streams into an intuitive Machine Health Index (MHI) for maintenance scheduling."
      }
    ],
    specifications: [
      { label: "Sampling Frequency", value: "Up to 50 kHz Multi-Axis Spectral" },
      { label: "Connectivity", value: "Industrial LoRaWAN, BLE Mesh, RS-485 Modbus" },
      { label: "Operating Environment", value: "-40°C to +85°C, IP68 Ruggedized" },
      { label: "Battery / Power", value: "5-Year Self-Powered or 24V DC Industrial" }
    ],
    applications: [
      "Heavy Hydraulic Presses & Gantry Cranes",
      "High-RPM Aggregate Mixers & Turbine Drives",
      "Automated Stacking & Conveyor Systems",
      "Automotive Assembly Robotic Joints"
    ]
  },

  "predictive-analytics": {
    slug: "predictive-analytics",
    category: "Machine Learning",
    title: "Predictive Analytics & Yield Optimization",
    shortDesc: "Dynamic machine learning pipelines forecasting production capacity, material demand, and yield efficiency.",
    fullDesc: "Transform raw manufacturing logs into actionable forward-looking intelligence. Our predictive algorithms model supply chain fluctuations, batch curing rates, and demand curves to optimize raw material procurement and maximize production yield.",
    mediaUrl: "/card-10.jpg",
    mediaType: "image",
    highlights: [
      {
        title: "Yield Variance Optimization",
        description: "Identifying optimal aggregate moisture and ambient temperature combinations to maximize output grade."
      },
      {
        title: "Dynamic Demand Forecasting",
        description: "Correlating macroeconomic indicators and project milestones to forecast material needs 90 days out."
      },
      {
        title: "Automated Dispatch Scheduling",
        description: "Routing mixer fleets and transport haulers to ensure concrete arrives within precise cure windows."
      },
      {
        title: "Waste Reduction Analytics",
        description: "Tracing scrap generation across production shifts to isolate root causes and reduce raw material loss."
      }
    ],
    specifications: [
      { label: "Model Architecture", value: "Gradient Boosted Trees & Temporal Transformer Networks" },
      { label: "Prediction Horizon", value: "Real-Time (Hourly) to 12-Month Macro" },
      { label: "Accuracy Rating", value: "> 96.4% on Batch Yield Predictions" },
      { label: "Integration Interface", value: "REST API, GraphQL, Kafka Event Streams" }
    ],
    applications: [
      "Batch Plant Output Maximization",
      "Fleet Logistics & Delivery Windows",
      "Raw Aggregate Inventory Replenishment",
      "Executive Capacity Planning Dashboards"
    ]
  },

  "quantum-neural": {
    slug: "quantum-neural",
    category: "Quantum & Neural Systems",
    title: "Next-Gen Quantum & Neural Systems",
    shortDesc: "Hybrid quantum algorithms and accelerated neural compute for extreme simulation and optimization.",
    fullDesc: "Harness next-generation computational architectures to solve intractable industrial optimization problems. By combining quantum annealing principles with accelerated neural network processors, we deliver breakthrough performance in structural stress simulations, supply chain routing, and material synthesis modeling.",
    mediaUrl: "/crausal-2.png",
    mediaType: "image",
    highlights: [
      {
        title: "Quantum Annealing Optimization",
        description: "Solving combinatorial routing and resource allocation problems in seconds instead of hours."
      },
      {
        title: "Accelerated Neural Hardware",
        description: "Deploying tensor processing arrays optimized for high-dimensional finite element physics calculations."
      },
      {
        title: "Hybrid Cloud Frameworks",
        description: "Seamlessly switching between classical CPU/GPU infrastructure and quantum simulators as workload dictates."
      },
      {
        title: "Algorithmic Material Discovery",
        description: "Simulating molecular crystalline structures to design higher-strength, lighter-weight concrete composites."
      }
    ],
    specifications: [
      { label: "Qubit Simulation Capability", value: "64-Qubit Equivalent State Engine" },
      { label: "Acceleration Interconnect", value: "NVLink / PCIe Gen 5 Compute Fabrics" },
      { label: "Processing Latency", value: "Microsecond Tensor Dispatch" },
      { label: "SDK Compatibility", value: "Qiskit, Cirq, PyTorch, TensorRT" }
    ],
    applications: [
      "Complex Structural FEA Stress Modeling",
      "Global Multi-Echelon Supply Chain Routing",
      "Advanced Polymer & Composite Chemical Simulation",
      "Autonomous Multi-Agent Factory Coordination"
    ]
  },

  "industrial-robotics": {
    slug: "industrial-robotics",
    category: "Industrial Robotics",
    title: "Industrial Robotics & Automation",
    shortDesc: "Autonomous robotic manipulators, machine vision guidance, and fail-safe multi-agent coordination.",
    fullDesc: "Our industrial robotics platforms combine sub-millimeter servo actuators, stereo machine vision, and real-time path planning algorithms. Engineered for continuous duty in heavy manufacturing, these automated systems streamline material handling, precision welding, and component placement.",
    mediaUrl: "/crausal-3.png",
    mediaType: "image",
    highlights: [
      {
        title: "Sub-Millimeter Precision Actuation",
        description: "High-torque multi-axis robotic arms delivering consistent repeatability under heavy structural loads."
      },
      {
        title: "3D Spatial Computer Vision",
        description: "Stereoscopic laser scanners providing dynamic object recognition and real-time collision avoidance."
      },
      {
        title: "Multi-Agent Fleet Coordination",
        description: "Centralized orchestrator balancing task queues across autonomous mobile robots (AMRs) and static arms."
      },
      {
        title: "Safety Telemetry & Human-Cobot Fusion",
        description: "Integrated optical light curtains and force-limiting joints enabling safe collaboration on the factory floor."
      }
    ],
    specifications: [
      { label: "Repeatability Tolerance", value: "± 0.05 mm" },
      { label: "Payload Capacity", value: "Up to 1,200 kg Heavy Articulation" },
      { label: "Vision Latency", value: "< 15 ms Dynamic Tracking" },
      { label: "Safety Standard", value: "ISO 10218-1/2, ISO/TS 15066" }
    ],
    applications: [
      "Automated Rebar Caging & Welding",
      "Precast Mold Placement & Concrete Screeding",
      "Heavy Component Palletizing & Stacking",
      "Automated Quality Inspection & Laser Profiling"
    ]
  },

  "cloud-predictive-ai": {
    slug: "cloud-predictive-ai",
    category: "Cloud & Predictive AI",
    title: "Cloud & Predictive Intelligence",
    shortDesc: "Sovereign cloud infrastructure, real-time edge telemetry, and centralized industrial analytics.",
    fullDesc: "Unify factory floor operations with enterprise cloud computing. Our industrial cloud architecture collects, validates, and distributes telemetry across plants worldwide, enabling centralized executive oversight, predictive asset maintenance, and rapid automated scaling.",
    mediaUrl: "/crausal-4.png",
    mediaType: "image",
    highlights: [
      {
        title: "Hybrid Edge-to-Cloud Pipeline",
        description: "Low-latency data preprocessing at the plant edge with continuous replication to core cloud hubs."
      },
      {
        title: "Real-Time Telemetry Streaming",
        description: "High-throughput event streaming handling millions of sensor metrics per minute without packet drop."
      },
      {
        title: "Enterprise Multi-Plant Analytics",
        description: "Unified KPI dashboards comparing throughput, downtime, and energy efficiency across regional facilities."
      },
      {
        title: "Automated Disaster Failover",
        description: "Multi-zone redundant replication ensuring critical plant operations continue even during regional outages."
      }
    ],
    specifications: [
      { label: "Ingestion Throughput", value: "100,000+ Events / Sec" },
      { label: "Storage Architecture", value: "Encrypted Time-Series & Cold S3 Vaults" },
      { label: "Availability SLA", value: "99.99% Multi-Region Failover" },
      { label: "Compliance", value: "SOC 2 Type II, ISO 27001, GDPR" }
    ],
    applications: [
      "Global Plant Performance Benchmarking",
      "Centralized ERP & Material Resource Planning",
      "Remote Equipment Diagnostic Hubs",
      "Automated Energy Consumption Optimization"
    ]
  }
};
