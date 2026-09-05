import type { Metadata, Viewport } from "next";
import { Manrope, Geist } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0062FF",
};

export const metadata: Metadata = {
  title: "Total Tech - Enterprise IT & Industrial Technology Systems",
  description: "Total Tech - Enterprise IT Solutions, Artificial Intelligence, Quantum Computing, Robotics, and Advanced Automation.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans font-medium selection:bg-[#0062FF] selection:text-white bg-[#F8FBFE] text-[#0335ab]">
        {children}
      </body>
    </html>
  );
}
