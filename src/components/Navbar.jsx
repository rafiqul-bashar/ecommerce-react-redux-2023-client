import React from "react";
import { BsCartFill } from "react-icons/bs";
import { RxExit } from "react-icons/rx";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLoggedOut } from "../redux/features/auth/authSlice";
const menuItems = [
  {
    link: "/",
    title: "home",
  },
  {
    link: "/my-cart",
    title: "Cart",
  },
  {
    link: "/products",
    title: "products",
  },
];
export default function Navbar() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="hidden md:block bg-slate-800 text-white">
      <div className="container flex items-center justify-between px-24 py-1 h-[10vh]">
        <div className="flex items-center space-x-10  w-2/3">
          <div className=" mr-20">
            <Link to="/">
              <h3 className="font-bold  italic line-through text-3xl cursor-pointer">
                MartShop
              </h3>
            </Link>
          </div>
          {menuItems.map((el, i) => (
            <Link key={i} to={el.link}>
              <div className="flex justify-center items-center capitalize font-semibold text-lg ">
                <h5 className="hover:text-emerald-500 hover:scale-95 transition-all duration-150 cursor-pointer">
                  {el.title}
                </h5>
              </div>
            </Link>
          ))}
          {user?.accessToken && (
            <Link to="/my-account">
              <h5 className="hover:text-emerald-500 hover:scale-95 transition-all duration-150 cursor-pointer font-semibold">
                {"My Account"}
              </h5>
            </Link>
          )}
        </div>
        <div className="flex items-center space-x-3">
          <Link to="/my-cart">
            <div className="relative p-2">
              <BsCartFill className="w-6 h-6 text-emerald-500" />
              <span className="absolute z-10 top-0 left-6 bg-gray-700 p-1 rounded-full text-white flex items-center justify-center w-6 h-6">
                {cartTotalQuantity}
              </span>
            </div>
          </Link>
          {user?.accessToken ? (
            <button
              onClick={() => dispatch(userLoggedOut())}
              className="relative p-2"
            >
              <RxExit className="w-6 h-6 text-gray-200" />
            </button>
          ) : (
            <Link to="/login">
              <h5 className="hover:text-emerald-500 hover:scale-95 transition-all duration-150 cursor-pointer font-semibold">
                Login
              </h5>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
