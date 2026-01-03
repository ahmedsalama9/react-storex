import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import User from "../assets/user.svg";
import { Link } from "react-router-dom";
import View from "../assets/view.svg";
import PostDate from "../assets/dates.svg";
function SingleBlog() {
    const { id } = useParams();
    const [singleBlog, setSingleBlog] = useState(null);
    useEffect(() => {
        // guard for id params
        if (!id)
            return;
        const singleBlogFn = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/posts/${id}`);
                const data = await response.json();
                setSingleBlog(data);
            }
            catch (err) {
                console.error(err);
            }
        };
        singleBlogFn();
    }, [id]);
    //guard for using null in typed state,  so do not break the deployment
    if (!singleBlog) {
        return _jsx("p", { children: "single post is loading ...." });
    }
    return (_jsx("div", { children: _jsxs("div", { className: "w-[80%] mx-10 p-6 mt-20", children: [_jsx(Link, { to: "/", className: "inline-block mb-4 text-sm text-blue-600 hover:underline", children: "\u2190 Back to Blogs" }), _jsx("img", { src: `https://picsum.photos/900/750?random=${singleBlog.id}`, alt: singleBlog.title, className: "w-full h-[660px] object-cover rounded-xl mb-6" }), _jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-3", children: singleBlog.title }), _jsxs("div", { className: "flex flex-wrap items-center gap-3 text-gray-500 text-sm mb-6", children: [_jsxs("span", { className: "flex flex-row items-center justify-center gap-3", children: [" ", _jsx("img", { src: User, alt: "user", className: "w-5 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1" }), " ", "User ID: ", singleBlog.userId] }), _jsxs("span", { className: "flex flex-row items-center justify-center gap-3", children: [_jsx("img", { src: View, alt: "user", className: "w-5 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1" }), " ", singleBlog.views, " views"] }), _jsxs("span", { className: "flex flex-row items-center justify-center gap-3", children: [_jsx("img", { src: PostDate, alt: "user", className: "w-5 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1" }), new Date().toLocaleDateString()] })] }), _jsx("p", { className: "text-gray-700 leading-relaxed text-lg mb-6", children: singleBlog.body }), singleBlog.tags && (_jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: singleBlog.tags.map((tag, i) => (_jsxs("span", { className: "px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm", children: ["#", tag] }, i))) })), _jsx("div", { className: "mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100 flex justify-between items-center" })] }) }));
}
export default SingleBlog;
