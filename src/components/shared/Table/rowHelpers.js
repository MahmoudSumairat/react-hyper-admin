import { faTrash } from "@fortawesome/free-solid-svg-icons";
import CommonButton from "../Button/Button";
import styles from "./table.module.scss";
const { rowButton } = styles;

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
    default:
      break;
  }
};

export { renderColumnType };
