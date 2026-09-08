"use client";

import React from "react";
import { TrendingUp, CheckCircle2, ArrowRight, Layers, Target, ShieldCheck } from "lucide-react";

export default function WhyPrecastDigitalSection() {
  const JOURNEY = [
    {
      icon: Layers,
      title: "3D Visual Assets",
      desc: "We turn 2D drawings and precast product specs into high-resolution 3D models, exploded views, and technical graphics.",
    },
    {
      icon: Target,
      title: "Targeted Digital Reach",
      desc: "We position your precast brand in front of general contractors, structural estimators, and DOT bidding teams actively searching for suppliers.",
    },
    {
      icon: TrendingUp,
      title: "Increased Bid Wins",
      desc: "With compelling 3D visuals, professional submittal decks, and strong digital visibility, precast producers convert more inquiries into contracts.",
    },
  ];

  const PILLARS = [
    {
      title: "Precast Concrete Domain Knowledge",
      desc: "Deep fluency in precast components: prestressed beams, double tees, hollowcore slabs, sandwich wall panels, and connection mechanics.",
    },
    {
      title: "Complete 3D + Marketing Capability",
      desc: "No need to manage separate CAD detailers and generic digital agencies. We handle technical 3D modeling and B2B growth together.",
    },
    {
      title: "Fast-Track Project Delivery",
      desc: "Rapid turnaround on 3D renderings, component graphics, and digital marketing setups to meet urgent bidding deadlines.",
    },
    {
      title: "Measurable Commercial Impact",
      desc: "Clear tracking of contractor inquiries, project lead volume, and regional market reach directly from your target service areas.",
    },
  ];

  return (
    <section className="w-full bg-[#F8FBFE] py-16 sm:py-24 border-t border-[#E2E8F0] select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="w-12 h-1 bg-[#0055FF] mb-4" />
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#D2E4F9] text-[#0055FF] text-[11px] font-mono font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span>PRECAST GROWTH STRATEGY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight leading-tight mb-3">
            A Dedicated 3D Design & Digital Marketing Partner
          </h2>
          <p className="text-xs sm:text-sm text-[#0051c5] font-normal leading-relaxed">
            Helping precast manufacturers modernize their presentation assets, communicate technical precision, and expand their project pipeline.
          </p>
        </div>

        {/* 3 Growth Cards (No 1,2,3 counting) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {JOURNEY.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] p-6 sm:p-8 hover:border-[#0055FF] shadow-xs hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 bg-[#F0F6FE] border border-[#D2E4F9] flex items-center justify-center text-[#0055FF] mb-6 group-hover:bg-[#0055FF] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-black text-[#0335ab] mb-2 group-hover:text-[#0055FF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#0051c5] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-[#F0F4F9] flex items-center justify-between text-[11px] font-mono font-semibold text-[#0055FF]">
                  <span>GROWTH CAPABILITY</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Value Pillars Bar */}
        <div className="bg-white border border-[#D2E4F9] p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 shadow-xs">
          {PILLARS.map((p, pIdx) => (
            <div key={pIdx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-black text-[#0335ab] uppercase tracking-wide">
                <CheckCircle2 className="w-4 h-4 text-[#0055FF] shrink-0" />
                <span>{p.title}</span>
              </div>
              <p className="text-xs text-[#0051c5] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
