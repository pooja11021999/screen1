import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import { Colors } from "../../../../assets/colors.js";
import Index from "./(tabs)";
import First from "./(tabs)/first";
import Second from "./(tabs)/second";
import Third from "./(tabs)/third";

export default function Layout({ company, isMenuOpened }) {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Basic Information"
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: Colors.DarkBlue,
        tabBarInactiveTintColor: Colors.GrayishCyan,
        tabBarIndicatorStyle: styles.tabBarIndicator,
        tabBarLabelStyle: { textTransform: "camelcase", ...styles.tabBarLabel },
        tabBarItemStyle: styles.tabBarItem,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen name="Basic Information">
        {() => <Index company={company} />}
      </Tab.Screen>
      <Tab.Screen name="Owner Card" component={First} />
      <Tab.Screen name="Social Information" component={Second} />
      <Tab.Screen name="Other" component={Third} />
    </Tab.Navigator>
  );
}

export const styles = StyleSheet.create({
  tabBarLabel: {
    flex: 1,
    minWidth: scale(100),
    fontWeight: "600",
    fontSize: scale(15),
  },
  tabBarIndicator: {
    backgroundColor: Colors.DarkBlue,
    height: verticalScale(3.5),
  },
  tabBarItem: {
    width: "auto",
  },
  tabBar: {
    elevation: 0,
    borderBottomWidth: scale(0.8),
    borderBottomColor: Colors.LightGrey,
  },
});
