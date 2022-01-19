import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
// import { auth } from "../../Firebase/firebase";
import firebase from "../../Firebase/firebase";
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
  Keyboard,
  Modal,
  Button,
} from "react-native";
import { ConfirmButton, MyScreen } from "../../Components";
import Colors from "../../constants/Colors";
import ActivityIndicator from "../../Components/ActivityIndicator";
import WebView from "react-native-webview";
const validationSchema = Yup.object().shape({
  username: Yup.string().required().max(256).lowercase().email(),
  password: Yup.string().required().max(24).min(8).label("password"),
});

function LoginScreen({ navigation }) {
  const colors = Colors();
  const [isLoading, setIsLoading] = useState(false);
  const [browserVisible, setBrowserVisible] = useState(false);
  return (
    <MyScreen style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <View style={styles.logoContainer}>
          <Image source={colors.img} style={{ width: 200, height: 200 }} />
          <Text style={[styles.title, { color: colors.text }]}>
            Hue Banking
          </Text>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={[styles.loginText, { color: colors.text }]}>
            Please Login
          </Text>
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={(values) => {
              setIsLoading(true);
              Keyboard.dismiss();
              firebase
                .auth()
                .signInWithEmailAndPassword(values.username, values.password)
                .then(() => {
                  setIsLoading(false);
                  navigation.replace("dashboard");
                })
                .catch((error) => {
                  alert(error);
                  setIsLoading(false);
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
                  <Text style={{ color: colors.text }}>Username: </Text>
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
                      color={colors.text}
                    />
                    <TextInput
                      style={{ flex: 1, color: colors.text }}
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
                  <Text style={{ color: colors.text }}>Password: </Text>
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
                      color={colors.text}
                    />
                    <TextInput
                      secureTextEntry
                      style={{ flex: 1, color: colors.text }}
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
                      setBrowserVisible(true);
                    }}
                  >
                    <Text style={{ color: colors.text }}>
                      Color Blindness Test
                    </Text>
                  </TouchableOpacity>
                  <Text style={{ color: colors.text }}>Forgot Password?</Text>
                </View>
              </>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
      <Modal visible={isLoading} transparent>
        <ActivityIndicator visible={true} />
      </Modal>
      <Modal visible={browserVisible}>
        <MyScreen>
          <View style={{ flex: 1 }}>
            <View>
              <Button
                onPress={() => {
                  setBrowserVisible(false);
                }}
                title="Done"
                color={colors.secondary}
              />
            </View>
            <WebView
              source={{
                uri: "https://enchroma.com/pages/color-blindness-test?format2=number",
              }}
              style={{ flex: 1 }}
            />
          </View>
        </MyScreen>
      </Modal>
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
