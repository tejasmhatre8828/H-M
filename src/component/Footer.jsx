import React from "react";
import '../Styles/Footer.css';
import blacklogo from '../images/black hm-logo.jpg';
import instagram from '../images/instagram.png';
import spotify from '../images/spotify.png';
import pinterest from '../images/pinterest.png';
import tiktok from '../images/tiktok.png';
import facebook from '../images/facebook.png';
import youtube from '../images/youtube.png';
import add from "../assets/add_.svg";

const Footer = () => {
    return (
        <div className="bodyHome">
            <div>
                {/* <div id="hmlink"><span style={{ color: "gray" }}>HM.COM / </span><b>SIGN IN</b></div> */}
                <div className="shop">
                    <div>SHOP</div>
                    <div><img style={{ width: "30px", height: "25px" }} src={add} alt="add"/></div>
                </div>
                <div className="shop">
                    <div>CORPORATE INFO</div>
                    <div><img style={{ width: "30px", height: "25px" }} src={add} alt="add" /></div>
                </div>
                <div className="shop">
                    <div>HELP</div>
                    <div><img style={{ width: "30px", height: "25px" }} src={add} alt="add" /></div>
                </div>
                <div id="details">
                    <div className="texts">
                        <div>
                            <h4 style={{ marginBottom: "20px" }}>Shop</h4>
                        </div>
                        <div>LADIES</div>
                        <div>MEN</div>
                        <div>KIDS</div>
                        <div>HOME</div>
                        <div>MAGAZINE</div>
                    </div>
                    <div className="texts">
                        <div>
                            <h4 style={{ marginBottom: "20px" }}>Corporate Info</h4>
                        </div>
                        <div>CAREER AT H&M</div>
                        <div>ABOUT H&M GROUP</div>
                        <div>SUSTAINABILITY H&M GROUP</div>
                        <div>PRESS</div>
                        <div>INVESTOR RELATIONS</div>
                        <div>CORPORATE GOVERNANCE</div>
                    </div>
                    <div className="texts">
                        <div>
                            <h4 style={{ marginBottom: "20px" }}>Help</h4>
                        </div>
                        <div>CUSTOMER SERVICE</div>
                        <div>MY H&M</div>
                        <div>FIND A STORE</div>
                        <div>LEGAL & PRIVACY</div>
                        <div>CONTACT</div>
                        <div>SECURE SHOPPING</div>
                        <div>COOKIE NOTICE</div>
                        <div>COOKIE SETTINGS</div>
                    </div>
                    <div className="texts">
                        <div style={{ paddingTop: "35px", fontSize: "16px" }}>Sign up now and be the first to know about
                            exclusive
                            offers, latest fashion news & style tips!</div>
                        <div><u>READ MORE</u></div>
                    </div>
                </div>
                <div><img id="black" src={blacklogo} alt="black hm-logo" />
                </div>
                <div id="ind">
                    <div id="rs">
                        <div><b>INDIA (Rs.)</b></div>
                        <div><span style={{ textDecoration: "underline" }}>CHANGE REGION</span></div>
                    </div>
                </div>
                <div id="media">
                    <div><img style={{ width: "26px", height: "26px" }} src={instagram} alt="instagram" /></div>
                    <div><img style={{ width: "25px", height: "20px" }} src={tiktok} alt="tiktok" /></div>
                    <div><img style={{ width: "25px", height: "20px" }} src={spotify} alt="spotify" /></div>
                    <div><img style={{ width: "25px", height: "20px" }} src={youtube} alt="youtube" /></div>
                    <div><img style={{ width: "25px", height: "20px" }} src={pinterest} alt="pinterest" /></div>
                    <div><img style={{ width: "25px", height: "20px" }} src={facebook} alt="facebook" /></div>
                </div>
                <div id="footer">
                    <div>The content of this site is copyright-protected and is the property of H & M Hennes & Mauritz AB.
                    </div>
                    <div id="media1">
                        <div><img style={{ width: "26px", height: "26px" }} src={instagram} alt="instagram" /></div>
                        <div><img style={{ width: "25px", height: "20px" }} src={tiktok} alt="tiktok" /></div>
                        <div><img style={{ width: "25px", height: "20px" }} src={spotify} alt="spotify" /></div>
                        <div><img style={{ width: "25px", height: "20px" }} src={youtube} alt="youtube" /></div>
                        <div><img style={{ width: "25px", height: "20px" }} src={pinterest} alt="pinterest" /></div>
                        <div><img style={{ width: "25px", height: "20px" }} src={facebook} alt="facebook" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;