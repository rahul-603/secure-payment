const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const transactionRoutes = require("./routes/transactionRoutes");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/secure-payment", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ Connected to MongoDB - secure-payment"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));


app.use("/api", transactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
