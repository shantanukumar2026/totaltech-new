"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ServiceRow {
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  points: string[];
  linkHref: string;
  linkText: string;
}

const SERVICES: ServiceRow[] = [
  {
    tag: "STRUCTURAL & PRESTRESSED",
    title: "Prestressed Concrete Girders & Bridge Slabs",
    description:
      "Member design and structural calculations for pretensioned bridge girders, segmental spans, and heavy civil pier caps.",
    image: "/precast-technology.jpg",
    imageAlt: "Prestressed Concrete Bridge Box Girders in Storage Yard",
    points: [
      "AASHTO I-girders, bulb-tees, and spliced bridge beams",
      "Long-span tub girders and post-tensioned spans",
      "Strand loss, flexure, shear, and camber calculations",
    ],
    linkHref: "/solutions/precast-technology",
    linkText: "View Prestressed Engineering",
  },
  {
    tag: "CONNECTIONS & EMBEDS",
    title: "Connection Design & Structural Interfaces",
    description:
      "Engineered connections transferring gravity, wind, and seismic loads between precast elements and foundations.",
    image: "/infrastructure/precast_rebar_cage.jpg",
    imageAlt: "Precast Concrete Reinforcement Cage & Casting Bed",
    points: [
      "Welded, bolted, and grouted sleeve connections",
      "Dapped-end beam bearings and elastomeric pads",
      "Embedded steel plates, headed studs, and inserts",
    ],
    linkHref: "/solutions/precast-technology",
    linkText: "View Connection Detailing",
  },
  {
    tag: "3D BIM & SHOP DRAWINGS",
    title: "3D Shop Detailing & Bar Schedules (LOD 400)",
    description:
      "Fabrication-level 3D modeling with automated bar bending schedules, clash-free rebar cages, and erection sets.",
    image: "/infrastructure/precast_segments_yard.jpg",
    imageAlt: "Precast Concrete 3D Shop Detailing & Fabrication Sets",
    points: [
      "Collision-checked 3D reinforcement cages",
      "Automated bill of materials and CNC export data",
      "Clear piece mark drawings and erection plans",
    ],
    linkHref: "/solutions/information-architecture",
    linkText: "View BIM Detailing",
  },
  {
    tag: "MANUFACTURING & PLANT",
    title: "Plant Production & Formwork Mold Detailing",
    description:
      "Formwork drawings, casting bed layouts, and sequence optimization tailored for precast manufacturing plants.",
    image: "/Concreatetechnologies1.jpg",
    imageAlt: "Precast Concrete Manufacturing Plant & Mold Equipment",
    points: [
      "Formwork and mold fabrication drawings",
      "Casting bed turnaround and layout planning",
      "Dimensional tolerance control and inspection sets",
    ],
    linkHref: "/solutions/concreate-technologies",
    linkText: "View Plant Engineering",
  },
];

export default function SectionPrecastSpecialtyEngineering() {
  return (
    <section id="section-specialty-engineering" className="w-full bg-[#F8FBFE] py-12 sm:py-16 border-t border-[#E2E8F0] select-none">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 mb-6 border-b border-[#E2E8F0]">
          <div>
            <div className="w-12 h-1 bg-[#0055FF] mb-3" />
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-white border border-[#D2E4F9] text-[#0055FF] text-[10px] font-mono font-bold uppercase tracking-wider mb-2 shadow-xs">
              <span>04 | SPECIALTY PRECAST ENGINEERING & DETAILING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              Precast Engineering & Detailing Services
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0051c5] font-medium max-w-md">
            Structural calculations, connection design, 3D shop detailing, and mold engineering for precast producers nationwide.
          </p>
        </div>

        {/* Unified Alternating Rows */}
        <div className="bg-white border border-[#E2E8F0] shadow-xs divide-y divide-[#E2E8F0] overflow-hidden">
          {SERVICES.map((row, idx) => {
            const isImageLeft = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center p-5 sm:p-8 hover:bg-[#FBFDFF] transition-colors"
              >
                {/* Image */}
                <div
                  className={`lg:col-span-6 ${
                    isImageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F0F6FE] border border-[#D2E4F9]">
                    <img
                      src={row.image}
                      alt={row.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-white/95 text-[#0055FF] text-[10px] font-mono font-bold uppercase shadow-sm border border-blue-100">
                        {row.tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isImageLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-[#F0F6FE] text-[#0055FF] text-[10px] font-mono font-bold uppercase border border-[#D2E4F9] mb-2 w-fit">
                    {row.tag}
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-[#0335ab] tracking-tight mb-2">
                    {row.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#0051c5] leading-relaxed mb-4">
                    {row.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    {row.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs font-semibold text-[#0335ab]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0055FF] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={row.linkHref}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0055FF] hover:text-[#0335ab] transition-colors w-fit group"
                  >
                    <span>{row.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
