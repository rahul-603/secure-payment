import React from "react";
import PayButton from "../components/PayButton";

const PaymentPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Secure Payment</h2>
      <p>Complete your payment using PayPal</p>
      <PayButton amount="10.00" /> {/* Pass the dynamic amount here */}
    </div>
  );
};

export default PaymentPage;
