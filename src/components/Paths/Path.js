import { Route, Routes } from "react-router-dom";
import LandingPage from '../Landing/LandingPage'
import Product from "../Product/Product";
import Blog from "../Blog/Blog";
import AboutUs from "../About Us/AboutUs";
import Plant from "../ProductDetails/Plant";

function Path() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/product/plant" element={<Plant/>} />
      </Routes>
    </div>
  )
}

export default Path
