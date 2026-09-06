import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./solutions-catalog.module.css";

export const metadata: Metadata = {
  title: "Solutions | Total Tech",
  description:
    "Explore our industrial manufacturing, information architecture, cloud systems, and edge automation solutions.",
};

export default function SolutionsCatalogPage() {
  return (
    <div className={styles.catalogWrapper}>
      <Navbar />

      <main className={styles.mainContent}>
        <div className={styles.breadcrumbBar}>
          <div className={styles.breadcrumbInner}>
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <ChevronRight size={14} />
            <span className={styles.breadcrumbActive}>Solutions</span>
          </div>
        </div>

        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Engineered Technology Solutions</h1>
          <p className={styles.heroDesc}>
            Discover modular industrial casting, high-throughput cloud
            telemetry, micro-sensor diagnostics, and human-centered digital
            architectures.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
