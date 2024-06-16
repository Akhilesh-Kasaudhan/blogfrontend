import React, { useState } from "react";
import contact from "../assets/contact.png";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ subject, email, name, message });
  };
  return (
    <div className="bg-[#14213d] h-full w-full">
      <div className="bg-[#0d3b66] px-4 py-20 ">
        <h1 className="text-2xl lg:text-5xl mt-10 text-center leading-snug font-primary  font-bold text-[#faf0ca] ">
          Contact Page
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col justify-center items-center gap-8 py-6 px-4 bg-[#f0f8ff]">
        <form
          className="bg-white p-6 rounded shadow-md shadow-black lg:w-1/2 w-full mr-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl text-indigo-300 mb-6">Contact form</h2>
          <input
            className="w-full p-2 mb-2 border border-gray-300 rounded"
            type="text"
            placeholder="Enter subject here"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <div className="flex gap-4">
            <input
              className="w-full p-2 mb-2 border border-gray-300 rounded"
              type="email"
              placeholder="E-mail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full p-2 mb-2 border border-gray-300 rounded"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <textarea
            className="h-[100px] resize-none w-full p-2 mb-2 border border-gray-300 rounded"
            placeholder="Let us know how we can help you!"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <p className="text-base text-[#666]">
            We will process your data in accordance with our{" "}
            <a href="/privacy-policy" className="text-[#007bff] ">
              Privacy Policy
            </a>
            .
          </p>
          <button
            type="submit"
            className="bg-[#fca311] text-[#e5e5e5] px-4 py-2 rounded cursor-pointer hover:bg-[#e5e5e5] hover:text-[#fca311]"
          >
            SEND MESSAGE
          </button>
        </form>
        <div className="md:flex hidden items-center lg:w-1/2 w-full">
          <img src={contact} alt="Resume" className="mx-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
