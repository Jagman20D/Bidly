import { NextResponse } from "next/server";
import { createClient } from "../../lib/supabaseClient";

const supabase = createClient();

export async function GET() {
  const { data, error } = await supabase.from("listings").select("*");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
