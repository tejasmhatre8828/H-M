import '../../Styles/MyCart.css';
import '../../Styles/cart.css';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/axios.config";

const MyCart = () => {
    const router = useNavigate();
    const user = useSelector((state) => state.counter.user);

    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const [showAddressModal, setShowAddressModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    // Address Data
    const [address, setAddress] = useState({
        name: "",
        phone: "",
        street: "",
        city: "",
        pincode: "",
        state: "",
    });

    const userId = user?.userId;

    // Fetch Cart
    useEffect(() => {
        if (!userId) {
            setLoading(false);
            return;
        }

        const getCartData = async () => {
            try {
                const response = await api.get("/cart/get");

                if (response.data.success) {
                    setCartItems(response.data.cart.items);
                } else {
                    toast.error("Unable to retrieve cart");
                }
            } catch (err) {
                toast.error("Error loading cart");
            } finally {
                setLoading(false);
            }
        };

        getCartData();
    }, [userId]);

    // Remove Cart Item
    const handleRemoveItem = async (productId) => {
        try {
            const response = await api.delete(`/cart/remove/${productId}`);

            if (response.data.success) {
                toast.success("Item removed");
                setCartItems((prev) =>
                    prev.filter((item) => item.productId._id !== productId)
                );
            }
        } catch (error) {
            toast.error("Error removing item");
        }
    };

    // Continue to Payment with Address
    const continueToPayment = () => {
        const { name, phone, street, city, pincode, state } = address;

        if (!name || !phone || !street || !city || !pincode || !state) {
            toast.error("Please fill all address fields");
            return;
        }

        setShowAddressModal(false);

        router("/payment", {
            state: {
                product: selectedItem,
                size: selectedItem.size,     // size already selected earlier
                quantity: selectedItem.quantity,
                address,
            },
        });
    };

    // Not Logged In
    if (!userId) {
        return (
            <div id="cart">
                <div id="msg">
                    <div id="message">
                        <h2 id="bag">SHOPPING BAG</h2>
                        <span>Please login to view your cart</span>
                        <button onClick={() => router("/login")} id="sign">SIGN IN</button>
                    </div>
                </div>
            </div>
        );
    }

    if (loading) return <h2>Loading cart...</h2>;

    if (cartItems.length === 0) {
        return (
            <div id="cart">
                <div id="msg">
                    <div id="message">
                        <h2 id="bag">SHOPPING BAG</h2>
                        <span>Your Shopping Bag is Empty.</span>
                        <button onClick={() => router("/")} id="sign">SHOP NOW</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div id="bodycart">
            <div className='paymentmode'>
            <h1 id="bag">SHOPPING BAG</h1>

            {cartItems.map((item) => (
                <div key={item._id} className="cart-products">
                    <div className="cartsingleproduct">

                        <div className="cart-imgdiv">
                            <img
                                className="cartsingleimg"
                                src={item.productId.imgUrl}
                                alt={item.productId.name}
                            />
                        </div>

                        <div className="cart-details">
                            <h4>{item.productId.name}</h4>
                            <p><b>Price:</b> ₹{item.productId.price}</p>
                            <p><b>Quantity:</b> {item.quantity}</p>
                            <p><b>Size:</b> {item.size}</p>

                            <button
                                className="editdelete"
                                onClick={() => handleRemoveItem(item.productId._id)}
                            >
                                Remove
                            </button>

                            <button
                                className="editdelete"
                                onClick={() => {
                                    setSelectedItem(item);
                                    setShowAddressModal(true);
                                }}
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* ADDRESS POPUP */}
            {showAddressModal && (
                <div className="order-modal">
                    <div className="order-box">
                        <h2>Enter Delivery Address</h2>

                        <input type="text" placeholder="Full Name"
                            value={address.name}
                            onChange={(e) => setAddress({ ...address, name: e.target.value })} />

                        <input type="text" placeholder="Phone Number"
                            value={address.phone}
                            onChange={(e) => setAddress({ ...address, phone: e.target.value })} />

                        <input type="text" placeholder="Street Address"
                            value={address.street}
                            onChange={(e) => setAddress({ ...address, street: e.target.value })} />

                        <input type="text" placeholder="City"
                            value={address.city}
                            onChange={(e) => setAddress({ ...address, city: e.target.value })} />

                        <input type="text" placeholder="Pincode"
                            value={address.pincode}
                            onChange={(e) => setAddress({ ...address, pincode: e.target.value })} />

                        <input type="text" placeholder="State"
                            value={address.state}
                            onChange={(e) => setAddress({ ...address, state: e.target.value })} />

                        <div className="order-buttons">
                            <button className="cancel" onClick={() => setShowAddressModal(false)}>
                                Cancel
                            </button>
                            <button className="payment" onClick={continueToPayment}>
                                Continue to Payment
                            </button>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
};

export default MyCart;





// import '../../Styles/MyCart.css';
// import '../../Styles/cart.css';
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import api from "../../services/axios.config";


// const MyCart = () => {
//     const router = useNavigate();
//     const user = useSelector((state) => state.counter.user);
//     const [cartItems, setCartItems] = useState([]);
//     const [loading, setLoading] = useState(true);

//     // const user = JSON.parse(localStorage.getItem("user"))
//     const userId = user?.userId;

//     useEffect(() => {
//         if (!userId) {
//             setLoading(false);
//             console.log("No user login...")
//             return;
//         }

//         const getCartData = async () => {
//             try {
//                 const response = await api.get("/cart/get");
//                 // const response = await api.get(`/cart/get/${userId}`);

//                 if (response.data.success) {
//                     setCartItems(response.data.cart.items);
//                 } else {
//                     toast.error("Unable to retrieve cart");
//                 }
//             } catch (err) {
//                 console.log(err);
//                 toast.error("Error loading cart");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         getCartData();
//     }, [userId]);

//     const handlePlaceOrder = async () => {
//         try {
//             const response = await api.post("cart/order/place");

//             if (response.data.success) {
//                 toast.success("Order placed successfully!");
//                 setCartItems([]); // clear UI
//             } else {
//                 toast.error("Failed to place order");
//             }
//         } catch (error) {
//             toast.error("Order failed");
//         }
//     };

//     const handleRemoveItem = async (productId) => {
//         try {
//             const response = await api.delete(`/cart/remove/${productId}`);

//             if (response.data.success) {
//                 toast.success("Item removed from cart");

//                 // Update UI instantly
//                 setCartItems((prev) =>
//                     prev.filter((item) => item.productId._id !== productId)
//                 );
//             } else {
//                 toast.error("Failed to remove item");
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error("Error removing item");
//         }
//     };



//     // 🔹 1. If user NOT logged in → show Sign In page
//     if (!userId) {
//         return (
//             <div id="cart">
//                 <div id="msg">
//                     <div id="message">
//                         <div id="bag">SHOPPING BAG</div>
//                         <div id="alpha">
//                             <div>
//                                 <span style={{ marginTop: "20px" }}>Sign in to save or access already saved items in your shopping bag</span>
//                             </div>
//                         </div>

//                         <button onClick={() => router("/login")} id="sign">SIGN IN</button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     if (loading) {
//         return <h2>Loading cart...</h2>;
//     }

//     if (cartItems.length === 0) {
//         return <div id="cart">
//             <div id="msg">
//                 <div id="message">
//                     <div id="bag">SHOPPING BAG</div>
//                     <div id="alpha">
//                         <div>
//                             <span style={{ marginTop: "20px" }}>Your Shopping Bag is Empty.</span>
//                         </div>
//                     </div>

//                     <button onClick={() => router("/")} id="sign">SHOP NOW</button>
//                 </div>
//             </div>
//         </div>
//     }

//     return (
//         <div id="bodycart">
//             <div style={{ display: "block" }}>
//                 <h1 id="bag">SHOPPING BAG</h1>

//                 {loading ? <p>Loading...</p> : null}
//                 {cartItems.map((item) => (

//                     <div className='cart-products'>
//                         <div key={item._id} className="cartsingleproduct"
//                             onClick={() => router(`/product-details/${product.productId}`)}
//                         >
//                             <div className="cart-imgdiv">
//                                 <img
//                                     className='cartsingleimg'
//                                     src={item.productId.imgUrl}
//                                     alt={item.productId.name}
//                                     width="200"
//                                 /></div>
//                             <div className="cart-details">
//                                 <h4>{item.productId.name}</h4>
//                                 <p><b>Price: </b>{item.productId.price}</p><br />
//                                 <p><b>Quantity: </b> {item.quantity}</p><br />
//                                 <p><b>Size: </b> {item.productId.size}</p><br />

//                                 <button className="editdelete"
//                                     onClick={(e) => {
//                                         e.stopPropagation();
//                                         handleRemoveItem(item.productId._id);
//                                     }}>
//                                     Remove
//                                 </button>
//                                 <button className="editdelete"
//                                     onClick={(e) => {
//                                         e.stopPropagation();
//                                         handlePlaceOrder();
//                                     }}>
//                                     Place order
//                                 </button>
//                             </div>

//                         </div>
//                     </div>

//                 ))}
//             </div>
//         </div>

//     );
// };

// export default MyCart;
