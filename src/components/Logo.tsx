import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: string;
}

export default function Logo({ className = "h-10 w-auto" }: LogoProps) {
  return (
    <div className={`inline-flex items-center select-none cursor-pointer ${className}`}>
      <Image
        src="/logo-white-bg.jpg"
        alt="Total Tech"
        width={280}
        height={70}
        priority
        className="h-full w-auto object-contain"
      />
    </div>
  );
}
