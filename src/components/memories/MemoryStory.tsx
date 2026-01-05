type Props = {
  story?: string;
};

export default function MemoryStory({ story }: Props) {
  if (!story) return null;

  return (
    <section className="rounded-lg border p-4">
      <h2 className="text-sm font-medium">Story</h2>
      <p className="mt-2 whitespace-pre-line text-sm text-foreground/80">
        {story}
      </p>
    </section>
  );
}
