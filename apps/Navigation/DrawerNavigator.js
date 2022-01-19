import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image } from "react-native";
import {
  LogoutScreen,
  ProfileScreen,
  Dashboard,
  SettingsScreen,
} from "../screens";
import Colors from "../constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const drawer = createDrawerNavigator();
function DrawerNavigator(props) {
  const colors = Colors();
  return (
    <drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTitle: "",
        drawerStyle: { backgroundColor: colors.background, width: "60%" },
        headerRight: () => (
          <Image
            source={colors.img}
            style={{ width: 50, height: 50, marginRight: 20 }}
          />
        ),
        drawerActiveBackgroundColor: colors.primary,
        drawerActiveTintColor: colors.secondary,
        drawerInactiveTintColor: colors.secondary,
      }}
    >
      <drawer.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons
              name={"apps"}
              size={30}
              color={colors.secondary}
            />
          ),
        }}
      />
      <drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: "Profile",
          drawerIcon: () => (
            <MaterialCommunityIcons
              name={"account-outline"}
              size={30}
              color={colors.secondary}
            />
          ),
        }}
      />
      <drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTitle: "Settings",
          drawerIcon: () => (
            <MaterialCommunityIcons
              name={"cog-outline"}
              size={30}
              color={colors.secondary}
            />
          ),
        }}
      />
      <drawer.Screen
        name="Support"
        component={ProfileScreen}
        options={{
          headerTitle: "Profile",
          drawerIcon: () => (
            <MaterialCommunityIcons
              name={"help"}
              size={30}
              color={colors.secondary}
            />
          ),
        }}
      />
      <drawer.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          headerTitle: "Profile",
          drawerIcon: () => (
            <MaterialCommunityIcons
              name={"logout"}
              size={30}
              color={colors.danger}
            />
          ),
          drawerItemStyle: { marginTop: 50 },
        }}
      />
    </drawer.Navigator>
  );
}

export default DrawerNavigator;
