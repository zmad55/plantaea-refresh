import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import authReducer from './slices/authSlice'
import thunkMiddleware from 'redux-thunk';

const reducer = {
    auth: authReducer
};

const store = configureStore({
    reducer: reducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        // Set the immutableCheck to false to disable the middleware
        immutableCheck: false
    }).concat(thunkMiddleware)
});

export default store;