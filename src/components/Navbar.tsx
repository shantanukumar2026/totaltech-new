"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Globe,
  ChevronDown,
  Menu,
  X,
  Bot,
  Layers,
  Cog,
  ShieldCheck,
  Activity,
  Eye,
  Workflow,
  Zap,
  Cloud,
  Atom,
  Network,
  Lock,
  LayoutDashboard,
  Database,
  FolderGit2,
  ShieldAlert,
  Radar,
  CheckCircle2,
  BarChart3,
  TrendingUp,
  Factory,
  Plane,
  Car,
  Shield,
  Building2,
  Users,
  Award,
  Compass,
  Briefcase,
  FileText,
  Sparkles,
  Globe2,
  Target,
  Rocket
} from "lucide-react";

import Logo from "@/components/Logo";
import SearchModal from "@/components/SearchModal";

interface NavbarProps {
  onOpenSearch?: () => void;
}

interface ItemCard {
  title: string;
  desc: string;
  href: string;
  icon: any;
}

interface SubcategoryData {
  id: string;
  name: string;
  heading: string;
  icon: any;
  items: ItemCard[];
}

interface NavTab {
  name: string;
  hasMegaMenu: boolean;
  subcategories?: SubcategoryData[];
}

const NAV_TABS: NavTab[] = [
  {
    name: "Products",
    hasMegaMenu: true,
    subcategories: [
      {
        id: "mfg-tech",
        name: "Manufacturing Technology",
        heading: "Manufacturing Technology",
        icon: Factory,
        items: [
          {
            title: "Precast Technology",
            desc: "",
            href: "/solutions/precast-technology",
            icon: Bot,
          },
          {
            title: "Concrete Technologies",
            desc: "",
            href: "/solutions/concreate-technologies",
            icon: Layers,
          },
          {
            title: "Automation & Advanced Process Control",
            desc: "High-precision closed-loop automation, PLC integration, and SCADA control systems.",
            href: "#",
            icon: Cog,
          },
          {
            title: "Non-Destructive Testing (NDT)",
            desc: "Advanced ultrasonic, computed tomography, and eddy-current non-destructive inspection.",
            href: "#",
            icon: ShieldCheck,
          },
        ],
      },
      {
        id: "ai",
        name: "Artificial Intelligence",
        heading: "Artificial Intelligence",
        icon: Zap,
        items: [
          {
            title: "Predictive Maintenance",
            desc: "Acoustic and vibration AI models predicting equipment failure before downtime occurs.",
            href: "#",
            icon: Activity,
          },
          {
            title: "Computer Vision Quality Control",
            desc: "High-speed optical inspection pipelines for automated zero-defect manufacturing.",
            href: "#",
            icon: Eye,
          },
          {
            title: "Digital Twin Simulation",
            desc: "Real-time physics-accurate digital twin simulations of factory floors and machinery.",
            href: "#",
            icon: Workflow,
          },
          {
            title: "Manufacturing Process Optimization",
            desc: "Continuous parameter optimization reducing cycle times and operational energy costs.",
            href: "#",
            icon: TrendingUp,
          },
        ],
      },
      {
        id: "quantum",
        name: "Quantum Technology / Computing",
        heading: "Quantum Technology / Computing",
        icon: Atom,
        items: [
          {
            title: "Cloud Computing",
            desc: "High-performance distributed cloud clusters for intensive computational workloads.",
            href: "#",
            icon: Cloud,
          },
          {
            title: "Quantum Simulation (For Advanced Materials)",
            desc: "Quantum algorithms simulating complex alloy lattices and novel material structures.",
            href: "#",
            icon: Atom,
          },
          {
            title: "Complex Supply Chain Optimization",
            desc: "Combinatorial logistics optimization solving large-scale discrete routing problems.",
            href: "#",
            icon: Network,
          },
          {
            title: "Secure Communication (IP Protection)",
            desc: "Post-quantum cryptographic protocols safeguarding proprietary trade secrets.",
            href: "#",
            icon: Lock,
          },
        ],
      },
      {
        id: "it",
        name: "Information Technology",
        heading: "Information Technology",
        icon: Database,
        items: [
          {
            title: "Manufacturing Execution Systems (MES)",
            desc: "Real-time execution, dispatching, and tracking across complex production lines.",
            href: "#",
            icon: LayoutDashboard,
          },
          {
            title: "Enterprise Resource Planning (ERP)",
            desc: "Integrated material requirement planning and end-to-end operational visibility.",
            href: "#",
            icon: Database,
          },
          {
            title: "PLM (Product Lifecycle Management)",
            desc: "Complete product data management, revision tracking, and engineering change orders.",
            href: "#",
            icon: FolderGit2,
          },
          {
            title: "Industrial Cybersecurity",
            desc: "OT and IT network boundary protection defending operational machinery from threats.",
            href: "#",
            icon: ShieldAlert,
          },
        ],
      },
      {
        id: "ml",
        name: "Machine Learning",
        heading: "Machine Learning",
        icon: BarChart3,
        items: [
          {
            title: "Anomaly Detection in Sensors",
            desc: "Multi-sensor multivariate statistical models detecting real-time operational drift.",
            href: "#",
            icon: Radar,
          },
          {
            title: "Casting Defect Classification",
            desc: "Deep neural networks classifying volumetric casting porosity and surface blemishes.",
            href: "#",
            icon: CheckCircle2,
          },
          {
            title: "Process Yield Optimization",
            desc: "Data-driven parameter tuning reducing scrap rates and maximizing production yield.",
            href: "#",
            icon: BarChart3,
          },
          {
            title: "Demand Forecasting Models",
            desc: "Probabilistic forecasting models accurately anticipating supplier lead times.",
            href: "#",
            icon: TrendingUp,
          },
        ],
      },
    ],
  },
  {
    name: "Solutions",
    hasMegaMenu: true,
    subcategories: [
      {
        id: "sol-mfg",
        name: "Industrial Smart Factory",
        heading: "Industrial Smart Factory Solutions",
        icon: Factory,
        items: [
          {
            title: "Autonomous Plant Logistics",
            desc: "Self-driving automated mobile robots and fleet orchestration systems.",
            href: "/solutions/industrial-robotics",
            icon: Bot,
          },
          {
            title: "Smart Energy Grid Integration",
            desc: "Factory-wide peak load management and renewable power synchronization.",
            href: "/solutions/cloud-predictive-ai",
            icon: Zap,
          },
          {
            title: "Zero-Downtime Migration",
            desc: "Legacy facility upgrades without interrupting active continuous production lines.",
            href: "/solutions/datacenter-operations",
            icon: Activity,
          },
        ],
      },
      {
        id: "sol-aerospace",
        name: "Aerospace & Precision",
        heading: "Aerospace & Precision Manufacturing",
        icon: Plane,
        items: [
          {
            title: "Turbine Blade Inspection",
            desc: "High-precision NDT computed tomography for critical aerospace alloys.",
            href: "/solutions/hardware-diagnostics",
            icon: ShieldCheck,
          },
          {
            title: "Sand Cast Tooling",
            desc: "Direct additive mold tooling reducing lead times from months to hours.",
            href: "/solutions/precast-technology",
            icon: Layers,
          },
        ],
      },
    ],
  },
  {
    name: "Industries",
    hasMegaMenu: true,
    subcategories: [
      {
        id: "ind-automotive",
        name: "Automotive & Heavy Industry",
        heading: "Automotive & Heavy Equipment",
        icon: Car,
        items: [
          {
            title: "Engine Block Casting",
            desc: "Sand printing and defect classification for internal combustion and EV cast housings.",
            href: "#",
            icon: Factory,
          },
          {
            title: "Body-in-White Assembly",
            desc: "Automated robotic welding, riveting, and computer vision alignment inspection.",
            href: "#",
            icon: Cog,
          },
        ],
      },
      {
        id: "ind-defense",
        name: "Defense & Energy",
        heading: "Defense & Energy Infrastructure",
        icon: Shield,
        items: [
          {
            title: "Secure Field Communications",
            desc: "Quantum-resistant encryption protecting critical infrastructure telemetry.",
            href: "#",
            icon: Lock,
          },
          {
            title: "Power Turbine Analytics",
            desc: "Predictive maintenance preventing catastrophic failures in power generation units.",
            href: "#",
            icon: Activity,
          },
        ],
      },
    ],
  },
  {
    name: "About Us",
    hasMegaMenu: true,
    subcategories: [
      {
        id: "about-profile",
        name: "Company Profile & Vision",
        heading: "Total Tech Enterprise Profile & Heritage",
        icon: Building2,
        items: [
          {
            title: "Enterprise Profile & History",
            desc: "Pioneering industrial intelligence, enterprise software, and deep-tech platforms since inception.",
            href: "#about-profile-section",
            icon: Building2,
          },
          {
            title: "Executive Leadership & Board",
            desc: "Visionary industry veterans guiding world-class engineers, scientists, and architects.",
            href: "#about-profile-section",
            icon: Users,
          },
          {
            title: "Mission, Vision & Core Values",
            desc: "Unwavering commitment to safety, mission-critical uptime, and ethical AI stewardship.",
            href: "#about-profile-section",
            icon: Compass,
          },
          {
            title: "Investor Relations & ESG",
            desc: "Corporate governance, annual financial reports, and global sustainability roadmaps.",
            href: "#about-profile-section",
            icon: FileText,
          },
        ],
      },
      {
        id: "about-global",
        name: "Global Presence & Labs",
        heading: "Global Operations & Technology Labs",
        icon: Globe2,
        items: [
          {
            title: "Worldwide Innovation Hubs",
            desc: "Distributed high-tech engineering facilities across North America, Europe, and Asia-Pacific.",
            href: "#about-profile-section",
            icon: Globe2,
          },
        ],
      },
      {
        id: "about-certs",
        name: "Certifications & Patents",
        heading: "Industrial Certifications & IP Portfolio",
        icon: Award,
        items: [
          {
            title: "ISO 9001 & AS9100D Certified",
            desc: "Global quality management standards across aerospace, automotive, and defense systems.",
            href: "#about-profile-section",
            icon: Award,
          },
        ],
      },
      {
        id: "about-careers",
        name: "Careers & Culture",
        heading: "Careers at Total Tech",
        icon: Briefcase,
        items: [
          {
            title: "Open Engineering Roles",
            desc: "Join our elite teams across AI research, robotics engineering, and distributed IT.",
            href: "#about-profile-section",
            icon: Briefcase,
          },
        ],
      },
    ],
  },
  {
    name: "Blog",
    hasMegaMenu: false,
    subcategories: [
      {
        id: "Blog",
        name: "Company Profile & Vision",
        heading: "Total Tech Enterprise Profile & Heritage",
        icon: Building2,
        items: [
          {
            title: "Enterprise Profile & History",
            desc: "Pioneering industrial intelligence, enterprise software, and deep-tech platforms since inception.",
            href: "#about-profile-section",
            icon: Building2,
          },
          {
            title: "Executive Leadership & Board",
            desc: "Visionary industry veterans guiding world-class engineers, scientists, and architects.",
            href: "#about-profile-section",
            icon: Users,
          },
          {
            title: "Mission, Vision & Core Values",
            desc: "Unwavering commitment to safety, mission-critical uptime, and ethical AI stewardship.",
            href: "#about-profile-section",
            icon: Compass,
          },
          {
            title: "Investor Relations & ESG",
            desc: "Corporate governance, annual financial reports, and global sustainability roadmaps.",
            href: "#about-profile-section",
            icon: FileText,
          },
        ],
      },
      {
        id: "about-global",
        name: "Global Presence & Labs",
        heading: "Global Operations & Technology Labs",
        icon: Globe2,
        items: [
          {
            title: "Worldwide Innovation Hubs",
            desc: "Distributed high-tech engineering facilities across North America, Europe, and Asia-Pacific.",
            href: "#about-profile-section",
            icon: Globe2,
          },
        ],
      },
      {
        id: "about-certs",
        name: "Certifications & Patents",
        heading: "Industrial Certifications & IP Portfolio",
        icon: Award,
        items: [
          {
            title: "ISO 9001 & AS9100D Certified",
            desc: "Global quality management standards across aerospace, automotive, and defense systems.",
            href: "#about-profile-section",
            icon: Award,
          },
        ],
      },

    ],
  },
];

