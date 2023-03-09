import React, { useEffect, useState } from "react";
import { View, Button, Text, StyleSheet, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

import { testActions } from "../store/test-context";
import { useSelector, useDispatch } from "react-redux";

import storage from "../firebase";

import downloadLink from "../firebase";

const IndexScreen = ({ navigation }) => {
  const [allURL, setAllURL] = useState([]);

  const number = useSelector((state) => state.test.testNumber1);

  const dispatch = useDispatch();

  navigation.setOptions({
    headerTitle: "XD",
    headerShown: true,
    safeAreaInsets: { top: 220 }, // tu dodajemy wartość
  });

  const getAllURL = async () => {
    const responseData = [];
    const result = await listAll(ref(storage, "/pages/gigant/144/"));
    console.log("result: " + result);

    for (const imageRef of result.items) {
      const url = await getDownloadURL(imageRef);
      responseData.push(url);
    }

    // listAll(ref(storage, "/pages/gigant/144/")).then(function (result) {
    //   result.items.forEach(function (imageRef) {
    //     getDownloadURL(imageRef).then(function (url) {
    //       responseData.push(url);
    //     });
    //   });
    // });
    // console.log("1." + allURL);
    setAllURL(responseData);
    // console.log("2. -----------" + allURL);
  };

  const addLink = () => {
    setAllURL([]);

    console.log(allURL[1]);
  };
  console.log("1 ---------" + allURL[1]);
  return (
    <View>
      <Text>This is indexScreen!!!</Text>
      <Button
        title="Got to Test Screen"
        onPress={
          () => {
            dispatch(testActions.addTestNumber1({ value: 5 }));
            getAllURL();
          }
          // navigation.navigate("Login");
        }
      ></Button>
      <Button
        title="Add link"
        onPress={() => {
          addLink();
        }}
      ></Button>
      <Text>Actual number is: {number}</Text>
      <Image style={styles.image} source={{ uri: allURL[2] }} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },

  textStyle: {
    fontSize: 30,
  },
});

export default IndexScreen;
