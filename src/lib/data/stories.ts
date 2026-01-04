export type Story = {
  id: number;
  title: string;
  date: string;
  content: string;
  image: string;
};

export const stories: Story[] = [
  {
    id: 1,
    title: "Kitchen Memories",
    date: "Stories from the old days",
    content:
      "The kitchen was always the heart of our home. Emilia would stand by the old wooden counter her hands dusted with flour humming old Romanian songs.",
    image: "👵",
  },
  {
    id: 2,
    title: "Christmas Traditions",
    date: "December memories",
    content:
      "Christmas at Emilias house was magical. The preparation would start days before making sarmale baking cozonac preparing traditional dishes.",
    image: "🎄",
  },
  {
    id: 3,
    title: "Sunday Dinners",
    date: "Weekly gatherings",
    content:
      "Every Sunday was sacred. The table would be laden with specialties soups roasts fresh bread and always something sweet for dessert.",
    image: "🍽️",
  },
];
