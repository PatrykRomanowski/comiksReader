import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationScreenProps } from "react-navigation";

const IndexScreen = ({ navigation }) => {
  return (
    <View>
      <Text>This is indexScreen!!!</Text>
    </View>
  );
};

IndexScreen.navigationOptions = () => {
  return {
    headerRight: () => <Button title="test" />,
  };
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default IndexScreen;
