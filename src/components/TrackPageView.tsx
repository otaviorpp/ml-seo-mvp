"use client";

import { useEffect } from "react";

export function TrackPageView({ path }: { path: string }) {
  useEffect(() => {
    fetch("/api/events", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        type: "page_view",
        path,
        referrer: document.referrer || undefined
      })
    }).catch(() => undefined);
  }, [path]);

  return null;
}
