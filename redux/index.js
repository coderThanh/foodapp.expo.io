import { configureStore } from "@reduxjs/toolkit";

import categorySlice from "./category";
import foodSlice from "./food";

const store = configureStore({
  reducer: {
    category: categorySlice,
    food: foodSlice,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ immutableCheck: false }),
  ],
});

export default store;
