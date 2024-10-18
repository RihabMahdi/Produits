
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, clearCart } from '../features/CartSlice';

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
        <div className="container mx-auto mt-8 p-4">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            <p className="text-lg mb-4">Total Items: <strong>{totalQuantity}</strong></p>
            {cartItems.length === 0 ? (
                <p className="text-gray-600">Your cart is empty</p>
            ) : (
                <div className="space-y-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="bg-white shadow-md rounded-lg p-4">
                            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                            <p className="text-gray-700 mb-2">Price: {item.prix}</p>
                            <p className="text-gray-700 mb-4">Quantity: {item.quantity}</p>
                            <button
                                onClick={() => handleRemoveItem(item.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
            {cartItems.length > 0 && (
                <button
                    onClick={handleClearCart}
                    className="bg-yellow-500 text-white px-4 py-2 rounded mt-6 hover:bg-yellow-600"
                >
                    Clear Cart
                </button>
            )}
        </div>
    );
};

export default Cart;
