const express = require("express");
const router = express.Router();
const paypal = require("@paypal/checkout-server-sdk");

// PayPal SDK Configuration
const Environment = paypal.core.SandboxEnvironment;
const paypalClient = new paypal.core.PayPalHttpClient(
  new Environment(process.env.PAYPAL_CLIENT_ID, process.env.PAYPAL_CLIENT_SECRET)
);

// Create Order Route
router.post("/create-order", async (req, res) => {
  console.log("🔹 Create Order API hit");  // Log API request

  const request = new paypal.orders.OrdersCreateRequest();
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: { currency_code: "USD", value: "10.00" }, // Replace dynamically
      },
    ],
  });

  try {
    const order = await paypalClient.execute(request);
    console.log("✅ Order created successfully:", order.result);  // Log success
    res.json({ id: order.result.id });
  } catch (error) {
    console.error("❌ PayPal Create Order Error:", error.message);  // Log error
    res.status(500).json({ error: error.message });
  }
});

// Capture Payment Route
router.post("/capture-order", async (req, res) => {
  console.log("🔹 Capture Order API hit");  // Log API request
  const { orderID } = req.body;

  if (!orderID) {
    console.error("❌ Missing orderID in request body");  // Log missing orderID
    return res.status(400).json({ error: "orderID is required" });
  }

  console.log("Order ID received for capture:", orderID);

  const request = new paypal.orders.OrdersCaptureRequest(orderID);

  try {
    const capture = await paypalClient.execute(request);
    console.log("✅ Payment Captured:", capture.result);  // Log success
    res.json(capture.result);
  } catch (error) {
    console.error("❌ PayPal Capture Order Error:", error.message);  // Log error
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
