"use client";

import React from "react";
import {
  ShieldCheck,
  Compass,
  Building2,
  HardHat,
  CheckCircle2,
  ChevronRight,
  Factory
} from "lucide-react";

const STEPS = [
  {
    step: "01",
    tag: "CALCULATIONS",
    title: "Structural Design",
    desc: "PE/SE sealed calculation packages, prestressed strand sizing, and connection load mechanics.",
    icon: Building2,
    badge: "ACI 318 / 319",
    items: [
      "Member flexure, shear & torsion",
      "Strand loss & camber estimation",
      "Embedded plate & anchor design",
    ],
  },
  {
    step: "02",
    tag: "3D MODELING",
    title: "LOD 400 Detailing",
    desc: "3D fabrication models, bar bending schedules, and direct export to automated CNC rebar benders.",
    icon: Compass,
    badge: "Zero Clash",
    items: [
      "Exact rebar & strand clash check",
      "Automated bill of materials",
      "Complete shop & erection sets",
    ],
  },
  {
    step: "03",
    tag: "MANUFACTURING",
    title: "Plant Production",
    desc: "Formwork mold engineering, casting sequences, bed layouts, and dimensional tolerance management.",
    icon: Factory,
    badge: "PCI MNL-116",
    items: [
      "Mold & formwork fabrication plans",
      "Bed layout & turn-around plans",
      "Tolerances per ACI 117 & PCI",
    ],
  },
  {
    step: "04",
    tag: "CONSTRUCTABILITY",
    title: "Field Erection",
    desc: "Rigging and crane pick studies, lifting insert capacity checks, and temporary wind bracing analysis.",
    icon: HardHat,
    badge: "Site Safety",
    items: [
      "Engineered crane lift plans",
      "Lifting anchor safety factors",
      "Field stability & alignment plans",
    ],
  },
];

export default function WhoWeAreWhyUs() {
  return (
    <section className="w-full bg-[#F8FBFE] py-14 sm:py-18 border-t border-[#E2E8F0] select-none">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Header spanning 80% width with no stat boxes */}
        <div className="w-full lg:w-[80%] mb-12 pb-8 border-b border-[#E2E8F0]">
          <div className="w-12 h-1 bg-[#0055FF] mb-3" />
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-white border border-[#D2E4F9] text-[#0055FF] text-[10px] font-mono font-bold uppercase tracking-wider mb-3 shadow-xs w-fit">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0055FF]" />
            <span>PRECISION PRECAST ENGINEERING & TECHNOLOGY</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight leading-tight mb-4">
            Structural Precast & Prestressed Engineering for Critical Infrastructure
          </h2>
          
          <p className="text-xs sm:text-sm text-[#0051c5] font-normal leading-relaxed max-w-3xl">
            Total Tech delivers end-to-end engineering solutions for precast concrete manufacturers, DOT authorities, and general contractors across North America. From sealed structural calculations to LOD 400 3D fabrication models and plant production workflows, we engineer accuracy at every stage.
          </p>
        </div>

        {/* 4-Step Visual Process Pipeline */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#0055FF] tracking-wider uppercase block">
                ENGINEERING WORKFLOW
              </span>
              <h3 className="text-lg sm:text-xl font-black text-[#0335ab] tracking-tight">
                Our 4-Step End-to-End Precast Process
              </h3>
            </div>
            <span className="px-2.5 py-1 bg-white border border-[#D2E4F9] text-[10px] font-mono font-bold text-[#0055FF] uppercase w-fit">
              SEALED CALCULATIONS TO SITE ERECTION
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="relative bg-white border border-[#E2E8F0] p-5 sm:p-6 hover:border-[#0055FF] shadow-xs hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-extrabold text-[#0055FF] bg-[#F0F6FE] px-2 py-0.5 border border-[#D2E4F9]">
                        STEP {item.step}
                      </span>
                      <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 border border-slate-200">
                        {item.badge}
                      </span>
                    </div>

                    <div className="w-10 h-10 bg-[#F0F6FE] border border-[#D2E4F9] flex items-center justify-center text-[#0055FF] mb-3 group-hover:bg-[#0055FF] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h4 className="text-base font-black text-[#0335ab] mb-0.5 group-hover:text-[#0055FF] transition-colors">
                      {item.title}
                    </h4>
                    <div className="text-[10px] font-mono font-bold text-[#0055FF] uppercase tracking-wider mb-3">
                      {item.tag}
                    </div>

                    <p className="text-xs text-[#0051c5] font-normal leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-2 pt-3 border-t border-[#F0F4F9]">
                      {item.items.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0055FF] shrink-0 mt-0.5" />
                          <span className="text-[11px] text-[#0335ab] font-medium leading-tight">
                            {pt}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 bg-white border border-[#D2E4F9] rounded-full flex items-center justify-center text-[#0055FF] shadow-xs pointer-events-none">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
