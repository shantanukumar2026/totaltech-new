"use client";

import React from "react";
import { BookOpen, CheckCircle2, CheckCheck, ShieldCheck } from "lucide-react";

export default function QualityStandardsSafetySection() {
  const STANDARDS = [
    {
      code: "ACI / PCI CODE-319-25",
      badge: "PRIMARY PRECAST CODE",
      name: "Structural Precast Concrete Building Code",
      bullets: [
        "Dedicated structural precast design criteria",
        "Interface shear transfer & bearing mechanics",
        "Fabrication & erection inspection rules",
      ],
    },
    {
      code: "ACI CODE-318-25",
      badge: "GENERAL CONCRETE",
      name: "Building Code Requirements for Structural Concrete",
      bullets: [
        "Ultimate strength design & load combinations",
        "Rebar anchorage, development & hook detailing",
        "Serviceability & crack control criteria",
      ],
    },
    {
      code: "PCI Design Handbook (9th Ed)",
      badge: "INDUSTRY STANDARD",
      name: "Precast & Prestressed Concrete Design Manual",
      bullets: [
        "Prestressed beam, girder & slab design",
        "Camber, deflection & strand loss models",
        "Dapped-ends, corbels & bearing pads",
      ],
    },
    {
      code: "AASHTO LRFD (10th Ed) & PCI BDM",
      badge: "DOT & BRIDGES",
      name: "Bridge Design Specifications & Manual",
      bullets: [
        "AASHTO highway live load standards (HL-93)",
        "Precast I-girders, bulb-tees & deck panels",
        "Accelerated Bridge Construction (ABC)",
      ],
    },
    {
      code: "ASTM International",
      badge: "MATERIALS & QA/QC",
      name: "Concrete Specifications & Test Standards",
      bullets: [
        "ASTM C39 (Strength) & C143 (Slump)",
        "ASTM C1611 (Self-Consolidating Concrete)",
        "ASTM A416 Prestressing strand specs",
      ],
    },
    {
      code: "AREMA MRE (2026)",
      badge: "RAIL & TRANSIT",
      name: "Manual for Railway Engineering: Concrete Structures",
      bullets: [
        "Cooper E-80 heavy rail live loading",
        "Precast railroad ties & track slabs",
        "Fatigue resistance under cyclic freight loads",
      ],
    },
  ];

  const ASSURANCE = [
    { title: "PE/SE Sealed Calculations", desc: "Licensed professional engineering stamps across U.S. states." },
    { title: "PCI MNL-116 QA/QC", desc: "Rigorous alignment with PCI plant quality control standards." },
    { title: "LOD 400 BIM Precision", desc: "Zero-clash 3D reinforcement, embeds, and lifting points." },
    { title: "Jobsite Rigging Safety", desc: "Engineered crane pick studies, dynamic factors & wind bracing." },
  ];

  return (
    <section id="quality-standards-safety" className="w-full bg-[#F8FBFE] py-16 sm:py-20 border-t border-[#E2E8F0] select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 mb-12 border-b border-[#E2E8F0]">
          <div className="max-w-3xl">
            <div className="w-12 h-1 bg-[#0055FF] mb-3" />
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-white border border-[#D2E4F9] text-[#0055FF] text-[10px] font-mono font-bold uppercase tracking-wider mb-2 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0055FF]" />
              <span>09 — QUALITY + STANDARDS + SAFETY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              Quality Assurance, U.S. Standards & Jobsite Safety
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0051c5] font-normal leading-relaxed max-w-md">
            All structural models, calculations, and fabrication drawings strictly adhere to active North American building codes and safety standards.
          </p>
        </div>

        {/* 6 Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {STANDARDS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E2E8F0] p-5 sm:p-6 hover:border-[#0055FF] shadow-xs hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-[#0055FF] text-white text-[9px] font-mono font-bold uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-400">
                    CODE 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-black text-[#0335ab] group-hover:text-[#0055FF] transition-colors mb-1">
                  {item.code}
                </h3>
                <div className="text-[11px] font-bold text-[#0055FF] uppercase tracking-wide mb-4">
                  {item.name}
                </div>

                <div className="space-y-2 pt-3 border-t border-[#F0F4F9]">
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0055FF] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#0335ab] font-medium leading-tight">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-[#F0F4F9] flex items-center justify-between text-[10px] font-mono font-bold text-slate-400 group-hover:text-[#0055FF] transition-colors">
                <span>ACTIVE U.S. STANDARD</span>
                <CheckCheck className="w-4 h-4 text-[#0055FF]" />
              </div>
            </div>
          ))}
        </div>

        {/* Quality & Safety Bar */}
        <div className="bg-white border border-[#D2E4F9] p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 shadow-xs">
          {ASSURANCE.map((stat, sIdx) => (
            <div key={sIdx} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0055FF]/10 flex items-center justify-center text-[#0055FF] shrink-0 mt-0.5 font-mono text-xs font-bold">
                0{sIdx + 1}
              </div>
              <div>
                <div className="text-xs font-black text-[#0335ab] uppercase tracking-wide">
                  {stat.title}
                </div>
                <div className="text-[11px] text-[#0051c5] font-medium leading-tight mt-0.5">
                  {stat.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
