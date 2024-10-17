// src/features/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('http://localhost:3000/Products');
    return response.data;
});

// Create a slice for products
const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        status: 'idle', // loading status
        error: null,    // error tracking
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        editProduct: (state, action) => {
            const index = state.products.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        addItemToCart: (state, action) => {
            // Logic for adding items to cart can be implemented in the cart slice
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

// Export actions
export const { addProduct, editProduct, deleteProduct, addItemToCart } = productSlice.actions;

// Export selectors
export const selectAllProducts = (state) => state.products.products;

// Export the reducer
export default productSlice.reducer;
