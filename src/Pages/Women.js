import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import Cart from "../assets/cart.svg";
import Wish from "../assets/wish.svg";
import Max from "../assets/max.svg";
import Star from "../assets/star.svg";
import { useState } from "react";
import Grid from "../assets/grid.svg";
import List from "../assets/list.svg";
import { Link } from "react-router-dom";
function Women() {
    const [womenCat, setWomenCat] = useState([]);
    const [layOut, setLayOut] = useState("grid");
    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=24")
            .then((res) => res.json())
            .then((data) => {
            setWomenCat(data);
        })
            .catch((err) => console.error(err));
    }, []);
    return (_jsx("div", { className: "flex flex-row items-center justify-center", children: _jsxs("div", { className: "mt-40", children: [_jsxs("div", { className: "flex flex-row items-center justify-between w-[90%] mx-auto", children: [" ", _jsxs("div", { className: "flex flex-row gap-3 items-center justify-center", children: [_jsx("img", { onClick: () => setLayOut("grid"), src: Grid, alt: "product shop layout-grid", className: "w-9 bg-white shadow-lg p-1 rounded-full cursor-pointer hover:rotate-10 duration-400 transitin-ease" }), _jsx("img", { onClick: () => setLayOut("list"), src: List, alt: "product shop layout-list", className: "w-9 bg-white shadow-lg p-1 rounded-full cursor-pointer hover:-rotate-10 duration-400 transitin-ease" })] })] }), _jsx("div", { className: `mt-10 mb-10 ${layOut === "grid"
                        ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto gap-6"
                        : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[90%] mx-auto gap-5"}`, children: womenCat
                        .filter((products) => products.category === "women's clothing")
                        .map((item, index) => (_jsxs("div", { className: "shadow-lg rounded-lg cursor-pointer flex  flex-col items-start p-4", children: [_jsx("img", { src: item.image, alt: "", className: "w-[350px] h-[275px] object-cover relative group" }), _jsx("div", { className: "flex flex-col absolute px-2 py-3 hover:bg-black/40 rounded-lg w-fit h-[275px] transition-all duration-500", children: _jsxs("div", { children: [_jsx("img", { src: Cart, alt: "cart", className: "w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1" }), _jsx("img", { src: Wish, alt: "Wish", className: "w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1 mt-4" }), _jsx(Link, { to: `/shop/${item.id}`, children: _jsx("img", { src: Max, alt: "Wish", className: "w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1 mt-4" }) })] }) }), _jsxs("div", { className: "mt-1", children: [_jsxs("div", { className: "flex flex-grid items-center justify-between gap-1", children: [_jsxs("div", { className: "flex flex-row gap-2 ", children: [_jsx("img", { src: Star, alt: "Wish", className: "w-6 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full   " }), _jsxs("span", { className: "text-lg ", children: [" ", item.rating.rate, " (", item.rating.count, ")"] })] }), _jsxs("div", { className: "flex flex-row gap-2 ", children: [_jsx("button", { className: "w-5 h-5 block bg-red-800 rounded-full cursor-pointer " }), _jsx("button", { className: "w-5 h-5 block bg-black rounded-full cursor-pointer " }), _jsx("button", { className: "w-5 h-5 block bg-blue-500 rounded-full cursor-pointer " })] })] }), _jsx("h3", { className: "font-semibold text-[var(--theme-dark)] text-xl truncate w-[250px] mt-1", children: item.title }), _jsx("p", { className: "text-gray-600 ", children: item.category }), _jsxs("div", { className: "text-[var(--theme-color)] text-xl mt-2 ", children: ["$", item.price, _jsxs("span", { className: "text-gray-500", children: [item.discount, " "] })] })] }), _jsx("span", { className: "w-full h-[1px] bg-[var(--theme-dark)] rounded-lg mt-5 mb-3" }), _jsxs("div", { className: "flex flex-row gap-1 w-[92%] mx-auto", children: [_jsxs("button", { className: " flex flex-row gap-2 bg-[var(--theme-color)] text-white px-2 py-1 rounded-sm font-medium hover:bg-[var(--theme-color)]/90  cursor-pointer", children: [_jsx("img", { src: Cart, alt: "cart", className: "w-6 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1" }), _jsx("span", { children: "Add to Cart " })] }), _jsxs(Link, { to: `/shop/${item.id}`, className: " flex flex-row gap-2 bg-[var(--theme-color)] text-white px-2 py-1 rounded-sm font-medium hover:bg-[var(--theme-color)]/90  cursor-pointer", children: [_jsx("img", { src: Wish, alt: "cart", className: "w-6 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1" }), _jsx("span", { children: " View " })] })] })] }, index))) })] }) }));
}
export default Women;
