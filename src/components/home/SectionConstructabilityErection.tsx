"use client";

import React from "react";
import { HardHat, CheckCircle2, ArrowRight, ShieldCheck, Scale, Anchor } from "lucide-react";

export default function SectionConstructabilityErection() {
  const ERECTION_SERVICES = [
    {
      icon: Scale,
      tag: "CRANE & RIGGING",
      title: "Crane Pick Studies & Rigging Plans",
      desc: "Lifting analysis evaluating piece weights, crane radius limits, dynamic sling angles, and boom clearances.",
      points: [
        "Sling angle tension & spreader beam calculations",
        "Tandem dual-crane pick sequences for long girders",
        "Ground bearing pressure checks under outriggers",
      ],
    },
    {
      icon: Anchor,
      tag: "LIFTING INSERTS",
      title: "Lifting Anchors & Handling Engineering",
      desc: "Capacity checks for lifting and handling inserts during plant stripping, yard transport, and upright site erection.",
      points: [
        "Demolding suction and impact load safety factors",
        "Edge distance and shear cone breakout checks",
        "Precast panel handling and tilt-up calculations",
      ],
    },
    {
      icon: ShieldCheck,
      tag: "JOBSITE STABILITY",
      title: "Temporary Wind Bracing & Erection Stability",
      desc: "Temporary shoring and wind bracing plans to secure precast columns, wall panels, and girders during erection.",
      points: [
        "Temporary wind load bracing calculations",
        "Adjustable pipe brace sizing and anchor design",
        "Erection sequence plans and stability checks",
      ],
    },
  ];

  return (
    <section id="section-constructability" className="w-full bg-white py-10 sm:py-14 border-t border-[#E2E8F0] select-none">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 mb-8 border-b border-[#E2E8F0]">
          <div>
            <div className="w-12 h-1 bg-[#0055FF] mb-3" />
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#F0F6FE] border border-[#D2E4F9] text-[#0055FF] text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
              <span>06 | CONSTRUCTABILITY & FIELD ERECTION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              Erection Engineering & Jobsite Constructability
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0051c5] font-medium max-w-md">
            Engineered lifting analysis, insert capacity checks, and temporary bracing to ensure safe handling from plant to jobsite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ERECTION_SERVICES.map((item, idx) => {
            const Icon = item.icon;
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
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-[#0335ab] mb-2 group-hover:text-[#0055FF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#0051c5] leading-relaxed mb-3.5">
                    {item.desc}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-[#E2E8F0]">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs font-semibold text-[#0335ab]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0055FF] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3.5 mt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono font-bold text-slate-400 group-hover:text-[#0055FF] transition-colors">
                  <span>ERECTION DISCIPLINE</span>
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
