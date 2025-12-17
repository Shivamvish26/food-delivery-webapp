import { ConnectDB } from "@/lib/db";
import { foodSchema } from "@/lib/model/foodmodel";
import { NextResponse } from "next/server";

export async function GET(request, content) {
  const id = content.params.id;
  let success = false;
  await ConnectDB();
  const result = await foodSchema.find({ resto_id: id });
  console.log(result)
  if (result) {
    success = true;
  }
  return NextResponse.json({ result, success });
}

