import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="font-primary px-4 py-20 bg-[#0d3b66] h-72 mx-auto  font-bold text-[#faf0ca] ">
      <div className="text-2xl lg:text-5xl mt-10 text-center leading-snug  flex  flex-col ">
        <h1> Welcome to Blog Junction, </h1>
        <p className="text-xl lg:text-2xl mt-4 ">
          Discover, Learn, and Engage with the Latest Insights and Stories
        </p>
      </div>
      <div className="text-center mt-4  ">
        <Link
          to="/blogs"
          className="font-medium  hover:text-[#fca311]  cursor-pointer inline-flex items-center"
        >
          Learn more
          <FaArrowRightLong className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
