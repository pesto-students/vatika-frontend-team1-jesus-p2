import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Common/Footer/Footer";
import Navbar from "./components/Common/Navbar/Navbar";
import LandingPage from "./components/Landing/subSection/LandingPage";
import Plant from "./components/ProductDetails/Plant";
import Cart from "./components/Cart/Cart";
import Confirmation from "./components/Confirmation/Confirmation";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Loading from "./components/Loading/Loading";
import EmailVerify from "./components/EmailVerify/EmailVerify";
import PrivateRoutes from "./utils/PrivateRoutes";

const LazyAbout = React.lazy(() => import("./components/About Us/AboutUs"));
const LazyBlog = React.lazy(() => import("./components/Blog/Blog"));
const LazyProduct = React.lazy(() => import("./components/Product/Product"));

function Path() {
  const path = window.location.pathname.slice(0, 6);
  return (
    <div>
      {path === "/users" ? (
        <Routes>
          <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
        </Routes>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/product"
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazyProduct />
                </React.Suspense>
              }
            />
            <Route
              path="/blog"
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazyBlog />
                </React.Suspense>
              }
            />
            <Route
              path="/aboutus"
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazyAbout />
                </React.Suspense>
              }
            />
            <Route path="/product/:name" element={<Plant />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route element={<PrivateRoutes />}>
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="/payment" element={<Checkout />} />
            </Route>
            <Route>404 Page Not Found!</Route>
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Path;
