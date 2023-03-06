import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createStackNavigator } from "react-navigation-stack";
// import { NavigationScreenProps } from "react-navigation";
// import { NavigationScreenProp } from "react-navigation";

const IndexScreen = ({ navigation }) => {
  return (
    <View>
      <Text>This is indexScreen!!!</Text>
      <Button
        title="Got to Test Screen"
        onPress={() => navigation.navigate("Test")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default IndexScreen;
