import '../../Styles/ViewSellersProduct.css';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/axios.config";


const ViewSellersProduct = () => {
    const router = useNavigate();
    const user = useSelector((state) => state.counter.user);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getSellerProducts() {
        try {
            setLoading(true);
            const response = await api.get("/seller/get-seller-products");
            if (response.data.success) {
                setProducts(response.data.products);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        if (user?.role === "seller") {
            getSellerProducts();
        }
    }, [user]);


    return (
        <div id="bodymen">
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div className='allsellerproductdiv'>
                    {products.map((product) => (
                        <div
                            key={product._id}
                            onClick={() => router(`/single-product-seller/${product._id}`)}
                            className='allsingleproductseller'
                        >
                            <img
                                src={product.imgUrl}
                                alt={product.name}
                            />
                            <div>
                                <h4>{product.name}</h4>
                                <p><b>Category:</b> {product.category}</p><br />
                                <p><b>Sub-Category:</b> {product.subCategory}</p><br />
                                <p><b>Price: </b>{product.price}</p><br />
                                <p><b>Sizes: </b>{product.sizes}</p><br />
                                <p><b>Quantity: </b> {product.quantity}</p><br />
                                <p><b>Description: </b> {product.description}</p><br />
                                <p><b>Colors: </b> {product.colors}</p><br />
                                <p><b>Created at: </b> {product.createdAt}</p><br />
                            </div>

                        </div>
                    ))}


                </div>
            )}
        </div>
    );
};

export default ViewSellersProduct;
