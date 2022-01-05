import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function RoundComponent({ description, icon, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.rounderContainer}>
        <MaterialCommunityIcons
          name={icon}
          size={35}
          color={colors.secondary}
        />
      </View>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center" },
  rounderContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    color: colors.secondary,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default RoundComponent;
