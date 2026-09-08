"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Layers,
  Palette,
  Megaphone,
  ArrowRight,
  CheckCircle2,
  Building2,
  Monitor,
  Search
} from "lucide-react";

export default function PrecastDesignDigitalSection() {
  const [activeTab, setActiveTab] = useState<"design" | "marketing" | "branding">("design");

  const TABS = [
    {
      id: "design",
      label: "3D PRECAST MODELING & GRAPHICS",
      icon: Layers,
      title: "3D Precast CAD, Renders & Technical Visuals",
      tag: "3D VISUALIZATION",
      image: "/precast_technologies_458x288.png",
      desc: "Creating high-resolution 3D precast models, structural renders, and technical graphics that help precast manufacturers showcase product details, connection assemblies, and modular framing.",
      features: [
        "3D Precast Component & Connection Modeling",
        "High-Resolution Architectural Renders & Catalogs",
        "Assembly Sequence & Erection Visualizations",
        "Submittal Presentation Graphics for Bidding",
      ],
      highlight: "Over 500+ precast structural components and details modeled for North American producers.",
    },
    {
      id: "marketing",
      label: "DIGITAL MARKETING FOR PRECAST",
      icon: Megaphone,
      title: "Targeted Digital Marketing for Concrete Producers",
      tag: "B2B GROWTH",
      image: "/Concreatetechnologies.jpg",
      desc: "Specialized B2B digital marketing campaigns connecting precast concrete manufacturers directly with general contractors, structural engineers, and DOT project estimators actively bidding projects.",
      features: [
        "Precast & Heavy Construction Search Engine Optimization (SEO)",
        "Targeted Pay-Per-Click (PPC) Commercial Inquiries",
        "Technical Project Case Studies & Promotion",
        "Direct Outreach to General Contractors & DOT Bidders",
      ],
      highlight: "Position your precast plant in front of active commercial and infrastructure project buyers.",
    },
    {
      id: "branding",
      label: "BRAND IDENTITY & WEB SYSTEMS",
      icon: Palette,
      title: "Corporate Websites & Digital Product Catalogs",
      tag: "WEB & BRANDING",
      image: "/concreate_technologies_458x288.png",
      desc: "Modern corporate website design, interactive online product spec sheets, and custom client presentation templates built specifically for the concrete and construction industry.",
      features: [
        "Modern Corporate Website Design & Fast Development",
        "Interactive Digital Product Catalogs with Spec Downloads",
        "Custom Quote Request & Project Spec Submission Forms",
        "Professional Submittal & Proposal Deck Templates",
      ],
      highlight: "Stand out in competitive commercial and municipal bid selections with executive-level branding.",
    },
  ];

  const current = TABS.find((t) => t.id === activeTab) || TABS[0];

  return (
    <section className="w-full bg-[#F8FBFE] py-16 sm:py-24 border-t border-[#E2E8F0] select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="w-12 h-1 bg-[#0055FF] mb-4" />
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#D2E4F9] text-[#0055FF] text-[11px] font-mono font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span>PRECAST 3D DESIGN & DIGITAL SOLUTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight leading-tight mb-3">
            Elevating Precast Concrete Through 3D Design & Digital Growth
          </h2>
          <p className="text-xs sm:text-sm text-[#0051c5] font-normal leading-relaxed">
            We combine 3D structural precast modeling and architectural graphics with specialized B2B digital marketing strategies, helping precast producers showcase capabilities and win high-value contracts.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-1.5 bg-white border border-[#D2E4F9] mb-8 shadow-xs">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center justify-center gap-2.5 py-3.5 px-4 text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#0055FF] text-white shadow-xs"
                    : "bg-transparent text-[#0335ab] hover:bg-[#F0F6FE]"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-[#0055FF]"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panel */}
        <div className="bg-white border border-[#E2E8F0] p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-start">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#F0F6FE] text-[#0055FF] text-[10px] font-mono font-bold uppercase border border-[#D2E4F9] mb-3 w-fit">
                {current.tag}
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#0335ab] tracking-tight mb-4">
                {current.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#0051c5] leading-relaxed mb-6 font-normal">
                {current.desc}
              </p>

              {/* 4 Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {current.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 p-3 bg-[#F8FBFE] border border-[#E2E8F0]">
                    <CheckCircle2 className="w-4 h-4 text-[#0055FF] shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-[#0335ab]">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* Highlight callout */}
              <div className="p-3.5 bg-gradient-to-r from-[#F0F6FE] to-[#F8FBFE] border-l-4 border-[#0055FF] text-xs font-medium text-[#0335ab]">
                {current.highlight}
              </div>
            </div>

            {/* Right Graphic Preview (5 cols) with User's Real Images */}
            <div className="lg:col-span-5 bg-white border border-[#D2E4F9] overflow-hidden shadow-xs">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F0F6FE]">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-white/95 text-[#0055FF] text-[10px] font-mono font-bold uppercase shadow-sm border border-blue-100">
                    {current.tag}
                  </span>
                </div>
              </div>
              
              <div className="p-5 bg-[#F8FBFE] border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="text-xs font-bold text-[#0335ab]">
                  Precast Solutions by Total Tech
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0055FF]">
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
