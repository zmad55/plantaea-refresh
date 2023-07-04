import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
  plantsData: localStorage.getItem('plantsData') ? JSON.parse(localStorage.getItem('plantsData')) : null
}

const logoutSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo')
      localStorage.removeItem('plantsData')
    }
  }
})

export const { logout } = logoutSlice.actions;

export default logoutSlice.reducer;