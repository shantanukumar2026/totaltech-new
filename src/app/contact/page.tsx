"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchModal from "@/components/SearchModal";
import Footer from "@/components/Footer";
import CorporateContactSection from "@/components/CorporateContactSection";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ContactPage() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#0335ab] flex flex-col font-sans selection:bg-[#0085f4] selection:text-white">
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <Navbar onOpenSearch={() => setSearchOpen(true)} />

      {/* Main Content Area */}
      <div className="flex-1 w-full pt-[66px]">
        {/* Breadcrumbs Bar */}
        <div className="w-full bg-[#F0F6FE] border-b border-[#D2E4F9]">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-3.5 flex items-center gap-2 text-xs font-semibold text-[#0051c5]">
            <Link href="/" className="hover:text-[#0055FF] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0055FF] font-bold">Locations</span>
          </div>
        </div>

        {/* Exact Locations Section */}
        <CorporateContactSection />
      </div>

      <Footer />
    </main>
  );
}
