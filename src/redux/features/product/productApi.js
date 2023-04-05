import { apiSlice } from "../apiSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints here
    getProducts: builder.query({
      query: (search) => {
        // if (search !== "") {
        //   return `/products?q=${search}`;
        // } else {
        //   return "/products";
        // }
        return "/products";
      },
      keepUnusedDataFor: 600,
    }),
    getSingleProduct: builder.query({
      query: (id) => {
        return `/products/${id}`;
      },
      keepUnusedDataFor: 120,
    }),
    getProductsCategory: builder.query({
      query: () => {
        return `/categories`;
      },
      keepUnusedDataFor: 600,
    }),
  }),
});
export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  // useGetProductsCategoryQuery,
  useGetProductsCategoryQuery,
} = productApi;
