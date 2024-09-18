import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { scale, verticalScale } from "react-native-size-matters";

const GooglePlacesInput = ({ item, handleChange, formData }) => {
  const ref = useRef();
  const [address, setAddress] = useState(null);

  useEffect(() => {
    if (address != null) {
      handleChange(item.fieldname, address);
    }
  }, [address]);

  useEffect(() => {
    setAddress(ref.current.setAddressText(formData.address));
  }, [formData.address]);

  return (
    <GooglePlacesAutocomplete
      ref={ref}
      placeholder={item.placeholder}
      minLength={scale(2)}
      fetchDetails={true}
      textInputHide={false}
      onPress={(data, details = null) => {
        handleChange(item.fieldname, data.description);
        console.log(details);
        console.log("data-", data);
      }}
      onFail={(error) => console.log("error-", error)}
      query={{
        key: "AIzaSyABMwzdIK3U3OaviEpuvUmH5w4bgCaVVVQ",
        language: "en",
      }}
      textInputProps={{
        onChangeText: (text) => {
          setAddress(text);
        },
        placeholderTextColor: "#ccc",
      }}
      styles={styles.googleDefaultStyle}
      debounce={scale(200)}
      renderRightButton={() => (
        <FontAwesome
          name="google"
          size={scale(20)}
          color="#00477f"
          style={styles.valueIconStyle}
        />
      )}
    />
  );
};

export default GooglePlacesInput;

const styles = StyleSheet.create({
  googleDefaultStyle: {
    container: {
      flex: 1,
    },
    textInputContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: scale(2),
      paddingRight: scale(14),
      height: scale(40),
    },
    textInput: {
      backgroundColor: "#FFFFFF",
      height: scale(44),
      borderRadius: scale(5),
      paddingVertical: scale(0),
      paddingHorizontal: scale(0),
      fontSize: scale(17),
      flex: 1,
    },
    poweredContainer: {
      justifyContent: "flex-end",
      alignItems: "center",
      borderBottomRightRadius: scale(5),
      borderBottomLeftRadius: scale(5),
      borderColor: "#c8c7cc",
      borderTopWidth: scale(0.5),
    },
    powered: {},
    listView: {},
    row: {
      backgroundColor: "#FFFFFF",
      padding: scale(13),
      height: scale(44),
      flexDirection: "row",
    },
    separator: {
      height: verticalScale(0.5),
      backgroundColor: "#c8c7cc",
    },
    description: {},
    loader: {
      flexDirection: "row",
      justifyContent: "flex-end",
      height: scale(20),
    },
  },
});
