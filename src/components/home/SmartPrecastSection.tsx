"use client";

import React from "react";
import { Sparkles, Activity, Bot, Cpu, ArrowRight } from "lucide-react";

export default function SmartPrecastSection() {
  const CAPABILITIES = [
    {
      icon: Bot,
      tag: "VISION & INSPECTION",
      title: "Computer Vision Rebar & Embed Audit",
      desc: "Automated visual scanning verifying rebar clearance, embedment coordinates, and dimensional tolerances before concrete pouring.",
      points: ["Real-time tolerance check per ACI 117", "Automatic missing embed alerts", "Digital quality documentation"],
    },
    {
      icon: Activity,
      tag: "IOT SENSORS",
      title: "Concrete Maturity & Curing Telemetry",
      desc: "Embedded wireless temperature and maturity loggers tracking in-situ concrete strength gain in real time to accelerate form stripping cycles.",
      points: ["ASTM C1074 maturity curve matching", "Automated optimal demolding notifications", "Thermal gradient crack prevention"],
    },
    {
      icon: Cpu,
      tag: "CNC AUTOMATION",
      title: "Direct-to-Machine CNC Fabrication",
      desc: "Seamless export from LOD 400 BIM models directly into automated mesh welding lines, robotic rebar benders, and laser mold projection systems.",
      points: ["BVBS / Unitechnik data format export", "Zero manual data re-entry errors", "Automated piece mark tracking"],
    },
    {
      icon: Sparkles,
      tag: "DIGITAL TWIN",
      title: "Plant Simulation & Bed Optimization",
      desc: "Digital twin modeling of precasting beds to maximize linear foot utilization, balance curing schedules, and predict plant delivery capacity.",
      points: ["Bed layout packing algorithms", "Production scheduling optimization", "Dynamic yard inventory tracking"],
    },
  ];

  return (
    <section id="smart-precast" className="w-full bg-[#F8FBFE] py-16 sm:py-20 border-t border-[#E2E8F0] select-none">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 mb-12 border-b border-[#E2E8F0]">
          <div className="max-w-3xl">
            <div className="w-12 h-1 bg-[#0055FF] mb-3" />
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-white border border-[#D2E4F9] text-[#0055FF] text-[10px] font-mono font-bold uppercase tracking-wider mb-2 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0055FF]" />
              <span>07 — SMART PRECAST / DIGITAL MANUFACTURING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0335ab] tracking-tight">
              Smart Precast & Factory Automation
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0051c5] font-normal leading-relaxed max-w-md">
            Integrating IoT sensors, machine vision, and direct CNC interfaces to transform traditional precasting into high-precision smart manufacturing.
          </p>
        </div>

        {/* 2x2 Smart Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] p-6 sm:p-8 hover:border-[#0055FF] shadow-xs hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 bg-[#F0F6FE] border border-[#D2E4F9] flex items-center justify-center text-[#0055FF] group-hover:bg-[#0055FF] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 bg-[#F0F6FE] text-[#0055FF] text-[10px] font-mono font-bold uppercase border border-[#D2E4F9]">
                      {cap.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-[#0335ab] mb-2 group-hover:text-[#0055FF] transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#0051c5] leading-relaxed mb-5 font-normal">
                    {cap.desc}
                  </p>

                  <div className="space-y-1.5 pt-4 border-t border-[#F0F4F9]">
                    {cap.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs font-semibold text-[#0335ab]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0055FF]" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-[#F0F4F9] flex items-center justify-between text-[11px] font-mono font-bold text-slate-400 group-hover:text-[#0055FF] transition-colors">
                  <span>SYSTEM 0{idx + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
