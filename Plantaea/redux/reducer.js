import { createReducer } from "@reduxjs/toolkit";

export const authReducer = createReducer(
    {}, {
    loginRequest: (state) => {
        state.loading = true;
    },
    loginSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
    },
    loginFailure: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },

    loadUserRequest: (state) => {
        state.loading = true;
    },
    loadUserSuccess: (state) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
    },
    loadUserFailure: (state) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },
    
    clearError: (state) => {
        state.error = null;
    },
    clearMessage: (state) => {
        state.message = null;
    },

    
});