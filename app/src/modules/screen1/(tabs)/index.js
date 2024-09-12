import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const Index = () => {
  const studentData = [
    { AssignedTo: "Narendra Kale" },
    { Website: "Website url is not specified." },
    { Address: "Address not specified." },
    { City: "City not specified." },
    { State: "State not specified." },
    { Country: "Country not specified" },
    { PIN: "PIN Code not specified." },
    { CompanyType: "Company Type not specified." },
  ];

  const renderItem = (ele) => {
    const [key, value] = Object.entries(ele.item)[0];
    return (
      <View style={styles.cardStyle}>
        <Text style={styles.cardKeyStyle}>{key}</Text>
        <Text
          style={[
            styles.cardValueStyle,
            { color: key == "AssignedTo" ? "orange" : "#303030" },
          ]}
        >
          {value}
        </Text>
      </View>
    );
  };
  
  return (
    <View>
      <FlatList
        data={studentData}
        renderItem={renderItem}
        keyExtractor={(ele, index) => index}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        ItemSeparatorComponent={<View style={styles.itemSepStyle}></View>}
      />
    </View>
  );
};

export default Index;
const styles = StyleSheet.create({
  cardStyle: {
    paddingVertical: 10,
  },
  cardKeyStyle: {
    color: "#B2BEB5",
    fontSize: 16,
    fontWeight: "500",
  },
  cardValueStyle: {
    fontSize: 16,
  },
  itemSepStyle: {
    backgroundColor: "#D3D3D3",
    height: 1.2,
  },
});
