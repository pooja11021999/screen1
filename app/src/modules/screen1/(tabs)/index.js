import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import { Colors } from "../../../../../assets/colors.js";
import { globalStyles } from "../../../../../assets/globalStyle";

const Index = ({ company }) => {
  const objectToArray = (obj) => {
    return Object.entries(obj).map(([key, value]) => ({ key, value }));
  };

  const companyData = objectToArray(company);

  const getLabelFromKey = (key) => {
    return key
      .split("")
      .map((char, index) => {
        if (index === 0) {
          return char.toUpperCase();
        } else if (char === char.toUpperCase()) {
          return " " + char;
        }
        return char;
      })
      .join("");
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.cardStyle}>
        <Text style={styles.cardKeyStyle}>{getLabelFromKey(item.key)}</Text>
        <Text
          style={[
            styles.cardValueStyle,
            {
              color:
                item.key === "assignedTo" ? Colors.Orange : Colors.DarkGray,
            },
          ]}
        >
          {item?.value || "-"}
        </Text>
      </View>
    );
  };

  return (
    <View style={globalStyles.containerStyle}>
      <FlatList
        data={companyData}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.containerStyle}
        ItemSeparatorComponent={() => <View style={styles.itemSepStyle} />}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: scale(15),
    backgroundColor: Colors.White,
  },
  cardStyle: {
    paddingVertical: verticalScale(10),
  },
  cardKeyStyle: globalStyles.textStyle({
    txtColor: Colors.LightGrey,
    size: 12,
  }),
  cardValueStyle: globalStyles.textStyle({
    txtColor: Colors.Gray,
    size: 15,
  }),
  itemSepStyle: {
    backgroundColor: Colors.VeryLightGray,
    height: scale(0.8),
  },
});
