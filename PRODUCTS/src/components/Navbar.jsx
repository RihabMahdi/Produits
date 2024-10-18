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
                <Link to="/products" className="text-white text-xl font-bold hover:text-gray-300 transition-colors text-decoration-none">
                    Products
                </Link>
                <div className="flex items-center space-x-6">
                    {user ? (
                        <>
                            {user.isAdmin && (
                                <Link
                                    to="/addProduct"
                                    className="text-white flex items-center font-medium hover:text-gray-300 transition-colors text-decoration-none"
                                >
                                    <FaPlus className="mr-1" /> AddItem
                                </Link>
                            )}
                            <Link to="/cart" className="text-white flex font-medium items-center hover:text-gray-300 transition-colors text-decoration-none">
                                <FaShoppingCart className="mr-1" />
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="text-white flex font-medium items-center hover:text-gray-300 transition-colors text-decoration-none"
                            >
                                <FaSignOutAlt className="mr-1" /> Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="text-white flex items-center font-medium hover:text-gray-300 transition-colors text-decoration-none"
                        >
                            <FaSignInAlt className="mr-1" /> Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
