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
import { useState, useEffect, useRef } from "react";

const Header = () => {
    const router = useNavigate();
    function redirecttoLogin() {
        router("/");
    }

    const menuRef = useRef(null);
    const [menuVisible, setMenuVisible] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const searchRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSearch(false);
            }
            if (!event.target.closest('#logo1') && !event.target.closest('.logo2')) {
                setMenuVisible(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="header">
            <div id="top">
                <button id="red">UP TO 50% OFF | SALE IS LIVE</button>
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
                        <button onClick={() => router("/men")}>MEN</button>
                        <button onClick={() => router("/kids")}>KIDS</button>
                        <button onClick={() => router("/home")}>HOME</button>
                    </div>
                    {menuVisible && (
                        <div ref={menuRef} className="mobile-fullscreen-menu">
                            <button className="close-menu-btn" onClick={() => setMenuVisible(false)} aria-label="Close menu">&#10005;</button>
                            <button onClick={() => { router("/ladies"); console.log("Navigating to /men") }}>LADIES</button>
                            <button onClick={() => { router("/men")}}>MEN</button>
                            <button onClick={() => { router("/kids")}}>KIDS</button>
                            <button onClick={() => { router("/home")}}>HOME</button>
                        </div>
                    )}
                </div>
                <div id="logoright" ref={searchRef}>
                    <button className="logo4" onClick={() => setShowSearch((prev) => !prev)}><img src={searchIcon} alt="Search" /></button>
                    {showSearch && (
                        <input type="text" placeholder="Search..." value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)} className="search-input" />)}
                    <button className="logo4"><img src={profile} alt="profile" onClick={() => router("/")} /></button>
                    <button className="logo4"><img src={favorite} alt="favorite" /></button>
                    <button className="logo4"><img src={shoppingBag} alt="shoppingBag" onClick={() => router("/cart")} /></button>
                    <button className="logo2" onClick={() => setMenuVisible((prev) => !prev)}><img src={equal} alt="equal" /></button>
                </div>
            </div>
        </div>
    );
};

export default Header;