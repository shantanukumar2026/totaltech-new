"use client";

import React from "react";
import { CheckCheck } from "lucide-react";

export default function SectionPrecastStandards() {
  const STANDARDS = [
    {
      code: "ACI / PCI CODE-319-25",
      badge: "STRUCTURAL PRECAST",
      title: "Structural Precast Concrete Building Code",
      desc: "North American design criteria for precast members, connection load paths, and tolerance control.",
    },
    {
      code: "ACI CODE-318-25",
      badge: "STRUCTURAL CONCRETE",
      title: "Building Code Requirements for Concrete",
      desc: "Baseline strength, flexure, shear friction, and reinforcement development for structural concrete.",
    },
    {
      code: "PCI Design Handbook (9th Ed)",
      badge: "PRECAST REFERENCE",
      title: "Precast & Prestressed Design Manual",
      desc: "Methods for double tees, hollowcore, prestress losses, camber control, and connection hardware.",
    },
    {
      code: "AASHTO LRFD (10th Ed) & PCI BDM",
      badge: "DOT & BRIDGES",
      title: "Bridge Design Specifications & Manual",
      desc: "Criteria for pretensioned I-girders, bulb-tees, precast bridge decks, and ABC construction.",
    },
    {
      code: "ASTM International",
      badge: "MATERIALS & QA",
      title: "Concrete Materials & Quality Standards",
      desc: "Material criteria for compressive strength (C39), slump (C143), and prestressing strand (A416).",
    },
    {
      code: "AREMA MRE (2026)",
      badge: "RAIL & TRANSIT",
      title: "Manual for Railway Engineering",
      desc: "Design guidelines for prestressed concrete railroad ties, bridge superstructures, and train loading.",
    },
  ];

  return (
    <section id="section-standards-guidelines" className="w-full bg-white py-12 sm:py-16 border-t border-[#E2E8F0] select-none">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 mb-8 border-b border-[#E2E8F0]">
          <div>
            <div className="w-12 h-1 bg-[#0055FF] rounded-full mb-3" />
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0F6FE] border border-[#D2E4F9] text-[#0055FF] text-[11px] font-mono font-bold uppercase tracking-wider rounded-full mb-2">
              <span className="live-pulse-dot" />
              <span>08 | STANDARDS, CODES &amp; QUALITY GUIDELINES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              Governing Codes &amp; Design Standards
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0051c5] font-medium max-w-md leading-relaxed">
            Calculations, 3D models, and detailing practices aligned with leading North American design codes and DOT manuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STANDARDS.map((std, idx) => (
            <div
              key={idx}
              className="bg-[#F8FBFE] border border-[#E2E8F0] p-6 sm:p-7 hover:border-[#0085f4] rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-500/8 card-hover-lift transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="px-3 py-1 bg-gradient-to-r from-[#0052cc] to-[#0085f4] text-white text-[9.5px] font-mono font-bold uppercase tracking-wider rounded-full shadow-xs">
                    {std.badge}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-slate-400">
                    CODE 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-[#0335ab] group-hover:text-[#0085f4] transition-colors mb-1">
                  {std.code}
                </h3>
                <div className="text-xs font-bold text-[#0055FF] mb-2.5">
                  {std.title}
                </div>

                <p className="text-xs sm:text-[13px] text-[#0051c5] leading-relaxed mb-4">
                  {std.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono font-bold text-slate-400 group-hover:text-[#0055FF] transition-colors">
                <span className="px-2.5 py-0.5 bg-white rounded-full border border-slate-200/80">INDUSTRY BENCHMARK</span>
                <CheckCheck className="w-4 h-4 text-[#0055FF]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
