import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
  },
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;

// export const authReducer = createReducer(
//   {},
//   {
//     loginRequest: (state) => {
//       state.loading = true;
//     },
//     loginSuccess: (state, action) => {
//       state.loading = false;
//       state.isAuthenticated = true;
//       state.user = action.payload.user;
//       state.message = action.payload.message;
//     },
//     loginFailure: (state, action) => {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.error = action.payload;
//     },

//     registerRequest: (state) => {
//       state.loading = true;
//     },
//     registerSuccess: (state, action) => {
//       state.loading = false;
//       state.isAuthenticated = true;
//       state.user = action.payload.user;
//       state.message = action.payload.message;
//     },
//     registerFailure: (state, action) => {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.error = action.payload;
//     },

//     loadUserRequest: (state) => {
//       state.loading = true;
//     },
//     loadUserSuccess: (state, action) => {
//       state.loading = false;
//       state.isAuthenticated = true;
//       state.user = action.payload.user;
//     },
//     loadUserFailure: (state, action) => {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.error = action.payload;
//     },

//     logoutRequest: (state) => {
//       state.loading = true;
//     },
//     logoutSuccess: (state) => {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.user = null;
//     },
//     logoutFailure: (state, action) => {
//       state.loading = false;
//       state.isAuthenticated = true;
//       state.error = action.payload;
//     },

//     verificationRequest: (state) => {
//       state.loading = true;
//     },
//     verificationSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload;
//     },
//     verificationFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     clearError: (state) => {
//       state.error = null;
//     },

//     clearMessage: (state) => {
//       state.message = null;
//     },
//   }
// );
