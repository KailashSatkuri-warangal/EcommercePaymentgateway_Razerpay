import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  Payment_ID: String,
  Order_ID: String,
  Signature: String,
  Card: String,
  Amount: Number,
  Currency: String,
  Date: String,
});

export default mongoose.model("Payment", paymentSchema);