import { faAdd } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import CommonButton from "../../Button/Button";
import styles from "./styles.module.scss";

const { commonTableHeader, commonTableTitle, commonTableAddButton } = styles;

const TableHeader = ({ rowTitle, tableTitle, addRowURL }) => {
  return (
    <div className={commonTableHeader}>
      <h5 className={commonTableTitle}>{tableTitle}</h5>
      <Link to={addRowURL}>
        <CommonButton
          className={commonTableAddButton}
          icon={faAdd}
          label={`new ${rowTitle}`}
        />
      </Link>
    </div>
  );
};

export default TableHeader;
