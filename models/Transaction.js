const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    orderID: String,
    payerID: String,
    amount: Number,
    currency: String,
    timestamp: {
      type: Date,
      default: function () {
        // Convert UTC to IST (UTC + 5:30)
        let utcDate = new Date();
        let istOffset = 5.5 * 60 * 60 * 1000; // 5 hours 30 minutes in milliseconds
        let istDate = new Date(utcDate.getTime() + istOffset);
        return istDate;
      }
    }},
    {collection: "transactions"});  // Ensure collection is explicitly set

module.exports = mongoose.model("Transaction", transactionSchema);
