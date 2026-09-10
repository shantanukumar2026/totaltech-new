"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Layers, Workflow, Building, Anchor } from "lucide-react";

export default function PrecastEngineeringSection() {
  const DISCIPLINES = [
    {
      icon: Building,
      badge: "ACI / PCI 319-25",
      title: "Structural Precast Engineering",
      desc: "Complete structural analysis, load path verification, ultimate strength design, and serviceability evaluations under extreme wind, seismic, and live load criteria.",
      deliverables: ["PE/SE sealed calculation packages", "Shear wall & diaphragm design", "Lateral force-resisting systems"],
    },
    {
      icon: Layers,
      badge: "PCI 9th Ed / AASHTO",
      title: "Prestressed Concrete Systems",
      desc: "Pretensioned strand design, initial/final prestress losses, camber and long-term deflection control, shear transfer, and debonding strand layouts.",
      deliverables: ["Prestressed bridge girders & piles", "Double tees & hollowcore slabs", "Transfer length & burst stress analysis"],
    },
    {
      icon: Anchor,
      badge: "Interface Detailing",
      title: "Connection & Embedded Systems",
      desc: "Engineered beam-to-column joints, embedded weld plates, heading studs, grouted splice sleeves, dapped-end bearing assemblies, and seismic connections.",
      deliverables: ["Moment-resisting joint details", "Elastomeric bearing pad design", "Corbel & post-tensioned connections"],
    },
    {
      icon: Workflow,
      badge: "LOD 400 BIM",
      title: "Reinforcement & Shop Detailing",
      desc: "Fabrication-ready shop drawings, automated bar bending schedules (BBS), lifting anchor locations, embed placement, and erection layout drawings.",
      deliverables: ["3D rebar & strand clash check", "Direct CNC bending machine export", "Piece mark erection sequences"],
    },
  ];

  return (
    <section id="precast-engineering" className="w-full bg-[#F8FBFE] py-16 sm:py-20 border-t border-[#E2E8F0] select-none">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 mb-12 border-b border-[#E2E8F0]">
          <div className="max-w-3xl">
            <div className="w-12 h-1 bg-[#0055FF] mb-3" />
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-white border border-[#D2E4F9] text-[#0055FF] text-[10px] font-mono font-bold uppercase tracking-wider mb-2 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0055FF]" />
              <span>03 — PRECAST ENGINEERING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              Precast & Prestressed Structural Disciplines
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0051c5] font-normal leading-relaxed max-w-md">
            From heavy DOT bridges to commercial structures, we engineer every precast element to exacting North American tolerances and performance codes.
          </p>
        </div>

        {/* 2x2 Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {DISCIPLINES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] p-6 sm:p-8 hover:border-[#0055FF] shadow-xs hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-10 h-10 bg-[#F0F6FE] border border-[#D2E4F9] flex items-center justify-center text-[#0055FF] group-hover:bg-[#0055FF] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 bg-[#F0F6FE] text-[#0055FF] text-[10px] font-mono font-bold uppercase border border-[#D2E4F9]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-[#0335ab] mb-2.5 group-hover:text-[#0055FF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#0051c5] leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-[#F0F4F9]">
                    {item.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs font-semibold text-[#0335ab]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0055FF]" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-6 border-t border-[#F0F4F9] flex items-center justify-between text-[11px] font-mono font-bold text-slate-400 group-hover:text-[#0055FF] transition-colors">
                  <span>DISCIPLINE 0{idx + 1}</span>
                  <span className="inline-flex items-center gap-1 text-[#0055FF]">
                    <span>Engineering Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
