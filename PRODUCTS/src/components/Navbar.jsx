import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/AuthSlice';
import { FaShoppingCart, FaPlus, FaSignOutAlt, FaSignInAlt } from 'react-icons/fa';

const Navbar = () => {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <nav className="bg-gray-800 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/products" className="text-white text-xl font-bold hover:text-gray-300 transition-colors">
                    Products
                </Link>
                <div className="flex items-center space-x-6">
                    {user ? (
                        <>
                        <Link to="/addProduct" className="text-white text-decoration-none flex items-center hover:text-gray-300 transition-colors">
                            <FaPlus className="mr-1" /> AddItem
                        </Link>
                            <Link to="/cart" className="text-white flex items-center hover:text-gray-300 transition-colors">
                                <FaShoppingCart className="mr-1" /> 
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="text-white flex items-center hover:text-gray-300 transition-colors"
                            >
                                <FaSignOutAlt className="mr-1" /> Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/login" className="text-white flex items-center hover:text-gray-300 transition-colors">
                            <FaSignInAlt className="mr-1" /> Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
