import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

function ConfirmButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={{ fontWeight: "bold", fontSize: 20, paddingHorizontal: 20 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
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
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default ConfirmButton;
