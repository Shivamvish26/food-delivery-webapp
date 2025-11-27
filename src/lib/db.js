import mongoose from "mongoose";

export async function ConnectDB() {
  if (mongoose.connection.readyState >= 1) return;
  try {
    await mongoose.connect(process.env.MONGODB_URL_CONNECTION);
    console.log("Connected to Local Database");
  } catch (error) {
    console.error("Monogodb Connection Error", error);
  }
}
