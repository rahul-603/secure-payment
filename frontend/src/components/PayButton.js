import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayButton = ({ amount }) => {
  return (
    <div style={{backgroundColor: "hsla(0, 0%, 100%, 1)", padding: "50px", marginTop: "80px", borderRadius: "20px"}}>
      <div style={{textAlign: "center", marginLeft: "350px", marginTop: "30px"}}>
        <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [{ amount: { value: amount, currency_code: "USD" } }],
              });
            }}
            onApprove={async (data, actions) => {
              const order = await actions.order.capture();
              console.log("Order details:", order);

              await fetch("http://localhost:5000/api/save-transaction", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  orderID: order.id,
                  payerID: order.payer.payer_id,
                  amount: order.purchase_units[0].amount.value,
                  currency: order.purchase_units[0].amount.currency_code,
                }),
              });

              window.location.href = "/success";
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default PayButton;
