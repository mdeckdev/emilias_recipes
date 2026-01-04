import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Users, Heart, ArrowLeft } from "lucide-react";

import { recipes } from "@/lib/data/recipes";
import Image from "next/image";
import RecipeFavoriteClient from "@/components/RecipeFavoriteClient";



export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}
    export default async function RecipePage({
    params,
    }: {
    params: Promise<{ slug: string }>;
    }) {
    const { slug } = await params;
    const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) notFound();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 pb-8">
      <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 shadow-lg">
          <Link   href={`/?view=recipes&cat=${recipe.category}`}
          className="flex items-center gap-2 text-amber-800 mb-4">
          <ArrowLeft size={20} />
          Back
        </Link>
        
        <h1 className="text-2xl font-serif text-amber-900">{recipe.name}</h1>
        <p className="text-sm text-amber-700">{recipe.subtitle}</p>
        
      </div>

      <div className="p-4 max-w-2xl mx-auto space-y-4">
        {/* HERO IMAGE CARD */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-amber-200">
        <div className="relative h-48 sm:h-56 bg-gradient-to-br from-orange-50 to-amber-50">
          <Image
            src={recipe.image.src}
            alt={recipe.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover"
            priority
          />

          <div className="absolute top-3 right-3">
            <RecipeFavoriteClient slug={recipe.slug} />
          </div>
        </div>
      </div>

        {/* STATS */}
        <div className="bg-white rounded-lg shadow-md p-4 border-2 border-amber-200">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <Clock size={20} className="text-amber-600 mx-auto mb-1" />
              <p className="text-xs text-gray-600">Prep</p>
              <p className="text-sm font-semibold text-amber-900">{recipe.prepTime}</p>
            </div>
            <div>
              <Clock size={20} className="text-amber-600 mx-auto mb-1" />
              <p className="text-xs text-gray-600">Cook</p>
              <p className="text-sm font-semibold text-amber-900">{recipe.cookTime}</p>
            </div>
            <div>
              <Users size={20} className="text-amber-600 mx-auto mb-1" />
              <p className="text-xs text-gray-600">Servings</p>
              <p className="text-sm font-semibold text-amber-900">{recipe.servings}</p>
            </div>
          </div>
        </div>

        {/* INGREDIENTS */}
        <div className="bg-white rounded-lg shadow-md p-4 border-2 border-amber-200">
          <h3 className="text-lg font-serif text-amber-900 mb-3">Ingredients</h3>
          <ul className="space-y-2">
            {recipe.ingredients.map((ing, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <span className="text-amber-600 mt-1">•</span>
                <span className="text-sm">{ing}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* INSTRUCTIONS */}
        <div className="bg-white rounded-lg shadow-md p-4 border-2 border-amber-200">
          <h3 className="text-lg font-serif text-amber-900 mb-3">Instructions</h3>
          <ol className="space-y-3">
            {recipe.instructions.map((inst, i) => (
              <li key={i} className="flex gap-3 text-gray-700">
                <span className="flex-shrink-0 w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                  {i + 1}
                </span>
                <span className="text-sm pt-0.5">{inst}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* MEMORY */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg shadow-md p-4 border-2 border-amber-200">
          <div className="flex items-center gap-2 mb-2">
            <Heart size={20} className="text-red-500" />
            <h3 className="text-lg font-serif text-amber-900">Emilias Memory</h3>
          </div>
          <p className="text-sm text-gray-700 italic">{recipe.memory}</p>
        </div>
      </div>
      </div>
    
  );
}
