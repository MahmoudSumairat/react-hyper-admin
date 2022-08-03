import React from "react";
import { useNavigate } from "react-router";
import styles from "./styles.module.scss";

const { tableCell, oddCell, tableRow } = styles;

const TableBody = ({ prepareRow, page, getTableBodyProps, onRowClick }) => {
  const navigate = useNavigate();
  return (
    <tbody {...getTableBodyProps()}>
      {page.map((row) => {
        prepareRow(row);
        return (
          <tr
            className={tableRow}
            onClick={() => {
              onRowClick ? onRowClick(row) : navigate(`${row.original.id}`);
            }}
            {...row.getRowProps()}
          >
            {row.cells.map((cell) => {
              return (
                <td
                  className={`${tableCell} ${
                    row.index % 2 === 1 ? oddCell : ""
                  }`}
                  {...cell.getCellProps()}
                >
                  {cell.render("Cell")}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
