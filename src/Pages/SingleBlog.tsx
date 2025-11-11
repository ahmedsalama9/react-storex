import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import User from "../assets/user.svg";
import { Link } from "react-router-dom";
import View from "../assets/view.svg";
import PostDate from "../assets/dates.svg"
function SingleBlog() {
  const { id } = useParams();
  const [singleBlog, setSingleBlog] = useState(null);

  useEffect(() => {
    const singleBlogFn = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);
        const data = await response.json();

        setSingleBlog(data);
      } catch (err) {
        console.error(err);
      }
    };
    singleBlogFn();
  }, [id]);
  if (!singleBlog) return <div>single blog is ready</div>;

  return (
    <div>
      <div className="w-[80%] mx-10 p-6 mt-20">
        {/* Go Back Button */}
        <Link
          to="/"
          className="inline-block mb-4 text-sm text-blue-600 hover:underline"
        >
          ← Back to Blogs
        </Link>

        {/* Banner Image */}
        <img
          src={`https://picsum.photos/900/750?random=${singleBlog.id}`}
          alt={singleBlog.title}
          className="w-full h-[660px] object-cover rounded-xl mb-6"
        />

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          {singleBlog.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-3 text-gray-500 text-sm mb-6">
          <span className="flex flex-row items-center justify-center gap-3">
            {" "}
            <img
              src={User}
              alt="user"
              className="w-5 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1"
            />{" "}
            User ID: {singleBlog.userId}
          </span>
          <span className="flex flex-row items-center justify-center gap-3">
            <img
              src={View}
              alt="user"
              className="w-5 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1"
            /> {singleBlog.views} views</span>
    
    <span className="flex flex-row items-center justify-center gap-3">
          <img
              src={PostDate}
              alt="user"
              className="w-5 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1"
            /> 

             {new Date().toLocaleDateString()}</span>
        </div>

        {/* Body */}
        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          {singleBlog.body}
        </p>

        {/* Tags */}
        {singleBlog.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {singleBlog.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Reactions Summary Card */}
        <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100 flex justify-between items-center">
  
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
