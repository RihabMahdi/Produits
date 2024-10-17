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

    const handleRegister = () => {
        const newUser = { username, password };
        dispatch(register(newUser));
        navigate('/login'); // Navigate to login after registration
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-4">Register</h1>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-green-500"
                    placeholder="Choose a username"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-green-500"
                    placeholder="Create a password"
                />
            </div>
            <button
                onClick={handleRegister}
                className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
            >
                Register
            </button>
        </div>
    );
};

export default Register;
