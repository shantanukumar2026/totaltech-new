"use client";

import React from "react";
import {
  FileCheck2,
  BookOpen,
  Award,
  CheckCircle2,
  CheckCheck,
  Building,
  Train,
  Milestone,
  Layers,
  ShieldCheck
} from "lucide-react";

interface StandardBadge {
  code: string;
  badge: string;
  name: string;
  tag: string;
  bullets: string[];
}

const GOVERNING_ORGS = [
  { name: "ACI", full: "American Concrete Institute" },
  { name: "PCI", full: "Precast/Prestressed Institute" },
  { name: "AASHTO", full: "State Hwy & Trans Officials" },
  { name: "ASTM", full: "Materials & Testing Society" },
  { name: "AREMA", full: "Railway Engineering Assoc." },
];

const STANDARDS_GRID: StandardBadge[] = [
  {
    code: "ACI / PCI CODE-319-25",
    badge: "PRIMARY PRECAST CODE",
    name: "Structural Precast Concrete Building Code",
    tag: "Precast & Prestressed",
    bullets: [
      "Standard for precast concrete structures",
      "Interface shear & connection design",
      "Member tolerance & inspection rules",
    ],
  },
  {
    code: "ACI CODE-318-25",
    badge: "GENERAL CONCRETE",
    name: "Building Code Requirements for Structural Concrete",
    tag: "Structural Concrete",
    bullets: [
      "Ultimate strength & load combinations",
      "Rebar anchorage & hook detailing",
      "Serviceability & crack control criteria",
    ],
  },
  {
    code: "PCI Design Handbook (9th Ed)",
    badge: "INDUSTRY STANDARD",
    name: "Precast & Prestressed Concrete Design Manual",
    tag: "Prestressed Systems",
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
    tag: "Transportation",
    bullets: [
      "AASHTO highway live load standards",
      "Precast I-girders, bulb-tees & deck panels",
      "Accelerated Bridge Construction (ABC)",
    ],
  },
  {
    code: "ASTM International",
    badge: "MATERIALS & QA/QC",
    name: "Concrete Specifications & Test Standards",
    tag: "Material Science",
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
    tag: "Railway Infrastructure",
    bullets: [
      "Cooper E-80 heavy rail live loading",
      "Precast railroad ties & track slabs",
      "Fatigue resistance under freight loads",
    ],
  },
];

const QUICK_STATS = [
  { label: "Sealed Calculations", desc: "PE/SE stamped submittals across U.S. states" },
  { label: "PCI Plant QC", desc: "Full alignment with PCI MNL-116 manual" },
  { label: "LOD 400 BIM", desc: "Clash-free 3D reinforcement & embeds" },
  { label: "ABC Ready", desc: "Engineered for Accelerated Bridge Construction" },
];

export default function StandardsFrameworkSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-18 border-t border-[#E2E8F0] select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Balanced Full-Width Header with Governing Authority Badges (No Blank Space) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 pb-10 border-b border-[#E2E8F0]">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <div className="w-12 h-1 bg-[#0055FF] mb-3" />
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#F0F6FE] border border-[#D2E4F9] text-[#0055FF] text-[10px] font-mono font-bold uppercase tracking-wider mb-2 w-fit">
              <BookOpen className="w-3.5 h-3.5 text-[#0055FF]" />
              <span>U.S. GOVERNING CODES & SPECIFICATIONS</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight leading-tight mb-3">
              Standards & Engineering Framework
            </h2>
            
            <p className="text-xs sm:text-sm text-[#0051c5] font-normal leading-relaxed">
              All structural calculations, prestressed designs, connection details, and 3D fabrication models strictly adhere to active North American building codes, DOT bridge manuals, and ASTM quality specifications.
            </p>
          </div>

          {/* Right Column (5 cols): Visual Authority Ecosystem Cards */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
              GOVERNING STANDARDS ECOSYSTEM
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2.5">
              {GOVERNING_ORGS.map((org, oIdx) => (
                <div
                  key={oIdx}
                  className="bg-[#F8FBFE] border border-[#D2E4F9] p-3 flex items-center gap-2.5 shadow-xs hover:border-[#0055FF] transition-colors"
                >
                  <div className="w-7 h-7 bg-[#0055FF] text-white font-mono font-black text-xs flex items-center justify-center shrink-0">
                    {org.name.slice(0, 3)}
                  </div>
                  <div>
                    <div className="text-xs font-black text-[#0335ab]">{org.name}</div>
                    <div className="text-[10px] text-slate-500 font-medium truncate">{org.full}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6 Standards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {STANDARDS_GRID.map((item, idx) => (
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

        {/* Visual Quality Bar */}
        <div className="bg-[#F8FBFE] border border-[#D2E4F9] p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {QUICK_STATS.map((stat, sIdx) => (
            <div key={sIdx} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0055FF]/10 flex items-center justify-center text-[#0055FF] shrink-0 mt-0.5 font-mono text-xs font-bold">
                0{sIdx + 1}
              </div>
              <div>
                <div className="text-xs font-black text-[#0335ab] uppercase tracking-wide">
                  {stat.label}
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
