import React from "react";
import PayButton from "../components/PayButton";

const PaymentPage = () => {
  return (
    <div style={{ color: "white", fontSize: "1.5em" ,fontFamily: "inter", justifyContent: "center", textAlign: "center", padding: "20px" }}>
      <h2>Secure Payment</h2>
      <p>Complete your payment using PayPal</p>
      <PayButton amount="10.00" />
    </div>
  );
};

export default PaymentPage;
