import React from "react";
import logo from "../images/red hm logo.jpg";
import add from "../assets/add_.svg";
import '../Styles/Header.css';
import searchIcon from "../assets/search_.svg";
import profile from "../assets/person_.svg";
import favorite from "../assets/favorite_.svg";
import shoppingBag from "../assets/shopping_bag_.svg";
import equal from "../assets/equal_.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import api from "../services/axios.config";

const Header = () => {
    const router = useNavigate();
    const user = useSelector((state) => state.counter.user);

    const menuRef = useRef(null);
    const [menuVisible, setMenuVisible] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const searchRef = useRef(null);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const [activeMenu, setActiveMenu] = useState(null);


    const menus = {
        Mens: {
            "Topwear": ["T-Shirts", "Shirts", "Sweaters"],
            "Bottomwear": ["Jeans", "Trousers", "Shorts"],
            "Shoes": ["Sneakers", "Formal Shoes", "Boots"]
        },
        Ladies: {
            "Dresses": ["Casual", "Party", "Evening"],
            "Tops": ["T-Shirts", "Blouses", "Shirts"],
            "Shoes": ["Heels", "Flats", "Boots"]
        },
        Kids: {
            "Clothing": ["T-Shirts", "Dresses", "Shorts"],
            "Toys": ["Educational", "Soft Toys", "Outdoor"],
            "Shoes": ["Sneakers", "Sandals"]
        }
    };
    // const [selectedCategory, setSelectedCategory] = useState("all");

    // // Use EXACT categories from backend
    // const categories = ["all", "Shoes", "shirt", "tshirt", "jeans"];

    // // ⬇ FIX: Accept category argument
    // const getProductsByCategory = async (cat) => {
    //     try {
    //         setLoading(true);

    //         const url = cat === "all"
    //             ? "/products/filter-products/all"
    //             : `/products/filter-products/${cat}`;

    //         const response = await api.get(url);

    //         if (response.data.success) {
    //             setProducts(response.data.products);
    //         }
    //     } catch (error) {
    //         console.log("Category API error :", error.response?.data || error.message || error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // const handleCategoryClick = (cat) => {
    //     setSelectedCategory(cat);
    //     getProductsByCategory(cat);
    // };


    // // Load default on mount
    // useEffect(() => {
    //     getProductsByCategory("all");
    // }, []);

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

    // const buttons = [
    //     { path: "/ladies", label: "LADIES" },
    //     { path: "/men", label: "MEN" },
    //     { path: "/kids", label: "KIDS" },
    //     { path: "/", label: "HOME" },
    // ];

    return (
        <div className="header">
            {user?.role !== "seller" && user?.role !== "admin" && (
                <>
                    <div id="top">
                        <button id="red">UP TO 50% OFF | SALE IS LIVE</button>
                        <div className="add">
                            <button onClick={() => router("/")}>SHOP NOW</button>
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
                                <button onClick={() => router("/")}>HOME</button>
                            </div>

                            {/* <div id="logo1">
                                {buttons.map((btn) => (
                                    <button
                                        key={btn.path}
                                        onClick={() => navigate(btn.path)}
                                        style={{ fontWeight: location.pathname === btn.path ? "bold" : "normal" }}
                                    >
                                        {btn.label}
                                    </button>
                                ))}
                            </div> */}

                            {/* <div id="logo1">
                                {["LADIES", "MEN", "KIDS", "HOME"].map((menu) => (
                                    <button
                                        key={menu}
                                        onMouseEnter={() => setActiveMenu(menu)}
                                        onMouseLeave={() => setActiveMenu(null)}
                                        onClick={() => {
                                            if (menu === "LADIES") router("/ladies");
                                            else if (menu === "MEN") router("/men");
                                            else if (menu === "KIDS") router("/kids");
                                            else router("/home");
                                        }}
                                    >
                                        {menu}
                                    </button>
                                ))} */}

                            {/* ------------------ Mega Menu ------------------ */}
                            {/* {activeMenu && activeMenu !== "HOME" && (
                                    <div className="mega-menu" style={{ border: "1px solid red" }}>
                                        {(() => {
                                            const menuKey = activeMenu.charAt(0) + activeMenu.slice(1).toLowerCase();
                                            const menuSections = menus[menuKey] || {};
                                            return Object.keys(menuSections).map((section) => (
                                                <div key={section} className="mega-section" style={{ border: "1px solid green" }}>
                                                    <h4>{section}</h4>
                                                    <ul>
                                                        {menuSections[section].map((item) => (
                                                            <li key={item}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ));
                                        })()}
                                    </div>
                                )}
                            </div> */}


                            {menuVisible && (
                                <div ref={menuRef} className="mobile-fullscreen-menu">
                                    <button className="close-menu-btn" onClick={() => setMenuVisible(false)} aria-label="Close menu">&#10005;</button>
                                    <button onClick={() => { router("/ladies") }}>LADIES</button>
                                    <button onClick={() => { router("/men") }}>MEN</button>
                                    <button onClick={() => { router("/kids") }}>KIDS</button>
                                    <button onClick={() => { router("/home") }}>HOME</button>
                                </div>
                            )}
                        </div>
                        <div id="logoright" ref={searchRef}>
                            <button className="logo4" onClick={() => setShowSearch((prev) => !prev)}><img src={searchIcon} alt="Search" /></button>
                            {showSearch && (
                                <input type="text" placeholder="Search..." value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)} className="search-input" />)}
                            <button className="logo4"><img src={profile} alt="profile" onClick={() => router("/profile")} /></button>
                            <button className="logo4"><img src={favorite} alt="favorite" onClick={() => router("/favourites")} /></button>
                            <button className="logo4"><img src={shoppingBag} alt="shoppingBag" onClick={() => router("/cart")} /></button>
                            <button className="logo2" onClick={() => setMenuVisible((prev) => !prev)}><img src={equal} alt="equal" /></button>
                        </div>
                    </div>
                </>
            )
            }
            {
                user?.role == "seller" && (
                    <>
                        <div id="top1">
                            <div id="logoleft">
                                <img src={logo} alt="H&M Logo" style={{ width: "45px", marginRight: "20" }} />
                                <div id="logo1">
                                    <button onClick={() => router("/add-product")}>Add Product</button>
                                    <button onClick={() => router("/view-sellers-product")}>View Products</button>
                                    <button onClick={() => router("/dashboard")}>Dashboard</button>
                                    <button onClick={() => router("/home")}>Analystics</button>
                                </div>
                                {menuVisible && (
                                    <div ref={menuRef} className="mobile-fullscreen-menu">
                                        <button className="close-menu-btn" onClick={() => setMenuVisible(false)} aria-label="Close menu">&#10005;</button>
                                        <button onClick={() => router("/dashboard")}>Dashboard</button>
                                        <button onClick={() => router("/men")}>Products</button>
                                        <button onClick={() => router("/home")}>Analystics</button>
                                    </div>
                                )}
                            </div>
                            <div id="logoright" ref={searchRef}>
                                <button className="logo4" onClick={() => setShowSearch((prev) => !prev)}><img src={searchIcon} alt="Search" /></button>
                                {showSearch && (
                                    <input type="text" placeholder="Search..." value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)} className="search-input" />)}
                                <button className="logo4"><img src={profile} alt="profile" onClick={() => router("/profile")} /></button>
                                <button className="logo4"><img src={shoppingBag} alt="orders" onClick={() => router("/cart")} /></button>
                                <button className="logo2" onClick={() => setMenuVisible((prev) => !prev)}><img src={equal} alt="equal" /></button>
                            </div>
                        </div>
                    </>
                )
            } {
                user?.role == "admin" && (
                    <>
                        <div id="top1">
                            <div id="logoleft">
                                <img src={logo} alt="H&M Logo" style={{ width: "45px", marginRight: "20" }} />
                                <div id="logo1">
                                    <button onClick={() => router("/admin/dashboard")}>Dashboard</button>
                                    <button onClick={() => router("/admin/users")}>Users</button>
                                    <button onClick={() => router("/admin/sellers")}>Sellers</button>
                                    <button onClick={() => router("/admin/products")}>Products</button>
                                    <button onClick={() => router("/admin/orders")}>Orders</button>
                                    <button onClick={() => router("/admin/analytics")}>Analytics</button>
                                </div>
                                {menuVisible && (
                                    <div ref={menuRef} className="mobile-fullscreen-menu">
                                        <button className="close-menu-btn" onClick={() => setMenuVisible(false)} aria-label="Close menu">&#10005;</button>

                                        <button onClick={() => router("/admin/dashboard")}>Dashboard</button>
                                        <button onClick={() => router("/admin/users")}>Users</button>
                                        <button onClick={() => router("/admin/sellers")}>Sellers</button>
                                        <button onClick={() => router("/admin/products")}>Products</button>
                                        <button onClick={() => router("/admin/orders")}>Orders</button>
                                        <button onClick={() => router("/admin/analytics")}>Analytics</button>
                                        <button onClick={() => router("/profile")}>Profile</button>
                                    </div>
                                )}
                            </div>
                            <div id="logoright" ref={searchRef}>
                                <button className="logo4" onClick={() => setShowSearch((prev) => !prev)}><img src={searchIcon} alt="Search" /></button>
                                {showSearch && (
                                    <input type="text" placeholder="Search..." value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)} className="search-input" />)}
                                <button className="logo4"><img src={profile} alt="profile" onClick={() => router("/profile")} /></button>
                                {/* <button className="logo4"><img src={shoppingBag} alt="orders" onClick={() => router("/cart")} /></button> */}
                                <button className="logo2" onClick={() => setMenuVisible((prev) => !prev)}><img src={equal} alt="equal" /></button>
                            </div>
                        </div>
                    </>
                )
            }
        </div >
    );
};

export default Header;