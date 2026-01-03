import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Cart from "../assets/cart.svg";
import Wish from "../assets/wish.svg";
function SingleProduct() {
    const { id } = useParams();
    const [singleProducts, setSingleProducts] = useState(null);
    const [tab, setTab] = useState("Product Description");
    useEffect(() => {
        const singleProdFetch = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setSingleProducts(data);
            }
            catch (err) {
                console.error(err);
            }
        };
        singleProdFetch();
    }, [id]);
    if (!singleProducts)
        return (_jsx("div", { children: _jsx("span", { children: "single product is loading " }) }));
    return (_jsxs("div", { children: [_jsxs("div", { className: "mt-35 max-w-[90%] mx-auto p-6 bg-white rounded-xl shadow-sm flex flex-col md:flex-row gap-8", children: [_jsx("div", { className: "flex-1 flex justify-center items-center  rounded-lg p-4", children: _jsx("img", { src: singleProducts.image, alt: singleProducts.title, className: "w-full h-[275px] object-contain" }) }), _jsxs("div", { className: "flex-2 flex flex-col gap-4", children: [_jsx("h1", { className: "text-3xl font-bold text-gray-800", children: singleProducts.title }), _jsx("p", { className: "text-gray-500 capitalize", children: singleProducts.category }), _jsx("p", { className: "text-gray-700", children: singleProducts.description }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("span", { className: "text-2xl font-semibold text-[var(--theme-color)]", children: ["$", singleProducts.price] }), _jsxs("div", { className: "flex items-center gap-1 text-yellow-500", children: [_jsx("span", { children: singleProducts.rating.rate }), _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: _jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.285-3.955a1 1 0 00-.364-1.118L2.067 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" }) }), _jsxs("span", { className: "text-gray-400", children: ["(", singleProducts.rating.count, ")"] })] })] }), _jsxs("div", { className: "flex flex-row gap-1", children: [_jsxs("button", { className: " flex flex-row gap-4 bg-[var(--theme-color)] text-white px-2 py-1 rounded-sm font-medium hover:bg-[var(--theme-color)]/90  cursor-pointer", children: [_jsx("img", { src: Cart, alt: "cart", className: "w-6 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1" }), _jsx("span", { children: "Add to Cart " })] }), _jsxs("button", { className: " flex flex-row gap-4 bg-[var(--theme-color)] text-white px-2 py-1 rounded-sm font-medium hover:bg-[var(--theme-color)]/90  cursor-pointer", children: [_jsx("img", { src: Wish, alt: "cart", className: "w-6 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1" }), _jsx("span", { children: "Wish List " })] })] })] })] }), _jsxs("div", { className: "mt-5 max-w-[90%] mx-auto p-6 bg-white rounded-xl shadow-sm ", children: [_jsxs("div", { className: "flex flex-row items-center justify-center gap-15 text-xl font-bold", children: [_jsx("button", { onClick: () => setTab("Product Description"), className: `cursor-pointer ${tab === "Product Description"
                                    ? "text-[var(--theme-color)]"
                                    : "link"}`, children: "Product Description" }), _jsx("button", { onClick: () => setTab("Product Features"), className: `cursor-pointer ${tab === "Product Features" ? "text-[var(--theme-color)]" : "link"}`, children: "Product Features" }), _jsx("button", { onClick: () => setTab("Product Details"), className: `cursor-pointer ${tab === "Product Details" ? "text-[var(--theme-color)]" : "link"}`, children: "Product Details" })] }), tab === "Product Description" && (_jsx("div", { className: "mt-10", children: _jsx("p", { className: "text-gray-700 text-md font-medium", children: singleProducts.description }) })), tab === "Product Features" && (_jsx("div", { className: "mt-10", children: _jsxs("ul", { className: "list-disc list-inside text-gray-700 text-md font-medium", children: [_jsx("li", { children: "High-quality materials for durability" }), _jsx("li", { children: "Ergonomic design for comfort" }), _jsx("li", { children: "Lightweight and portable" }), _jsx("li", { children: "Water-resistant and easy to clean" }), _jsx("li", { children: "Available in multiple colors and sizes" })] }) })), tab === "Product Details" && (_jsx("div", { className: "mt-10", children: _jsx("p", { className: "text-gray-700 text-md font-medium", children: "This product is crafted with attention to detail and engineered to provide maximum performance and reliability. Perfect for everyday use, it features a sleek design, premium finish, and is built to last. Suitable for all ages, it comes with a warranty and customer support for peace of mind." }) }))] })] }));
}
export default SingleProduct;
