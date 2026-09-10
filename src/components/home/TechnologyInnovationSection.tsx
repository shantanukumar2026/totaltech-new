"use client";

import React from "react";
import { Cpu, Database, Layout, ShieldCheck, ArrowRight } from "lucide-react";

export default function TechnologyInnovationSection() {
  const TECH_CARDS = [
    {
      icon: Cpu,
      tag: "DIGITAL TWIN & BIM",
      title: "LOD 400 3D Modeling & Coordination",
      desc: "High-fidelity 3D modeling of every concrete element, rebar bend, strand profile, weld plate, and embedded lifting anchor with automated collision detection.",
      bullets: [
        "100% clash-detected models across MEP & structural trades",
        "Automated piece mark generation & bar bending schedules",
        "Direct export to automated rebar fabrication equipment",
      ],
    },
    {
      icon: Database,
      tag: "SECURE IT FABRIC",
      title: "Enterprise IT & Project Data Vaulting",
      desc: "Robust cloud infrastructure, zero-trust cybersecurity, and high-availability server grids protecting sensitive engineering IP and submittal packages.",
      bullets: [
        "99.999% uptime datacenter fabrics for distributed teams",
        "Encrypted project repositories & multi-region backups",
        "Strict compliance with industrial cybersecurity frameworks",
      ],
    },
    {
      icon: Layout,
      tag: "WORKFLOW SYSTEMS",
      title: "UI/UX & Precast Operational Systems",
      desc: "Intuitive digital interfaces, data dashboards, and model viewers customized for precast production managers, shop detailers, and field superintendents.",
      bullets: [
        "Information architecture designed for precast operations",
        "Real-time piece tracking and bed schedule dashboards",
        "Mobile-optimized field erection drawing viewers",
      ],
    },
  ];

  return (
    <section id="technology-innovation" className="w-full bg-white py-16 sm:py-20 border-t border-[#E2E8F0] select-none">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 mb-12 border-b border-[#E2E8F0]">
          <div className="max-w-3xl">
            <div className="w-12 h-1 bg-[#0055FF] mb-3" />
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#F0F6FE] border border-[#D2E4F9] text-[#0055FF] text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0055FF]" />
              <span>06 — TECHNOLOGY & INNOVATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              BIM, Digital Modeling & Technology Systems
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0051c5] font-normal leading-relaxed max-w-md">
            Leveraging modern digital engineering, secure enterprise IT, and purpose-built software interfaces to power modern precast manufacturing.
          </p>
        </div>

        {/* 3 Tech Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TECH_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8FBFE] border border-[#E2E8F0] p-6 sm:p-7 hover:border-[#0055FF] shadow-xs hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-10 h-10 bg-white border border-[#D2E4F9] flex items-center justify-center text-[#0055FF] group-hover:bg-[#0055FF] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 bg-white text-[#0055FF] text-[10px] font-mono font-bold uppercase border border-[#D2E4F9]">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-[#0335ab] mb-2 group-hover:text-[#0055FF] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs text-[#0051c5] leading-relaxed mb-6 font-normal">
                    {card.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-[#E2E8F0]">
                    {card.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs font-semibold text-[#0335ab]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0055FF] mt-1.5 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-6 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono font-bold text-slate-400 group-hover:text-[#0055FF] transition-colors">
                  <span>TECH 0{idx + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
