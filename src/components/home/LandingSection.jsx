import React from "react";
import { Link } from "react-router-dom";

export default function LandingSection() {
  return (
    <section className="text-gray-600 bg-gray-100">
      <div className="container grid grid-cols-1 justify-center p-6 mx-auto sm:py-12 lg:py-32 md:grid-cols-3 ">
        <div className="flex items-center justify-center p-4 mt-8 lg:mt-0 h-72 sm:h-90 lg:h-96 xl:h-112 2xl:h-128  md:col-span-2">
          <img
            src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/12/h2-image-rev.jpg"
            alt="landing"
            className="object-cover w-full h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-5xl">
            Get Products Online With
            <br />
            <span className="text-primary text-5xl font-bold leading-none sm:text-6xl ">
              MartShop
            </span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Get Your Products With Us
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              to="/products"
              className="px-8 py-1  text-lg font-semibold rounded-sm bg-primary/90 text-gray-900 transition-all duration-200  border-2  border-transparent  hover:brightness-75 "
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
