"use client";

import React from "react";
import { Heart } from "lucide-react";

export default function FavoriteButton({
  slug,
  isFavorite,
  onToggle,
  className = "",
  size = 18,
}: {
  slug: string;
  isFavorite: boolean;
  onToggle: (slug: string) => void;
  className?: string;
  size?: number;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onToggle(slug);
      }}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      className={
        "inline-flex items-center justify-center rounded-full bg-white/95 shadow-md ring-1 ring-amber-200 hover:bg-white transition " +
        className
      }
    >
      <Heart
        size={size}
        className={isFavorite ? "text-red-500" : "text-amber-700"}
        fill={isFavorite ? "currentColor" : "none"}
      />
    </button>
  );
}
