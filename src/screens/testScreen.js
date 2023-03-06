import React from "react";
import { View, Text, StyleSheet } from "react-native";

const testScreen = ({ navigation }) => {
  return (
    <View>
      <Text>This is testScreen!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default testScreen;
