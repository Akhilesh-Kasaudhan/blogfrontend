import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import Modal from "./Modal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];

  //modal details
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="w-full h-16 bg-[#14213d]  px-4 flex items-center fixed top-0 left-0 right-0">
      <nav className="w-full flex items-center justify-between">
        <a href="/" className="text-3xl font-extrabold text-[#e5e5e5]">
          Blog{" "}
          <span className="text-3xl font-extrabold text-[#fca311]">
            Junction
          </span>
        </a>
        {/* navIyems for lg devices  */}
        <ul className="md:flex items-center justify-center gap-4 text-lg hidden font-bold text-[#e5e5e5]">
          {navItems.map(({ path, link }, i) => {
            return (
              <li key={path}>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                  to={path}
                >
                  {link}
                </NavLink>
              </li>
            );
          })}
        </ul>
        {/* menu-icons */}
        <div className="text-[#e5e5e5] lg:flex gap-4 items-center hidden">
          <a href="/" className="hover:text-[#fca311]">
            <FaFacebook />
          </a>
          <a href="/" className="hover:text-[#fca311]">
            <FaInstagram />
          </a>
          <a href="/" className="hover:text-[#fca311]">
            <FaTwitter />
          </a>
          <button
            onClick={openModal}
            className="bg-[#fca311] text-[#14213d] px-6 py-2 rounded-lg text-lg font-bold
           hover:bg-[#e5e5e5] hover:text-[#fca311] transition-all duration-200 ease-in-out"
          >
            Log in
          </button>
        </div>

        {/*     Modal Component */}
        <Modal isOpen={isModalOpen} onClose={closeModal} />

        {/* mobile menu btn */}
        <div className="md:hidden text-[#fca311] ">
          <button
            onClick={toggleMenu}
            className="w-5 h-5 text-2xl font-bold lg:hidden"
          >
            {isMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </nav>
      {/* menu items only for mobile */}
      <div>
        <ul
          className={`md:hidden flex items-center pt-10 gap-10 flex-col  absolute top-16 right-0 
            duration-500 ease-in transition-opacity
             bg-[#e5e5e5] text-[#fca311]  w-60 h-screen px-4 py-6  ${
               isMenuOpen ? "opacity-100" : "opacity-0 hidden"
             }`}
        >
          {navItems.map(({ path, link }, i) => {
            return (
              <li
                key={path}
                className="hover:scale-110 text-xl font-bold "
                onClick={toggleMenu}
              >
                <NavLink to={path}>{link}</NavLink>
              </li>
            );
          })}
          <button
            onClick={() => {
              openModal();
              toggleMenu();
            }}
            className="bg-[#fca311] text-[#14213d] px-6 py-2 rounded-lg text-lg font-bold
             hover:bg-[#e5e5e5] hover:text-[#fca311] transition-all duration-200 ease-in-out"
          >
            Log in
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
