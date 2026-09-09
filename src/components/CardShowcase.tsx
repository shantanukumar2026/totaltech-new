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
  Sparkles,
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
      const match = cleanUrl.match(
        /(?:vimeo\.com\/(?:video\/)?)([0-9]+)/i
      );

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

  const vimeoMatch = cleanUrl.match(
    /(?:vimeo\.com\/(?:video\/)?)([0-9]+)/i
  );

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
    title: "Precast Technology",
    description:
      "Technology and production systems that improve the way precast concrete components are designed, manufactured, inspected, and delivered for infrastructure projects.",
    quickLinks: [
      {
        label: "Precast Manufacturing Technology",
        href: "/solutions/precast-technology",
      },
      {
        label: "Concrete Materials & Technology",
        href: "/solutions/concreate-technologies",
      },
    ],
    cards: [
      {
        id: "mfg-1",
        slug: "precast-technologies",
        category: "Precast Technology",
        type: "Manufacturing",
        title: "Precast Manufacturing Technology",
        description:
          "Precast manufacturing technology uses controlled production systems and processes to improve how precast concrete components are manufactured. Our solutions support production planning, mold and formwork systems, automation, quality control, and efficient plant workflows for infrastructure projects.",
        icon: Bot,
        mediaUrl: "/precast_technologies_458x288.png",
      },
      {
        id: "mfg-2",
        slug: "concreate-technologies",
        category: "Concrete Technology",
        type: "Material Science",
        title: "Concrete Materials & Technology",
        description:
          "Concrete materials and technology include advanced methods used in the production and application of concrete. These technologies focus on improving concrete strength, durability, workability, performance, and sustainability for precast infrastructure applications.",
        icon: Layers,
        mediaUrl: "/concreate_technologies_458x288.png",
      },
    ],
  },

  {
    id: "digital",
    title: "Digital Precast Technology",
    description:
      "Digital tools and workflows that help precast teams manage engineering information, models, data, and project requirements more efficiently.",
    quickLinks: [
      {
        label: "Digital Engineering",
        href: "/solutions/digital-engineering",
      },
      {
        label: "BIM & Model-Based Workflows",
        href: "/solutions/bim-workflows",
      },
    ],
    cards: [
      {
        id: "digital-1",
        slug: "user-research",
        category: "Digital Engineering",
        type: "Workflows",
        title: "Digital Engineering Workflows",
        description:
          "Digital engineering workflows connect models, drawings, project information, and engineering data to support better coordination throughout the precast project lifecycle.",
        icon: Zap,
        mediaUrl: "/istockphoto-1472894613-2048x2048.jpg",
      },
      {
        id: "digital-2",
        slug: "information-architecture",
        category: "Digital Systems",
        type: "Data",
        title: "Engineering Information Systems",
        description:
          "Structured information systems organize engineering, production, and project data so teams can find, review, and use critical information more efficiently.",
        icon: Factory,
        mediaUrl: "/istockphoto-1412244091-640_adpp_is.mp4",
      },
    ],
  },

  {
    id: "ai",
    title: "AI & Machine Learning",
    description:
      "AI and machine learning technologies that use engineering, production, inspection, and equipment data to support better infrastructure decisions.",
    quickLinks: [
      {
        label: "Computer Vision",
        href: "/solutions/computer-vision",
      },
      {
        label: "Predictive Analytics",
        href: "/solutions/predictive-analytics",
      },
    ],
    cards: [
      {
        id: "ai-1",
        slug: "computer-vision",
        category: "AI Technology",
        type: "Computer Vision",
        title: "Computer Vision & Inspection",
        description:
          "Computer vision can analyze images of precast components to assist with defect detection, dimensional checks, surface inspection, and quality control.",
        icon: Cpu,
        mediaUrl: "/istockphoto-1969136908-2048x2048.webp",
      },
      {
        id: "ai-2",
        slug: "predictive-analytics",
        category: "Machine Learning",
        type: "Analytics",
        title: "Predictive Analytics",
        description:
          "Machine learning can analyze production and equipment data to identify patterns, predict potential issues, and support production planning and process optimization.",
        icon: TrendingUp,
        mediaUrl: "/1000_F_799793082_ZnRdJhFLNkugUyKdQgwpxXrUhN6Hq0Wa.webp",
      },
    ],
  },

  {
    id: "automation",
    title: "Automation & Digital Manufacturing",
    description:
      "Connected manufacturing and automation technologies that improve production efficiency, consistency, monitoring, and plant operations.",
    quickLinks: [
      {
        label: "Manufacturing Automation",
        href: "/solutions/manufacturing-automation",
      },
      {
        label: "Plant Technology",
        href: "/solutions/plant-technology",
      },
    ],
    cards: [
      {
        id: "automation-1",
        slug: "manufacturing-automation",
        category: "Automation",
        type: "Production",
        title: "Manufacturing Automation",
        description:
          "Automation technologies support repeatable production processes, equipment integration, material handling, and efficient manufacturing workflows for precast infrastructure.",
        icon: Factory,
        mediaUrl: "/3975-176000797.jpg",
      },
      {
        id: "automation-2",
        slug: "plant-technology",
        category: "Plant Technology",
        type: "Operations",
        title: "Precast Plant Technology",
        description:
          "Plant technology connects production data, equipment, scheduling, and quality information to improve visibility and support efficient precast manufacturing operations.",
        icon: Database,
        mediaUrl: "/istockphoto-1851610545-2048x2048.webp",
      },
    ],
  },

  {
    id: "quality",
    title: "Quality & Inspection Technology",
    description:
      "Digital inspection and quality technologies that help monitor precast production, verify components, and maintain consistent manufacturing standards.",
    quickLinks: [
      {
        label: "Digital Inspection",
        href: "/solutions/digital-inspection",
      },
      {
        label: "Quality Data",
        href: "/solutions/quality-data",
      },
    ],
    cards: [
      {
        id: "quality-1",
        slug: "digital-inspection",
        category: "Quality Technology",
        type: "Inspection",
        title: "Digital Inspection",
        description:
          "Digital inspection tools help capture measurements, inspection results, images, and production records to support consistent quality control.",
        icon: ShieldCheck,
        mediaUrl: "/istockphoto-1969136908-2048x2048.webp",
      },
      {
        id: "quality-2",
        slug: "quality-data",
        category: "Quality Technology",
        type: "Data",
        title: "Quality Data & Traceability",
        description:
          "Connected quality systems organize production and inspection data to improve traceability, documentation, and visibility across precast operations.",
        icon: Sparkles,
        mediaUrl: "/1000_F_799793082_ZnRdJhFLNkugUyKdQgwpxXrUhN6Hq0Wa.webp",
      },
    ],
  },
];

