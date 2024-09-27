import { AntDesign } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";

import { Colors, globalStyles } from "../../helpers/index";
import { CompanyDetailsForm, CompanyDetailsScreen, CompanyList } from "./index";

const Stack = createNativeStackNavigator();

const CompanyStack = () => {
  return (
    <Stack.Navigator initialRouteName="CompanyList">
      <Stack.Screen
        name="CompanyList"
        component={CompanyList}
        options={({ navigation }) => ({
          title: "Company",
          headerStyle: styles.companyListHeader,
          headerTitleStyle: styles.companyListHeaderTitle,
          headerShown: false,
        })}
      />

      <Stack.Screen
        name="CompanyDetailsScreen"
        component={CompanyDetailsScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CompanyDetailsForm"
        component={CompanyDetailsForm}
        options={{
          headerShown: false,
          headerTitleStyle: styles.companyDetailsScreenStyle,
          headerBackImage: () => (
            <AntDesign name="arrowleft" size={scale(21)} color={Colors.White} />
          ),
          title: "",
          headerRight: () => (
            <TouchableOpacity>
              <Text style={styles.rightHeaderOfForm}>Save</Text>
            </TouchableOpacity>
          ),
          headerStyle: styles.companyDetailsHeaderStyle,
        }}
      />

      <Stack.Screen
        name="EditCompanyDetailsForm"
        component={CompanyDetailsForm}
        options={{
          headerShown: false,
          headerTitleStyle: styles.companyDetailsScreenStyle,
          headerBackImage: () => (
            <AntDesign
              name="arrowleft"
              size={scale(21)}
              color={Colors.White}
              style={{ alignSelf: "center" }}
            />
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Text style={styles.rightHeaderOfForm}>Save</Text>
            </TouchableOpacity>
          ),
          title: "",
          headerStyle: styles.companyDetailsHeaderStyle,
        }}
      />
    </Stack.Navigator>
  );
};

export default CompanyStack;

export const styles = StyleSheet.create({
  filterIcon: {
    marginLeft: scale(20),
  },
  rightHeaderOfCompanyList: {
    flexDirection: "row",
    paddingRight: scale(10),
  },
  leftHeaderOfCompanyList: {
    paddingLeft: scale(10),
  },
  companyListHeader: {
    backgroundColor: Colors.DarkBlue,
  },
  companyListHeaderTitle: {
    color: Colors.White,
    fontFamily: "Roboto_400Regular",
    fontSize: scale(17),
  },
  companyDetailsScreenStyle: {
    fontSize: scale(17),
    color: Colors.White,
  },
  companyDetailsHeaderStyle: {
    backgroundColor: Colors.DarkBlue,
  },
  rightHeaderOfForm: {
    marginRight: scale(15),
    alignSelf: "center",
    ...globalStyles.textStyle({ txtColor: Colors.White }),
  },
});
