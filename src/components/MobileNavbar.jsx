import React from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RiProductHuntLine } from "react-icons/ri";
import { BsShieldLock } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MobileNavbar() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="md:hidden grid grid-cols-4 items-center h-[10vh] fixed bottom-0 bg-gray-800 w-screen divide-x divide-slate-100">
      <Link to="/">
        <div className="flex flex-col justify-center items-center capitalize font-semibold text-base text-center text-gray-300">
          <AiOutlineHome className=" h-6 w-6 text-emerald-400" />
          <h5 className="w-full text-center">Home</h5>
        </div>
      </Link>
      <Link to="/products">
        <div className="flex flex-col justify-center items-center capitalize font-semibold text-base  text-gray-300 mx-auto  ">
          <RiProductHuntLine className=" h-6 w-6 text-emerald-400" />
          <h5 className="w-full text-center">Products</h5>
        </div>
      </Link>
      <Link to="/my-cart">
        <div className="flex flex-col justify-center items-center capitalize font-semibold text-base text-center text-gray-300 relative">
          <AiOutlineShoppingCart className="h-6 w-6 text-emerald-400" />
          <h5>Cart</h5>
          <span className="absolute z-10 bottom-8 left-12 bg-gray-700 p-1 rounded-full text-white flex items-center justify-center w-4 h-4 text-xs">
            {cartTotalQuantity}
          </span>
        </div>
      </Link>
      {
        <Link to={user?.accessToken ? `/my-account` : "/login"}>
          <div className="flex flex-col justify-center items-center capitalize font-semibold text-base text-center text-gray-300 ">
            {user?.accessToken ? (
              <AiOutlineUser className=" h-6 w-6 text-emerald-400" />
            ) : (
              <BsShieldLock className=" h-6 w-6 text-emerald-400" />
            )}
            <h5>{user?.accessToken ? "My Account" : "Login"}</h5>
          </div>
        </Link>
      }
    </div>
  );
}
