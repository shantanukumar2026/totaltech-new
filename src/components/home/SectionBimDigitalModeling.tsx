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
    <section id="section-bim-modeling" className="w-full bg-[#F8FBFE] py-10 sm:py-14 border-t border-[#E2E8F0] select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 mb-8 border-b border-[#E2E8F0]">
          <div>
            <div className="w-12 h-1 bg-[#0055FF] mb-3" />
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-white border border-[#D2E4F9] text-[#0055FF] text-[10px] font-mono font-bold uppercase tracking-wider mb-2 shadow-xs">
              <span>05 | BIM & 3D PRECAST MODELING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              Model-Based 3D Detailing & Coordination
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0051c5] font-medium max-w-md">
            Building every precast member digitally first to ensure zero fabrication clashes and rapid jobsite assembly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {BIM_FEATURES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] p-5 sm:p-6 hover:border-[#0055FF] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-9 h-9 bg-[#F0F6FE] border border-[#D2E4F9] flex items-center justify-center text-[#0055FF] mb-3.5 group-hover:bg-[#0055FF] group-hover:text-white transition-colors">
                    <Icon className="w-4.5 h-4.5" />
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-[#0335ab] mb-2 group-hover:text-[#0055FF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#0051c5] leading-relaxed mb-3.5">
                    {item.desc}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-[#F0F4F9]">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs font-semibold text-[#0335ab]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0055FF] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3.5 mt-4 border-t border-[#F0F4F9] flex items-center justify-between text-[11px] font-mono font-bold text-slate-400 group-hover:text-[#0055FF] transition-colors">
                  <span>DIGITAL CAPABILITY</span>
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