export default function Navbar({ onOpenSearch }: NavbarProps) {
  const [internalSearchOpen, setInternalSearchOpen] = useState(false);
  const [activeTabName, setActiveTabName] = useState<string | null>(null);
  const [activeSubcatId, setActiveSubcatId] = useState<string>("mfg-tech");
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleSearchOpen = () => {
    if (onOpenSearch) {
      onOpenSearch();
    } else {
      setInternalSearchOpen(true);
    }
  };

  // Close when clicking outside
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveTabName(null);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const activeTab = NAV_TABS.find((t) => t.name === activeTabName);

  const handleTabToggle = (name: string, hasMegaMenu: boolean) => {
    if (!hasMegaMenu) {
      setActiveTabName(null);
      return;
    }
    if (activeTabName === name) {
      setActiveTabName(null);
    } else {
      setActiveTabName(name);
      const tab = NAV_TABS.find((t) => t.name === name);
      if (tab?.subcategories && tab.subcategories.length > 0) {
        setActiveSubcatId(tab.subcategories[0].id);
      }
    }
  };

  const handleMouseEnterTab = (name: string, hasMegaMenu: boolean) => {
    if (hasMegaMenu) {
      setActiveTabName(name);
      const tab = NAV_TABS.find((t) => t.name === name);
      if (tab?.subcategories && tab.subcategories.length > 0) {
        setActiveSubcatId(tab.subcategories[0].id);
      }
    }
  };

  const currentSubcategory = activeTab?.subcategories?.find(
    (sub) => sub.id === activeSubcatId
  ) || activeTab?.subcategories?.[0];

  return (
    <div ref={navRef} className="fixed top-0 left-0 right-0 z-50 font-sans select-none">
      <header className="w-full bg-[#0055FF] border-b-2 border-[#0085f4] text-white shadow-[0_4px_24px_rgba(0,85,255,0.35)]">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#00bbff] to-transparent opacity-90" />

        <div className="w-full h-16 flex items-center">
          <a
            href="/"
            className="flex items-center justify-center h-full w-[285px] bg-white shrink-0 px-5"
          >
            <Logo className="h-full w-auto py-2" />
          </a>

          <nav className="hidden lg:flex items-stretch h-full ml-8 gap-0.5">
            {NAV_TABS.map((tab) => {
              const isActive = activeTabName === tab.name;

              return (
                <button
                  key={tab.name}
                  onClick={() =>
                    handleTabToggle(tab.name, tab.hasMegaMenu)
                  }
                  onMouseEnter={() =>
                    handleMouseEnterTab(tab.name, tab.hasMegaMenu)
                  }
                  className={`px-4 sm:px-5 h-full text-[13.5px] font-semibold tracking-normal transition-all flex items-center gap-1.5 cursor-pointer group relative ${isActive
                    ? "bg-white text-[#0055FF] font-bold shadow-xs border-t-2 border-[#00bbff]"
                    : "text-white hover:text-white hover:bg-white/10"
                    }`}
                >
                  <span>{tab.name}</span>

                  {tab.hasMegaMenu && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isActive
                        ? "rotate-180 text-[#0055FF]"
                        : "text-white/80 group-hover:text-white"
                        }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2.5 sm:gap-3 pr-6 lg:pr-8">

            <button
              onClick={handleSearchOpen}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/15 hover:bg-white/25 border border-white/20 hover:border-white text-white transition-all cursor-pointer"
              title="Search Total Tech"
            >
              <Search className="w-3.5 h-3.5 text-white" />
              <span className="hidden md:inline text-xs font-medium">
                Search
              </span>
            </button>

            <button
              onClick={() => alert("Region Selector: Global / India")}
              className="flex items-center gap-1.5 text-white hover:bg-white/20 px-2.5 py-1.5 transition-colors cursor-pointer border border-white/20 bg-white/10 font-semibold"
              title="Select Region"
            >
              <Globe className="w-3.5 h-3.5 text-white" />
              <span className="text-[11px] font-bold">IN</span>
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-1.5 text-white bg-white/15 border border-white/20"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

          </div>
        </div>
      </header>


      {activeTab?.hasMegaMenu && activeTab.subcategories && (
        <div
          onMouseLeave={() => setActiveTabName(null)}
          className="w-full bg-white border-b-2 border-[#0055FF] shadow-2xl shadow-blue-900/15 animate-in fade-in duration-150"
        >
          <div className="max-w-[1440px] mx-auto min-h-[380px] flex flex-col md:flex-row">
            <div className="w-full md:w-80 bg-[#F4F8FD] border-r border-[#E2E8F0] py-4 shrink-0">
              <div className="space-y-1">
                {activeTab.subcategories.map((subcat) => {
                  const SubIcon = subcat.icon;
                  const isSubActive = subcat.id === (currentSubcategory?.id || "");
                  return (
                    <button
                      key={subcat.id}
                      onClick={() => setActiveSubcatId(subcat.id)}
                      onMouseEnter={() => setActiveSubcatId(subcat.id)}
                      className={`w-full text-left px-5 py-3.5 text-xs sm:text-[13px] transition-all flex items-center gap-3 group relative cursor-pointer ${isSubActive
                        ? "bg-white text-[#0055FF] font-bold shadow-xs"
                        : "text-[#0051c5] hover:text-[#0055FF] hover:bg-white/80 font-medium"
                        }`}
                    >

                      {isSubActive && (
                        <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#0055FF]" />
                      )}

                      <div className={`p-1.5 border shrink-0 transition-colors ${isSubActive
                        ? "bg-[#0055FF] text-white border-[#0055FF]"
                        : "bg-white text-[#0055FF] border-[#E2E8F0] group-hover:bg-[#0055FF] group-hover:text-white"
                        }`}>
                        <SubIcon className="w-4 h-4" />
                      </div>

                      <span className="truncate">{subcat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex-1 p-6 sm:p-8 bg-white">
              {currentSubcategory && (
                <div>
                  <div className="flex items-center gap-3 mb-6 border-b border-[#E2E8F0] pb-3">
                    <div className="p-1.5 bg-[#F0F7FF] border border-[#0055FF]/30 text-[#0055FF]">
                      {React.createElement(currentSubcategory.icon, { className: "w-4 h-4" })}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0335ab] font-sans tracking-tight">
                      {currentSubcategory.heading}
                    </h3>
                  </div>


                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-4">
                    {currentSubcategory.items.map((item, idx) => {
                      const ItemIcon = item.icon;
                      return (
                        <a
                          key={idx}
                          href={item.href}
                          className="group flex items-start gap-3.5 p-3.5 bg-[#F8FAFD] hover:bg-[#F0F7FF] border border-[#E2E8F0] hover:border-[#0055FF] transition-all duration-200 shadow-xs hover:shadow-md hover:shadow-blue-500/10"
                        >
                          <div className="p-2 bg-white border border-[#E2E8F0] text-[#0055FF] group-hover:bg-[#0055FF] group-hover:text-white group-hover:border-[#0055FF] transition-all shrink-0 mt-0.5 shadow-xs">
                            <ItemIcon className="w-4 h-4" />
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0335ab] group-hover:text-[#0055FF] transition-colors">
                              <span>{item.title}</span>
                              <span className="text-[#0055FF] font-black text-xs group-hover:translate-x-1 transition-all inline-block">
                                &gt;
                              </span>
                            </div>

                            <p className="text-[11.5px] text-[#0051c5] mt-1 leading-relaxed font-normal group-hover:text-[#0335ab] transition-colors">
                              {item.desc}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="lg:hidden bg-[#0055FF] border-b-2 border-white px-4 pt-4 pb-6 max-h-[85vh] overflow-y-auto shadow-xl text-white">
          {NAV_TABS.map((tab) => (
            <div key={tab.name} className="py-2 border-b border-white/20">
              <div className="text-sm font-bold text-white px-2 py-1 flex items-center justify-between">
                <span>{tab.name}</span>
                {tab.hasMegaMenu && <ChevronDown className="w-4 h-4 text-white" />}
              </div>
              {tab.subcategories && (
                <div className="pl-3 space-y-2 mt-1">
                  {tab.subcategories.map((sub) => {
                    const SubIcon = sub.icon;
                    return (
                      <div key={sub.id} className="py-1">
                        <div className="flex items-center gap-2 text-xs font-bold text-white/90 uppercase tracking-wider mb-1">
                          <SubIcon className="w-3.5 h-3.5" />
                          <span>{sub.name}</span>
                        </div>
                        <div className="pl-4 space-y-1 mt-1">
                          {sub.items.map((item, i) => (
                            <a
                              key={i}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block text-xs text-white/80 hover:text-white py-0.5"
                            >
                              • {item.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}

          <div className="pt-4">
            <button
              onClick={() => {
                setMobileOpen(false);
                handleSearchOpen();
              }}
              className="w-full flex items-center justify-center gap-2 p-2.5 bg-white/20 text-white text-xs font-semibold border border-white/30"
            >
              <Search className="w-4 h-4 text-white" />
              <span>Search Total Tech</span>
            </button>
          </div>
        </div>
      )}

      <SearchModal
        isOpen={internalSearchOpen}
        onClose={() => setInternalSearchOpen(false)}
      />
    </div>
  );
}

