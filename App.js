import "react-native-gesture-handler";
import React, { Component } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Dashboard from "./screen/dashboard";

let customFonts = {
  "Poppins-Regular": require("./assets/fonts/Poppins-Regular.otf"),
  "Poppins-Light": require("./assets/fonts/Poppins-Light.otf"),
  "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.otf"),
  "Poppins-Bold": require("./assets/fonts/Poppins-Bold.otf"),
  "Roboto-medium": require("./assets/fonts/Poppins-Medium.otf"),
};

export default class App extends Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <NavigationContainer>
          <Dashboard />
          <StatusBar
            barStyle="light-content"
            backgroundColor="#121212"
          ></StatusBar>
        </NavigationContainer>
      );
    } else {
      return <AppLoading />;
    }
  }
}
