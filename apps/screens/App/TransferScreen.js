import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Text,
  Platform,
} from "react-native";
import { MyScreen, ConfirmButton } from "../../Components";
import { Formik } from "formik";
import * as Yup from "yup";

import colors from "../../constants/colors";

const validationSchema = Yup.object().shape({
  accnumber: Yup.number().required().label("Account Number"),
  bank: Yup.string().required().label("bank"),
});
function TransferScreen({ navigation }) {
  return (
    <MyScreen>
      <KeyboardAvoidingView
        style={{ justifyContent: "center", flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : null}
      >
        <ConfirmButton
          title={"Beneficiaries"}
          onPress={() => {
            navigation.navigate("beneficiaries");
          }}
        />
        <View
          style={{
            backgroundColor: colors.background,
            alignItems: "center",
          }}
        >
          <Formik
            initialValues={{
              accnumber: "",
              name: "",
              bank: "",
            }}
            onSubmit={(values) => {
              navigation.replace("amount", {
                accnumber: values.accnumber,
                name: values.name,
                bank: values.bank,
              });
            }}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleSubmit,
              setFieldTouched,
              touched,
              errors,
            }) => (
              <>
                <KeyboardAvoidingView
                  behavior={Platform.OS == "ios" ? "padding" : null}
                >
                  <View style={styles.modalContainer}>
                    <View style={{ marginBottom: 20 }}>
                      <Text style={styles.header}>Transfer Money</Text>
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
                      <Text style={styles.errorMessage}>
                        {touched.accnumber && errors.accnumber}
                      </Text>

                      <View style={styles.semiContainer}>
                        <Text style={styles.title}>Bank:</Text>
                        <TextInput
                          style={styles.inputField}
                          onChangeText={handleChange("bank")}
                          onBlur={() => setFieldTouched("bank")}
                        ></TextInput>
                      </View>
                      <Text style={styles.errorMessage}>
                        {touched.bank && errors.bank}
                      </Text>

                      <View style={styles.semiContainer}>
                        <Text style={styles.title}>Account Name:</Text>
                        <TextInput
                          style={styles.inputField}
                          value="Yusuf Muhammad Dimari"
                          editable={false}
                        ></TextInput>
                      </View>
                      <Text style={styles.errorMessage}>
                        {touched.name && errors.name}
                      </Text>
                    </View>
                    <ConfirmButton title={"Next"} onPress={handleSubmit} />
                  </View>
                </KeyboardAvoidingView>
              </>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </MyScreen>
  );
}
const styles = StyleSheet.create({
  modalContainer: {
    width: "90%",
    backgroundColor: colors.background,
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
  errorMessage: { color: "red", alignSelf: "flex-end", marginBottom: 20 },
});

export default TransferScreen;
