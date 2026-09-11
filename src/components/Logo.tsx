import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "white" | "transparent" | string;
  imageClassName?: string;
}

export default function Logo({
  className = "h-10 w-auto",
  variant,
  imageClassName = "h-full w-auto max-h-full object-contain",
}: LogoProps) {
  const src = variant === "transparent" ? "/logo-transparent.png" : "/logo-white-bg.png";

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <Image
        src={src}
        alt="Total Tech Technologies"
        width={350}
        height={110}
        className={imageClassName}
        priority
      />
    </div>
  );
}

