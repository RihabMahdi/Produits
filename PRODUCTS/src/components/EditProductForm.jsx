// src/components/EditProductForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editProduct } from '../features/ProSlice';

const EditProductForm = ({ product, onClose }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = { ...product, name, description, price };
        dispatch(editProduct(updatedProduct));
        onClose(); // Close the form/modal after editing
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <h2 className="font-bold text-xl">Edit Product</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product Name"
                className="border rounded p-2 w-full mb-2"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Product Description"
                className="border rounded p-2 w-full mb-2"
            />
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                className="border rounded p-2 w-full mb-2"
            />
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
                Update Product
            </button>
        </form>
    );
};

export default EditProductForm;
