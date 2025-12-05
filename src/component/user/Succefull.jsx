import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../../Styles/successfull.css';

const OrderSuccess = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    // Redirect to home after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    if (!state) {
        return <h2 style={{fontFamily: "Michroma", textAlign: 'center', marginTop: '50px' }}>No order details found</h2>;
    }

    const { product, size, quantity } = state;

    return (
        <div className="order-success-container">
            <div className="order-success-card">
                <img 
                    src="https://i.sstatic.net/GQFRr.gif" 
                    alt="Order Success" 
                    className="success-gif"
                />
                <h1>Order Placed Successfully!</h1>
                <p>Product: {product.productId.name}</p>
                <p>Size: {size}</p>
                <p>Quantity: {quantity}</p>
                <p>You will be redirected to home shortly...</p>
                <button id="trackbutton">Track Details</button>
            </div>
        </div>
    );
};

export default OrderSuccess;
