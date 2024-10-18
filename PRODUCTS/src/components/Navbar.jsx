
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/AuthSlice';

const Navbar = () => {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/products" className="text-white text-xl font-bold">
                    Home
                </Link>
                <div className="flex items-center space-x-4">
                    {user ? (
                        <>
                            <Link to="/cart" className="text-white hover:text-gray-300 transition-colors">
                                Cart
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/login" className="text-white hover:text-gray-300 transition-colors">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
