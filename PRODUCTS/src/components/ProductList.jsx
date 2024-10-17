// src/components/ProductList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectAllProducts } from '../features/ProSlice';
import ProductCard from './ProductCard';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    const productStatus = useSelector((state) => state.products.status);
    const user = useSelector((state) => state.auth.user); // Get the user from Redux state
    const isAdmin = user?.isAdmin; // Determine if the user is an admin

    useEffect(() => {
        if (productStatus === 'idle') {
            dispatch(fetchProducts());
        }
    }, [productStatus, dispatch]);

    return (
        <div className="row">
            {products.map(product => (
                <div className="col-md-4" key={product.id}>
                    <ProductCard product={product} isAdmin={isAdmin} />
                </div>
            ))}
        </div>
    );
};

export default ProductList;
