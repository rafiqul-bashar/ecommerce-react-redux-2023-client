import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user } = useSelector((state) => state.auth);
  if (user?.accessToken && user?.user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
