"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import styles from "./HeroSlider.module.css";

interface Slide {
  id: string;
  tag: string;
  title: string;
  desc: string;
  btnText: string;
  btnLink: string;
  imgSrc: string;
  alt: string;
  tabName: string;
}

const slides: Slide[] = [
  {
    id: "slide-1",
    tag: "Precast Technology",
    title: "Precast Technology",
    desc: "Precast is a construction method in which concrete structures are cast in a reusable mold or factory-controlled environment, then transported to the construction site for assembly.",
    btnText: "Explore Our Solutions",
    btnLink: "/solutions/precast-technology",
    imgSrc: "/precast-technology.jpg",
    alt: "Precast Technology",
    tabName: "Precast Technology",
  },
  {
    id: "slide-2",
    tag: "Quantum & Neural Systems",
    title: "Next-Gen Quantum & Neural Systems",
    desc: "Architecting distributed compute architectures, hybrid quantum algorithms, and accelerated neural hardware for extreme simulation speed.",
    btnText: "Explore Our Solutions",
    btnLink: "/solutions/quantum-neural",
    imgSrc: "/crausal-2.png",
    alt: "Next-Gen Quantum & Neural Systems",
    tabName: "Quantum & Neural",
  },
  {
    id: "slide-3",
    tag: "Industrial Robotics",
    title: "Industrial Robotics & Automation",
    desc: "Deploy adaptive robotic systems equipped with sub-millimeter computer vision, dynamic spatial awareness, and real-time safety telemetry.",
    btnText: "Explore Our Solutions",
    btnLink: "/solutions/industrial-robotics",
    imgSrc: "/crausal-3.png",
    alt: "Industrial Robotics & Automation",
    tabName: "Industrial Robotics",
  },
  {
    id: "slide-4",
    tag: "Cloud & AI Analytics",
    title: "Cloud & Predictive Intelligence",
    desc: "Delivering real-time predictive analytics, high-frequency industrial telemetry, and sovereign data pipelines across mission-critical nodes.",
    btnText: "Explore Our Solutions",
    btnLink: "/solutions/cloud-predictive-ai",
    imgSrc: "/crausal-4.png",
    alt: "Cloud & Predictive AI",
    tabName: "Cloud & AI",
  },
];

const AUTOPLAY_DELAY = 6000;

export default function HeroSlider() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const lastTimeRef = useRef<number>(Date.now());

  const nextSlide = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % slides.length);
    setProgress(0);
    lastTimeRef.current = Date.now();
  }, []);

  const goToSlide = useCallback((index: number) => {
    setActiveIdx(index);
    setProgress(0);
    lastTimeRef.current = Date.now();
  }, []);

  useEffect(() => {
    if (isHovered) return;

    lastTimeRef.current = Date.now();
    const timer = setInterval(() => {
      const now = Date.now();
      const elapsed = now - lastTimeRef.current;
      const pct = Math.min(100, (elapsed / AUTOPLAY_DELAY) * 100);
      setProgress(pct);

      if (elapsed >= AUTOPLAY_DELAY) {
        nextSlide();
      }
    }, 40);

    return () => clearInterval(timer);
  }, [activeIdx, isHovered, nextSlide]);

  const current = slides[activeIdx];

  return (
    <section
      className={styles.hero}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        lastTimeRef.current = Date.now() - (progress / 100) * AUTOPLAY_DELAY;
      }}
      aria-label="Hero Slider"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div key={`tag-${current.id}`} className={styles.tag}>
            {current.tag}
          </div>

          <h1 key={`title-${current.id}`} className={styles.title}>
            {current.title}
          </h1>

          <p key={`desc-${current.id}`} className={styles.desc}>
            {current.desc}
          </p>

          <Link href={current.btnLink} className={styles.btn}>
            <span>{current.btnText}</span>
            <span>
              <ChevronRight size={18} />
            </span>
          </Link>
        </div>

        <div className={styles.imageStage}>
          <Link href={current.btnLink} className={styles.imageWrapper} key={current.id}>
            <Image
              src={current.imgSrc}
              alt={current.alt}
              fill
              priority={true}
              sizes="(max-width: 1024px) 100vw, 54vw"
              className={styles.slideImg}
            />
          </Link>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.indicators}>
          {slides.map((slide, index) => {
            const isActive = index === activeIdx;
            const isPassed = index < activeIdx;

            let fillWidth = 0;
            if (isActive) {
              fillWidth = progress;
            } else if (isPassed) {
              fillWidth = 100;
            }

            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(index)}
                className={`${styles.indicator} ${
                  isActive ? styles.active : ""
                }`}
                aria-label={`Go to ${slide.tabName}`}
              >
                <div className={styles.track}>
                  <div
                    className={styles.fill}
                    style={{ width: `${fillWidth}%` }}
                  />
                </div>
                <span className={styles.label}>{slide.tabName}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}