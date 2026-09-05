"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ArrowRight,
  Bot,
  Zap,
  Layers,
  Database,
  Atom,
  Factory,
  BarChart3,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Sparkles
} from "lucide-react";

interface CardItem {
  id: string;
  category: string;
  type: string;
  title: string;
  description: string;
  icon: any;
  imageUrl?: string;
}

interface TopicSection {
  id: string;
  title: string;
  description: string;
  quickLinks: { label: string; href: string }[];
  cards: [CardItem, CardItem];
}

const SECTIONS: TopicSection[] = [
  {
    id: "mfg-tech",
    title: "Manufacturing Technology",
    description:
      "Advanced industrial automation, precision robotics, and cutting-edge additive manufacturing transforming modern factory floors.",
    quickLinks: [
      { label: "Robotics", href: "#" },
      { label: "Additive Manufacturing", href: "#" },
      { label: "Automation & Process Control", href: "#" },
      { label: "Non-Destructive Testing", href: "#" },
    ],
    cards: [
      {
        id: "mfg-1",
        category: "Robotics",
        type: "Automation",
        title: "Autonomous Industrial Robotics & Systems",
        description: "Deploying high-precision robotic workcells and automated guided systems for mission-critical manufacturing.",
        icon: Bot,
        imageUrl: "/card-robotics-clean.jpg",
      },
      {
        id: "mfg-2",
        category: "Additive Tech",
        type: "Precision",
        title: "Next-Gen Additive & Smart Fabrication",
        description: "Industrial 3D additive engineering and custom hardware tooling that radically reduce prototyping cycle times.",
        icon: Layers,
        imageUrl: "/real_tech_1.jpg",
      },
    ],
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    description:
      "Harnessing deep neural architectures, cognitive algorithms, and automated computer vision to optimize high-throughput workflows.",
    quickLinks: [
      { label: "Predictive Maintenance", href: "#" },
      { label: "Computer Vision", href: "#" },
      { label: "Digital Twin Simulation", href: "#" },
      { label: "Process Optimization", href: "#" },
    ],
    cards: [
      {
        id: "ai-1",
        category: "Predictive AI",
        type: "Platform",
        title: "Cognitive Neural Engines & Intelligent Ops",
        description: "Self-learning AI models predicting operational bottlenecks and streamlining resource distribution in real time.",
        icon: Zap,
        imageUrl: "/card-8.jpg",
      },
      {
        id: "ai-2",
        category: "Computer Vision",
        type: "Vision AI",
        title: "High-Speed Optical Quality Inspection",
        description: "Automated vision recognition detecting sub-millimeter defects with zero false positives across production lines.",
        icon: Factory,
        imageUrl: "/card-7.jpg",
      },
    ],
  },
  {
    id: "quantum",
    title: "Quantum Technology",
    description:
      "Pioneering quantum algorithms and next-generation distributed compute infrastructures engineered for complex simulations.",
    quickLinks: [
      { label: "Cloud Computing", href: "#" },
      { label: "Quantum Simulation", href: "#" },
      { label: "Supply Chain Optimization", href: "#" },
      { label: "Secure Communication", href: "#" },
    ],
    cards: [
      {
        id: "qt-1",
        category: "Global Network",
        type: "Infrastructure",
        title: "Distributed Global Cloud Grid Architecture",
        description: "Ultra-low-latency planetary compute infrastructure powering mission-critical real-time applications.",
        icon: Atom,
        imageUrl: "/card-4.jpg",
      },
      {
        id: "qt-2",
        category: "Quantum Research",
        type: "Compute",
        title: "Quantum Algorithm & Molecular Modeling",
        description: "Simulating complex molecular structures and encryption breakthroughs using cutting-edge quantum logic.",
        icon: Sparkles,
        imageUrl: "/card-9.jpg",
      },
    ],
  },
  {
    id: "it",
    title: "Information Technology",
    description:
      "Robust enterprise server fabrics, resilient industrial cybersecurity, and tightly coupled manufacturing execution systems.",
    quickLinks: [
      { label: "MES Systems", href: "#" },
      { label: "ERP Integration", href: "#" },
      { label: "Product Lifecycle Management", href: "#" },
      { label: "Industrial Cybersecurity", href: "#" },
    ],
    cards: [
      {
        id: "it-1",
        category: "Enterprise IT",
        type: "Server Grid",
        title: "Mission-Critical Datacenter Operations",
        description: "Scalable server architectures providing 99.999% uptime for enterprise data hubs and multi-region pipelines.",
        icon: Database,
        imageUrl: "/real_tech_2.jpg",
      },
      {
        id: "it-2",
        category: "Cybersecurity",
        type: "Defense",
        title: "Zero-Trust Threat Defense & Data Vaulting",
        description: "Military-grade automated encryption and continuous threat vector monitoring protecting sensitive IP.",
        icon: ShieldCheck,
        imageUrl: "/card-it-2.jpg",
      },
    ],
  },
  {
    id: "ml",
    title: "Machine Learning",
    description:
      "Real-time sensor telemetry, automated anomaly diagnostics, and algorithmic forecasting models designed for industrial scale.",
    quickLinks: [
      { label: "Anomaly Detection", href: "#" },
      { label: "Defect Classification", href: "#" },
      { label: "Yield Optimization", href: "#" },
      { label: "Demand Forecasting", href: "#" },
    ],
    cards: [
      {
        id: "ml-1",
        category: "Edge Telemetry",
        type: "IoT Sensors",
        title: "Micro-Sensor Array & Hardware Diagnostics",
        description: "Embedded IoT sensors reading millions of signals per second to catch anomalies before equipment failures occur.",
        icon: Cpu,
        imageUrl: "/card-ml-1.jpg",
      },
      {
        id: "ml-2",
        category: "Forecasting",
        type: "Analytics",
        title: "Predictive Analytics & Yield Optimization",
        description: "Dynamic machine learning pipelines forecasting market demands and fine-tuning output capacity.",
        icon: TrendingUp,
        imageUrl: "/card-10.jpg",
      },
    ],
  },
];

