import mongoose from "mongoose";

const { Schema } = mongoose;

const fishSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
});

const Fish = mongoose.models.Product || mongoose.model("Product", fishSchema);

export default Fish;
