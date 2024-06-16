import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const SideBar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);
  useEffect(() => {
    fetch("https://blogbackend-bwxv.onrender.com/blogs")
      .then((response) => response.json())
      .then((data) => setPopularBlogs(data.slice(0, 15)));
  }, []);
  return (
    <div>
      {/* Latest blogs */}
      <div>
        <h3 className="text-2xl text-left font-semibold   text-[#faf0ca]">
          Latest Blogs
        </h3>
        <div>
          {popularBlogs.slice(0, 5).map((blog) => (
            <div
              className="border-b-2 border-indigo-400 border-spacing-2 my-4 px-2"
              key={blog.id}
            >
              <h4 className="text-gray-400 text-justify font-semibold">
                {blog.title}
              </h4>
              <Link
                to="/"
                className="font-medium inline-flex items-center py-1 text-indigo-300 hover:text-orange-300"
              >
                Read now <FaArrowRightLong className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Popular Blogs */}
      <div>
        <h3 className="text-2xl text-left font-semibold mt-12  text-[#faf0ca]">
          Popular Blogs
        </h3>
        <div>
          {popularBlogs.slice(6, 10).map((blog) => (
            <div
              className="border-b-2 border-indigo-400 border-spacing-2 my-4 px-2"
              key={blog.id}
            >
              <h4 className="text-gray-400 text-justify font-semibold">
                {blog.title}
              </h4>
              <Link
                to="/"
                className="font-medium inline-flex items-center py-1 text-indigo-300 hover:text-orange-300"
              >
                Read now <FaArrowRightLong className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
