import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../../services/axios.config";
import { toast } from "react-toastify";


const AddProduct = () => {
    const user = useSelector((state) => state.counter.user);
    const router = useNavigate();
    const [uploadType, setUploadType] = useState()
    const [productData, setProductData] = useState({
        name: "",
        price: "",
        category: "",
        subCategory: "",
        description: "",
        gender: "",
        sizes: [],
        colors: [],
        quantity: "",
        imgUrl: "",
    });

    const availableSizes = ["XS", "S", "M", "L", "XL", "XXL"];

    const handleSizeChange = (size) => {
        let updatedSizes = [...productData.sizes];

        if (updatedSizes.includes(size)) {
            // remove size
            updatedSizes = updatedSizes.filter(item => item !== size);
        } else {
            // add size
            updatedSizes.push(size);
        }

        setProductData({ ...productData, sizes: updatedSizes });
    };

    const handleChange = (event) => {
        console.log(event.target.value, event.target.name);
        setProductData({ ...productData, [event.target.name]: event.target.value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (
                productData.name &&
                productData.price &&
                productData.category &&
                productData.subCategory &&
                productData.description &&
                productData.gender &&
                productData.sizes &&
                productData.colors &&
                productData.quantity &&
                productData.imgUrl
            ) {

                const response = await api.post("/seller/create-product", productData);

                if (response.data.success) {
                    // toast.success(response.data.message);
                    setProductData({
                        name: "",
                        price: "",
                        category: "",
                        subCategory: "",
                        description: "",
                        gender:"",
                        sizes: "",
                        colors: "",
                        quantity: "",
                        imgUrl: "",
                    });
                    if (response.data.success) {
                        toast.success("Product created successfully!");
                    }
                } else {
                    alert(response.data.message);
                }
            } else {
                toast.error("Please fill all fields");
            }
        } catch (error) {
            alert(error);
        }
    };

    const presetColors = [
        "black", "white", "red", "blue", "green", "yellow",
        "pink", "purple", "brown", "gray", "orange"
    ];

    const handleColorChange = (color) => {
        let updated = [...productData.colors];

        if (updated.includes(color)) {
            updated = updated.filter((c) => c !== color);
        } else {
            updated.push(color);
        }

        setProductData({ ...productData, colors: updated });
    };

    // const handleCustomColor = (e) => {
    //     const color = e.target.value;
    //     if (!productData.colors.includes(color)) {
    //         setProductData({
    //             ...productData,
    //             colors: [...productData.colors, color]
    //         });
    //     }
    // };

    // useEffect(() => {
    //     if (user?.userId) {
    //            router("/view-sellers-product");
    //     }
    // }, [user])

    return (
        // <div>
        //     <h1>Add Product</h1>
        //     <form onSubmit={handleSubmit}>
        //         <label>Product Name</label>
        //         <br />
        //         <input
        //             name="name"
        //             type="text"
        //             value={productData.name}
        //             onChange={handleChange}
        //         />
        //         <br />
        //         <label>Product Price</label>
        //         <br />
        //         <input
        //             name="price"
        //             type="number"
        //             value={productData.price}
        //             onChange={handleChange}
        //         />
        //         <br />
        //         <label>Product Category</label>
        //         <br />
        //         <input
        //             name="category"
        //             type="text"
        //             value={productData.category}
        //             onChange={handleChange}
        //         />
        //         <br />
        //         <label>Product Quantity</label>
        //         <br />
        //         <input
        //             name="quantity"
        //             type="number"
        //             value={productData.quantity}
        //             onChange={handleChange}
        //         />
        //         <br />
        //         <label>Product Image Url</label>
        //         <br />
        //         <input
        //             name="imgUrl"
        //             type="url"
        //             value={productData.imgUrl}
        //             onChange={handleChange}
        //         />
        //         <br />
        //         <input type="submit" value="Submit Product" />
        //     </form>
        // </div>
        <div className="upload-form-container">
            <h2>Upload New Product</h2>
            <form className="upload-form" onSubmit={handleSubmit}>
                <label>Product Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="e.g. Slim Fit Shirt"
                    value={productData.name}
                    onChange={handleChange}
                    required
                />

                <label>Price ($)</label>
                <input
                    type="number"
                    name="price"
                    placeholder="e.g. 49.99"
                    value={productData.price}
                    onChange={handleChange}
                    required
                />

                <label>Gender</label>
                <select name="gender" value={productData.gender} onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="mens">Mens</option>
                    <option value="ladies">Ladies</option>
                    <option value="kids">Kids</option>
                    <option value="unisex">Unisex</option>
                </select>

                <label>Category</label>
                <select name="category" value={productData.category} onChange={handleChange} required>
                    <option value="">Select Category</option>
                    <option value="topwear">Topwear</option>
                    <option value="bottomwear">Bottomwear</option>
                    <option value="footwear">Footwear</option>
                    <option value="sportswear">Sportswear</option>
                    <option value="beauty">Beauty</option>
                    <option value="accessories">Accessories</option>
                </select>

                <label>Sub-Category</label>
                <select name="subCategory" value={productData.subCategory} onChange={handleChange} required>
                    <option value="">Select sub-Category</option>
                    <option value="shirt">Shirt</option>
                    <option value="jeans">Jeans</option>
                    <option value="tshirt">Tshirt</option>
                    <option value="jacket">Jacket</option>
                    <option value="shoes">Shoes</option>
                    <option value="fipflop">Flip-flop</option>
                    <option value="sandal">Sandal</option>
                    <option value="cap">Cap</option>
                    <option value="lipstick">Lipstick</option>
                    <option value="eyeliner">EyeLiner</option>
                    <option value="nailpolish">Nailpolish</option>
                    <option value="ring">Ring</option>
                </select>
                <label>Description</label>
                <textarea
                    name="description"
                    placeholder="Enter product description"
                    value={productData.description}
                    onChange={handleChange}
                    required
                />

                <label>Select Sizes</label>
                <div className="sizes-container">
                    {availableSizes.map((size) => (
                        <label key={size}>
                            <input
                                type="checkbox"
                                checked={productData.sizes.includes(size)}
                                onChange={() => handleSizeChange(size)}
                            />
                            {size}
                        </label>
                    ))}
                </div>
                <hr />
                <label>Select Colors</label>
                <div className="color-grid">
                    {presetColors.map((color) => (
                        <label key={color} className="color-option">
                            <input
                                type="checkbox"
                                checked={productData.colors.includes(color)}
                                onChange={() => handleColorChange(color)}
                            />
                            <span className="color-circle" style={{ backgroundColor: color }}></span>
                            {color}
                        </label>
                    ))}
                </div>

                {/* <label>Add Custom Color</label>
                <input
                    type="color"
                    onChange={handleCustomColor}
                /> */}
                <hr />

                <label>Quantity</label>
                <input
                    type="number"
                    name="quantity"
                    min="1"
                    placeholder="Enter Stock Quantity"
                    value={productData.quantity}
                    onChange={handleChange}
                    required
                />
                <hr />
                {/* <label>Product Image</label>
                <input
                    type="file"
                    name="imagurl"
                    accept="image/*"
                    onChange={handleChange}
                    required
                /> */}


                <label>Image Upload Method</label>
                <select
                    value={uploadType}
                    onChange={(e) => setUploadType(e.target.value)}
                >
                    <option value="">Select Method</option>
                    <option value="url">Use Image URL</option>
                    <option value="file">Upload Image File</option>
                </select>

                {uploadType === "url" && (
                    <>
                        <label>Image URL</label>
                        <input
                            type="text"
                            name="imgUrl"
                            placeholder="Enter Image URL"
                            value={productData.imgUrl}
                            onChange={handleChange}
                        />
                    </>
                )}

                {uploadType === "file" && (
                    <>
                        <label>Upload Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                                setProductData({ ...productData, imgFile: e.target.files[0] })
                            }
                        />
                    </>
                )}
                <button type="submit">Upload Product</button>
            </form>
        </div>

    );
};

export default AddProduct;