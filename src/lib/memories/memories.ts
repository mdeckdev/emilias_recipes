export type MemoryPhoto = {
  src: string; // must be a path under /public, e.g. "/photos/xxx.webp"
  alt: string;
};

export type Memory = {
  slug: string;
  title: string;
  dateISO: string;
  year: number;
  monthLabel: string;
  story?: string;
  photos: MemoryPhoto[];
};

export const MEMORIES: Memory[] = [
  {
    slug: "new-years-eve-2025",
    title: "New Year’s Eve",
    dateISO: "2025-12-31",
    year: 2025,
    monthLabel: "December",
    story: "Placeholder story. We’ll connect the story drawer later.",
    photos: [
      { src: "/photos/new-years-eve-2025.webp", alt: "New Year’s Eve 2025" },
    ],
  },
  {
    slug: "priki",
    title: "Priki",
    dateISO: "2025-12-20",
    year: 2025,
    monthLabel: "December",
    story: "Placeholder story. Add real story later.",
    photos: [{ src: "/photos/priki.webp", alt: "Priki" }],
  },
];


export function getMemoryBySlug(slug: string): Memory | undefined {
  return MEMORIES.find((m) => m.slug === slug);
}

export function groupMemoriesByYear(memories: Memory[]): Map<number, Memory[]> {
  const map = new Map<number, Memory[]>();
  for (const m of memories) {
    if (!map.has(m.year)) map.set(m.year, []);
    map.get(m.year)!.push(m);
  }

  // Sort memories inside each year by date desc
  for (const [year, list] of map) {
    list.sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));
    map.set(year, list);
  }

  return new Map([...map.entries()].sort(([a], [b]) => b - a)); // years desc
}
