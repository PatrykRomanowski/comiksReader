import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import IndexScreen from "../screens/indexScreen";

const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Text>XD</Text>
    // <Stack.Navigator>
    //   <Stack.Screen name="Home" component={IndexScreen} />
    // </Stack.Navigator>
  );
};

export default HomeStack;
