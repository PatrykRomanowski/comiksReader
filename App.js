import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Button, Text, View, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import IndexScreen from "./src/screens/indexScreen";
import testScreen from "./src/screens/testScreen";

const Stack = createStackNavigator();

export default function App() {
  const [items, setItems] = useState([
    { id: "1", text: "Item 1" },
    { id: "2", text: "Item 2" },
    { id: "3", text: "Item 3" },
    { id: "4", text: "Item 4" },
    { id: "5", text: "Item 5" },
    { id: "6", text: "Item 6" },
  ]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index1" component={IndexScreen}></Stack.Screen>
        <Stack.Screen name="Test" component={testScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
