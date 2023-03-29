import { Route, Routes } from "react-router-dom";
import {
  BrowseProductsPage,
  HomePage,
  LoginPage,
  MyCartPage,
  ProfilePage,
  RegisterPage,
  SingleProductPage,
} from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<BrowseProductsPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/my-account" element={<ProfilePage />} />
        <Route path="/my-cart" element={<MyCartPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
