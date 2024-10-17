// src/components/ProductCard.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cartSlice';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        // Dispatch the action to add the item to the cart
        dispatch(addItemToCart({
            id: product.id,
            name: product.name,
            description: product.description,
            img: product.img,
            prix: product.prix,
            quantity: 1 // Add a default quantity of 1
        }));
    };

    return (
        <div className="product-card">
            <img src={product.img} alt={product.name} style={{ width: '100px', height: '100px' }} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.prix}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
