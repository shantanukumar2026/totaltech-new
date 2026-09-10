"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Building2,
  Users,
  Award,
  Compass,
  Shield,
  Target,
  ArrowRight,
  CheckCircle2,
  Globe2,
  Cpu,
  Layers,
  Sparkles,
  BarChart3,
  Phone,
  Mail,
  FileCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import ScrollReveal from "@/components/ScrollReveal";

export default function CompanyPage() {
  const [searchOpen, setSearchOpen] = useState(false);

  const stats = [
    { value: "0", label: "Years of Engineering Excellence" },
    { value: "0", label: "Infrastructure Projects Completed" },
    { value: "0", label: "US States & Territories Served" },
    { value: "100%", label: "PCI & ACI Standard Compliance" },
  ];

  const coreValues = [
    {
      icon: Shield,
      title: "Structural Integrity & Safety",
      desc: "Every calculation, connection detail, and precast shop drawing undergoes multi-tier peer reviews to guarantee safety under extreme environmental and seismic loads.",
    },
    {
      icon: Cpu,
      title: "Advanced Digital Automation",
      desc: "We bridge traditional civil engineering with LOD 400 BIM modeling, automated bar-bending schedules, and computational stress simulations.",
    },
    {
      icon: Target,
      title: "Precision Constructability",
      desc: "Our engineering designs are tailored for crane picking, transport clearance, and rapid on-site erection with zero field rework.",
    },
    {
      icon: Users,
      title: "Client-Centric Collaboration",
      desc: "Direct communication with licensed Professional Engineers (PE/SE) and dedicated project managers throughout design, fabrication, and erection.",
    },
  ];

  const leadership = [
    {
      name: "Marcus Vance, PE, SE",
      role: "Chief Executive Officer & Principal Structural Engineer",
      bio: "Over 0 years of specialty precast concrete engineering, segmental bridge design, and major DOT infrastructure leadership across North America.",
      specialty: "Segmental Bridges & Heavy Civil",
    },
    {
      name: "Dr. Elena Rostova, PhD, PE",
      role: "Chief Technology Officer & Head of Computational Engineering",
      bio: "Pioneer in parametric structural modeling, finite element analysis (FEA), and real-time sensor integration for critical bridge assets.",
      specialty: "FEA & Structural Dynamics",
    },
    {
      name: "David Chen, PE",
      role: "Vice President of Precast Engineering Operations",
      bio: "Directs nationwide precast specialty engineering, shop detailing teams, and producer quality assurance protocols adhering to PCI standards.",
      specialty: "Precast Fabrication & Detailing",
    },
    {
      name: "Sarah Jenkins, AIA, LEED AP",
      role: "Director of Digital Delivery & BIM Integration",
      bio: "Expert in LOD 400 BIM workflows, IFC interoperability, and 4D erection sequence simulation for complex architectural precast facades.",
      specialty: "BIM 4D/5D & Digital Twins",
    },
  ];

  // const milestones = [
  //   {
  //     year: "1999",
  //     title: "Founding & Specialty Precast Focus",
  //     desc: "Established as a dedicated structural engineering consultancy focused on specialty precast bridge components and custom concrete detailing.",
  //   },
  //   {
  //     year: "2007",
  //     title: "National DOT Expansion",
  //     desc: "Earned pre-qualification across 20+ State Departments of Transportation for bridge superstructure design and Accelerated Bridge Construction (ABC).",
  //   },
  //   {
  //     year: "2016",
  //     title: "Digital Twin & 3D BIM Detailing Hub",
  //     desc: "Integrated full LOD 400 parametric BIM modeling directly with automated precast manufacturing machinery and laser projection systems.",
  //   },
  //   {
  //     year: "2024",
  //     title: "Next-Generation Intelligent Infrastructure",
  //     desc: "Pioneering sensor-embedded precast elements, low-carbon geopolymer concrete analysis, and automated QA/QC scanning workflows.",
  //   },
  // ];

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
            <span className="text-[#0055FF] font-bold">Company Profile</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#00236E] to-[#00174A] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-10 border-b-2 border-[#0055FF] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,133,244,0.18),transparent_50%)] pointer-events-none" />

          <div className="w-full max-w-[1400px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0055FF]/20 border border-[#0085f4]/40 text-[#60A5FA] text-xs font-mono font-bold uppercase tracking-widest mb-4">
              <Building2 className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>About Total Tech</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight max-w-3xl leading-tight mb-6">
              Engineering the Future of Resilient Precast Infrastructure
            </h1>

            <p className="text-sm sm:text-base text-blue-100/90 max-w-3xl font-normal leading-relaxed mb-8">
              Total Tech is a nationwide structural engineering and specialty precast technology firm. We provide licensed engineering calculations, LOD 400 BIM detailing, erection plans, and advanced digital twin workflows for major transportation, municipal, and commercial developments.
            </p>

            {/* Key Stats Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/10">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-4 sm:p-5 backdrop-blur-xs">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-mono mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-blue-200/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Heritage Section */}
        <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-10 bg-[#FFFFFF]">
          <div className="w-full max-w-[1400px] mx-auto">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0055FF] uppercase tracking-wider">
                    <Compass className="w-4 h-4" />
                    <span>Our Purpose & Heritage</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight leading-tight">
                    Where Structural Rigor Meets Modern Digital Detailing
                  </h2>
                  <p className="text-sm sm:text-base text-[#0051c5] leading-relaxed">
                    Founded with a singular commitment to engineering excellence, Total Tech solves the most demanding precast and structural challenges. From complex curved bridge girders and segmental viaducts to seismic-resistant parking structures and architectural envelopes, our team delivers complete build-ready solutions.
                  </p>
                  <p className="text-sm sm:text-base text-[#0051c5] leading-relaxed">
                    We partner closely with precasters, general contractors, DOT authorities, and structural consultants across North America, ensuring structural safety, code compliance, and fabrication economy on every project.
                  </p>

                  <div className="pt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Licensed PE / SE Across All 50 States",
                        "PCI Certified Producer Partner Workflows",
                        "Full LOD 400 BIM with Bar-Bending Schedules",
                        "Accelerated Bridge Construction (ABC) Expertise",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs font-bold text-[#0335ab]">
                          <CheckCircle2 className="w-4 h-4 text-[#0055FF] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="bg-[#F8FBFE] border border-[#D2E4F9] p-6 sm:p-8 relative">
                    <div className="w-12 h-1 bg-[#0055FF] mb-6" />
                    <h3 className="text-lg sm:text-xl font-black text-[#0335ab] mb-4">
                      Our Guiding Principles
                    </h3>
                    <div className="space-y-4">
                      {coreValues.map((val, idx) => (
                        <div key={idx} className="flex items-start gap-3.5 pb-4 border-b border-[#E2E8F0] last:border-0 last:pb-0">
                          <div className="p-2 bg-[#F0F6FE] border border-[#D2E4F9] text-[#0055FF] shrink-0 mt-0.5">
                            <val.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[#0335ab] mb-1">
                              {val.title}
                            </h4>
                            <p className="text-xs text-[#0051c5] leading-relaxed">
                              {val.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Company Milestones Timeline */}
        <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-10 bg-[#F8FBFE] border-y border-[#E2E8F0]">
          <div className="w-full max-w-[1400px] mx-auto">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0055FF] uppercase tracking-wider mb-2">
                  <Award className="w-4 h-4" />
                  <span>Company Milestones</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0335ab] tracking-tight">
                  A Legacy of Technical Innovation
                </h2>
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {milestones.map((m, idx) => (
                  <div key={idx} className="bg-white border border-[#D2E4F9] p-6 flex flex-col justify-between card-hover-lift">
                    <div>
                      <span className="inline-block px-3 py-1 bg-[#F0F6FE] border border-[#0055FF]/30 text-[#0055FF] font-mono font-black text-sm mb-4">
                        {m.year}
                      </span>
                      <h3 className="text-base font-black text-[#0335ab] mb-2 leading-snug">
                        {m.title}
                      </h3>
                      <p className="text-xs text-[#0051c5] leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-[#F0F4F9] flex items-center gap-1.5 text-xs font-bold text-[#0055FF]">
                      <span>Milestone Verified</span>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div> */}
            </ScrollReveal>
          </div>
        </section>

        {/* Executive Leadership Team */}
        {/* <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-10 bg-[#FFFFFF]">
          <div className="w-full max-w-[1400px] mx-auto">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-10 border-b border-[#E2E8F0]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0055FF] uppercase tracking-wider mb-2">
                    <Users className="w-4 h-4" />
                    <span>Executive Leadership</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
                    Technical Leadership &amp; Engineering Principals
                  </h2>
                </div>
                <p className="text-sm text-[#0051c5] font-medium max-w-md">
                  Licensed Professional Engineers guiding our multidisciplinary teams in precast calculations, parametric BIM, and project delivery.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {leadership.map((leader, idx) => (
                  <div key={idx} className="bg-[#F8FBFE] border border-[#D2E4F9] p-6 flex flex-col justify-between card-hover-lift">
                    <div>
                      <div className="w-10 h-10 bg-[#0055FF] text-white flex items-center justify-center font-black text-sm mb-4">
                        {leader.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </div>
                      <span className="inline-block px-2 py-0.5 bg-white border border-[#D2E4F9] text-[#0055FF] text-[10px] font-mono font-bold uppercase mb-2">
                        {leader.specialty}
                      </span>
                      <h3 className="text-base font-black text-[#0335ab] mb-1">
                        {leader.name}
                      </h3>
                      <p className="text-xs font-bold text-[#0051c5] mb-3">
                        {leader.role}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {leader.bio}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E2E8F0]">
                      <span className="text-[11px] font-bold text-[#0055FF] uppercase tracking-wider">
                        Licensed PE / Board Member
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section> */}

        {/* Corporate Consultation CTA */}
        <section className="w-full bg-[#00236E] text-white py-14 px-4 sm:px-6 lg:px-8 xl:px-10 border-t-2 border-[#0055FF]">
          <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="px-2.5 py-1 bg-white/10 text-blue-200 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                Work With Our Engineering Team
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                Have a Complex Structural or Precast Project?
              </h2>
              <p className="text-sm text-blue-100 max-w-xl">
                Consult with our licensed engineers for pre-bid feasibility, superstructure calculations, LOD 400 BIM modeling, and constructability reviews.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0055FF] hover:bg-blue-600 text-white text-xs font-black uppercase tracking-wider transition-all shadow-md"
              >
                <span>Request Project Review</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>(772) 297-0700</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
