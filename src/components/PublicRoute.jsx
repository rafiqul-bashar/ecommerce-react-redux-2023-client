import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const { user } = useSelector((state) => state.auth);
  if (user?.accessToken && user?.user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
