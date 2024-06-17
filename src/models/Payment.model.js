import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["paid", "refunded"], default: "paid" },
    payment_method: { type: String, required: true },
    transaction_id: { type: String, required: true },
  },
  { timestamps: true }
);

export const Payment = mongoose.model("Payment", PaymentSchema);