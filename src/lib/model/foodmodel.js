const { default: mongoose } = require("mongoose");

const foodModel = new mongoose.Schema({
  product: String,
  price: Number,
  discountprice: Number,
  category: String,
  brand: String,
  stock: Number,
  productcode: String,
  product_image: String,
  description: String,
  resto_id: mongoose.Schema.Types.ObjectId,
});

export const foodSchema =
  mongoose.models.foods || mongoose.model("foods", foodModel);
