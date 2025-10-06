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
        <footer id="bodyFooter">
            <div>
                {/* <div id="hmlink"><span style={{ color: "gray" }}>HM.COM / </span><b>SIGN IN</b></div> */}
                <div className="moreinfo">
                    <button>SHOP</button>
                    <div><img style={{ width: "30px", height: "25px" }} src={add} alt="add"/></div>
                </div>
                <div className="moreinfo">
                    <button>CORPORATE INFO</button>
                    <div><img style={{ width: "30px", height: "25px" }} src={add} alt="add" /></div>
                </div>
                <div className="moreinfo">
                    <button>HELP</button>
                    <div><img style={{ width: "30px", height: "25px" }} src={add} alt="add" /></div>
                </div>
                <div id="details">
                    <div className="texts">
                        <button style={{ marginBottom: "20px", fontWeight: "bold"}}>Shop</button><br />
                        <button>LADIES</button>
                        <button>MEN</button>
                        <button>KIDS</button>
                        <button>HOME</button>
                        <button>MAGAZINE</button>
                    </div>
                    <div className="texts">
                        <button style={{ marginBottom: "25px", fontWeight: "bold"}}>Corporate Info</button>
                        <button>CAREER AT H&M</button>
                        <button>ABOUT H&M GROUP</button>
                        <button>SUSTAINABILITY H&M GROUP</button>
                        <button>PRESS</button>
                        <button>INVESTOR RELATIONS</button>
                        <button>CORPORATE GOVERNANCE</button>
                    </div>
                    <div className="texts">
                        <button style={{ marginBottom: "20px", fontWeight: "bold"}}>Help</button>
                        <button>CUSTOMER SERVICE</button>
                        <button>MY H&M</button>
                        <button>FIND A STORE</button>
                        <button>LEGAL & PRIVACY</button>
                        <button>CONTACT</button>
                        <button>SECURE SHOPPING</button>
                        <button>COOKIE NOTICE</button>
                        <button>COOKIE SETTINGS</button>
                    </div>
                    <div className="texts">
                        <div style={{ paddingTop: "35px", fontSize: "16px" }}>Sign up now and be the first to know about
                            exclusive
                            offers, latest fashion news & style tips!</div>
                        <button>READ MORE</button>
                    </div>
                </div>
                <div><img id="black" src={blacklogo} alt="black hm-logo" />
                </div>
                <div id="ind">
                    <div id="rs">
                        <div><b>INDIA (Rs.)</b></div>
                        <div><button id="change">CHANGE REGION</button></div>
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
                <div id="bottom">
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
        </footer>
    );
};

export default Footer;