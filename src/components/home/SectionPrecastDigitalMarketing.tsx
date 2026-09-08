"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function SectionPrecastDigitalMarketing() {

  return (
    <section id="section-digital-marketing" className="w-full bg-[#F8FBFE] py-14 sm:py-18 border-t border-[#E2E8F0] select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 mb-10 border-b border-[#E2E8F0]">
          <div>
            <div className="w-12 h-1 bg-[#0055FF] mb-3" />
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-white border border-[#D2E4F9] text-[#0055FF] text-[10px] font-mono font-bold uppercase tracking-wider mb-2 shadow-xs">
              <span>08 | DIGITAL MARKETING & WEB SOLUTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              Digital Marketing & Presentation Systems
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0051c5] font-medium max-w-md">
            Connecting precast producers with heavy civil contractors and DOT agencies through search optimization, digital product portals, and technical submittal graphics.
          </p>
        </div>

        {/* Balanced Enterprise Showcase (Visual Graphic Left + Editorial Capability Highlights Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white border border-[#E2E8F0] p-6 sm:p-10 shadow-xs">
          
          {/* Left Visual Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F0F6FE] border border-[#D2E4F9] shadow-xs">
              <img
                src="/precast_technologies_458x288.png"
                alt="Precast Infrastructure Digital Portal"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3">
                <span className="px-2.5 py-1 bg-white/95 text-[#0055FF] text-[10px] font-mono font-bold uppercase shadow-sm border border-blue-100">
                  DIGITAL SPECIFICATION PORTAL
                </span>
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-[#F8FBFE] border border-[#D2E4F9]">
              <div className="text-xs font-black text-[#0335ab] uppercase tracking-wide mb-1">
                Engineered for Precast Producers
              </div>
              <p className="text-xs text-[#0051c5] leading-relaxed">
                Specialized digital tools and technical presentations built to communicate precast infrastructure product details with clarity and precision.
              </p>
            </div>
          </div>

          {/* Right Editorial & Capability Highlights Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-[10px] font-mono font-bold text-[#0055FF] uppercase tracking-wider mb-2">
                DIGITAL INFRASTRUCTURE PLATFORMS
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0335ab] leading-tight mb-4">
                Digital Systems Built for Precast Producers &amp; Contractors
              </h3>
              <p className="text-xs sm:text-sm text-[#0051c5] leading-relaxed mb-4">
                We engineer digital specification portals and submittal graphics that allow contractors, estimators, and DOT engineers to easily access technical precast data, load tables, and engineering submittals.
              </p>
              <p className="text-xs sm:text-sm text-[#0051c5] leading-relaxed">
                From interactive online product catalogs to high-resolution 3D component renders, our platforms bridge the gap between offsite manufacturing and field installation.
              </p>
            </div>

            {/* 3 Clean Highlight Rows */}
            <div className="space-y-3 pt-4 border-t border-[#E2E8F0]">
              <div className="flex items-start gap-3 p-3 bg-[#F8FBFE] border border-[#D2E4F9]">
                <CheckCircle2 className="w-4 h-4 text-[#0055FF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0335ab]">
                    Searchable Product &amp; Specification Portals
                  </h4>
                  <p className="text-xs text-[#0051c5] mt-0.5">
                    Immediate access to precast dimensions, load capacity tables, and downloadable PDF submittals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#F8FBFE] border border-[#D2E4F9]">
                <CheckCircle2 className="w-4 h-4 text-[#0055FF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0335ab]">
                    Technical 3D Submittal &amp; Proposal Graphics
                  </h4>
                  <p className="text-xs text-[#0051c5] mt-0.5">
                    Clear 3D component illustrations and exploded assembly diagrams prepared for DOT and commercial bid packages.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#F8FBFE] border border-[#D2E4F9]">
                <CheckCircle2 className="w-4 h-4 text-[#0055FF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0335ab]">
                    Direct Estimating &amp; Inquiry Integration
                  </h4>
                  <p className="text-xs text-[#0051c5] mt-0.5">
                    Online project inquiry forms and specification builders connecting contractors directly with precast sales teams.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/solutions/search-engine-optimization"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0055FF] hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
              >
                <span>Explore Digital Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
