import React, { useState } from "react";
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
      } catch (err) {
        console.error(err);
      }
    };
    blogFetch();
  }, []);
  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-25 ">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto mt-30">
        {blog.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div>
              <img src={`https://picsum.photos/seed/${item.id}/1200/500`} />
            </div>

            <div className="flex flex-wrap items-center gap-3 text-gray-500 text-sm mb-1 mt-4">
              <span className="flex flex-row items-center justify-center gap-3">
                {" "}
                <img
                  src={User}
                  alt="user"
                  className="w-5 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1"
                />{" "}
                User ID: {item.userId}
              </span>
              <span className="flex flex-row items-center justify-center gap-3">
                <img
                  src={View}
                  alt="user"
                  className="w-5 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1"
                />{" "}
                {item.views} views
              </span>

              <span className="flex flex-row items-center justify-center gap-3">
                <img
                  src={PostDate}
                  alt="user"
                  className="w-5 cursor-pointer hover:scale-110  transition-all duration-400 icon_shadow rounded-full bg-white p-1"
                />

                {new Date().toLocaleDateString()}
              </span>
            </div>

            <h2 className="text-xl font-bold mb-2 text-gray-800 mt-3 w-full truncate">
              {item.title}
            </h2>
            <p className="text-gray-600 w-full truncate mb-5">{item.body}</p>

            <Link
              to={`/blog/${item.id}`}
              className=" bg-[var(--theme-color)] text-white p-2 rounded-lg text-lg font-medium "
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
