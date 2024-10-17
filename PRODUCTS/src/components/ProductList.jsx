// src/components/ProductList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/productSlice';
import ProductCard from './ProductCard';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const status = useSelector((state) => state.products.status);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    return (
        <div>
            <h2>Product List</h2>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'succeeded' && products.map((product) => <ProductCard key={product.id} product={product} />)}
            {status === 'failed' && <p>Failed to load products.</p>}
        </div>
    );
};

export default ProductList;
