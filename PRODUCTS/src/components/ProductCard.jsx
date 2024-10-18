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
        <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
            <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
                <h5 className="text-xl font-semibold">{product.name}</h5>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-green-500 font-bold mt-2">${product.price}</p>
                <button
                    onClick={handleAddToCart}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-colors w-full"
                >
                    Add to Cart
                </button>
                {isAdmin && (
                    <div className="flex space-x-4 mt-4">
                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                        >
                            Edit
                        </button>
                        <button
                            onClick={handleDelete}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                        >
                            Delete
                        </button>
                    </div>
                )}
                {isEditing && (
                    <EditProductForm product={product} onClose={() => setIsEditing(false)} />
                )}
            </div>
        </div>
    );
};

export default ProductCard;
