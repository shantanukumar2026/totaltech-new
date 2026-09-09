import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { SOLUTIONS } from "@/data/solutions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./solution.module.css";

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
    <div className={styles.pageWrapper}>
      <Navbar />

      <main className={styles.mainContent}>
        {/* Breadcrumb Navigation */}
        <div className={styles.breadcrumbBar}>
          <div className={styles.breadcrumbInner}>
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/solutions" className={styles.breadcrumbLink}>
              Solutions
            </Link>
            <ChevronRight size={14} />
            <span className={styles.breadcrumbActive}>{item.title}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroGrid}>
            <div className={styles.heroTextCol}>
              <h1 className={styles.heroTitle}>{item.title}</h1>

              <p className={styles.heroDesc}>{item.shortDesc}</p>

              <div className={styles.heroActions}>
                <a href="#overview" className={styles.primaryBtn}>
                  <span>Technical Overview</span>
                  <ArrowRight size={16} />
                </a>
                <Link href="/" className={styles.backLink}>
                  <ArrowLeft size={16} />
                  <span>Back to Home</span>
                </Link>
              </div>
            </div>

            <div className={styles.heroMediaContainer}>
              {item.mediaType === "video" ? (
                <video
                  src={item.mediaUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.mediaItem}
                />
              ) : (
                <Image
                  src={item.mediaUrl}
                  alt={item.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={styles.mediaItem}
                />
              )}
            </div>
          </div>
        </section>

        {/* Technical Overview Section */}
        <section id="overview" className={styles.overviewSection}>
          <div className={styles.overviewContainer}>
            <div className={styles.accentBar} />
            <h2 className={styles.sectionHeading}>
              Technical Overview & Capabilities
            </h2>
            <p className={styles.overviewText}>{item.fullDesc}</p>
          </div>
        </section>

        {/* Related Solutions */}
        <section className={styles.relatedSection}>
          <div className={styles.relatedContainer}>
            <div className={styles.relatedHeader}>
              <div>
                <span className={styles.relatedTag}>Explore More</span>
                <h2 className={styles.relatedTitle}>
                  Related Technology Solutions
                </h2>
              </div>
              <Link href="/solutions" className={styles.viewAllLink}>
                <span>View All Solutions</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className={styles.relatedCardsGrid}>
              {relatedSolutions.map((related) => (
                <Link
                  key={related.slug}
                  href={`/solutions/${related.slug}`}
                  className={styles.cardItem}
                >
                  <div>
                    <div className={styles.cardMediaWrapper}>
                      {related.mediaType === "video" ? (
                        <video
                          src={related.mediaUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className={styles.mediaItem}
                        />
                      ) : (
                        <Image
                          src={related.mediaUrl}
                          alt={related.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className={styles.mediaItem}
                        />
                      )}
                      <div className={styles.cardBadge}>{related.category}</div>
                    </div>

                    <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>{related.title}</h3>
                      <p className={styles.cardDesc}>{related.shortDesc}</p>
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
