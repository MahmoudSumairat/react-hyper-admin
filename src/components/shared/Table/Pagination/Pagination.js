import React from "react";
import Select from "../../Select/Select";
import PaginationPages from "./PaginationPages/PaginationPages";
import PaginationArrows from "./PagintaionArrows/PaginationArrows";
import styles from "./styles.module.scss";
const { tablePagination, numOfRows } = styles;

const numOfRowsOptions = [
  { displayName: 10, id: 1 },
  { displayName: 20, id: 2 },
  { displayName: 30, id: 3 },
  { displayName: 40, id: 4 },
];

const getSelectedNumOfRowsOption = (displayName, numOfRowsOptions) => {
  return numOfRowsOptions.find((option) => option.displayName === displayName)
    .id;
};

const TablePagination = ({
  pageOptions,
  gotoPage,
  pageIndex,
  canPreviousPage,
  previousPage,
  nextPage,
  canNextPage,
  pageCount,
  pageSize,
  setPageSize,
}) => {
  return (
    <div className={tablePagination}>
      <PaginationPages
        pageOptions={pageOptions}
        pageIndex={pageIndex}
        gotoPage={gotoPage}
      />

      <div className={numOfRows}>
        <PaginationArrows
          gotoPage={gotoPage}
          canPreviousPage={canPreviousPage}
          previousPage={previousPage}
          nextPage={nextPage}
          canNextPage={canNextPage}
          pageCount={pageCount}
        />
        <Select
          value={getSelectedNumOfRowsOption(pageSize, numOfRowsOptions)}
          onChange={(e) => {
            console.log(e);
            setPageSize(Number(e.target.value.displayName));
          }}
          items={numOfRowsOptions}
        />
      </div>
    </div>
  );
};

export default TablePagination;
