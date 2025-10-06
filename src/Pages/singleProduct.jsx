import React from "react";
import '../Styles/singleproduct.css';
import add from "../assets/add_.svg";
import shirt1 from "../images/shirt1.jpg";
import a from "../images/shirt1-a.jpg";
import b from "../images/shirt1-b.jpg";
import c from "../images/shirt1-c.jpg";
import d from "../images/shirt1-d.jpg";
import e from "../images/shirt1-e.jpg";
import f from "../images/shirt1-f.jpg";

const SingleProduct = () => {

    return (
        <div id="bodyproduct">
            <div id="background">
                <div id="items">
                    <div class="itemsdiv">
                        <div id="img1">
                            <img style={{width: "100%"}} src={shirt1} alt="shirt1" />
                        </div>
                        <div class="img2"><img style={{width: "50%"}} src={a} alt="a" />
                            <img style={{width: "50%"}} src={b} alt="b" />
                        </div>
                        <div id="img3"><img style={{width: "100%"}} src={c} alt="c" /></div>
                        <div class="img2"><img style={{width: "50%"}} src={d} alt="d" />
                            <img style={{width: "50%"}} src={e} alt="e"/>
                        </div>
                    </div>
                    <div id="sort">
                        <div id="productsdetails">
                            <div class="name">REGULAR FIT BOXY-STYLE POPLIN SHIRT</div>
                            <h3 class="price">Rs.1,499.00</h3>
                            <div class="name" style={{color: "gray"}}>MRP inclusive of all taxes</div>
                            <div class="name" style={{paddingTop: "50px", fontWeight:"200"}}>COLOUR - Light blue/Striped</div>
                        </div>
                        <div id="bttons"><button class="shirtbtn"><img style={{width: "100%"}} src={e} alt="e" />
                        </button>
                            <button class="shirtbtn"><img style={{width: "100%"}} src={f} alt="f" /> </button>
                        </div>
                        <div class="name">SELECT SIZE</div>
                        <div id="sizes">
                            <button class="size">XS</button>
                            <button class="size">S</button>
                            <button class="size">M</button>
                            <button class="size">L</button>
                            <button class="size">XL</button>
                            <button class="size">XXL</button>
                        </div>
                        <div class="name"
                            style={{paddingTop: "20px", textAlign: "right", textDecoration: "underline", paddingRight: "20px"}}>
                            SIZE GUIDE</div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <button id="addbutton">ADD</button>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <div id="more">
                                <div>Find in store</div>
                                <div><u>CHECK AVAILABILITY</u></div>
                            </div>
                        </div>
                        <div class="help">
                            <div>DESCRIPTION & FIT</div>
                            <div><img style={{width: "30px", height: "25px"}} src={add} alt="add" /></div>
                        </div>
                        <div class="help">
                            <div>MATERIALS</div>
                            <div><img style={{width: "30px", height: "25px"}} src={add} alt="add" /></div>
                        </div>
                        <div class="help">
                            <div>DELIVERY AND PAYMENT</div>
                            <div><img style={{width: "30px", height: "25px"}} src={add} alt="add" /></div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SingleProduct;