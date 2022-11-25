import React from "react";
import DatePicker from "react-datepicker";
import styles from "./DataInput.module.css";
import { Box, InputAdornment, TextField } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";

export type PropsWithClassName<P> = P & { className?: string };

export type DateInputProps = PropsWithClassName<{
  value?: Date | any;
  min?: Date | any;
  max?: Date;
  onChange?: (event: any) => void;
  placeholder?: string;
  isInvalid?: boolean;
  disabled?: boolean;
  isClearable?: boolean;
  dateFormat?: string;
  readOnly?: boolean;
  error?: boolean;
  helperText?: any
}>;

const DataInput = (
  {
    value,
    min,
    max,
    placeholder,
    isInvalid,
    onChange,
    className,
    disabled,
    readOnly,
    isClearable,
    dateFormat,
    error,
    helperText
  }: DateInputProps,
) => {

  const changeHandler = (date: Date) => {
    if (onChange) onChange(date);
  };

  const ExampleInput = (props: any) => {
    return (
      <TextField
        {...props}
        // sx={{ width: "260px" }}
        error={error}
        helperText={helperText}
        fullWidth
        InputProps={{
          endAdornment:
            <InputAdornment position="end">
              <DateRangeIcon style={{ color: "#B6B6B6" }} />
            </InputAdornment>,
        }}
      />
    );
  };


  return (
    <Box className={styles.date} position={"relative"}>
      <DatePicker
        calendarClassName={styles.calender}
        showPopperArrow={false}
        className={styles.input}
        selected={value ? new Date(value) : undefined}
        onChange={changeHandler}
        placeholderText={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        minDate={min}
        maxDate={max}
        isClearable={isClearable}
        dateFormat={dateFormat}
        disabledKeyboardNavigation
        customInput={<ExampleInput />}
      />

    </Box>
  );
};

export default DataInput;