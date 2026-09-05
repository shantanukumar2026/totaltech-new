"use client";

import React, { useState, useEffect } from "react";
import { Search, X, ArrowRight } from "lucide-react";

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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    if (onSearchSubmit) {
      onSearchSubmit(query);
    } else {
      alert(`Searching Total Tech for: "${query}"`);
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-[#0335ab]/20 backdrop-blur-sm animate-in fade-in duration-150 font-sans select-none"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white border border-[#D2E4F9] shadow-2xl shadow-blue-900/15 overflow-hidden rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Clean NVIDIA-Inspired Search Form */}
        <form onSubmit={handleSubmit} className="flex items-center px-5 py-4 bg-white">
          <Search className="w-5 h-5 text-[#0062FF] mr-3.5 shrink-0" />
          <input
            type="text"
            placeholder="Search products, technologies, solutions, or company info..."
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
            type="submit"
            className="px-4 py-2 bg-[#0062FF] hover:bg-[#0050d4] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer rounded-none shadow-xs shrink-0"
          >
            <span>Search</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="ml-2.5 px-2.5 py-2 text-xs font-mono text-[#0051c5] hover:text-[#0335ab] hover:bg-[#F0F6FE] border border-[#D2E4F9] transition-colors cursor-pointer rounded-none"
          >
            ESC
          </button>
        </form>
      </div>
    </div>
  );
}
