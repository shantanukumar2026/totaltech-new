"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  standard: string;
  image: string;
  scope: string;
  highlights: string[];
}

const PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    title: "Interstate Highway Bridge Superstructure",
    category: "BRIDGES & HIGHWAYS",
    location: "",
    standard: "AASHTO LRFD",
    image: "/precast-technology.jpg",
    scope: "Pretensioned AASHTO bulb-tee girders, precast pier caps, and modular full-depth bridge deck panels.",
    highlights: ["Pretensioned Bulb-Tees", "Accelerated Bridge Construction (ABC)", "Full-Depth Deck Panels"],
  },
  {
    id: "p2",
    title: "Elevated Viaduct & Segmental Flyovers",
    category: "SEGMENTAL VIADUCTS",
    location: "",
    standard: "AASHTO / PTI",
    image: "/infrastructure/precast_highway_viaduct.jpg",
    scope: "Post-tensioned segmental box girders, tendon profile layouts, and span-by-span erection plans.",
    highlights: ["Post-Tensioned Box Girders", "Tendon Layouts", "Span-by-Span Erection"],
  },
  {
    id: "p3",
    title: "Precast Drainage & Substructure Infrastructure",
    category: "DRAINAGE & SUBSTRUCTURE",
    location: "",
    standard: "ASTM C1577 / AASHTO",
    image: "/infrastructure/precast_segments_yard.jpg",
    scope: "Precast box culverts, retaining wall panels, and modular abutments engineered for heavy highway drainage.",
    highlights: ["Precast Box Culverts", "MSE Retaining Panels", "Heavy Pier Caps"],
  },
];

const FILTERS = ["ALL INFRASTRUCTURE", "BRIDGES & HIGHWAYS", "SEGMENTAL VIADUCTS", "DRAINAGE & SUBSTRUCTURE"];

export default function SectionFeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState("ALL INFRASTRUCTURE");

  const filtered =
    activeFilter === "ALL INFRASTRUCTURE"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="section-featured-projects" className="w-full bg-[#F8FBFE] py-12 sm:py-16 border-t border-[#E2E8F0] select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 mb-6 border-b border-[#E2E8F0]">
          <div>
            <div className="w-12 h-1 bg-[#0055FF] mb-3" />
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-white border border-[#D2E4F9] text-[#0055FF] text-[10px] font-mono font-bold uppercase tracking-wider mb-2 shadow-xs">
              <span>09 | FEATURED INFRASTRUCTURE PROJECTS & PORTFOLIO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              Featured Precast Infrastructure Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0051c5] font-medium max-w-md">
            Structural precast calculations, bridge girder systems, and LOD 400 detailing deliverables for heavy civil infrastructure.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {FILTERS.map((f, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer border ${activeFilter === f
                ? "bg-[#0055FF] text-white border-[#0055FF] shadow-xs"
                : "bg-white text-[#0335ab] border-[#D2E4F9] hover:border-[#0055FF]"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* 3-Column Grid for 3 Pure Infrastructure Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-[#E2E8F0] hover:border-[#0055FF] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F0F6FE]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 z-20">
                    <span className="px-2.5 py-1 bg-white/95 text-[#0055FF] text-[10px] font-mono font-bold uppercase shadow-md border border-blue-100">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 z-20">
                    <span className="px-2.5 py-1 bg-[#0055FF] text-white text-[10px] font-mono font-bold uppercase shadow-md">
                      {project.standard}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0335ab] leading-snug group-hover:text-[#0055FF] transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#0051c5] leading-relaxed mb-4">
                    {project.scope}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#F0F4F9]">
                    {project.highlights.map((h, hIdx) => (
                      <span
                        key={hIdx}
                        className="px-2 py-0.5 bg-[#F8FBFE] border border-[#D2E4F9] text-[#0335ab] text-[10px] font-mono font-semibold"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-4 pt-2 border-t border-[#F0F4F9] flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-[#0055FF] transition-colors">
                  INFRASTRUCTURE DELIVERABLE
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0055FF] group-hover:translate-x-1 transition-transform">
                  <span>Explore Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
