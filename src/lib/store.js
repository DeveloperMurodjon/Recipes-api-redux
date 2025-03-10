import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./recipeSlice";

const store = configureStore({
  reducer: {
    recipes: recipeSlice,
  },
});

export default store;
