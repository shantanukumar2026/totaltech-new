"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  FileCheck2,
  Award,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Building2,
  ArrowRight,
  BookOpen,
  Scale,
  Microscope,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import ScrollReveal from "@/components/ScrollReveal";

export default function QualityStandardsPage() {
  const [searchOpen, setSearchOpen] = useState(false);

  const standards = [
    {
      code: "PCI CODE-319-25",
      title: "Building Code for Structural Precast Concrete",
      category: "Precast Concrete Institute (PCI)",
      desc: "Mandatory structural design requirements, connection ductility provisions, and fabrication tolerances specifically tailored for precast concrete structures.",
      icon: Award,
    },
    {
      code: "ACI 318-25",
      title: "Building Code Requirements for Structural Concrete",
      category: "American Concrete Institute (ACI)",
      desc: "Comprehensive standards for flexural, shear, seismic detailing, and reinforcement anchorage for reinforced and prestressed concrete systems.",
      icon: BookOpen,
    },
    {
      code: "AASHTO LRFD (10th Ed.)",
      title: "Bridge Design Specifications",
      category: "American Association of State Highway and Transportation Officials",
      desc: "Load and Resistance Factor Design for highway bridge superstructures, prestressed girders, segmental boxes, and substructure foundations.",
      icon: Scale,
    },
    {
      code: "AREMA Manual",
      title: "Manual for Railway Engineering",
      category: "American Railway Engineering and Maintenance-of-Way Association",
      desc: "Stringent Cooper E-80 rail loading criteria, impact allowances, and fatigue-resistant precast concrete design for railroad bridge crossings.",
      icon: Building2,
    },
    {
      code: "ISO 9001:2015",
      title: "Quality Management System Certification",
      category: "International Organization for Standardization",
      desc: "Audited quality protocols governing engineering calculations, parametric BIM detailing, peer reviews, and document control traceability.",
      icon: ShieldCheck,
    },
    {
      code: "ASTM Standards",
      title: "C39 / C143 / C666 / C1202 Testing Regimes",
      category: "ASTM International Material Testing",
      desc: "Verification protocols for compressive strength, slump flow, freeze-thaw durability, and electrical chloride ion penetrability in high-performance concrete.",
      icon: Microscope,
    },
  ];

  const qaProtocols = [
    {
      step: "01",
      title: "Design Basis & Code Determination",
      desc: "Establishing project-specific DOT criteria, local seismic hazard design categories, wind exposure, and environmental exposure classifications before calculation start.",
    },
    {
      step: "02",
      title: "Independent Calculation Verification",
      desc: "Every primary calculation sheet undergoes an independent check by a secondary licensed Professional Engineer using dual finite-element models (FEM).",
    },
    {
      step: "03",
      title: "LOD 400 BIM Clash Detection",
      desc: "100% clash verification between precast concrete geometry, prestressing strand anchorages, rebar cages, lifting embeds, and structural steel connections.",
    },
    {
      step: "04",
      title: "Final PE / SE Stamping & Submittal",
      desc: "Official digital stamping and sealing by licensed engineers across the applicable project jurisdiction, accompanied by comprehensive design calculation packages.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#FFFFFF] text-[#0335ab] flex flex-col font-sans selection:bg-[#0085f4] selection:text-white">
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <Navbar onOpenSearch={() => setSearchOpen(true)} />

      <main className="flex-1 w-full pt-[66px]">
        {/* Breadcrumbs Bar */}
        <div className="w-full bg-[#F0F6FE] border-b border-[#D2E4F9]">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-3 flex items-center gap-2 text-xs font-semibold text-[#0051c5]">
            <Link href="/" className="hover:text-[#0055FF] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#0055FF] font-bold">Quality &amp; Standards</span>
          </div>
        </div>

        {/* Masthead */}
        <section className="w-full bg-gradient-to-b from-[#00236E] to-[#00174A] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-10 border-b-2 border-[#0055FF] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,133,244,0.18),transparent_50%)] pointer-events-none" />

          <div className="w-full max-w-[1400px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0055FF]/20 border border-[#0085f4]/40 text-[#60A5FA] text-xs font-mono font-bold uppercase tracking-widest mb-4">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Industry Codes &amp; Quality Assurance</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight max-w-3xl leading-tight mb-6">
              Rigorous Engineering Standards &amp; Quality Control
            </h1>

            <p className="text-sm sm:text-base text-blue-100/90 max-w-3xl font-normal leading-relaxed">
              At Total Tech, structural safety and code fidelity are foundational. We engineer all precast structures, bridge girders, and commercial systems in rigorous alignment with North American structural building codes, State DOT mandates, and ISO 9001 certified workflows.
            </p>
          </div>
        </section>

        {/* Codes Grid */}
        <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-10 bg-[#FFFFFF]">
          <div className="w-full max-w-[1400px] mx-auto">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0055FF] uppercase tracking-wider mb-2">
                  <Award className="w-4 h-4" />
                  <span>Governing Specifications</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0335ab] tracking-tight">
                  Design Codes &amp; Material Specifications
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {standards.map((std, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F8FBFE] border border-[#D2E4F9] p-6 flex flex-col justify-between card-hover-lift"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="px-2.5 py-1 bg-white border border-[#D2E4F9] text-[#0055FF] text-xs font-mono font-bold uppercase shadow-xs">
                          {std.code}
                        </span>
                        <div className="p-2 bg-[#F0F6FE] text-[#0055FF] border border-[#D2E4F9]">
                          <std.icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-base font-black text-[#0335ab] mb-1">
                        {std.title}
                      </h3>
                      <p className="text-[11px] font-bold text-[#0051c5] uppercase tracking-wider mb-3">
                        {std.category}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {std.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E2E8F0] flex items-center gap-2 text-xs font-bold text-[#0055FF]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Certified Implementation</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 4-Step QA Protocol */}
        <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-10 bg-[#F8FBFE] border-y border-[#E2E8F0]">
          <div className="w-full max-w-[1400px] mx-auto">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-12 border-b border-[#E2E8F0]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0055FF] uppercase tracking-wider mb-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Quality Assurance Workflow</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
                    Four-Tier QA/QC Peer Review Protocol
                  </h2>
                </div>
                <p className="text-sm text-[#0051c5] font-medium max-w-md">
                  Zero tolerance for calculation errors or reinforcement clashes through our systematic multi-engineer validation lifecycle.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {qaProtocols.map((qa, idx) => (
                  <div key={idx} className="bg-white border border-[#D2E4F9] p-6 shadow-xs relative">
                    <span className="text-3xl font-mono font-black text-[#0055FF]/20 absolute top-4 right-4">
                      {qa.step}
                    </span>
                    <div className="w-8 h-1 bg-[#0055FF] mb-4" />
                    <h3 className="text-base font-black text-[#0335ab] mb-2 leading-snug">
                      {qa.title}
                    </h3>
                    <p className="text-xs text-[#0051c5] leading-relaxed">
                      {qa.desc}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Consultation Banner */}
        <section className="w-full bg-[#00236E] text-white py-14 px-4 sm:px-6 lg:px-8 xl:px-10 border-t-2 border-[#0055FF]">
          <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="px-2.5 py-1 bg-white/10 text-blue-200 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                Specification Compliance
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                Need QA Documentation for a Project Submittal?
              </h2>
              <p className="text-sm text-blue-100 max-w-xl">
                Our engineers supply full design calculations, certified material mix reviews, and PE/SE sealed submittal binders.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0055FF] hover:bg-blue-600 text-white text-xs font-black uppercase tracking-wider transition-all shadow-md"
              >
                <span>Request Submittal Binder</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
