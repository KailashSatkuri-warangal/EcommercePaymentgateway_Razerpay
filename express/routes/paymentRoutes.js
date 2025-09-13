import express from "express";
import Payment from "../models/Payment.js";

const router = express.Router();

// Save transaction
router.post("/", async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.status(201).json({ message: "Transaction saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
