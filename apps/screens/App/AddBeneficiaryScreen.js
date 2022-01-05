import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { ConfirmButton, MyScreen } from "../../Components";

import colors from "../../constants/colors";

function AddBeneficiaryScreen({ navigation }) {
  return (
    <MyScreen style={{ justifyContent: "center", alignItems: "center" }}>
      <View style={styles.container}>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.header}>Add New Beneficiary</Text>
          <View style={styles.semiContainer}>
            <Text style={styles.title}>Account Number:</Text>
            <TextInput style={styles.inputField}></TextInput>
          </View>
          <View style={styles.semiContainer}>
            <Text style={styles.title}>Bank:</Text>
            <TextInput style={styles.inputField}></TextInput>
          </View>
          <View style={styles.semiContainer}>
            <Text style={styles.title}>Account Name:</Text>
            <TextInput style={styles.inputField}></TextInput>
          </View>
          <View style={styles.semiContainer}>
            <Text style={styles.title}>Alias:</Text>
            <TextInput style={styles.inputField}></TextInput>
          </View>
          <View style={styles.semiContainer}>
            <Text style={styles.title}>Pin:</Text>
            <TextInput style={styles.inputField}></TextInput>
          </View>
        </View>
        <ConfirmButton
          title={"Confirm"}
          onPress={() => {
            navigation.navigate("beneficiaries");
          }}
        />
      </View>
    </MyScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: colors.background,
    alignSelf: "center",
    marginVertical: 20,
    elevation: 5,
    borderRadius: 30,
    padding: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  header: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 20,
  },
  semiContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginBottom: 10,
    marginLeft: 10,
  },
  inputField: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: "70%",
  },
  title: {
    marginRight: 0,
    minWidth: "40%",
  },
});

export default AddBeneficiaryScreen;
