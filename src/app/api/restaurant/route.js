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
  let result;
  let success = false;
  await ConnectDB();

  if (payload.login) {
    // login wala code
    result = await Restaurantdata.findOne({
      email: payload.email,
      password: payload.password,
    });
    if (result) {
      success = true;
    }
  } else {
    // resister wala code
    const restaurant = new Restaurantdata(payload);
    result = await restaurant.save();
    console.log(payload);
    if (result) {
      success = true;
    }
  }

  return NextResponse.json({ result, success });
}
