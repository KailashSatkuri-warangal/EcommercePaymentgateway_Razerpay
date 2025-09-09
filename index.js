import express from "express";
import Razorpay from "razorpay";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

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

// Handle payment success + send email confirmation
app.post("/api/payment/success", async (req, res) => {
  const { razorpayPaymentId, razorpayOrderId } = req.body;

  // Configure SMTP transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: "satkurikailash@gmail.com",  // Payment confirmation receiver
    subject: "Payment Confirmation",
    text: `Payment successful!
Order ID: ${razorpayOrderId}
Payment ID: ${razorpayPaymentId}
Thank you for your purchase.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ msg: "Payment verified and email sent!" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ msg: "Payment verified but failed to send email." });
  }
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
