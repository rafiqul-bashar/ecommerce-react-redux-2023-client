import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProductToEdit } from "../../redux/features/product/productSlice";

export default function ProductItem({ product }) {
  const { title, price, image, category } = product || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEdit = () => {
    dispatch(setProductToEdit(product));
    navigate("/edit-product");
  };
  return (
    <li className="flex flex-col md:flex-row md:items-center py-1">
      <div className="flex w-full items-center  space-x-2 sm:space-x-4">
        <img
          className="flex-shrink-0 object-contain w-8 h-8  border-transparent rounded outline-none sm:w-20 sm:h-20 "
          src={image}
          alt={title}
        />
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1">
              <h3 className=" text-sm  leading-snug sm:pr-8">Name: {title}</h3>
              <h3 className=" text-sm  leading-snug sm:pr-8">
                Price: ${price}
              </h3>
              <h3 className=" text-sm  leading-snug sm:pr-8 capitalize">
                Category: {category}
              </h3>
            </div>
          </div>
        </div>
        {/*  Buttons */}
      </div>
      <div className="flex items-center space-x-3 ">
        <button
          onClick={handleEdit}
          className="flex items-center space-x-1 border border-gray-800 px-3 group hover:bg-purple-500 transition-all duration-150 hover:text-white rounded-sm hover:border-transparent"
        >
          <BiEdit className="text-purple-500 group-hover:text-white" />{" "}
          <h5>Edit</h5>{" "}
        </button>
        <button className="flex items-center space-x-1 border border-gray-800 px-3 group hover:bg-red-500 transition-all duration-150 hover:text-white rounded-sm hover:border-transparent">
          {" "}
          <AiOutlineDelete className="text-red-500 group-hover:text-white" />{" "}
          <h5>Delete</h5>{" "}
        </button>
      </div>
    </li>
  );
}
