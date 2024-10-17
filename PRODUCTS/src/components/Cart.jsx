// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, clearCart } from '../features/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);

    const handleRemoveItem = (id) => {
        dispatch(removeItemFromCart(id));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-3">Shopping Cart</h2>
            <p>Total Items: <strong>{totalQuantity}</strong></p>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id} className="card mb-3">
                        <div className="card-body">
                            <h3 className="card-title">{item.name}</h3>
                            <p className="card-text">Price: {item.prix}</p>
                            <p className="card-text">Quantity: {item.quantity}</p>
                            <button
                                onClick={() => handleRemoveItem(item.id)}
                                className="btn btn-danger"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            )}
            {cartItems.length > 0 && (
                <button
                    onClick={handleClearCart}
                    className="btn btn-warning mt-2"
                >
                    Clear Cart
                </button>
            )}
        </div>
    );
};

export default Cart;
