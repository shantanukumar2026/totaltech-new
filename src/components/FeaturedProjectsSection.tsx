"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function FeaturedProjectsSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-18 border-t border-[#E2E8F0] select-none">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header / Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E2E8F0]">
          <div>
            <div className="w-12 h-1 bg-[#0055FF] mb-3" />
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#F0F6FE] border border-[#D2E4F9] text-[#0055FF] text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0055FF]" />
              <span>PROJECT PORTFOLIO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              Featured Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0051c5] font-medium max-w-md">
            Delivering precision structural precast engineering, prestressed concrete systems, and LOD 400 BIM detailing across North America.
          </p>
        </div>

      </div>
    </section>
  );
}
