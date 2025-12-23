import { ConnectDB } from "@/lib/db";
import { Restaurantdata } from "@/lib/model/restaurantmodel";
import { NextResponse } from "next/server";

export async function GET(request) {
  const queryParams = request.nextUrl.searchParams;
  const location = queryParams.get("location");
  const restaurant = queryParams.get("restaurant");
  let filter = {};
  if (location) {
    filter = {
      city: { $regex: new RegExp(location, "i") },
    };
  }
  if (restaurant) {
    filter = {
      restaurant: { $regex: new RegExp(restaurant, "i") },
    };
  }
  await ConnectDB();
  const result = await Restaurantdata.find(filter);
  return NextResponse.json({ success: true, result });
}
