import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

import firebase from "../firebase";

const LibraryScreen = () => {
  // const imageRef = "gs://comiks-reader.appspot.com/pages/gigant/144";

  // const reference = firebase.storage().ref(imageRef);

  // reference.listAll().then((result) => {
  //   console.log(result);
  // });

  // imageRef.listAll().then((result) => {
  //   result.items.forEach((imageRef) => {
  //     imageRef.getDownloadURL().then((url) => {
  //       console.log(url);
  //     });
  //   });
  // });

  return (
    <View>
      <Button title="press me"></Button>
      <Text>This is library screen!!!!</Text>
    </View>
  );
};

export default LibraryScreen;
