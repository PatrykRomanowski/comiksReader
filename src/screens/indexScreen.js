import React, { useEffect } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { testActions } from "../store/test-context";
import { useSelector, useDispatch } from "react-redux";

// import { createStackNavigator } from "react-navigation-stack";
// import { NavigationScreenProps } from "react-navigation";
// import { NavigationScreenProp } from "react-navigation";

const IndexScreen = ({ navigation }) => {
  const number = useSelector((state) => state.test.testNumber1);

  const dispatch = useDispatch();

  navigation.setOptions({
    headerTitle: "XD",
    headerShown: true,
    safeAreaInsets: { top: 220 }, // tu dodajemy wartość
  });

  return (
    <View>
      <Text>This is indexScreen!!!</Text>
      <Button
        title="Got to Test Screen"
        onPress={
          () => {
            dispatch(testActions.addTestNumber1({ value: 5 }));
          }
          // navigation.navigate("Login");
        }
      ></Button>
      <Text>Actual number is: {number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default IndexScreen;
