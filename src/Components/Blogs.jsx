import React from "react";
import BlogPage from "./BlogPage";

const Blogs = () => {
  return (
    <div className="bg-[#14213d] h-full w-full">
      <div className="bg-[#0d3b66] px-4 py-20 ">
        <h1 className="text-2xl lg:text-5xl mt-10 text-center leading-snug font-primary  font-bold text-[#faf0ca] ">
          Blog Page
        </h1>
      </div>
      <div className="max-w-7xl mx-auto py-2 md:px-4 px-4">
        <BlogPage />
      </div>
    </div>
  );
};

export default Blogs;
