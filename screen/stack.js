import "react-native-gesture-handler";
import React from "react";
import Home from "./home";
import Login from "./login";
import Signup from "./signup";
import Forgot from "./forgot";;
import Dashboard from "./dashboard"
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}
