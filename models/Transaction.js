const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, enum: ["Card", "UPI", "NetBanking"], required: true },
    status: { type: String, enum: ["Pending", "Success", "Failed"], default: "Pending" },
    transactionId: { type: String, unique: true, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { collection: "transactions" }
);

module.exports = mongoose.model("Transaction", TransactionSchema);
