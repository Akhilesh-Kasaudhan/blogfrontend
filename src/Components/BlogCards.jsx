import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";

const BlogCards = ({ blogs, currentPage, selectedCategory, pageSize }) => {
  console.log(blogs);
  const filteredBlogs = blogs
    .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);
  //   console.log(
  //     filteredBlogs.map((blog) => {
  //       blog.id;
  //     })
  //   );
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
      {filteredBlogs.map((blog, i) => {
        return (
          <Link
            to={`/blogs/${blog.id}/`}
            key={i}
            className="text-[#faf0ca] p-5 shadow-lg shadow-black hover:shadow-indigo-500/40 rounded bg-[#152341] cursor-pointer"
          >
            <div>
              <img src={blog.image} alt="" className="w-full" />
            </div>
            <h3 className="mt-4 mb-2 font-bold  hover:text-blue-700">
              {blog.title}
            </h3>
            <p className="mb-2 ">
              <FaUser className="text-gray-600 inline-flex mr-2 items-center" />
              {blog.author}
            </p>
            <p className="text-sm text-gray-400 ">
              Published:{blog.published_date}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogCards;
