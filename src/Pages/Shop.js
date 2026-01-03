import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo } from "react";
import Cart from "../assets/cart.svg";
import Wish from "../assets/wish.svg";
import Max from "../assets/max.svg";
import Star from "../assets/star.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "../assets/grid.svg";
import List from "../assets/list.svg";
import Filter from "../Components/Filter";
function Shop() {
    const [fakeProducts, setfakeProducts] = useState([]); //api
    const [layOut, setLayOut] = useState("grid");
    const [catFilter, setCatFilter] = useState([]); // filter
    const [sortBy, setSortBy] = useState("relative");
    useEffect(() => {
        const fakeProductFetch = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products?limit=24");
                const data = await res.json();
                setfakeProducts(data);
            }
            catch (err) {
                console.error(err);
            }
        };
        fakeProductFetch();
    }, []);
    const filterProducts = useMemo(() => {
        // sorting is mutating the original array
        let items = [...fakeProducts];
        if (catFilter.length > 0) {
            items = items.filter((products) => catFilter.includes(products.category));
        }
        // Sorting
        if (sortBy === "relative") {
            items = [...items].sort((a, b) => a.price - b.price);
        }
        if (sortBy === "Premium") {
            items = [...items].sort((a, b) => b.rating.rate - a.rating.rate);
        }
        if (sortBy === "priceUp") {
            items = [...items].sort((a, b) => b.price - a.price);
        }
        if (sortBy === "priceDown") {
            items = [...items].sort((a, b) => a.price - b.price);
        }
        if (sortBy === "recent") {
            // note: fake api end point do not provide date,, in real endpoint use date instead of id
            items = [...items].sort((a, b) => b.id - a.id);
        }
        return items;
    }, [fakeProducts, catFilter, sortBy]);
    return (_jsx("div", { className: "flex flex-col w-[90%] mx-auto mt-20 ", children: _jsxs("div", { className: "flex-2 mt-20", children: [_jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between w-full sm:w-[95%] mx-auto gap-3 sm:gap-0", children: [_jsx("div", { className: "border-2 border-[var(--theme-dark)] rounded-sm px-2 py-0.5 font-medium text-[16px] sm:text-[18px] w-full sm:w-auto", children: _jsxs("select", { className: "cursor-pointer w-full sm:w-auto", value: sortBy, onChange: (e) => setSortBy(e.target.value), children: [_jsx("option", { value: "relative", children: "Relative" }), _jsx("option", { value: "Premium", children: "Premium" }), _jsx("option", { value: "priceUp", children: "Price up" }), _jsx("option", { value: "priceDown", children: "Price Down" }), _jsx("option", { value: "recent", children: "Recent" })] }) }), _jsx("div", { className: "w-full sm:w-auto", children: _jsx(Filter, { catFilter: catFilter, setCatFilter: setCatFilter }) }), _jsxs("div", { className: "flex flex-row gap-3 items-center justify-start sm:justify-center w-full sm:w-auto", children: [_jsx("img", { onClick: () => setLayOut("grid"), src: Grid, alt: "product shop layout-grid", className: "w-9 bg-white shadow-lg p-1 rounded-full cursor-pointer hover:rotate-10 transition-transform duration-400 ease-in-out" }), _jsx("img", { onClick: () => setLayOut("list"), src: List, alt: "product shop layout-list", className: "w-9 bg-white shadow-lg p-1 rounded-full cursor-pointer hover:-rotate-10 transition-transform duration-400 ease-in-out" })] })] }), _jsx("div", { className: `mt-10 mb-10 ${layOut === "grid"
                        ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto gap-6"
                        : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[90%] mx-auto gap-5"}`, children: filterProducts.map((item) => (_jsxs("div", { className: "shadow-lg rounded-lg cursor-pointer flex  flex-col items-start p-4", children: [_jsx("img", { src: item.image, alt: "", className: "w-[350px] h-[275px] object-cover relative group" }), _jsx("div", { className: "flex flex-col absolute px-2 py-3 hover:bg-black/40 rounded-lg w-fit h-[275px] transition-all duration-500", children: _jsxs("div", { children: [_jsx("img", { src: Cart, alt: "cart", className: "w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1" }), _jsx("img", { src: Wish, alt: "Wish", className: "w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1 mt-4" }), _jsx(Link, { to: `/shop/${item.id}`, children: _jsx("img", { src: Max, alt: "Wish", className: "w-8 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1 mt-4" }) })] }) }), _jsxs("div", { className: "mt-1", children: [_jsxs("div", { className: "flex flex-grid items-center justify-between gap-1", children: [_jsxs("div", { className: "flex flex-row gap-2 ", children: [_jsx("img", { src: Star, alt: "Wish", className: "w-6 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full   " }), _jsx("span", { className: "text-lg ", children: " 4.8(500)" })] }), _jsxs("div", { className: "flex flex-row gap-2 ", children: [_jsx("button", { className: "w-5 h-5 block bg-red-800 rounded-full cursor-pointer " }), _jsx("button", { className: "w-5 h-5 block bg-black rounded-full cursor-pointer " }), _jsx("button", { className: "w-5 h-5 block bg-blue-500 rounded-full cursor-pointer " })] })] }), _jsx("h3", { className: "font-semibold text-[var(--theme-dark)] text-xl truncate w-[250px] mt-1", children: item.title }), _jsx("p", { className: "text-gray-600 ", children: item.category }), _jsxs("div", { className: "text-[var(--theme-color)] text-xl mt-2 ", children: ["$", item.price, _jsxs("span", { className: "text-gray-500", children: [item.discount, " "] })] })] }), _jsx("span", { className: "w-full h-[1px] bg-[var(--theme-dark)] rounded-lg mt-5 mb-3" }), _jsxs("div", { className: "flex flex-row gap-1 w-[92%] mx-auto", children: [_jsxs("button", { className: " flex flex-row gap-2 bg-[var(--theme-color)] text-white px-2 py-1 rounded-sm font-medium hover:bg-[var(--theme-color)]/90  cursor-pointer", children: [_jsx("img", { src: Cart, alt: "cart", className: "w-6 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1" }), _jsx("span", { children: "Add to Cart " })] }), _jsxs(Link, { to: `/shop/${item.id}`, className: " flex flex-row gap-2 bg-[var(--theme-color)] text-white px-2 py-1 rounded-sm font-medium hover:bg-[var(--theme-color)]/90  cursor-pointer", children: [_jsx("img", { src: Wish, alt: "cart", className: "w-6 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1" }), _jsx("span", { children: " View " })] })] })] }, item.id))) })] }) }));
}
export default Shop;
