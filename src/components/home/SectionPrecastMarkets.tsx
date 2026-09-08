"use client";

import React from "react";
import { Building2, Train, Milestone, Factory, Shield, Trophy, ArrowRight } from "lucide-react";

export default function SectionPrecastMarkets() {
  const MARKETS = [
    {
      icon: Milestone,
      code: "HIGHWAY & DOT BRIDGES",
      title: "Highway Bridges & Superstructures",
      desc: "AASHTO I-girders, prestressed bulb-tees, full-depth modular deck panels, and ABC pier caps for state DOT projects.",
      elements: ["AASHTO Bridge Girders", "Full-Depth Deck Panels", "Precast ABC Pier Caps"],
    },
    {
      icon: Building2,
      code: "ELEVATED VIADUCTS",
      title: "Elevated Viaducts & Flyovers",
      desc: "Precast segmental box girders, post-tensioned flyover spans, and grade-separated crossing guideways.",
      elements: ["Post-Tensioned Box Girders", "Span-by-Span Viaducts", "Cantilever Segmental Spans"],
    },
    {
      icon: Shield,
      code: "DRAINAGE & STORMWATER",
      title: "Precast Box Culverts & Drainage",
      desc: "Heavy-duty ASTM C1577 box culverts, stormwater detention systems, catch basins, and headwalls for highway drainage.",
      elements: ["ASTM C1577 Box Culverts", "Stormwater Detention", "Precast Headwalls"],
    },
    {
      icon: Factory,
      code: "RETAINING & MSE SYSTEMS",
      title: "MSE Retaining & Acoustic Walls",
      desc: "Mechanically Stabilized Earth (MSE) wall panels, precast sound barriers, and modular bridge abutment retaining systems.",
      elements: ["MSE Wall Panels", "Highway Sound Barriers", "Modular Bridge Abutments"],
    },
    {
      icon: Train,
      code: "MARINE & HEAVY CIVIL",
      title: "Marine & Heavy Civil Structures",
      desc: "Prestressed marine concrete piles, seawall panels, sheet piling, and intake structure precast modules.",
      elements: ["Prestressed Driven Piles", "Precast Seawall Panels", "Marine Deck Slabs"],
    },
    {
      icon: Trophy,
      code: "UTILITY & TUNNEL LINERS",
      title: "Utility Tunnels & Substructures",
      desc: "Segmental precast tunnel liners, high-voltage utility duct banks, and heavy-duty precast vaults.",
      elements: ["Precast Tunnel Liners", "Utility Duct Vaults", "Heavy Substation Vaults"],
    },
  ];

  return (
    <section id="section-precast-markets" className="w-full bg-white py-14 sm:py-18 border-t border-[#E2E8F0] select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-8 mb-10 border-b border-[#E2E8F0]">
          <div>
            <div className="w-12 h-1 bg-[#0055FF] mb-3" />
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#F0F6FE] border border-[#D2E4F9] text-[#0055FF] text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
              <span>04 | PRECAST INFRASTRUCTURE & CIVIL SECTORS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              Civil Infrastructure Sectors We Engineer
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0051c5] font-medium max-w-md">
            Specialized precast engineering, 3D detailing, and connection design across highways, bridges, drainage, and heavy civil infrastructure.
          </p>
        </div>

        {/* 6 Markets Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MARKETS.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8FBFE] border border-[#E2E8F0] p-5 sm:p-6 hover:border-[#0055FF] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-9 h-9 bg-white border border-[#D2E4F9] flex items-center justify-center text-[#0055FF] group-hover:bg-[#0055FF] group-hover:text-white transition-colors">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <span className="px-2 py-0.5 bg-white text-[#0055FF] text-[9px] font-mono font-bold uppercase border border-[#D2E4F9]">
                      {m.code}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-[#0335ab] mb-1.5 group-hover:text-[#0055FF] transition-colors">
                    {m.title}
                  </h3>

                  <p className="text-xs text-[#0051c5] leading-relaxed mb-4">
                    {m.desc}
                  </p>

                  <div className="space-y-1 pt-3 border-t border-[#E2E8F0]">
                    {m.elements.map((el, eIdx) => (
                      <div key={eIdx} className="flex items-center gap-2 text-xs font-semibold text-[#0335ab]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0055FF]" />
                        <span>{el}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono font-bold text-slate-400 group-hover:text-[#0055FF] transition-colors">
                  <span>APPLICATION</span>
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
