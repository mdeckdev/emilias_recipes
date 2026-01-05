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


  return (
    <main className="mx-auto max-w-3xl p-6">
      <header className="mb-6 flex items-center gap-3">
        <BackButton label="Back" />
        <div>
          <h1 className="text-2xl font-semibold">Photo {idx + 1}</h1>
          <p className="mt-1 text-sm text-black/60">{memory.title}</p>
        </div>
      </header>

        <section className="rounded-xl border p-4">
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

        <div className="mt-3 text-sm text-black/60">{photo.alt}</div>
        </section>

    </main>
  );
}
