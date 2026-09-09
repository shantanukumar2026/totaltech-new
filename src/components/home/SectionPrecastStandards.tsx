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
    <section id="section-standards-guidelines" className="w-full bg-white py-10 sm:py-14 border-t border-[#E2E8F0] select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 mb-8 border-b border-[#E2E8F0]">
          <div>
            <div className="w-12 h-1 bg-[#0055FF] mb-3" />
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#F0F6FE] border border-[#D2E4F9] text-[#0055FF] text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
              <span>08 | STANDARDS, CODES & QUALITY GUIDELINES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              Governing Codes & Design Standards
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0051c5] font-medium max-w-md">
            Calculations, 3D models, and detailing practices aligned with leading North American design codes and DOT manuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {STANDARDS.map((std, idx) => (
            <div
              key={idx}
              className="bg-[#F8FBFE] border border-[#E2E8F0] p-5 sm:p-6 hover:border-[#0055FF] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-[#0055FF] text-white text-[9px] font-mono font-bold uppercase tracking-wider">
                    {std.badge}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-400">
                    CODE 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-black text-[#0335ab] group-hover:text-[#0055FF] transition-colors mb-1">
                  {std.code}
                </h3>
                <div className="text-xs font-bold text-[#0055FF] mb-2">
                  {std.title}
                </div>

                <p className="text-xs text-[#0051c5] leading-relaxed mb-4">
                  {std.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-[10px] font-mono font-bold text-slate-400 group-hover:text-[#0055FF] transition-colors">
                <span>INDUSTRY BENCHMARK</span>
                <CheckCheck className="w-3.5 h-3.5 text-[#0055FF]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
