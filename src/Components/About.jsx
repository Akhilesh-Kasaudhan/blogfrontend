import React from "react";
import about from "../assets/about.png";

const About = () => {
  return (
    <div className=" bg-[#14213d] h-full w-full">
      <div className=" bg-[#0d3b66] px-4 py-20 ">
        <h1 className="text-2xl lg:text-5xl mt-10 text-center leading-snug font-primary  font-bold text-[#faf0ca] ">
          About Blog <span>Junction</span>
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-center w-full px-4 py-4">
        <div className=" w-full lg:w-1/2">
          <img src={about} alt="" className="mx-auto rounded-lg" />
        </div>
        <div className=" py-4  w-full lg:w-1/2 px-4">
          <h3 className="text-2xl font-bold text-indigo-300">About Us</h3>
          <p className="text-base text-gray-200 text-justify">
            Welcome to BlogJunction, your ultimate destination for discovering,
            creating, and sharing blogs across a wide range of topics and
            interests. At BlogJunction, we believe in the power of words to
            inspire, inform, and connect people from all walks of life. Our
            platform is designed to bring together passionate writers and
            curious readers in a dynamic and engaging community.
          </p>
          <h3 className="text-2xl font-bold text-indigo-300">Our Mission</h3>
          <p className="text-base text-gray-200 text-justify">
            Our mission is to provide a versatile and user-friendly platform
            where bloggers can express their thoughts, ideas, and stories while
            readers explore diverse content that sparks their interest. We aim
            to foster a supportive environment that encourages creativity,
            learning, and meaningful connections.
          </p>
          <h3 className="text-2xl font-bold text-indigo-300"> Join Us Today</h3>
          <p className="text-base text-gray-200 text-justify">
            Whether you’re here to write, read, or connect, BlogJunction is the
            perfect place for you. Sign up today and become a part of a vibrant
            community where your voice matters, and your stories come to life.
            Dive into the world of blogging with BlogJunction and let your
            journey begin!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
