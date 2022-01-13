import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";
import {
  Beneficiaries,
  AddBeneficiaryScreen,
  LoginScreen,
  TransferScreen,
  AmountScreen,
  LogoutScreen,
  RegisterScreen,
  PaymentScreen
} from "../screens";

import colors from "../constants/Colors";

const stack = createStackNavigator();
function StackNavigator(props) {
  return (
    <stack.Navigator
      screenOptions={{
        headerTitle: "",
        headerStyle: { backgroundColor: colors.background },
        headerRight: () => (
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 50, height: 50, marginRight: 20 }}
          />
        ),
      }}
    >
      <stack.Screen
        name={"login"}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name={"transfer"}
        component={TransferScreen}
        options={{
          headerTitle: "Transfer",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
          },
        }}
      />
      <stack.Screen
        name={"amount"}
        component={AmountScreen}
        options={{
          headerTitle: "Transfer",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
          },
        }}
      />
      <stack.Screen
        name={"dashboard"}
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={"beneficiaries"}
        component={Beneficiaries}
        options={{
          headerTitle: "Beneficiaries",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
          },
        }}
      />
      <stack.Screen
        name={"addBeneficiaries"}
        component={AddBeneficiaryScreen}
      />
      <stack.Screen name={"logout"} component={LogoutScreen} />
      <stack.Screen
        name={"register"}
        component={RegisterScreen}
        options={{
          headerTitle: "Register",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
          },
        }}
      />
      <stack.Screen
        name={"pay"}
        component={PaymentScreen}
        options={{
          headerTitle: "Pay",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
          },
        }}
      />
    </stack.Navigator>
  );
}

export default StackNavigator;
