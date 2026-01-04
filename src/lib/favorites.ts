"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "emilias:favorites:v1";

function readFavorites(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

function writeFavorites(slugs: string[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
}

export function useFavorites() {
  const [slugs, setSlugs] = useState<string[]>([]);

  // Load once
  useEffect(() => {
    setSlugs(readFavorites());
  }, []);

  // Cross-tab sync
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setSlugs(readFavorites());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const set = useMemo(() => new Set(slugs), [slugs]);

  const isFavorite = useCallback((slug: string) => set.has(slug), [set]);

  const toggleFavorite = useCallback((slug: string) => {
    setSlugs((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [slug, ...prev];
      writeFavorites(next);
      return next;
    });
  }, []);

  const clearFavorites = useCallback(() => {
    writeFavorites([]);
    setSlugs([]);
  }, []);

  return { slugs, isFavorite, toggleFavorite, clearFavorites };
}
