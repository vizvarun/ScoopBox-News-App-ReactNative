import React, { Component } from "react";
import { StyleSheet, View, Image, Text, StatusBar } from "react-native";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Actions } from "react-native-router-flux";

let customFonts = {
  "Poppins-Regular": require("../assets/fonts/Poppins-Regular.otf"),
  "Poppins-Light": require("../assets/fonts/Poppins-Light.otf"),
  "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.otf"),
  "Poppins-Bold": require("../assets/fonts/Poppins-Bold.otf"),
  "Poppins-Medium": require("../assets/fonts/Poppins-Medium.otf"),
};

const Login = ({ navigation }) => {
  return (
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#121212"
          ></StatusBar>
          <View style={styles.rectStack}>
            <View style={styles.rect}>
              <View style={styles.imageRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={require("../assets/images/back.png")}
                    resizeMode="contain"
                    style={styles.image}
                  ></Image>
                </TouchableOpacity>
                <View style={styles.loginStack}>
                  <Text style={styles.login}>Login</Text>
                  <Image
                    source={require("../assets/images/logo.png")}
                    resizeMode="contain"
                    style={styles.image3}
                  ></Image>
                </View>
              </View>
            </View>
            <View style={styles.rect2}>
              <View style={styles.image2Row}>
                <TouchableOpacity>
                  <Image
                    source={require("../assets/images/fbicon.png")}
                    resizeMode="contain"
                    style={styles.image2}
                  ></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require("../assets/images/googleicon.png")}
                    resizeMode="contain"
                    style={styles.image4}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.rect5}>
              <Image
                    source={require("../assets/images/user.png")}
                    resizeMode="contain"
                    style={styles.image5}
                  ></Image>
                <TextInput style={styles.username} placeholder="Username   " placeholderTextColor="#16151f" />
              </View>
              <View style={styles.rect4}>
              <Image
                    source={require("../assets/images/lock.png")}
                    resizeMode="contain"
                    style={styles.image5}
                  ></Image>
                <TextInput style={styles.password} placeholder="Password" secureTextEntry={true} placeholderTextColor="#16151f" />
              </View>
              <TouchableOpacity onPress={()=>navigation.navigate('Dashbottom')}>
                <View style={styles.rect3}>
                  <Text style={styles.login2}>LOGIN</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.forgotPasswordRow}>
            <TouchableOpacity onPress={()=>navigation.navigate('Forgot')}>
              <Text style={styles.forgotPassword}>Forgot Password</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
              <Text style={styles.newUserRegister}>New User? Register</Text>
            </TouchableOpacity>
          </View>
        </View>
     );
};
export default Login;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(244,244,244,1)",
    alignItems: "center",
  },
  rect: {
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: 550,
    backgroundColor: "#16151f",
    position: "absolute",
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    flexDirection: "row",
  },
  image: {
    width: 23,
    height: 23,
    marginTop: 2
  },
  login: {
    top: 0,
    left: 74,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "Poppins-Regular",
  },
  image3: {
    top: 10,
    left: 0,
    width: 200,
    height: 200,
    position: "absolute",
  },
  loginStack: {
    width: 200,
    height: 210,
    marginLeft: 75,
    marginTop: 3,
  },
  imageRow: {
    height: 213,
    flexDirection: "row",
    flex: 1,
    marginRight: 80,
    marginLeft: 22,
    marginTop: 59,
  },
  rect2: {
    top: 258,
    width: 305,
    height: 369,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    elevation: 300,
    borderRadius: 28,
    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.17,
    shadowRadius: 100,
    left: 60,
    elevation: 2,
  },
  image2: {
    width: 55,
    height: 55,
  },
  image4: {
    width: 43,
    height: 43,
    marginLeft: 61,
    marginTop: 6,
  },
  image5: {
    width: 25,
    height: 25,
    marginTop: 12,
    marginLeft: 25,

  },
  image2Row: {
    height: 55,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 71,
    marginRight: 73,
  },
  rect5: {
    width: 245,
    height: 52,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 100,
    marginTop: 43,
    marginLeft: 28,
    flexDirection:"row"
  },
  username: {
    color: "#16151f",
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    marginTop: 2,
    marginLeft: 15,
    width: "60%"
  },
  rect4: {
    flexDirection: "row",
    width: 245,
    height: 52,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 100,
    marginTop: 19,
    marginLeft: 28,
  },
  password: {
    color: "#16151f",
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    marginTop: 2,
    marginLeft: 15,
    width: "60%"
  },
  rect3: {
    width: 245,
    height: 52,
    backgroundColor: "#16151f",
    borderRadius: 100,
    marginTop: 37,
    marginLeft: 28,
  },
  login2: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "Poppins-Regular",
    marginTop: 12,
    marginLeft: 94,
  },
  rectStack: {
    width: "100%",
    height: 650,
    alignItems: "center",
    justifyContent: "center",
  },
  forgotPassword: {
    color: "#16151f",
    fontSize: 13,
    fontFamily: "Poppins-Regular",
  },
  newUserRegister: {
    color: "#16151f",
    fontSize: 13,
    fontFamily: "Poppins-Regular",
    marginLeft: 83,
  },
  forgotPasswordRow: {
    height: 12,
    flexDirection: "row",
    marginTop: 93,
    marginLeft: 33,
    marginRight: 33,
  },
});
