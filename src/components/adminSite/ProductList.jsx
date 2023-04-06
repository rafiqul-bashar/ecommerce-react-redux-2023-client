import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";
import { useGetProductsQuery } from "../../redux/features/product/productApi";

export default function ProductList() {
  const { refetch, data: products, isLoading, isError } = useGetProductsQuery();
  return (
    <div className="py-8 max-w-3xl mx-auto">
      <Link to="/add-product">
        <button className="w-full py-1 rounded-sm bg-slate-800 text-white">
          Add New Product
        </button>
      </Link>
      <div className="py-4">
        <ul className="flex flex-col divide-y divide-gray-700 gap-2 ">
          {products?.map((product, i) => (
            <ProductItem key={i} product={product} refetch={refetch} />
          ))}
        </ul>
      </div>
    </div>
  );
}
