import React, { useEffect, useState } from "react";
import api from "../../services/axios.config";
import { toast } from "react-toastify";

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await api.get("/admin/orders");
                setOrders(res.data.orders);
            } catch (error) {
                console.error(error);
                toast.error("Failed to load orders");
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    if (loading) return <h2>Loading orders...</h2>;

    return (
        <div className="orders-page">
            <h1>Orders</h1>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Total Items</th>
                            <th>Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(o => (
                            <tr key={o._id}>
                                <td>{o._id}</td>
                                <td>{o.items.length}</td>
                                <td>₹{o.totalAmount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrdersPage;
