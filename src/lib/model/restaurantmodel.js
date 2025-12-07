import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  email: String,
  password: String,
  city: String,
  restaurant: String,
  contact: String,
  name: String,
});

export const Restaurantdata =
  mongoose.models.Restaurantdata ||
  mongoose.model("Restaurantdata", restaurantSchema);
