import { ConnectDB } from "@/lib/db";
import { foodSchema } from "@/lib/model/foodmodel";
import { Restaurantdata } from "@/lib/model/restaurantmodel";
import { NextResponse } from "next/server";

export async function GET(request, content) {
  const { id } = await content.params;
  await ConnectDB();
  const deatils = await Restaurantdata.findOne({ _id: id });
  const fooddetails = await foodSchema.find({ resto_id: id });
  console.log(id);
  return NextResponse.json({ success: true, deatils, fooddetails });
}
