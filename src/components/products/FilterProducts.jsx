import React from "react";
import { useDispatch } from "react-redux";
import { sortByPriceFilter } from "../../redux/features/filters/filterSlice";
const sortOptions = [
  { type: "all", title: "Default" },
  { type: "lowToHigh", title: "Price (Low to High)" },
  { type: "highToLow", title: "Price (High to Low)" },
];
export default function FilterProducts() {
  const dispatch = useDispatch();
  const handleSortBy = (e) => {
    e.preventDefault();
    dispatch(sortByPriceFilter(e.target.value));
  };
  return (
    <div className=" px-8 mt-4">
      <h2 className="font-semibold tracking-wider">Sort by Price :</h2>
      <select
        className="bg-gray-200 py-1 px-3 focus:outline-none mt-4"
        onChange={handleSortBy}
      >
        {sortOptions.map((el, i) => (
          <option key={i} value={el.type} className="bg-zinc-200 text-gray-80">
            {el.title}
          </option>
        ))}
      </select>
    </div>
  );
}
