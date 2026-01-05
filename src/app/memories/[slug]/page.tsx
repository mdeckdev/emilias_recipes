import Link from "next/link";
import { notFound } from "next/navigation";
import BackButton from "@/components/BackButton";
import { getMemoryBySlug } from "@/lib/memories/memories";
import Image from "next/image";
import MemoryStory from "@/components/memories/MemoryStory";

export const metadata = {
  title: "Memory",
};

export default async function MemoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const memory = getMemoryBySlug(slug);

  if (!memory) return notFound();

  return (
    <main className="mx-auto max-w-3xl p-6">
      <header className="mb-6 flex items-center gap-3">
        <BackButton label="Memories" />
        <div>
          <h1 className="text-2xl font-semibold">{memory.title}</h1>
          <p className="mt-1 text-sm text-black/60">
            {memory.monthLabel} {memory.year} • {memory.dateISO}
          </p>
        </div>
      </header>

      <section className="space-y-4">
        <MemoryStory story={memory.story} />

        <div className="rounded-lg border p-4">
          <div className="text-sm font-medium text-foreground">Photos</div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {memory.photos.map((p, i) => (
              <Link
                key={i}
                href={`/memories/${memory.slug}/photo/${i}`}
                className="relative aspect-square overflow-hidden rounded-md border bg-black/5 hover:bg-black/10"
                aria-label={`Open photo ${i + 1}`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 33vw, 200px"
                  className="object-cover"
                  priority={i === 0}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
