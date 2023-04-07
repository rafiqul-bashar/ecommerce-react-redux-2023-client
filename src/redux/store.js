import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/apiSlice";
import cartSlice from "./features/cart/cartSlice";
import authSlice from "./features/auth/authSlice";

import filterSlice from "./features/filters/filterSlice";
import productSlice from "./features/product/productSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filters: filterSlice,
    auth: authSlice,
    cart: cartSlice,
    product: productSlice,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
setupListeners(store.dispatch);
export default store;
