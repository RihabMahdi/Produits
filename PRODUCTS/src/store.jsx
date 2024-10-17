import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/ProductSlice';
import cartReducer from './features/CartSlice';
import authReducer from './features/AuthSlice';

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        auth: authReducer,
    },
});

export default store;
