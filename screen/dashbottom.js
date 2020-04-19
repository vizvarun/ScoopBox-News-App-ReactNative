import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./dashboard";
import Credits from "./credits";
import Ionicons from "react-native-vector-icons/Ionicons";
import Settings from "./settings";
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

function DashBoard({ navigation }) {
  return (
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Dashboard />
  );
}

function Credit() {
  return <Credits />;
}

function Setting() {
  return <Settings />;
}

const Tab = createMaterialBottomTabNavigator();

export default function Dashbottom() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: "#16151f" }}
    >
      <Tab.Screen
        name="Home"
        component={DashBoard}
        options={{
          tabBarLabel: null,
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <Icon name="md-home" color={color} size={31} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: null,
          tabBarColor: "white",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-settings" color={color} size={31} />
          ),
        }}
      />
      <Tab.Screen
        name="Credits"
        component={Credit}
        options={{
          tabBarLabel: null,
          tabBarColor: "#fff",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={31} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
