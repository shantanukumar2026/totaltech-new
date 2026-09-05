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
        src="/logo-white-bg.png"
        alt="Total Tech"
        width={350}
        height={110}
        priority
      // className="h-full w-auto object-contain"
      />
    </div>
  );
}
