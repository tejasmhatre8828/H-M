import React, { useEffect, useState } from "react";
import '../Styles/HomePage.css';
import { useNavigate, useParams } from "react-router-dom";

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

const HomePage = () => {
    const router = useNavigate();
    const { category: routeCategory } = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);



    return (
        <div id="home">
            <div className="wintersale" onClick={() => router("/all-products")}>
                <div>WINTER SALE</div>
                <div style={{ paddingBottom: "30px" }}>UPTO 50% OFF</div>
                <div>NEW STYLES</div>
                <div>ADDED</div>
            </div>
            <div className="newin">
                <div className="add">NEW IN</div>
                <div className="add"><button>VIEW ALL</button></div>
            </div>
            <div className="saleimg" onClick={() => router("/ladies")}>
                <img src="https://image.hm.com/content/dam/global_campaigns/the_studio_all/june-2025/horizontal-/edit/2052-4x5-4-edit-Horizontal-wk26.jpg?imwidth=4800" />
            </div>
            <div className="newin">
                <div className="add">LADIES FASHION</div>
                <div className="add"><button>VIEW ALL</button></div>
            </div>
            <div className="saleimgmens" onClick={() => router("/mens")}>
                <img src="https://www2.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w48-w49-tuesday/cat-entries/Jeans-CE-wk48-52.jpg" />
                <img src="https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w48-w49-tuesday/new-croppings-w48/MS13LH1-startpage-teaser-w48-NEW-2x3.jpg?imwidth=4800" />
            </div>
            <div className="newin">
                <div className="add">MENS STYLE</div>
                <div className="add"><button>VIEW ALL</button></div>
            </div>
            <div id="background">
                {/* <div className="newin">
                    <div className="add">NEW IN</div>
                    <div className="add"><button>VIEW ALL</button></div>
                </div> */}







                <div id="products" onClick={() => router("/home")}>
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
                {/* <div className="bigimg">
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
                </div> */}
            </div>
        </div>

    );
};

export default HomePage;


