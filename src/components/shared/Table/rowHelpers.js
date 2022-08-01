import { faTrash } from "@fortawesome/free-solid-svg-icons";
import CommonButton from "../Button/Button";
import moment from "moment";
import styles from "./table.module.scss";
import Checkbox from "../Checkbox/Checkbox";
const { rowButton, checkboxCell } = styles;

const renderColumnType = (column) => {
  const { type } = column;
  switch (type) {
    case "delete":
      column.Cell = ({ cell }) => {
        return (
          <CommonButton
            color="textDanger"
            icon={faTrash}
            className={rowButton}
            onClick={() => column.onClick(cell)}
          />
        );
      };
      break;
    case "date":
      column.Cell = ({ cell }) => {
        const date = cell.row.values[column.accessor];
        const dateFormat = column.dateFormat || "DD/MM/YYYY";
        return <span>{moment(date).format(dateFormat)}</span>;
      };
      break;
    case "checkbox":
      column.Cell = ({ cell }) => {
        const checked = cell.row.values[column.accessor];
        return <Checkbox className={checkboxCell} checked={checked} />;
      };
      break;
    default:
      break;
  }
};

const getDeleteModalOptions = (rowTitle, onClick, row) => {
  return {
    message: `are you sure you want to delete this ${rowTitle} with id ${row.original.id} ?`,
    title: `delete ${rowTitle}`,
    type: "confirmation",
    color: "danger",
    confirmTitle: "delete",
    confirmButtonClick: () => onClick(row.original.id),
  };
};

const addDeleteColumn = ({
  withDeleteRowButton,
  columns,
  showModal,
  rowTitle,
  deleteRowClick,
}) => {
  if (
    withDeleteRowButton &&
    !columns.find((column) => column.type === "delete")
  ) {
    columns.push({
      Header: "actions",
      type: "delete",
      onClick: ({ row }) => {
        showModal(getDeleteModalOptions(rowTitle, deleteRowClick, row));
      },
    });
  }
};

const addColumnTypes = (columns) => {
  columns.forEach((column) => {
    if (column.type) {
      renderColumnType(column);
    }
  });
};

export {
  renderColumnType,
  getDeleteModalOptions,
  addDeleteColumn,
  addColumnTypes,
};
