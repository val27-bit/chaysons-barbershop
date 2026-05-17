"use client";

import React from "react";

interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
}

/**
 * Reusable image placeholder.
 * Renders a styled div with a light-gray background and centered label.
 * Designed to be easily swapped with next/image later.
 */
export default function ImagePlaceholder({
  label,
  aspectRatio = "4/3",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`
        relative flex items-center justify-center overflow-hidden rounded-xl
        bg-placeholder text-metallic
        transition-all duration-300
        hover:shadow-lg hover:scale-[1.01]
        ${className}
      `}
      style={{ aspectRatio }}
    >
      {/* Decorative corner accents */}
      <div className="absolute top-3 left-3 h-4 w-4 border-t-2 border-l-2 border-metallic/40 rounded-tl-sm" />
      <div className="absolute top-3 right-3 h-4 w-4 border-t-2 border-r-2 border-metallic/40 rounded-tr-sm" />
      <div className="absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-metallic/40 rounded-bl-sm" />
      <div className="absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-metallic/40 rounded-br-sm" />

      {/* Icon + Label */}
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <svg
          className="h-8 w-8 text-metallic/50"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
          />
        </svg>
        <span className="text-xs font-medium tracking-wide uppercase">
          {label}
        </span>
      </div>
    </div>
  );
}
