import React from "react";
import '../Styles/mens.css';
import add from "../assets/add_.svg";
import filter from "../assets/filter_list.svg";
import shirt1 from "../images/shirt1.jpg";
import shirt2 from "../images/shirt2.jpg";
import shirt3 from "../images/shirt3.jpg";
import shirt4 from "../images/shirt4.jpg";
import { useNavigate } from "react-router-dom";


const Mens = () => {
    const router = useNavigate();
    function redirecttoSingleproduct() {
        router("/");
    }
    return (
        <div id="bodymen">
            <div id="new">
                <div>NEW IN</div>
            </div>
            <div id="sortbuttons">
                <button>VIEW ALL</button>
                <button>ACCESSORIES</button>
                <button>CLOTHES</button>
            </div>
            <div id="background">
                <div id="filter">
                    <button className="addbutton">SORT BY <img style={{ width: "30px", height: "25px" }} src={add} alt="add" /></button>
                    <button className="addbutton">FILTER <img style={{ width: "30px", height: "25px" }} src={filter} alt="filter" /></button>
                </div>
                <div id="products">
                    <div className="productsdiv">
                        <div><img src={shirt1} alt="shirt1" onClick={() => router("/singleproduct")}/>
                            <h2 className="productname">REGULAR FIT BOXY-STYLE</h2>
                            <h3 className="productprice">Rs.1,499.00</h3>
                            <div style={{ paddingleft: "8px", paddingBottom: "50px", marginLeft: "5px" }}><button
                                style={{ padding: "3px", color: "#b2bed9", borderRadius: "0%", borderWidth: "1px", margin: "3px" }}></button>
                                <button
                                    style={{ padding: "3px", color: "#bdafb3", borderRadius: "0%", borderWidth: "1px" }}></button>
                            </div>
                        </div>
                        <div><img src={shirt2} alt="shirt2" href="." />
                            <h2 className="productname">REGULAR FIT BOXY-STYLE</h2>
                            <h3 className="productprice">Rs.1,499.00</h3>
                            <div style={{ paddingLeft: "8px", paddingBottom: "50px" }}><button
                                style={{ padding: "3px", color: "#b2bed9", borderRadius: "0%", borderWidth: "1px", margin: "3px" }}></button>
                                <button
                                    style={{ padding: "3px", color: "#bdafb3", borderRadius: "0%", borderWidth: "1px" }}></button>
                            </div>
                        </div>
                        <div><img src={shirt3} alt="shirt3" />
                            <h2 className="productname">LOOSE FIT BOXY-STYLE</h2>
                            <h3 className="productprice">Rs.1,499.00</h3>
                            <div style={{ paddingLeft: "8px", paddingBottom: "50px" }}><button
                                style={{ padding: "3px", color: "#b2bed9", borderRadius: "0%", borderWidth: "1px", margin: "3px" }}></button>
                                <button
                                    style={{ padding: "3px", color: "#bdafb3", borderRadius: "0%", borderWidth: "1px" }}></button>
                            </div>
                        </div>
                        <div><img style={{ height: "fit-content" }} src={shirt4} alt="shirt4" />
                            <h2 className="productname">RELAXED FIT TROUSERS</h2>
                            <h3 className="productprice">Rs.2,799.00</h3>
                            <div style={{ paddingLeft: "8px", paddingBottom: "50px" }}><button
                                style={{ padding: "3px", color: "#b2bed9", borderRadius: "0%", borderWidth: "1px", margin: "3px" }}></button>
                                <button
                                    style={{ padding: "3px", color: "#bdafb3", borderRadius: "0%", borderWidth: "1px" }}></button>
                            </div>
                        </div>
                    </div>
                    <div className="productsdiv">
                        <div><img src={shirt1} alt="shirt1" />
                            <h2 className="productname">REGULAR FIT BOXY-STYLE</h2>
                            <h3 className="productprice">Rs.1,499.00</h3>
                            <div style={{ paddingleft: "8px", paddingBottom: "50px", marginLeft: "5px"}}><button
                                style={{ padding: "3px", color: "#b2bed9", borderRadius: "0%", borderWidth: "1px", margin: "3px" }}></button>
                                <button
                                    style={{ padding: "3px", color: "#bdafb3", borderRadius: "0%", borderWidth: "1px" }}></button>
                            </div>
                        </div>
                        <div><img src={shirt2} alt="shirt2" />
                            <h2 className="productname">REGULAR FIT BOXY-STYLE</h2>
                            <h3 className="productprice">Rs.1,499.00</h3>
                            <div style={{ paddingLeft: "8px", paddingBottom: "50px" }}><button
                                style={{ padding: "3px", color: "#b2bed9", borderRadius: "0%", borderWidth: "1px", margin: "3px" }}></button>
                                <button
                                    style={{ padding: "3px", color: "#bdafb3", borderRadius: "0%", borderWidth: "1px" }}></button>
                            </div>
                        </div>
                        <div><img src={shirt3} alt="shirt3" />
                            <h2 className="productname">LOOSE FIT BOXY-STYLE</h2>
                            <h3 className="productprice">Rs.1,499.00</h3>
                            <div style={{ paddingLeft: "5px", paddingBottom: "50px" }}><button
                                style={{ padding: "3px", color: "#b2bed9", borderRadius: "0%", borderWidth: "1px", margin: "3px" }}></button>
                                <button
                                    style={{ padding: "3px", color: "#bdafb3", borderRadius: "0%", borderWidth: "1px" }}></button>
                            </div>
                        </div>
                        <div><img style={{ height: "fit-content" }} src={shirt4} alt="shirt4" />
                            <h2 className="productname">RELAXED FIT TROUSERS</h2>
                            <h3 className="productprice">Rs.2,799.00</h3>
                            <div style={{ paddingLeft: "8px", paddingBottom: "50px" }}><button
                                style={{ padding: "3px", color: "#b2bed9", borderRadius: "0%", borderWidth: "1px", margin: "3px" }}></button>
                                <button
                                    style={{ padding: "3px", color: "#bdafb3", borderRadius: "0%", borderWidth: "1px" }}></button>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <button id="pagebutton">LOAD NEXT PAGE</button>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "90%" }}>
                        <div id="pages">
                            <button>Preview</button>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                            <button>5</button>
                            <button>Next</button>
                        </div>
                    </div>
                    <div id="hmlink"><span style={{ color: "gray" }}>HM.COM / MEN / </span><b>NEW IN VIEW ALL</b></div>
                </div>
            </div>
        </div>
    );
};

export default Mens;