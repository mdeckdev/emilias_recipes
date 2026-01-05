"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams, useRouter  } from "next/navigation";
import { Book, Heart, Image as ImageIcon, ChefHat, Clock, Users, ArrowLeft, Soup, BookHeart } from "lucide-react";
import { recipes } from "@/lib/data/recipes";
import { stories } from "@/lib/data/stories";
import { photos } from "@/lib/data/photos";
import type { CategoryId } from "@/lib/types";
import Image from "next/image";
import FavoriteButton from "@/components/FavoriteButton";
import { useFavorites } from "@/lib/favorites";




type View = "home" | "categories" | "recipes" | "story" | "favorites";

const EmiliaRecipeBook = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const favorites = useFavorites();


  const query = searchParams.get("q") ?? "";

  const rawView = searchParams.get("view");
  const allowedViews: View[] = ["home", "categories", "recipes", "story", "favorites"];
  const currentView: View = allowedViews.includes(rawView as View)
    ? (rawView as View)
    : "home";

  const selectedCategory = (searchParams.get("cat") ?? null) as CategoryId | null;

  function setQuery(next: string) {
  const params = new URLSearchParams(searchParams.toString());

  if (next) params.set("q", next);
  else params.delete("q");

  router.push(`/?${params.toString()}`);
}


  const selectedStoryId = searchParams.get("id");
  const selectedStory = selectedStoryId
    ? stories.find((s) => String(s.id) === selectedStoryId) ?? null
    : null;


  const categories: { id: CategoryId; name: string; icon: string; description: string }[] = [
    { id: "appetizers", name: "Aperitive", icon: "🥖", description: "Starters & Small Bites" },
    { id: "soups", name: "Supe", icon: "🍲", description: "Traditional Soups" },
    { id: "mains", name: "Felul Principal", icon: "🍖", description: "Main Dishes" },
    { id: "sides", name: "Garnituri", icon: "🥔", description: "Side Dishes" },
    { id: "desserts", name: "Deserturi", icon: "🍰", description: "Sweet Treats" },
    { id: "breads", name: "Paine si Patiserie", icon: "🍞", description: "Breads & Pastries" },
  ];

  if (currentView === "home") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="relative bg-gradient-to-r from-amber-100 to-orange-100 p-6 shadow-lg">
          <div className="relative text-center">
            <div className="text-5xl mb-2">👵</div>
            <h1 className="text-3xl font-serif text-amber-900 mb-1">Emilias Recipes</h1>
            <p className="text-sm text-amber-700 italic">Traditional Dishes from Romania</p>
            <div className="mt-4 pt-4 border-t border-amber-300">
              <p className="text-amber-800 font-serif italic">
                For Isabella to remember the taste of home
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-4 mb-4 border-2 border-amber-200">
            <div className="flex items-center justify-center h-48 bg-gradient-to-br from-amber-50 to-orange-50 rounded">
              <div className="text-center">
                <div className="text-6xl mb-2">❤️</div>
                <p className="text-amber-800 font-serif italic">Made with love filled with memories</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <Link
              href="/?view=categories"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-amber-200 block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 p-4 rounded-full">
                  <Soup size={32} className="text-orange-600" />
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-xl font-serif text-amber-900 mb-1">Browse Recipes</h3>
                  <p className="text-sm text-gray-600">Explore by category</p>
                </div>
              </div>
            </Link>
            <Link
              href="/?view=favorites"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-amber-200 block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-rose-100 p-4 rounded-full">
                  <Heart size={32} className="text-rose-600" />
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-xl font-serif text-amber-900 mb-1">Favorites</h3>
                  <p className="text-sm text-gray-600">Your saved recipes</p>
                </div>
              </div>
            </Link> 
            <Link
              href="/memories"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-amber-200 block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-amber-100 p-4 rounded-full">
                  <BookHeart size={32} className="text-amber-600" />
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-xl font-serif text-amber-900 mb-1">Memories</h3>
                  <p className="text-sm text-gray-600">Stories and photos by year</p>
                </div>
              </div>
            </Link>
            
          </div>
        </div>
      </div>
    );
  }

  if (currentView === "categories") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 shadow-lg">
          <Link href="/" className="flex items-center gap-2 text-amber-800 mb-4">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-2xl font-serif text-amber-900">Recipe Categories</h1>
          <p className="text-sm text-amber-700">Choose a category to explore</p>
        </div>

        <div className="p-4 max-w-2xl mx-auto space-y-3">
          {categories.map((cat) => {
            const count = recipes.filter((r) => r.category === cat.id).length;
            return (
              <Link
                key={cat.id}
                href={`/?view=recipes&cat=${cat.id}`}
                className="w-full bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow border-2 border-amber-200 text-left block"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{cat.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-serif text-amber-900">{cat.name}</h3>
                    <p className="text-sm text-gray-600">{cat.description}</p>
                    <p className="text-xs text-amber-700 mt-1">
                      {count} {count === 1 ? "recipe" : "recipes"}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  
  if (currentView === "favorites") {
  const { slugs, clearFavorites } = favorites;
  const favRecipes = recipes.filter((r) => slugs.includes(r.slug));

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 shadow-lg">
        <Link href="/?view=home" className="flex items-center gap-2 text-amber-800 mb-4">
          <ArrowLeft size={20} />
          Back
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-4xl">⭐</span>
          <div>
            <h1 className="text-2xl font-serif text-amber-900">Favorites</h1>
            <p className="text-sm text-amber-700">{favRecipes.length} saved recipes</p>
          </div>
        </div>
      </div>

      <div className="p-4 max-w-2xl mx-auto space-y-4">
        {favRecipes.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-4 border-2 border-amber-200 text-center">
            <p className="text-sm text-gray-800 mb-2">No favorites yet.</p>
            <p className="text-xs text-gray-600">
              Tap the ❤️ on a recipe card to save it here.
            </p>
          </div>
        ) : (
          <>
            <div className="flex justify-end">
              <button
                onClick={clearFavorites}
                className="text-sm text-amber-800 underline underline-offset-2"
              >
                Clear all
              </button>
            </div>

            {favRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="group bg-white rounded-lg shadow-md overflow-hidden border-2 border-amber-200"
              >
                <div className="relative h-56 bg-gradient-to-br from-orange-50 to-amber-50">
                  <Image
                    src={recipe.image.src}
                    alt={recipe.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <FavoriteButton
                      slug={recipe.slug}
                      isFavorite={favorites.isFavorite(recipe.slug)}
                      onToggle={favorites.toggleFavorite}
                      className="w-10 h-10"
                    />

                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-serif text-amber-900 mb-1">{recipe.name}</h3>
                  <p className="text-sm text-amber-700 mb-2">{recipe.subtitle}</p>
                  <Link
                    href={`/recipes/${recipe.slug}`}
                    className="block w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 text-center"
                  >
                    View Recipe
                  </Link>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
  }


  if (currentView === "recipes") {
    const recipesInCategory = selectedCategory
      ? recipes.filter((r) => r.category === selectedCategory)
      : [];

    const recipesToShow = recipesInCategory.filter((r) => {
      if (!query) return true;
      const q = query.toLowerCase();

      return (
        r.name.toLowerCase().includes(q) ||
        r.subtitle.toLowerCase().includes(q) ||
        r.ingredients.some((ing) => ing.toLowerCase().includes(q))
      );
    });

    const totalInCategory = recipesInCategory.length;
    const showing = recipesToShow.length;

    const catInfo = selectedCategory ? categories.find((c) => c.id === selectedCategory) : null;

    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 shadow-lg">
          <Link href="/?view=categories" className="flex items-center gap-2 text-amber-800 mb-4">
            <ArrowLeft size={20} />
            Back
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-4xl">{catInfo?.icon ?? "📚"}</span>
            <div>
              <h1 className="text-2xl font-serif text-amber-900">{catInfo?.name ?? "Recipes"}</h1>
              <p className="text-sm text-amber-700">{catInfo?.description ?? ""}</p>
            </div>
          </div>
        </div>

        <div className="p-4 max-w-2xl mx-auto space-y-4">
            {/* 🔍 SEARCH INPUT — ADD THIS BLOCK */}
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-amber-500">
              🔍
            </span>

            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search recipes or ingredients…"
              className="w-full rounded-full bg-white pl-12 pr-4 py-3 text-base text-gray-900 placeholder:text-gray-500 shadow-md ring-1 ring-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
          </div>

            <div className="flex items-center justify-between text-xs">
              <p className="text-gray-700">
                {query
                  ? `Showing ${showing} of ${totalInCategory} recipes for “${query}”`
                  : `Showing ${showing} recipes`}
              </p>
            </div>

          {recipesToShow.map((recipe) => (
          <div
            key={recipe.id}
            className="group bg-white rounded-lg shadow-md overflow-hidden border-2 border-amber-200"
          >
            <div className="relative h-56 bg-gradient-to-br from-orange-50 to-amber-50">
              <Image
                src={recipe.image.src}
                alt={recipe.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover transition-transform duration-300 md:group-hover:scale-105 md:group-hover:brightness-105"
                loading="lazy"
              />
                <div className="absolute top-3 right-3">
                  <FavoriteButton
                    slug={recipe.slug}
                    isFavorite={favorites.isFavorite(recipe.slug)}
                    onToggle={favorites.toggleFavorite}
                    className="w-10 h-10"
                  />

                </div>
            </div>

            <div className="p-4">

                <h3 className="text-xl font-serif text-amber-900 mb-1">{recipe.name}</h3>
                <p className="text-sm text-amber-700 mb-2">{recipe.subtitle}</p>
                <Link
                  href={`/recipes/${recipe.slug}`}
                  className="block w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 text-center"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))}

          

          {recipesToShow.length === 0 && query && (
            <div className="bg-white rounded-lg shadow-md p-4 border-2 border-amber-200 text-center">
              <p className="text-sm text-gray-700 mb-2">
                No recipes found for “{query}”.
              </p>
            </div>
          )}

          
          {!selectedCategory && (
            <div className="bg-white rounded-lg shadow-md p-4 border-2 border-amber-200 text-center">
              <p className="text-sm text-gray-700 mb-3">No category selected.</p>
              <Link href="/?view=categories" className="text-amber-700 underline">
                Choose a category
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }


  if (currentView === "story") {
    if (!selectedStory) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 shadow-lg">
            <Link href="/?view=stories" className="flex items-center gap-2 text-amber-800 mb-4">
              <ArrowLeft size={20} />
              Back
            </Link>
            <h1 className="text-2xl font-serif text-amber-900">Story not found</h1>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 shadow-lg">
          <Link href="/?view=stories" className="flex items-center gap-2 text-amber-800 mb-4">
            <ArrowLeft size={20} />
            Back
          </Link>
          <h1 className="text-2xl font-serif text-amber-900">{selectedStory.title}</h1>
        </div>

        <div className="p-4 max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-amber-200">
            <div className="flex items-center justify-center h-48 bg-gradient-to-br from-orange-50 to-amber-50">
              <div className="text-7xl">{selectedStory.image}</div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">{selectedStory.content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default EmiliaRecipeBook;
