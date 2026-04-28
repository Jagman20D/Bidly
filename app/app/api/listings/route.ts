import { supabase } from "@/app/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { title, description, price, image_url, user_id } = await req.json();

  const { data, error } = await supabase
    .from("listings")
    .insert([{ title, description, price, image_url, user_id }])
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ listing: data[0] }, { status: 200 });
}
