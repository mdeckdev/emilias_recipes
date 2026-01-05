import Link from "next/link";

export const metadata = {
  title: "Memories",
};

export default function MemoriesPage() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Memories</h1>
        <p className="mt-1 text-sm text-black/60">
          Scaffold view (list). Replace with real data later.
        </p>
      </header>

      <section className="space-y-3">
        {/* Placeholder items */}
        <Link
          href="/memories/new-years-eve-2025"
          className="block rounded-lg border p-4 hover:bg-black/5"
        >
          <div className="text-sm text-black/60">2025</div>
          <div className="text-lg font-medium">New Year’s Eve</div>
          <div className="text-sm text-black/60">Tap to open</div>
        </Link>

        <Link
          href="/memories/priki"
          className="block rounded-lg border p-4 hover:bg-black/5"
        >
          <div className="text-sm text-black/60">2025</div>
          <div className="text-lg font-medium">Priki</div>
          <div className="text-sm text-black/60">Tap to open</div>
        </Link>
      </section>
    </main>
  );
}
