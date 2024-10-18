import { useEffect } from 'react';
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
        <div className="container mx-auto px-4 mt-8">
            <h2 className="text-2xl font-bold text-center mb-6">Product List</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.length > 0 ? (
                    products.map(product => (
                        <ProductCard key={product.id} product={product} isAdmin={isAdmin} />
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500">
                        No products available.
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductList;
