import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function ConfirmButton({ title, onPress }) {
  const colors=Colors()
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor:colors.background}]} onPress={onPress}>
      <Text style={{ fontWeight: "bold", fontSize: 20, paddingHorizontal: 20 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
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
