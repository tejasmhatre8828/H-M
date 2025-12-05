import React from "react";
import '../Styles/cart.css';
// import add from "../assets/add_.svg";
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const router = useNavigate();
    function redirecttoLogin() {
        router("/");
    }

    return (
        <div id="cart">
            <div id="msg">
                <div id="message">
                    <div id="bag">SHOPPING BAG</div>
                    <div id="alpha">
                        <div>
                            <span style={{ marginTop: "20px" }}>Sign in to save or access already saved items in your shopping bag</span>
                        </div>
                    </div>

                    <button onClick={() => router("/")} id="sign">SIGN IN</button>
                </div>
            </div>
        </div>

    );
};

export default Cart;