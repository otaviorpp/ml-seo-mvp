import { NextRequest, NextResponse } from "next/server";
import { addEvent } from "@/lib/store";
import type { EventType } from "@/lib/types";

const allowed: EventType[] = ["page_view", "product_click", "search"];

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null) as Record<string, unknown> | null;
  const type = body?.type;
  if (typeof type !== "string" || !allowed.includes(type as EventType)) {
    return NextResponse.json({ error: "invalid_event" }, { status: 400 });
  }

  const event = addEvent({
    type: type as EventType,
    path: typeof body?.path === "string" ? body.path.slice(0, 500) : undefined,
    productId: typeof body?.productId === "string" ? body.productId.slice(0, 100) : undefined,
    query: typeof body?.query === "string" ? body.query.slice(0, 300) : undefined,
    referrer: typeof body?.referrer === "string" ? body.referrer.slice(0, 500) : undefined
  });

  return NextResponse.json({ ok: true, id: event.id });
}
