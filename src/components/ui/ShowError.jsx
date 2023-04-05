import React from "react";

export default function ShowError({ message = "" }) {
  return (
    <div className="py-12">
      <h2 className="tracking-wider text-2xl font-semibold text-red-500 capitalize">
        {message} !
      </h2>
    </div>
  );
}
