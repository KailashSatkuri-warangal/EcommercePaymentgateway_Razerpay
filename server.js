import express from "express";
import cors from "cors";
import Razorpay from "razorpay";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// 1️⃣ Create Order Route
app.post("/api/payment/orders", async (req, res) => {
  const { amount, currency, receipt } = req.body;

  try {
    const order = await razorpay.orders.create({
      amount,
      currency,
      receipt,
      payment_capture: 1,
    });

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// 2️⃣ Payment Success Route
app.post("/api/payment/success", (req, res) => {
  console.log("Payment Success:", req.body);
  res.json({ msg: "Payment Successful!" });
});

// Start Backend Server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
