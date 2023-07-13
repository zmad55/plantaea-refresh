import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plantsData: localStorage.getItem("plantsData")
    ? JSON.parse(localStorage.getItem("plantsData"))
    : {},
};

const plantSlice = createSlice({
  name: "plantlib",
  initialState,
  reducers: {
    setPlantsData: (state, action) => {
      state.plantsData = action.payload;
      localStorage.setItem("plantsData", JSON.stringify(action.payload));
    },
  },
});

export const { setPlantsData } = plantSlice.actions;

export default plantSlice.reducer;
