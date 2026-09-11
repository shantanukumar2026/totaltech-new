"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  HardHat,
  Award,
} from "lucide-react";

export default function Footer() {
  const solutions = [
    { label: "Highway Bridge Superstructures", href: "/solutions/precast-technology" },
    { label: "Precast Specialty Engineering", href: "/solutions/concreate-technologies" },
    { label: "BIM 3D/4D Modeling (LOD 400)", href: "/solutions/precast-technology" },
    { label: "Constructability & Erection Plans", href: "/solutions/precast-technology" },
    { label: "Box Culverts & Drainage Systems", href: "/solutions/precast-technology" },
    { label: "Elevated Viaduct & Segmental Systems", href: "/solutions/precast-technology" },
  ];

  const standards = [
    { label: "ACI / PCI CODE-319-25 Precast Code", href: "/quality-standards" },
    { label: "ACI CODE-318-25 Building Requirements", href: "/quality-standards" },
    { label: "PCI Design Handbook (9th Edition)", href: "/quality-standards" },
    { label: "AASHTO LRFD Bridge Specifications", href: "/quality-standards" },
    { label: "AREMA Manual for Railway Engineering", href: "/quality-standards" },
    { label: "ASTM Material QA Standards (C39/C143)", href: "/quality-standards" },
  ];

  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Projects", href: "/projects" },
    { label: "Careers", href: "/careers" },
    { label: "News & Insights", href: "/news" },
    { label: "Resources", href: "/resources" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="relative w-full bg-[#00236e] text-white font-sans overflow-hidden">
      {/* ==================== TOP BANNER / CTA STRIP ==================== */}
      <div className="relative w-full bg-gradient-to-r from-[#0052cc] via-[#003899] to-[#00236e] border-b border-blue-900/60 overflow-hidden shadow-2xl">
        {/* Background Bridge Image on the right half */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 lg:w-2/5 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-35 filter brightness-110 contrast-125"
            style={{ backgroundImage: "url('/infrastructure/bridge_overpass.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003899] via-[#002c80]/85 to-[#00236e]/60" />
        </div>

        <div className="max-w-[1720px] mx-auto flex flex-col lg:flex-row items-stretch justify-between relative z-10">
          {/* Left Angled Orange Callout Box */}
          <div className="relative flex-shrink-0 flex items-center bg-gradient-to-br from-[#ff5a00] to-[#ff7300] px-8 sm:px-12 py-6 sm:py-8 lg:py-7 lg:pr-16 lg:[clip-path:polygon(0_0,calc(100%-38px)_0,100%_100%,0_100%)] shadow-2xl">
            <div className="relative z-10">
              <p className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-white/95 uppercase mb-1">
                LET&apos;S BUILD
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-3xl font-black text-white tracking-tight uppercase leading-tight">
                WHAT&apos;S NEXT
              </h2>
              <div className="mt-2.5 h-[3px] w-14 bg-white rounded-full" />
            </div>
          </div>

          {/* Center Message & Right CTA Button */}
          <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 px-6 sm:px-10 lg:px-14 py-6 sm:py-8">
            <div className="max-w-2xl">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-normal leading-snug">
                Partner with Total Tech for innovative precast solutions.
              </h3>
              <p className="mt-1.5 text-[10.5px] sm:text-xs font-bold tracking-[0.25em] text-blue-200/90 uppercase">
                STRONGER INFRASTRUCTURE. BRIGHTER TOMORROWS.
              </p>
            </div>

            <div className="flex items-center gap-6 sm:gap-8 flex-shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-white text-[#0047bf] hover:text-[#002f80] hover:bg-blue-50 px-7 sm:px-8 py-3.5 sm:py-4 rounded-md font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-4 h-4 text-[#ff5a00] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Angled Orange Accent Slash on far right */}
              <div className="hidden xl:block h-16 w-4 -skew-x-[25deg] bg-gradient-to-b from-[#ff7300] to-[#ff5a00] rounded-sm shadow-md" />
            </div>
          </div>
        </div>
      </div>

      {/* ==================== MAIN FOOTER CONTENT ==================== */}
      <div className="relative max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12 pt-16 pb-12 z-10">
        {/* Subtle Background Blueprint / Suspension Bridge Wireframe */}
        <div className="pointer-events-none absolute right-4 bottom-12 w-[480px] lg:w-[650px] h-[320px] opacity-[0.14] select-none">
          <svg
            viewBox="0 0 800 400"
            fill="none"
            stroke="currentColor"
            className="w-full h-full text-blue-400"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Bridge Main Cables & Towers */}
            <path d="M 0 350 L 800 350" strokeWidth="3" />
            <path d="M 220 350 L 220 80 L 240 80 L 240 350" strokeWidth="2.5" />
            <path d="M 560 350 L 560 80 L 580 80 L 580 350" strokeWidth="2.5" />
            {/* Suspension Catenary Cables */}
            <path d="M 0 160 Q 110 320 230 80" strokeWidth="2.5" />
            <path d="M 230 80 Q 390 280 570 80" strokeWidth="2.5" />
            <path d="M 570 80 Q 690 320 800 160" strokeWidth="2.5" />
            {/* Vertical Stay Cables */}
            {[60, 100, 140, 180, 280, 320, 360, 400, 440, 480, 520, 620, 660, 700, 740].map((x, i) => (
              <line key={i} x1={x} y1={350} x2={x} y2={140 + Math.sin(i * 0.4) * 60} strokeWidth="1" strokeDasharray="3 3" />
            ))}
            {/* Triangular Trusses */}
            <path d="M 0 350 L 40 320 L 80 350 L 120 320 L 160 350 L 200 320 L 240 350 L 280 320 L 320 350 L 360 320 L 400 350 L 440 320 L 480 350 L 520 320 L 560 350 L 600 320 L 640 350 L 680 320 L 720 350 L 760 320 L 800 350" strokeWidth="1.2" />
          </svg>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1.05fr_0.85fr_1.25fr] gap-10 lg:gap-8 xl:gap-12 items-start relative z-10">
          
          {/* ========== COLUMN 1: Company Logo, Bio & Certifications ========== */}
          <div className="flex flex-col gap-6">
            {/* Total Tech Logo with icon and modern typography */}
            <Link href="/" className="inline-flex items-center gap-3.5 group" aria-label="Total Tech Technologies">
              <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-[#003899] to-[#001f5c] border border-blue-400/40 rounded shadow-md transition-transform duration-300 group-hover:scale-105">
                {/* Modern Geometric Monogram TT */}
                <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none">
                  <path
                    d="M6 7 H22 V13 H16 V29 H10 V13 H6 V7 Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M20 14 H30 V19 H26 V29 H20 V14 Z"
                    fill="#ff5a00"
                  />
                  <rect x="23" y="7" width="7" height="4.5" fill="#ff5a00" />
                </svg>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase leading-none">
                    TOTAL
                  </span>
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-[#ff5a00] uppercase leading-none">
                    TECH
                  </span>
                </div>
                <span className="text-[10px] font-extrabold tracking-[0.22em] text-slate-300 uppercase mt-0.5">
                  TECHNOLOGIES
                </span>
                <span className="text-[8px] font-bold tracking-[0.25em] text-blue-300/80 uppercase mt-0.5">
                  — FUTURISTIC TECHNOLOGIES —
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-[13px] text-slate-300/90 leading-relaxed font-normal pr-2">
              Total Tech provides specialty precast structural engineering, bridge superstructure design, BIM detailing, and constructability analysis for infrastructure and commercial projects across North America.
            </p>

            {/* Certifications Badge Row */}
            <div className="grid grid-cols-4 gap-2 pt-2 border-t border-slate-800/80">
              {/* PCI */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="w-8 h-8 rounded bg-blue-950/70 border border-blue-500/30 flex items-center justify-center text-white mb-1.5 transition-colors group-hover:border-[#ff5a00]">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </div>
                <span className="text-[10.5px] font-bold text-slate-200 leading-tight">PCI</span>
                <span className="text-[9.5px] text-slate-400 font-medium leading-tight">Certified</span>
              </div>

              {/* ACI */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="w-8 h-8 rounded bg-blue-950/70 border border-blue-500/30 flex items-center justify-center text-white mb-1.5 transition-colors group-hover:border-[#ff5a00]">
                  <HardHat className="w-4 h-4 text-white" />
                </div>
                <span className="text-[10.5px] font-bold text-slate-200 leading-tight">ACI</span>
                <span className="text-[9.5px] text-slate-400 font-medium leading-tight">318/319</span>
              </div>

              {/* AASHTO */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="w-8 h-8 rounded bg-blue-950/70 border border-blue-500/30 flex items-center justify-center text-white mb-1.5 transition-colors group-hover:border-[#ff5a00]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-white"
                  >
                    <path d="M4 19V7" />
                    <path d="M20 19V7" />
                    <path d="M2 19h20" />
                    <path d="M4 7c4 0 6 6 8 6s4-6 8-6" />
                    <path d="M12 13v6" />
                    <path d="M8 10v9" />
                    <path d="M16 10v9" />
                  </svg>
                </div>
                <span className="text-[10.5px] font-bold text-slate-200 leading-tight">AASHTO</span>
                <span className="text-[9.5px] text-slate-400 font-medium leading-tight">LRFD</span>
              </div>

              {/* ISO */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="w-8 h-8 rounded bg-blue-950/70 border border-blue-500/30 flex items-center justify-center text-white mb-1.5 transition-colors group-hover:border-[#ff5a00]">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <span className="text-[10.5px] font-bold text-slate-200 leading-tight">ISO</span>
                <span className="text-[9.5px] text-slate-400 font-medium leading-tight">9001:2015</span>
              </div>
            </div>

            {/* Orange Tagline Divider */}
            <div className="flex items-center gap-3 pt-1">
              <div className="h-[2.5px] w-8 bg-[#ff5a00] rounded-full" />
              <span className="text-[9.5px] sm:text-[10px] font-extrabold tracking-[0.2em] text-slate-400 uppercase">
                BUILDING A STRONGER TOMORROW
              </span>
            </div>
          </div>

          {/* ========== COLUMN 2: SOLUTIONS ========== */}
          <div className="flex flex-col">
            <div className="mb-5">
              <div className="h-[3px] w-6 bg-[#ff5a00] mb-2.5 rounded-sm" />
              <h4 className="text-xs sm:text-[13px] font-black tracking-[0.15em] text-white uppercase">
                SOLUTIONS
              </h4>
            </div>

            <ul className="flex flex-col space-y-3.5">
              {solutions.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-start gap-2 text-xs sm:text-[13px] text-slate-300 hover:text-white transition-colors duration-200 leading-snug"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#ff5a00] flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:translate-x-1" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========== COLUMN 3: CODES & STANDARDS ========== */}
          <div className="flex flex-col">
            <div className="mb-5">
              <div className="h-[3px] w-6 bg-[#ff5a00] mb-2.5 rounded-sm" />
              <h4 className="text-xs sm:text-[13px] font-black tracking-[0.15em] text-white uppercase">
                CODES &amp; STANDARDS
              </h4>
            </div>

            <ul className="flex flex-col space-y-3.5">
              {standards.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-start gap-2 text-xs sm:text-[13px] text-slate-300 hover:text-white transition-colors duration-200 leading-snug"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#ff5a00] flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:translate-x-1" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========== COLUMN 4: QUICK LINKS ========== */}
          <div className="flex flex-col">
            <div className="mb-5">
              <div className="h-[3px] w-6 bg-[#ff5a00] mb-2.5 rounded-sm" />
              <h4 className="text-xs sm:text-[13px] font-black tracking-[0.15em] text-white uppercase">
                QUICK LINKS
              </h4>
            </div>

            <ul className="flex flex-col space-y-3.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-xs sm:text-[13px] text-slate-300 hover:text-white transition-colors duration-200 leading-snug"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#ff5a00] flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========== COLUMN 5: HEADQUARTERS & BRAND PILLARS ========== */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="mb-5">
                <div className="h-[3px] w-6 bg-[#ff5a00] mb-2.5 rounded-sm" />
                <h4 className="text-xs sm:text-[13px] font-black tracking-[0.15em] text-white uppercase">
                  HEADQUARTERS
                </h4>
              </div>

              <div className="flex flex-col space-y-4">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full border border-blue-400/30 bg-blue-950/60 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-snug font-normal">
                    850 NW Federal Hwy,
                    <br />
                    Stuart, FL 34994
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full border border-blue-400/30 bg-blue-950/60 flex items-center justify-center text-white flex-shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <a
                    href="tel:+17722970700"
                    className="text-xs sm:text-[13px] text-slate-300 hover:text-white transition-colors font-medium"
                  >
                    (772) 297-0700
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full border border-blue-400/30 bg-blue-950/60 flex items-center justify-center text-white flex-shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <a
                    href="mailto:americas@totaltech.com"
                    className="text-xs sm:text-[13px] text-slate-300 hover:text-white transition-colors font-medium"
                  >
                    americas@totaltech.com
                  </a>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full border border-blue-400/30 bg-blue-950/60 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-snug font-normal">
                    Monday – Friday:
                    <br />
                    8:00 AM – 6:00 PM EST
                  </p>
                </div>
              </div>
            </div>

            {/* Vertical Accent: PEOPLE / PRECISION / PROGRESS */}
            <div className="mt-8 pt-4 flex items-center gap-3.5 self-end lg:self-auto">
              <div className="w-[3px] h-12 bg-gradient-to-b from-[#ff7300] to-[#ff5a00] rounded-full flex-shrink-0" />
              <div className="flex flex-col text-[10px] sm:text-[11px] font-black tracking-[0.25em] text-slate-400 uppercase leading-[1.3]">
                <span>PEOPLE</span>
                <span>PRECISION</span>
                <span>PROGRESS</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ==================== BOTTOM COPYRIGHT BAR ==================== */}
      <div className="w-full border-t border-blue-950/60 bg-[#001747]/95 backdrop-blur-sm relative z-10">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          {/* Copyright */}
          <div className="font-medium text-slate-400/90 text-center sm:text-left">
            &copy; 2025 Total Tech Technologies. All rights reserved.
          </div>

          {/* Legal Links & Social Media Icons */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-slate-600">|</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
              <span className="text-slate-600">|</span>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 ml-2">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-7 h-7 rounded-full border border-slate-700 bg-blue-950/40 hover:bg-[#0077b5] hover:border-[#0077b5] flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-7 h-7 rounded-full border border-slate-700 bg-blue-950/40 hover:bg-[#ff0000] hover:border-[#ff0000] flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:americas@totaltech.com"
                aria-label="Email Us"
                className="w-7 h-7 rounded-full border border-slate-700 bg-blue-950/40 hover:bg-[#ff5a00] hover:border-[#ff5a00] flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
