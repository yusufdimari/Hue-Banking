import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
// import { auth } from "../../Firebase/firebase";
import firebase from "../../Firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Image,
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { ConfirmButton, MyScreen } from "../../Components";
import Colors from "../../constants/Colors";
const validationSchema = Yup.object().shape({
  username: Yup.string().required().max(256).lowercase().email(),
  password: Yup.string().required().max(24).min(8).label("password"),
});

function LoginScreen({ navigation }) {
  const colors = Colors();
  return (
    <MyScreen style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/logo-grey.png")}
            style={{ width: 200, height: 200 }}
          />
          <Text style={styles.title}>Hue Banking</Text>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.loginText}>Please Login</Text>
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={(values) => {
              firebase
                .auth()
                .signInWithEmailAndPassword(values.username, values.password)
                .then(() => {
                  navigation.replace("dashboard");
                })
                .catch((error) => {
                  alert(error);
                  console.log(error);
                });
            }}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleSubmit,
              errors,
              setFieldTouched,
              touched,
            }) => (
              <>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text>Username: </Text>
                  <View
                    style={[
                      styles.inputContainer,
                      { backgroundColor: colors.primary },
                    ]}
                  >
                    <MaterialCommunityIcons
                      name={"account"}
                      size={20}
                      style={{ marginRight: 10 }}
                    />
                    <TextInput
                      style={{ flex: 1 }}
                      onChangeText={handleChange("username")}
                      keyboardType="email-address"
                      textContentType="emailAddress"
                      autoCapitalize="none"
                    />
                  </View>
                </View>
                <Text style={{ color: "red" }}>{errors.username} </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text>Password: </Text>
                  <View
                    style={[
                      styles.inputContainer,
                      { backgroundColor: colors.primary },
                    ]}
                  >
                    <MaterialCommunityIcons
                      name={"key"}
                      size={20}
                      style={{ marginRight: 10 }}
                      color={colors.secondary}
                    />
                    <TextInput
                      secureTextEntry
                      style={{ flex: 1 }}
                      onChangeText={handleChange("password")}
                      onBlur={() => {
                        setFieldTouched("password");
                      }}
                    />
                  </View>
                </View>
                <Text style={{ color: "red" }}>
                  {touched.password && errors.password}{" "}
                </Text>

                <ConfirmButton title={"Login"} onPress={handleSubmit} />

                <View style={styles.footer}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("register");
                    }}
                  >
                    <Text>Register</Text>
                  </TouchableOpacity>
                  <Text>Forgot Password?</Text>
                </View>
              </>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </MyScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    // justifyContent: "flex-end",
  },
  logoContainer: {
    alignItems: "center",
    margin: 20,
    height: "40%",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bottomContainer: {
    alignItems: "center",
    margin: 20,
    flex: 1,
    justifyContent: "flex-end",
    // marginBottom: 50,
  },
  loginText: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 15,
    fontWeight: "700",
  },
  inputContainer: {
    flex: 1,
    alignSelf: "center",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
});

export default LoginScreen;
