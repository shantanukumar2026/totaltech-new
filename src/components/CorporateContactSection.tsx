"use client";

import React from "react";
import { MapPin, Phone } from "lucide-react";

interface LocationCard {
  title: string;
  addressLines: string[];
  phone: string;
}

const USA_OFFICES: LocationCard[] = [
  {
    title: "NORTHEAST",
    addressLines: ["105 MAXESS ROAD", "MELVILLE, NY 11747"],
    phone: "(631) 452-1111",
  },
  {
    title: "SOUTH",
    addressLines: ["850 NW FEDERAL HWY", "STUART, FL 34994"],
    phone: "(772) 297-0700",
  },
  {
    title: "MIDWEST",
    addressLines: ["2200 HUNT STREET", "DETROIT, MI 48207"],
    phone: "(631) 452-1111",
  },
  {
    title: "WESTCOAST",
    addressLines: ["1824 STORE ST 2ND FLOOR,", "VICTORIA, BC V8T 4R4 CANADA"],
    phone: "604 200 0616",
  },
];

const INTERNATIONAL_OFFICES: LocationCard[] = [
  {
    title: "CANADA - EAST",
    addressLines: ["ONE YONGE STREET", "TORONTO, ONTARIO M5E 1R4, CANADA"],
    phone: "+1 (438) 805-9990",
  },
  {
    title: "CANADA - WEST",
    addressLines: ["1824 STORE ST, 2ND FLOOR", "VICTORIA, BC V8T 4R4, CANADA"],
    phone: "(604) 200-0616",
  },
  {
    title: "CARIBBEAN / LATIN AMERICA",
    addressLines: ["CRYPTO ISLE - GREEN ROOFS", "1 E BAY ST, NASSAU, BAHAMAS"],
    phone: "(242) 802-8000",
  },
];

function OfficeCard({ office }: { office: LocationCard }) {
  return (
    <div className="relative bg-white border border-[#E2E8F0] shadow-xs hover:border-[#0055FF] transition-all p-6 sm:p-7 flex flex-col justify-between overflow-hidden group min-h-[190px]">
      <div className="absolute top-3 right-3 w-16 h-16 pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-[#0055FF]/20 fill-none stroke-current stroke-[4]"
        >
          <circle cx="50" cy="50" r="44" />
          <ellipse cx="50" cy="50" rx="22" ry="44" />
          <line x1="6" y1="50" x2="94" y2="50" />
          <line x1="14" y1="28" x2="86" y2="28" />
          <line x1="14" y1="72" x2="86" y2="72" />
        </svg>
      </div>

      <div className="relative z-10">
        <h3 className="text-base sm:text-lg font-black text-[#002B7F] tracking-tight uppercase mb-4">
          {office.title}
        </h3>

        <div className="flex items-start gap-2.5 text-[11px] sm:text-xs text-[#4A5568] font-semibold tracking-wide">
          <MapPin className="w-4 h-4 text-[#0062FF] shrink-0 mt-0.5" />
          <div className="space-y-0.5 uppercase leading-relaxed">
            {office.addressLines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 pt-4 mt-3 flex items-center gap-2.5 text-xs sm:text-[13px] text-[#002B7F] font-bold tracking-wide">
        <Phone className="w-4 h-4 text-[#0062FF] shrink-0" />
        <a
          href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
          className="hover:text-[#0062FF] transition-colors"
        >
          {office.phone}
        </a>
      </div>
    </div>
  );
}

export default function CorporateContactSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-14 sm:py-20 border-t border-[#E2E8F0] select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl font-black tracking-[0.25em] text-[#0055FF] uppercase">
            LOCATIONS
          </h2>
        </div>

        <div className="mb-12">
          <div className="text-xs sm:text-[13px] font-black text-[#0055FF] tracking-wider uppercase mb-5">
            USA OFFICES
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {USA_OFFICES.map((office, idx) => (
              <OfficeCard key={idx} office={office} />
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs sm:text-[13px] font-black text-[#0055FF] tracking-wider uppercase mb-5 pt-4 border-t border-[#F0F4F9]">
            INTERNATIONAL OFFICES
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {INTERNATIONAL_OFFICES.map((office, idx) => (
              <OfficeCard key={idx} office={office} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
