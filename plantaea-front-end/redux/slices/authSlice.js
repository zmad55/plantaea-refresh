import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userLoad } from "../actions";

const initialState = {
    loading: false,
    userInfo: {}, // User Object
    isAuthenticated: false,
    token: null, // JWT
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Define your normal reducers here
        clearError: (state) => {
            state.error = null;
        },

        clearMessage: (state) => {
            state.message = null;
        },
    },
    extraReducers: (builder) => {
        builder
            //Login User
            .addCase(userLogin.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(userLogin.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userInfo = payload
                state.userToken = payload.userToken
                state.isAuthenticated = true;
            })
            .addCase(userLogin.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.isAuthenticated = false;
            })

            .addCase(userLoad.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userLoad.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.userInfo = payload;
                state.userToken = payload.userToken;
                state.isAuthenticated = true;
            })
            .addCase(userLoad.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
                state.isAuthenticated = false;
            });
    }
});

export default authSlice.reducer
