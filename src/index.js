import express from "express";
import Razorpay from "razorpay";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Create order
app.post("/api/payment/orders", async (req, res) => {
  const { amount, currency, receipt } = req.body;

  const options = {
    amount: amount * 100,  // Amount in paise
    currency,
    receipt,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Handle payment success (Optional for verification)
app.post("/api/payment/success", (req, res) => {
  console.log("Payment success:", req.body);
  res.json({ msg: "Payment verified successfully!" });
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
