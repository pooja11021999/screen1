import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Calendar } from "./index";

const Stack = createNativeStackNavigator();

const CalendarStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Calendar"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Calendar" component={Calendar} />
    </Stack.Navigator>
  );
};

export default CalendarStack;
