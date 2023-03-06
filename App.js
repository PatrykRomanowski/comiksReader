import React, { useState } from "react";
// import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Button, Text, View, FlatList } from "react-native";
// import { createStackNavigator } from "@react-navigation/stack
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import IndexScreen from "./src/screens/indexScreen";
import TestScreen from "./src/screens/testScreen";
import LoginScreen from "./src/screens/loginScreen";

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName; // selection of icons

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "library") {
              iconName = "library";
            } else if (route.name === "book") {
              iconName = "book";
            } else if (route.name === "login") {
              iconName = "person-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          style: { height: 60 },
          labelStyle: { fontSize: 12 },
        }}
      >
        <Tab.Screen
          name="home"
          component={IndexScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen name="book" component={IndexScreen}></Tab.Screen>
        <Tab.Screen name="library" component={LoginScreen}></Tab.Screen>
        <Tab.Screen
          name="login"
          component={TestScreen}
          // options={{
          //   headerTitle: "Test2",
          //   headerRight: () => <Button title="Test2"></Button>,
          // }}
        ></Tab.Screen>
      </Tab.Navigator>
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
  button1: {
    width: 10,
    height: 10,
    backgroundColor: "red",
  },
});
