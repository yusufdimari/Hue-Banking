import React from "react";
// import { CardComponent } from "./apps/Components";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./apps/Navigation/StackNavigator";
import PaymentScreen from "./apps/screens/App/PaymentScreen";
// import { SettingsScreen } from "./apps/screens";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    // <PaymentScreen />
  );
}
