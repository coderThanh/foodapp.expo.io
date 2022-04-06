import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "food";

const initialState = {
  items: [
    {
      id: 1,
      image: require("../assets/images/pizza1.png"),
      title: "Primavera Pizza",
      weight: "540",
      rating: "5.0",
      catId: [1, 2, 3],
    },
    {
      id: 2,
      image: require("../assets/images/pizza2.png"),
      title: "Vegetarian Pizza",
      weight: "600",
      rating: "4.0",
      catId: [1, 2, 3],
    },
    {
      id: 3,
      image: require("../assets/images/pizza3.png"),
      title: "Peppernori Pizza",
      weight: "750",
      rating: "4.5",
      catId: [1, 2, 3],
    },
    {
      id: 4,
      image: require("../assets/images/pizza2.png"),
      title: "Mohamet Pizza",
      weight: "750",
      rating: "4.5",
      catId: [1, 3],
    },
    {
      id: 5,
      image: require("../assets/images/pizza3.png"),
      title: "Alocono Pizza",
      weight: "750",
      rating: "4.5",
      catId: [1],
    },
  ],
};

const foodSlice = createSlice({
  name: SLICE_NAME,
  initialState,
});

export default foodSlice.reducer;
