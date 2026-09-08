"use client";

import React from "react";
import { ShieldCheck, CheckCircle2, Award, Building2, HardHat, Compass } from "lucide-react";

export default function WhoWeAreSection() {
  const PILLARS = [
    {
      icon: ShieldCheck,
      title: "Licensed U.S. Engineering Authority",
      desc: "Licensed PE/SE structural engineers with deep mastery of ACI/PCI CODE-319-25, ACI 318, and AASHTO LRFD specifications.",
    },
    {
      icon: Compass,
      title: "End-to-End Precast Lifecycle",
      desc: "Complete continuum from initial member sizing and connection design to plant bed layouts and jobsite crane rigging.",
    },
    {
      icon: Building2,
      title: "LOD 400 BIM & Zero Clash Guarantee",
      desc: "High-fidelity 3D modeling of every rebar, prestressed strand, weld plate, and insert to eliminate costly field rework.",
    },
  ];

  const STATS = [
    { label: "CODE COMPLIANCE", value: "ACI / PCI / AASHTO", sub: "100% Sealed Submittals" },
    { label: "MODEL ACCURACY", value: "LOD 400 BIM", sub: "Clash-Free Detailing" },
    { label: "PLANT QUALITY", value: "PCI MNL-116", sub: "Plant QA/QC Aligned" },
    { label: "PROJECT SPEED", value: "40% FASTER", sub: "Accelerated ABC Delivery" },
  ];

  return (
    <section id="who-we-are" className="w-full bg-white py-16 sm:py-20 border-t border-[#E2E8F0] select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 mb-12 border-b border-[#E2E8F0]">
          <div className="max-w-3xl">
            <div className="w-12 h-1 bg-[#0055FF] mb-3" />
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#F0F6FE] border border-[#D2E4F9] text-[#0055FF] text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0055FF]" />
              <span>02 — WHO WE ARE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              Precast Engineering & Infrastructure Technology
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0051c5] font-normal leading-relaxed max-w-md">
            Total Tech is a dedicated precast structural engineering and technology firm partnering with precast producers, DOTs, and general contractors across North America.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PILLARS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8FBFE] border border-[#E2E8F0] p-6 sm:p-7 hover:border-[#0055FF] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 bg-white border border-[#D2E4F9] flex items-center justify-center text-[#0055FF] mb-5 group-hover:bg-[#0055FF] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-[#0335ab] mb-2 group-hover:text-[#0055FF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#0051c5] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono font-semibold text-[#0055FF]">
                  <span>CORE PILLAR 0{idx + 1}</span>
                  <span className="text-slate-400 group-hover:text-[#0055FF] transition-colors">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stat Highlights Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 bg-white border border-[#D2E4F9] shadow-xs">
          {STATS.map((st, i) => (
            <div key={i} className="flex flex-col justify-center">
              <div className="text-[10px] font-mono font-bold text-[#0055FF] uppercase tracking-wider">
                {st.label}
              </div>
              <div className="text-base sm:text-xl font-black text-[#0335ab] mt-0.5">
                {st.value}
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                {st.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
