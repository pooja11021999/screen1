import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { scale } from "react-native-size-matters";

import { Colors } from "../../../assets/colors/index.js";
import { globalStyles } from "../../../assets/globalStyle/index.jsx";
import Calendar from "../modules/calendar/index.jsx";
import CompanyList from "../modules/screen2/index";
import CustomDrawerContent from "./CustomDrawerContent.jsx";

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Company"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerLabelStyle: {
          ...globalStyles.textStyle({
            txtColor: Colors.PearlGrey,
            size: 15,
          }),
        },
      }}
    >
      <Drawer.Screen
        name="Calendar"
        component={Calendar}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="calendar"
              size={20}
              color={Colors.PearlGrey}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Company"
        component={CompanyList}
        options={({ navigation }) => ({
          headerShown: true,
          headerStyle: styles.companyListHeader,
          headerTitleStyle: styles.companyListHeaderTitle,
          drawerIcon: () => (
            <Ionicons name="bag" size={20} color={Colors.PearlGrey} />
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={styles.leftHeaderOfCompanyList}
              onPress={() => navigation.toggleDrawer()}
            >
              <Entypo
                name="menu"
                size={scale(20)}
                color={Colors.White}
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          ),
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
        })}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawer;

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
