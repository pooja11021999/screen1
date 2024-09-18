import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

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
            { color: item.key === "assignedTo" ? "orange" : "#303030" },
          ]}
        >
          {item?.value || "-"}
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      data={companyData}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      contentContainerStyle={styles.containerStyle}
      ItemSeparatorComponent={() => <View style={styles.itemSepStyle} />}
    />
  );
};

export default Index;

const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: scale(15),
  },
  cardStyle: {
    paddingVertical: verticalScale(10),
  },
  cardKeyStyle: {
    color: "#B2BEB5",
    fontSize: scale(16),
    fontWeight: "500",
  },
  cardValueStyle: {
    fontSize: scale(16),
  },
  itemSepStyle: {
    backgroundColor: "#D3D3D3",
    height: scale(1.2),
  },
});
