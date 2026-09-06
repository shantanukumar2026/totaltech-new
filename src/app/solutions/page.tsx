import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, ChevronRight, Layers, Sparkles } from "lucide-react";
import { SOLUTIONS } from "@/data/solutions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Technology Solutions Catalog | Total Tech",
  description:
    "Explore our complete suite of industrial manufacturing, information architecture, cloud systems, and edge automation solutions.",
};

export default function SolutionsCatalogPage() {
  const allSolutions = Object.values(SOLUTIONS);

  const categories = Array.from(
    new Set(allSolutions.map((item) => item.category))
  );

  return (
    <div className="min-h-screen bg-[#F8FBFE] text-[#0f172a] flex flex-col font-sans selection:bg-[#0055ff] selection:text-white">
      <Navbar />

      <main className="flex-1 w-full pt-[66px]">
        {/* Breadcrumb Navigation */}
        <div className="w-full bg-[#F0F6FE] border-b border-[#D2E4F9]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3.5 flex items-center gap-2 text-xs font-semibold text-[#0051c5]">
            <Link href="/" className="hover:text-[#0055ff] transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-[#0055ff] font-bold">Solutions</span>
          </div>
        </div>

        {/* Hero Header */}
        <section className="relative w-full bg-gradient-to-br from-[#00236e] via-[#021844] to-[#010e2b] text-white py-16 lg:py-20 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 187, 255, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 187, 255, 0.15) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 border border-white/20 text-[#00bbff] text-xs font-bold uppercase tracking-wider rounded-sm mb-4">
              <Sparkles size={14} className="text-[#00bbff]" />
              <span>Technology Portfolio</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5 max-w-3xl">
              Engineered Technology Solutions
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">
              Discover modular industrial casting, high-throughput cloud telemetry, micro-sensor diagnostics, and human-centered digital architectures.
            </p>
          </div>
        </section>

        {/* Solutions Grouped by Category */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 space-y-16">
          {categories.map((cat) => {
            const categoryItems = allSolutions.filter(
              (item) => item.category === cat
            );

            return (
              <section key={cat} className="space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b border-[#D2E4F9]">
                  <div className="w-2.5 h-6 bg-[#0055ff] rounded-xs" />
                  <h2 className="text-xl sm:text-2xl font-black text-[#021844] tracking-tight">
                    {cat}
                  </h2>
                  <span className="ml-auto text-xs font-bold px-2.5 py-1 bg-[#F0F6FE] border border-[#D2E4F9] text-[#0055ff] rounded-sm">
                    {categoryItems.length} {categoryItems.length === 1 ? "Solution" : "Solutions"}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryItems.map((solution) => (
                    <Link
                      key={solution.slug}
                      href={`/solutions/${solution.slug}`}
                      className="bg-white border border-[#D2E4F9] hover:border-[#0055ff] rounded-sm overflow-hidden shadow-xs hover:shadow-xl hover:shadow-blue-900/10 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="relative w-full aspect-[16/10] bg-[#E8F2FD] overflow-hidden">
                          {solution.mediaType === "video" ? (
                            <video
                              src={solution.mediaUrl}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <Image
                              src={solution.mediaUrl}
                              alt={solution.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          )}
                          <div className="absolute top-3 left-3 px-2 py-0.5 bg-white/95 text-[#0055ff] text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm">
                            {solution.category}
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-base font-extrabold text-[#021844] group-hover:text-[#0055ff] transition-colors leading-snug mb-2.5">
                            {solution.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-3">
                            {solution.shortDesc}
                          </p>
                        </div>
                      </div>

                      <div className="px-6 pb-6 pt-1 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0055ff] group-hover:translate-x-1 transition-transform">
                          <span>View Solution</span>
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Global CTA */}
        <section className="w-full py-14 px-6 sm:px-8 lg:px-12 bg-gradient-to-r from-[#0055ff] via-[#0044cc] to-[#00236e] text-white">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                Need Custom Technology Architecture?
              </h2>
              <p className="text-sm sm:text-base text-blue-100 font-medium max-w-xl">
                Our specialists can help configure custom hardware sensors, tailored cloud pipelines, or factory-scale precast setups.
              </p>
            </div>
            <a
              href="mailto:contact@totaltech.com"
              className="px-8 py-4 bg-white hover:bg-slate-100 text-[#0055ff] font-extrabold text-sm rounded-sm shadow-xl hover:shadow-2xl transition-all shrink-0"
            >
              Contact Engineering Team
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
