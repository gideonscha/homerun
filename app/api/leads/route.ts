import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

type LeadPayload = {
  name?: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  neighborhood?: string;
  notes?: string;
  source?: string;
};

export async function POST(request: Request) {
  let payload: LeadPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const name = payload.name?.trim();
  const whatsapp = payload.whatsapp?.trim();
  const email = payload.email?.trim();

  if (!whatsapp && !email && !name) {
    return NextResponse.json({ error: "missing_identity" }, { status: 400 });
  }

  const supabase = createServiceClient();
  const { data, error } = await supabase
    .from("contacts")
    .insert({
      name,
      whatsapp,
      email,
      address: payload.address?.trim(),
      neighborhood: payload.neighborhood?.trim(),
      notes: payload.notes?.trim(),
      source: payload.source ?? "web",
      status: "new",
    })
    .select("id")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ id: data.id }, { status: 201 });
}
