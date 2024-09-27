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

import { Colors, globalStyles } from "../../helpers/index.js";
import { CalendarStack, CompanyStack } from "../../screens/index.js";
import CustomDrawerContent from "./CustomDrawerContent.jsx";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="CalendarMenu"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          ...globalStyles.textStyle({
            txtColor: Colors.PearlGrey,
            size: 15,
          }),
        },
      }}
    >
      <Drawer.Screen
        name="CalendarMenu"
        component={CalendarStack}
        options={{
          title: "Calendar",
          headerShown: false,
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
        name="CompanyMenu"
        component={CompanyStack}
        options={({ navigation }) => ({
          title: "company",
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

export default DrawerNavigation;

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
});
