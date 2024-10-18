import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectAllProducts } from '../features/ProSlice';
import ProductCard from './ProductCard';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    const productStatus = useSelector((state) => state.products.status);
    const user = useSelector((state) => state.auth.user); 
    const isAdmin = user?.isAdmin; 

    useEffect(() => {
        if (productStatus === 'idle') {
            dispatch(fetchProducts());
        }
    }, [productStatus, dispatch]);

    return (
        <div className="container mx-auto px-4 mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} isAdmin={isAdmin} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
