// src/components/ProductCard.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../features/ProSlice';
import { addItemToCart } from '../features/cartSlice';
import EditProductForm from './EditProductForm';

const ProductCard = ({ product, isAdmin }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);

    const handleDelete = () => {
        dispatch(deleteProduct(product.id));
    };

    const handleAddToCart = () => {
        dispatch(addItemToCart(product));
    };

    return (
        <div className="card mb-4 shadow-sm">
            <img src={product.img} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text text-success">${product.price}</p>
                <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button>
                {isAdmin && (
                    <div className="mt-2">
                        <button onClick={() => setIsEditing(true)} className="btn btn-warning me-2">Edit</button>
                        <button onClick={handleDelete} className="btn btn-danger">Delete</button>
                    </div>
                )}
                {isEditing && <EditProductForm product={product} onClose={() => setIsEditing(false)} />}
            </div>
        </div>
    );
};

export default ProductCard;
