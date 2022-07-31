import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import CommonButton from "../../../Button/Button";
import styles from "./styles.module.scss";
const { pageButtons, paginationButton } = styles;

const PaginationArrows = ({
  gotoPage,
  canPreviousPage,
  previousPage,
  nextPage,
  canNextPage,
  pageCount,
}) => {
  const buttonsList = [
    {
      icon: faAngleDoubleLeft,
      onClick: () => gotoPage(0),
      disabled: !canPreviousPage,
    },
    {
      icon: faChevronLeft,
      onClick: () => previousPage(),
      disabled: !canPreviousPage,
    },
    {
      icon: faChevronRight,
      onClick: () => nextPage(),
      disabled: !canNextPage,
    },
    {
      icon: faAngleDoubleRight,
      onClick: () => gotoPage(pageCount - 1),
      disabled: !canNextPage,
    },
  ];

  return (
    <div className={pageButtons}>
      {buttonsList.map((button) => {
        return (
          <CommonButton
            {...button}
            className={paginationButton}
            color={"textPrimary"}
          />
        );
      })}
    </div>
  );
};

export default PaginationArrows;
