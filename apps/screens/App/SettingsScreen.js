import React, { useState, useEffect } from "react";
import MyScreen from "../../Components/MyScreen";
import { TouchableOpacity, Text, StyleSheet, Modal, View } from "react-native";
import firebase from "../../Firebase/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "../../constants/Colors";
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
  const colors = Colors();
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
            }}
          >
            <View
              style={{
                width: "90%",
                backgroundColor: colors.normal,
                elevation: 5,
                height: 50,
                borderRadius: 10,
                marginBottom: 10,
                flexDirection: "row",
                padding: 5,
                alignItems: "center",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
                alignSelf: "center",
              }}
            >
              <Text>Normal</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setTheme("Reddish");
              setVisible(false);
              setThemeL("Reddish");
            }}
          >
            <View
              style={{
                width: "90%",
                backgroundColor: colors.danger,
                elevation: 5,
                height: 50,
                borderRadius: 10,
                marginBottom: 10,
                flexDirection: "row",
                padding: 5,
                alignItems: "center",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
                alignSelf: "center",
              }}
            >
              <Text>Deutan Color Blindness</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setTheme("Gray");
              setVisible(false);
              setThemeL("Gray");
            }}
          >
            <View
              style={{
                width: "90%",
                backgroundColor: colors.gray,
                elevation: 5,
                height: 50,
                borderRadius: 10,
                marginBottom: 10,
                flexDirection: "row",
                padding: 5,
                alignItems: "center",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
                alignSelf: "center",
              }}
            >
              <Text>Tritan Color Blindness</Text>
            </View>
          </TouchableOpacity>
        </MyScreen>
      </Modal>
    </MyScreen>
  );
}
const styles = StyleSheet.create({});

export default SettingsScreen;
