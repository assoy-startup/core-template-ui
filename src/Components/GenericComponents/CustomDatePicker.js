import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { withStyles } from "@mui/styles";
import { datePickerStyles } from "../../Styles/commonStyles";
import { useStores } from "../../stores";
import Images from "../../Utils/Images";
import SvgIcon from "../../Utils/SvgIcon";
import DatePicker from "react-mobile-datepicker";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

const monthMap = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useHistory } from "react-router-dom";
import Moment from "moment";
const dateConfigForMonth = {
  month: {
    format: (value) => monthMap[value.getMonth() + 1],
    caption: "Mon",
    step: 1,
  },
  year: {
    format: "YYYY",
    caption: "Year",
    step: 1,
  },
};
const dateConfig = {
  date: {
    format: "DD",
    caption: "Day",
    step: 1,
  },
  month: {
    format: (value) => monthMap[value.getMonth() + 1],
    caption: "Mon",
    step: 1,
  },
  year: {
    format: "YYYY",
    caption: "Year",
    step: 1,
  },
};

const CustomDatePicker = observer((props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateFilter, setDateFilter] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { classes, relativeDate, fullDate } = props;

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDateFilter(Moment(date).format("MMM YYYY"));
    props.setSelectedDate(date);
  };

  useEffect(() => {
    setDateFilter(Moment(props.date).format("MMM YYYY"));
    setSelectedDate(props.date);
  }, [props.date]);

  const onCancel = () => {
    setIsOpen(false);
    props.setSelectedDate(new Date());
    setDateFilter("");
  };

  return (
    <div
      className={`${classes.datePickerCont}`}
      onClick={(e) => (!isOpen ? setIsOpen(true) : undefined)}
      key={isOpen.toString() + dateFilter}
      style={{ position: relativeDate ? "relative" : "initial" }}
    >
      <div className={classes.datePicker}>
        <div className="colFlex flexCenter">
          <SvgIcon src={Images.calendar} />
        </div>
        &nbsp;&nbsp;
        <div className="xxlFont colFlex flexCenter">
          {dateFilter === "" ? "Month  & Year" : dateFilter}
        </div>
        &nbsp;&nbsp;
        <div className="colFlex flexCenter" onClick={(e) => setIsOpen(true)}>
          <SvgIcon src={Images.chevron} />
        </div>
        {isOpen ? (
          <div
            className={
              relativeDate ? classes.datePickerInr : classes.datePickerIn
            }
          >
            {
              <DatePicker
                dateConfig={fullDate ? dateConfig : dateConfigForMonth}
                isPopup={false}
                value={selectedDate}
                confirmText={"Confirm"}
                cancelText="Reset"
                onSelect={(newValue) => {
                  handleDateChange(newValue);
                  setIsOpen(false);
                }}
                onCancel={onCancel}
              />
            }
          </div>
        ) : null}
      </div>
    </div>
  );
});

export default withStyles(datePickerStyles)(CustomDatePicker);
