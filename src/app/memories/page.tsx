import Link from "next/link";
import { MEMORIES, groupMemoriesByYear } from "@/lib/memories/memories";

export const metadata = {
  title: "Memories",
};

export default function MemoriesPage() {
  const grouped = groupMemoriesByYear(MEMORIES);

  return (
    <main className="mx-auto max-w-3xl p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Memories</h1>
        <p className="mt-1 text-sm text-black/60">
          Data-backed list (still minimal UI).
        </p>
      </header>

      <section className="space-y-6">
        {[...grouped.entries()].map(([year, items]) => (
          <div key={year}>
            <h2 className="mb-3 text-lg font-semibold">{year}</h2>

            <div className="space-y-3">
              {items.map((m) => (
                <Link
                  key={m.slug}
                  href={`/memories/${m.slug}`}
                  className="block rounded-lg border p-4 hover:bg-black/5"
                >
                  <div className="text-sm text-black/60">
                    {m.monthLabel} • {m.dateISO}
                  </div>
                  <div className="text-lg font-medium">{m.title}</div>
                  <div className="text-sm text-black/60">Tap to open</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
