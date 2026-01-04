"use client";

import React, { useState } from "react";
import { Book, Heart, Image, ChefHat, Clock, Users, ArrowLeft } from "lucide-react";
import { recipes } from "@/lib/data/recipes";
import { stories } from "@/lib/data/stories";
import { photos } from "@/lib/data/photos";
import type { View, Recipe, Story, CategoryId } from "@/lib/types";


const EmiliaRecipeBook = () => {

const [currentView, setCurrentView] = useState<View>("home");
const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
const [selectedStory, setSelectedStory] = useState<Story | null>(null);
const [selectedCategory, setSelectedCategory] = useState<CategoryId | null>(null);


const categories: { id: CategoryId; name: string; icon: string; description: string }[] = [
  { id: "appetizers", name: "Aperitive", icon: "🥖", description: "Starters & Small Bites" },
  { id: "soups", name: "Supe", icon: "🍲", description: "Traditional Soups" },
  { id: "mains", name: "Felul Principal", icon: "🍖", description: "Main Dishes" },
  { id: "sides", name: "Garnituri", icon: "🥔", description: "Side Dishes" },
  { id: "desserts", name: "Deserturi", icon: "🍰", description: "Sweet Treats" },
  { id: "breads", name: "Paine si Patiserie", icon: "🍞", description: "Breads & Pastries" },
];


  if (currentView === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="relative bg-gradient-to-r from-amber-100 to-orange-100 p-6 shadow-lg">
          <div className="relative text-center">
            <div className="text-5xl mb-2">👵</div>
            <h1 className="text-3xl font-serif text-amber-900 mb-1">Emilias Recipes</h1>
            <p className="text-sm text-amber-700 italic">Traditional Dishes from Romania</p>
            <div className="mt-4 pt-4 border-t border-amber-300">
              <p className="text-amber-800 font-serif italic">For Isabella to remember the taste of home</p>
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
            <button onClick={() => setCurrentView('categories')} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-amber-200">
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 p-4 rounded-full"><Book size={32} className="text-orange-600" /></div>
                <div className="text-left flex-1">
                  <h3 className="text-xl font-serif text-amber-900 mb-1">Browse Recipes</h3>
                  <p className="text-sm text-gray-600">Explore by category</p>
                </div>
              </div>
            </button>
            <button onClick={() => setCurrentView('stories')} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-amber-200">
              <div className="flex items-center gap-4">
                <div className="bg-amber-100 p-4 rounded-full"><Heart size={32} className="text-amber-600" /></div>
                <div className="text-left flex-1">
                  <h3 className="text-xl font-serif text-amber-900 mb-1">Family Stories</h3>
                  <p className="text-sm text-gray-600">Memories from the kitchen</p>
                </div>
              </div>
            </button>
            <button onClick={() => setCurrentView('gallery')} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-amber-200">
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 p-4 rounded-full"><Image size={32} className="text-orange-600" /></div>
                <div className="text-left flex-1">
                  <h3 className="text-xl font-serif text-amber-900 mb-1">Photo Gallery</h3>
                  <p className="text-sm text-gray-600">Treasures from the past</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'categories') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 shadow-lg">
          <button onClick={() => setCurrentView('home')} className="flex items-center gap-2 text-amber-800 mb-4"><ArrowLeft size={20} />Back to Home</button>
          <h1 className="text-2xl font-serif text-amber-900">Recipe Categories</h1>
          <p className="text-sm text-amber-700">Choose a category to explore</p>
        </div>
        <div className="p-4 max-w-2xl mx-auto space-y-3">
          {categories.map(cat => {
            const count = recipes.filter(r => r.category === cat.id).length;
            return (
              <button key={cat.id} onClick={() => { setSelectedCategory(cat.id); setCurrentView('recipes'); }} className="w-full bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow border-2 border-amber-200 text-left">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{cat.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-serif text-amber-900">{cat.name}</h3>
                    <p className="text-sm text-gray-600">{cat.description}</p>
                    <p className="text-xs text-amber-700 mt-1">{count} {count === 1 ? 'recipe' : 'recipes'}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (currentView === 'recipes') {
    const recipesToShow = recipes.filter(r => r.category === selectedCategory);
    const catInfo = categories.find(c => c.id === selectedCategory);
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 shadow-lg">
          <button onClick={() => setCurrentView('categories')} className="flex items-center gap-2 text-amber-800 mb-4"><ArrowLeft size={20} />Back</button>
          <div className="flex items-center gap-3">
            <span className="text-4xl">{catInfo?.icon}</span>
            <div>
              <h1 className="text-2xl font-serif text-amber-900">{catInfo?.name}</h1>
              <p className="text-sm text-amber-700">{catInfo?.description}</p>
            </div>
          </div>
        </div>
        <div className="p-4 max-w-2xl mx-auto space-y-4">
          {recipesToShow.map(recipe => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-amber-200">
              <div className="flex items-center justify-center h-32 bg-gradient-to-br from-orange-50 to-amber-50">
                <div className="text-5xl">{recipe.emoji}</div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-serif text-amber-900 mb-1">{recipe.name}</h3>
                <p className="text-sm text-amber-700 mb-2">{recipe.subtitle}</p>
                <button onClick={() => { setSelectedRecipe(recipe); setCurrentView('recipe'); }} className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700">View Recipe</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (currentView === 'recipe' && selectedRecipe) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 pb-8">
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 shadow-lg">
          <button onClick={() => setCurrentView('recipes')} className="flex items-center gap-2 text-amber-800 mb-4"><ArrowLeft size={20} />Back</button>
          <h1 className="text-2xl font-serif text-amber-900">{selectedRecipe.name}</h1>
          <p className="text-sm text-amber-700">{selectedRecipe.subtitle}</p>
        </div>
        <div className="p-4 max-w-2xl mx-auto space-y-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-amber-200">
            <div className="flex items-center justify-center h-48 bg-gradient-to-br from-orange-50 to-amber-50">
              <div className="text-7xl">{selectedRecipe.emoji}</div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 border-2 border-amber-200">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div><Clock size={20} className="text-amber-600 mx-auto mb-1" /><p className="text-xs text-gray-600">Prep</p><p className="text-sm font-semibold text-amber-900">{selectedRecipe.prepTime}</p></div>
              <div><Clock size={20} className="text-amber-600 mx-auto mb-1" /><p className="text-xs text-gray-600">Cook</p><p className="text-sm font-semibold text-amber-900">{selectedRecipe.cookTime}</p></div>
              <div><Users size={20} className="text-amber-600 mx-auto mb-1" /><p className="text-xs text-gray-600">Servings</p><p className="text-sm font-semibold text-amber-900">{selectedRecipe.servings}</p></div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 border-2 border-amber-200">
            <h3 className="text-lg font-serif text-amber-900 mb-3">Ingredients</h3>
            <ul className="space-y-2">
              {selectedRecipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <span className="text-amber-600 mt-1">•</span>
                  <span className="text-sm">{ing}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 border-2 border-amber-200">
            <h3 className="text-lg font-serif text-amber-900 mb-3">Instructions</h3>
            <ol className="space-y-3">
              {selectedRecipe.instructions.map((inst, i) => (
                <li key={i} className="flex gap-3 text-gray-700">
                  <span className="flex-shrink-0 w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">{i + 1}</span>
                  <span className="text-sm pt-0.5">{inst}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg shadow-md p-4 border-2 border-amber-200">
            <div className="flex items-center gap-2 mb-2">
              <Heart size={20} className="text-red-500" />
              <h3 className="text-lg font-serif text-amber-900">Emilias Memory</h3>
            </div>
            <p className="text-sm text-gray-700 italic">{selectedRecipe.memory}</p>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'stories') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 shadow-lg">
          <button onClick={() => setCurrentView('home')} className="flex items-center gap-2 text-amber-800 mb-4"><ArrowLeft size={20} />Back</button>
          <h1 className="text-2xl font-serif text-amber-900">Family Stories</h1>
        </div>
        <div className="p-4 max-w-2xl mx-auto space-y-4">
          {stories.map(story => (
            <div key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-amber-200">
              <div className="flex items-center justify-center h-32 bg-gradient-to-br from-orange-50 to-amber-50"><div className="text-5xl">{story.image}</div></div>
              <div className="p-4">
                <h3 className="text-xl font-serif text-amber-900 mb-1">{story.title}</h3>
                <p className="text-sm text-amber-700 mb-3">{story.date}</p>
                <p className="text-sm text-gray-600 mb-4">{story.content}</p>
                <button onClick={() => { setSelectedStory(story); setCurrentView('story'); }} className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700">Read Story</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (currentView === 'story' && selectedStory) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 shadow-lg">
          <button onClick={() => setCurrentView('stories')} className="flex items-center gap-2 text-amber-800 mb-4"><ArrowLeft size={20} />Back</button>
          <h1 className="text-2xl font-serif text-amber-900">{selectedStory.title}</h1>
        </div>
        <div className="p-4 max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-amber-200">
            <div className="flex items-center justify-center h-48 bg-gradient-to-br from-orange-50 to-amber-50"><div className="text-7xl">{selectedStory.image}</div></div>
            <div className="p-6"><p className="text-gray-700 leading-relaxed">{selectedStory.content}</p></div>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'gallery') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 shadow-lg">
          <button onClick={() => setCurrentView('home')} className="flex items-center gap-2 text-amber-800 mb-4"><ArrowLeft size={20} />Back</button>
          <h1 className="text-2xl font-serif text-amber-900">Photo Gallery</h1>
        </div>
        <div className="p-4 max-w-2xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {photos.map(photo => (
              <div key={photo.id} className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-amber-200">
                <div className="aspect-square bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center"><div className="text-4xl">📷</div></div>
                <div className="p-3">
                  <p className="text-sm font-serif text-amber-900 mb-1">{photo.title}</p>
                  <p className="text-xs text-amber-700 mb-1">{photo.year}</p>
                  <p className="text-xs text-gray-600">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default EmiliaRecipeBook;