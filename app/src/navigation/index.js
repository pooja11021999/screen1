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

import CompanyDetailsForm from "../modules/companyDetailsForm";
import Form from "../modules/form";
import DetailsScreen from "../modules/screen1";
import CompanyList from "../modules/screen2";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Company">
        <Stack.Screen
          name="Company"
          component={CompanyList}
          options={{
            headerStyle: styles.companyListHeader,
            headerTitleStyle: styles.companyListHeaderTitle,
            headerLeft: () => (
              <Entypo name="menu" size={scale(20)} color={"white"} />
            ),
            headerLeftContainerStyle: styles.leftHeaderOfCompanyList,
            headerRight: () => (
              <View style={styles.rightHeaderOfCompanyList}>
                <MaterialCommunityIcons
                  name="sort-variant"
                  color="#fff"
                  size={scale(23)}
                />
                <MaterialIcons
                  name="filter-list"
                  color="#fff"
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
          component={CompanyDetailsForm}
          options={{
            headerShown: false,
            headerTitleStyle: styles.companyDetailsScreenStyle,
            headerBackImage: () => (
              <AntDesign name="arrowleft" size={scale(21)} color="#fff" />
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
          component={CompanyDetailsForm}
          options={{
            headerShown: false,
            headerTitleStyle: styles.companyDetailsScreenStyle,
            headerBackImage: () => (
              <AntDesign name="arrowleft" size={scale(21)} color="#fff" />
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

        <Stack.Screen
          name="Form"
          component={Form}
          options={{
            headerShown: true,
            headerTitleStyle: styles.companyDetailsScreenStyle,
            headerBackImage: () => (
              <AntDesign
                name="arrowleft"
                size={scale(21)}
                color="#fff"
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
    backgroundColor: "#00477f",
  },
  companyListHeaderTitle: {
    color: "#fff",
  },
  companyDetailsScreenStyle: {
    fontSize: scale(17),
    color: "white",
  },
  companyDetailsHeaderStyle: {
    backgroundColor: "#00477f",
  },
  rightHeaderOfForm: {
    marginRight: scale(15),
    fontSize: scale(16),
    color: "#fff",
  },
  leftHeaderOfForm: {
    marginLeft: scale(15),
  },
});
