"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
  Lock,
  Eye,
  Database,
  UserCheck,
  FileText,
  Mail,
  Printer,
  Calendar,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";

export default function PrivacyPolicyPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", title: "1. Overview & Policy Scope" },
    { id: "collection", title: "2. Information We Collect" },
    { id: "usage", title: "3. How We Use Your Information" },
    { id: "security", title: "4. Data Security & Storage Standards" },
    { id: "sharing", title: "5. Third-Party Disclosures & Cloud Services" },
    { id: "cookies", title: "6. Cookies & Tracking Technologies" },
    { id: "rights", title: "7. Your Privacy Rights (GDPR & CCPA)" },
    { id: "retention", title: "8. Data Retention & Document Archives" },
    { id: "contact-dpo", title: "9. Privacy Officer & Contact" },
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
              <span className="text-[#0055FF] font-bold">Privacy Policy</span>
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
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Data Protection &amp; Confidentiality</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-3">
              Corporate Privacy Policy
            </h1>
            <div className="flex items-center gap-3 text-xs text-blue-200">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Last Updated: January 2026
              </span>
              <span>•</span>
              <span>Total Tech Systems Corporation</span>
            </div>
          </div>
        </section>

        {/* Policy Content + Navigation */}
        <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-10 bg-[#FFFFFF]">
          <div className="w-full max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Sticky Sidebar Navigation */}
              <div className="lg:col-span-4 sticky top-24 space-y-4">
                <div className="bg-[#F8FBFE] border border-[#D2E4F9] p-5 shadow-xs">
                  <div className="w-8 h-1 bg-[#0055FF] mb-3" />
                  <h3 className="text-xs font-black text-[#0335ab] uppercase tracking-wider mb-4">
                    Sections
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
                    Privacy Inquiries
                  </h4>
                  <p className="text-xs text-blue-100 leading-relaxed mb-4">
                    Have questions regarding your project data, telemetry security, or GDPR/CCPA rights? Contact our Data Privacy Officer.
                  </p>
                  <a
                    href="mailto:privacy@totaltech.com"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#60A5FA] hover:text-white transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>privacy@totaltech.com</span>
                  </a>
                </div>
              </div>

              {/* Main Document Body */}
              <div className="lg:col-span-8 space-y-10 text-[#00236E] leading-relaxed">
                
                {/* 1. Overview */}
                <div id="overview" className="scroll-mt-28 p-6 bg-white border border-[#E2E8F0] shadow-xs">
                  <h2 className="text-lg font-black text-[#0335ab] mb-3 flex items-center gap-2">
                    <span className="text-[#0055FF]">1.</span> Overview &amp; Policy Scope
                  </h2>
                  <p className="text-xs sm:text-sm text-[#0051c5] mb-3">
                    Total Tech Systems Corporation (&ldquo;Total Tech,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy, confidentiality, and security of our clients, engineering partners, and website visitors. This Privacy Policy details how we collect, store, process, and protect your personal and proprietary technical information across our web applications and engineering portal.
                  </p>
                  <p className="text-xs sm:text-sm text-[#0051c5]">
                    This policy applies to information collected through our website, consultation request forms, project upload repositories, and direct client correspondence.
                  </p>
                </div>

                {/* 2. Collection */}
                <div id="collection" className="scroll-mt-28 p-6 bg-white border border-[#E2E8F0] shadow-xs">
                  <h2 className="text-lg font-black text-[#0335ab] mb-3 flex items-center gap-2">
                    <span className="text-[#0055FF]">2.</span> Information We Collect
                  </h2>
                  <div className="space-y-3 text-xs sm:text-sm text-[#0051c5]">
                    <p>
                      <strong>A. Business &amp; Contact Details:</strong> When requesting a project consultation, submitting an RFP, or contacting our offices, we may collect your name, business email, corporate phone number, company name, office address, and project role.
                    </p>
                    <p>
                      <strong>B. Technical &amp; Project Files:</strong> Any CAD files, 3D BIM models (IFC/Revit), architectural sketches, geotechnical reports, and structural specifications submitted for calculation or detailing reviews.
                    </p>
                    <p>
                      <strong>C. Telemetry &amp; Log Data:</strong> We may record browser type, IP address, device telemetry, pages viewed, and session duration to ensure security monitoring and optimal site performance.
                    </p>
                  </div>
                </div>

                {/* 3. Usage */}
                <div id="usage" className="scroll-mt-28 p-6 bg-white border border-[#E2E8F0] shadow-xs">
                  <h2 className="text-lg font-black text-[#0335ab] mb-3 flex items-center gap-2">
                    <span className="text-[#0055FF]">3.</span> How We Use Your Information
                  </h2>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#0051c5]">
                    <li>To prepare detailed structural engineering proposals, cost estimates, and project schedules.</li>
                    <li>To execute engineering calculations, peer reviews, shop detailing, and PE/SE sealed submittals.</li>
                    <li>To maintain direct project management communication with general contractors, precasters, and agency authorities.</li>
                    <li>To ensure website integrity, prevent unauthorized access, and satisfy legal audit compliance.</li>
                  </ul>
                </div>

                {/* 4. Security */}
                <div id="security" className="scroll-mt-28 p-6 bg-white border border-[#E2E8F0] shadow-xs">
                  <h2 className="text-lg font-black text-[#0335ab] mb-3 flex items-center gap-2">
                    <span className="text-[#0055FF]">4.</span> Data Security &amp; Storage Standards
                  </h2>
                  <p className="text-xs sm:text-sm text-[#0051c5] mb-3">
                    We employ industry-standard technical and organizational security safeguards to protect project drawings and personal data against unauthorized disclosure, alteration, or destruction. All web communications utilize TLS 1.3 encryption, and internal project databases are secured with multi-factor authentication and strict role-based access control.
                  </p>
                </div>

                {/* 5. Sharing */}
                <div id="sharing" className="scroll-mt-28 p-6 bg-white border border-[#E2E8F0] shadow-xs">
                  <h2 className="text-lg font-black text-[#0335ab] mb-3 flex items-center gap-2">
                    <span className="text-[#0055FF]">5.</span> Third-Party Disclosures &amp; Cloud Services
                  </h2>
                  <div className="p-4 bg-[#F0F6FE] border-l-4 border-[#0055FF] mb-3 text-xs font-bold text-[#0335ab]">
                    TOTAL TECH DOES NOT SELL, RENT, OR MONETIZE ANY CLIENT OR CONTACT INFORMATION UNDER ANY CIRCUMSTANCES.
                  </div>
                  <p className="text-xs sm:text-sm text-[#0051c5]">
                    Information is shared only with trusted cloud hosting providers and certified engineering sub-consultants operating under strict non-disclosure agreements, or where required by regulatory authorities or court subpoenas.
                  </p>
                </div>

                {/* 6. Cookies */}
                <div id="cookies" className="scroll-mt-28 p-6 bg-white border border-[#E2E8F0] shadow-xs">
                  <h2 className="text-lg font-black text-[#0335ab] mb-3 flex items-center gap-2">
                    <span className="text-[#0055FF]">6.</span> Cookies &amp; Tracking Technologies
                  </h2>
                  <p className="text-xs sm:text-sm text-[#0051c5]">
                    Our website utilizes essential technical cookies to remember preferences, facilitate site navigation, and analyze aggregated traffic metrics. You may adjust your browser settings to decline non-essential cookies at any time without restricting core website functionality.
                  </p>
                </div>

                {/* 7. Rights */}
                <div id="rights" className="scroll-mt-28 p-6 bg-white border border-[#E2E8F0] shadow-xs">
                  <h2 className="text-lg font-black text-[#0335ab] mb-3 flex items-center gap-2">
                    <span className="text-[#0055FF]">7.</span> Your Privacy Rights (GDPR &amp; CCPA)
                  </h2>
                  <p className="text-xs sm:text-sm text-[#0051c5] mb-3">
                    Depending on your jurisdiction, you may have the right to request access to the personal data we hold about you, request corrections or updates, or request the deletion of your personal records from our marketing databases.
                  </p>
                  <p className="text-xs sm:text-sm text-[#0051c5]">
                    To exercise any of these rights, please email us at <a href="mailto:privacy@totaltech.com" className="text-[#0055FF] font-bold hover:underline">privacy@totaltech.com</a>.
                  </p>
                </div>

                {/* 8. Retention */}
                <div id="retention" className="scroll-mt-28 p-6 bg-white border border-[#E2E8F0] shadow-xs">
                  <h2 className="text-lg font-black text-[#0335ab] mb-3 flex items-center gap-2">
                    <span className="text-[#0055FF]">8.</span> Data Retention &amp; Document Archives
                  </h2>
                  <p className="text-xs sm:text-sm text-[#0051c5]">
                    Engineering calculation records and stamped shop drawings are retained in secure corporate archives in accordance with statutory state engineering board requirements and professional liability limitation statutes (typically 7–15 years from project completion).
                  </p>
                </div>

                {/* 9. Contact */}
                <div id="contact-dpo" className="scroll-mt-28 p-6 bg-[#F8FBFE] border border-[#D2E4F9] shadow-xs">
                  <h2 className="text-lg font-black text-[#0335ab] mb-3 flex items-center gap-2">
                    <span className="text-[#0055FF]">9.</span> Privacy Officer &amp; Contact
                  </h2>
                  <p className="text-xs sm:text-sm text-[#0051c5] mb-4">
                    For any questions regarding our Privacy Policy or data handling protocols, contact:
                  </p>
                  <div className="bg-white border border-[#E2E8F0] p-4 text-xs font-medium space-y-1">
                    <div className="font-bold text-[#0335ab]">Total Tech Systems Corporation</div>
                    <div className="text-slate-600">Attn: Data Privacy Officer</div>
                    <div className="text-slate-600">850 NW Federal Hwy, Stuart, FL 34994</div>
                    <div className="text-[#0055FF] font-bold">Email: privacy@totaltech.com</div>
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
