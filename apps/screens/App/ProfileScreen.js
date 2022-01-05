import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { MyScreen } from "../../Components";
import colors from "../../constants/colors";

function ProfileScreen(props) {
  return (
    <MyScreen>
      <Image
        source={require("../../assets/yusuf.png")}
        style={{
          // height: '50%',
          borderRadius: 250,
          alignSelf: "center",
          marginTop: 50,
        }}
        resizeMode="contain"
      />
      <View style={styles.bottomContainer}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Name: </Text>
            <Text style={styles.subTitle}>Yusuf Muhammad Dimari</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Account: </Text>
            <Text style={styles.subTitle}>0236028591</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Bank: </Text>
            <Text style={styles.subTitle}>Wema Bank</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>BVN: </Text>
            <Text style={styles.subTitle}>Yusuf Muhammad Dimari</Text>
          </View>
        </View>
      </View>
    </MyScreen>
  );
}
const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    backgroundColor: colors.background,
    marginVertical: 20,
    elevation: 5,
    borderRadius: 30,
    padding: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    padding: 30,
  },
  textContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
  },
  subTitle: {
    fontSize: 15,
    color: colors.secondary,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
});

export default ProfileScreen;
