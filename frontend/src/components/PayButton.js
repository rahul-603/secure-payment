import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const CLIENT_ID=process.env.REACT_APP_PAYPAL_CLIENT_ID;; 
console.log("PayPal Client ID:", process.env.REACT_APP_PAYPAL_CLIENT_ID);

const PayButton = () => {
    return (
        <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "10.00", // Change this if needed
                                    currency_code: "USD",
                                },
                            },
                        ],
                    }).then(orderID => {
                        console.log("Order Created:", orderID);
                        return orderID; // Ensure this is returned
                    });
                }}
                onApprove={(data, actions) => {
                    console.log("Payment Approved. Capturing Order...");
                    return actions.order.capture().then((details) => {
                        console.log("Transaction Completed by", details.payer.name.given_name);
                        alert("Transaction completed!");
                    }).catch(err => console.error("Capture Error:", err));
                }}
            />
        </PayPalScriptProvider>
    );
};

export default PayButton;
