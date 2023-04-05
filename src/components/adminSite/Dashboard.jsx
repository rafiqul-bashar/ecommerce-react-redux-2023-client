import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProductPage from "./AddProductPage";
import AdminHomePage from "./AdminHomePage";
import { AdminNavbar, AdminFooter, AdminHeader } from "./CommonComponents";
import EditProductPage from "./EditProductPage";
import EmployeesPage from "./EmployeesPage";
import OrdersPage from "./OrdersPage";
import ProductList from "./ProductList";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-stone-100">
      <AdminHeader />
      <AdminNavbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<AdminHomePage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="/edit-product" element={<EditProductPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/manage-hr" element={<EmployeesPage />} />
        </Routes>
      </div>
      <AdminFooter />
    </div>
  );
}
