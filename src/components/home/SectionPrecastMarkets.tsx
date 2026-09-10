"use client";

import React from "react";
import {
  Building2,
  Train,
  Milestone,
  Factory,
  Shield,
  Trophy,
  ArrowRight,
} from "lucide-react";

export default function SectionPrecastMarkets() {
  const MARKETS = [
    {
      icon: Milestone,
      code: "HIGHWAY & TRANSPORTATION",
      title: "Highway Bridges & Transportation Structures",
      desc: "Precast and prestressed concrete systems used for highway bridges, overpasses, bridge decks, barriers, pier caps, and other transportation structures.",
      elements: [
        "Precast Bridge Girders",
        "Bridge Deck Systems",
        "Precast Pier Caps",
      ],
    },
    {
      icon: Building2,
      code: "ELEVATED VIADUCTS",
      title: "Elevated Viaducts & Flyovers",
      desc: "Precast and prestressed components for elevated highways, flyovers, viaducts, and grade-separated crossings, engineered for project-specific spans and erection requirements.",
      elements: [
        "Precast Box Girders",
        "Viaduct Span Systems",
        "Precast Bridge Substructures",
      ],
    },
    {
      icon: Shield,
      code: "DRAINAGE & STORMWATER",
      title: "Drainage & Stormwater Infrastructure",
      desc: "Precast concrete systems for highway drainage, stormwater management, culverts, catch basins, headwalls, and other water-management infrastructure.",
      elements: [
        "Precast Box Culverts",
        "Stormwater Structures",
        "Precast Headwalls",
      ],
    },
    {
      icon: Factory,
      code: "INDUSTRIAL & HEAVY CIVIL",
      title: "Industrial & Heavy Civil Infrastructure",
      desc: "Engineered precast systems for manufacturing facilities, logistics centers, industrial sites, and other large-scale infrastructure applications.",
      elements: [
        "Precast Structural Frames",
        "Columns, Beams & Slabs",
        "Industrial Wall Systems",
      ],
    },
    {
      icon: Train,
      code: "RAIL & TRANSIT",
      title: "Rail & Transit Infrastructure",
      desc: "Precast concrete components for rail, transit, stations, guideways, platforms, and supporting infrastructure designed for demanding transportation environments.",
      elements: [
        "Rail & Transit Structures",
        "Precast Platforms",
        "Guideway Components",
      ],
    },
    {
      icon: Trophy,
      code: "UTILITIES & UNDERGROUND",
      title: "Utilities, Tunnels & Substructures",
      desc: "Precast systems for utility infrastructure, underground structures, tunnels, vaults, duct systems, and other critical civil infrastructure applications.",
      elements: [
        "Precast Tunnel Components",
        "Utility Vaults & Duct Systems",
        "Underground Structures",
      ],
    },
  ];

  return (
    <section
      id="section-precast-markets"
      className="w-full bg-white py-10 sm:py-14 border-t border-[#E2E8F0] select-none"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 mb-8 border-b border-[#E2E8F0]">
          <div>
            <div className="w-12 h-1 bg-[#0055FF] mb-3" />

            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#F0F6FE] border border-[#D2E4F9] text-[#0055FF] text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
              <span>04 | INFRASTRUCTURE SECTORS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              Infrastructure Sectors We Serve
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#0051c5] font-medium max-w-md leading-relaxed">
            Precast engineering, detailing, production support, and technology
            solutions for transportation, industrial, utility, and heavy civil
            infrastructure.
          </p>
        </div>

        {/* Market Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MARKETS.map((m, idx) => {
            const Icon = m.icon;

            return (
              <div
                key={idx}
                className="bg-[#F8FBFE] border border-[#E2E8F0] p-5 sm:p-6 hover:border-[#0055FF] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>

                  {/* Icon + Category */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-9 h-9 bg-white border border-[#D2E4F9] flex items-center justify-center text-[#0055FF] group-hover:bg-[#0055FF] group-hover:text-white transition-colors">
                      <Icon className="w-4.5 h-4.5" />
                    </div>

                    <span className="px-2 py-0.5 bg-white text-[#0055FF] text-[9px] font-mono font-bold uppercase border border-[#D2E4F9]">
                      {m.code}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-black text-[#0335ab] mb-1.5 group-hover:text-[#0055FF] transition-colors">
                    {m.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#0051c5] leading-relaxed mb-4">
                    {m.desc}
                  </p>

                  {/* Applications */}
                  <div className="space-y-1 pt-3 border-t border-[#E2E8F0]">
                    {m.elements.map((el, eIdx) => (
                      <div
                        key={eIdx}
                        className="flex items-center gap-2 text-xs font-semibold text-[#0335ab]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0055FF]" />
                        <span>{el}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 mt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono font-bold text-slate-400 group-hover:text-[#0055FF] transition-colors">
                  <span>EXPLORE SECTOR</span>

                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}