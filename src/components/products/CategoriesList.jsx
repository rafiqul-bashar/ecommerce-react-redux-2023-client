import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { findWithCategory } from "../../redux/features/filters/filterSlice";

export default function CategoriesList({ categories = [] }) {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.filters);
  const copiedCategory = ["all", ...categories];
  const addToFilter = (el) => {
    dispatch(findWithCategory(el.toLowerCase()));
  };
  return (
    <div className="flex flex-col space-y-2 md:space-y-4 px-8">
      <h2 className="font-semibold tracking-wider">Select From Categories :</h2>
      {copiedCategory.map((el, i) => (
        <p
          key={i}
          onClick={() => addToFilter(el)}
          className={`tracking-wide font-semibold capitalize bg-slate-200 py-2  px-8 cursor-pointer hover:scale-95 transition-all duration-150 hover:bg-slate-300  ${
            category === el.toLowerCase() &&
            "bg-slate-700 text-white hover:bg-slate-600"
          }`}
        >
          {el}
        </p>
      ))}
    </div>
  );
}
