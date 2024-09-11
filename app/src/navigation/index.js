import { Entypo, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { scale } from "react-native-size-matters";
import CompanyList from '../modules/screen2';
import DetailsScreen from '../modules/screen1';


const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Company">
        <Stack.Screen name="Company" component={CompanyList} options={{
          headerStyle:{backgroundColor:'#00477f',padding:10},
          headerTitleStyle:{color:'white'},
          headerLeft:() => <Entypo name="menu" size={scale(20)} color={'white'}/>,
          headerLeftContainerStyle:{paddingLeft:10},
          headerRight: () => <View style={{flexDirection:'row', paddingRight: 10}}>
            <MaterialCommunityIcons name='sort-variant' color='#fff' size={scale(23)}/>
            <MaterialIcons name='filter-list' color='#fff' size={scale(23)}style={{marginLeft:20}}/>
          </View>
        }} />
        <Stack.Screen
          name="DetailScreen"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation
