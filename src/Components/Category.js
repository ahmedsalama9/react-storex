import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Man from "../assets/man.png";
import Women from "../assets/women.png";
import Kids from "../assets/kids.png";
import { Link } from "react-router-dom";
function Category() {
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
    ];
    return (_jsxs("section", { children: [_jsxs("div", { children: [_jsx("h3", { className: "text-center mt-20 mb-15 text-[var(--theme-color)] text-2xl font-semibold", children: "Top Brands" }), _jsx("div", { className: "grid xl:grid-cols-10 lg:grid-cols-10 grid-cols-3 gap-6 gap-y-10 items-center w-[70%] mx-auto ", children: brands.map((item, idex) => (_jsx("div", { children: _jsx(Link, { to: "#", children: _jsx("img", { src: item, className: "w-20" }) }) }, idex))) })] }), _jsxs("div", { className: "flex xl:flex-row lg:flex-row md:flex-row flex-col w-[80%] mx-auto mt-20 mb-10 gap-5 overflow-hidden ", children: [_jsx("div", { className: "w-[550px] h-[370px] hover:scale-102 transition-transform duration-500 ease-in-out ", children: _jsx(Link, { to: "#", children: _jsx("img", { src: Man, alt: "category for man", className: "w-[500px] h-[350px] object-cover object-top rounded-lg " }) }) }), _jsx("div", { className: "w-[550px] h-[370px] hover:scale-102 transition-transform duration-500 ease-in-out ", children: _jsx("a", { href: "#", children: _jsx("img", { src: Women, alt: "category for women", className: "w-[500px] h-[350px] object-cover rounded-lg" }) }) }), _jsx("div", { className: "w-[550px] h-[370px] hover:scale-102 transition-transform duration-500 ease-in-out ", children: _jsx("a", { href: "#", children: _jsx("img", { src: Kids, alt: "category for kids", className: "w-[500px] h-[350px] object-cover object-top rounded-lg" }) }) })] })] }));
}
export default Category;
