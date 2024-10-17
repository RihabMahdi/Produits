// src/features/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('http://localhost:3000/Products');
    return response.data;
});
const productSlice = createSlice({
    name: 'products',
    initialState: { items: [], status: 'idle' },
    reducers: {
        addProduct: (state, action) => {
            state.items.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = 'failed';
            });
    }
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;