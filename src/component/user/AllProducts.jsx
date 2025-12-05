import '../../Styles/AllProduct.css';
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/axios.config";

const AllProducts = () => {
    const router = useNavigate();
    const user = useSelector((state) => state.counter.user);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedGender, setSelectedGender] = useState("All");
    const [favorites, setFavorites] = useState([]);

    const [showFilters, setShowFilters] = useState(false);
    const menuRef = useRef(null);

    const categories = ["all", "topwear", "bottomwear", "footwear", "beauty"];
    const colors = ["red", "green", "blue", "yellow", "orange", "purple", "black", "white"];
    const genders = ["All", "ladies", "mens", "kids"];

    // CLOSE MENU ON OUTSIDE CLICK
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowFilters(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const getProductsByCategory = async (cat) => {
        try {
            setLoading(true);
            const url = cat === "all" ? "/products/filter-products/all" : `/products/filter-products/${cat}`;
            const response = await api.get(url);

            if (response.data.success) {
                setProducts(response.data.products);
            }
        } catch (error) {
            toast.error("Error fetching products");
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryChange = (cat) => {
        setSelectedCategory(cat);
        getProductsByCategory(cat);
    };

    const toggleColor = (clr) => {
        setSelectedColors((prev) =>
            prev.includes(clr)
                ? prev.filter((c) => c !== clr)
                : [...prev, clr]
        );
    };

    const filteredProducts = products.filter((product) => {
        const colorMatch =
            selectedColors.length === 0 ||
            product.colors?.some((c) => selectedColors.includes(c));

        const genderMatch =
            selectedGender === "All" || product.gender === selectedGender;

        return colorMatch && genderMatch;
    });

    useEffect(() => {
        getProductsByCategory("all");
    }, []);

    const toggleFavorite = async (productId) => {
        if (!user?.userId) {
            toast.error("Please login first");
            return;
        }
        try {
            const res = await api.post("/products/toggle-favorite", {
                userId: user.userId,
                productId,
            });

            if (res.data.success) {
                setFavorites(res.data.favorites);
            }
        } catch (err) {
            toast.error("Favorite update failed");
        }
    };

    return (
        <div id="bodyall">
            <div>
            {/* FILTER BUTTON */}
            <button
                className="filter-btn"
                onClick={() => setShowFilters(!showFilters)}
            >
                Filters ▾
            </button>
            </div>
            {/* FULL WIDTH FILTER MENU */}
            {showFilters && (
                <div className="filter-menu" ref={menuRef}>
                    <h2>Filters</h2>

                    {/* Category */}
                    <div className="filter-section">
                        <label>Category</label>
                        <select style={{border:"none", borderRadius:"8px", fontFamily: "Michroma"}}
                            value={selectedCategory}
                            onChange={(e) => handleCategoryChange(e.target.value)}
                        >
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat.toUpperCase()}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Colors */}
                    <div className="filter-section">
                        <label>Colors</label>
                        <div className="colors-container">
                            {colors.map((clr) => (
                                <button
                                    key={clr}
                                    onClick={() => toggleColor(clr)}
                                    className={`color-btn ${
                                        selectedColors.includes(clr) ? "selected-color" : ""
                                    }`}
                                    style={{
                                        backgroundColor: clr,
                                        color: clr === "white" ? "#000" : "#fff",
                                    }}
                                >
                                    {clr}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Gender */}
                    <div className="filter-section">
                        <label>Gender</label>
                        <select style={{border:"none", fontFamily: "Michroma"}}
                            value={selectedGender}
                            onChange={(e) => setSelectedGender(e.target.value)}
                        >
                            {genders.map((g) => (
                                <option key={g} value={g}>
                                    {g.toUpperCase()}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            )}

            {/* PRODUCT LIST */}
            {!loading && (
                <div className="all-product">
                    {filteredProducts.map((product) => (
                        <div
                            key={product._id}
                            onClick={() => router(`/product-details/${product._id}`)}
                            className="usersingleproductdiv"
                        >
                            <div className="image-container">
                                <img
                                    className="usersingleproductdimg"
                                    src={product.imgUrl}
                                    alt={product.name}
                                />
                                <button
                                    className="fav-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleFavorite(product._id);
                                    }}
                                >
                                    {favorites.includes(product._id) ? "❤️" : "🤍"}
                                </button>
                            </div>
                            <div>
                                <h4>{product.name}</h4>
                                <p><b>Category:</b> {product.category}</p>
                                <p><b>Price: </b>{product.price}</p>
                                <p><b>Colors: </b> {product.colors.join(", ")}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllProducts;







// import '../../Styles/AllProduct.css';
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import api from "../../services/axios.config";


// const AllProducts = () => {
//     const router = useNavigate();
//     const user = useSelector((state) => state.counter.user);
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [selectedCategory, setSelectedCategory] = useState("All");
//     const [selectedColor, setSelectedColor] = useState("All");
//     const [selectedGender, setSelectedGender] = useState("All");


//     const categories = ["all", "topwear", "bottomwear", "footwear", "beauty"];
//     const colors = ["All", "red", "green", "blue", "yellow", "orange", "purple", "black", "white"];
//     const genders = ["All", "ladies", "mens", "kids"];

//     const [favorites, setFavorites] = useState([]);

//     const getProductsByCategory = async (cat) => {
//         try {
//             setLoading(true);

//             // const url = cat === "all"
//             //     ? "/products/filter-products/all"
//             //     : `/products/filter-products/${cat}`;

//             const url =
//                 cat === "all"
//                     ? "/products/filter-products/all"
//                     : `/products/filter-products/${cat}`;
                    
//             const response = await api.get(url);

//             if (response.data.success) {
//                 setProducts(response.data.products);
//                 console.log("Returned products:", response.data.products);

//             }
//         } catch (error) {
//             toast.error(error)
//             console.log("Category API error :", error.response?.data || error.message || error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleCategoryClick = (cat) => {
//         setSelectedCategory(cat);
//         getProductsByCategory(cat);
//     };

//     const filteredProducts = products.filter((product) => {
//         const colorMatch =
//             selectedColor === "All" ||
//             product.colors?.includes(selectedColor);

//         const genderMatch =
//             selectedGender === "All" || product.gender === selectedGender;

//         return colorMatch && genderMatch;

//     });

//     useEffect(() => {
//         getProductsByCategory("all");
//     }, []);

//     const toggleFavorite = async (productId) => {
//         const userId = user?.userId;

//         if (!userId) {
//             toast.error("Please login first");
//             return;
//         }

//         try {
//             console.log("Sending:", { userId, productId });

//             const res = await api.post("/products/toggle-favorite", {
//                 userId: user.userId,
//                 productId
//             });

//             if (res.data.success) {
//                 // Update local favorites list
//                 setFavorites(res.data.favorites);
//             }

//         } catch (err) {
//             console.log("API ERROR:", err.response?.data || err.message);
//             toast.error("Favorite update failed");
//         }
//     };



//     return (
//         <div id="bodymen">
//             <div className="filter">
//                 <h2>Filters</h2>
//                 <h3>Category</h3>
//                 <div style={{ textAlign: "center", marginBottom: "20px" }}>
//                     {categories.map((cat) => (
//                         <button
//                             key={cat}
//                             onClick={() => handleCategoryClick(cat)}
//                             style={{
//                                 fontFamily: "Michroma",
//                                 fontSize: "8px",
//                                 margin: "5px",
//                                 padding: "10px 18px",
//                                 borderRadius: "6px",
//                                 border:
//                                     selectedCategory === cat
//                                         ? "2px solid #c05132"
//                                         : "1px solid #ccc",
//                                 backgroundColor:
//                                     selectedCategory === cat ? "#c05132" : "#fff",
//                                 color:
//                                     selectedCategory === cat ? "#fff" : "#333",
//                                 cursor: "pointer",

//                             }}
//                         >
//                             {cat.toUpperCase()}
//                         </button>
//                     ))}
//                 </div>

//                 <h3>colors</h3>
//                 <div style={{ textAlign: "center", marginBottom: "20px" }}>
//                     {colors.map((clr) => (
//                         <button
//                             key={clr}
//                             onClick={() => setSelectedColor(clr)}
//                             style={{
//                                 margin: "5px",
//                                 padding: "10px 10px",
//                                 borderRadius: "10px",
//                                 border:
//                                     selectedColor === clr
//                                         ? "2px solid #c05132"
//                                         : "1px solid #ccc",
//                                 backgroundColor: clr === "All" ? "#fff" : clr,
//                                 color:
//                                     clr === "All"
//                                         ? "#333"
//                                         : clr === "white"
//                                             ? "#000"
//                                             : "#fff",
//                                 cursor: "pointer",
//                             }}
//                         >
//                         </button>
//                     ))}
//                 </div>

//                 <h3>Gender</h3>
//                 <div style={{ textAlign: "center", marginBottom: "20px" }}>
//                     {genders.map((gender) => (
//                         <button
//                             key={gender}
//                             onClick={() => setSelectedGender(gender)}
//                             style={{
//                                 margin: "5px",
//                                 padding: "10px 18px",
//                                 borderRadius: "10px",
//                                 border:
//                                     selectedGender === gender
//                                         ? "2px solid #c05132"
//                                         : "1px solid #ccc",
//                                 backgroundColor:
//                                     selectedGender === "All" ? "#fff" : "#f0f0f0",
//                                 color:
//                                     selectedGender === "All"
//                                         ? "#333"
//                                         : "#000",
//                                 cursor: "pointer",
//                             }}
//                         >
//                             {gender}
//                         </button>
//                     ))}
//                 </div>
//             </div>
//             {!loading && (
//                 <div className='all-product'>
//                     {/* <h1>Products</h1> */}
//                     {filteredProducts.map((product) => (
//                         <div
//                             key={product._id}
//                             onClick={() => router(`/product-details/${product._id}`)}
//                             className='usersingleproductdiv'
//                         >
//                             <div className='image-container'>
//                                 <img
//                                     className='usersingleproductdimg'
//                                     src={product.imgUrl}
//                                     alt={product.name}
//                                 />
//                                 <button
//                                     className="fav-btn"
//                                     onClick={(e) => {
//                                         e.stopPropagation();
//                                         toggleFavorite(product._id);
//                                     }}
//                                 >
//                                     {favorites.includes(product._id) ? "❤️" : "🤍"}
//                                 </button></div>
//                             <div>
//                                 <h4>{product.name}</h4>
//                                 <p><b>Category:</b> {product.category}</p><br />
//                                 <p><b>Price: </b>{product.price}</p><br />
//                                 <p><b>Colors: </b> {product.colors}</p><br />
//                             </div>

//                         </div>
//                     ))}
//                 </div>
//             )}

//             {/* <div className='all-product'>
//                     <h1>Products</h1>
//                     {products.map((product) => (
//                         <div
//                             key={product._id}
//                             onClick={() => router(`/product-details/${product._id}`)}
//                             className='singleproductdiv'
//                         >
//                             <img
//                                 src={product.imgUrl}
//                                 alt={product.name}
//                             />
//                             <div>
//                                 <h4>{product.name}</h4>
//                                 <p><b>Category:</b> {product.category}</p><br />
//                                 <p><b>Price: </b>{product.price}</p><br />
//                                 <p><b>Colors: </b> {product.colors}</p><br />
//                             </div>

//                         </div>
//                     ))}
//                 </div> */}
//         </div>

//     );
// };

// export default AllProducts;
