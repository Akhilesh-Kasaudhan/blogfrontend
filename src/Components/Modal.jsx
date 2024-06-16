import React from "react";

const Modal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-container">
        <div className="bg-[#0d4c82] text-center p-5 h-96 lg:w-[500px] rounded-lg shadow-md shadow-indigo-400 ">
          {/* modal content */}
          <h2 className="text-xl text-indigo-300 font-semibold mb-4 mt-6 uppercase">
            Please Login Here
          </h2>
          <form className="px-4">
            {/* email */}
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full rounded-md  bg-[#ebf4f1] border-indigo-300 
                 py-3 px-6 text-base font-bold text-[#6B7280]  focus:border-indigo-700 focus:shadow-md shadow-black outline-none "
              />
            </div>
            {/* password */}
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full mt-4 rounded-md border bg-[#ebf4f1] border-indigo-300 
                 py-3 px-6 text-base font-bold text-[#6B7280] outline-none focus:border-indigo-700 focus:shadow-md shadow-black"
              />
            </div>
            <div>
              <button className="bg-[#fca311] text-[#e5e5e5] px-8 py-2 rounded cursor-pointer hover:bg-[#e5e5e5] hover:text-[#fca311] mt-4 ">
                Login
              </button>
            </div>
          </form>
          {/* modal close button */}
          <button
            onClick={onClose}
            className="bg-[#e5e5e5] text-[#fca311] px-8 py-2 rounded cursor-pointer hover:bg-[#fca311] hover:text-[#e5e5e5] mt-4"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
