import React from "react";

const Pagination = (props) => {
  const { currentPage, totalPages, changeCurrentPage } = props;
  const pageNumbers = Array.from(Array(totalPages), (x, index) => index + 1);
  const renderPageNumbers = pageNumbers.map((value) => {
    const setClassName = `${currentPage === value ? "active" : ""}`;
    if (
      value === 1 ||
      value === totalPages ||
      (value >= currentPage - 1 && value <= currentPage + 2)
    ) {
      return (
        <li
          key={value}
          className={`page-link ${setClassName}`}
                    onClick={() => changeCurrentPage(value)}
        >
          {value}
        </li>
      );
    }
  });
  return (
    <nav aria-label="Page navigation example ">
      <ul className="pagination justify-content-center">
        <li
          className="page-item"
          onClick={() => changeCurrentPage(currentPage - 1)}
        >
          <a className="page-link" href="#!" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        {renderPageNumbers}
        <li
          className="page-item"
          onClick={() => changeCurrentPage(currentPage + 1)}
        >
          <a className="page-link" href="#!" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
