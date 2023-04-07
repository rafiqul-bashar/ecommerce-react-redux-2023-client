import { apiSlice } from "../apiSlice";

export const productApi = apiSlice.injectEndpoints({
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    // endpoints here
    getProducts: builder.query({
      query: () => {
        return "/products";
      },
      keepUnusedDataFor: 360,
      providesTags: ["Products"],
    }),
    getSingleProduct: builder.query({
      query: (id) => {
        return `/products/${id}`;
      },
      providesTags: ["Products"],
      keepUnusedDataFor: 120,
    }),
    getProductsCategory: builder.query({
      query: () => {
        return `/categories`;
      },
      keepUnusedDataFor: 600,
    }),
    // mutations here

    addProduct: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
    editProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});
export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useGetProductsCategoryQuery,
  useAddProductMutation,
  useEditProductMutation,
  useDeleteProductMutation,
} = productApi;
