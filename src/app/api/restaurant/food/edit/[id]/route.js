import { ConnectDB } from "@/lib/db";
import { foodSchema } from "@/lib/model/foodmodel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// GET PRODUCT DATA
export async function GET(request, content) {
  const { id } = await content.params;
  let success = false;
  await ConnectDB();
  const result = await foodSchema.findById({
    _id: new mongoose.Types.ObjectId(id),
  });
  console.log(result)
  if (result) {
    success = true;
  }
  return NextResponse.json({ result, success });
}
