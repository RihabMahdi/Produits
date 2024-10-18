
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
        onClose(); 
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="font-bold text-2xl mb-4 text-center">Edit Product</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product Name"
                className="border border-gray-300 rounded-lg p-2 w-full mb-4 focus:ring-2 focus:ring-green-500"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Product Description"
                className="border border-gray-300 rounded-lg p-2 w-full mb-4 focus:ring-2 focus:ring-green-500"
            />
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                className="border border-gray-300 rounded-lg p-2 w-full mb-4 focus:ring-2 focus:ring-green-500"
            />
            <div className="flex justify-between items-center">
                <button
                    type="button"
                    onClick={onClose}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                >
                    Cancel
                </button>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                    Update Product
                </button>
            </div>
        </form>
    );
};

export default EditProductForm;
