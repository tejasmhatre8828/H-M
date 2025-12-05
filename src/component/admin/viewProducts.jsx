import React, { useEffect, useState } from "react";
import api from "../../services/axios.config";
import { toast } from "react-toastify";

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await api.get("/admin/products");
                setProducts(res.data.products);
            } catch (error) {
                console.error(error);
                toast.error("Failed to load products");
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) return <h2>Loading products...</h2>;

    return (
        <div className="products-page">
            <h1>Products</h1>
            {products.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            {/* <th>Image</th> */}
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(p => (
                            <tr key={p._id}>
                                {/* <td>{p.imgUrl}</td> */}
                                <td>{p.name}</td>
                                <td>₹{p.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ProductsPage;
