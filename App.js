import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Button, Text, View, FlatList } from "react-native";

import { Provider } from "react-redux";
import store from "./src/store";
// import { createStackNavigator } from "@react-navigation/stack
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { HeaderTitle } from "@react-navigation/stack";

import IndexScreen from "./src/screens/indexScreen";
import TestScreen from "./src/screens/testScreen";
import LoginScreen from "./src/screens/loginScreen";
import LibraryScreen from "./src/screens/libraryScreen";
// import HomeStack from "./src/navigation2/homeStack";

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
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerStyle: {
              height: 80,
            },

            tabBarIcon: ({ color, size }) => {
              let iconName; // selection of icons

              if (route.name === "Home") {
                iconName = "home";
              } else if (route.name === "Library") {
                iconName = "library";
              } else if (route.name === "Book") {
                iconName = "book";
              } else if (route.name === "Login") {
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
            name="Home"
            component={IndexScreen}
            // options={{
            //   tabBarIcon: ({ color, size }) => (
            //     <Ionicons name="home" color={color} size={size} />
            //   ),
            //   style: {
            //     textTransform: "uppercase",
            //   },
            // }}
          ></Tab.Screen>
          <Tab.Screen name="Book" component={LoginScreen}></Tab.Screen>
          <Tab.Screen name="Library" component={LibraryScreen}></Tab.Screen>
          <Tab.Screen
            name="Login"
            component={TestScreen}
            // options={{
            //   headerTitle: "Test2",
            //   headerRight: () => <Button title="Test2"></Button>,
            // }}
          ></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
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
