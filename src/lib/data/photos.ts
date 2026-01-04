export type Photo = {
  id: number;
  title: string;
  year: string;
  description: string;
};

export const photos: Photo[] = [
  {
    id: 1,
    title: "Emilia in her kitchen",
    year: "1985",
    description: "Making sarmale for Christmas",
  },
  {
    id: 2,
    title: "Family Christmas",
    year: "1992",
    description: "The whole family gathered",
  },
  {
    id: 3,
    title: "Isabella learning",
    year: "2008",
    description: "First time making cozonac together",
  },
  {
    id: 4,
    title: "Garden harvest",
    year: "2010",
    description: "Picking vegetables for canning",
  },
];
