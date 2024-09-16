import DateTimePickerModal from "react-native-modal-datetime-picker";

import React from "react";

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
