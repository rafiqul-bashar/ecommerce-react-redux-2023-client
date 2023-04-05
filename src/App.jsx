import { Route, Routes } from "react-router-dom";
import {
  BrowseProductsPage,
  CheckOutPage,
  HomePage,
  LoginPage,
  MyCartPage,
  NotFound,
  ProfilePage,
  RegisterPage,
  SingleProductPage,
} from "./pages";
import { Navbar, Footer, MobileNavbar } from "./components";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { useSelector } from "react-redux";
import { AdminDashboard } from "./components/adminSite";

function App() {
  const { user } = useSelector((state) => state.auth);
  let admin = user?.user?.admin;
  // if(user?.user)
  if (admin) {
    return <AdminDashboard />;
  } else {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-h-[90vh]  md:h-full overflow-y-auto overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <RegisterPage />{" "}
                </PublicRoute>
              }
            />
            <Route path="/products" element={<BrowseProductsPage />} />
            <Route path="/products/:id" element={<SingleProductPage />} />
            <Route
              path="/my-account"
              element={
                <PrivateRoute>
                  {" "}
                  <ProfilePage />{" "}
                </PrivateRoute>
              }
            />
            <Route path="/my-cart" element={<MyCartPage />} />

            <Route
              path="/checkout"
              element={
                <PrivateRoute>
                  <CheckOutPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
        <MobileNavbar />
      </div>
    );
  }
}

export default App;
