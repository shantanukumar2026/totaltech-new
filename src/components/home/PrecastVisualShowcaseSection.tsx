"use client";

import React, { useState } from "react";
import { ArrowRight, Layers, Palette, Megaphone } from "lucide-react";

interface ShowcaseItem {
  id: string;
  title: string;
  category: "3D MODELING" | "DIGITAL CAMPAIGNS" | "BRANDING & UI";
  tag: string;
  image: string;
  desc: string;
  deliverable: string;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: "v1",
    title: "Prestressed Bridge Girder 3D Erection Visualization",
    category: "3D MODELING",
    tag: "3D MODELING & CAD",
    image: "/crausal-1.png",
    desc: "Structural precast 3D model and erection animation showcasing accelerated bridge construction and strand detailing.",
    deliverable: "3D Model & Technical Renders",
  },
  {
    id: "v2",
    title: "Modular Precast Parking Garage Digital Lead Campaign",
    category: "DIGITAL CAMPAIGNS",
    tag: "B2B LEAD CAMPAIGN",
    image: "/crausal-2.png",
    desc: "Targeted digital search and marketing campaign generating commercial project RFQs for a regional precast producer.",
    deliverable: "Qualified Commercial Inquiries",
  },
  {
    id: "v3",
    title: "Precast Concrete Systems Interactive Digital Catalog",
    category: "BRANDING & UI",
    tag: "WEB & SPEC PORTAL",
    image: "/crausal-3.png",
    desc: "Interactive product specification portal allowing general contractors and estimators to view 3D details and request bids.",
    deliverable: "Interactive Web Portal",
  },
  {
    id: "v4",
    title: "Insulated Precast Wall Panels Technical Graphics",
    category: "3D MODELING",
    tag: "ARCHITECTURAL GRAPHICS",
    image: "/crausal-4.png",
    desc: "Exploded 3D component cutaways visualizing insulation cores, connection plates, and lifting inserts for submittal packages.",
    deliverable: "Submittal Graphics & Cutaways",
  },
];

const CATEGORIES = ["ALL WORK", "3D MODELING", "DIGITAL CAMPAIGNS", "BRANDING & UI"];

export default function PrecastVisualShowcaseSection() {
  const [activeCategory, setActiveCategory] = useState("ALL WORK");

  const filtered =
    activeCategory === "ALL WORK"
      ? SHOWCASE_ITEMS
      : SHOWCASE_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section className="w-full bg-white py-16 sm:py-24 border-t border-[#E2E8F0] select-none">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-10 border-b border-[#E2E8F0]">
          <div>
            <div className="w-12 h-1 bg-[#0055FF] mb-4" />
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0F6FE] border border-[#D2E4F9] text-[#0055FF] text-[11px] font-mono font-bold uppercase tracking-wider mb-3">
              <span>FEATURED WORK & ASSETS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              Precast 3D Visuals & Digital Campaigns
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0051c5] font-normal leading-relaxed max-w-md">
            Explore our featured precast 3D renderings, component graphics, and digital marketing work created for the concrete and construction industry.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          {CATEGORIES.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                activeCategory === cat
                  ? "bg-[#0055FF] text-white border-[#0055FF] shadow-xs"
                  : "bg-white text-[#0335ab] border-[#D2E4F9] hover:border-[#0055FF]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2x2 Showcase Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#E2E8F0] hover:border-[#0055FF] shadow-xs hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#F0F7FF]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 z-20">
                    <span className="px-2.5 py-1 bg-white/95 text-[#0055FF] text-[10px] font-mono font-bold uppercase shadow-md border border-blue-100">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 z-20">
                    <span className="px-2.5 py-1 bg-[#0055FF] text-white text-[10px] font-mono font-bold uppercase shadow-md">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-black text-[#0335ab] leading-snug group-hover:text-[#0055FF] transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#0051c5] font-normal leading-relaxed mb-5">
                    {item.desc}
                  </p>

                  <div className="p-3 bg-[#F8FBFE] border border-[#D2E4F9] flex items-center justify-between text-xs font-bold text-[#0335ab]">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Deliverable</span>
                    <span className="text-[#0055FF] font-mono font-bold">{item.deliverable}</span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-5 pt-2 border-t border-[#F0F4F9] flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-slate-400 group-hover:text-[#0055FF] transition-colors">
                  TOTAL TECH PORTFOLIO
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0055FF] group-hover:translate-x-1 transition-transform">
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
