// src/components/ProductForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/ProSlice';

const ProductForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        img: '',
        prix: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct({ ...formData, id: Math.random() * 10000 }));
        setFormData({ name: '', description: '', img: '', prix: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto mt-10">
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter product name"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter product description"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Image URL</label>
                <input
                    type="text"
                    name="img"
                    value={formData.img}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter image URL"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Price</label>
                <input
                    type="number"
                    name="prix"
                    value={formData.prix}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter product price"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
            >
                Add Product
            </button>
        </form>
    );
};

export default ProductForm;
