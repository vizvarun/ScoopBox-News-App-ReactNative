import React, { Component } from "react";
import { View, Text } from "react-native";
import { Router, Scene, Stack, Actions } from "react-native-router-flux";
import Home from "./home";
import Login from "./login";
import Signup from "./signup";
import Forgot from "./forgot";
import OTP from "./otp";
import Dashboard from "./dashboard";

export default class Routes extends Component {
  render() {
    return (
      <View>
        <Router>
          <Stack key="root" hideNavBar={true}>
            <Scene key="home" component={Home} title="Home" initial={true} />
            <Scene key="login" component={Login} title="Login" />
            <Scene key="signup" component={Signup} title="Register" />
            <Scene key="forgot" component={Forgot} title="Forgot" />
            <Scene key="otp" component={OTP} title="Otp" />
            <Scene key="dashboard" component={Dashboard} title="Dashboard" />
          </Stack>
        </Router>
      </View>
    );
  }
}
