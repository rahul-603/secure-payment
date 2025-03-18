require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const paypal = require("paypal-rest-sdk");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/secure-payment", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
.catch((err) => console.error(err));

app.use("/auth", require("./routes/auth")); // Connect auth routes

app.listen(5000, () => console.log("Server running on port 5000"));

paypal.configure({
  mode: "sandbox", // Use "live" for production
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET
});

app.use("/api/payments", paymentRoutes);
