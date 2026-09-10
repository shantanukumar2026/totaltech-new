"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ShowcaseRow {
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  points: string[];
  linkHref: string;
  linkText: string;
}

const ROWS: ShowcaseRow[] = [
  {
    tag: "3D MODELING & CAD",
    title: "3D Precast Structural Modeling & Detailing",
    description:
      "High-precision 3D modeling for precast concrete components, bridge girders, double tees, columns, and custom connection assemblies. Every model is detailed for clash-free coordination and clear shop visualization.",
    image: "/crausal-1.png",
    imageAlt: "3D Precast Structural Modeling",
    points: [
      "Component and connection geometry modeling",
      "Rebar cage and prestressed strand layout visualization",
      "Precast erection and assembly sequence graphics",
    ],
    linkHref: "/solutions/precast-technology",
    linkText: "Explore 3D Precast Modeling",
  },
  {
    tag: "DIGITAL MARKETING & SEO",
    title: "B2B Digital Marketing for Precast Producers",
    description:
      "Targeted search engine optimization and digital campaigns built specifically for the concrete and construction industry. We position your precast plant directly in front of general contractors, DOT estimators, and structural engineers actively looking for suppliers.",
    image: "/crausal-2.png",
    imageAlt: "Precast Digital Marketing & Lead Generation",
    points: [
      "Commercial contractor and municipal search optimization",
      "Targeted B2B campaign management for precast products",
      "Technical case studies and commercial inquiry generation",
    ],
    linkHref: "/solutions/search-engine-optimization",
    linkText: "Explore Digital Marketing",
  },
  {
    tag: "WEB SYSTEMS & SPEC PORTALS",
    title: "Digital Product Catalogs & Specification Portals",
    description:
      "Modern corporate websites and interactive digital product catalogs that make it effortless for bidding contractors to view precast dimensions, load capacities, and download spec sheets.",
    image: "/crausal-3.png",
    imageAlt: "Interactive Precast Web Systems",
    points: [
      "Interactive product catalogs with downloadable spec sheets",
      "Quote request and submittal document forms",
      "Mobile-responsive design for field engineers and estimators",
    ],
    linkHref: "/solutions/information-architecture",
    linkText: "Explore Web Systems",
  },
  {
    tag: "TECHNICAL GRAPHICS",
    title: "Architectural Cutaways & Submittal Graphics",
    description:
      "High-resolution exploded views, material cutaways, and technical illustrations tailored for submittal presentations, DOT bids, and client proposal packages.",
    image: "/crausal-4.png",
    imageAlt: "Technical Precast Graphics & Cutaways",
    points: [
      "Exploded component cutaways showing rebar and embeds",
      "High-resolution architectural submittal graphics",
      "Professional proposal and bid presentation assets",
    ],
    linkHref: "/solutions/user-research",
    linkText: "Explore Technical Graphics",
  },
];

export default function PrecastSolutionsShowcase() {
  return (
    <section className="w-full bg-[#F8FBFE] py-16 sm:py-24 border-t border-[#E2E8F0] select-none">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="w-12 h-1 bg-[#0055FF] mx-auto mb-4" />
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#D2E4F9] text-[#0055FF] text-[11px] font-mono font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span>PRECAST 3D DESIGN & DIGITAL SOLUTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight leading-tight mb-3">
            Precision 3D Modeling, Technical Graphics & Digital Growth
          </h2>
          <p className="text-xs sm:text-sm text-[#0051c5] font-normal leading-relaxed">
            Helping precast concrete manufacturers showcase complex structures, streamline submittal graphics, and connect with commercial contractors.
          </p>
        </div>

        {/* Alternating Zig-Zag Rows */}
        <div className="space-y-16 sm:space-y-24">
          {ROWS.map((row, idx) => {
            const isImageLeft = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-white border border-[#E2E8F0] p-6 sm:p-10 shadow-xs hover:border-[#0055FF] transition-all duration-300"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-6 ${
                    isImageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F0F6FE] border border-[#D2E4F9]">
                    <img
                      src={row.image}
                      alt={row.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-white/95 text-[#0055FF] text-[10px] font-mono font-bold uppercase shadow-sm border border-blue-100">
                        {row.tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text Description Column */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isImageLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#F0F6FE] text-[#0055FF] text-[10px] font-mono font-bold uppercase border border-[#D2E4F9] mb-3 w-fit">
                    {row.tag}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#0335ab] tracking-tight mb-3">
                    {row.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#0051c5] leading-relaxed mb-6 font-normal">
                    {row.description}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {row.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#0055FF] shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-[#0335ab]">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={row.linkHref}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0055FF] hover:text-[#0335ab] transition-colors w-fit group"
                  >
                    <span>{row.linkText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
