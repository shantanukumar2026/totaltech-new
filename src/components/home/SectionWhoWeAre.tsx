"use client";

import React from "react";
import { ShieldCheck, Compass, Building2, Layers, CheckCircle2, ArrowRight } from "lucide-react";

export default function SectionWhoWeAre() {
  const CAPABILITIES = [
    {
      icon: Building2,
      title: "Precast Engineering",
      desc: "Structural member design, prestressed calculations, and load path analysis for precast buildings and bridges.",
    },
    {
      icon: Compass,
      title: "3D BIM Detailing",
      desc: "LOD 400 fabrication models, bar bending schedules, embed placement, and shop drawing packages.",
    },
    {
      icon: Layers,
      title: "Plant & Erection Support",
      desc: "Formwork mold engineering, bed layout optimization, lifting analysis, and jobsite rigging plans.",
    },
  ];

  const HIGHLIGHTS = [
    "Precast & Prestressed Engineering",
    "Model-Based 3D Shop Drawings",
    "Plant Production & Mold Detailing",
    "Adherence to ACI & PCI Guidelines",
  ];

  return (
    <section id="section-who-we-are" className="w-full bg-white py-14 sm:py-18 border-t border-[#E2E8F0] select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center pb-10 mb-10 border-b border-[#E2E8F0]">
          <div className="lg:col-span-7 flex flex-col justify-start">
            <div className="w-12 h-1 bg-[#0055FF] mb-3" />
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#F0F6FE] border border-[#D2E4F9] text-[#0055FF] text-[10px] font-mono font-bold uppercase tracking-wider mb-2 w-fit">
              <span>02 | WHO WE ARE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight mb-2">
              Precast Concrete Engineering & Digital Detailing
            </h2>
            <p className="text-xs sm:text-sm text-[#0051c5] font-medium leading-relaxed">
              We provide structural precast calculations, 3D BIM detailing, and digital production support for precast manufacturers, contractors, and engineers.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#F8FBFE] border border-[#D2E4F9] p-5 sm:p-6 shadow-xs">
            <div className="text-[10px] font-mono font-bold text-[#0055FF] uppercase tracking-wider mb-2.5">
              CORE SERVICES
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {HIGHLIGHTS.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs font-semibold text-[#0335ab]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0055FF] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CAPABILITIES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8FBFE] border border-[#E2E8F0] p-5 sm:p-6 hover:border-[#0055FF] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 bg-white border border-[#D2E4F9] flex items-center justify-center text-[#0055FF] mb-4 group-hover:bg-[#0055FF] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-black text-[#0335ab] mb-1.5 group-hover:text-[#0055FF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#0051c5] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono font-bold text-slate-400 group-hover:text-[#0055FF] transition-colors">
                  <span>DISCIPLINE</span>
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
