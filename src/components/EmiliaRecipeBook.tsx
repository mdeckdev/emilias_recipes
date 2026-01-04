"use client";

import React, { useState } from 'react';
import { Book, Heart, Image, ChefHat, Clock, Users, ArrowLeft } from 'lucide-react';

const EmiliaRecipeBook = () => {
  type View =
  | "home"
  | "categories"
  | "recipes"
  | "recipe"
  | "stories"
  | "story"
  | "gallery";

type CategoryId = "appetizers" | "soups" | "mains" | "sides" | "desserts" | "breads";

type Recipe = {
  id: number;
  name: string;
  subtitle: string;
  category: CategoryId;
  emoji: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  ingredients: string[];
  instructions: string[];
  memory: string;
};

type Story = {
  id: number;
  title: string;
  date: string;
  content: string;
  image: string;
};

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

  const recipes: Recipe[] = [
    {
      id: 1,
      name: 'Sarmale',
      subtitle: 'Stuffed cabbage like at Christmas',
      category: 'mains',
      emoji: '🥬',
      prepTime: '45 min',
      cookTime: '2.5 hours',
      servings: '8-10',
      ingredients: ['1 large head of cabbage', '500g ground pork', '250g ground beef', '1 cup rice', '2 onions finely chopped', '3 tbsp tomato paste', '500ml sauerkraut juice', 'Salt pepper paprika', 'Fresh dill', 'Bay leaves'],
      instructions: ['Carefully remove cabbage leaves and blanch in boiling water until soft', 'Mix ground meats with rice onions and seasonings', 'Place a spoonful of filling on each cabbage leaf and roll tightly', 'Layer sauerkraut on bottom of large pot', 'Arrange sarmale in layers adding bay leaves between', 'Cover with sauerkraut juice and water', 'Simmer on low heat for 2.5 hours', 'Serve hot with fresh dill and sour cream'],
      memory: 'Every Christmas Eve Emilia would wake up at dawn to start making sarmale. She said the secret was patience and stirring with love.'
    },
    {
      id: 2,
      name: 'Cozonac',
      subtitle: 'Sweet bread for celebrations',
      category: 'breads',
      emoji: '🍞',
      prepTime: '1 hour',
      cookTime: '45 min',
      servings: '12',
      ingredients: ['500g flour', '250ml warm milk', '100g butter', '3 eggs', '150g sugar', '25g fresh yeast', '200g ground walnuts', '100g cocoa powder', 'Vanilla extract', 'Pinch of salt'],
      instructions: ['Dissolve yeast in warm milk with a teaspoon of sugar', 'Mix flour eggs butter sugar and salt into a soft dough', 'Knead for 10 minutes until elastic', 'Let rise in warm place for 1 hour', 'Mix walnuts cocoa and sugar for filling', 'Roll out dough spread filling and roll up', 'Place in loaf pan and let rise 30 minutes', 'Bake at 180C for 45 minutes until golden'],
      memory: 'Emilia always said a celebration without cozonac is like a day without sunshine. She would braid the dough with such care.'
    },
    {
      id: 3,
      name: 'Mamaliga cu Branza',
      subtitle: 'Polenta with cheese',
      category: 'sides',
      emoji: '🧈',
      prepTime: '10 min',
      cookTime: '20 min',
      servings: '4',
      ingredients: ['300g cornmeal', '1L water', '1 tsp salt', '200g fresh sheep cheese or feta', 'Sour cream', 'Butter'],
      instructions: ['Bring salted water to boil', 'Gradually add cornmeal while stirring constantly', 'Cook on low heat for 15-20 minutes stirring often', 'When thick and pulling away from pot it is ready', 'Serve hot with crumbled cheese on top', 'Add a dollop of sour cream and butter'],
      memory: 'This was Emilias go-to comfort food. She said it reminded her of simple times with her grandmother in the countryside.'
    },
    {
      id: 4,
      name: 'Ciorba de Burta',
      subtitle: 'Tripe soup with garlic sauce',
      category: 'soups',
      emoji: '🍜',
      prepTime: '30 min',
      cookTime: '2 hours',
      servings: '6',
      ingredients: ['500g beef tripe', '2 carrots', '1 onion', '2 tbsp flour', '200ml sour cream', '4 garlic cloves', 'Vinegar', 'Salt pepper', 'Fresh parsley'],
      instructions: ['Clean and boil tripe until tender about 2 hours', 'Slice tripe into thin strips', 'Make a roux with flour and butter', 'Add tripe broth gradually to roux', 'Add sliced tripe and vegetables', 'Mix sour cream with crushed garlic', 'Add cream mixture to soup', 'Season with vinegar salt and pepper', 'Garnish with fresh parsley'],
      memory: 'Emilia made this every New Years Day. She said it was the best remedy for celebration fatigue!'
    },
    {
      id: 5,
      name: 'Salata de Boeuf',
      subtitle: 'Romanian beef salad',
      category: 'appetizers',
      emoji: '🥗',
      prepTime: '40 min',
      cookTime: '1 hour',
      servings: '8',
      ingredients: ['500g beef', '4 potatoes', '3 carrots', '4 pickles', '1 cup peas', '3 eggs', 'Mayonnaise', 'Salt pepper', 'Mustard'],
      instructions: ['Boil beef potatoes carrots and eggs', 'Let everything cool completely', 'Dice all ingredients into small cubes', 'Mix vegetables and meat in large bowl', 'Add mayonnaise and mustard to taste', 'Season with salt and pepper', 'Refrigerate for at least 2 hours', 'Garnish before serving'],
      memory: 'No Romanian celebration was complete without this. Emilia would make huge bowls for family gatherings.'
    },
    {
      id: 6,
      name: 'Papanasi',
      subtitle: 'Fried doughnuts with sweet cheese',
      category: 'desserts',
      emoji: '🍩',
      prepTime: '30 min',
      cookTime: '20 min',
      servings: '6',
      ingredients: ['500g cottage cheese', '2 eggs', '150g flour', '50g sugar', '1 tsp baking powder', 'Oil for frying', 'Sour cream', 'Berry jam', 'Powdered sugar'],
      instructions: ['Mix cottage cheese eggs sugar and flour', 'Add baking powder and knead into soft dough', 'Form into round patties with smaller balls on top', 'Heat oil to 170C', 'Fry until golden brown on both sides', 'Drain on paper towels', 'Top with sour cream and jam', 'Dust with powdered sugar'],
      memory: 'Emilia made these on special Sundays. We would all fight over who got the extra ones!'
    }
  ];

  const stories: Story[] = [
    { id: 1, title: 'Kitchen Memories', date: 'Stories from the old days', content: 'The kitchen was always the heart of our home. Emilia would stand by the old wooden counter her hands dusted with flour humming old Romanian songs.', image: '👵' },
    { id: 2, title: 'Christmas Traditions', date: 'December memories', content: 'Christmas at Emilias house was magical. The preparation would start days before making sarmale baking cozonac preparing traditional dishes.', image: '🎄' },
    { id: 3, title: 'Sunday Dinners', date: 'Weekly gatherings', content: 'Every Sunday was sacred. The table would be laden with specialties soups roasts fresh bread and always something sweet for dessert.', image: '🍽️' }
  ];

  const photos = [
    { id: 1, title: 'Emilia in her kitchen', year: '1985', description: 'Making sarmale for Christmas' },
    { id: 2, title: 'Family Christmas', year: '1992', description: 'The whole family gathered' },
    { id: 3, title: 'Isabella learning', year: '2008', description: 'First time making cozonac together' },
    { id: 4, title: 'Garden harvest', year: '2010', description: 'Picking vegetables for canning' }
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