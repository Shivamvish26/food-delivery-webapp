import { ConnectDB } from "@/lib/db";
import { foodSchema } from "@/lib/model/foodmodel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// GET API
export async function GET(request, content) {
  const { id } = await content.params;
  let success = false;
  await ConnectDB();
  const result = await foodSchema.find({
    resto_id: new mongoose.Types.ObjectId(id),
  });
  console.log(result);
  if (result.length > 0) {
    success = true;
  }
  return NextResponse.json({ result, success });
}

// Delete API
export async function DELETE(request, content) {
  const { id } = await content.params;
  let success = false;
  await ConnectDB();
  const result = await foodSchema.deleteOne({
    _id: new mongoose.Types.ObjectId(id),
  });
  console.log(result);
  if (result.deletedCount > 0) {
    success = true;
  }
  return NextResponse.json({ result, success });
}
