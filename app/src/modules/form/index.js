import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { FlatList } from "native-base";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import CustomText from "../../../../assets/commonElements/text";
import AddBtn from "../../components/addBtn";

const Form = ({navigation}) => {
  const data = [
    {
      field: "website",
      label: "Website URL",
      value: "",
      placeholder: "Write Company's Website",
    },
    {
      field: "companyName",
      label: "Company Name",
      value: "",
      placeholder: "Write Company Name",
      required: true,
    },
    {
      field: "assignTo",
      label: "Assign To",
      value: "",
      placeholder: "Select Assign To",
      isSelect: true,
      location: true,
    },
    {
      field: "industryType",
      label: "Industry Type",
      value: "",
      placeholder: "Select Industry Type",
      isSelect: true,
      location: true,
    },
    {
      field: "address",
      label: "Address Line",
      value: "",
      placeholder: "Enter Address or Search",
    },
    {
      field: "city",
      label: "City",
      value: "",
      placeholder: "Enter Address or Search",
    },
    {
      field: "state",
      label: "State",
      value: "",
      placeholder: "Write State",
    },
    {
      field: "country",
      label: "Country",
      value: "",
      placeholder: "Write Country",
    },
  ];

  const renderCard = (item) => {
    
    return (
      <View style={styles.cardStyle}>
        <View style={styles.labelContainerStyle}>
          <View style={styles.leftLabelContent}>
            <CustomText text={item.label} externalStyle={styles.textStyle} />
            <CustomText
              text={item.required && "*"}
              externalStyle={styles.textStyle}
            />
          </View>
          {item.isSelect && (
            <View style={styles.rightLabelContent}>
              <Ionicons name="chevron-down-outline" color="black" size={scale(20)} />
            </View>
          )}
        </View>

        <View styles={styles.valueContainerStyle}>
          <View style={styles.leftValueContent}>
            <TextInput
              placeholder={item.placeholder}
              placeholderTextColor="#ccc"
              style={[styles.textStyle, styles.inputStyle]}
            />
            {item.location && (
              <FontAwesome
                name="google"
                size={scale(20)}
                color="#00477f"
                style={styles.valueIconStyle}
              />
            )}
          </View>
        </View>
        <View style={styles.itemSepComStyle} />
      </View>
    );
  };

  const handleIconPress =() =>{
   return <View></View>
  }
  
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => renderCard(item)}
        keyExtractor={(item) => item.field}
        contentContainerStyle={styles.listContentStyle}
      />
      <AddBtn onIconPress={handleIconPress} renderIcon={()=><Ionicons name="attach" size={scale(27)} color='#fff'/>}/>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  textStyle: {
    color: "black",
    fontSize: scale(16),
  },
  labelContainerStyle: {
    flexDirection: "row",
    marginBottom: scale(8),
    justifyContent: "space-between",
  },
  cardStyle: {
    marginVertical: verticalScale(9),
  },
  leftValueContent: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  valueContainerStyle: {
    alignItems: "center",
  },
  inputStyle: {
    paddingLeft: scale(5),
    marginBottom: scale(10),
  },
  itemSepComStyle: {
    height: scale(1),
    backgroundColor: "#ccc",
  },
  listContentStyle: {
    paddingHorizontal: scale(20),
    paddingVertical: scale(16),
  },
  leftLabelContent: {
    flexDirection: "row",
  },
});
