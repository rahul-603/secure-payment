import React from "react";
import PayButton from "../components/PayButton";

const Checkout = () => {
  return (
    <div>
      <h2>Complete Your Payment</h2>
      <PayButton amount="5.00" /> {/* Amount passed dynamically */}
    </div>
  );
};

export default Checkout;
