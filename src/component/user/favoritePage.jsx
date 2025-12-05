import '../../Styles/MyCart.css';
import '../../Styles/cart.css';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/axios.config";


const Favourites = () => {
    const router = useNavigate();
    const user = useSelector((state) => state.counter.user);
    console.log("USER FROM REDUX:", user)
    const [loading, setLoading] = useState(true);

    // const user = JSON.parse(localStorage.getItem("user"))

    const [favorites, setFavorites] = useState([]);

    // const loadFavoriteProducts = async () => {
    //     try {
    //         const res = await api.get("/products/favorites");
    //         // const res = await api.get(`/products/favorites/${user?.userId}`);
    //         // const res = await api.get(`/products/favorites/${user?._id}`);
    //         // const res = await api.get(`/products/favorites/${userId}`);
    //         if (res.data.success) {
    //             setFavorites(res.data.favorites);
    //             // console.log("TOGGLE FAVORITE PAYLOAD:", {
    //             //     userId: user?._id,
    //             //     productId
    //             // });
    //         }
    //     } catch (err) {
    //         toast.error(err)
    //         console.log(err);
    //     }
    // };
    const userId = user?.userId; // 👈 must use ?. to handle undefined user

    useEffect(() => {
        if (!userId) return;

        const loadFavorites = async () => {
            try {
                const res = await api.get(`/products/favorites/${userId}`);
                if (res.data.success) {
                    setFavorites(res.data.favorites);
                }
            } catch (err) {
                console.log("Error loading favorites:", err);
            }
        };

        loadFavorites();
    }, [userId]);
    // useEffect(() => {
    //     loadFavoriteProducts();
    // }, []);


    const handleAddToCart = async (productId) => {
        try {
            const response = await api.post("/cart/add", { productId });

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
    // 🔹 1. If user NOT logged in → show Sign In page
    if (!userId) {
        return (
            <div id="cart">
                <div id="msg">
                    <div id="message">
                        <div id="bag">FAVOURITES</div>
                        <div id="alpha">
                            <div>
                                <span style={{ marginTop: "20px" }}>Sign in to save or access already saved items your Favourites</span>
                            </div>
                        </div>

                        <button onClick={() => router("/login")} id="sign">SIGN IN</button>
                    </div>
                </div>
            </div>
        );
    }

    // if (loading) {
    //     return <h2>Loading...</h2>;
    // }

    if (favorites.length === 0) {
        return <div id="cart">
            <div id="msg">
                <div id="message">
                    <div id="bag">FAVOURITES</div>
                    <div id="alpha">
                        <div>
                            <span style={{ marginTop: "20px" }}>Tap the heart icon on items to save them here.</span>
                        </div>
                    </div>

                    <button onClick={() => router("/")} id="sign">SHOP NOW</button>
                </div>
            </div>
        </div>
    }

    return (
        <div id="bodycart">
            <div style={{ display: "block" }}>
                <h1 id="bag">FAVOURITES</h1>

                {/* {loading ? <p>Loading...</p> : null} */}
                {favorites.map((product) => (

                    <div className='cart-products'>
                        <div key={product._id} className="cartsingleproduct"
                            onClick={() => router(`/product-details/${product._id}`)}
                        >
                            <div className="cart-imgdiv">
                                <img
                                    className='cartsingleimg'
                                    src={product.imgUrl}
                                    alt={product.name}
                                    width="200"
                                /></div>
                            <div className="cart-details">
                                <h4>{product.name}</h4>
                                <p><b>Price: </b>{product.price}</p><br />
                                <p><b>Quantity: </b> {product.quantity}</p><br />
                                <p><b>Size: </b> {product.size}</p><br />

                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <button className="editdelete" onClick={()=> handleAddToCart(product._id)}>ADD</button>
                                </div>
                            </div>

                        </div>
                    </div>

                ))}
            </div>
        </div>

    );
};

export default Favourites;
