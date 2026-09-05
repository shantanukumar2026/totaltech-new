"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchModal from "@/components/SearchModal";
import HeroSlider from "@/components/HeroSlider";
import CardShowcase from "@/components/CardShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <main className="min-h-screen techno-blue-mesh text-[#0335ab] flex flex-col font-sans selection:bg-[#0085f4] selection:text-white">
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      <Navbar onOpenSearch={() => setSearchOpen(true)} />

      <div className="w-full pt-[66px]">
        <HeroSlider />
      </div>

      <CardShowcase />

      {/* <footer className="mt-auto bg-white border-t border-[#D2E4F9] py-8 px-4 sm:px-6 lg:px-8 text-center text-xs text-[#0051c5]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-semibold text-[#0335ab]">
            © {new Date().getFullYear()} Total Tech. All Rights Reserved.
          </p>

          <div className="text-xs text-[#0051c5] font-medium">
            <span>
              <a href="" className="hover:text-[#0055FF] transition-colors">Privacy</a>
            </span>
            <span> | </span>
            <span>
              <a href="" className="hover:text-[#0055FF] transition-colors">Terms</a>
            </span>
            <span> | </span>
            <span>
              <a href="" className="hover:text-[#0055FF] transition-colors">Security</a>
            </span>
            <span> | </span>
            <span>
              <a href="" className="hover:text-[#0055FF] transition-colors">Contact</a>
            </span>
          </div>
          <div className="text-xs text-[#0051c5] font-medium">
            <span>
              <a href="" className="hover:text-[#0055FF] transition-colors">Privacy</a>
            </span>
            <span> | </span>
            <span>
              <a href="" className="hover:text-[#0055FF] transition-colors">Terms</a>
            </span>
            <span> | </span>
            <span>
              <a href="" className="hover:text-[#0055FF] transition-colors">Security</a>
            </span>
            <span> | </span>
            <span>
              <a href="" className="hover:text-[#0055FF] transition-colors">Contact</a>
            </span>
          </div>
        </div>
      </footer> */}

      <Footer />




    </main>
  );
}
