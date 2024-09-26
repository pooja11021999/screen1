import React from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateTimePicker = ({
  handleConfirm,
  handleCancel,
  maximumDate,
  minimumDate,
  isDatePickerVisible,
}) => {
  return (
    <DateTimePickerModal
      isVisible={isDatePickerVisible}
      mode="date"
      onConfirm={handleConfirm}
      onCancel={handleCancel}
      maximumDate={maximumDate}
      minimumDate={minimumDate}
    />
  );
};

export default DateTimePicker;
