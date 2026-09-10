"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Globe2,
} from "lucide-react";

interface OfficeLocation {
  id: string;
  region: string;
  city: string;
  state: string;
  isHQ: boolean;
  name: string;
  tagline: string;
  addressLines: string[];
  phone: string;
  email: string;
  hours: string;
  mapQuery: string;
}

const CORPORATE_OFFICES: OfficeLocation[] = [
  {
    id: "southeast-hq",
    region: "Southeast Region",
    city: "Stuart",
    state: "FL",
    isHQ: true,
    name: "Corporate Headquarters & Precast Engineering Center",
    tagline: "Primary headquarters managing nationwide precast engineering, structural design, and client relations.",
    addressLines: ["850 NW Federal Hwy", "Stuart, FL 34994"],
    phone: "(772) 297-0700",
    email: "americas@totaltech.com",
    hours: "Monday – Friday: 8:00 AM – 6:00 PM EST",
    mapQuery: "850+NW+Federal+Hwy,+Stuart,+FL+34994",
  },
  {
    id: "northeast-metro",
    region: "Northeast Region",
    city: "New York",
    state: "NY",
    isHQ: false,
    name: "New York Metro & Infrastructure Center",
    tagline: "Specialized engineering hub serving Northeast DOTs, municipal authorities, and major infrastructure contractors.",
    addressLines: ["New York Metro Area", "Long Island & New York, NY"],
    phone: "(631) 452-1111",
    email: "northeast@totaltech.com",
    hours: "Monday – Friday: 7:30 AM – 5:30 PM EST",
    mapQuery: "New+York,+NY",
  },
  {
    id: "midwest-hub",
    region: "Midwest Region",
    city: "Detroit",
    state: "MI",
    isHQ: false,
    name: "Great Lakes Regional Operations",
    tagline: "Engineering center focusing on heavy civil precast, box culverts, segmental bridge systems, and DOT infrastructure.",
    addressLines: ["Great Lakes Regional Hub", "Detroit Metro Area, MI"],
    phone: "(631) 452-1111",
    email: "midwest@totaltech.com",
    hours: "Monday – Friday: 8:00 AM – 5:00 PM EST",
    mapQuery: "Detroit,+MI",
  },
  {
    id: "west-coast",
    region: "West Coast Region",
    city: "Seattle & Victoria",
    state: "WA / BC",
    isHQ: false,
    name: "Pacific Northwest & Trans-Border Hub",
    tagline: "Regional team delivering seismic-resilient precast connections, rail transit components, and Western highway projects.",
    addressLines: ["Pacific Northwest Hub", "Seattle, WA & Victoria, BC"],
    phone: "(604) 200-0616",
    email: "westcoast@totaltech.com",
    hours: "Monday – Friday: 8:00 AM – 5:00 PM PST",
    mapQuery: "Seattle,+WA",
  },
];

export default function CorporateContactSection() {
  const [activeOfficeId, setActiveOfficeId] = useState<string>("southeast-hq");
  const activeOffice =
    CORPORATE_OFFICES.find((o) => o.id === activeOfficeId) || CORPORATE_OFFICES[0];

  return (
    <section id="locations" className="w-full bg-[#FFFFFF] py-14 sm:py-20 border-t border-[#E2E8F0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-10 border-b border-[#E2E8F0]">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0055FF] uppercase tracking-wider mb-2">
              <Building className="w-4 h-4" />
              <span>Locations & Regional Operations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              Our Regional Engineering Network
            </h2>
          </div>
          <p className="text-sm text-[#0051c5] font-medium max-w-md">
            Strategic regional offices providing localized structural engineering, precast BIM modeling, and on-site support across North America.
          </p>
        </div>

        {/* Interactive Master-Detail Corporate UI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Office Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {CORPORATE_OFFICES.map((office) => {
              const isSelected = office.id === activeOffice.id;
              return (
                <button
                  key={office.id}
                  onClick={() => setActiveOfficeId(office.id)}
                  className={`text-left p-5 border transition-all duration-200 relative cursor-pointer ${
                    isSelected
                      ? "bg-[#F0F6FE] border-[#0055FF] shadow-sm"
                      : "bg-white border-[#E2E8F0] hover:border-[#0085f4] hover:bg-[#F8FBFE]"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0055FF]" />
                  )}

                  <div className="flex items-start justify-between gap-3 mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0051c5]">
                        {office.region}
                      </span>
                      {office.isHQ && (
                        <span className="px-2 py-0.5 bg-[#0055FF] text-white text-[10px] font-black uppercase tracking-wider">
                          HQ
                        </span>
                      )}
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected
                          ? "text-[#0055FF] translate-x-1"
                          : "text-[#94A3B8]"
                      }`}
                    />
                  </div>

                  <h3 className="text-base font-black text-[#0335ab] mb-1">
                    {office.city}, {office.state}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-[#0051c5] font-medium mt-2">
                    <span className="flex items-center gap-1.5 font-bold text-[#0055FF]">
                      <Phone className="w-3.5 h-3.5" />
                      {office.phone}
                    </span>
                    <span className="truncate">{office.email}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Office Deep Dive Card */}
          <div className="lg:col-span-7 bg-[#F8FBFE] border border-[#D2E4F9] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Header Badge & Region */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[#D2E4F9]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0055FF]">
                    {activeOffice.region}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0335ab] mt-0.5">
                    {activeOffice.name}
                  </h3>
                </div>
                {activeOffice.isHQ && (
                  <span className="px-3 py-1 bg-[#0055FF] text-white text-xs font-bold uppercase tracking-wider">
                    Corporate Headquarters
                  </span>
                )}
              </div>

              {/* Tagline / Overview */}
              <p className="text-sm text-[#0051c5] font-medium leading-relaxed mb-6">
                {activeOffice.tagline}
              </p>

              {/* Office Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Physical Address */}
                <div className="bg-white border border-[#E2E8F0] p-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0055FF] mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>Office Address</span>
                  </div>
                  <div className="text-sm text-[#0335ab] font-bold">
                    {activeOffice.addressLines.map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                  <a
                    href={`https://maps.google.com/?q=${activeOffice.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0055FF] hover:underline mt-3"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Contact & Hours */}
                <div className="bg-white border border-[#E2E8F0] p-4 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0055FF]">
                    <Clock className="w-4 h-4" />
                    <span>Contact & Hours</span>
                  </div>

                  <div className="space-y-1.5 text-xs text-[#0051c5] font-medium">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#0055FF] shrink-0" />
                      <a
                        href={`tel:${activeOffice.phone.replace(/[^0-9+]/g, "")}`}
                        className="text-[#0335ab] font-bold hover:text-[#0055FF]"
                      >
                        {activeOffice.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#0055FF] shrink-0" />
                      <a
                        href={`mailto:${activeOffice.email}`}
                        className="text-[#0335ab] font-bold hover:text-[#0055FF]"
                      >
                        {activeOffice.email}
                      </a>
                    </div>
                    <div className="flex items-start gap-2 pt-1 border-t border-[#F1F5F9] text-[11px]">
                      <span>{activeOffice.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 mt-6 border-t border-[#D2E4F9]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0051c5]">
                <Globe2 className="w-4 h-4 text-[#0055FF]" />
                <span>Serving projects across state lines & multi-jurisdiction DOTs</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0055FF] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0047e0] transition-colors"
                >
                  <span>Inquire With This Office</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
