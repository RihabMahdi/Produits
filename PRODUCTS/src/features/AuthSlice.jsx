import { createSlice } from '@reduxjs/toolkit';

const savedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
const savedUser = JSON.parse(localStorage.getItem('user')) || null;

const initialState = {
    user: savedUser, 
    registeredUsers: savedUsers, 
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: (state, action) => {
            state.registeredUsers.push(action.payload);
            localStorage.setItem('registeredUsers', JSON.stringify(state.registeredUsers));
        },
        login: (state, action) => {
            const { username, password } = action.payload;
            const user = state.registeredUsers.find(
                (u) => u.username === username && u.password === password
            );
            if (user) {
                state.user = { ...user };
                localStorage.setItem('user', JSON.stringify(state.user));
            }
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        },
    },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
