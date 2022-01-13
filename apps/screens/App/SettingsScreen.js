import React, { useState, useEffect } from "react";
import MyScreen from "../../Components/MyScreen";
import { TouchableOpacity, Text, StyleSheet, Modal } from "react-native";
import firebase from "../../Firebase/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

function SettingsScreen(props) {
  const [theme, setTheme] = useState("bw");
  const [visible, setVisible] = useState(false);
  // useEffect(() => {
  //   uid = firebase.auth().currentUser.uid;
  //   console.log(uid);
  // }, []);

  // firebase.firestore().collection(uid).doc("details").update({ theme: theme });
  //   useEffect(() => {
  //     setThemeLocally;
  //     getThemeLocally
  //   }, [theme]);

  //   const setThemeLocally = async () => {
  //     try {
  //       AsyncStorage.setItem("theme", JSON.stringify(theme));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   const getThemeLocally = async () => {
  //     try {
  //       const value=AsyncStorage.getItem("theme", JSON.stringify(theme));
  //       const data

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  const setThemeL = async (a) => {
    try {
      await AsyncStorage.setItem("theme", a).then(() => {
        console.log("done", a);
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <MyScreen>
      <TouchableOpacity
        onPress={() => {
          setVisible(true);
        }}
      >
        <Text style={styles.theme}>Set Theme</Text>
      </TouchableOpacity>
      <Modal visible={visible}>
        <MyScreen>
          <TouchableOpacity
            onPress={() => {
              setTheme("Normal");
              setVisible(false);
              setThemeL("Normal");
              alert("Please Reload App");
            }}
          >
            <Text>Normal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setTheme("Reddish");
              setVisible(false);
              setThemeL("Reddish");
              alert("Please Reload App");
            }}
          >
            <Text>Red</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setTheme("Gray");
              setVisible(false);
              setThemeL("Gray");
              alert("Please Reload App");
            }}
          >
            <Text>Gray</Text>
          </TouchableOpacity>
        </MyScreen>
      </Modal>
    </MyScreen>
  );
}
const styles = StyleSheet.create({});

export default SettingsScreen;
