import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../constants/colors";

function BeneficiaryCard({ name, alias, bank, accnumber, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.subcontainer}>
            <Text style={styles.subtitle}>{alias}</Text>
            <Text style={styles.subtitle}>{bank}</Text>
            <Text style={styles.subtitle}>{accnumber}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
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
  },
  subcontainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  subtitle: {
    fontSize: 10,
  },
});

export default BeneficiaryCard;
