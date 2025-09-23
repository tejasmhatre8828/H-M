import React from "react";
import logo from "../images/red hm logo.jpg";
import add from "../assets/add_.svg";
import '../Styles/Header.css';
import searchIcon from "../assets/search_.svg";
import profile from "../assets/person_.svg";
import favorite from "../assets/favorite_.svg";
import shoppingBag from "../assets/shopping_bag_.svg";
import equal from "../assets/equal_.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const router = useNavigate();
    function redirecttoLogin() {
        router("/");
    }
    return (
        <div className="header">
            <div id="top">
                <span style={{ color: "red", fontSize: "15px" }}>UP TO 50% OFF | SALE IS LIVE</span>
                <div className="add">
                    <button onClick={redirecttoLogin}>SHOP NOW</button>
                    <img src={add} alt="Add Icon" style={{ width: "30", height: "25" }} />
                </div>
            </div>
            <div id="top1">
                <div id="logoleft">
                    <img src={logo} alt="H&M Logo" style={{ width: "45px", marginRight: "20" }} />
                    <div id="logo1">
                        <button onClick={() => router("/ladies")}>LADIES</button>
                        <button onClick={() => router("/mens")}>MEN</button>
                        <button onClick={() => router("/kids")}>KIDS</button>
                        <button onClick={() => router("/home")}>HOME</button>
                    </div>
                </div>
                <div id="logoright">
                    <button className="logo4"><img src={searchIcon} alt="Search" /></button>
                    <button className="logo4"><img src={profile} alt="profile" /></button>
                    <button className="logo4"><img src={favorite} alt="favorite" /></button>
                    <button className="logo4"><img src={shoppingBag} alt="shoppingBag" /></button>
                    <button className="logo2"><img src={equal} alt="equal" /></button>
                </div>
            </div>
        </div>
    );
};

export default Header;