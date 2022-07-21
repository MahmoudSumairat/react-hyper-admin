import React from "react";
import styles from "./styles.module.scss";
const { pageNumbersContainer, pageNumber, activePage } = styles;

const PaginationPages = ({ pageOptions, pageIndex, gotoPage }) => {
  return (
    <div className={pageNumbersContainer}>
      {pageOptions.map((item, index) => {
        return (
          <span
            key={index}
            onClick={() => gotoPage(index)}
            className={`${pageNumber} ${pageIndex === index ? activePage : ""}`}
          >
            {index + 1}
          </span>
        );
      })}
    </div>
  );
};

export default PaginationPages;
