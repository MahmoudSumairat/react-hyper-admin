import React from "react";
import DatePicker from "react-datepicker";
import styles from "./styles.module.scss";
import { v4 as uuidv4 } from "uuid";
const {
  datePickerContainer,
  datePickerInput,
  datePickerCalendar,
  datePickerMonth,
  datePickerLabel,
} = styles;

const CommonDatePicker = ({
  value,
  label = "datepicker",
  onChange = () => {},
  id = uuidv4(),
  width,
  className = "",
}) => {
  return (
    <div className={`${datePickerContainer} ${width} ${className} `}>
      <label className={datePickerLabel} htmlFor={id}>
        {label}
      </label>
      <DatePicker
        id={id}
        onChange={onChange}
        selected={value || new Date()}
        monthClassName={datePickerMonth}
        calendarClassName={datePickerCalendar}
        className={datePickerInput}
      />
    </div>
  );
};

export default CommonDatePicker;
