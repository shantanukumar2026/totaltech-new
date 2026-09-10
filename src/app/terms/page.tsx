"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  FileText,
  Shield,
  Scale,
  Lock,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  Printer,
  Calendar,
  Building2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";

export default function TermsPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("acceptance");

  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "services", title: "2. Scope of Engineering Services" },
    { id: "drawings-ip", title: "3. Intellectual Property & BIM Data" },
    { id: "submittals", title: "4. Shop Drawings & Submittal Approval" },
    { id: "client-resp", title: "5. Client & Contractor Obligations" },
    { id: "liability", title: "6. Limitation of Liability & Warranties" },
    { id: "confidentiality", title: "7. Proprietary Data & NDA" },
    { id: "payment", title: "8. Invoicing & Payment Terms" },
    { id: "governing-law", title: "9. Governing Law & Dispute Resolution" },
    { id: "contact-legal", title: "10. Legal Notice & Contact" },
  ];

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FFFFFF] text-[#0335ab] flex flex-col font-sans selection:bg-[#0085f4] selection:text-white">
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <Navbar onOpenSearch={() => setSearchOpen(true)} />

      <main className="flex-1 w-full pt-[66px]">
        {/* Breadcrumbs */}
        <div className="w-full bg-[#F0F6FE] border-b border-[#D2E4F9]">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-3 flex items-center justify-between text-xs font-semibold text-[#0051c5]">
            <div className="flex items-center gap-2">
              <Link href="/" className="hover:text-[#0055FF] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#0055FF] font-bold">Terms &amp; Conditions</span>
            </div>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0055FF] hover:text-[#0335ab] cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print Document</span>
            </button>
          </div>
        </div>

        {/* Masthead */}
        <section className="w-full bg-gradient-to-b from-[#00236E] to-[#00174A] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-10 border-b-2 border-[#0055FF]">
          <div className="w-full max-w-[1400px] mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0055FF]/20 border border-[#0085f4]/40 text-[#60A5FA] text-xs font-mono font-bold uppercase tracking-widest mb-3">
              <Scale className="w-3.5 h-3.5" />
              <span>Legal Agreements &amp; Governance</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-3">
              Terms &amp; Conditions of Service
            </h1>
            <div className="flex items-center gap-3 text-xs text-blue-200">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Effective Date: January 1, 2026
              </span>
              <span>•</span>
              <span>Total Tech Systems Corporation</span>
            </div>
          </div>
        </section>

        {/* Legal Document Layout (Sidebar + Content) */}
        <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-10 bg-[#FFFFFF]">
          <div className="w-full max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Sticky Sidebar Navigation */}
              <div className="lg:col-span-4 sticky top-24 space-y-4">
                <div className="bg-[#F8FBFE] border border-[#D2E4F9] p-5 shadow-xs">
                  <div className="w-8 h-1 bg-[#0055FF] mb-3" />
                  <h3 className="text-xs font-black text-[#0335ab] uppercase tracking-wider mb-4">
                    Table of Contents
                  </h3>
                  <nav className="space-y-1">
                    {sections.map((sec) => (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        onClick={() => setActiveSection(sec.id)}
                        className={`block text-xs font-semibold py-2 px-3 transition-colors ${
                          activeSection === sec.id
                            ? "bg-[#0055FF] text-white font-bold"
                            : "text-[#0051c5] hover:bg-[#F0F6FE] hover:text-[#0055FF]"
                        }`}
                      >
                        {sec.title}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="bg-[#00236E] text-white p-5 border border-[#0055FF]/40 shadow-xs">
                  <h4 className="text-xs font-black text-white uppercase tracking-wider mb-2">
                    Questions on Contracts?
                  </h4>
                  <p className="text-xs text-blue-100 leading-relaxed mb-4">
                    For master service agreements (MSA), indemnification riders, or procurement compliance, reach our corporate legal counsel.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#60A5FA] hover:text-white transition-colors"
                  >
                    <span>Contact Legal Department</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Main Document Content */}
              <div className="lg:col-span-8 space-y-10 text-[#00236E] leading-relaxed">
                
                {/* 1. Acceptance */}
                <div id="acceptance" className="scroll-mt-28 p-6 bg-white border border-[#E2E8F0] shadow-xs">
                  <h2 className="text-lg font-black text-[#0335ab] mb-3 flex items-center gap-2">
                    <span className="text-[#0055FF]">1.</span> Acceptance of Terms
                  </h2>
                  <p className="text-xs sm:text-sm text-[#0051c5] mb-3">
                    By accessing the Total Tech Systems Corporation (&ldquo;Total Tech,&rdquo; &ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) website, engaging our engineering services, submitting project drawings, or executing an associated Work Order or Proposal, you (&ldquo;Client,&rdquo; &ldquo;Contractor,&rdquo; or &ldquo;User&rdquo;) agree to be legally bound by these Terms &amp; Conditions.
                  </p>
                  <p className="text-xs sm:text-sm text-[#0051c5]">
                    If you are entering into this agreement on behalf of a corporation, municipal entity, or general contractor, you represent that you possess the full legal authority to bind such entity.
                  </p>
                </div>

                {/* 2. Scope */}
                <div id="services" className="scroll-mt-28 p-6 bg-white border border-[#E2E8F0] shadow-xs">
                  <h2 className="text-lg font-black text-[#0335ab] mb-3 flex items-center gap-2">
                    <span className="text-[#0055FF]">2.</span> Scope of Engineering Services
                  </h2>
                  <p className="text-xs sm:text-sm text-[#0051c5] mb-3">
                    Total Tech provides specialty precast structural calculations, finite element analysis (FEA), 3D/4D BIM parametric modeling (LOD 400), bar-bending schedules, and erection engineering plans. All engineering deliverables are prepared in accordance with the specific State Department of Transportation (DOT) specifications, ACI 318/319 standards, PCI Design Handbook (9th Ed.), and AASHTO LRFD specifications as explicitly designated in the executed Proposal.
                  </p>
                  <p className="text-xs sm:text-sm text-[#0051c5]">
                    Any scope additions, field changes, out-of-sequence revisions, or site condition adjustments requested outside the signed Proposal will be billed under our standard hourly engineering schedule.
                  </p>
                </div>

                {/* 3. IP */}
                <div id="drawings-ip" className="scroll-mt-28 p-6 bg-white border border-[#E2E8F0] shadow-xs">
                  <h2 className="text-lg font-black text-[#0335ab] mb-3 flex items-center gap-2">
                    <span className="text-[#0055FF]">3.</span> Intellectual Property &amp; BIM Data
                  </h2>
                  <p className="text-xs sm:text-sm text-[#0051c5] mb-3">
                    All engineering calculation sheets, mathematical algorithms, parametric BIM templates, software tools, connection details, and proprietary methodologies developed by Total Tech remain the sole intellectual property of Total Tech Systems Corporation.
                  </p>
                  <p className="text-xs sm:text-sm text-[#0051c5]">
                    Upon full payment of all contracted invoices, the Client is granted a non-exclusive, perpetual, project-specific license to use the final stamped drawings and BIM model deliverables exclusively for the construction, maintenance, and operation of the designated project site.
                  </p>
                </div>

                {/* 4. Submittals */}
                <div id="submittals" className="scroll-mt-28 p-6 bg-white border border-[#E2E8F0] shadow-xs">
                  <h2 className="text-lg font-black text-[#0335ab] mb-3 flex items-center gap-2">
                    <span className="text-[#0055FF]">4.</span> Shop Drawings &amp; Submittal Approval
                  </h2>
                  <p className="text-xs sm:text-sm text-[#0051c5] mb-3">
                    Precast shop drawings and erection plans generated by Total Tech must be submitted to the Engineer of Record (EOR) or owner agency for review and approval prior to concrete casting, form fabrication, or component erection. Total Tech is not liable for fabrication commenced before receiving written EOR approval or official DOT permits.
                  </p>
                </div>

                {/* 5. Obligations */}
                <div id="client-resp" className="scroll-mt-28 p-6 bg-white border border-[#E2E8F0] shadow-xs">
                  <h2 className="text-lg font-black text-[#0335ab] mb-3 flex items-center gap-2">
                    <span className="text-[#0055FF]">5.</span> Client &amp; Contractor Obligations
                  </h2>
                  <p className="text-xs sm:text-sm text-[#0051c5] mb-3">
                    The Client is solely responsible for verifying all field dimensions, geotechnical soil bearing capacities, boundary surveys, utility clearances, and site access constraints. Any discrepancies between contract bid documents and actual field conditions must be promptly reported in writing to Total Tech prior to engineering issuance.
                  </p>
                </div>

                {/* 6. Liability */}
                <div id="liability" className="scroll-mt-28 p-6 bg-white border border-[#E2E8F0] shadow-xs">
                  <h2 className="text-lg font-black text-[#0335ab] mb-3 flex items-center gap-2">
                    <span className="text-[#0055FF]">6.</span> Limitation of Liability &amp; Warranties
                  </h2>
                  <div className="p-4 bg-[#F0F6FE] border-l-4 border-[#0055FF] mb-3">
                    <p className="text-xs font-bold text-[#0335ab]">
                      TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, TOTAL TECH&apos;S TOTAL CUMULATIVE LIABILITY FOR ANY CLAIMS, DAMAGES, LOSSES, OR DEFICIENCIES ARISING OUT OF OR RELATED TO ITS SERVICES SHALL BE STRICTLY LIMITED TO THE TOTAL FEES ACTUALLY RECEIVED BY TOTAL TECH UNDER THE SPECIFIC CONTRACTED WORK ORDER.
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-[#0051c5]">
                    In no event shall Total Tech be liable for indirect, incidental, punitive, or consequential damages, including loss of profit, crane standby charges, liquidated contractor delays, or production downtime.
                  </p>
                </div>

                {/* 7. Confidentiality */}
                <div id="confidentiality" className="scroll-mt-28 p-6 bg-white border border-[#E2E8F0] shadow-xs">
                  <h2 className="text-lg font-black text-[#0335ab] mb-3 flex items-center gap-2">
                    <span className="text-[#0055FF]">7.</span> Proprietary Data &amp; NDA
                  </h2>
                  <p className="text-xs sm:text-sm text-[#0051c5]">
                    Both parties agree to hold all proprietary project drawings, financial quotes, client lists, and technical algorithms in strict confidence, exercising the highest standard of care to prevent unauthorized dissemination.
                  </p>
                </div>

                {/* 8. Invoicing */}
                <div id="payment" className="scroll-mt-28 p-6 bg-white border border-[#E2E8F0] shadow-xs">
                  <h2 className="text-lg font-black text-[#0335ab] mb-3 flex items-center gap-2">
                    <span className="text-[#0055FF]">8.</span> Invoicing &amp; Payment Terms
                  </h2>
                  <p className="text-xs sm:text-sm text-[#0051c5]">
                    Standard invoices are issued monthly or upon milestone submittal completion and are due net thirty (30) days from invoice date. Overdue amounts are subject to a late service charge of 1.5% per month or the highest rate permitted by law.
                  </p>
                </div>

                {/* 9. Law */}
                <div id="governing-law" className="scroll-mt-28 p-6 bg-white border border-[#E2E8F0] shadow-xs">
                  <h2 className="text-lg font-black text-[#0335ab] mb-3 flex items-center gap-2">
                    <span className="text-[#0055FF]">9.</span> Governing Law &amp; Dispute Resolution
                  </h2>
                  <p className="text-xs sm:text-sm text-[#0051c5]">
                    These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law principles. Any legal action or proceeding arising under this Agreement shall be brought exclusively in the state or federal courts located in Martin County, Florida.
                  </p>
                </div>

                {/* 10. Contact */}
                <div id="contact-legal" className="scroll-mt-28 p-6 bg-[#F8FBFE] border border-[#D2E4F9] shadow-xs">
                  <h2 className="text-lg font-black text-[#0335ab] mb-3 flex items-center gap-2">
                    <span className="text-[#0055FF]">10.</span> Legal Notice &amp; Contact
                  </h2>
                  <p className="text-xs sm:text-sm text-[#0051c5] mb-4">
                    Official legal notices, contract revisions, or compliance inquiries may be directed to our corporate legal team:
                  </p>
                  <div className="bg-white border border-[#E2E8F0] p-4 text-xs font-medium space-y-1">
                    <div className="font-bold text-[#0335ab]">Total Tech Systems Corporation</div>
                    <div className="text-slate-600">Attn: Office of the General Counsel</div>
                    <div className="text-slate-600">850 NW Federal Hwy, Stuart, FL 34994</div>
                    <div className="text-[#0055FF] font-bold">Email: legal@totaltech.com</div>
                    <div className="text-[#0055FF] font-bold">Phone: (772) 297-0700</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
