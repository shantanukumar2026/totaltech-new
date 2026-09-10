"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Briefcase,
  Users,
  Award,
  CheckCircle2,
  MapPin,
  Clock,
  ArrowRight,
  Building2,
  GraduationCap,
  HeartHandshake,
  DollarSign,
  Send,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import ScrollReveal from "@/components/ScrollReveal";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
}

export default function CareersPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState("ALL");
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  const perks = [
    {
      icon: DollarSign,
      title: "Top-Tier Compensation & Bonuses",
      desc: "Highly competitive base salaries, annual performance profit-sharing bonuses, and 401(k) matching up to 6%.",
    },
    {
      icon: GraduationCap,
      title: "PE / SE Licensure & Education",
      desc: "100% employer sponsorship for PE/SE exam preparations, state licensing fees, and ongoing continuing education (CEUs).",
    },
    {
      icon: HeartHandshake,
      title: "Comprehensive Health & Wellness",
      desc: "Premium medical, dental, and vision plans with generous employer HSA contributions and paid parental leave.",
    },
    {
      icon: Building2,
      title: "Modern Hybrid Work Model",
      desc: "Flexible hybrid schedules with modern high-performance workstations and multi-monitor CAD/BIM setups.",
    },
  ];

  const jobs: JobOpening[] = [
    {
      id: "sr-precast-se",
      title: "Senior Precast Structural Engineer (PE / SE)",
      department: "Structural Engineering",
      location: "Stuart, FL / Hybrid",
      type: "Full-Time",
      experience: "7+ Years",
      description: "Lead calculations for complex precast concrete structures, post-tensioned bridge superstructures, and highway viaducts under AASHTO and PCI codes.",
      responsibilities: [
        "Perform primary structural calculations for prestressed girders, box culverts, and segmental bridge elements.",
        "Oversee junior engineers and CAD detailing teams in submittal preparation.",
        "Directly coordinate with State DOT engineers, precasters, and general contractors.",
      ],
    },
    {
      id: "bim-lod400-lead",
      title: "LOD 400 BIM / Tekla Structures Detailing Lead",
      department: "Digital Delivery & BIM",
      location: "New York, NY / Remote",
      type: "Full-Time",
      experience: "5+ Years",
      description: "Drive parametric 3D/4D precast detailing, reinforcement bar-bending schedules, and direct-to-fabrication CNC outputs using Tekla and Revit.",
      responsibilities: [
        "Develop high-precision LOD 400 models of precast components and connection embeds.",
        "Perform clash detection against architectural, MEP, and foundation models.",
        "Generate automated shop piece drawings and rebar fabrication schedules.",
      ],
    },
    {
      id: "bridge-fea-specialist",
      title: "Computational Bridge & FEA Specialist",
      department: "Research & Analytics",
      location: "Detroit, MI / Remote",
      type: "Full-Time",
      experience: "4+ Years",
      description: "Execute non-linear finite element analysis (FEA), dynamic time-history simulations, and seismic connection evaluations for accelerated bridge construction (ABC).",
      responsibilities: [
        "Model 3D finite element stress distributions under dynamic live and seismic loads.",
        "Evaluate thermal cracking potential and creep/shrinkage losses in high-strength concrete.",
        "Prepare technical white papers and client calculation binders.",
      ],
    },
    {
      id: "precast-qa-inspector",
      title: "Precast Plant QA/QC & Technical Specialist",
      department: "Quality Assurance",
      location: "Seattle, WA / On-Site",
      type: "Full-Time",
      experience: "3+ Years",
      description: "Conduct fabrication quality audits, tolerance verifications, and concrete batch testing oversight across regional partner precast plants.",
      responsibilities: [
        "Inspect pre-pour rebar placement, prestressing tendon tensioning, and embed alignments.",
        "Review post-pour tolerances, surface finishes, and cylinder break test reports.",
        "Liaise with DOT agency inspectors to ensure full code compliance.",
      ],
    },
  ];

  const departments = ["ALL", "Structural Engineering", "Digital Delivery & BIM", "Research & Analytics", "Quality Assurance"];

  const filteredJobs = jobs.filter(
    (j) => selectedDept === "ALL" || j.department === selectedDept
  );

  return (
    <div className="min-h-screen w-full bg-[#FFFFFF] text-[#0335ab] flex flex-col font-sans selection:bg-[#0085f4] selection:text-white">
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <Navbar onOpenSearch={() => setSearchOpen(true)} />

      <main className="flex-1 w-full pt-[66px]">
        {/* Breadcrumbs */}
        <div className="w-full bg-[#F0F6FE] border-b border-[#D2E4F9]">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-3 flex items-center gap-2 text-xs font-semibold text-[#0051c5]">
            <Link href="/" className="hover:text-[#0055FF] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#0055FF] font-bold">Careers &amp; Opportunities</span>
          </div>
        </div>

        {/* Masthead */}
        <section className="w-full bg-gradient-to-b from-[#00236E] to-[#00174A] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-10 border-b-2 border-[#0055FF] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,133,244,0.18),transparent_50%)] pointer-events-none" />

          <div className="w-full max-w-[1400px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0055FF]/20 border border-[#0085f4]/40 text-[#60A5FA] text-xs font-mono font-bold uppercase tracking-widest mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Join Our Engineering Team</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight max-w-3xl leading-tight mb-6">
              Build Iconic Infrastructure with Industry Leaders
            </h1>

            <p className="text-sm sm:text-base text-blue-100/90 max-w-3xl font-normal leading-relaxed">
              At Total Tech, our engineers, BIM modelers, and researchers solve complex structural challenges every day. We empower you with state-of-the-art computational tools, direct mentorship from recognized PEs, and career pathways with real ownership.
            </p>
          </div>
        </section>

        {/* Benefits & Culture */}
        <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-10 bg-[#FFFFFF]">
          <div className="w-full max-w-[1400px] mx-auto">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0055FF] uppercase tracking-wider mb-2">
                  <Award className="w-4 h-4" />
                  <span>Why Total Tech</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0335ab] tracking-tight">
                  Comprehensive Benefits &amp; Career Growth
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {perks.map((perk, idx) => (
                  <div key={idx} className="bg-[#F8FBFE] border border-[#D2E4F9] p-6 flex flex-col justify-between card-hover-lift">
                    <div>
                      <div className="p-2.5 bg-white border border-[#D2E4F9] text-[#0055FF] w-fit mb-4">
                        <perk.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-black text-[#0335ab] mb-2 leading-snug">
                        {perk.title}
                      </h3>
                      <p className="text-xs text-[#0051c5] leading-relaxed">
                        {perk.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-10 bg-[#F8FBFE] border-y border-[#E2E8F0]">
          <div className="w-full max-w-[1400px] mx-auto">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-8 border-b border-[#E2E8F0]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0055FF] uppercase tracking-wider mb-2">
                    <Users className="w-4 h-4" />
                    <span>Current Openings</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
                    Explore Opportunities Across Our Hubs
                  </h2>
                </div>
                <p className="text-sm text-[#0051c5] font-medium max-w-md">
                  We are actively recruiting licensed structural engineers, Tekla BIM detailers, and FEA specialists across North America.
                </p>
              </div>

              {/* Department Filters */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                      selectedDept === dept
                        ? "bg-[#0055FF] text-white border-[#0055FF] shadow-xs"
                        : "bg-white text-[#0335ab] border-[#D2E4F9] hover:border-[#0055FF]"
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>

              {/* Job Listings */}
              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white border border-[#D2E4F9] hover:border-[#0055FF] p-6 shadow-xs transition-all card-hover-lift"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-0.5 bg-[#F0F6FE] border border-[#0055FF]/30 text-[#0055FF] text-[10px] font-mono font-bold uppercase">
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                            <MapPin className="w-3.5 h-3.5 text-[#0055FF]" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                            <Clock className="w-3.5 h-3.5 text-[#0055FF]" />
                            {job.type} • {job.experience}
                          </span>
                        </div>

                        <h3 className="text-lg font-black text-[#0335ab]">
                          {job.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#0051c5] max-w-3xl leading-relaxed">
                          {job.description}
                        </p>
                      </div>

                      <div className="shrink-0 flex items-center gap-3">
                        <Link
                          href={`mailto:careers@totaltech.com?subject=Application for ${encodeURIComponent(job.title)}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0055FF] hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                        >
                          <span>Apply Now</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* General Application Banner */}
        <section className="w-full bg-[#00236E] text-white py-14 px-4 sm:px-6 lg:px-8 xl:px-10 border-t-2 border-[#0055FF]">
          <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="px-2.5 py-1 bg-white/10 text-blue-200 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                General Inquiries
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                Don&apos;t See Your Exact Role?
              </h2>
              <p className="text-sm text-blue-100 max-w-xl">
                We are always eager to connect with exceptional structural engineers, precast detailers, and project managers. Send us your CV and portfolio.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="mailto:careers@totaltech.com?subject=General Engineering Application"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0055FF] hover:bg-blue-600 text-white text-xs font-black uppercase tracking-wider transition-all shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Submit General Resume</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
