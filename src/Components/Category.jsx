import React from "react";

const Category = ({ onSelectCategory, activeCategory }) => {
  const categories = [
    "Fintech",
    "Startups",
    "Health",
    "Security",
    "AI",
    "Apps",
    "Tech",
  ];
  return (
    <div className="px-4 mb-8 lg:space-x-16 md:space-x-10 md:overflow-hidden space-x-6 flex lg:flex-wrap md:flex-wrap overflow-x-scroll items-center border-b-2 py-5 ">
      <button
        className={` ${activeCategory ? "text-indigo-300" : "active-button"}`}
        onClick={() => onSelectCategory(null)}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          onClick={() => onSelectCategory(category)}
          className={`mr-2 space-x-16 ${
            activeCategory === category ? "active-button" : "text-indigo-300"
          }`}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Category;
