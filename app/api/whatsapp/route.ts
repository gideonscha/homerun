import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * Phase 2 stub. Real implementation will:
 * 1. Verify webhook signature with WHATSAPP_VERIFY_TOKEN
 * 2. Upsert contact, load conversation + contact_memory
 * 3. Call Claude with tools (propose_quote, book_task, update_memory,
 *    escalate_to_merle), run the loop, reply via WhatsApp Cloud API,
 *    and push a notification to Merle.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");
  if (
    mode === "subscribe" &&
    token &&
    token === process.env.WHATSAPP_VERIFY_TOKEN
  ) {
    return new NextResponse(challenge ?? "", { status: 200 });
  }
  return NextResponse.json({ ok: false }, { status: 403 });
}

export async function POST() {
  return NextResponse.json(
    { ok: true, note: "Phase 2 stub — bot not wired yet" },
    { status: 200 },
  );
}
