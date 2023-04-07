import React from "react";

export default function AdminHomePage() {
  return (
    <div className="text-xl text-center p-32 space-y-2">
      <h2>
        This is{" "}
        <span className="font-bold text-purple-600 text-3xl">Admin Site</span> .
      </h2>
      <h2 className="capitalize">Checkout Navigation Bar for features</h2>
      <p className="capitalize font-semibold tracking-wider text-lg pt-20 animate-pulse">
        More features will be added soon...
      </p>
    </div>
  );
}
