import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  search: "",
  sortByPrice: "all",
  category: "all",
};
const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    sortByPriceFilter: (state, action) => {
      state.sortByPrice = action.payload;
    },
    findWithCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { sortByPriceFilter, findWithCategory } = filterSlice.actions;
export default filterSlice.reducer;
