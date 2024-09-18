import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { scale } from "react-native-size-matters";

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
      placeholder="Enter Location"
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
      }}
      styles={[styles.googleAutoStyleListView, styles.googleAutoStyleTextInput]}
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
  googleAutoStyleTextInput: {
    fontSize: scale(16),
    height: scale(44),
    borderRadius: scale(5),
    paddingLeft: scale(6),
    marginLeft: scale(0),
    paddingRight: scale(10),
  },
  googleAutoStyleListView: {
    zIndex: scale(999),
    position: "absolute",
    backgroundColor: "#fff",
  },
});
