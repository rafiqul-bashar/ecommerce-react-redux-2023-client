import React from "react";

export default function ShowError({ message = "Something Went Wrong!" }) {
  return (
    <div className="py-12  col-span-3">
      <h2 className="tracking-wider text-2xl font-semibold text-red-500 capitalize text-center ">
        {message} !
      </h2>
    </div>
  );
}
