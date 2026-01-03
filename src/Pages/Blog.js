import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import User from "../assets/user.svg";
import View from "../assets/view.svg";
import PostDate from "../assets/dates.svg";
function Blog() {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        const blogFetch = async () => {
            try {
                const response = await fetch("https://dummyjson.com/posts");
                const data = await response.json();
                setBlog(data.posts);
            }
            catch (err) {
                console.error(err);
            }
        };
        blogFetch();
    }, []);
    return (_jsx("div", { className: "p-6 bg-gray-100 min-h-screen mt-25 ", children: _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto mt-30", children: blog.map((item) => (_jsxs("div", { className: "bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300", children: [_jsx("div", { children: _jsx("img", { src: `https://picsum.photos/seed/${item.id}/1200/500` }) }), _jsxs("div", { className: "flex flex-wrap items-center gap-3 text-gray-500 text-sm mb-1 mt-4", children: [_jsxs("span", { className: "flex flex-row items-center justify-center gap-3", children: [" ", _jsx("img", { src: User, alt: "user", className: "w-5 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1" }), " ", "User ID: ", item.userId] }), _jsxs("span", { className: "flex flex-row items-center justify-center gap-3", children: [_jsx("img", { src: View, alt: "user", className: "w-5 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1" }), " ", item.views, " views"] }), _jsxs("span", { className: "flex flex-row items-center justify-center gap-3", children: [_jsx("img", { src: PostDate, alt: "user", className: "w-5 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1" }), new Date().toLocaleDateString()] })] }), _jsx("h2", { className: "text-xl font-bold mb-2 text-gray-800 mt-3 w-full truncate", children: item.title }), _jsx("p", { className: "text-gray-600 w-full truncate mb-5", children: item.body }), _jsx(Link, { to: `/blog/${item.id}`, className: " bg-[var(--theme-color)] text-white p-2 rounded-lg text-lg font-medium ", children: "Read More" })] }, item.id))) }) }));
}
export default Blog;
