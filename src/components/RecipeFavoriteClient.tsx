"use client";

import FavoriteButton from "@/components/FavoriteButton";
import { useFavorites } from "@/lib/favorites";

export default function RecipeFavoriteClient({ slug }: { slug: string }) {
  const favorites = useFavorites();

  return (
    <FavoriteButton
      slug={slug}
      isFavorite={favorites.isFavorite(slug)}
      onToggle={favorites.toggleFavorite}
      className="w-11 h-11"
      size={20}
    />
  );
}
