"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
      "Prestressed concrete girders and bridge slabs are precast structural components used for highway bridges, overpasses, and other transportation structures. Systems can be engineered for project-specific spans, loads, dimensions, and connection requirements.",
    image: "/infrastructure/istockphoto-1426614697-2048x2048.jpg",
    imageAlt: "Prestressed concrete bridge girders in storage yard",
    points: [
      "Highway and roadway bridges",
      "Overpasses and grade separations",
      "Bridge deck systems",
    ],
    linkHref: "/solutions/precast-technology",
    linkText: "View Prestressed Engineering",
  },

  {
    tag: "CONNECTIONS & EMBEDS",
    title: "Connection Design & Structural Interfaces",
    description:
      "Precast connections transfer loads between structural components and foundations while providing stability and continuity. Connection systems can be designed for project-specific structural, construction, and erection requirements.",
    image: "/infrastructure/precast_rebar_cage.jpg",
    imageAlt: "Precast concrete reinforcement cage and casting bed",
    points: [
      "Welded, bolted, and grouted connections",
      "Bearings and dapped-end connections",
      "Embedded plates, studs, and inserts",
    ],
    linkHref: "/solutions/precast-technology",
    linkText: "View Connection Engineering",
  },

  {
    tag: "3D BIM & SHOP DRAWINGS",
    title: "3D Shop Detailing & Bar Schedules (LOD 400)",
    description:
      "LOD 400 detailing provides fabrication-level information for precast components, including reinforcement, prestressing, embeds, dimensions, and piece marks. Models and drawings are coordinated for production and field erection.",
    image: "/infrastructure/precast_segments_yard.jpg",
    imageAlt: "Precast concrete components prepared for fabrication",
    points: [
      "3D reinforcement and fabrication models",
      "Bar schedules and material quantities",
      "Shop and erection drawings",
    ],
    linkHref: "/solutions/information-architecture",
    linkText: "View BIM Detailing",
  },

  {
    tag: "MANUFACTURING & PLANT",
    title: "Plant Production & Formwork Mold Detailing",
    description:
      "Production engineering supports the molds, casting beds, layouts, and processes used to manufacture precast concrete components. Designs can be adapted to plant equipment, production methods, and project requirements.",
    image: "/Concreatetechnologies1.jpg",
    imageAlt: "Precast concrete manufacturing plant and formwork equipment",
    points: [
      "Formwork and mold drawings",
      "Casting bed layouts and production planning",
      "Dimensional tolerances and inspection requirements",
    ],
    linkHref: "/solutions/concreate-technologies",
    linkText: "View Production Engineering",
  },
];

export default function SectionPrecastSpecialtyEngineering() {
  return (
    <section
      id="section-specialty-engineering"
      className="w-full bg-[#F8FBFE] py-10 sm:py-14 border-t border-[#E2E8F0] select-none"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 mb-8 border-b border-[#E2E8F0]">
          <div>
            <div className="w-12 h-1 bg-[#0055FF] mb-3" />

            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-white border border-[#D2E4F9] text-[#0055FF] text-[10px] font-mono font-bold uppercase tracking-wider mb-2 shadow-xs">
              <span>03 | SPECIALTY PRECAST ENGINEERING</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              Precast Engineering & Detailing Services
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#0051c5] font-medium max-w-md leading-relaxed">
            Structural design, connection engineering, BIM detailing, and
            production engineering for precast infrastructure projects.
          </p>
        </div>

        {/* Service Rows */}
        <div className="bg-white border border-[#E2E8F0] shadow-xs divide-y divide-[#E2E8F0] overflow-hidden">
          {SERVICES.map((row, idx) => {
            const isImageLeft = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center p-5 sm:p-7 hover:bg-[#FBFDFF] transition-colors"
              >

                {/* Image */}
                <div
                  className={`lg:col-span-6 ${isImageLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F0F6FE] border border-[#D2E4F9] shadow-xs group">
                    <Image
                      src={row.image}
                      alt={row.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Image Tag */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 bg-white/95 backdrop-blur-xs text-[#0055FF] text-[10px] font-mono font-bold uppercase shadow-sm border border-blue-100">
                        {row.tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${isImageLeft ? "lg:order-2" : "lg:order-1"
                    }`}
                >

                  <h3 className="text-xl sm:text-2xl font-black text-[#0335ab] tracking-tight mb-2">
                    {row.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#0051c5] leading-relaxed mb-3.5">
                    {row.description}
                  </p>

                  {/* Applications / Scope */}
                  <div className="space-y-1.5 mb-4">
                    {row.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-2 text-xs sm:text-[13px] font-semibold text-[#0335ab]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0055FF] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
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