import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { scale } from "react-native-size-matters";

import CustomField from "../../../../assets/commonElements/customField";
import CustomText from "../../../../assets/commonElements/text";
import { Colors } from "../../../../assets/colors.js";
import { globalStyles } from "../../../../assets/globalStyle/index.js";

const LoginScreen = ({ navigation }) => {
  const [authData, setAuthData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  let Credentials = [
    {
      fieldname: "username",
      value: "gaikwad@gmail.com",
      label: "Username",
      placeholder: "Email",
      required: true,
    },
    {
      fieldname: "password",
      value: "Pooja@123",
      label: "Password",
      placeholder: "Password",
      required: true,
    },
  ];

  const validateCredentials = () => {
    const newErrors = {};

    if (!authData.username || !/^[^@]+@[^@]+\.[^@]+$/.test(authData.username))
      newErrors.username = "Valid email is required";
    if (!authData.password) newErrors.assignedTo = "Assigned To is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSignIn = () => {
    // if (
    //   authData.username == Credentials[0].value &&
    //   authData.password == Credentials[1].value
    // ) {
    navigation.navigate("Company", {});
    // }
  };

  const renderField = (item) => {
    return (
      <CustomField
        item={item}
        formData={Credentials}
        handleChange={handleChange}
        errors={errors}
      />
    );
  };

  const handleChange = (key, value) => {
    setAuthData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <View style={styles.main}>
      <View style={styles.headerContainer}>
        <CustomText text="edge" externalStyle={styles.titleStyle} />
        <CustomText
          text="Version - 5.5"
          externalStyle={styles.versionTxtStyle}
        />
      </View>
      <View style={styles.authContainer}>
        <FlatList
          data={Credentials}
          renderItem={({ item }) => renderField(item)}
          keyExtractor={(item) => item.fieldname}
        />

        <Text style={styles.forgotPswdStyle}>Forgot Password ? </Text>
        <View style={styles.signInBtnContainer}>
          <TouchableOpacity style={styles.signInBtn} onPress={handleSignIn}>
            <Text style={styles.signInBtnTxt}>Sign In</Text>
            <AntDesign
              name="arrowright"
              size={scale(21)}
              color={Colors.DarkBlue}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.DarkBlue,
  },
  titleStyle: globalStyles.textStyle({
    txtColor: Colors.White,
    size: 70,
  }),
  versionTxtStyle: {
    marginTop: scale(16),
    alignSelf: "center",
    ...globalStyles.textStyle({
      txtColor: Colors.White,
      size: 18,
    }),
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  authContainer: {
    backgroundColor: Colors.White,
    paddingHorizontal: scale(20),
    paddingVertical: scale(50),
    borderTopLeftRadius: scale(50),
    borderTopRightRadius: scale(50),
  },
  forgotPswdStyle: {
    fontFamily: "Roboto_400Regular",
    alignSelf: "flex-end",
    color: Colors.DarkBlue,
  },
  signInBtnTxt: {
    fontFamily: "Roboto_400Regular",
    color: Colors.DarkBlue,
    fontSize: scale(17),
    fontWeight: "400",
  },
  signInBtnContainer: {
    padding: scale(20),
    justifyContent: "space-between",
    marginTop: scale(20),
  },
  signInBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
