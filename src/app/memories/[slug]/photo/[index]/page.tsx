import Link from "next/link";
import { notFound } from "next/navigation";
import BackButton from "@/components/BackButton";
import { getMemoryBySlug } from "@/lib/memories/memories";
import Image from "next/image";

export const metadata = {
  title: "Photo",
};

export default async function MemoryPhotoPage({
  params,
}: {
  params: Promise<{ slug: string; index: string }>;
}) {
  const { slug, index } = await params;

  const memory = getMemoryBySlug(slug);
  if (!memory) return notFound();

  const idx = Number(index);
  if (!Number.isFinite(idx) || idx < 0 || idx >= memory.photos.length) {
    return notFound();
  }

  const photo = memory.photos[idx];
  const total = memory.photos.length;

  const prevIdx = idx - 1;
  const nextIdx = idx + 1;

  const prevHref =
    prevIdx >= 0 ? `/memories/${memory.slug}/photo/${prevIdx}` : null;

  const nextHref =
    nextIdx < total ? `/memories/${memory.slug}/photo/${nextIdx}` : null;

  return (
    <main className="mx-auto max-w-3xl p-6">
      <header className="mb-6 flex items-center gap-3">
        <BackButton label="Back" />
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            Photo {idx + 1}
          </h1>
          <p className="mt-1 text-sm text-foreground/60">{memory.title}</p>
        </div>
      </header>

      <section className="rounded-xl border p-4 space-y-3">
        {/* Top navigation */}
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm text-foreground/60">
            {idx + 1} / {total}
          </div>

          <div className="flex gap-2">
            {prevHref ? (
              <Link
                href={prevHref}
                className="rounded-md border px-3 py-2 text-sm hover:bg-white/10"
                aria-label="Previous photo"
              >
                ← Prev
              </Link>
            ) : (
              <span className="rounded-md border px-3 py-2 text-sm opacity-40">
                ← Prev
              </span>
            )}

            {nextHref ? (
              <Link
                href={nextHref}
                className="rounded-md border px-3 py-2 text-sm hover:bg-white/10"
                aria-label="Next photo"
              >
                Next →
              </Link>
            ) : (
              <span className="rounded-md border px-3 py-2 text-sm opacity-40">
                Next →
              </span>
            )}
          </div>
        </div>

        {/* Photo */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border bg-black/5">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-contain"
            priority
          />
        </div>

        <div className="text-sm text-foreground/60">{photo.alt}</div>
      </section>
    </main>
  );
}
