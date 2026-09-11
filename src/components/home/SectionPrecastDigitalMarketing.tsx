"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function SectionPrecastDigitalTechnology() {
  return (
    <section
      id="section-digital-precast-technology"
      className="w-full bg-[#F8FBFE] py-12 sm:py-16 border-t border-[#E2E8F0] select-none"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 mb-8 border-b border-[#E2E8F0]">
          <div>
            <div className="w-12 h-1 bg-[#0055FF] rounded-full mb-3" />

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#D2E4F9] text-[#0055FF] text-[11px] font-mono font-bold uppercase tracking-wider rounded-full mb-2 shadow-xs">
              <span className="live-pulse-dot" />
              <span>07 | DIGITAL PRECAST TECHNOLOGY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              Digital Technology for Precast Infrastructure
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#0051c5] font-medium max-w-md leading-relaxed">
            Digital engineering, product information, visualization, and data
            systems that connect precast design, manufacturing, and project
            delivery.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white border border-[#E2E8F0] p-6 sm:p-10 rounded-2xl shadow-sm">

          {/* Image / Intro */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F0F6FE] border border-[#D2E4F9] rounded-xl shadow-sm group">
              <img
                src="/precast_technologies_458x288.png"
                alt="Digital technology for precast infrastructure"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute top-3 right-3">
                <span className="px-3 py-1 bg-white/95 backdrop-blur-xs text-[#0055FF] text-[10px] font-mono font-bold uppercase rounded-full shadow-md border border-blue-100">
                  DIGITAL PRECAST TECHNOLOGY
                </span>
              </div>
            </div>

            <div className="p-5 bg-[#F8FBFE] border border-[#D2E4F9] rounded-xl">
              <div className="text-xs font-black text-[#0335ab] uppercase tracking-wide mb-1.5">
                Built for Precast Infrastructure
              </div>

              <p className="text-xs text-[#0051c5] leading-relaxed">
                Digital tools and information systems designed to organize,
                present, and connect technical precast information throughout
                the project lifecycle.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">

            <div>
              <div className="text-[11px] font-mono font-bold text-[#0055FF] uppercase tracking-wider mb-2">
                DIGITAL ENGINEERING &amp; INFORMATION SYSTEMS
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#0335ab] leading-tight mb-3">
                Connecting Precast Engineering, Manufacturing &amp; Project Data
              </h3>

              <p className="text-xs sm:text-sm text-[#0051c5] leading-relaxed mb-3">
                Digital systems organize engineering models, drawings, product
                information, specifications, inspection records, and other
                project data so teams can access the information they need
                throughout the precast workflow.
              </p>

              <p className="text-xs sm:text-sm text-[#0051c5] leading-relaxed">
                From digital product catalogs and technical documentation to
                3D visualization and connected project information, these tools
                help bridge engineering, manufacturing, and field delivery.
              </p>
            </div>

            {/* Applications */}
            <div className="space-y-3 pt-4 border-t border-[#E2E8F0]">

              <div className="flex items-start gap-3.5 p-3.5 bg-[#F8FBFE] border border-[#D2E4F9] rounded-xl">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#0055FF] shrink-0 mt-0.5" />

                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0335ab]">
                    Digital Product Information
                  </h4>

                  <p className="text-xs text-[#0051c5] mt-0.5 leading-relaxed">
                    Organized product dimensions, specifications, drawings,
                    technical documents, and project information.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 bg-[#F8FBFE] border border-[#D2E4F9] rounded-xl">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#0055FF] shrink-0 mt-0.5" />

                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0335ab]">
                    3D Visualization &amp; Digital Models
                  </h4>

                  <p className="text-xs text-[#0051c5] mt-0.5 leading-relaxed">
                    Interactive models, component visualization, and digital
                    presentations that make complex precast systems easier to
                    understand.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 bg-[#F8FBFE] border border-[#D2E4F9] rounded-xl">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#0055FF] shrink-0 mt-0.5" />

                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0335ab]">
                    Connected Engineering &amp; Project Data
                  </h4>

                  <p className="text-xs text-[#0051c5] mt-0.5 leading-relaxed">
                    Connected information workflows that help engineering,
                    production, quality, and project teams work from
                    consistent technical data.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/solutions/precast-technology"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#0055FF] hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Explore Precast Technology</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}