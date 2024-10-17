// src/components/Navbar.jsx
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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/products" className="navbar-brand">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="ms-auto">
                        {user ? (
                            <>
                                <Link to="/cart" className="nav-link text-white">Cart</Link>
                                <Link to="/" className="nav-link text-white" onClick={handleLogout}>Logout</Link>
                            </>
                        ) : (
                            <Link to="/login" className="nav-link">Login</Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
