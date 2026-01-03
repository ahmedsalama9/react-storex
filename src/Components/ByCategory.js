import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Cart from "../assets/cart.svg";
import Wish from "../assets/wish.svg";
import Max from "../assets/max.svg";
import Star from "../assets/star.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function ByCategory() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [tab, setTab] = useState("all");
    useEffect(() => {
        const productsFetch = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products?limit=24");
                const data = await res.json();
                setProducts(data);
                const fetchCategories = [
                    "all",
                    ...new Set(data.map((item) => item.category)),
                ];
                setCategories(fetchCategories);
            }
            catch (err) {
                console.error(err);
            }
        };
        productsFetch();
    }, []);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-[var(--theme-color)] text-xl", children: "Fire it Up!" }), _jsx("h2", { className: "text-[var(--theme-dark)] text-3xl font-semibold mt-3", children: "Products by Categories" }), _jsx("p", { className: "w-[55%] mx-auto mt-5 font-normal text-lg", children: "Explore our newest additions, blending modern design with timeless quality. Each product is selected to inspire your everyday style." })] }), _jsx("div", { className: "flex flex-wrap sm:flex-row items-center justify-center gap-3 sm:gap-5 mt-10 text-[var(--theme-dark)] text-base sm:text-xl font-semibold cursor-pointer px-4", children: categories.map((itemCat) => (_jsx("button", { onClick: () => setTab(itemCat), className: ` cursor-pointer px-2 py-1  ${tab === itemCat ? "text-[var(--theme-color)] rounded-lg" : "link"}`, children: itemCat }, itemCat))) }), _jsx("div", { className: "mt-10 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 w-[80%] mx-auto gap-6", children: products
                    .filter((product) => tab === "all" || product.category === tab)
                    .map((item) => (_jsxs("div", { className: "flex flex-col items-start p-4 shadow-lg rounded-lg cursor-pointer", children: [_jsx("img", { src: item.image, alt: "", className: "w-[350px] h-[275px] object-cover relative group" }), _jsx("div", { className: "flex flex-col absolute px-2 py-3 hover:bg-black/40 rounded-lg w-[290px] h-[275px] transition-all duration-500", children: _jsxs("div", { children: [_jsx("img", { src: Cart, alt: "cart", className: "w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1" }), _jsx("img", { src: Wish, alt: "Wish", className: "w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1 mt-4" }), _jsx(Link, { to: `/shop/${item.id}`, children: _jsx("img", { src: Max, alt: "Wish", className: "w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1 mt-4" }) })] }) }), _jsxs("div", { className: "mt-1", children: [_jsxs("div", { className: "flex flex-row items-center gap-1", children: [_jsx("img", { src: Star, alt: "Wish", className: "w-6 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full   " }), _jsxs("span", { className: "text-lg ", children: [" ", item.rating.rate, "(", item.rating.count, ")"] })] }), _jsx("h3", { className: "font-semibold text-[var(--theme-dark)] text-xl truncate w-[250px] mt-1", children: item.title }), _jsx("p", { className: "text-gray-600 ", children: item.category }), _jsxs("div", { className: "text-[var(--theme-color)] text-xl mt-2 ", children: ["$", item.price, _jsx("span", { className: "text-gray-500", children: item.discount })] })] }), _jsx("span", { className: "w-full h-[1px] bg-[var(--theme-dark)] rounded-lg mt-5 mb-3" }), _jsxs("div", { className: "flex flex-row gap-1", children: [_jsxs("button", { className: " flex flex-row gap-4 bg-[var(--theme-color)] text-white px-2 py-1 rounded-sm font-medium hover:bg-[var(--theme-color)]/90  cursor-pointer", children: [_jsx("img", { src: Cart, alt: "cart", className: "w-6 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1" }), _jsx("span", { children: "Add to Cart " })] }), _jsxs(Link, { to: `/shop/${item.id}`, className: " flex flex-row gap-2 bg-[var(--theme-color)] text-white px-2 py-1 rounded-sm font-medium hover:bg-[var(--theme-color)]/90  cursor-pointer", children: [_jsx("img", { src: Wish, alt: "cart", className: "w-6 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1" }), _jsx("span", { children: " View " })] })] })] }, item.id))) })] }));
}
export default ByCategory;
