import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/axios.config";
import "../../Styles/SingleProductSeller.css"

const SingleProductSeller = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);

    const { productId } = useParams();
    const router = useNavigate();


    const getSingleProductData = async () => {
        try {
            setLoading(true);
            const response = await api.get(`/seller/get-seller-product/${productId}`);
            console.log("API Response:", response.data);
            if (response.data.success) {
                setProduct(response.data.product);
            }
        } catch (error) {
            console.log("Axios Error:", error);
        } finally {
            setLoading(false);

        };
    }
    useEffect(() => {
        if (productId) getSingleProductData();
    }, [productId]);

    // if (loading) return <h1>Loading...</h1>;
    // if (!product) return <h1>Product not found</h1>;

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this product?")) return;
        try {
            const response = await api.delete(`/seller/delete-product/${id}`);
            if (response.data.success) {
                // setProduct(product.filter((product) => product._id !== id));
                toast.success(response.data.message);
                router("/view-sellers-product");
            } else {
                alert("Failed: " + response.data.message);
            }
        } catch (error) {
            console.log("Error deleting product:", error);
            alert("Failed to delete product");
        }
    };

    const [showEditModal, setShowEditModal] = useState(false);
    const [editData, setEditData] = useState({
        id: "",
        name: "",
        price: "",
        quantity: "",
        category: "",
        subCategory: "",
        gender: "",
        imgUrl: "",
        colors: "",
        sizes: "",
    });

    const openEditModal = (product) => {
        setEditData({
            id: product._id,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            category: product.category,
            subCategory: product.subCategory,
            gender: product.gender,
            imgUrl: product.imgUrl,
            colors: product.colors,
            sizes: Array.isArray(product.sizes) ? product.sizes.join(",") : product.sizes,
        });
        setShowEditModal(true);
    };

    const handleEdit = async () => {
        const { id, name, price, quantity, category, subCategory, gender, imgUrl, colors, sizes } = editData;

        try {
            const response = await api.put(`/seller/edit-product/${id}`, {
                name,
                price,
                quantity,
                category,
                subCategory,
                gender,
                imgUrl,
                colors,
                sizes: sizes.split(",").map(s => s.trim())
            });

            if (response.data.success) {
                setProduct(response.data.product);
                toast.success("Product updated successfully");
                setShowEditModal(false);
            } else {
                toast.error("Failed: " + response.data.message);
            }
        } catch (error) {
            console.log("Edit product error:", error);
            toast.error("Failed to update product");
        }
    };

    return (
        <div id="bodysingle">
            {loading ? <h1>Loading...</h1> : null}
            {product && (
                <div
                    key={product._id}
                    className='singleproductseller'
                >
                    <div className="single-imgdiv">
                        <img
                            src={product.imgUrl}
                            alt={product.name}
                        />
                    </div>
                    <div className="single-detailsdiv">
                        <h4>{product.name}</h4>
                        <p><b>Category:</b> {product.category}</p><br />
                        <p><b>Sub-Category:</b> {product.subCategory}</p><br />
                        <p><b>Gender:</b> {product.gender}</p><br />
                        <p><b>Price: </b>{product.price}</p><br />
                        <p><b>Sizes: </b>{product.sizes}</p><br />
                        <p><b>Quantity: </b> {product.quantity}</p><br />
                        <p><b>Description: </b> {product.description}</p><br />
                        <p><b>Colors: </b> {product.colors}</p><br />
                        <p><b>Created at: </b> {product.createdAt}</p><br />

                        <button
                            className="editdelete"
                            onClick={(e) => {
                                e.stopPropagation();
                                openEditModal(product);
                            }}
                        >
                            Edit
                        </button>
                        <button
                            className="editdelete"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(product._id);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            )}

            {showEditModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Edit Product</h2>

                        <div className="space-y-3">
                            <label>Name:</label>
                            <input
                                className="input"
                                placeholder="Name"
                                value={editData.name}
                                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                            /><br />
                            <label>Price:</label>
                            <input
                                className="input"
                                placeholder="Price"
                                type="number"
                                value={editData.price}
                                onChange={(e) => setEditData({ ...editData, price: e.target.value })}
                            /><br />
                            <label>Quantity:</label>
                            <input
                                className="input"
                                placeholder="Quantity"
                                type="number"
                                value={editData.quantity}
                                onChange={(e) => setEditData({ ...editData, quantity: e.target.value })}
                            /><br />
                            <label>Category:</label>
                            <input
                                className="input"
                                placeholder="Category"
                                value={editData.category}
                                onChange={(e) => setEditData({ ...editData, category: e.target.value })}
                            /><br />
                            <label>Sub-Category:</label>
                            <input
                                className="input"
                                placeholder="Sub-Category"
                                value={editData.subCategory}
                                onChange={(e) => setEditData({ ...editData, subCategory: e.target.value })}
                            /><br />
                            <label>Gender:</label>
                            <input
                                className="input"
                                placeholder="Gender"
                                value={editData.gender}
                                onChange={(e) => setEditData({ ...editData, gender: e.target.value })}
                            /><br />
                            <label>Images:</label>
                            <input
                                className="input"
                                placeholder="Image URL"
                                value={editData.imgUrl}
                                onChange={(e) => setEditData({ ...editData, imgUrl: e.target.value })}
                            /><br />
                            <label>Colors:</label>
                            <input
                                className="input"
                                placeholder="Colors"
                                value={editData.colors}
                                onChange={(e) => setEditData({ ...editData, colors: e.target.value })}
                            /><br />
                            <label>Sizes:</label>
                            <input
                                className="input"
                                placeholder="Sizes (comma separated)"
                                value={editData.sizes}
                                onChange={(e) => setEditData({ ...editData, sizes: e.target.value })}
                            />
                        </div>

                        <div className="savecancel">
                            <button
                                className="editdelete"
                                onClick={() => setShowEditModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="editdelete"
                                onClick={handleEdit}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleProductSeller;



// {
//                     showEditModal && (
//                         <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//                             <div className="bg-white p-6 rounded-xl w-96 shadow-lg animate-fadeIn">

//                                 <h2 className="text-xl font-bold mb-4">Edit Product</h2>

//                                 <div className="space-y-3">
//                                     <input className="input" placeholder="Name"
//                                         value={editData.name}
//                                         onChange={(e) => setEditData({ ...editData, name: e.target.value })} />

//                                     <input className="input" type="number" placeholder="Price"
//                                         value={editData.price}
//                                         onChange={(e) => setEditData({ ...editData, price: e.target.value })} />

//                                     <input className="input" type="number" placeholder="Quantity"
//                                         value={editData.quantity}
//                                         onChange={(e) => setEditData({ ...editData, quantity: e.target.value })} />

//                                     <input className="input" placeholder="Category"
//                                         value={editData.category}
//                                         onChange={(e) => setEditData({ ...editData, category: e.target.value })} />

//                                     <input className="input" placeholder="Image URL"
//                                         value={editData.imgUrl}
//                                         onChange={(e) => setEditData({ ...editData, imgUrl: e.target.value })} />

//                                     <input className="input" placeholder="Brand"
//                                         value={editData.brand}
//                                         onChange={(e) => setEditData({ ...editData, brand: e.target.value })} />

//                                     <input className="input" placeholder="Sizes (comma separated)"
//                                         value={editData.sizes}
//                                         onChange={(e) => setEditData({ ...editData, sizes: e.target.value })} />
//                                 </div>

//                                 <div className="flex justify-end gap-3 mt-5">
//                                     <button className="px-4 py-2 bg-gray-300 rounded-lg"
//                                         onClick={() => setShowEditModal(false)}>
//                                         Cancel
//                                     </button>

//                                     <button className="px-4 py-2 bg-blue-600 text-white rounded-lg"
//                                         onClick={handleEdit}>
//                                         Save
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 }

