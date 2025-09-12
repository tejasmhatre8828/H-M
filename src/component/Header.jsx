import React from "react";
// import logo from "../images/red hm logo.jpg";
// import searchIcon from "../assets/search_.svg"

const Header = () => {
    return (
        <header className="header">
            <div id="top">
                <span style={{ color: "red", fontSize: "15px" }}>UP TO 50% OFF | SALE IS LIVE</span>
                <div className="add" style={{ textDecoration: "underline" }}>
                    SHOP NOW <img src="../icons/add_.svg" alt="Add Icon" style={{ width: "30", height: "25" }} />
                </div>
            </div>
            <div id="top1">
                <div id="logoleft">
                    <img src={logo} alt="H&M Logo" style={{ width: "45", marginRight: "20" }} />
                    <div id="logo1">
                        <div style={{ width: "75" }}>LADIES</div>
                        <div style={{ width: "75" }}>MEN</div>
                        <div style={{ width: "75" }}>KIDS</div>
                        <div style={{ width: "75", fontWeight: "bold", color: "black" }}>HOME</div>
                    </div>
                </div>
                <div id="logoright">
                    <img className="logo4" src="./assets/seaech_.svg" alt="Search" />
                    {/* Repeat for other icons */}
                </div>
            </div>
        </header>
    );
};

export default Header;