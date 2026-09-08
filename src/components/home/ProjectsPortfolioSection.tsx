"use client";

import React, { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  standard: string;
  image: string;
  scope: string;
  stats: { label: string; value: string }[];
}

const PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    title: "Interstate Highway Precast Bridge Superstructure",
    category: "HIGHWAY & BRIDGES",
    location: "Northeast Corridor, USA",
    standard: "AASHTO LRFD 10th Ed",
    image: "/crausal-1.png",
    scope: "Structural calculations and LOD 400 detailing for 145-ft pretensioned bulb-tee girders and ABC modular deck panels.",
    stats: [
      { label: "Span Length", value: "145 FT" },
      { label: "BIM Level", value: "LOD 400" },
      { label: "Delivery", value: "ABC Erection" },
    ],
  },
  {
    id: "p2",
    title: "Multi-Level Modular Precast Parking Structure",
    category: "COMMERCIAL & PARKING",
    location: "Midwest Logistics Hub, USA",
    standard: "ACI/PCI CODE-319-25",
    image: "/crausal-2.png",
    scope: "Full precast engineering including 12-ft wide double tees, precast columns, shear walls, and bolted connection details.",
    stats: [
      { label: "Elements", value: "1,450+ Units" },
      { label: "Duration", value: "3.5 Months" },
      { label: "Field Clashes", value: "0 Errors" },
    ],
  },
  {
    id: "p3",
    title: "Heavy Rail Transit Viaduct & Track Slabs",
    category: "RAIL & TRANSIT",
    location: "Southeast Transit Corridor, USA",
    standard: "AREMA MRE 2026",
    image: "/crausal-3.png",
    scope: "Precast post-tensioned box girders, track support slabs, and MSE precast retaining wall panels engineered for Cooper E-80 loading.",
    stats: [
      { label: "Live Load", value: "Cooper E-80" },
      { label: "Concrete", value: "8,500 PSI HPC" },
      { label: "Calculations", value: "PE/SE Sealed" },
    ],
  },
  {
    id: "p4",
    title: "Industrial Logistics & Cold-Storage Facility",
    category: "INDUSTRIAL PRECAST",
    location: "Texas Industrial Park, USA",
    standard: "PCI 9TH / ACI 318",
    image: "/crausal-4.png",
    scope: "Insulated precast sandwich wall panels, prestressed foundation piles, and structural roof framing with automated CNC bar schedules.",
    stats: [
      { label: "Footprint", value: "320,000 SQ FT" },
      { label: "Clear Height", value: "48 FT" },
      { label: "Insulation", value: "R-32 Thermal" },
    ],
  },
];

const FILTERS = ["ALL", "HIGHWAY & BRIDGES", "COMMERCIAL & PARKING", "RAIL & TRANSIT", "INDUSTRIAL PRECAST"];

export default function ProjectsPortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filtered =
    activeFilter === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects-portfolio" className="w-full bg-white py-16 sm:py-20 border-t border-[#E2E8F0] select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 mb-10 border-b border-[#E2E8F0]">
          <div className="max-w-3xl">
            <div className="w-12 h-1 bg-[#0055FF] mb-3" />
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#F0F6FE] border border-[#D2E4F9] text-[#0055FF] text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0055FF]" />
              <span>08 — PROJECTS / PORTFOLIO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              Featured Precast & Infrastructure Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0051c5] font-normal leading-relaxed max-w-md">
            Delivering precision structural precast engineering, prestressed concrete systems, and LOD 400 BIM detailing across North America.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {FILTERS.map((f, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(f)}
              className={`px-3.5 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                activeFilter === f
                  ? "bg-[#0055FF] text-white border-[#0055FF] shadow-xs"
                  : "bg-white text-[#0335ab] border-[#D2E4F9] hover:border-[#0055FF]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-[#E2E8F0] hover:border-[#0055FF] shadow-xs hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#F0F7FF]">
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

                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-semibold mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#0055FF]" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-lg font-extrabold text-[#0335ab] leading-snug group-hover:text-[#0055FF] transition-colors mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#0051c5] font-normal leading-relaxed mb-5">
                    {project.scope}
                  </p>

                  <div className="grid grid-cols-3 gap-2 p-3 bg-[#F8FBFE] border border-[#D2E4F9]">
                    {project.stats.map((st, sIdx) => (
                      <div key={sIdx} className="text-center">
                        <div className="text-[10px] font-mono text-slate-500 uppercase font-semibold">
                          {st.label}
                        </div>
                        <div className="text-xs sm:text-[13px] font-black text-[#0335ab] mt-0.5">
                          {st.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-5 pt-2 border-t border-[#F0F4F9] flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-slate-400 group-hover:text-[#0055FF] transition-colors">
                  VERIFIED SUBMITTAL
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0055FF] group-hover:translate-x-1 transition-transform">
                  <span>Explore Scope</span>
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