export default function CardShowcase() {
  const [openLinks, setOpenLinks] = useState<{ [key: string]: boolean }>({});

  const toggle = (id: string) => {
    setOpenLinks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full bg-white select-none">
      {SECTIONS.map((section) => (
        <React.Fragment key={section.id}>
          <section className="w-full py-10 sm:py-14 px-4 sm:px-6 lg:px-12 bg-white">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">

              {/* Section Introduction */}
              <div className="lg:col-span-4 flex flex-col justify-start">
                <div className="w-12 h-1 bg-[#0055FF] mb-4" />

                <h2 className="text-2xl sm:text-3xl font-black text-[#0335ab] tracking-tight mb-4">
                  {section.title}
                </h2>

                <p className="text-sm text-[#0051c5] leading-relaxed mb-6 font-medium">
                  {section.description}
                </p>

                {/* Quick Links */}
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

              {/* Cards */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {section.cards.map((card) => {
                  return (
                    <Link
                      key={card.id}
                      href={`/solutions/${card.slug}`}
                      className="bg-white border border-[#E2E8F0] hover:border-[#0055FF] shadow-xs hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden"
                    >
                      <div>
                        {/* Image */}
                        <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F0F7FF]">
                          <CardMedia
                            mediaUrl={card.mediaUrl}
                            imageUrl={card.imageUrl}
                            videoUrl={card.videoUrl}
                            mediaType={card.mediaType}
                            alt={card.title}
                          />

                          {/* Image Labels */}
                          <div className="absolute bottom-3 left-4 z-20 flex items-center gap-2">
                            <span className="px-2.5 py-1 bg-white/95 text-[#0055FF] text-[10px] font-mono font-bold tracking-wider uppercase shadow-md border border-blue-100">
                              {card.category}
                            </span>

                            <span className="px-2.5 py-1 bg-[#0055FF] text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-md">
                              {card.type}
                            </span>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6">
                          <h3 className="text-[15px] sm:text-base font-extrabold text-[#0335ab] leading-snug group-hover:text-[#0055FF] transition-colors">
                            {card.title}
                          </h3>

                          <p className="text-xs sm:text-[13px] text-[#0051c5] mt-3 leading-relaxed font-normal">
                            {card.description}
                          </p>
                        </div>
                      </div>

                      {/* CTA */}
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

          {/* Divider */}
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <hr className="border-t border-[#E2E8F0]" />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}