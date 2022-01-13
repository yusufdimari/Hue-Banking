import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Colors from "../constants/Colors";
function MyScreen({ children, style }) {
  const colors=Colors()
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView
        style={[{ flex: 1, backgroundColor: colors.background }, style]}
      >
        {children}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default MyScreen;
