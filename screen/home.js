import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Font from "expo-font";
import { AppLoading } from "expo";

let customFonts = {
  "Poppins-Regular": require("../assets/fonts/Poppins-Regular.otf"),
  "Poppins-Light": require("../assets/fonts/Poppins-Light.otf"),
  "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.otf"),
  "Poppins-Bold": require("../assets/fonts/Poppins-Bold.otf"),
  "Poppins-Medium": require("../assets/fonts/Poppins-Medium.otf"),
};

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Image
          source={require("../assets/images/undraw_welcome_cats_thqn.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <View style={styles.rect2}>
            <Text style={styles.login}>LOGIN</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
          <View style={styles.rect3}>
            <Text style={styles.signUp}>SIGN UP</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", marginLeft: 10 }}>
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
      </View>
      <StatusBar barStyle="light-content"></StatusBar>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#16151f",
    borderColor: "#000000",
    borderWidth: 0,
    alignItems: "center",
    borderBottomWidth: 0,
  },
  rect: {
    width: "100%",
    height: 600,
    backgroundColor: "rgba(255,255,255,1)",
    borderColor: "#000000",
    borderWidth: 0,
    borderBottomWidth: 0,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    overflow: "visible",
    alignItems: "center",
    elevation: 10,
  },
  image: {
    width: 281,
    height: 281,
  },
  rect2: {
    width: 220,
    height: 62,
    backgroundColor: "#16151f",
    borderRadius: 100,
    marginTop: 35,
  },
  login: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "Poppins-Light",
    marginLeft: 85,
    marginTop: 16,
  },
  rect3: {
    width: 220,
    height: 62,
    backgroundColor: "#16151f",
    borderRadius: 100,
    marginTop: 25,
  },
  signUp: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "Poppins-Light",
    marginTop: 17,
    marginLeft: 76,
  },
  image3: {
    width: 250,
    height: 250,
    position: "absolute",
    alignItems: "center",
  },
});
