// import '../../Styles/ViewSellersProduct.css';
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import api from "../../services/axios.config";


// const Dashboard = () => {
//     const router = useNavigate();
//     const user = useSelector((state) => state.counter.user);
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchOrders = async () => {
//             const res = await api.get("/cart/seller/orders");
//             if (res.data.success) setOrders(res.data.orders);
//         };
//         fetchOrders();
//     }, []);


//     return (
//         <div id="bodymen">
//             {loading ? (
//                 <h1>Loading...</h1>
//             ) : (
//                 <div className='allsellerproductdiv'>
//                     {products.map((product) => (
//                         <div
//                             key={product._id}
//                             onClick={() => router(`/single-product-seller/${product._id}`)}
//                             className='allsingleproductseller'
//                         >
//                             <img
//                                 src={product.imgUrl}
//                                 alt={product.name}
//                             />
//                             <div>
//                                 <h4>{product.name}</h4>
//                                 <p><b>Category:</b> {product.category}</p><br />
//                                 <p><b>Sub-Category:</b> {product.subCategory}</p><br />
//                                 <p><b>Price: </b>{product.price}</p><br />
//                                 <p><b>Sizes: </b>{product.sizes}</p><br />
//                                 <p><b>Quantity: </b> {product.quantity}</p><br />
//                                 <p><b>Description: </b> {product.description}</p><br />
//                                 <p><b>Colors: </b> {product.colors}</p><br />
//                                 <p><b>Created at: </b> {product.createdAt}</p><br />
//                             </div>

//                         </div>
//                     ))}


//                 </div>
//             )}
//         </div>
//     );
// };

// export default Dashboard;



import '../../Styles/Dashboard.css';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/axios.config";

const Dashboard = () => {
    const router = useNavigate();
    const user = useSelector((state) => state.counter.user);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await api.get("/cart/seller/orders");
                if (res.data.success) {
                    setOrders(res.data.orders);
                } else {
                    toast.error("Failed to load orders");
                }
            } catch (err) {
                console.log(err);
                toast.error("Error loading orders");
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div id="dash">
            <h4>Orderes</h4>
            {loading ? (
                <h1>Loading orders...</h1>
            ) : (
                <div className='allsellerorderdiv'>
                    {orders.length === 0 ? (
                        <h2>No orders received yet.</h2>
                    ) : (
                        orders.map((order) => (

                            <div key={order._id} className="sellerOrderCard">
                                

                                {/* Order Header */}
                                <div className="orderHeader">
                                    <h4>Order #{order._id}</h4>
                                    <p><b>Date:</b> {new Date(order.createdAt).toLocaleString()}</p>
                                    <p><b>Total Amount:</b> ₹{order.totalAmount}</p>
                                    <p><b>Status:</b> {order.status}</p>
                                </div>
                                <hr />
                                <br />
                                {/* Buyer Info */}
                                <div className="buyerInfo">
                                    <h4>Buyer Details</h4>
                                    <p><b>Name:</b> {order.userId?.name}</p>
                                    <p><b>Email:</b> {order.userId?.email}</p>
                                    <p><b>Phone:</b> {order.userId?.phone}</p>
                                    <p><b>Delivery Address:</b> {order.userId?.address}</p>
                                </div>
                                <hr />
                                <br />
                                {/* Products List */}
                                <div className="productList">


                                    {order.items.map((item) => (
                                        <div key={item.productId._id} className="productItem">
                                            <img
                                                src={item.productId.imgUrl[0]}
                                                alt={item.productId.name}
                                                className="orderProductImg"
                                            />

                                            <div className="orderedproDetails">
                                                <h4>{item.productId.name}</h4>
                                                <p><b>Price:</b> ₹{item.productId.price}</p>
                                                <p><b>Quantity Ordered:</b> {item.quantity}</p>
                                                <p><b>Colors:</b> {item.productId.colors}</p>
                                                {/* <p><b>Colors:</b> {item.productId.colors.join(", ")}</p> */}
                                                <p><b>Sizes:</b> {item.productId.sizes}</p>
                                                {/* <p><b>Sizes:</b> {item.productId.sizes.join(", ")}</p> */}
                                            </div>
                                        </div>
                                    ))}
                                </div>


                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
