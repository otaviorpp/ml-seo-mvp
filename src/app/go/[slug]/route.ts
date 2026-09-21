import { NextResponse } from "next/server";

// Legacy tracking links no longer redirect visitors to commercial pages.
export function GET() {
  return NextResponse.json(
    { message: "Este link foi desativado. Acesse a página do produto para consultar as informações disponíveis." },
    { status: 410, headers: { "X-Robots-Tag": "noindex", "Cache-Control": "no-store" } }
  );
}
