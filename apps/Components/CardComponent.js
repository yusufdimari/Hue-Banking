import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "../constants/Colors";
let colors;
function CardComponent({
  accnumber,
  balance,
  accname,
  style,
  iconName,
  onPress,
}) {
  colors = Colors();
  return (
    <View style={[styles.Container, { backgroundColor: colors.primary }]}>
      <View style={[style, { flexDirection: "row", alignItems: "center" }]}>
        <Image
          source={require("../assets/logo.png")}
          style={{ height: 50, width: 50, marginRight: 10 }}
        />
        <Text style={[styles.AccName, { color: colors.secondary }]}>
          {accname}
        </Text>
      </View>
      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={[styles.title, { color: colors.secondary }]}>
          Acc Number
        </Text>
        <Text style={[styles.subtitle, { color: colors.secondary }]}>
          {accnumber}
        </Text>
        <Text style={styles.title}>Avail Balance</Text>
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[styles.subtitle, { color: colors.secondary }]}>
              ₦ {balance}
            </Text>
            <MaterialCommunityIcons
              name={iconName}
              size={20}
              color={colors.secondary}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: 200,
    borderRadius: 30,
    padding: 10,
  },
  AccName: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },

  title: {
    fontSize: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginRight: 10,
    marginVertical: 5,
  },
});

export default CardComponent;
