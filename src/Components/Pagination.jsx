import React from "react";

const Pagination = ({ onPageChange, currentPage, blogs, pageSize }) => {
  const totalPages = Math.ceil(blogs.length / pageSize);
  //   console.log(totalPages);
  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          className={pageNumber === currentPage ? "activePagination" : ""}
          key={pageNumber}
        >
          <a href="#" onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </a>
        </li>
      )
    );
  };
  console.log(renderPaginationLinks());
  return (
    <ul className="pagination my-8 flex-wrap gap-4">
      <li className="hover:text-yellow-100 text-indigo-300">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage == 1}
        >
          Previous
        </button>
      </li>
      <div className="flex">{renderPaginationLinks()}</div>
      <li className="text-indigo-300 hover:text-yellow-100">
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
