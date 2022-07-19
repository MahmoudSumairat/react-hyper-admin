import React, { useRef } from "react";
import DatePicker from "react-datepicker";
import styles from "./styles.module.scss";
import { v4 as uuidv4 } from "uuid";
import FadeUpDown from "../../../animations/FadeUpDown/FadeUpDown";
const {
  datePickerContainer,
  datePickerInput,
  datePickerCalendar,
  datePickerMonth,
  datePickerLabel,
  dateFieldError,
} = styles;

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
  const nodeRef = useRef(null);

  return (
    <div className={`${datePickerContainer} ${width} ${className} `}>
      <label className={datePickerLabel} htmlFor={id}>
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
      <FadeUpDown nodeRef={nodeRef} showsIn={!!error}>
        <span ref={nodeRef} className={dateFieldError}>
          {error}
        </span>
      </FadeUpDown>
    </div>
  );
};

export default CommonDatePicker;
