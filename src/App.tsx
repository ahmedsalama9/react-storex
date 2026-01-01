import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Blog from "./Pages/Blog";
import CartPage from "./Pages/Cart";
import Home from "./Pages/Home";
import Kids from "./Pages/Kids";
import Man from "./Pages/Man";
import Shop from "./Pages/Shop";
import SingleBlog from "./Pages/SingleBlog";
import SingleProduct from "./Pages/SingleProduct";
import WishList from "./Pages/WishList";
import Women from "./Pages/Women";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/man-fashion" element={<Man />} />
        <Route path="/women-fashion" element={<Women />} />
        <Route path="/jewelery" element={<Kids />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/shop/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wish" element={<WishList />} />
      </Routes>
      <div className="mt-20">
        <Footer />
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
