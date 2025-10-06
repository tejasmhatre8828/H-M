import React from "react";
import '../Styles/ordersuccess.css';
import lock from "../assets/lock_.svg";
import deployed from "../assets/deployed_code_.svg";
import payment from "../assets/payments_.svg";
import undo from "../assets/undo_.svg";
import sms from "../assets/sms_.svg";

const OrderSuccessfull = () => {

    return (
        <div id="bodyorder">
            <div id="msg">
                <div id="message">
                    <div id="thank">THANK YOU!</div>
                    <div id="member">
                        <div>
                            <span style={{ marginTop: "20px" }}>We are getting started
                                on your order right away, and you will receive an order confirmation email shortly to
                                 <u> tejasmhatre1234@gmail.com</u>. In the meantime, explore the latest fashion and get
                                inspired by new trends, just head over to <u>H&M Magazine</u></span>
                        </div>
                    </div>

                    <button id="view">VIEW ORDER CONFIRMATION</button>
                    <button id="read">Read about our return policy</button>
                </div>

                <div id="options">
                    <div class="ops"><img src={deployed} alt="deployed" /><button>DELIVERY</button></div>
                    <div class="ops"><img src={payment} alt="payment" /><button>PAYMENTS</button></div>
                    <div class="ops"><img src={undo} alt="undo" /><button>RETURNS</button></div>
                    <div class="ops"><img src={sms} alt="sms" /><button>CUSTOMER SERVICE</button></div>
                </div>
            </div>

            <div id="hmlink"><span style={{ color: "gray" }}>HM.COM /</span> ORDER CONFIRMATION</div>
        </div>
    );
};

export default OrderSuccessfull;