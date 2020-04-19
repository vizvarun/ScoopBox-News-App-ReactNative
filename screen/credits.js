import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet, View, Image, Text, StatusBar, Button } from "react-native";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Actions } from "react-native-router-flux";
import Tabscategory from "./tabCategory";
import Home from "./home";
import Login from "./login";
import Signup from "./signup";
import Forgot from "./forgot";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./drawerContent";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Drawer = createDrawerNavigator();

let customFonts = {
  "Poppins-Regular": require("../assets/fonts/Poppins-Regular.otf"),
  "Poppins-Light": require("../assets/fonts/Poppins-Light.otf"),
  "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.otf"),
  "Poppins-Bold": require("../assets/fonts/Poppins-Bold.otf"),
  "Poppins-Medium": require("../assets/fonts/Poppins-Medium.otf"),
};

const Credits = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="default-content"
        hidden={false}
        backgroundColor="#121212"
        translucent={true}
      />
      <StatusBar barStyle="light-content" backgroundColor="#121212"></StatusBar>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <Image
            source={require("../assets/images/logo.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>
      </View>
      <View style={styles.tabs}>
       
      </View>
    </View>
  );
};

export default Credits;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#2f2d40",
  },
  rect: {
    top: 10,
    left: 0,
    width: "100%",
    height: 127,
    backgroundColor: "#16151f",
    position: "absolute",
    alignItems: "center"
  },
  image2: {
    width: 30,
    height: 27,
    marginTop: 34,
    marginLeft: 25,
  },
  image: {
    top: 0,
    width: 161,
    height: 161,
    position: "absolute",
  },
  rectStack: {
    width: "100%",
    height: 161,
    marginTop: -25,
    alignItems: "center",
  },
  tabs: {
    flex: 1,
    marginTop: -25,
  },
});
