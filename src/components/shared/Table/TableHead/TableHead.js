import React from "react";
import styles from "./styles.module.scss";

const { tableHeader, tableCell } = styles;

const TableHead = ({ headerGroups }) => {
  return (
    <thead className={tableHeader}>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th className={tableCell} {...column.getHeaderProps()}>
              {column.render("Header")}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default TableHead;
