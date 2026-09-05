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
  icon?: any;
  /** Can be an image path/URL, video file (.mp4, .webm), YouTube URL, or Vimeo URL */
  mediaUrl?: string;
  imageUrl?: string; // backwards-compatible alias
  videoUrl?: string; // convenience alias
  mediaType?: "auto" | "image" | "video" | "youtube" | "vimeo";
}

interface TopicSection {
  id: string;
  title: string;
  description: string;
  quickLinks: { label: string; href: string }[];
  cards: [CardItem, CardItem];
}

type MediaType = "image" | "video" | "youtube" | "vimeo" | "none";

function detectMediaType(
  url?: string,
  explicitType?: "auto" | "image" | "video" | "youtube" | "vimeo"
): { type: MediaType; embedUrl?: string } {
  if (!url || typeof url !== "string" || !url.trim()) {
    return { type: "none" };
  }

  const cleanUrl = url.trim();

  // Explicit type overrides
  if (explicitType && explicitType !== "auto") {
    if (explicitType === "youtube") {
      const match = cleanUrl.match(
        /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/)|youtu\.be\/)([\w-]{11})/i
      );
      const videoId = match ? match[1] : cleanUrl;
      return {
        type: "youtube",
        embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1`,
      };
    }
    if (explicitType === "vimeo") {
      const match = cleanUrl.match(/(?:vimeo\.com\/(?:video\/)?)([0-9]+)/i);
      const videoId = match ? match[1] : cleanUrl;
      return {
        type: "vimeo",
        embedUrl: `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&loop=1&background=1&autopause=0&controls=0`,
      };
    }
    return { type: explicitType };
  }

  // Auto-detect YouTube URLs (watch, share, embed, shorts)
  const ytMatch = cleanUrl.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/)|youtu\.be\/)([\w-]{11})/i
  );
  if (ytMatch) {
    const videoId = ytMatch[1];
    return {
      type: "youtube",
      embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1`,
    };
  }

  // Auto-detect Vimeo URLs
  const vimeoMatch = cleanUrl.match(/(?:vimeo\.com\/(?:video\/)?)([0-9]+)/i);
  if (vimeoMatch) {
    const videoId = vimeoMatch[1];
    return {
      type: "vimeo",
      embedUrl: `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&loop=1&background=1&autopause=0&controls=0`,
    };
  }

  // Auto-detect direct video files
  if (
    /\.(mp4|webm|ogg|ogv|mov|m4v|mkv)(\?.*)?$/i.test(cleanUrl) ||
    cleanUrl.startsWith("data:video/")
  ) {
    return { type: "video" };
  }

  // Default to image
  return { type: "image" };
}

