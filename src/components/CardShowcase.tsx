"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  Bot,
  Zap,
  Layers,
  Database,
  Atom,
  Factory,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Sparkles
} from "lucide-react";

interface CardItem {
  id: string;
  slug: string;
  category: string;
  type: string;
  title: string;
  description: string;
  icon?: any;
  mediaUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
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

  const vimeoMatch = cleanUrl.match(/(?:vimeo\.com\/(?:video\/)?)([0-9]+)/i);
  if (vimeoMatch) {
    const videoId = vimeoMatch[1];
    return {
      type: "vimeo",
      embedUrl: `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&loop=1&background=1&autopause=0&controls=0`,
    };
  }

  if (
    /\.(mp4|webm|ogg|ogv|mov|m4v|mkv)(\?.*)?$/i.test(cleanUrl) ||
    cleanUrl.startsWith("data:video/")
  ) {
    return { type: "video" };
  }

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
      "Manufacturing Technology encompasses a diverse range of technologies used in the design, development, production, operation, and management of manufacturing systems.",
    quickLinks: [
      { label: "Precast Technologies", href: "/solutions/precast-technology" },
      { label: "Concreate Technologies", href: "/solutions/concreate-technologies" },
    ],
    cards: [
      {
        id: "mfg-1",
        slug: "precast-technology",
        category: "Precast Technologies",
        type: "Precast Technologies",
        title: "Precast Technologies",
        description:
          "Precast is a construction method in which concrete structures are cast in a reusable mold or factory-controlled environment, then transported to the construction site for assembly.",
        icon: Bot,
        mediaUrl: "/precast-technology.jpg",
      },
      {
        id: "mfg-2",
        slug: "concreate-technologies",
        category: "Concreate Technologies",
        type: "Concreate Technologies",
        title: "Concreate Technologies",
        description:
          "Concreate Technologies refers to the range of advanced technologies used in the production and application of concrete. These technologies focus on improving concrete's strength, durability, workability, and sustainability .",
        icon: Layers,
        mediaUrl: "/Concreatetechnologies.jpg",
      },
    ],
  },
  {
    id: "ai",
    title: "UI/UX For Precast",
    description:
      "Harnessing deep neural architectures, cognitive algorithms, and automated computer vision to optimize high-throughput workflows.",
    quickLinks: [
      { label: "User Research", href: "/solutions/user-research" },
      { label: "Information Architecture (IA)", href: "/solutions/information-architecture" },
    ],
    cards: [
      {
        id: "ai-1",
        slug: "user-research",
        category: "User Research",
        type: "UI/UX",
        title: "User Research",
        description:
          "Conducting comprehensive research to understand user needs, behaviors, and motivations to inform the design process.",
        icon: Zap,
        mediaUrl: "/istockphoto-1472894613-2048x2048.jpg",
      },
      {
        id: "ai-2",
        slug: "information-architecture",
        category: "Information Architecture (IA)",
        type: "UI/UX",
        title: "Information Architecture (IA)",
        description:
          "Organizing and structuring content in a clear and logical manner to enhance user experience and navigation.",
        icon: Factory,
        mediaUrl: "/istockphoto-1412244091-640_adpp_is.mp4",
      },
    ],
  },
  {
    id: "quantum",
    title: "Digital Marketing",
    description:
      "Driving measurable growth through targeted, data-driven digital marketing strategies.",
    quickLinks: [
      { label: "Search Engine Optimization (SEO)", href: "/solutions/search-engine-optimization" },
      { label: "Pay-Per-Click (PPC) Advertising", href: "/solutions/pay-per-click-advertising" },
    ],
    cards: [
      {
        id: "qt-1",
        slug: "search-engine-optimization",
        category: "Search Engine Optimization (SEO)",
        type: "Search Engine Optimization (SEO)",
        title: "Search Engine Optimization (SEO)",
        description:
          "Driving measurable growth through targeted, data-driven digital marketing strategies.",
        icon: Atom,
        mediaUrl: "/istockphoto-1364968289-612x612.jpg",
      },
      {
        id: "qt-2",
        slug: "pay-per-click-advertising",
        category: "Pay-Per-Click (PPC) Advertising",
        type: "Pay-Per-Click (PPC) Advertising",
        title: "Pay-Per-Click (PPC) Advertising",
        description:
          "Driving measurable growth through targeted, data-driven digital marketing strategies.",
        icon: Sparkles,
        mediaUrl: "/istockphoto-2287580756-612x612.jpg",
      },
    ],
  },
  {
    id: "it",
    title: "Information Technology",
    description:
      "Robust enterprise server fabrics, resilient industrial cybersecurity, and tightly coupled manufacturing execution systems.",
    quickLinks: [
      { label: "Mission-Critical Datacenter Operations", href: "/solutions/datacenter-operations" },
      { label: "Zero-Trust Threat Defense", href: "/solutions/cybersecurity-defense" },
    ],
    cards: [
      {
        id: "it-1",
        slug: "datacenter-operations",
        category: "Enterprise IT",
        type: "Server Grid",
        title: "Mission-Critical Datacenter Operations",
        description:
          "Scalable server architectures providing 99.999% uptime for enterprise data hubs and multi-region pipelines.",
        icon: Database,
        mediaUrl: "/3975-176000797.jpg",
      },
      {
        id: "it-2",
        slug: "cybersecurity-defense",
        category: "Cybersecurity",
        type: "Defense",
        title: "Zero-Trust Threat Defense & Data Vaulting",
        description:
          "Military-grade automated encryption and continuous threat vector monitoring protecting sensitive IP.",
        icon: ShieldCheck,
        mediaUrl: "/istockphoto-1851610545-2048x2048.webp",
      },
    ],
  },
  {
    id: "ml",
    title: "Machine Learning",
    description:
      "Real-time sensor telemetry, automated anomaly diagnostics, and algorithmic forecasting models designed for industrial scale.",
    quickLinks: [
      { label: "Micro-Sensor Array & Hardware Diagnostics", href: "/solutions/hardware-diagnostics" },
      { label: "Predictive Analytics & Yield Optimization", href: "/solutions/predictive-analytics" },
    ],
    cards: [
      {
        id: "ml-1",
        slug: "hardware-diagnostics",
        category: "Edge Telemetry",
        type: "IoT Sensors",
        title: "Micro-Sensor Array & Hardware Diagnostics",
        description:
          "Embedded IoT sensors reading millions of signals per second to catch anomalies before equipment failures occur.",
        icon: Cpu,
        mediaUrl: "/istockphoto-1969136908-2048x2048.webp",
      },
      {
        id: "ml-2",
        slug: "predictive-analytics",
        category: "Forecasting",
        type: "Analytics",
        title: "Predictive Analytics & Yield Optimization",
        description:
          "Dynamic machine learning pipelines forecasting market demands and fine-tuning output capacity.",
        icon: TrendingUp,
        mediaUrl: "/1000_F_799793082_ZnRdJhFLNkugUyKdQgwpxXrUhN6Hq0Wa.webp",
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
                        <Link
                          key={i}
                          href={link.href}
                          className="flex items-center gap-2 text-xs font-semibold text-[#0051c5] hover:text-[#0055FF] transition-colors"
                        >
                          <ArrowRight className="w-3 h-3 text-[#0055FF]" />
                          <span>{link.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {section.cards.map((card) => {
                  return (
                    <Link
                      key={card.id}
                      href={`/solutions/${card.slug}`}
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
                    </Link>
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
