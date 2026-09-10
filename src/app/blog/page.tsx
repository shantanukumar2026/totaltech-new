"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight, Calendar, Clock, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/data/blogs";

const CATEGORIES = [
  "ALL",
  "Bridge Engineering",
  "Material Science",
  "3D BIM & Detailing",
  "Highway Viaducts",
  "Digital Solutions",
  "Drainage & Substructure",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = BLOG_POSTS[0];
  const recentPosts = BLOG_POSTS.slice(0, 4);

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat =
      selectedCategory === "ALL" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen w-full bg-[#F8FBFE] text-[#0335ab] flex flex-col font-sans select-none">
      <Navbar />

      <main className="flex-1 w-full pt-[66px]">
        {/* Breadcrumb Navigation */}
        <div className="w-full bg-[#F0F6FE] border-b border-[#D2E4F9]">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-2 text-xs font-semibold text-[#0051c5]">
            <Link href="/" className="hover:text-[#0055FF] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 --text-main" />
            <span className="text-[#0055FF] font-bold">Articles &amp; Insights</span>
          </div>
        </div>

        {/* Masthead Header */}
        <section className="w-full bg-[#00236E] text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-b-2 border-[#0055FF]">
          <div className="w-full max-w-[1600px] mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white mb-2">
              Articles &amp; Engineering Insights
            </h1>
            <p className="text-blue-100 text-xs sm:text-sm max-w-2xl font-normal leading-relaxed">
              Technical articles, precast engineering methodologies, 3D detailing best practices, and civil infrastructure updates.
            </p>
          </div>
        </section>

        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

          {/* Featured Article Spotlight (Full Width) */}
          <div className="mb-6">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block bg-white border border-[#D2E4F9] hover:border-[#0055FF] shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                {/* Visual Left (7 cols) */}
                <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto overflow-hidden bg-[#F0F6FE]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 z-20">
                    <span className="px-2.5 py-1 bg-white/95 text-[#0055FF] text-[10px] font-mono font-bold uppercase shadow-sm border border-blue-100">
                      FEATURED • {featuredPost.category}
                    </span>
                  </div>
                </div>

                {/* Content Right (5 cols) */}
                <div className="lg:col-span-5 p-5 sm:p-7 lg:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs --text-main font-medium mb-2.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#0055FF]" />
                        {featuredPost.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#0055FF]" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-black text-[#0335ab] group-hover:text-[#0055FF] transition-colors leading-tight mb-3">
                      {featuredPost.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#0051c5] font-normal leading-relaxed mb-4">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                    <span className="text-xs font-bold --text-main">
                      By {featuredPost.author}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0055FF] group-hover:translate-x-1 transition-transform">
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 text-[#0055FF]" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Filter and Search Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 mb-6 border-b border-[#E2E8F0]">
            <div className="flex flex-wrap items-center gap-1.5">
              {CATEGORIES.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer border ${selectedCategory === cat
                    ? "bg-[#0055FF] text-white border-[#0055FF] shadow-xs"
                    : "bg-white text-[#0335ab] border-[#D2E4F9] hover:border-[#0055FF]"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64 shrink-0">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1 text-xs bg-white border border-[#D2E4F9] focus:border-[#0055FF] focus:outline-none text-[#0335ab] placeholder-slate-400"
              />
              <Search className="w-3.5 h-3.5 --text-main absolute left-2.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* List Layout + Clean Sidebar (8 cols + 4 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

            {/* Articles List (8 cols) */}
            <div className="lg:col-span-8 space-y-3.5">
              {filteredPosts.length === 0 ? (
                <div className="p-8 text-center bg-white border border-[#E2E8F0]">
                  <p className="text-sm font-bold --text-main">
                    No articles found matching your search.
                  </p>
                </div>
              ) : (
                filteredPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group block bg-white border border-[#E2E8F0] hover:border-[#0055FF] shadow-xs hover:shadow-md transition-all duration-200 p-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">

                      {/* Thumbnail */}
                      <div className="sm:col-span-4 relative aspect-[16/10] overflow-hidden bg-[#F0F6FE] border border-[#E2E8F0] shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="px-2 py-0.5 bg-white/95 text-[#0055FF] text-[9px] font-mono font-bold uppercase shadow-xs border border-blue-100">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="sm:col-span-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-[11px] font-mono --text-main mb-1">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>

                          <h3 className="text-sm sm:text-base font-extrabold text-[#0335ab] group-hover:text-[#0055FF] transition-colors leading-snug mb-1.5">
                            {post.title}
                          </h3>

                          <p className="text-xs text-[#0051c5] font-normal leading-relaxed line-clamp-2 mb-2">
                            {post.excerpt}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-1.5 border-t border-[#F0F4F9] text-xs font-bold">
                          <span className="text-[11px] --text-main font-semibold">
                            By {post.author}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[#0055FF] group-hover:translate-x-1 transition-transform text-xs">
                            <span>Read Article</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>

                    </div>
                  </Link>
                ))
              )}
            </div>

            {/* Clean Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-4">

              {/* Recent Articles */}
              <div className="bg-white border border-[#D2E4F9] p-5 shadow-xs">
                <div className="w-8 h-1 bg-[#0055FF] mb-2.5" />
                <h3 className="text-xs font-black text-[#0335ab] uppercase tracking-wide mb-3">
                  Recent Publications
                </h3>
                <div className="space-y-3">
                  {recentPosts.map((rPost) => (
                    <Link
                      key={rPost.id}
                      href={`/blog/${rPost.slug}`}
                      className="group block pb-2.5 border-b border-[#F0F4F9] last:border-0 last:pb-0"
                    >
                      <div className="text-[10px] font-mono --text-main mb-0.5">
                        {rPost.date} • {rPost.category}
                      </div>
                      <h4 className="text-xs font-bold text-[#0335ab] group-hover:text-[#0055FF] transition-colors leading-snug">
                        {rPost.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Engineering Inquiries Card */}
              <div className="bg-[#00236E] text-white p-5 shadow-xs">
                <div className="text-[10px] font-mono font-bold text-blue-300 uppercase tracking-wider mb-1">
                  Technical Support
                </div>
                <h3 className="text-sm font-black text-white mb-2">
                  Engineering Inquiries
                </h3>
                <p className="text-xs text-blue-100 leading-relaxed mb-4">
                  Connect with our structural team for precast calculations, 3D BIM shop detailing, or project submittal assistance.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-2 bg-[#0055FF] hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
