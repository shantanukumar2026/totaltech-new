import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS, getBlogPostBySlug } from "@/data/blogs";
import styles from "./blogDetail.module.css";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Total Tech",
    };
  }

  return {
    title: `${post.title} | Total Tech Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.detailWrapper}>
      <Navbar />

      <main className={styles.mainContent}>
        {/* Breadcrumb Navigation */}
        <div className={styles.breadcrumbBar}>
          <div className={styles.breadcrumbInner}>
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/blog" className={styles.breadcrumbLink}>
              Blog
            </Link>
            <ChevronRight size={14} />
            <span className={styles.breadcrumbActive}>{post.title}</span>
          </div>
        </div>

        <div className={styles.container}>
          {/* Back Navigation Button */}
          <div className={styles.backRow}>
            <Link href="/blog" className={styles.backLink}>
              <ArrowLeft size={16} />
              <span>Back to Blog</span>
            </Link>
          </div>

          {/* Category Tag */}
          <div className={styles.categoryTagWrapper}>
            <span className={styles.articleCategory}>{post.category}</span>
          </div>

          <h1 className={styles.articleTitle}>{post.title}</h1>

          <div className={styles.articleMeta}>
            <span>By {post.author}</span>
            <span>&bull;</span>
            <span>{post.date}</span>
            <span>&bull;</span>
            <span>{post.readTime}</span>
          </div>

          <div className={styles.imageWrapper}>
            <img
              src={post.image}
              alt={post.title}
              className={styles.image}
            />
          </div>

          <article className={styles.articleBody}>
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
