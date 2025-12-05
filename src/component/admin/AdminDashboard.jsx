import React, { useEffect, useState } from "react";
import api from "../../services/axios.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../../Styles/admindashboard.css";

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        users: 0,
        sellers: 0,
        products: 0,
        orders: 0,
    });
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const loadStats = async () => {
            try {
                const [usersRes, sellersRes, productsRes, ordersRes] = await Promise.all([
                    api.get("/admin/users"),
                    api.get("/admin/sellers"),
                    api.get("/admin/products"),
                    api.get("/admin/orders"),
                ]);

                setStats({
                    users: usersRes.data.users.length,
                    sellers: sellersRes.data.sellers.length,
                    products: productsRes.data.products.length,
                    orders: ordersRes.data.orders.length,
                });
            } catch (error) {
                console.error(error);
                toast.error("Failed to load dashboard data");
            } finally {
                setLoading(false);
            }
        };

        loadStats();
    }, []);

    if (loading) return <h2>Loading dashboard...</h2>;

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <div className="dashboard-summary">
                <div className="summary-card" onClick={() => navigate("/admin/users")}>
                    <h3>Users</h3>
                    <p>{stats.users}</p>
                </div>
                <div className="summary-card" onClick={() => navigate("/admin/sellers")}>
                    <h3>Sellers</h3>
                    <p>{stats.sellers}</p>
                </div>
                <div className="summary-card" onClick={() => navigate("/admin/products")}>
                    <h3>Products</h3>
                    <p>{stats.products}</p>
                </div>
                {/* <div className="summary-card" onClick={() => navigate("/admin/orders")}>
                    <h3>Orders</h3>
                    <p>{stats.orders}</p>
                </div> */}
            </div>
        </div>
    );
};

export default AdminDashboard;



// import React, { useEffect, useState } from "react";
// import api from "../../services/axios.config";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";

// const AdminDashboard = () => {
//     const user = useSelector((state) => state.counter.user);
//     const [users, setUsers] = useState([]);
//     const [sellers, setSellers] = useState([]);
//     const [products, setProducts] = useState([]);
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const loadAdminData = async () => {
//             try {
//                 const [usersRes, sellersRes, productsRes, ordersRes] = await Promise.all([
//                     api.get("/admin/users"),
//                     api.get("/admin/sellers"),
//                     api.get("/admin/products"),
//                     api.get("/admin/orders"),
//                 ]);

//                 setUsers(usersRes.data.users);
//                 setSellers(sellersRes.data.sellers);
//                 setProducts(productsRes.data.products);
//                 setOrders(ordersRes.data.orders);
//             } catch (error) {
//                 console.log(error);
//                 toast.error("Admin access failed");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         loadAdminData();
//     }, []);

//     if (loading) return <h2>Loading admin panel...</h2>;

//     return (
//         <div className="adminDashboard">
//             <h1>Admin Dashboard</h1>

//             {/* USERS */}
//             <section>
//                 <h2>Users</h2>
//                 {users.map(u => (
//                     <div key={u._id}>
//                         {u.name} - {u.email}
//                     </div>
//                 ))}
//             </section>

//             {/* SELLERS */}
//             <section>
//                 <h2>Sellers</h2>
//                 {sellers.map(s => (
//                     <div key={s._id}>
//                         {s.name} - {s.email}
//                     </div>
//                 ))}
//             </section>

//             {/* PRODUCTS */}
//             <section>
//                 <h2>Products</h2>
//                 {products.map(p => (
//                     <div key={p._id}>
//                         {p.name} - ₹{p.price}
//                     </div>
//                 ))}
//             </section>

//             {/* ORDERS */}
//             <section>
//                 <h2>Orders</h2>
//                 {orders.map(o => (
//                     <div key={o._id}>
//                         Order #{o._id} — {o.items.length} items — ₹{o.totalAmount}
//                     </div>
//                 ))}
//             </section>
//         </div>
//     );
// };

// export default AdminDashboard;
