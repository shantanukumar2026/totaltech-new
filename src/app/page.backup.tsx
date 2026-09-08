"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchModal from "@/components/SearchModal";
import HeroSlider from "@/components/HeroSlider";
import CardShowcase from "@/components/CardShowcase";
import CorporateContactSection from "@/components/CorporateContactSection";
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
      <CorporateContactSection />
      <Footer />
    </main>
  );
}
