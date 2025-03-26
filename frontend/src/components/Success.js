import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div style={{ color: "white",textAlign: "center", padding: "20px" }}>
      <h2>Payment Successful 🎉</h2>
      <p>Thank you for your payment.</p>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default Success;
