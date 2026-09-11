"use client";

import React from "react";
import { Cpu, CheckCircle2, ArrowRight, Workflow, Eye } from "lucide-react";

export default function SectionBimDigitalModeling() {
  const BIM_FEATURES = [
    {
      icon: Cpu,
      title: "LOD 400 Fabrication Models",
      desc: "3D precast models detailing rebar, strand clearances, lifting anchors, and embedded plates for casting execution.",
      points: [
        "Revit, Tekla, StructureWorks, and Navisworks support",
        "Exact piece mark geometries with automated bill of materials",
        "Direct integration with plant casting schedules",
      ],
    },
    {
      icon: Eye,
      title: "Clash Detection & Trade Coordination",
      desc: "Virtual assembly and clash checking between precast elements, architectural finishes, and MEP conduits.",
      points: [
        "Prevents field core drilling and rebar collisions",
        "Multi-trade model reviews before pouring concrete",
        "Coordinated blockouts, sleeves, and embed plates",
      ],
    },
    {
      icon: Workflow,
      title: "Automated Bar Schedules & CNC Data",
      desc: "Direct export of bar bending schedules (BBS) to automated CNC mesh welders and robotic rebar benders.",
      points: [
        "BVBS / Unitechnik industrial standard data export",
        "Eliminates manual re-entry errors in plant bending yards",
        "Optimized piece marks and bundle sequencing for delivery",
      ],
    },
  ];

  return (
    <section id="section-bim-modeling" className="w-full bg-[#F8FBFE] py-12 sm:py-16 border-t border-[#E2E8F0] select-none">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 mb-8 border-b border-[#E2E8F0]">
          <div>
            <div className="w-12 h-1 bg-[#0055FF] rounded-full mb-3" />
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#D2E4F9] text-[#0055FF] text-[11px] font-mono font-bold uppercase tracking-wider rounded-full mb-2 shadow-xs">
              <span className="live-pulse-dot" />
              <span>05 | BIM & 3D PRECAST MODELING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              Model-Based 3D Detailing & Coordination
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0051c5] font-medium max-w-md leading-relaxed">
            Building every precast member digitally first to ensure zero fabrication clashes and rapid jobsite assembly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BIM_FEATURES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] p-6 sm:p-7 hover:border-[#0085f4] rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-500/8 card-hover-lift transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 bg-[#F0F6FE] border border-[#D2E4F9] rounded-xl flex items-center justify-center text-[#0055FF] mb-4 group-hover:bg-[#0055FF] group-hover:text-white transition-colors shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-[#0335ab] mb-2 group-hover:text-[#0085f4] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#0051c5] leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="space-y-2 pt-3.5 border-t border-[#F0F4F9]">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs font-semibold text-[#0335ab]">
                        <CheckCircle2 className="w-4 h-4 text-[#0055FF] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-[#F0F4F9] flex items-center justify-between text-[11px] font-mono font-bold text-slate-400 group-hover:text-[#0055FF] transition-colors">
                  <span className="px-2.5 py-0.5 bg-blue-50/70 rounded-full border border-blue-200/50 text-[#0055FF]">BIM SPEC 0{idx + 1}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
