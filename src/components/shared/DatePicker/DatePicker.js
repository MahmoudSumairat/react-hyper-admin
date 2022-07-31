import React from "react";
import DatePicker from "react-datepicker";
import { v4 as uuidv4 } from "uuid";
import styles from "./styles.module.scss";
import formStyles from "../../../styles/form.module.scss";
import Animate from "../Animate/Animate";
const {
  datePickerContainer,
  datePickerInput,
  datePickerCalendar,
  datePickerMonth,
} = styles;
const { inputLabel, fieldError, hasError } = formStyles;

const CommonDatePicker = ({
  value,
  label = "datepicker",
  onChange = () => {},
  id = uuidv4(),
  width,
  className = "",
  error,
  onBlur = () => {},
}) => {
  return (
    <div
      className={`${datePickerContainer} ${width} ${className} ${
        !!error ? hasError : ""
      }`}
    >
      <label className={inputLabel} htmlFor={id}>
        {label}
      </label>
      <DatePicker
        id={id}
        onChange={(value) => {
          onChange({ target: { value } });
          onBlur({ target: { value } });
        }}
        selected={value || new Date()}
        monthClassName={datePickerMonth}
        calendarClassName={datePickerCalendar}
        className={datePickerInput}
        onBlur={onBlur}
      />
      <Animate type={"fadeUpDown"} showsIn={!!error}>
        <span className={fieldError}>{error}</span>
      </Animate>
    </div>
  );
};

export default CommonDatePicker;
