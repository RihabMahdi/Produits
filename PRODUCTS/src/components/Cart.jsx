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
        <div>
            <h2>Shopping Cart</h2>
            <p>Total Items: {totalQuantity}</p>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <h3>{item.name}</h3>
                        <p>Price: ${item.prix}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                    </div>
                ))
            )}
            {cartItems.length > 0 && <button onClick={handleClearCart}>Clear Cart</button>}
        </div>
    );
};

export default Cart;
