import React from "react";
import { Route, Routes } from "react-router-dom";
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
  return (
    <div>
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
        <Route path="/users/:id/verify/:token" element={<EmailVerify />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/payment" element={<Checkout />} />
        </Route>

        <Route>404 Page Not Found!</Route>
      </Routes>
    </div>
  );
}

export default Path;
