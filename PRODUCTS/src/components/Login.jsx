
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/AuthSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const registeredUsers = useSelector((state) => state.auth.registeredUsers);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const userExists = registeredUsers.some(
            user => user.username === username && user.password === password
        );

        if (userExists) {
            dispatch(login({ username, password }));
            navigate('/'); 
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>
            <div className="mb-5">
                <label
                    className="block text-gray-800 text-sm font-bold mb-2"
                    htmlFor="username"
                >
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your username"
                />
            </div>
            <div className="mb-6">
                <label
                    className="block text-gray-800 text-sm font-bold mb-2"
                    htmlFor="password"
                >
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your password"
                />
            </div>
            <button
                onClick={handleLogin}
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
                Login
            </button>
            <div className="mt-6 text-center">
                <p className="text-gray-600">
                    Don't have an account?{' '}
                    <span
                        className="text-blue-500 cursor-pointer hover:underline"
                        onClick={() => navigate('/register')}
                    >
                        Create Account
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
