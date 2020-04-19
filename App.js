import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native";
import Home from "./screen/home";
import Login from "./screen/login";
import Signup from "./screen/signup";
import Dashbottom from "./screen/dashbottom";
import Routes from "./screen/route";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import RootStackScreen from "./screen/RootStackScreen";

let customFonts = {
  "Poppins-Regular": require("./assets/fonts/Poppins-Regular.otf"),
  "Poppins-Light": require("./assets/fonts/Poppins-Light.otf"),
  "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.otf"),
  "Poppins-Bold": require("./assets/fonts/Poppins-Bold.otf"),
  "Roboto-medium": require("./assets/fonts/Poppins-Medium.otf"),
};

const Drawer = createDrawerNavigator();

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
            <Dashbottom />
          <StatusBar
            barStyle="default-content"
            hidden={false}
            backgroundColor="#121212"
            translucent={true}
          />
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
