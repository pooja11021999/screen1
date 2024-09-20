import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import { Colors } from "../../../../assets/colors.js";

const Card = ({ item, getDetails }) => {
  return (
    <TouchableOpacity style={styles.cardStyle} onPress={() => getDetails(item)}>
      <View>
        <Text style={styles.cardKeyStyle}>{item.companyName || "-"}</Text>
        <Text style={[styles.cardValueStyle]}>{item.city}</Text>
      </View>
      <View>
        <Text>{item.status}</Text>
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
    paddingHorizontal: scale(12),
    borderBottomColor: Colors.LightGrey,
    borderBottomWidth: scale(1),
  },
  cardKeyStyle: {
    color: Colors.GrayishCyan,
    fontSize: scale(16),
    fontWeight: "500",
  },
  cardValueStyle: {
    fontSize: scale(16),
  },
});
