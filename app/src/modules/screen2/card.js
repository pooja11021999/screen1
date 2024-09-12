import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Card = ({ item, getDetails }) => {
  
  return (
    <TouchableOpacity style={styles.cardStyle} onPress={() => getDetails(item)}>
      <View>
        <Text style={styles.cardKeyStyle}>{item.name}</Text>
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
    paddingVertical: 10,
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  cardKeyStyle: {
    color: "#B2BEB5",
    fontSize: 16,
    fontWeight: "500",
  },
  cardValueStyle: {
    fontSize: 16,
  },
});
