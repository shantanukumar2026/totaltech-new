"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Building2, Compass } from "lucide-react";

export default function OurMarkets() {
  const PILLARS = [
    {
      icon: ShieldCheck,
      image: "/infrastructure/bridge_overpass.jpg",
      title: "Bridges, Highways & Transportation Structures",
      desc: "Precast and prestressed concrete systems used for highway bridges, overpasses, bridge decks, barriers, and other transportation structures. Solutions can be engineered for project-specific loads, spans, and site conditions.",
    },
    {
      icon: Compass,
      image: "/infrastructure/precast_highway_viaduct.jpg",
      title: "Elevated Viaducts, Flyovers & Substructures",
      desc: "Precast and prestressed components used for elevated highways, flyovers, viaducts, pier caps, and abutments. Systems can be engineered for multi-span structures, transportation loads, and field erection requirements.",
    },
    {
      icon: Building2,
      image: "/istockphoto-2212769492-2048x2048.jpg",
      title: "Heavy Civil & Industrial Infrastructure",
      desc: "Precast concrete systems used for logistics facilities, stormwater structures, utility infrastructure, port facilities, and other heavy civil applications. Standard and project-specific solutions can be developed to meet site and structural requirements.",
    },
  ];

  const STATS = [
    {
      label: "CODE COMPLIANCE",
      value: "ACI / PCI / AASHTO",
      sub: "Applicable U.S. Standards",
    },
    {
      label: "MODEL ACCURACY",
      value: "LOD 400 BIM",
      sub: "Detailed Project Models",
    },
    {
      label: "PLANT QUALITY",
      value: "PCI MNL-116",
      sub: "Quality Control Reference",
    },
    {
      label: "PROJECT DELIVERY",
      value: "INFRASTRUCTURE",
      sub: "Transportation-Focused",
    },
  ];

  return (
    <section
      id="who-we-are"
      className="w-full bg-white py-10 sm:py-14 border-t border-[#E2E8F0] select-none"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 mb-8 border-b border-[#E2E8F0]">
          <div className="max-w-3xl">
            <div className="w-12 h-1 bg-[#0055FF] mb-3" />

            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#F0F6FE] border border-[#D2E4F9] text-[#0055FF] text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
              <span className="live-pulse-dot" />
              <span>01 — OUR MARKETS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              Infrastructure Sectors We Serve
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#0051c5] font-normal leading-relaxed max-w-md">
            Total Tech provides precast engineering and technology solutions
            for transportation, heavy civil, industrial, and other
            infrastructure projects across North America.
          </p>
        </div>

        {/* Market Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {PILLARS.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="bg-[#F8FBFE] border border-[#E2E8F0] hover:border-[#0055FF] shadow-xs card-hover-lift flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {/* Image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F0F6FE] border-b border-[#E2E8F0]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute top-3 left-3 z-10 w-9 h-9 bg-white/95 backdrop-blur-xs border border-[#D2E4F9] flex items-center justify-center text-[#0055FF] shadow-xs group-hover:bg-[#0055FF] group-hover:text-white transition-colors">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-base sm:text-lg font-black text-[#0335ab] mb-2 group-hover:text-[#0055FF] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#0051c5] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                  <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono font-semibold text-[#0055FF]">
                    <span>MARKET 0{idx + 1}</span>
                    <span className="text-slate-400 group-hover:text-[#0055FF] transition-colors">
                      INFRASTRUCTURE
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Standards / Capabilities */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:p-5 bg-white border border-[#D2E4F9] shadow-xs">
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