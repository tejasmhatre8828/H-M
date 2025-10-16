import React, { useState } from 'react';
import '../Styles/UploadProduct.css';


const UploadProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setProduct({ ...product, image: files[0] });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Submitted:', product);
    alert('Product submitted (UI only). Check console for data.');
  };

  return (
    <div className="upload-form-container">
      <h2>Upload New Product</h2>
      <form className="upload-form" onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input
          type="text"
          name="name"
          placeholder="e.g. Slim Fit Shirt"
          value={product.name}
          onChange={handleChange}
          required
        />

        <label>Price ($)</label>
        <input
          type="number"
          name="price"
          placeholder="e.g. 49.99"
          value={product.price}
          onChange={handleChange}
          required
        />

        <label>Category</label>
        <select name="category" value={product.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Home">Home</option>
          <option value="Men">Men</option>
          <option value="Women">Ladies</option>
          <option value="Kids">Kids</option>
          <option value="Accessories">Accessories</option>
        </select>

        <label>Description</label>
        <textarea
          name="description"
          placeholder="Enter product description"
          value={product.description}
          onChange={handleChange}
          required
        />

        <label>Product Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
        />

        <button type="submit">Upload Product</button>
      </form>
    </div>
  );
};

export default UploadProduct;
