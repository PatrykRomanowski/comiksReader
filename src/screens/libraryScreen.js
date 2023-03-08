import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

import { storage } from "./firebase";

const imageRef = storage.ref("gs://comiks-reader.appspot.com/pages/gigant/144");

const LibraryScreen = () => {
  imageRef.listAll().then((result) => {
    result.items.forEach((imageRef) => {
      imageRef.getDownloadURL().then((url) => {
        console.log(url);
      });
    });
  });

  return (
    <View>
      <Button title="press me"></Button>
      <Text>This is library screen!!!!</Text>
    </View>
  );
};

export default LibraryScreen;