function CardMedia({
  mediaUrl,
  imageUrl,
  videoUrl,
  mediaType,
  alt,
}: {
  mediaUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
  mediaType?: "auto" | "image" | "video" | "youtube" | "vimeo";
  alt: string;
}) {
  const url = mediaUrl || videoUrl || imageUrl;
  const { type, embedUrl } = detectMediaType(url, mediaType);

  if (!url || type === "none") {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#F1F6FD] via-[#E8F2FD] to-[#DCECFD] flex items-center justify-center">
        <Sparkles className="w-8 h-8 text-[#0055FF]/30" />
      </div>
    );
  }

  if (type === "video") {
    return (
      <div className="relative w-full h-full overflow-hidden bg-slate-950">
        <video
          src={url}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2.5 right-2.5 z-20 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[9px] font-mono font-bold text-white flex items-center gap-1 border border-white/20 shadow-sm pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          VIDEO
        </div>
      </div>
    );
  }

  if (type === "youtube" || type === "vimeo") {
    return (
      <div className="relative w-full h-full overflow-hidden bg-slate-950 pointer-events-none">
        <iframe
          src={embedUrl}
          title={alt}
          className="absolute inset-0 w-full h-full object-cover scale-[1.35] transition-transform duration-500"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          frameBorder="0"
        />
        <div className="absolute top-2.5 right-2.5 z-20 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[9px] font-mono font-bold text-white flex items-center gap-1 border border-white/20 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0055FF] animate-pulse" />
          {type === "youtube" ? "YOUTUBE" : "VIMEO"}
        </div>
      </div>
    );
  }

  // Regular Image (local or remote)
  return (
    <img
      src={url}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );
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
        description:
          "Deploying high-precision robotic workcells and automated guided systems for mission-critical manufacturing.",
        icon: Bot,
        mediaUrl: "/istockphoto-460888701-640_adpp_is.mp4",
      },
      {
        id: "mfg-2",
        category: "Additive Tech",
        type: "Precision",
        title: "Additive Manufacturing (3D Sand Printing)",
        description:
          "Industrial 3D additive engineering and custom hardware tooling that radically reduce prototyping cycle times.",
        icon: Layers,
        mediaUrl: "/photo-1561634507-9db8434412d8.avif",
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
        description:
          "Self-learning AI models predicting operational bottlenecks and streamlining resource distribution in real time.",
        icon: Zap,
        mediaUrl: "/173104-848555587.mp4",
      },
      {
        id: "ai-2",
        category: "Computer Vision",
        type: "Vision AI",
        title: "Computer Vision Quality Control",
        description:
          "Automated vision recognition detecting sub-millimeter defects with zero false positives across production lines.",
        icon: Factory,
        mediaUrl: "/card-7.jpg",
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
        description:
          "Ultra-low-latency planetary compute infrastructure powering mission-critical real-time applications.",
        icon: Atom,
        mediaUrl: "/113385-697718118_medium.mp4",
      },
      {
        id: "qt-2",
        category: "Quantum Research",
        type: "Compute",
        title: "Quantum Algorithm & Molecular Modeling",
        description:
          "Simulating complex molecular structures and encryption breakthroughs using cutting-edge quantum logic.",
        icon: Sparkles,
        mediaUrl: "/card-9.jpg",
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
        description:
          "Scalable server architectures providing 99.999% uptime for enterprise data hubs and multi-region pipelines.",
        icon: Database,
        mediaUrl: "/3975-176000797.mp4",
      },
      {
        id: "it-2",
        category: "Cybersecurity",
        type: "Defense",
        title: "Zero-Trust Threat Defense & Data Vaulting",
        description:
          "Military-grade automated encryption and continuous threat vector monitoring protecting sensitive IP.",
        icon: ShieldCheck,
        mediaUrl: "/card-it-2.jpg",
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
        description:
          "Embedded IoT sensors reading millions of signals per second to catch anomalies before equipment failures occur.",
        icon: Cpu,
        mediaUrl: "/card-ml-1.jpg",
      },
      {
        id: "ml-2",
        category: "Forecasting",
        type: "Analytics",
        title: "Predictive Analytics & Yield Optimization",
        description:
          "Dynamic machine learning pipelines forecasting market demands and fine-tuning output capacity.",
        icon: TrendingUp,
        mediaUrl: "/card-10.jpg",
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

                <h2 className="text-2xl sm:text-3xl font-black text-[#0335ab] tracking-tight mb-4">
                  {section.title}
                </h2>

                <p className="text-sm text-[#0051c5] leading-relaxed mb-6 font-medium">
                  {section.description}
                </p>

                <div className="relative">
                  <button
                    onClick={() => toggle(section.id)}
                    className="inline-flex items-center gap-2 text-[13px] font-bold text-[#0055FF] hover:text-[#0335ab] transition-colors cursor-pointer"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${openLinks[section.id] ? "rotate-180" : ""
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
                          className="flex items-center gap-2 text-xs font-semibold text-[#0051c5] hover:text-[#0055FF] transition-colors"
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
                          <CardMedia
                            mediaUrl={card.mediaUrl}
                            imageUrl={card.imageUrl}
                            videoUrl={card.videoUrl}
                            mediaType={card.mediaType}
                            alt={card.title}
                          />

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
                          <h3 className="text-[15px] sm:text-base font-extrabold text-[#0335ab] leading-snug group-hover:text-[#0055FF] transition-colors">
                            {card.title}
                          </h3>

                          <p className="text-xs sm:text-[13px] text-[#0051c5] mt-3 leading-relaxed font-normal">
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
