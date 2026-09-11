"use client";

import React from "react";
import { ShieldCheck, Compass, Building2, Layers, CheckCircle2, ArrowRight } from "lucide-react";

export default function SectionWhoWeAre() {
  const CAPABILITIES = [
    {
      icon: Building2,
      title: "Precast Engineering",
      desc: "Structural member design, prestressed calculations, and load path analysis for highway bridges, viaducts, and civil structures.",
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
    <section id="section-who-we-are" className="w-full bg-white py-12 sm:py-16 border-t border-[#E2E8F0] select-none">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center pb-8 mb-8 border-b border-[#E2E8F0]">
          <div className="lg:col-span-7 flex flex-col justify-start">
            <div className="w-12 h-1 bg-[#0055FF] rounded-full mb-3" />
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0F6FE] border border-[#D2E4F9] text-[#0055FF] text-[11px] font-mono font-bold uppercase tracking-wider rounded-full mb-2 w-fit">
              <span className="live-pulse-dot" />
              <span>02 | WHO WE ARE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight mb-2">
              Precast Concrete Engineering & Digital Detailing
            </h2>
            <p className="text-xs sm:text-sm text-[#0051c5] font-medium leading-relaxed">
              We provide structural precast calculations, 3D BIM detailing, and digital production support for precast manufacturers, contractors, and engineers.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#F8FBFE] border border-[#D2E4F9] p-5 sm:p-6 rounded-2xl shadow-sm">
            <div className="text-[11px] font-mono font-bold text-[#0055FF] uppercase tracking-wider mb-3">
              CORE SERVICES &amp; EXPERTISE
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {HIGHLIGHTS.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#0335ab]">
                  <CheckCircle2 className="w-4 h-4 text-[#0055FF] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CAPABILITIES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8FBFE] border border-[#E2E8F0] p-6 sm:p-7 hover:border-[#0085f4] rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-500/8 card-hover-lift transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 bg-white border border-[#D2E4F9] rounded-xl flex items-center justify-center text-[#0055FF] mb-4 group-hover:bg-[#0055FF] group-hover:text-white transition-colors shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-[#0335ab] mb-2 group-hover:text-[#0085f4] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#0051c5] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-5 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono font-bold text-slate-400 group-hover:text-[#0055FF] transition-colors">
                  <span className="px-2.5 py-0.5 bg-white rounded-full border border-slate-200/80">DISCIPLINE 0{idx + 1}</span>
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
