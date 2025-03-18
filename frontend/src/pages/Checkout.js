import React from "react";
import PayButton from "../components/PayButton";

const Checkout = () => {
  return (
    <div>
      <h2>Complete Your Payment</h2>
      <PayButton amount="10.00" />  {/* Pass the amount dynamically */}
    </div>
  );
};

export default Checkout;
