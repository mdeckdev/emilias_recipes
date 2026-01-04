export type View =
  | "home"
  | "categories"
  | "recipes"
  | "recipe"
  | "stories"
  | "story"
  | "gallery";

export type CategoryId =
  | "appetizers"
  | "soups"
  | "mains"
  | "sides"
  | "desserts"
  | "breads";

export type Recipe = {
  id: number;
  slug: string;
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

export type Story = {
  id: number;
  title: string;
  date: string;
  content: string;
  image: string;
};

export type Photo = {
  id: number;
  title: string;
  year: string;
  description: string;
};
