import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import '../../Styles/Payment.css';


const Payment = () => {
    const { state } = useLocation();
    const router = useNavigate();

    if (!state) {
        return <h2 style={{ fontFamily: "Michroma" }}>No order details found</h2>;
    }

    const { product, size, quantity } = state;

    const handleCOD = () => {
        toast.success("Order placed with Cash on Delivery!");
        router("/order-success", {
            state: {
                product,
                size,
                quantity,
            }
        });
    };

    const handleOnlinePay = () => {
        toast.success("Redirecting to online payment...");
        router("/online-payment");
    };

    return (
        <div id="bodypayment">
            <div className="paymentmode">
                <img width={70} src="https://cdn-icons-png.flaticon.com/512/4727/4727104.png" />
                <h1>Payment Options</h1>


                <img width={100} src={product.productId.imgUrl} />
                <h4>Product: {product.productId.name}</h4>
                <p>Size: {size}</p>
                <p>Quantity: {quantity}</p>
                <p>Total Price: ₹{product.productId.price * quantity}</p>

                <button
                    className="cod"
                    onClick={handleCOD}
                >
                    Cash on Delivery
                </button>

                <button
                    className="payment"
                    onClick={handleOnlinePay}
                >
                    Pay Now
                </button>
            </div>
        </div>
    );
};

export default Payment;