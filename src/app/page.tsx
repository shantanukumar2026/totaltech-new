"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchModal from "@/components/SearchModal";
import HeroSlider from "@/components/HeroSlider";
import CardShowcase from "@/components/CardShowcase";

// 10 Distinct Structured Precast Engineering & Digital Sections
import SectionWhoWeAre from "@/components/home/SectionWhoWeAre";
import SectionPrecastSpecialtyEngineering from "@/components/home/SectionPrecastSpecialtyEngineering";
import SectionPrecastMarkets from "@/components/home/SectionPrecastMarkets";
import SectionBimDigitalModeling from "@/components/home/SectionBimDigitalModeling";
import SectionConstructabilityErection from "@/components/home/SectionConstructabilityErection";
import SectionPrecastDigitalMarketing from "@/components/home/SectionPrecastDigitalMarketing";
import SectionPrecastStandards from "@/components/home/SectionPrecastStandards";
import SectionFeaturedProjects from "@/components/home/SectionFeaturedProjects";

import CorporateContactSection from "@/components/CorporateContactSection";
import Footer from "@/components/Footer";
import OurMarkets from "@/components/home/OurMarkets";

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <main className="min-h-screen techno-blue-mesh text-[#0335ab] flex flex-col font-sans selection:bg-[#0085f4] selection:text-white">
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      <Navbar onOpenSearch={() => setSearchOpen(true)} />

      {/* 01 | Hero Slider */}
      <div className="w-full pt-[66px]">
        <HeroSlider />
      </div>

      {/* 02 | Technology & Solutions Showcase (Untouched) */}
      <CardShowcase />

      {/* 03 | Who We Are */}
      <OurMarkets />



      <SectionWhoWeAre />




      {/* 04 | Specialty Precast Engineering & Detailing */}
      <SectionPrecastSpecialtyEngineering />



      {/* 05 | Precast Infrastructure & Building Markets */}
      <SectionPrecastMarkets />

      {/* 06 | BIM & 3D Precast Modeling */}
      <SectionBimDigitalModeling />

      {/* 07 | Constructability & Field Erection */}
      <SectionConstructabilityErection />

      {/* 08 | Precast Digital Marketing & B2B Growth */}
      <SectionPrecastDigitalMarketing />

      {/* 09 | Standards, Codes & Quality Guidelines */}
      <SectionPrecastStandards />

      {/* 10 | Featured Precast Projects & Portfolio */}
      <SectionFeaturedProjects />

      {/* Corporate Locations */}
      <CorporateContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
