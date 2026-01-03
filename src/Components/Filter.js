import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useState } from "react";
function Filter({ catFilter, setCatFilter }) {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        const productFilter = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products/categories");
                const data = await res.json();
                setCategory(data);
            }
            catch (error) {
                console.log(error);
            }
        };
        productFilter();
    }, []);
    // cause bug: const checkedCategory = [...new Set(catFilter.map((c) => c.category))];
    const toggleCategory = (value) => {
        setCatFilter((prev) => prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]);
    };
    return (_jsx("div", { className: "flex flex-row gap-5 overflow-x-auto px-4 w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200", children: category.map((item) => (_jsxs("label", { className: "flex flex-row items-center justify-center gap-3 px-3 py-2 min-w-max rounded-xl border border-gray-200 hover:border-[var(--titles)] hover:bg-[var(--titles)]/60 transition cursor-pointer whitespace-nowrap", children: [_jsx("input", { type: "checkbox", value: item, className: "h-4 w-4 rounded border-gray-300", checked: catFilter.includes(item), onChange: () => toggleCategory(item) }), item] }, item))) }));
}
export default Filter;
