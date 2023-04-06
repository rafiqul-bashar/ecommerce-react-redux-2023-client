import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const { user } = useSelector((state) => state.auth);
  let admin = user?.userData?.admin;
  if (user?.accessToken && admin) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
