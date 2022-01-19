import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function RoundComponent({ description, icon, onPress }) {
  const colors = Colors();
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View
        style={[styles.rounderContainer, { backgroundColor: colors.primary }]}
      >
        <MaterialCommunityIcons
          name={icon}
          size={35}
          color={colors.secondary}
        />
      </View>
      <Text style={[styles.description, { color: colors.secondary }]}>
        {description}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center" },
  rounderContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default RoundComponent;
