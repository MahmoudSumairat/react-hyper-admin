import React from "react";
import { usePagination, useTable } from "react-table";
import Box from "../Box/Box";
import styles from "./table.module.scss";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";
import TablePagination from "./Pagination/Pagination";
import { addDeleteColumn, addColumnTypes } from "./rowHelpers";
import { useModal } from "../../../hooks";
import TableHeader from "./TableHeader/TableHeader";

const { commonTable } = styles;

const Table = ({
  columns = [],
  data = [],
  withDeleteRowButton = true,
  rowTitle = "record",
  tableTitle = "rows list",
  addRowURL = "",
  onRowClick = () => {},
  deleteRowClick = () => {},
  onAddButtonClick = () => {},
}) => {
  const { showModal } = useModal();

  addDeleteColumn({
    withDeleteRowButton,
    columns,
    showModal,
    rowTitle,
    deleteRowClick,
  });

  addColumnTypes(columns);

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <>
      <TableHeader
        addRowURL={addRowURL}
        rowTitle={rowTitle}
        tableTitle={tableTitle}
        onAddButtonClick={onAddButtonClick}
      />
      <Box>
        <table className={commonTable} {...getTableProps()}>
          <TableHead headerGroups={headerGroups} />
          <TableBody
            onRowClick={onRowClick}
            prepareRow={prepareRow}
            page={page}
            getTableBodyProps={getTableBodyProps}
          />
        </table>
        <TablePagination
          pageOptions={pageOptions}
          gotoPage={gotoPage}
          pageIndex={pageIndex}
          canPreviousPage={canPreviousPage}
          previousPage={previousPage}
          nextPage={nextPage}
          canNextPage={canNextPage}
          pageCount={canNextPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </Box>
    </>
  );
};

export default Table;
