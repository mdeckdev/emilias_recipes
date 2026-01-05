export type MemoryPhoto = {
  // We'll add real paths later. For now keep optional.
  src?: string;
  alt?: string;
};

export type Memory = {
  slug: string;
  title: string;
  dateISO: string; // e.g. "2025-12-31"
  year: number;
  monthLabel: string; // e.g. "December"
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
    photos: [{}, {}, {}, {}, {}, {}],
  },
  {
    slug: "priki",
    title: "Priki",
    dateISO: "2025-12-20",
    year: 2025,
    monthLabel: "December",
    story: "Placeholder story. Add real story later.",
    photos: [{}, {}, {}],
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
