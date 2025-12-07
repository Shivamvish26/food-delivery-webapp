import { ConnectDB } from "@/lib/db";
import { NextResponse } from "next/server";
import { Restaurantdata } from "@/lib/model/restaurantmodel";

export async function GET() {
  try {
    await ConnectDB();
    const data = await Restaurantdata.find();
    return NextResponse.json({ success: true, result: data });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}

export async function POST(request) {
  let payload = await request.json();
  await ConnectDB();
  const restaurant = new Restaurantdata(payload)
  const result =await restaurant.save()
  console.log(payload);
  return NextResponse.json({ result,success:true });
}
