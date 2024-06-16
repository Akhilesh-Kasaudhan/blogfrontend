import React from "react";
import Banner from "./Banner";
import BlogPage from "./BlogPage";

const Home = () => {
  return (
    <div className="bg-[#14213d] h-full w-full ">
      <Banner />
      <div className="px-4 py-2 max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </div>
  );
};

export default Home;
