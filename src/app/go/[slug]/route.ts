import { NextRequest, NextResponse } from "next/server";
import { getProduct } from "@/lib/data";
import { addEvent } from "@/lib/store";

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return NextResponse.redirect(new URL("/", request.url));

  addEvent({
    type: "product_click",
    productId: product.id,
    path: request.nextUrl.searchParams.get("from") ?? undefined,
    referrer: request.headers.get("referer") ?? undefined
  });

  return NextResponse.redirect(product.mlUrl, 307);
}
