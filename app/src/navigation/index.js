import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { scale } from "react-native-size-matters";

import { Colors } from "../../../assets/colors.js";
import { globalStyles } from "../../../assets/globalStyle/index.js";
import companyDetailsForm from "../modules/form/companyDetailsForm";
import LoginScreen from "../modules/loginScreen";
import DetailsScreen from "../modules/screen1";
import CompanyList from "../modules/screen2";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Company"
          component={CompanyList}
          options={{
            title: "Company",
            headerStyle: styles.companyListHeader,
            headerTitleStyle: styles.companyListHeaderTitle,
            headerLeft: () => (
              <Entypo name="menu" size={scale(20)} color={Colors.White} />
            ),
            headerLeftContainerStyle: styles.leftHeaderOfCompanyList,
            headerRight: () => (
              <View style={styles.rightHeaderOfCompanyList}>
                <MaterialCommunityIcons
                  name="sort-variant"
                  color={Colors.White}
                  size={scale(23)}
                />
                <MaterialIcons
                  name="filter-list"
                  color={Colors.White}
                  size={scale(23)}
                  style={styles.filterIcon}
                />
              </View>
            ),
          }}
        />

        <Stack.Screen
          name="DetailScreen"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="CompanyDetailsScreen"
          component={companyDetailsForm}
          options={{
            headerShown: false,
            headerTitleStyle: styles.companyDetailsScreenStyle,
            headerBackImage: () => (
              <AntDesign
                name="arrowleft"
                size={scale(21)}
                color={Colors.White}
              />
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
          name="EditCompanyDetailsScreen"
          component={companyDetailsForm}
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
    </NavigationContainer>
  );
};

export default StackNavigation;

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
  leftHeaderOfForm: {
    marginLeft: scale(15),
  },
});
