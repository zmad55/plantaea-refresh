import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '@redux/slices/apiSlice.js'

import authReducer from './slices/authSlice';
import plantReducer from './slices/plantSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    plantlib: plantReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
});

export default store;