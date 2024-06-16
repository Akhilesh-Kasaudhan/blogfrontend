import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-[#0d3b66] py-2">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:ps-24 lg:px-4">
        <div className="grid mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="text-[#faf0ca] tracking-wide font-medium ">
                Category
              </p>
              <ul className="space-y-2 mt-2">
                <li>
                  <a
                    href="/"
                    className="text-indigo-300 transition-colors duration-100 hover:text-orange-300"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-indigo-300 transition-colors duration-100 hover:text-orange-300"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-indigo-300 transition-colors duration-100 hover:text-orange-300"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-indigo-300 transition-colors duration-100 hover:text-orange-300"
                  >
                    References
                  </a>
                </li>
              </ul>
            </div>
            {/* category-2 */}
            <div>
              <p className="text-[#faf0ca] tracking-wide font-medium ">
                Apples
              </p>
              <ul className="space-y-2 mt-2">
                <li>
                  <a
                    href="/"
                    className="text-indigo-300 transition-colors duration-100 hover:text-orange-300"
                  >
                    Web
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-indigo-300 transition-colors duration-100 hover:text-orange-300"
                  >
                    eCommerce
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-indigo-300 transition-colors duration-100 hover:text-orange-300"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-indigo-300 transition-colors duration-100 hover:text-orange-300"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-indigo-300 transition-colors duration-100 hover:text-orange-300"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            {/* category-3 */}
            <div>
              <p className="text-[#faf0ca] tracking-wide font-medium ">
                Cherry
              </p>
              <ul className="space-y-2 mt-2">
                <li>
                  <a
                    href="/"
                    className="text-indigo-300 transition-colors duration-100 hover:text-orange-300"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-indigo-300 transition-colors duration-100 hover:text-orange-300"
                  >
                    Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-indigo-300 transition-colors duration-100 hover:text-orange-300"
                  >
                    Nonprofit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-indigo-300 transition-colors duration-100 hover:text-orange-300"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-indigo-300 transition-colors duration-100 hover:text-orange-300"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            {/* category-4 */}
            <div>
              <p className="text-[#faf0ca] tracking-wide font-medium ">
                Business
              </p>
              <ul className="space-y-2 mt-2">
                <li>
                  <a
                    href="/"
                    className="text-indigo-300 transition-colors duration-100 hover:text-orange-300"
                  >
                    Infoprenuer
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-indigo-300 transition-colors duration-100 hover:text-orange-300"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-indigo-300 transition-colors duration-100 hover:text-orange-300"
                  >
                    Wiki
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-indigo-300 transition-colors duration-100 hover:text-orange-300"
                  >
                    Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Subscription */}
          <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
            <p className="text-[#faf0ca] tracking-wide font-medium ">
              Subscribe for update
            </p>
            <form className="mt-4 flex flex-col md:flex-row">
              <input
                type="email"
                name="email"
                id="email"
                className="flex-grow w-full h-10 px-4 mb-3 transition duration-200
                 bg-white border-2 border-gray-300 rounded shadow-sm 
                 aspect-auto md:mr-2 md:mb-0 focus:border-indigo-300
                  focus:outline-none "
                placeholder="Email"
              />
              <button
                type="submit"
                className="inline-flex  items-center justify-center h-10 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md hover:bg-[#fca311] bg-[#faf0ca] focus:outline-none border"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-base text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae,
              nemo.
            </p>
          </div>
        </div>

        <div className="flex  flex-col border-t border-indigo-400 sm:flex-row md:mr-12  lg:mr-0 justify-between pt-4 pb-10">
          <p className="text-indigo-100">
            © Copyright 2024 | All right reserved.
          </p>
          <div className=" flex gap-4 items-center mt-4 space-x-4 sm:mt-0 ">
            <a
              href=""
              className="text-indigo-100 transition-all duration-300 hover:text-orange-300 "
            >
              <FaFacebook className="h-6 w-6" />
            </a>
            <a
              href=""
              className="text-indigo-100 transition-all duration-300 hover:text-orange-300 "
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href=""
              className="text-indigo-100 transition-all duration-300 hover:text-orange-300 "
            >
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
