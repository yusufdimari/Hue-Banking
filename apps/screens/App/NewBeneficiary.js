import React, { useState } from "react";
import * as Yup from "yup";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Formik } from "formik";
import { ConfirmButton } from "../../Components";
import BankList from "./BankList";
import colors from "../../constants/colors";

const validationSchema = Yup.object().shape({
  accnumber: Yup.number().required().label("Account Number"),
  bank: Yup.string().required().label("bank"),
  name: Yup.string().required().label("Account Name"),
  alias: Yup.string().max(16).required().label("alias"),
  pin: Yup.number().required().label("pin"),
});
function NewBeneficiary({ onSubmit, onCancel }) {
  const [bankListVisible, setBankListVisible] = useState(false);
  const [bank, setBank] = useState("Please Select");
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Formik
        initialValues={{
          accnumber: "",
          name: "",
          bank: "",
          alias: "",
          pin: "",
        }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, setFieldTouched, touched, errors }) => (
          <>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : null}
            >
              <View style={styles.modalContainer}>
                <View style={{ marginBottom: 20 }}>
                  <Text style={styles.header}>Add New Beneficiary</Text>
                  <View style={styles.semiContainer}>
                    <Text style={styles.title}>Account Number:</Text>
                    <TextInput
                      style={styles.inputField}
                      onChangeText={handleChange("accnumber")}
                      keyboardType="number-pad"
                      maxLength={10}
                      onBlur={() => setFieldTouched("accnumber")}
                    ></TextInput>
                  </View>
                  <Text style={{ color: "red", alignSelf: "flex-end" }}>
                    {touched.accnumber && errors.accnumber}
                  </Text>

                  <View style={styles.semiContainer}>
                    <Text style={styles.title}>Bank:</Text>
                    <TouchableOpacity
                      onPress={() => {
                        setBankListVisible(true);
                      }}
                      style={styles.BankField}
                    >
                      <Text>{bank.name}</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={{ color: "red", alignSelf: "flex-end" }}>
                    {touched.bank && errors.bank}
                  </Text>

                  <View style={styles.semiContainer}>
                    <Text style={styles.title}>Account Name:</Text>
                    <TextInput
                      style={styles.inputField}
                      onChangeText={handleChange("name")}
                      onBlur={() => setFieldTouched("name")}
                    ></TextInput>
                  </View>
                  <Text style={{ color: "red", alignSelf: "flex-end" }}>
                    {touched.name && errors.name}
                  </Text>

                  <View style={styles.semiContainer}>
                    <Text style={styles.title}>Alias:</Text>
                    <TextInput
                      style={styles.inputField}
                      onChangeText={handleChange("alias")}
                      onBlur={() => setFieldTouched("alias")}
                    ></TextInput>
                  </View>
                  <Text style={{ color: "red", alignSelf: "flex-end" }}>
                    {touched.alias && errors.alias}
                  </Text>

                  <View style={styles.semiContainer}>
                    <Text style={styles.title}>Pin:</Text>
                    <TextInput
                      style={styles.inputField}
                      keyboardType="number-pad"
                      maxLength={4}
                      secureTextEntry
                      onChangeText={handleChange("pin")}
                      onBlur={() => setFieldTouched("pin")}
                    ></TextInput>
                  </View>
                  <Text style={{ color: "red", alignSelf: "flex-end" }}>
                    {touched.pin && errors.pin}
                  </Text>
                </View>
                <ConfirmButton title={"Confirm"} onPress={handleSubmit} />
                <TouchableOpacity onPress={onCancel}>
                  <Text style={{ textAlign: "center", color: colors.danger }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </>
        )}
      </Formik>
      <Modal visible={bankListVisible} animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: colors.background,
          }}
        >
          <BankList
            setModalVisible={setBankListVisible(false)}
            // onSelectItem={(item) => {
            //   setBank(item);
            //   console.log(bank);
            // }}
          />
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
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
  BankField: {
    width: "70%",
    backgroundColor: colors.background,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    marginRight: 0,
    minWidth: "40%",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: colors.background,
    // alignSelf: "center",
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
});

export default NewBeneficiary;
