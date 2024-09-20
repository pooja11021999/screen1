import RNDateTimePicker from "@react-native-community/datetimepicker";
import React from "react";

const DateTimePicker = ({ date, setDate }) => {
  return (
    <RNDateTimePicker
      mode="date"
      onChange={(value) => setDate(value)}
      value={date}
      maximumDate={maximumDate}
      minimumDate={minimumDate}
    />
  );
};

export default DateTimePicker;
