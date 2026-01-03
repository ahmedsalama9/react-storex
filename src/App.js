import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { children: [_jsx(NavBar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/shop", element: _jsx(Shop, {}) }), _jsx(Route, { path: "/man-fashion", element: _jsx(Man, {}) }), _jsx(Route, { path: "/women-fashion", element: _jsx(Women, {}) }), _jsx(Route, { path: "/jewelery", element: _jsx(Kids, {}) }), _jsx(Route, { path: "/blog", element: _jsx(Blog, {}) }), _jsx(Route, { path: "/blog/:id", element: _jsx(SingleBlog, {}) }), _jsx(Route, { path: "/shop/:id", element: _jsx(SingleProduct, {}) }), _jsx(Route, { path: "/cart", element: _jsx(CartPage, {}) }), _jsx(Route, { path: "/wish", element: _jsx(WishList, {}) })] }), _jsx("div", { className: "mt-20", children: _jsx(Footer, {}) })] }));
}
export default App;
