"use client";

import React from "react";
// import { Mail, Phone, MapPin, Clock, Linkedin, Facebook, Twitter, Youtube } from "lucide-react";
import styles from "./Footer.module.css";

const scrollTo = (id: string) => {
  if (typeof window !== "undefined") {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Footer() {
  const links = {
    Company: [
      ["about", "About Us"],
      ["process", "Company Profile & Vision"],
      ["facility", "Global Presence & Labs"],
      ["advantages", "Certifications & Patents"],
      ["advantages", "Careers & Culture"],

    ],
    Products: [
      ["products", "Manufacturing Technology"],
      ["products", "Artificial Intelligence"],
      ["products", "Quantum Technology / Computing"],
      ["products", "Information Technology"],
      ["products", "Machine Learning"],

    ],
    Industries: [
      ["industries", "Automotive & Heavy Industry"],
      ["industries", "Defense & Energy"],

    ],
    // Engineering: [
    //   ["process", "3D CAD & BIM Modeling"],
    //   ["process", "FEA Stress Analysis"],
    //   ["process", "Custom Mold Engineering"],
    //   ["how-it-works", "Self-Curing Steam Jackets"],
    //   ["how-it-works", "Pneumatic & Hydraulics"],
    //   ["advantages", "Steel Grades & Materials"],
    //   ["process", "On-Site Cast Trials"],
    //   ["how-it-works", "Automated Stripping"],
    //   ["process", "Precision CNC Machining"],
    //   ["process", "Technical Support"],
    // ],
  };

  return (
    <footer className={styles.footerWrapper}>
      <div className="container p-4 d-flex justify-content-center">

        {/* Six-Column Grid */}
        <div className={styles.topGrid}>

          {/* Brand Column */}
          <div className={styles.descCol}>
            <div className={styles.logoArea}>
              <img src="./logo.png" alt="Total Tech " className={styles.logoImg} />
            </div>
            <p className={styles.companyDesc}>
              Headquartered in Stuart, Florida, Total Tech is a dynamic, technology-driven organization rapidly expanding its global footprint.
            </p>
            <div className={styles.certBadges}>
              <span className={styles.certBadge}>ISO 9001:2015</span>
              <span className={styles.certBadge}>AWS D1.1</span>
              <span className={styles.certBadge}>CE Marked</span>
            </div>
            {/* <ul className={styles.socialList}>
              {[
                ["https://linkedin.com", Linkedin, "LinkedIn"],
                ["https://facebook.com", Facebook, "Facebook"],
                ["https://twitter.com", Twitter, "Twitter"],
                ["https://youtube.com", Youtube, "YouTube"],
              ].map(([href, Icon, label]) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    className={styles.socialBtn} aria-label={label}>
                    <Icon size={15} />
                  </a>
                </li>
              ))}
            </ul> */}
          </div>

          {/* Link Columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className={styles.colTitle}>{title}</h4>
              <ul className={styles.linkList}>
                {items.map(([id, label]) => (
                  <li key={label}>
                    <button onClick={() => scrollTo(id)}>{label}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                {/* <MapPin className={styles.contactIcon} size={15} /> */}
                <span className={styles.contactText}>
                  <strong>SOUTH OFFICE</strong><br />
                  850 NW FEDERAL HWY<br />
                  STUART, FL 34994
                </span>
              </li>
              <li className={styles.contactItem}>
                {/* <Phone className={styles.contactIcon} size={15} /> */}
                <a href="tel:+123456789">(123) 456-7890</a>
              </li>

              <li className={`${styles.contactItem} ${styles.locationDivider}`}>
                {/* <Mail className={styles.contactIcon} size={15} /> */}
                <a href="mailto:info@totaltech.com">info@totaltech.com</a>
              </li>
              <li className={styles.contactItem}>
                {/* <Clock className={styles.contactIcon} size={15} /> */}
                <span className={styles.contactText}>Mon – Sat: 7:00 AM – 5:00 PM EST</span>
              </li>
            </ul>
            <div className={styles.territories}>
              <div className={styles.territoryTitle}>Service Territories</div>
              <div className={styles.territoryFlags}>
                <span>USA</span>
                <span>Canada</span>
                <span>Europe</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomLeft}>
            <span>&copy; {new Date().getFullYear()} Total Tech All Rights Reserved.</span>
            <span className={styles.bottomSep}>|</span>
            <span>ISO 9001:2015 Certified Manufacturing</span>
          </div>
          <ul className={styles.bottomLinks}>
            {["Privacy Policy", "Terms & Conditions", "Cookie Policy", "Sitemap"].map((item) => (
              <li key={item}>
                <button onClick={() => scrollTo("downloads")}>{item}</button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}
