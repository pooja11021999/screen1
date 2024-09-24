import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React, { useState, useEffect, useRef } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  Animated,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { scale, verticalScale } from "react-native-size-matters";

import CustomField from "../../../../assets/commonElements/customField";
import CustomText from "../../../../assets/commonElements/text";
import { Colors } from "../../../../assets/colors.js";
import { globalStyles } from "../../../../assets/globalStyle/index.js";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const LoginScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const [authData, setAuthData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [pswdVisibility, setPswdVisibility] = useState(false);

  const edgeTextPosition = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    Animated.timing(edgeTextPosition, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

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
    navigation.navigate("Company", {});
  };

  const renderField = (item) => {
    return (
      <CustomField
        key={item.name}
        item={item}
        formData={Credentials}
        handleChange={handleChange}
        errors={errors}
        labelNotRequired={true}
        customTxtStyle={styles.textFieldTxtStyle}
        renderRightContent={
          item.fieldname == "password" ? renderPswdVisibilityIcon : null
        }
        secureTextEntry={item.fieldname === "password" && !pswdVisibility}
      />
    );
  };

  const renderPswdVisibilityIcon = () => {
    return (
      <TouchableOpacity onPress={() => setPswdVisibility(!pswdVisibility)}>
        {pswdVisibility ? (
          <FontAwesome5 name="eye-slash" size={18} />
        ) : (
          <FontAwesome5 name="eye" size={20} />
        )}
      </TouchableOpacity>
    );
  };

  const handleChange = (key, value) => {
    setAuthData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <View style={[styles.main]}>
      <View style={styles.headerContainer}>
        <Animated.View
          style={{
            width: "100%",
            transform: [{ translateY: edgeTextPosition }],
          }}
        >
          <CustomText text="edge" externalStyle={styles.titleStyle} />
        </Animated.View>

        <CustomText
          text="Version - 5.5"
          externalStyle={styles.versionTxtStyle}
        />
      </View>
      <View style={styles.authContainer}>
        {Credentials.map((item) => renderField(item))}
        <Text style={styles.forgotPswdStyle}>Forgot Password ? </Text>
        <View style={styles.signInBtnContainer}>
          <TouchableOpacity style={styles.signInBtn} onPress={handleSignIn}>
            <Text style={styles.signInBtnTxt}>Sign In</Text>
            <AntDesign
              name="arrowright"
              size={scale(24)}
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
  titleStyle: {
    ...globalStyles.textStyle({
      txtColor: Colors.White,
      size: 80,
    }),
    textAlign: "center",
    marginBottom: 20,
  },
  versionTxtStyle: {
    width: "100%",
    marginTop: scale(16),
    alignSelf: "center",
    textAlign: "center",
    ...globalStyles.textStyle({
      txtColor: Colors.White,
    }),
  },
  headerContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: scale(50),
  },
  authContainer: {
    flex: 2.5,
    backgroundColor: Colors.White,
    paddingHorizontal: scale(20),
    paddingVertical: scale(40),
    borderTopLeftRadius: scale(50),
    borderTopRightRadius: scale(50),
  },
  forgotPswdStyle: {
    fontFamily: "Roboto_400Regular",
    alignSelf: "flex-end",
    color: Colors.DarkBlue,
    marginTop: scale(15),
    width: "100%",
    textAlign: "right",
  },
  signInBtnTxt: {
    fontFamily: "Roboto_400Regular",
    color: Colors.DarkBlue,
    fontSize: scale(20),
    fontWeight: "400",
    textAlign: "left",
  },
  signInBtnContainer: {
    paddingHorizontal: scale(20),
    justifyContent: "space-between",
    marginTop: scale(20),
    width: "100%",
  },
  signInBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: verticalScale(20),
  },
  textFieldTxtStyle: {
    ...globalStyles.textStyle({
      size: 14,
    }),
  },
});
