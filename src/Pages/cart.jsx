import React from "react";
import '../Styles/cart.css';
import add from "../assets/add_.svg";


const Cart = () => {

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

                    <button id="sign">SIGN IN</button>
                </div>
            </div>
            <div id="hmlink"><span style={{ color: "gray" }}>HM.COM /</span> SHOPPING BAG</div>
        </div>

    );
};

export default Cart;