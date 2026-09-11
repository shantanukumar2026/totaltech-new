"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  ChevronRight,
  Building2,
  FileCheck2,
  Layers,
} from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const engineeringSolutions = [
    { label: "Highway Bridge Superstructures", href: "/solutions/precast-technology" },
    { label: "Precast Specialty Engineering", href: "/solutions/concreate-technologies" },
    { label: "BIM 3D/4D Modeling (LOD 400)", href: "/solutions/precast-technology" },
    { label: "Constructability & Erection Plans", href: "/solutions/precast-technology" },
    { label: "Box Culverts & Drainage Systems", href: "/solutions/precast-technology" },
    { label: "Elevated Viaduct & Segmental Systems", href: "/solutions/precast-technology" },
  ];

  const designStandards = [
    { label: "ACI / PCI CODE-319-25 Precast Code", href: "/quality-standards" },
    { label: "ACI CODE-318-25 Building Requirements", href: "/quality-standards" },
    { label: "PCI Design Handbook (9th Edition)", href: "/quality-standards" },
    { label: "AASHTO LRFD Bridge Specifications", href: "/quality-standards" },
    { label: "AREMA Manual for Railway Engineering", href: "/quality-standards" },
    { label: "ASTM Material QA Standards (C39/C143)", href: "/quality-standards" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0055FF] text-white">
      {/* Top Header-Matching Cyan Glow Accent */}
      <div className={styles.topGlowLine} />

      {/* Top Accent Strip */}
      <div className="relative bg-[#0076df]">
        <div className="mx-auto flex min-h-[125px] max-w-[1368px] items-center">
          <div className="relative flex h-[100px] w-[280px] items-center bg-[#ff6b00] px-10 after:absolute after:-right-[45px] after:top-0 after:h-full after:w-[70px] after:-skew-x-[25deg] after:bg-[#0055FF]">

            <div className="relative z-10">
              <p className="text-sm font-medium tracking-[3px]"> LET&apos; BUILD</p>
              <h2 className="text-2xl font-extrabold">WHAT&apos;S NEXT</h2>
              <div className="mt-2 h-[3px] w-12 bg-white" />
            </div>
          </div>

          <div className="flex flex-1 item-center justify-between px-20">
            <div>

              <h3 className="text-lg font-bold">
                Partner with total tech For Innovation precast solutions.
              </h3>
              <p className="mt-2 text-xs font-semibold tracking-[4px] text-blue-100">
                STRONGER INFRASTRUCTURE. BRIGHTER TOMMOROWS.
              </p>

            </div>
            <button className="flex item-center gap-3 rounded-md bg-white px-7 py-4 hover:cursor-pointer text-sm font-bold text-[#1267ad] shadow-sm transition hover:bg-gray-100">
              GET IN TOUCH
              <ArrowRight size={18} />

            </button>
          </div>

          <div className="mr-12 hidden h-[80px] w-8 -skew-x-[25deg] bg-[#ff6b00] lg:block" />

        </div>

        <div className="relative mx-auto max-w-[1500px] px-6 py-10 lg:px-10">


          <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-[45%] opacity-10">

            <div className="absolute right-0 top-16 h-[2px] w-full rotate-[-20deg] bg-white" />



            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.15fr]">

            </div>




























          </div>


        </div>
      </div>


    </footer >
  );
}
