import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  productToEdit: {},
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductToEdit: (state, action) => {
      state.productToEdit = action.payload;
    },
  },
});

export const { setProductToEdit } = productSlice.actions;
export default productSlice.reducer;
