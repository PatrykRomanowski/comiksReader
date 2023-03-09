import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBQpj0SGQdwVlekDxpzEK7Y5UW_Hu_RF3M",
  authDomain: "comiks-reader.firebaseapp.com",
  projectId: "comiks-reader",
  storageBucket: "comiks-reader.appspot.com",
  messagingSenderId: "508074796625",
  appId: "1:508074796625:web:661a049333a99fdfec3a70",
  measurementId: "G-HFCS2QB4LM",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export default storage;

// getDownloadURL(
//   ref(storage, "/pages/gigant/144/flowers-gf10e8b036_640.jpg")
// ).then((url) => {
//   console.log(url);
// });

// const storageRef = storage.ref("pages");
