"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    id: "slide-1",
    image: "/crausal-1.png",
    alt: "Complete Technology for a Smarter Tomorrow",
  },
  {
    id: "slide-2",
    image: "/crausal-2.png",
    alt: "Next-Gen Quantum & Neural Systems",
  },
  {
    id: "slide-3",
    image: "/crausal-3.png",
    alt: "Industrial Robotics & Automation",
  },
];

export default function HeroSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Autoplay timer
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full select-none overflow-hidden relative group bg-[#F8FAFD]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ height: "calc(100vh - 66px)" }}
    >
      {/* SLIDES */}
      {SLIDES.map((slide, idx) => {
        const isActive = idx === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
            style={{
              transform: isActive
                ? `scale(1.02) translate(${mousePos.x * -6}px, ${mousePos.y * -4}px)`
                : "scale(1)",
              transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 1s ease-in-out",
            }}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-fill"
              priority={idx === 0}
            />
          </div>
        );
      })}

      <Particles loaded={loaded} />

      {/* PREV / NEXT BUTTONS */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white hover:bg-[#F0F7FF] text-[#0055FF] shadow-lg border border-[#D2E4F9] flex items-center justify-center transition-all duration-200 cursor-pointer opacity-0 group-hover:opacity-100 hover:scale-105"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white hover:bg-[#F0F7FF] text-[#0055FF] shadow-lg border border-[#D2E4F9] flex items-center justify-center transition-all duration-200 cursor-pointer opacity-0 group-hover:opacity-100 hover:scale-105"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* DOT NAVIGATION */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-slate-200/50 shadow-sm">
        {SLIDES.map((_, idx) => {
          const isActive = idx === currentSlide;
          return (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                isActive ? "w-8 bg-[#0055FF]" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

function Particles({ loaded }: { loaded: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!loaded) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const dots = Array.from({ length: 25 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.2 - 0.1,
      r: Math.random() * 2 + 0.5,
      a: Math.random() * 0.25 + 0.05,
      p: Math.random() * Math.PI * 2,
    }));

    let id: number;
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        d.p += 0.01;
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;
        const glow = d.a + Math.sin(d.p) * 0.08;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,180,255,${glow})`;
        ctx.fill();
      });
      id = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", resize);
    };
  }, [loaded]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      style={{ opacity: loaded ? 0.4 : 0, transition: "opacity 1s ease" }}
    />
  );
}
