import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Cart from "../assets/cart.svg";
import Wish from "../assets/wish.svg";
import Max from "../assets/max.svg";
import Star from "../assets/star.svg";
import BlackBanner from "../assets/Black.png";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
function LatestProducts() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const latestProd = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products?limit=30");
                const data = await res.json();
                setProducts(data);
            }
            catch (err) {
                console.error(err);
            }
        };
        latestProd();
    }, []);
    return (_jsxs(_Fragment, { children: [_jsxs("section", { className: "flex flex-col items-center justify-center w-[90%] mx-auto", children: [_jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-[var(--theme-color)] text-lg sm:text-xl", children: "Special Offers" }), _jsx("h2", { className: "text-[var(--theme-dark)] text-2xl sm:text-3xl font-semibold mt-3", children: "LATEST PRODUCTS" }), _jsx("p", { className: "max-w-2xl mx-auto mt-4 text-sm sm:text-lg text-gray-600", children: "Explore our newest additions, blending modern design with timeless quality." })] }), _jsx("div", { className: "mt-10 mb-10 w-full mx-auto cursor-grab", children: _jsx(Swiper, { spaceBetween: 20, breakpoints: {
                                320: { slidesPerView: 1.2 },
                                480: { slidesPerView: 1.5 },
                                640: { slidesPerView: 2 },
                                768: { slidesPerView: 2.5 },
                                1024: { slidesPerView: 3.5 },
                                1280: { slidesPerView: 5 },
                            }, children: products.map((item) => (_jsx(SwiperSlide, { children: _jsxs("div", { className: "flex flex-col items-start p-4 shadow-lg  rounded-lg ", children: [_jsx("img", { src: item.image, alt: "", className: "w-[350px] h-[275px] object-cover relative group" }), _jsx("div", { className: "flex flex-col absolute px-2 py-3 hover:bg-black/40 rounded-lg w-[290px] h-[275px] transition-all duration-500", children: _jsxs("div", { children: [_jsx("img", { src: Cart, alt: "cart", className: "w-8 cursor-pointer hover:scale-110  transition-all duration-400 shadow-lg rounded-full bg-white p-1" }), _jsx("img", { src: Wish, alt: "Wish", className: "w-8 cursor-pointer hover:scale-110  transition-all duration-400 shadow-lg rounded-full bg-white p-1 mt-4" }), _jsx(Link, { to: `/shop/${item.id}`, children: _jsx("img", { src: Max, alt: "Wish", className: "w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1 mt-4" }) })] }) }), _jsxs("div", { className: "mt-5", children: [_jsxs("div", { className: "flex flex-row items-center gap-1", children: [_jsx("img", { src: Star, alt: "Wish", className: "w-6 cursor-pointer hover:scale-110  transition-all duration-400 shadow-lg rounded-full   " }), _jsxs("span", { className: "text-lg ", children: [" ", item.rating.rate, "(", item.rating.count, ")"] })] }), _jsx("h3", { className: "font-semibold text-[var(--theme-dark)] text-xl truncate w-[250px] mt-3", children: item.title }), _jsx("p", { className: "text-gray-600 ", children: item.category }), _jsxs("div", { className: "text-[var(--theme-color)] text-xl mt-4", children: [item.price, " ", _jsx("span", { className: "text-gray-500", children: item.discount })] })] }), _jsx("span", { className: "w-full h-[1px] bg-[var(--theme-dark)] rounded-lg mt-5 mb-3" }), _jsxs("div", { className: "flex flex-row gap-1", children: [_jsxs("button", { className: " flex flex-row gap-4 bg-[var(--theme-color)] text-white px-2 py-1 rounded-sm font-medium hover:bg-[var(--theme-color)]/90  cursor-pointer", children: [_jsx("img", { src: Cart, alt: "cart", className: "w-6 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1" }), _jsx("span", { children: "Add to Cart " })] }), _jsxs(Link, { to: `/shop/${item.id}`, className: " flex flex-row gap-2 bg-[var(--theme-color)] text-white px-2 py-1 rounded-sm font-medium hover:bg-[var(--theme-color)]/90  cursor-pointer", children: [_jsx("img", { src: Wish, alt: "cart", className: "w-6 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1" }), _jsx("span", { children: " View " })] })] }), _jsx("span", {})] }, item.id) }))) }) })] }), _jsx("div", { className: "w-full my-10", children: _jsx("a", { href: "#", className: "block", children: _jsx("img", { src: BlackBanner, alt: "category for women", className: "w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[550px] object-cover object-center" }) }) })] }));
}
export default LatestProducts;
