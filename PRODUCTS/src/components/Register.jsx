// src/components/Register.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false); // State to track admin checkbox

    const handleRegister = (e) => {
        e.preventDefault();
        const newUser = { username, password, isAdmin }; // Include isAdmin in the user data
        dispatch(register(newUser));
        navigate('/login');
    };

    return (
        <div className="container mt-5">
            <div className="card mx-auto" style={{ maxWidth: '400px' }}>
                <div className="card-body">
                    <h5 className="card-title text-center">Register</h5>
                    <form onSubmit={handleRegister}>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-check mb-3">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="adminCheck"
                                checked={isAdmin}
                                onChange={(e) => setIsAdmin(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="adminCheck">
                                Register as Admin
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
