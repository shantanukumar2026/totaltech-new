"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  ChevronRight,
  Building2,
  FileCheck2,
  Layers,
} from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const engineeringSolutions = [
    { label: "Highway Bridge Superstructures", href: "/solutions/precast-technology" },
    { label: "Precast Specialty Engineering", href: "/solutions/concreate-technologies" },
    { label: "BIM 3D/4D Modeling (LOD 400)", href: "/solutions/precast-technology" },
    { label: "Constructability & Erection Plans", href: "/solutions/precast-technology" },
    { label: "Box Culverts & Drainage Systems", href: "/solutions/precast-technology" },
    { label: "Elevated Viaduct & Segmental Systems", href: "/solutions/precast-technology" },
  ];

  const designStandards = [
    { label: "ACI / PCI CODE-319-25 Precast Code", href: "/contact" },
    { label: "ACI CODE-318-25 Building Requirements", href: "/contact" },
    { label: "PCI Design Handbook (9th Edition)", href: "/contact" },
    { label: "AASHTO LRFD Bridge Specifications", href: "/contact" },
    { label: "AREMA Manual for Railway Engineering", href: "/contact" },
    { label: "ASTM Material QA Standards (C39/C143)", href: "/contact" },
  ];

  return (
    <footer className={styles.footer}>
      {/* Top Header-Matching Cyan Glow Accent */}
      <div className={styles.topGlowLine} />

      {/* Project Consultation Hero Banner */}
      <div className={styles.ctaWrapper}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaTextGroup}>
              <div className={styles.ctaBadge}>
                <span>STRUCTURAL & PRECAST ENGINEERING SERVICES</span>
              </div>
              <h3 className={styles.ctaTitle}>
                Discuss Your Project With Our Engineering Team
              </h3>
              <p className={styles.ctaDesc}>
                Providing specialty precast engineering, structural bridge modeling, and erection plans for commercial and infrastructure projects.
              </p>
            </div>

            <div className={styles.ctaButtonGroup}>
              <Link href="/contact" className={styles.btnPrimary}>
                <span>Request Project Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+17722970700" className={styles.btnSecondary}>
                <Phone className="w-4 h-4 text-[#00bbff]" />
                <span>(772) 297-0700</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Footer Grid */}
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Brand */}
          <div className={styles.brandCard}>
            <Link href="/" className={styles.logoLink} aria-label="Total Tech Home">
              <div className={styles.logoWrapper}>
                <Image
                  src="/logo-white-bg.png"
                  alt="Total Tech Systems"
                  width={175}
                  height={44}
                  className={styles.logoImg}
                />
              </div>
            </Link>

            <p className={styles.brandDesc}>
              Total Tech provides specialty precast structural engineering, bridge superstructure design, BIM detailing, and constructability analysis for infrastructure and commercial projects across North America.
            </p>

            {/* Industry Badges */}
            <div className={styles.badgesWrapper}>
              <span className={styles.badge}>PCI Certified</span>
              <span className={styles.badge}>ACI 318/319</span>
              <span className={styles.badge}>AASHTO LRFD</span>
              <span className={styles.badge}>ISO 9001:2015</span>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className={styles.navCard}>
            <div className={styles.cardHeader}>
              <Layers className="w-4 h-4 text-[#00bbff]" />
              <h4 className={styles.colTitle}>Solutions</h4>
            </div>
            <ul className={styles.linkList}>
              {engineeringSolutions.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.linkItem}>
                    <ChevronRight className={styles.linkChevron} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Codes & Standards */}
          <div className={styles.navCard}>
            <div className={styles.cardHeader}>
              <FileCheck2 className="w-4 h-4 text-[#00bbff]" />
              <h4 className={styles.colTitle}>Codes & Standards</h4>
            </div>
            <ul className={styles.linkList}>
              {designStandards.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.linkItem}>
                    <ChevronRight className={styles.linkChevron} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Headquarters Contact */}
          <div className={styles.contactCard}>
            <div className={styles.cardHeader}>
              <Building2 className="w-4 h-4 text-[#00bbff]" />
              <h4 className={styles.colTitle}>Headquarters</h4>
            </div>

            <div className={styles.contactInfoList}>
              <div className={styles.contactRow}>
                <div className={styles.contactIconWrapper}>
                  <MapPin className="w-4 h-4 text-[#00bbff]" />
                </div>
                <div>
                  <span className={styles.contactSubhead}>Corporate Office</span>
                  <p className={styles.contactText}>850 NW Federal Hwy, Stuart, FL 34994</p>
                </div>
              </div>

              <div className={styles.contactRow}>
                <div className={styles.contactIconWrapper}>
                  <Phone className="w-4 h-4 text-[#00bbff]" />
                </div>
                <div>
                  <span className={styles.contactSubhead}>Telephone</span>
                  <a href="tel:+17722970700" className={styles.contactLink}>
                    (772) 297-0700
                  </a>
                </div>
              </div>

              <div className={styles.contactRow}>
                <div className={styles.contactIconWrapper}>
                  <Mail className="w-4 h-4 text-[#00bbff]" />
                </div>
                <div>
                  <span className={styles.contactSubhead}>Email Inquiries</span>
                  <a href="mailto:americas@totaltech.com" className={styles.contactLink}>
                    americas@totaltech.com
                  </a>
                </div>
              </div>

              <div className={styles.contactRow}>
                <div className={styles.contactIconWrapper}>
                  <Clock className="w-4 h-4 text-[#00bbff]" />
                </div>
                <div>
                  <span className={styles.contactSubhead}>Office Hours</span>
                  <p className={styles.contactText}>Monday – Friday: 8:00 AM – 6:00 PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomText}>
            <span>&copy; {new Date().getFullYear()} Total Tech Systems Corporation. All Rights Reserved.</span>
          </div>

          <div className={styles.bottomLinks}>
            <Link href="/contact" className={styles.bottomLink}>Office Directory</Link>
            <Link href="/contact" className={styles.bottomLink}>Quality & Standards</Link>
            <Link href="/contact" className={styles.bottomLink}>Privacy Policy</Link>
            <Link href="/contact" className={styles.bottomLink}>Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
