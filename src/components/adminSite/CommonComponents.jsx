import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../../redux/features/auth/authSlice";

export function AdminHeader() {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center py-2 md:py-4 bg-emerald-600 text-white">
      <div className="flex items-center justify-between w-full  px-6 md:px-44">
        <div className="flex flex-col md:flex-row items-center ">
          <Link to="/">
            <h3 className="font-bold  italic line-through text-2xl md:text-3xl cursor-pointer ">
              MartShop
            </h3>
          </Link>
          <h3 className="font-semibold text-lg md:text-xl cursor-pointer">
            {" "}
            - Admin Panel
          </h3>
        </div>
        <button
          onClick={() => dispatch(userLoggedOut())}
          className="flex  items-center  space-x-1 hover:scale-95 transition-all duration-200 "
        >
          {" "}
          <h5 className="text-xl">Logout</h5>
          <AiOutlineLogout className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
}

export function AdminNavbar() {
  return (
    <div className="flex items-center justify-center py-2 bg-slate-800 ">
      <div className="flex items-center justify-evenly w-full max-w-2xl ">
        <Link to="/">
          <h6 className="text-sm md:text-xl transition-all duration-200  hover:scale-105 text-white hover:bg-slate-300  hover:text-gray-900 px-3 py-1 rounded-sm">
            Dashboard
          </h6>
        </Link>
        <Link to="/products">
          <h6 className="text-sm md:text-xl transition-all duration-200  hover:scale-105 text-white hover:bg-slate-300  hover:text-gray-900 px-3 py-1 rounded-sm">
            Products
          </h6>
        </Link>
        {/* <Link to="/add-product">Add Product</Link> */}
        <Link to="/manage-hr">
          <h6 className="text-sm md:text-xl transition-all duration-200  hover:scale-105 text-white hover:bg-slate-300  hover:text-gray-900 px-3 py-1 rounded-sm">
            Employees
          </h6>
        </Link>
        <Link to="/">
          <h6 className="text-sm md:text-xl transition-all duration-200  hover:scale-105 text-white hover:bg-slate-300  hover:text-gray-900 px-3 py-1 rounded-sm">
            Orders
          </h6>
        </Link>
      </div>
    </div>
  );
}

export function AdminFooter() {
  return (
    <div className="flex items-center justify-center py-4 md:py-8 bg-slate-800 text-white font-semibold">
      <Link to="https://www.rafiqulbashar.xyz/" target="_blank">
        <h3 className="text-lg text-center tracking-widest hover:underline">
          &copy; Rafiqul Bashar - All Right Reserved
        </h3>
      </Link>
    </div>
  );
}
