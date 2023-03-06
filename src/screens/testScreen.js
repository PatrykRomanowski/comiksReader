import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const TestScreen = ({ navigation }) => {
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

export default TestScreen;
