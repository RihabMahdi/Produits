
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    registeredUsers: []
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: (state, action) => {
            state.registeredUsers.push(action.payload);
        },
        login: (state, action) => {
            const { username, password } = action.payload;
            const user = state.registeredUsers.find(
                (u) => u.username === username && u.password === password
            );
            if (user) {
                state.user = { ...user };
            }
        },
        logout: (state) => {
            state.user = null;
        }
    }
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
