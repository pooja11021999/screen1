import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { scale } from "react-native-size-matters";

import { CommonHeader } from "../../components";
import { Colors } from "../../helpers";

const Calendar = ({ navigation }) => {
  const rightButtons = [
    {
      Button: () => (
        <MaterialCommunityIcons
          name="sort-variant"
          color={Colors.White}
          size={scale(23)}
          style={{ marginRight: scale(12) }}
        />
      ),
      ButtonPress: () => console.log("sorting clicked"),
    },
    {
      Button: () => (
        <MaterialIcons
          name="filter-list"
          color={Colors.White}
          size={scale(23)}
          style={styles.filterIcon}
        />
      ),
      ButtonPress: () => console.log("filter clicked"),
    },
  ];
  return (
    <View style={styles.container}>
      <CommonHeader
        title="Calendar"
        leftButton="menu"
        navigation={navigation}
        rightButtonContent={rightButtons}
      />
    </View>
  );
};

export default Calendar;

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "red" },
});
