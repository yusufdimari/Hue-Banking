import React from "react";
import { SafeAreaView, StyleSheet , TouchableWithoutFeedback, Keyboard} from "react-native";
import colors from "../constants/colors";

function MyScreen({ children, style }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, },
});

export default MyScreen;
