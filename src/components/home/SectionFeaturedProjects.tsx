"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  standard: string;
  image: string;
  scope: string;
  highlights: string[];
}

const PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    title: "Highway Bridge Superstructure Systems",
    category: "BRIDGES & HIGHWAYS",
    standard: "AASHTO LRFD",
    image: "/precast-technology.jpg",
    scope:
      "Precast and prestressed bridge components for highway structures, including bridge girders, pier caps, and deck systems engineered for project-specific spans and loads.",
    highlights: [
      "Prestressed Bridge Girders",
      "Precast Pier Caps",
      "Bridge Deck Systems",
    ],
  },

  {
    id: "p2",
    title: "Elevated Viaduct & Flyover Systems",
    category: "VIADUCTS & FLYOVERS",
    standard: "AASHTO / PT",
    image: "/infrastructure/precast_highway_viaduct.jpg",
    scope:
      "Precast and prestressed components for elevated highways, flyovers, and viaducts, including structural members, segmental systems, and erection engineering.",
    highlights: [
      "Precast Box Girders",
      "Segmental Components",
      "Erection Engineering",
    ],
  },

  {
    id: "p3",
    title: "Drainage & Highway Substructure Systems",
    category: "DRAINAGE & SUBSTRUCTURES",
    standard: "ASTM / AASHTO",
    image: "/infrastructure/precast_segments_yard.jpg",
    scope:
      "Precast concrete systems for highway drainage and supporting infrastructure, including box culverts, retaining components, headwalls, and substructure elements.",
    highlights: [
      "Precast Box Culverts",
      "Retaining Components",
      "Precast Headwalls",
    ],
  },
];

const FILTERS = [
  "ALL INFRASTRUCTURE",
  "BRIDGES & HIGHWAYS",
  "VIADUCTS & FLYOVERS",
  "DRAINAGE & SUBSTRUCTURES",
];

export default function SectionFeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState("ALL INFRASTRUCTURE");

  const filtered =
    activeFilter === "ALL INFRASTRUCTURE"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section
      id="section-featured-projects"
      className="w-full bg-[#F8FBFE] py-12 sm:py-16 border-t border-[#E2E8F0] select-none"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-5 mb-6 border-b border-[#E2E8F0]">
          <div>
            <div className="w-12 h-1 bg-[#0055FF] rounded-full mb-3" />

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#D2E4F9] text-[#0055FF] text-[11px] font-mono font-bold uppercase tracking-wider rounded-full mb-2 shadow-xs">
              <span className="live-pulse-dot" />
              <span>08 | APPLICATIONS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              Precast Applications
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#0051c5] font-medium max-w-md leading-relaxed">
            Representative precast engineering applications across bridges,
            viaducts, drainage, and other transportation infrastructure.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2.5 mb-7">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer border ${activeFilter === filter
                ? "bg-gradient-to-r from-[#0052cc] to-[#0085f4] text-white border-[#0052cc] shadow-md"
                : "bg-white text-[#0335ab] border-[#D2E4F9] hover:border-[#0085f4] hover:bg-blue-50/50"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Application Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-[#E2E8F0] hover:border-[#0085f4] rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-500/8 card-hover-lift transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div>

                {/* Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F0F6FE] rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute top-3 left-3 z-20">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-xs text-[#0055FF] text-[10px] font-mono font-bold uppercase rounded-full shadow-md border border-blue-100">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 z-20">
                    <span className="px-3 py-1 bg-gradient-to-r from-[#0052cc] to-[#0085f4] text-white text-[10px] font-mono font-bold uppercase rounded-full shadow-md">
                      {project.standard}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0335ab] leading-snug group-hover:text-[#0085f4] transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#0051c5] leading-relaxed mb-4">
                    {project.scope}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#F0F4F9]">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2.5 py-0.5 bg-[#F8FBFE] border border-[#D2E4F9] text-[#0335ab] text-[10px] font-mono font-semibold rounded-md"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-5 pt-3 border-t border-[#F0F4F9] flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-slate-400 group-hover:text-[#0055FF] transition-colors">
                  INFRASTRUCTURE APPLICATION
                </span>

                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0055FF] group-hover:text-[#0085f4] group-hover:translate-x-1.5 transition-all">
                  <span>Explore Application</span>
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