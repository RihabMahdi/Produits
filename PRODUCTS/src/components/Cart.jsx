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
            <h2 className="text-3xl font-bold mb-4 text-center">Shopping Cart</h2>
            <p className="text-lg mb-6 text-center">Total Items: <strong>{totalQuantity}</strong></p>
            {cartItems.length === 0 ? (
                <p className="text-gray-600 text-center">Your cart is empty</p>
            ) : (
                <div className="space-y-6">
                    {cartItems.map((item) => (
                        <div key={item.id} className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-between">
                            <div className="flex items-center">
                                <img src={item.img} alt={item.name} className="h-16 w-16 object-cover rounded-lg mr-4" />
                                <div>
                                    <h3 className="text-xl font-semibold">{item.name}</h3>
                                    <p className="text-gray-700">Price: <span className="font-bold">{item.prix}</span></p>
                                    <p className="text-gray-700">Quantity: <span className="font-bold">{item.quantity}</span></p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleRemoveItem(item.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
            {cartItems.length > 0 && (
                <div className="text-center mt-8">
                    <button
                        onClick={handleClearCart}
                        className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
                    >
                        Clear Cart
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
