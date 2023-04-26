import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProductPage from "./AddProductPage";
import AdminHomePage from "./AdminHomePage";
import { AdminNavbar, AdminFooter, AdminHeader } from "./CommonComponents";
import EditProductPage from "./EditProductPage";

import ProductList from "./ProductList";
import AdminRoute from "./AdminRoute";
import { LoginPage, NotFound, ProfilePage } from "../../pages";
import PublicRoute from "../PublicRoute";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-stone-100">
      <AdminHeader />
      <AdminNavbar />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <AdminRoute>
                <AdminHomePage />
              </AdminRoute>
            }
          />
          <Route path="/products" element={<ProductList />} />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route
            path="/edit-product"
            element={
              <AdminRoute>
                <EditProductPage />{" "}
              </AdminRoute>
            }
          />
          <Route
            path="/my-account"
            element={
              <AdminRoute>
                <ProfilePage />
              </AdminRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <AdminFooter />
    </div>
  );
}
