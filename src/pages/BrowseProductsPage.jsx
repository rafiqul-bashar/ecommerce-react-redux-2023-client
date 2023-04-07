import React from "react";
import { LineWave } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { CategoriesList, FilterProducts } from "../components";
import ProductCard from "../components/products/ProductCard";
import Loading from "../components/ui/Loading";
import ShowError from "../components/ui/ShowError";
import {
  useGetProductsCategoryQuery,
  useGetProductsQuery,
} from "../redux/features/product/productApi";
export default function BrowseProductsPage() {
  const {
    data: categories,
    isLoading: categoryLoading,
    isError: categoryError,
  } = useGetProductsCategoryQuery({ refetchOnMountOrArgChange: true });
  const {
    data: products,
    isLoading: productsLoading,
    isError: productsError,
  } = useGetProductsQuery();
  const { category, sortByPrice: sortBy } = useSelector(
    (state) => state.filters
  );
  // render categories
  let categoriesUi = <div></div>;
  if (!categoryError & !categoryLoading)
    categoriesUi = <CategoriesList categories={categories} />;
  //  filters for Products to show
  const filterByCategory = (product) => {
    if (category === "all") {
      return true;
    }
    if (product.category.toLowerCase() === category) {
      return true;
    }
    return false;
  };
  // render products
  let productsUi = <div />;
  if (productsError) productsUi = <ShowError message="something went wrong" />;
  if (!categoryError & !categoryLoading)
    productsUi = products
      ?.filter(filterByCategory)
      .map((product, i) => <ProductCard key={i} product={product} />);
  if (sortBy === "highToLow") {
    productsUi = products
      ?.filter(filterByCategory)
      .sort(function (a, b) {
        return b.price - a.price;
      })
      .map((product, i) => <ProductCard key={i} product={product} />);
  } else if (sortBy === "lowToHigh") {
    productsUi = products
      ?.filter(filterByCategory)
      .sort(function (a, b) {
        return a.price - b.price;
      })
      .map((product, i) => <ProductCard key={i} product={product} />);
  }
  if (productsLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="">
        <div className="container text-center py-6">
          <h2 className="tracking-tighter text-3xl font-semibold text-gray-700">
            Choose and buy your favorite product.
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4  md:h-[90vh]">
        <div className="col-span-1  top-10 mb-4 md:mb-0 h-fit overflow-hidden">
          {categoriesUi}
          <FilterProducts />
        </div>

        <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 md:overflow-auto">
          {productsUi}
        </div>
      </div>
    </>
  );
}
