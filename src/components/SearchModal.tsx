"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Search, X, ArrowRight, FileText, Layers } from "lucide-react";
import { SOLUTIONS } from "@/data/solutions";
import { BLOG_POSTS } from "@/data/blogs";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearchSubmit?: (query: string) => void;
}

export default function SearchModal({ isOpen, onClose, onSearchSubmit }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { solutions: [], blogs: [] };

    const matchingSolutions = Object.values(SOLUTIONS).filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.shortDesc.toLowerCase().includes(q)
    );

    const matchingBlogs = BLOG_POSTS.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q)
    );

    return { solutions: matchingSolutions.slice(0, 4), blogs: matchingBlogs.slice(0, 4) };
  }, [query]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(query);
    }
  };

  const totalResults = results.solutions.length + results.blogs.length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-[#0335ab]/30 backdrop-blur-sm animate-in fade-in duration-150 font-sans select-none"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white border border-[#D2E4F9] shadow-2xl shadow-blue-900/20 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit} className="flex items-center px-5 py-4 bg-white border-b border-[#E2E8F0]">
          <Search className="w-5 h-5 text-[#0055FF] mr-3.5 shrink-0" />
          <input
            type="text"
            placeholder="Search solutions, engineering systems, blogs, or specs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-[#0335ab] placeholder-[#8C9BAE] focus:outline-none text-[15px] font-medium"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-[#8C9BAE] hover:text-[#0335ab] p-1.5 mr-2 cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-2.5 py-1.5 text-xs font-mono text-[#0051c5] hover:text-[#0335ab] hover:bg-[#F0F6FE] border border-[#D2E4F9] transition-colors cursor-pointer"
          >
            ESC
          </button>
        </form>

        {query.trim() !== "" && (
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4 bg-[#F8FBFE]">
            {totalResults === 0 ? (
              <div className="py-8 text-center text-xs text-[#0051c5]">
                No matching results found for <span className="font-bold text-[#0335ab]">"{query}"</span>.
              </div>
            ) : (
              <>
                {results.solutions.length > 0 && (
                  <div>
                    <div className="text-[11px] font-mono font-bold text-[#0055FF] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Solutions & Systems</span>
                    </div>
                    <div className="space-y-1.5">
                      {results.solutions.map((sol) => (
                        <Link
                          key={sol.slug}
                          href={`/solutions/${sol.slug}`}
                          onClick={onClose}
                          className="flex items-center justify-between p-3 bg-white border border-[#E2E8F0] hover:border-[#0055FF] transition-all group"
                        >
                          <div>
                            <div className="text-xs font-bold text-[#0335ab] group-hover:text-[#0055FF]">
                              {sol.title}
                            </div>
                            <div className="text-[11px] text-[#0051c5] line-clamp-1 mt-0.5 font-normal">
                              {sol.shortDesc}
                            </div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-[#0055FF] group-hover:translate-x-1 transition-transform shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {results.blogs.length > 0 && (
                  <div>
                    <div className="text-[11px] font-mono font-bold text-[#0055FF] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" />
                      <span>Technical Articles & Insights</span>
                    </div>
                    <div className="space-y-1.5">
                      {results.blogs.map((blog) => (
                        <Link
                          key={blog.slug}
                          href={`/blog/${blog.slug}`}
                          onClick={onClose}
                          className="flex items-center justify-between p-3 bg-white border border-[#E2E8F0] hover:border-[#0055FF] transition-all group"
                        >
                          <div>
                            <div className="text-xs font-bold text-[#0335ab] group-hover:text-[#0055FF]">
                              {blog.title}
                            </div>
                            <div className="text-[11px] text-[#0051c5] line-clamp-1 mt-0.5 font-normal">
                              {blog.excerpt}
                            </div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-[#0055FF] group-hover:translate-x-1 transition-transform shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
