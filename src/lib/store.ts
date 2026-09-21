import type { AnalyticsEvent, EventType } from "./types";
import { products } from "./data";

type MemoryStore = {
  events: AnalyticsEvent[];
};

declare global {
  var __mlSeoStore: MemoryStore | undefined;
}

function store(): MemoryStore {
  if (!globalThis.__mlSeoStore) {
    globalThis.__mlSeoStore = { events: [] };
  }
  return globalThis.__mlSeoStore;
}

export function addEvent(input: {
  type: EventType;
  path?: string;
  productId?: string;
  query?: string;
  referrer?: string;
}) {
  const event: AnalyticsEvent = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...input
  };

  const db = store();
  db.events.unshift(event);
  db.events = db.events.slice(0, 5000);
  return event;
}

export function getEvents() {
  return store().events;
}

export function getAnalytics() {
  const events = getEvents();
  const clicks = events.filter((event) => event.type === "product_click");
  const pageViews = events.filter((event) => event.type === "page_view");
  const searches = events.filter((event) => event.type === "search");

  const clickCounts = new Map<string, number>();
  clicks.forEach((event) => {
    if (!event.productId) return;
    clickCounts.set(event.productId, (clickCounts.get(event.productId) ?? 0) + 1);
  });

  const topProducts = [...clickCounts.entries()]
    .map(([productId, count]) => ({
      product: products.find((product) => product.id === productId),
      count
    }))
    .filter((item) => item.product)
    .sort((a, b) => b.count - a.count);

  return {
    totalEvents: events.length,
    pageViews: pageViews.length,
    outboundClicks: clicks.length,
    searches: searches.length,
    outboundCtr: pageViews.length ? (clicks.length / pageViews.length) * 100 : 0,
    topProducts,
    recentEvents: events.slice(0, 25)
  };
}
