import React, { Component } from "react";
import { StyleSheet, View, Image, Text, StatusBar } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Actions } from "react-native-router-flux";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";

let customFonts = {
  "Poppins-Regular": require("../assets/fonts/Poppins-Regular.otf"),
  "Poppins-Light": require("../assets/fonts/Poppins-Light.otf"),
  "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.otf"),
  "Poppins-Bold": require("../assets/fonts/Poppins-Bold.otf"),
  "Poppins-Medium": require("../assets/fonts/Poppins-Medium.otf"),
};
export default class OTP extends Component {
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

  signup() {
    Actions.signup();
  }

  forgot() {
    Actions.forgot();
  }

  getBack() {
    Actions.pop();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <View style={styles.rect1Stack}>
            <View style={styles.rect1}>
              <View style={styles.image1Row}>
                <Image
                  source={require("../assets/images/back.png")}
                  resizeMode="contain"
                  style={styles.image1}
                ></Image>
                <Text style={styles.otp}>OTP</Text>
              </View>
              <Image
                source={require("../assets/images/logo.png")}
                resizeMode="contain"
                style={styles.image3}
              ></Image>
            </View>
            <View style={styles.rect2}>
              <View style={styles.group}>
                <Svg viewBox="0 0 51.18 51.18" style={styles.ellipse}>
                  <Ellipse
                    strokeWidth={1}
                    fill="rgba(230, 230, 230,1)"
                    stroke="rgba(230, 230, 230,1)"
                    cx={26}
                    cy={26}
                    rx={25}
                    ry={25}
                  >
                    <TextInput placeholder="_" />
                  </Ellipse>
                </Svg>
                <Svg viewBox="0 0 51.18 51.18" style={styles.ellipse1}>
                  <Ellipse
                    strokeWidth={1}
                    fill="rgba(230, 230, 230,1)"
                    stroke="rgba(230, 230, 230,1)"
                    cx={26}
                    cy={26}
                    rx={25}
                    ry={25}
                  ></Ellipse>
                </Svg>
                <Svg viewBox="0 0 51.18 51.18" style={styles.ellipse2}>
                  <Ellipse
                    strokeWidth={1}
                    fill="rgba(230, 230, 230,1)"
                    stroke="rgba(230, 230, 230,1)"
                    cx={26}
                    cy={26}
                    rx={25}
                    ry={25}
                  ></Ellipse>
                </Svg>
                <Svg viewBox="0 0 51.18 51.18" style={styles.ellipse3}>
                  <Ellipse
                    strokeWidth={1}
                    fill="rgba(230, 230, 230,1)"
                    stroke="rgba(230, 230, 230,1)"
                    cx={26}
                    cy={26}
                    rx={25}
                    ry={25}
                  ></Ellipse>
                </Svg>
              </View>
              <TouchableOpacity>
                <View style={styles.rect3}>
                  <Text style={styles.verify}>VERIFY</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.loremIpsum}>
                  Haven't recieved it yet? Send Again
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <StatusBar
            barStyle="light-content"
            backgroundColor="rgba(14,68,85,1)"
          ></StatusBar>
        </View>
      );
    } else {
      return <AppLoading />;
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rect1: {
    top: 0,
    left: 0,
    width: "100%",
    height: 511,
    backgroundColor: "rgba(22,81,95,1)",
    position: "absolute",
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    alignItems: "center",
  },
  image1: {
    width: 23,
    height: 23,
  },
  otp: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "Poppins-Regular",
    marginLeft: 116,
    marginTop: 3,
  },
  image1Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 59,
    marginLeft: 22,
    marginRight: 161,
  },
  image3: {
    width: 200,
    height: 200,
  },
  rect2: {
    top: 308,
    left: 60,
    width: 303,
    height: 318,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    elevation: 300,
    borderRadius: 28,
    shadowOffset: {
      height: 2,
      width: 10,
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.17,
    shadowRadius: 100,
    elevation: 2,
  },
  group: {
    width: 274,
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 72,
    marginLeft: 14,
  },
  ellipse: {
    width: 51,
    height: 51,
  },
  ellipse1: {
    width: 51,
    height: 51,
  },
  ellipse2: {
    width: 51,
    height: 51,
  },
  ellipse3: {
    width: 51,
    height: 51,
  },
  rect3: {
    width: 245,
    height: 52,
    backgroundColor: "rgba(22,81,95,1)",
    borderRadius: 100,
    marginTop: 25,
    marginLeft: 28,
  },
  verify: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "Poppins-Regular",
    marginTop: 12,
    marginLeft: 92,
  },
  loremIpsum: {
    color: "rgba(22,81,95,1)",
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    marginTop: 45,
    marginLeft: 45,
  },
  rect1Stack: {
    width: "100%",
    height: 626,
  },
});
