import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Shield, Zap } from "lucide-react";
import { SOLUTIONS } from "@/data/solutions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(SOLUTIONS).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = SOLUTIONS[slug];

  if (!item) {
    return {
      title: "Solution Not Found | Total Tech",
    };
  }

  return {
    title: `${item.title} | Total Tech Solutions`,
    description: item.shortDesc,
  };
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = SOLUTIONS[slug];

  if (!item) {
    notFound();
  }

  const relatedSolutions = Object.values(SOLUTIONS)
    .filter((s) => s.slug !== item.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F8FBFE] text-[#0335ab] flex flex-col font-sans selection:bg-[#0085f4] selection:text-white">
      <Navbar />

      <main className="flex-1 w-full pt-[66px]">
        <div className="w-full bg-[#F0F6FE] border-b border-[#D2E4F9]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3.5 flex items-center gap-2 text-xs font-semibold text-[#0051c5]">
            <Link href="/" className="hover:text-[#005dff] transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span>Solutions</span>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-[#005dff] font-bold truncate">
              {item.title}
            </span>
          </div>
        </div>

        <section className="relative w-full bg-gradient-to-br from-[#00236e] via-[#021844] to-[#010e2b] text-white py-14 lg:py-20 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 187, 255, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 187, 255, 0.15) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-[#00bbff] text-xs font-bold uppercase tracking-wider rounded-sm w-fit mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00bbff]" />
                <span>{item.category}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-5">
                {item.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
                {item.shortDesc}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#overview"
                  className="px-7 py-3.5 bg-[#005dff] hover:bg-[#0085f4] text-white font-bold text-sm tracking-wide rounded-sm shadow-[0_4px_18px_rgba(0,93,255,0.4)] transition-all"
                >
                  Explore Overview
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-bold text-sm tracking-wide rounded-sm border border-white/20 transition-all"
                >
                  <ArrowLeft size={16} />
                  <span>Back to Home</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative w-full h-[280px] sm:h-[360px] lg:h-[400px] rounded-lg overflow-hidden border border-white/20 shadow-2xl bg-slate-900 flex items-center justify-center">
              {item.mediaType === "video" ? (
                <video
                  src={item.mediaUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={item.mediaUrl}
                  alt={item.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              )}
            </div>
          </div>
        </section>

        <section id="overview" className="w-full py-16 px-6 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-8">
              <div className="w-12 h-1 bg-[#005dff] mb-4" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#021844] tracking-tight mb-6">
                Technical Overview & Capabilities
              </h2>
              <p className="text-base sm:text-lg text-[#1e3a6a] leading-relaxed mb-10 font-normal">
                {item.fullDesc}
              </p>

              <h3 className="text-xl font-bold text-[#021844] mb-6">
                Key Highlights & Architectural Advantages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {item.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-[#F8FAFD] border border-[#D2E4F9] rounded-sm hover:border-[#005dff] transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <CheckCircle2 size={18} className="text-[#005dff] shrink-0" />
                      <h4 className="text-sm font-bold text-[#021844]">
                        {highlight.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#214b8a] leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="p-6 bg-[#F0F6FE] border border-[#D2E4F9] rounded-sm">
                <h3 className="text-base font-bold text-[#021844] uppercase tracking-wider mb-4 pb-2 border-b border-[#D2E4F9] flex items-center gap-2">
                  <Shield size={18} className="text-[#005dff]" />
                  <span>System Specifications</span>
                </h3>
                <div className="space-y-3.5">
                  {item.specifications.map((spec, i) => (
                    <div key={i} className="flex flex-col text-xs">
                      <span className="font-semibold text-slate-500 uppercase tracking-wide">
                        {spec.label}
                      </span>
                      <span className="font-bold text-[#021844] text-sm mt-0.5">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-white border border-[#D2E4F9] rounded-sm shadow-xs">
                <h3 className="text-base font-bold text-[#021844] uppercase tracking-wider mb-4 pb-2 border-b border-[#D2E4F9] flex items-center gap-2">
                  <Zap size={18} className="text-[#005dff]" />
                  <span>Target Applications</span>
                </h3>
                <ul className="space-y-2.5">
                  {item.applications.map((app, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs sm:text-sm text-[#214b8a]"
                    >
                      <ArrowRight size={14} className="text-[#005dff] mt-0.5 shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 px-6 sm:px-8 lg:px-12 bg-[#F8FAFD] border-t border-[#D2E4F9]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-bold text-[#005dff] uppercase tracking-wider">
                  Explore More
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#021844] tracking-tight mt-1">
                  Related Technology Solutions
                </h2>
              </div>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#005dff] hover:text-[#0085f4] transition-colors"
              >
                <span>View Full Showcase</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedSolutions.map((related) => (
                <Link
                  key={related.slug}
                  href={`/solutions/${related.slug}`}
                  className="bg-white border border-[#D2E4F9] hover:border-[#005dff] rounded-sm overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative w-full aspect-[16/10] bg-[#E8F2FD] overflow-hidden">
                      {related.mediaType === "video" ? (
                        <video
                          src={related.mediaUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <Image
                          src={related.mediaUrl}
                          alt={related.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                      <div className="absolute top-3 left-3 px-2 py-0.5 bg-white/95 text-[#005dff] text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm">
                        {related.category}
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-base font-bold text-[#021844] group-hover:text-[#005dff] transition-colors leading-snug mb-2">
                        {related.title}
                      </h3>
                      <p className="text-xs text-[#214b8a] leading-relaxed line-clamp-2">
                        {related.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2 flex items-center gap-1.5 text-xs font-bold text-[#005dff]">
                    <span>Learn More</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-14 px-6 sm:px-8 lg:px-12 bg-gradient-to-r from-[#005dff] via-[#0085f4] to-[#00aaff] text-white">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                Ready to Implement {item.title}?
              </h2>
              <p className="text-sm sm:text-base text-blue-100 font-medium max-w-xl">
                Connect with our technical solution architects to evaluate specifications, request on-site trials, and optimize production workflows.
              </p>
            </div>
            <a
              href="mailto:info@totaltech.com"
              className="px-8 py-4 bg-white hover:bg-slate-100 text-[#005dff] font-extrabold text-sm rounded-sm shadow-xl transition-all shrink-0"
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
