import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaClock, FaUser } from "react-icons/fa6";
import SideBar from "./SideBar";

const SingleBlog = () => {
  const data = useLoaderData();
  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];
  return (
    <div className="bg-[#14213d] h-full w-full">
      <div className="bg-[#0d3b66] px-4 py-20 ">
        <h1 className="text-2xl lg:text-5xl mt-10 text-center leading-snug font-primary  font-bold text-[#faf0ca] ">
          Single Blog
        </h1>
      </div>
      {/* blog details */}
      <div className="max-w-7xl mx-auto  py-10 lg:flex lg:gap-12 px-4  ">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image} alt="" className="w-full mx-auto rounded-2xl" />
            <h2 className="text-3xl font-bold mb-4 text-[#faf0ca] cursor-pointer mt-8">
              {title}
            </h2>
            <p className="text-indigo-300 ">
              <FaUser className="inline-flex items-center mr-4" />
              {author}|{published_date}
            </p>
            <p className="text-indigo-300 mt-2 inline-flex items-center gap-4">
              <FaClock />
              {reading_time}
            </p>
            <p className="text-base text-[#faf0ca] mb-6">{content}</p>
            <div className="text-base text-[#faf0ca] mb-6">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat quod numquam ipsum dolores, vel provident voluptates
                suscipit esse. Ratione eum maiores odit dolor repudiandae
                impedit facere fuga dolores temporibus dignissimos?
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                debitis cumque non, eum vitae nostrum minima ipsa ullam
                repellat? Inventore laboriosam ullam repellat? Alias rerum
                velit, perferendis obcaecati officia sint tempora eos quam! Fuga
                porro mollitia aspernatur, corporis alias perspiciatis labore
                est, temporibus doloremque iusto aliquid eveniet fugiat,
                corrupti exercitationem.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                eaque recusandae quas qui, impedit cum obcaecati tenetur atque
                alias a enim sed repellat hic ab? Itaque dignissimos quo cumque
                alias ipsa, rerum, doloremque earum commodi rem fuga provident
                aliquam saepe.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 md:hidden hidden lg:block">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
