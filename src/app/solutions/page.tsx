import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { SOLUTIONS } from "@/data/solutions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./solutions-catalog.module.css";

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
    <div className={styles.catalogWrapper}>
      <Navbar />

      <main className={styles.mainContent}>
        {/* Breadcrumb Navigation */}
        <div className={styles.breadcrumbBar}>
          <div className={styles.breadcrumbInner}>
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <ChevronRight size={14} />
            <span className={styles.breadcrumbActive}>Solutions</span>
          </div>
        </div>

        {/* Hero Header */}
        <section className={styles.heroSection}>
          <div className={styles.categoryPill}>
            <Sparkles size={14} color="#00bbff" />
            <span>Technology Portfolio</span>
          </div>

          <h1 className={styles.heroTitle}>Engineered Technology Solutions</h1>

          <p className={styles.heroDesc}>
            Discover modular industrial casting, high-throughput cloud
            telemetry, micro-sensor diagnostics, and human-centered digital
            architectures.
          </p>
        </section>

        {/* Solutions Grouped by Category */}
        <div className={styles.container}>
          {categories.map((cat) => {
            const categoryItems = allSolutions.filter(
              (item) => item.category === cat
            );

            return (
              <section key={cat} className={styles.categoryGroup}>
                <div className={styles.groupHeader}>
                  <div className={styles.groupAccent} />
                  <h2 className={styles.groupTitle}>{cat}</h2>
                  <span className={styles.countBadge}>
                    {categoryItems.length}{" "}
                    {categoryItems.length === 1 ? "Solution" : "Solutions"}
                  </span>
                </div>

                <div className={styles.cardsGrid}>
                  {categoryItems.map((solution) => (
                    <Link
                      key={solution.slug}
                      href={`/solutions/${solution.slug}`}
                      className={styles.cardItem}
                    >
                      <div>
                        <div className={styles.cardMediaWrapper}>
                          {solution.mediaType === "video" ? (
                            <video
                              src={solution.mediaUrl}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className={styles.mediaItem}
                            />
                          ) : (
                            <Image
                              src={solution.mediaUrl}
                              alt={solution.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className={styles.mediaItem}
                            />
                          )}
                          <div className={styles.cardBadge}>
                            {solution.category}
                          </div>
                        </div>

                        <div className={styles.cardBody}>
                          <h3 className={styles.cardTitle}>{solution.title}</h3>
                          <p className={styles.cardDesc}>{solution.shortDesc}</p>
                        </div>
                      </div>

                      <div className={styles.cardFooter}>
                        <span>View Solution</span>
                        <ArrowRight size={14} />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Global CTA */}
        <section className={styles.ctaBanner}>
          <div className={styles.ctaContainer}>
            <div>
              <h2 className={styles.ctaTitle}>
                Need Custom Technology Architecture?
              </h2>
              <p className={styles.ctaSubtitle}>
                Our specialists can help configure custom hardware sensors,
                tailored cloud pipelines, or factory-scale precast setups.
              </p>
            </div>
            <a href="mailto:contact@totaltech.com" className={styles.ctaBtn}>
              Contact Engineering Team
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
