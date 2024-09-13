import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { scale, verticalScale } from "react-native-size-matters";

import Index from "./(tabs)";
import First from "./(tabs)/first";
import Second from "./(tabs)/second";
import Third from "./(tabs)/third";

export default function Layout({ company }) {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Basic Information"
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: "#00477f",
        tabBarInactiveTintColor: "#B2BEB5",
        tabBarIndicatorStyle: {
          backgroundColor: "#00477f",
          height: verticalScale(3),
        },
        tabBarLabelStyle: {
          flex: 1,
          maxWidth: scale(250),
        },
        tabBarItemStyle: {
          width: "auto",
        },
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
