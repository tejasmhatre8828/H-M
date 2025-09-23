import React from "react";
import '../Styles/Home.css';
import add from "../assets/add_.svg";
import bed4x5 from "../images/bg bed 4x5.jpg";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";
import img9 from "../images/img9.jpg";
import img10 from "../images/img10.jpg";
import img11 from "../images/img11.jpg";
import img12 from "../images/img12.jpg";
import beddingCE from "../images/Bedding_CE.jpg";
import tablewareCE from "../images/Tableware_CE.jpg";
import towels from "../images/Towels_CE_wk23-28-2x3_5.jpg";
import decorationsCE from "../images/Decorations_CE_wk23-28-2x3_4.jpg";


const Home = () => {

    return (
        <div id="home">
            <div id="sale">
                <div>SALE</div>
                <div style={{paddingBottom: "30px"}}>UPTO 50% OFF</div>
                <div>NEW STYLES</div>
                <div>ADDED</div>
            </div>
            <div className="shopnow">
                <div className="add">EXPLORE THE LATEST CURATION</div>
                <div className="add">SHOP NOW <img style={{ width: "30px", height: "25px" }} src={add} alt="add" /></div>
            </div>
            <div id="terms">Offer valid on selected styles. Available online & in-stores.*T&C Apply</div>
            <div id="background">
                <div id="block">
                    <div id="bgimg">
                        <div id="font">NATURAL NOTES</div>
                        <div style={{ paddingRight: "15px", paddingTop: "18px" }}><button
                            style={{ padding: "5px 10px", fontSize: "15px", border: "none", textDecoration: "underline" }}>SHOP
                            NOW</button></div>
                    </div>
                    <div id="bedimg"><img style={{ width: "100%", height: "100%" }} src={bed4x5} alt="bed4x5" /></div>

                </div>
                <div id="bgimg1">
                    <div id="content">
                        <div id="font">
                            <div>NATURAL</div>
                            <div>NOTES</div>
                        </div>
                    </div>
                    <div id="butn">
                        <button style={{ padding: "5px 10px", fontSize: "15px", border: "none" }}>SHOP NOW</button>
                    </div>
                    <div id="bedimg"><img style={{ width: "100vw", height: "50vh" }} src={bed4x5} alt="bed4x5" /></div>
                </div>


                <div id="viewall">
                    <div className="add">SUMMER BEDDING</div>
                    <div className="add"><u>SHOP NOW</u></div>
                </div>
                <div className="shopnow">
                    <div className="add">NEW IN</div>
                    <div className="add"><u>VIEW ALL</u></div>
                </div>
                <div id="products">
                    <div className="productsdiv">
                        <div><img src={img1} alt="img1" /></div>
                        <div><img src={img2} alt="img2" /></div>
                        <div><img src={img3} alt="img3" /></div>
                        <div><img src={img4} alt="img4" /></div>
                    </div>
                    <div className="productsdiv">
                        <div><img src={img5} alt="img5" /></div>
                        <div><img src={img6} alt="img6" /></div>
                        <div><img src={img7} alt="img7" /></div>
                        <div><img src={img8} alt="img8" /></div>
                    </div>
                    <div className="productsdiv">
                        <div><img src={img9} alt="img9" /></div>
                        <div><img src={img10} alt="img10" /></div>
                        <div><img src={img11} alt="img11" /></div>
                        <div><img src={img12} alt="img12" /></div>
                    </div>
                </div>
                <div className="bigimg">
                    <div className="bigimgdiv"><img src={beddingCE} alt="beddingCE" />
                        <h4 style={{ padding: "10px 0px 10px 15px", fontWeight: "normal" }}>BEDDING</h4><span
                            style={{ paddingLeft: "15px", fontWeight: "500", fontSize: "14px" }}>EXPLORE</span>
                    </div>
                    <div className="bigimgdiv"><img src={tablewareCE} alt="tablewareCE" />
                        <h4 style={{ padding: "10px 0px 10px 15px", fontWeight: "normal" }}>TABLEWARE</h4><span
                            style={{ paddingLeft: "15px", fontWeight: "500", fontSize: "14px", marginBottom: "100px" }}>EXPLORE</span>
                    </div>
                </div>
                <div className="bigimg1">
                    <div className="bigimgdiv"><img src={towels} alt="towel" />
                        <h4 style={{ padding: "10px 0px 10px 15px", fontWeight: "normal" }}>TOWELS</h4><span
                            style={{ paddingLeft: "15px", fontWeight: "500", fontSize: "14px" }}>EXPLORE</span>
                    </div>
                    <div className="bigimgdiv"><img src={decorationsCE} alt="decorationsCE" />
                        <h4 style={{ padding: "10px 0px 10px 15px", fontWeight: "normal" }}>DECORATIONS</h4><span
                            style={{ paddingLeft: "15px", fontWeight: "500", fontSize: "14px" }}>EXPLORE</span>
                    </div>
                </div>
                <div className="shop">HOME DECOR</div>
                <div>
                    <p style={{ fontSize: "15px", paddingInline: "15px", fontWeight: "500", lineHeight: "1.5" }}>Level up your
                        interior aesthetics with our home décor range. Whether you've moved into a new home,
                        or you want to breathe new life into your existing living space, our collection has every room in
                        the house covered. Our furniture edit offers stunning side tables and comfy lounge chairs, plus
                        there’s an array of chic lighting to create a calming ambience. Looking for those finishing touches?
                        Check out our beautiful <u>bed linen</u>, and top it off by scrolling for decorative <u>cushions and
                            cushion
                            covers, or create textured layers with blankets and throws. When it comes to decorations</u>,
                        add
                        scented candles to your bathroom, give your favorite plants a place to call home in our chic plant
                        pots, or experiment with wall hangings and elegant glassware. Whether your preferred style is
                        minimalistic or bold, we've got something to suit every taste in our home décor range.
                    </p>
                </div>
                <div id="hmlink"><span style={{ color: "gray" }}>HM.COM / </span><b>HOME</b></div>
            </div>
        </div>

    );
};

export default Home;