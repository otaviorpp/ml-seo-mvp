"use client";

import { useEffect } from "react";

export function TrackSearch({ query }: { query: string }) {
  useEffect(() => {
    if (!query) return;
    fetch("/api/events", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ type: "search", query, path: `/busca?q=${encodeURIComponent(query)}` })
    }).catch(() => undefined);
  }, [query]);

  return null;
}
