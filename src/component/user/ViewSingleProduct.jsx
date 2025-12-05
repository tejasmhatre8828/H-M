import '../../Styles/ViewSellersProduct.css';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/axios.config";
import add from "../../assets/add_.svg";


const ViewSingleProduct = () => {

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const user = useSelector((state) => state.counter.user);

    const { productId } = useParams();
    const router = useNavigate();
    const [favorites, setFavorites] = useState([]);
    const [selectedSize, setSelectedSize] = useState("");



    const getSingleProductData = async () => {
        try {
            setLoading(true);
            const response = await api.get(`/products/${productId}`);
            console.log("API Response:", response.data);
            if (response.data.product) {
                setProduct(response.data.product);
            }
            if (!response.data.product) {
                toast.error("Product not found");
                return;
            }
        } catch (error) {
            toast.error(error)
            console.log("Axios Error:", error);
        } finally {
            setLoading(false);

        };
    }
    useEffect(() => {
        if (productId) getSingleProductData();
    }, [productId]);

    // console.log("Product in component state:", product);

    const handleAddToCart = async () => {
        if (!selectedSize) {
            toast.error("Please select a size");
            return;
        }
        try {
            const response = await api.post("/cart/add", { productId, size: selectedSize });

            if (response.data.success) {
                toast.success("Added to cart!");
            } else {
                toast.error("Failed to add");
            }
        } catch (error) {
            toast.error("Error adding to cart");
            console.log(error);
        }
    };

    // const toggleFavorite = async (productId) => {
    //     const userId = user?.userId;

    //     if (!userId) {
    //         toast.error("UserId missing! Please login first");
    //         return;
    //     }
    //     try {
    //         const res = await api.post("/products/toggle-favorite", { productId});

    //         if (res.data.success) {
    //             setFavorites(res.data.favorites); // updated list from backend
    //             console.log("PRODUCT ID RECEIVED:", productId);
    //         }
    //         console.log("TOGGLE FAVORITE — Sending:", {
    //             userId,
    //             productId
    //         });
    //     } catch (err) {
    //         console.log(err)
    //         toast.error("Error updating favorites");
    //     }
    // };


    const toggleFavorite = async (productId) => {
        const userId = user?.userId;

        if (!userId) {
            toast.error("Please login first");
            return;
        }

        try {
            console.log("Sending:", { userId, productId });

            const res = await api.post("/products/toggle-favorite", {
                userId: user.userId,
                productId
            });

            if (res.data.success) {
                // Update local favorites list
                setFavorites(res.data.favorites);
            }

        } catch (err) {
            console.log("API ERROR:", err.response?.data || err.message);
            toast.error("Favorite update failed");
        }
    };


    return (
        // <div id="bodysingle">
        //     {loading ? <h1>Loading...</h1> : null}
        //     {product && (
        //         <div
        //             key={product._id}
        //             className='singleproductseller'
        //         >
        //             <div className="single-imgdiv">
        //                 <img
        //                     src={product.imgUrl}
        //                     alt={product.name}
        //                 />
        //             </div>
        //             <div className="single-detailsdiv">
        //                 <h4>{product.name}</h4>
        //                 <p><b>Category:</b> {product.category}</p><br />
        //                 <p><b>Sub-Category:</b> {product.subCategory}</p><br />
        //                 <p><b>Gender:</b> {product.gender}</p><br />
        //                 <p><b>Price: </b>{product.price}</p><br />
        //                 <p><b>Sizes: </b>{product.sizes}</p><br />
        //                 <p><b>Quantity: </b> {product.quantity}</p><br />
        //                 <p><b>Description: </b> {product.description}</p><br />
        //                 <p><b>Colors: </b> {product.colors}</p><br />

        //                 <button className='editdelete' onClick={handleAddToCart}>
        //                     Add to Cart
        //                 </button>
        //             </div>
        //         </div>
        //     )}
        // </div>

        <div id="bodyproduct">
            <div id="background">
                {loading ? <h1>Loading...</h1> : null}
                {product && (
                    <div
                        key={product._id}
                        id="background"
                    >
                        {/* <div className="single-imgdiv">
                            <img
                                src={product.imgUrl}
                                alt={product.name}
                            />
                        </div> */}
                        <div id="items">
                            <div className="itemsdiv">
                                <div id="img1">
                                    <img style={{ width: "100%" }} src={product.imgUrl} alt={product.name} />
                                </div>
                                <div className="img2"><img style={{ width: "50%" }} src={product.imgUrl} alt={product.name} />
                                    <img style={{ width: "50%" }} src={product.imgUrl} alt={product.name} />
                                </div>
                                <div id="img3"><img style={{ width: "100%" }} src={product.imgUrl} alt={product.name} /></div>
                                <div className="img2"><img style={{ width: "50%" }} src={product.imgUrl} alt={product.name} />
                                    <img style={{ width: "50%" }} src={product.imgUrl} alt={product.name} />
                                </div>
                            </div>

                            <div id="singleproductdetails">
                                <div id="productsdetails">
                                    <button
                                        className="fav-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleFavorite(product._id);
                                        }}
                                    >
                                        {favorites?.includes(product._id) ? "❤️" : "🤍"}
                                    </button>
                                    <h4>{product.name}</h4><br />

                                    {/* <p><b>Category:</b> {product.category}</p><br /> */}
                                    <p><b>Price: </b>{product.price}</p><br />
                                    {/* <p><b>Sizes: </b>{product.sizes}</p><br /> */}
                                    <p><b>Color: </b> {product.colors}</p><br />
                                </div>

                                <div id="bttons">
                                    <button className="shirtbtn"><img src={product.imgUrl} /></button>
                                    {/* <button class="shirtbtn">{product.colors} </button> */}
                                </div>
                                
                                <div className="name">SELECT SIZE</div>
                                <div id="sizes">
                                    <button className="size" style={{
                                        fontWeight: selectedSize === "XS" ? "bold" : "normal",
                                        border: selectedSize === "XS" ? "2px solid black" : "1px solid #ccc"
                                    }} onClick={() => setSelectedSize("XS")}>XS</button>
                                    <button className="size" style={{
                                        fontWeight: selectedSize === "S" ? "bold" : "normal",
                                        border: selectedSize === "S" ? "2px solid black" : "1px solid #ccc"
                                    }} onClick={() => setSelectedSize("S")}>S</button>
                                    <button className="size" style={{
                                        fontWeight: selectedSize === "M" ? "bold" : "normal",
                                        border: selectedSize === "M" ? "2px solid black" : "1px solid #ccc"
                                    }} onClick={() => setSelectedSize("M")}>M</button>
                                    <button className="size" style={{
                                        fontWeight: selectedSize === "L" ? "bold" : "normal",
                                        border: selectedSize === "L" ? "2px solid black" : "1px solid #ccc"
                                    }} onClick={() => setSelectedSize("L")}>L</button>
                                    <button className="size" style={{
                                        fontWeight: selectedSize === "XL" ? "bold" : "normal",
                                        border: selectedSize === "XL" ? "2px solid black" : "1px solid #ccc"
                                    }} onClick={() => setSelectedSize("XL")}>XL</button>
                                    <button className="size" style={{
                                        fontWeight: selectedSize === "XXL" ? "bold" : "normal",
                                        border: selectedSize === "XXL" ? "2px solid black" : "1px solid #ccc"
                                    }} onClick={() => setSelectedSize("XXL")}>XXL</button>
                                </div>
                                {/* <button className='editdelete' onClick={handleAddToCart}>
                                Add to Cart
                            </button> */}

                                <div className="name"
                                    style={{ paddingTop: "20px", textAlign: "right", textDecoration: "underline", paddingRight: "20px" }}>
                                    SIZE GUIDE</div>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <button id="addbutton" onClick={handleAddToCart}>ADD</button>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div id="more">
                                        <div>Find in store</div>
                                        <div><u>CHECK AVAILABILITY</u></div>
                                    </div>
                                </div>
                                <div className="help">
                                    <div>DESCRIPTION & FIT</div>
                                    <div><img style={{ width: "30px", height: "25px" }} src={add} alt="add" /></div>
                                </div>
                                <div className="help">
                                    <div>MATERIALS</div>
                                    <div><img style={{ width: "30px", height: "25px" }} src={add} alt="add" /></div>
                                </div>
                                <div className="help">
                                    <div>DELIVERY AND PAYMENT</div>
                                    <div><img style={{ width: "30px", height: "25px" }} src={add} alt="add" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

};

export default ViewSingleProduct;
