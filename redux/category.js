import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "category";

const initialState = {
  selecting: 1,
  items: [
    {
      id: 1,
      title: "Pizza",
      image: require("../assets/images/pizza-icon.png"),
    },
    {
      id: 2,
      title: "Seafood",
      image: require("../assets/images/shrimp-icon.png"),
    },
    {
      id: 3,
      title: "Soft Drink",
      image: require("../assets/images/soda-icon.png"),
    },
    {
      id: 4,
      title: "Soft Drink",
      image: require("../assets/images/pizza-icon.png"),
    },
  ],
};

const categorySlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    updateSelecting: (state, action) => {
      state.selecting = action.payload.id;
    },
  },
});

export const { updateSelecting } = categorySlice.actions;
export default categorySlice.reducer;
