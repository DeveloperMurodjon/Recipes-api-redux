import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
  status: "idle",
  error: null,
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.status = "loading";
    },
    setRecipes: (state, action) => {
      state.status = "succeeded";
      state.recipes = action.payload;
    },
    setError: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { setLoading, setRecipes, setError } = recipeSlice.actions;
export default recipeSlice.reducer;
