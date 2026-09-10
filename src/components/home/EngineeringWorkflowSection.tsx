"use client";

import React from "react";
import { Building2, Compass, Factory, HardHat, CheckCircle2, ChevronRight } from "lucide-react";

export default function EngineeringWorkflowSection() {
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

  return (
    <section id="engineering-workflow" className="w-full bg-white py-16 sm:py-20 border-t border-[#E2E8F0] select-none">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 mb-12 border-b border-[#E2E8F0]">
          <div className="max-w-3xl">
            <div className="w-12 h-1 bg-[#0055FF] mb-3" />
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#F0F6FE] border border-[#D2E4F9] text-[#0055FF] text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0055FF]" />
              <span>04 — ENGINEERING WORKFLOW</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              Our 4-Step Engineering & Delivery Process
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0051c5] font-normal leading-relaxed max-w-md">
            A seamless lifecycle from engineering calculations to factory fabrication and on-site crane rigging with zero field collisions.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-white border border-[#E2E8F0] p-5 sm:p-6 hover:border-[#0055FF] shadow-xs hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
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

                  <h3 className="text-base font-black text-[#0335ab] mb-0.5 group-hover:text-[#0055FF] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-[10px] font-mono font-bold text-[#0055FF] uppercase tracking-wider mb-3">
                    {item.tag}
                  </div>

                  <p className="text-xs text-[#0051c5] font-normal leading-relaxed mb-4">
                    {item.desc}
                  </p>

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
    </section>
  );
}
