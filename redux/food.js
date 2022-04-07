import { createSlice, createAsyncThunk, isRejected } from "@reduxjs/toolkit";

const SLICE_NAME = "food";

const initialState = {
  items: [
    {
      id: 1,
      image: require("../assets/images/pizza1.png"),
      title: "Primavera Pizza",
      price: "5.99",
      weight: "540",
      rating: "5.0",
      catId: [1, 3],
    },
    {
      id: 2,
      image: require("../assets/images/pizza2.png"),
      title: "Vegetarian Pizza",
      price: "5.99",
      weight: "600",
      rating: "4.0",
      catId: [1, 2, 3],
    },
    {
      id: 3,
      image: require("../assets/images/pizza3.png"),
      title: "Peppernori Pizza",
      price: "5.99",
      weight: "750",
      rating: "4.5",
      catId: [1, 4],
    },
    {
      id: 4,
      image: require("../assets/images/pizza2.png"),
      title: "Mohamet Pizza",
      price: "5.99",
      weight: "750",
      rating: "4.5",
      catId: [1, 3],
    },
    {
      id: 5,
      image: require("../assets/images/pizza3.png"),
      title: "Alocono Pizza",
      price: "5.99",
      weight: "750",
      rating: "4.5",
      catId: [1],
    },
  ],
  loading: "idle",
  currentRequestId: undefined,
};

export const getFoodsByCat = createAsyncThunk(
  "getFoodsByCat",
  async (params, { getState, requestId }) => {
    const { catId } = params;
    const { items, currentRequestId, loading } = getState().food;

    if (loading !== "pending" || requestId !== currentRequestId) {
      return;
    }

    var foodsFilter = [];

    await items.map((item) => {
      const itemCatId = item.catId;
      const itemInCatReq = itemCatId.some((id) => {
        return catId.indexOf(id) != -1 ? true : false;
      });

      if (itemInCatReq) {
        foodsFilter.push(item);
      }
    });

    return foodsFilter;
  }
);

export const getFoodsById = createAsyncThunk(
  "getFoodsById",
  async (params, { getState }) => {
    const { id } = params;
    const { items } = getState().food;

    const indexFood = items.findIndex((item) => item.id == id);

    if (indexFood != -1) {
      var foodItem = { food: items[indexFood] };
      return foodItem;
    }
  }
);

const foodSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getFoodsByCat.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(getFoodsByCat.fulfilled, (state, action) => {
        if (
          state.loading === "pending" &&
          state.currentRequestId === action.meta.requestId
        ) {
          state.loading = "idle";
          state.currentRequestId = undefined;
        }
      })
      .addCase(getFoodsByCat.rejected, (state, action) => {
        if (
          state.loading === "pending" &&
          state.currentRequestId === action.meta.requestId
        ) {
          state.loading = "idle";
          state.currentRequestId = undefined;
        }
      });
  },
});

export default foodSlice.reducer;
