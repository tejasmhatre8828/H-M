import React, { useEffect, useState } from "react";
import api from "../../services/axios.config";
import { toast } from "react-toastify";

const SellersPage = () => {
    const [sellers, setSellers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSellers = async () => {
            try {
                const res = await api.get("/admin/sellers");
                setSellers(res.data.sellers);
            } catch (error) {
                console.error(error);
                toast.error("Failed to load sellers");
            } finally {
                setLoading(false);
            }
        };
        fetchSellers();
    }, []);

    if (loading) return <h2>Loading sellers...</h2>;

    return (
        <div className="sellers-page">
            <h1>Sellers</h1>
            {sellers.length === 0 ? (
                <p>No sellers found.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sellers.map(s => (
                            <tr key={s._id}>
                                <td>{s.name}</td>
                                <td>{s.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default SellersPage;
