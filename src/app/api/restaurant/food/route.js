import { ConnectDB } from "@/lib/db";
import { foodSchema } from "@/lib/model/foodmodel";
import { connect } from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req, content){
  const id = content.params.id;
  let success = false
await ConnectDB();
const result = await foodSchema.find({resto_id:id})
if(result){
  success = true
}
  return NextResponse.json({result, success} );
}


export async function POST(request) {
  const payload = await request.json();
  let success = false;
  await ConnectDB();
  const food = new foodSchema(payload);
  const result = await food.save();
  if (result) {
    success = true;
  }
  return NextResponse.json({ result, success: true });
}
