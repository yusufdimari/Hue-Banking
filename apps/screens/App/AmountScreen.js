import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Text,
  Platform,
} from "react-native";
import { ConfirmButton, MyScreen } from "../../Components";

import colors from "../../constants/colors";

const validationSchema = Yup.object().shape({
  amount: Yup.number().required().label("Amount"),
  description: Yup.string(),
  pin: Yup.number().required(),
});
function AmountScreen({ navigation, route }) {
  return (
    <MyScreen>
      <KeyboardAvoidingView
        style={{ justifyContent: "center", flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : null}
      >
        <View
          style={{
            backgroundColor: colors.background,
            alignItems: "center",
          }}
        >
          <Formik
            initialValues={{
              amount: "",
              description: "",
              pin: "",
            }}
            onSubmit={(values) => {
              values.pin == "2580"
                ? navigation.replace("dashboard")
                : alert("incorrect Pin");
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
                    <View style={styles.semiContainer}>
                      <Text style={styles.title}>Account Number:</Text>
                      <TextInput
                        style={styles.inputField}
                        value={route.params.accnumber}
                      ></TextInput>
                    </View>
                    <Text style={styles.errorMessage}>
                      {touched.accnumber && errors.accnumber}
                    </Text>

                    <View style={styles.semiContainer}>
                      <Text style={styles.title}>Bank:</Text>
                      <TextInput
                        style={styles.inputField}
                        value={route.params.bank}
                      ></TextInput>
                    </View>
                    <Text style={styles.errorMessage}>
                      {touched.bank && errors.bank}
                    </Text>

                    <View style={styles.semiContainer}>
                      <Text style={styles.title}>Account Name:</Text>
                      <TextInput
                        style={styles.inputField}
                        value={route.params.name}
                        editable={false}
                      ></TextInput>
                    </View>
                    <Text style={styles.errorMessage}>
                      {touched.name && errors.name}
                    </Text>

                    <View style={styles.semiContainer}>
                      <Text style={styles.title}>Amount: ₦</Text>
                      <TextInput
                        style={styles.inputField}
                        onChangeText={handleChange("amount")}
                        keyboardType="number-pad"
                        onBlur={() => setFieldTouched("amount")}
                      ></TextInput>
                    </View>
                    <Text style={styles.errorMessage}>
                      {touched.amount && errors.amount}
                    </Text>

                    <View style={styles.semiContainer}>
                      <Text style={styles.title}>Description:</Text>
                      <TextInput
                        style={styles.inputField}
                        onChangeText={handleChange("description")}
                        onBlur={() => setFieldTouched("description")}
                        multiline
                      ></TextInput>
                    </View>
                    <Text style={styles.errorMessage}>
                      {touched.description && errors.description}
                    </Text>

                    <View style={styles.semiContainer}>
                      <Text style={styles.title}>Pin:</Text>
                      <TextInput
                        style={styles.inputField}
                        keyboardType="number-pad"
                        onChangeText={handleChange("pin")}
                        onBlur={() => setFieldTouched("pin")}
                        secureTextEntry
                        maxLength={4}
                      ></TextInput>
                    </View>
                    <Text style={styles.errorMessage}>
                      {touched.pin && errors.pin}
                    </Text>

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
    padding: 20,
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
    marginBottom: 5,
    marginLeft: 10,
  },
  inputField: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: "70%",
    textAlign: "center",
  },
  title: {
    marginRight: 0,
    minWidth: "40%",
  },
  errorMessage: {
    color: "red",
    alignSelf: "flex-end",
    marginBottom: 10,
  },
});

export default AmountScreen;
