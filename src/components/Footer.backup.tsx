"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const productLinks = [
    { label: "Precast Technology", href: "/solutions/precast-technology" },
    { label: "Concrete Technologies", href: "/solutions/concreate-technologies" },
    { label: "Quantum & Neural Systems", href: "/solutions/quantum-neural" },
    { label: "Industrial Robotics", href: "/solutions/industrial-robotics" },
    { label: "Mission-Critical Datacenter", href: "/solutions/datacenter-operations" },
    { label: "Zero-Trust Cybersecurity", href: "/solutions/cybersecurity-defense" },
  ];

  const servicesLinks = [
    { label: "User Research (UI/UX)", href: "/solutions/user-research" },
    { label: "Information Architecture", href: "/solutions/information-architecture" },
    { label: "Search Engine Optimization", href: "/solutions/search-engine-optimization" },
    { label: "Pay-Per-Click Advertising", href: "/solutions/pay-per-click-advertising" },
    { label: "Hardware Diagnostics", href: "/solutions/hardware-diagnostics" },
    { label: "Predictive Analytics", href: "/solutions/predictive-analytics" },
  ];

  const companyLinks = [
    { label: "Corporate Overview", href: "/contact" },
    { label: "Global Locations", href: "/contact" },
    { label: "Office Directory", href: "/contact" },
    { label: "Quality & Standards", href: "/contact" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoLink}>
              <div className={styles.logoWrapper}>
                <Image
                  src="/logo-white-bg.png"
                  alt="Total Tech"
                  width={170}
                  height={44}
                  className={styles.logoImg}
                />
              </div>
            </Link>

            <p className={styles.brandDesc}>
              Total Tech delivers end-to-end intelligent manufacturing, industrial robotics, high-performance computing, and advanced engineering systems worldwide.
            </p>

            <div className={styles.badges}>
              <span className={styles.badge}>ISO 9001:2015</span>
              <span className={styles.badge}>AS9100D</span>
              <span className={styles.badge}>CE Marked</span>
            </div>
          </div>

          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Solutions</h4>
            <ul className={styles.list}>
              {productLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Technologies</h4>
            <ul className={styles.list}>
              {servicesLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Company & Offices</h4>
            <ul className={styles.list}>
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Headquarters</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <MapPin size={16} className={styles.icon} />
                <span>850 NW Federal Hwy, Stuart, FL 34994</span>
              </li>
              <li className={styles.contactItem}>
                <Phone size={16} className={styles.icon} />
                <a href="tel:+17722970700">(772) 297-0700</a>
              </li>
              <li className={styles.contactItem}>
                <Mail size={16} className={styles.icon} />
                <a href="mailto:americas@totaltech.com">americas@totaltech.com</a>
              </li>
              <li className={styles.contactItem}>
                <Clock size={16} className={styles.icon} />
                <span>Mon – Fri: 8:00 AM – 6:00 PM EST</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.bottomText}>
            <span>&copy; {new Date().getFullYear()} Total Tech Systems Corporation. All Rights Reserved.</span>
            <span className={styles.sep}></span>
          </div>

          <div className={styles.bottomLinks}>
            <Link href="/contact">Contact Support</Link>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
            <a href="#security">Security Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
