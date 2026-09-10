"use client";

import React from "react";
import { Train, Building2, Milestone, Factory, Shield, ArrowRight } from "lucide-react";

export default function InfrastructureMarketsSection() {
  const MARKETS = [
    {
      icon: Milestone,
      code: "AASHTO / DOT",
      title: "Bridges & Transportation",
      desc: "Precast pretensioned bulb-tee girders, precast deck panels, segmental box beams, and substructure pier caps for Accelerated Bridge Construction (ABC).",
      tags: ["Highway Overpasses", "Spliced Girders", "DOT Bridge Decks"],
    },
    {
      icon: Train,
      code: "AREMA SPEC",
      title: "Rail & Transit Infrastructure",
      desc: "Heavy rail concrete ties, transit viaducts, track slabs, and grade-separated crossing superstructures engineered for Cooper E-80 live loading.",
      tags: ["High-Speed Rail", "Transit Viaducts", "Track Slabs"],
    },
    {
      icon: Building2,
      code: "PCI 9TH / IBC",
      title: "Commercial & Parking Structures",
      desc: "Multi-level precast parking garages, long-span double tee decks, shear walls, columns, spandrels, and high-efficiency precast frame systems.",
      tags: ["Parking Garages", "Double-Tee Floors", "Architectural Spandrels"],
    },
    {
      icon: Factory,
      code: "ACI 318 / 319",
      title: "Industrial Logistics Facilities",
      desc: "Thermal-efficient insulated precast sandwich panels, high-load foundation piles, and fast-track structural framing for e-commerce hubs.",
      tags: ["Sandwich Panels", "Cold Storage", "Heavy Industrial"],
    },
    {
      icon: Shield,
      code: "ASTM / AWWA",
      title: "Underground & Utilities",
      desc: "High-capacity precast box culverts, utility vaults, stormwater retention systems, and precast tunnel liner segments.",
      tags: ["Box Culverts", "Utility Vaults", "Tunnel Segments"],
    },
  ];

  return (
    <section id="infrastructure-markets" className="w-full bg-[#F8FBFE] py-16 sm:py-20 border-t border-[#E2E8F0] select-none">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 mb-12 border-b border-[#E2E8F0]">
          <div className="max-w-3xl">
            <div className="w-12 h-1 bg-[#0055FF] mb-3" />
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-white border border-[#D2E4F9] text-[#0055FF] text-[10px] font-mono font-bold uppercase tracking-wider mb-2 shadow-xs">
              <span className="live-pulse-dot" />
              <span>05 — INFRASTRUCTURE MARKETS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              Infrastructure Sectors We Engineer
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0051c5] font-normal leading-relaxed max-w-md">
            Delivering robust structural calculations, BIM modeling, and constructability solutions across heavy civil, transportation, and commercial precast.
          </p>
        </div>

        {/* Markets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MARKETS.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] p-6 sm:p-7 hover:border-[#0055FF] shadow-xs card-hover-lift flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-10 h-10 bg-[#F0F6FE] border border-[#D2E4F9] flex items-center justify-center text-[#0055FF] group-hover:bg-[#0055FF] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 bg-[#F0F6FE] text-[#0055FF] text-[10px] font-mono font-bold uppercase border border-[#D2E4F9]">
                      {m.code}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-[#0335ab] mb-2 group-hover:text-[#0055FF] transition-colors">
                    {m.title}
                  </h3>

                  <p className="text-xs text-[#0051c5] leading-relaxed mb-5 font-normal">
                    {m.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#F0F4F9]">
                    {m.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-mono font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-[#F0F4F9] flex items-center justify-between text-[11px] font-mono font-bold text-slate-400 group-hover:text-[#0055FF] transition-colors">
                  <span>MARKET 0{idx + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
