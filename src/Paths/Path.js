import { Route, Routes } from "react-router-dom";
import LandingPage from '../components/Landing/subSection/LandingPage'
import Product from "../components/Product/Product";
import Blog from "../components/Blog/Blog";
import AboutUs from "../components/About Us/AboutUs";
import Plant from "../components/ProductDetails/Plant";
import Cart from "../components/Cart/Cart";
import Confirmation from "../components/Confirmation/Confirmation";

function Path() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/product/:name" element={<Plant/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/confirmation" element={<Confirmation/>} />
        <Route>404 Page Not Found!</Route>
      </Routes>
    </div>
  )
}

export default Path
