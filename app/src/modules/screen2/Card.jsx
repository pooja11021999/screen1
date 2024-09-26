import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import { Colors } from "../../../../assets/colors/index.js";
import { globalStyles } from "../../../../assets/globalStyle/index.jsx";

const Card = ({ item, getDetails }) => {
  return (
    <TouchableOpacity style={styles.cardStyle} onPress={() => getDetails(item)}>
      <View>
        <Text style={styles.cardKeyStyle}>{item.companyName || "-"}</Text>
        <Text style={[styles.cardValueStyle]}>{item.city}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.statusStyle}>{item.status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

export const styles = StyleSheet.create({
  cardStyle: {
    flexDirection: "row",
    paddingVertical: verticalScale(10),
    justifyContent: "space-between",
    paddingHorizontal: scale(17),
    borderBottomColor: Colors.LightGrey,
    borderBottomWidth: scale(1),
  },
  cardKeyStyle: {
    fontWeight: "500",
    ...globalStyles.textStyle({ size: 15 }),
  },
  cardValueStyle: globalStyles.textStyle({
    size: 14,
    txtColor: Colors.DarkGray,
  }),
  statusStyle: globalStyles.textStyle({ size: 14 }),
  statusContainer: {
    justifyContent: "center",
  },
});