export default function CardShowcase() {
  const [openLinks, setOpenLinks] = useState<{ [key: string]: boolean }>({});

  const toggle = (id: string) => {
    setOpenLinks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full bg-white select-none">
      {SECTIONS.map((section) => (
        <React.Fragment key={section.id}>
          <section className="w-full py-14 sm:py-16 px-4 sm:px-6 lg:px-12 bg-white">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">

              <div className="lg:col-span-4 flex flex-col justify-start">
                <div className="w-12 h-1 bg-[#0055FF] mb-4" />

                <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight mb-4">
                  {section.title}
                </h2>

                <p className="text-sm text-[#334155] leading-relaxed mb-6">
                  {section.description}
                </p>

                <div className="relative">
                  <button
                    onClick={() => toggle(section.id)}
                    className="inline-flex items-center gap-2 text-[13px] font-bold text-[#0055FF] hover:text-[#0040C1] transition-colors cursor-pointer"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openLinks[section.id] ? "rotate-180" : ""
                      }`}
                    />
                    <span>Quick Links</span>
                  </button>

                  {openLinks[section.id] && (
                    <div className="mt-3 p-4 bg-[#F8FAFD] border border-[#D2E4F9] shadow-xs space-y-2.5">
                      {section.quickLinks.map((link, i) => (
                        <a
                          key={i}
                          href={link.href}
                          className="flex items-center gap-2 text-xs font-semibold text-[#334155] hover:text-[#0055FF] transition-colors"
                        >
                          <ArrowRight className="w-3 h-3 text-[#0055FF]" />
                          <span>{link.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {section.cards.map((card) => {
                  return (
                    <div
                      key={card.id}
                      className="bg-white border border-[#E2E8F0] hover:border-[#0055FF] shadow-xs hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden"
                    >
                      <div>
                        <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F0F7FF]">
                          {card.imageUrl ? (
                            <Image
                              src={card.imageUrl}
                              alt={card.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-[#F1F6FD] via-[#E8F2FD] to-[#DCECFD]" />
                          )}
                          <div className="absolute bottom-3 left-4 z-20 flex items-center gap-2">
                            <span className="px-2.5 py-1 bg-white/95 text-[#0055FF] text-[10px] font-mono font-bold tracking-wider uppercase shadow-md border border-blue-100">
                              {card.category}
                            </span>
                            <span className="px-2.5 py-1 bg-[#0055FF] text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-md">
                              {card.type}
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-[15px] sm:text-base font-extrabold text-[#0F172A] leading-snug group-hover:text-[#0055FF] transition-colors">
                            {card.title}
                          </h3>

                          <p className="text-xs sm:text-[13px] text-[#334155] mt-3 leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                      </div>

                      <div className="px-6 pb-6 pt-1">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0055FF] group-hover:translate-x-1 transition-transform">
                          <span>Read More</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#0055FF]" />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <hr className="border-t border-[#E2E8F0]" />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
