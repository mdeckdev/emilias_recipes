"use client";

import { useRouter } from "next/navigation";

type Props = {
  label?: string;
  className?: string;
};

export default function BackButton({ label = "Back", className = "" }: Props) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={
        "inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm " +
        "hover:bg-black/5 active:scale-[0.99] " +
        className
      }
      aria-label={label}
    >
      ← {label}
    </button>
  );
}
