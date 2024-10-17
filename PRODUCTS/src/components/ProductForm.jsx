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
        <form onSubmit={handleSubmit} className="container mt-4">
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="text" name="description" value={formData.description} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Image URL</label>
                <input type="text" name="img" value={formData.img} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="number" name="prix" value={formData.prix} onChange={handleChange} className="form-control" required />
            </div>
            <button type="submit" className="btn btn-success">Add Product</button>
        </form>
    );
};

export default ProductForm;
