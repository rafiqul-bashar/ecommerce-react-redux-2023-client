import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product = {} }) {
  const { id, title, price, category, image } = product;

  return (
    <Link to={`/products/${id}`}>
      <div className="max-h-[340px] w-full p-2 md:p-3  flex-col space-y-2 md:space-y-3">
        <img src={image} alt={title} className="h-[120px] mx-auto" />
        <p className="text-3xl font-semibold text-gray-700">$ {price}</p>
        <h4 className="capitalize tracking-wide text-xs md:text-sm bg-gray-700 text-zinc-50 p-1 w-fit">
          {category}
        </h4>
        <h1 className="capitalize tracking-wide text-gray-800">{title}</h1>
        {/* <p>{description}</p> */}
      </div>
    </Link>
  );
}
