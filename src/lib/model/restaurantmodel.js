import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: String,
});

export const Restaurantdata =
  mongoose.models.Restaurantdata ||
  mongoose.model("Restaurantdata", restaurantSchema);
