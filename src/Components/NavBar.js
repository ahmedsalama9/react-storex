import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Map from "../assets/location.svg";
import Email from "../assets/envelope.svg";
import Logo from "../assets/logo.png";
import Cart from "../assets/cart.svg";
import Wish from "../assets/wish.svg";
import User from "../assets/user.svg";
import Search from "../assets/search.svg";
import Close from "../assets/close.svg";
import CartMini from "./CartMini";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
function NavBar() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [brandsOpen, setBrandsOpen] = useState(false);
    const brands = [
        "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
        "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/uniqlo.svg",
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dior.svg",
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/puma.svg",
        "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
        "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
        "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/uniqlo.svg",
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dior.svg",
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/puma.svg",
        "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
        "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    ];
    return (_jsxs("header", { className: "w-full", children: [_jsx("div", { className: "hidden lg:flex bg-[var(--theme-dark)] text-white h-[50px] items-center justify-center", children: _jsx("div", { className: "max-w-7xl w-full px-6 flex justify-between", children: _jsxs("div", { className: "flex gap-6", children: [_jsxs("span", { className: "flex items-center gap-2", children: [_jsx("img", { src: Email, className: "w-5" }), "ahmedmsalama@outlook.com"] }), _jsxs("span", { className: "flex items-center gap-2", children: [_jsx("img", { src: Map, className: "w-5" }), "New Damietta, Egypt"] })] }) }) }), _jsxs("nav", { className: "bg-white shadow-sm relative", children: [_jsxs("div", { className: "max-w-7xl mx-auto px-6 h-[90px] flex items-center justify-between", children: [_jsx("img", { src: Logo, className: "w-28 lg:w-36 cursor-pointer h-[70px] object-cover", onClick: () => navigate("/") }), _jsxs("ul", { className: "hidden lg:flex items-center gap-6 font-semibold text-lg", children: [_jsx("li", { className: "relative", children: _jsx("button", { onClick: () => setBrandsOpen(!brandsOpen), className: "bg-[var(--theme-dark)] text-white px-3 py-1 rounded", children: "Shop by Brands" }) }), _jsx("div", { className: "absolute mt-2 w-[80%] mx-auto right-0 left-0 z-50", children: brandsOpen && (_jsx("div", { className: "absolute left-0 right-0 mt-4 bg-white rounded-xl shadow-lg p-6 z-50", children: _jsx(Swiper, { modules: [Navigation], spaceBetween: 10, navigation: true, pagination: { clickable: true }, breakpoints: {
                                                    320: { slidesPerView: 2, spaceBetween: 10 }, // mobile
                                                    480: { slidesPerView: 3, spaceBetween: 10 }, // small tablets
                                                    768: { slidesPerView: 5, spaceBetween: 10 }, // tablets
                                                    1024: { slidesPerView: 6, spaceBetween: 10 }, // small desktops
                                                    1280: { slidesPerView: 8, spaceBetween: 10 }, // large desktops
                                                }, className: "bg-white mt-5 rounded-lg", children: brands.map((item, index) => (_jsx(SwiperSlide, { className: "flex flex-row items-center justify-center py-4", children: _jsx(Link, { to: "#", children: _jsx("img", { src: item, alt: `Brand ${index}`, className: "w-20 hover:scale-110 hover:-rotate-6 transition-transform duration-500 mx-auto" }) }) }, index))) }) })) }), _jsx(NavLink, { to: "/", className: "hover:text-[var(--theme-color)]", children: "Home" }), _jsx(NavLink, { to: "/shop", children: "Shop" }), _jsx(NavLink, { to: "/man-fashion", children: "Men" }), _jsx(NavLink, { to: "/women-fashion", children: "Women" }), _jsx(NavLink, { to: "/blog", children: "Blog" }), _jsx(NavLink, { to: "/contact", children: "Contact" })] }), _jsxs("div", { className: "hidden lg:flex items-center gap-4", children: [_jsx("img", { src: Cart, className: "w-7 cursor-pointer", onClick: () => setCartOpen(true) }), _jsx("img", { src: Wish, className: "w-7 cursor-pointer", onClick: () => navigate("/wish") }), _jsx("img", { src: User, className: "w-7 cursor-pointer" }), _jsx("img", { src: Search, className: "w-7 cursor-pointer", onClick: () => setSearchOpen(!searchOpen) })] }), _jsxs("div", { className: "lg:hidden cursor-pointer", onClick: () => setMenuOpen(!menuOpen), children: [_jsx("span", { className: "block w-6 h-1 bg-[var(--theme-color)] mb-1" }), _jsx("span", { className: "block w-8 h-1 bg-[var(--theme-color)] mb-1" }), _jsx("span", { className: "block w-10 h-1 bg-[var(--theme-color)]" })] })] }), searchOpen && (_jsx("div", { className: "absolute right-6 top-full mt-4 bg-white shadow-xl rounded-lg w-72 p-3 z-50", children: _jsx("input", { type: "text", placeholder: "Search products...", className: "w-full border px-3 py-2 rounded" }) })), menuOpen && (_jsx("div", { className: "lg:hidden px-6 pb-6", children: _jsxs("ul", { className: "flex flex-col gap-4 text-lg font-semibold", children: [_jsx(NavLink, { to: "/", children: "Home" }), _jsx(NavLink, { to: "/shop", children: "Shop" }), _jsx(NavLink, { to: "/blog", children: "Blog" }), _jsx(NavLink, { to: "/contact", children: "Contact" })] }) }))] }), cartOpen && (_jsxs(_Fragment, { children: [_jsx("div", { className: "fixed inset-0 bg-black/40 z-40" }), _jsxs("div", { className: "fixed right-0 top-0 h-full w-full sm:w-[400px] bg-white z-50 p-4", children: [_jsx("button", { onClick: () => setCartOpen(false), className: "mb-4", children: _jsx("img", { src: Close, className: "w-6" }) }), _jsx(CartMini, {})] })] })), _jsxs("div", { className: "lg:hidden fixed bottom-4 left-1/2 -translate-x-[80%] w-[60%] bg-[var(--theme-dark)] p-3 rounded-xl flex justify-between z-50", children: [_jsx("img", { src: Cart, className: "w-8" }), _jsx("img", { src: Wish, className: "w-8" }), _jsx("img", { src: User, className: "w-8" }), _jsx("img", { src: Search, className: "w-8" })] })] }));
}
export default NavBar;
