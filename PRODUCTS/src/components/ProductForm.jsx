import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/productSlice';

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
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
            <input type="text" name="img" value={formData.img} onChange={handleChange} placeholder="Image URL" required />
            <input type="number" name="prix" value={formData.prix} onChange={handleChange} placeholder="Price" required />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;
