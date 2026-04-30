import { NextResponse } from "next/server";
import { createClient } from "../../lib/supabaseClient";

export async function GET() {
  const supabase = createClient();
  const { data, error } = await supabase.from("listings").select("*").order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const payload = await request.json();
  const { title, description, price, image_url, user_id } = payload;

  if (!title || !description || price === undefined || price === null) {
    return NextResponse.json(
      { error: "title, description and price are required" },
      { status: 400 }
    );
  }

  const supabase = createClient();
  const { data, error } = await supabase.from("listings").insert([
    {
      title,
      description,
      price,
      image_url,
      user_id: user_id ?? "guest",
      created_at: new Date().toISOString(),
    },
  ]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
