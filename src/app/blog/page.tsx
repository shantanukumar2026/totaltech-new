import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog | Total Tech",
  description: "Read the latest articles and technology updates from Total Tech.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#F8FBFE] text-[#0335ab] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 w-full pt-[66px]">
        {/* Breadcrumb Navigation */}
        <div className="w-full bg-[#F0F6FE] border-b border-[#D2E4F9]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-3.5 flex items-center gap-2 text-[13px] font-semibold text-[#0051c5]">
            <Link href="/" className="hover:text-[#0055FF] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0055FF] font-bold">Blog</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="w-full bg-[#00236E] text-white py-14 px-6 text-center border-b-2 border-[#0055FF]">
          <div className="max-w-[800px] mx-auto">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Our Blog &amp; Insights
            </h1>
            <p className="text-[#D8E6F8] text-sm sm:text-base leading-relaxed">
              Articles and updates on industrial automation, cloud infrastructure, and modern technology.
            </p>
          </div>
        </section>

        {/* Cards Grid */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {BLOG_POSTS.map((card) => (
              <Link
                key={card.id}
                href={`/blog/${card.slug}`}
                className="bg-white border border-[#E2E8F0] hover:border-[#0055FF] shadow-xs hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden"
              >
                <div>
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F0F7FF]">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute bottom-3 left-4 z-20 flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-white/95 text-[#0055FF] text-[10px] font-mono font-bold tracking-wider uppercase shadow-md border border-blue-100">
                        {card.category}
                      </span>
                      <span className="px-2.5 py-1 bg-[#0055FF] text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-md">
                        {card.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-[15px] sm:text-base font-extrabold text-[#0335ab] leading-snug group-hover:text-[#0055FF] transition-colors">
                      {card.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#0051c5] mt-3 leading-relaxed font-normal">
                      {card.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-1">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0055FF] group-hover:translate-x-1 transition-transform">
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0055FF]" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
