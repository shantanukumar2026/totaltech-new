"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchModal from "@/components/SearchModal";
import HeroSlider from "@/components/HeroSlider";
import CardShowcase from "@/components/CardShowcase";
import OurMarkets from "@/components/home/OurMarkets";
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

import ScrollReveal from "@/components/ScrollReveal";

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

      <ScrollReveal>
        <CardShowcase />
      </ScrollReveal>

      <ScrollReveal>
        <OurMarkets />
      </ScrollReveal>

      <ScrollReveal>
        <SectionWhoWeAre />
      </ScrollReveal>

      <ScrollReveal>
        <SectionPrecastSpecialtyEngineering />
      </ScrollReveal>

      <ScrollReveal>
        <SectionPrecastMarkets />
      </ScrollReveal>

      <ScrollReveal>
        <SectionBimDigitalModeling />
      </ScrollReveal>

      <ScrollReveal>
        <SectionConstructabilityErection />
      </ScrollReveal>

      <ScrollReveal>
        <SectionPrecastDigitalMarketing />
      </ScrollReveal>

      <ScrollReveal>
        <SectionPrecastStandards />
      </ScrollReveal>

      <ScrollReveal>
        <SectionFeaturedProjects />
      </ScrollReveal>

      <ScrollReveal>
        <CorporateContactSection />
      </ScrollReveal>

      <Footer />
    </main>
  );
}
