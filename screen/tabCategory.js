import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  View,
  StatusBar,
  ScrollableTab,
} from "native-base";
import TabTrending from "./tabTrending";
import TabTech from "./tabTech";
import TabSports from "./tabSports";
import TabBusiness from "./tabBusiness";
import TabEntertainment from "./tabEntertainment";
import TabPolitics from "./tabPolitics";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

let customFonts = {
  "Poppins-Regular": require("../assets/fonts/Poppins-Regular.otf"),
  "Poppins-Light": require("../assets/fonts/Poppins-Light.otf"),
  "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.otf"),
  "Poppins-Bold": require("../assets/fonts/Poppins-Bold.otf"),
  "Roboto-medium": require("../assets/fonts/Poppins-Medium.otf"),
};

export default class Tabscategory extends Component {
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
        <Container>
          <Tabs renderTabBar={() => <ScrollableTab />}>
            <Tab
              style={{
                backgroundColor: "#2f2d40",
                fontFamily: "Poppins-Regular",
              }}
              heading="Trending"
              tabStyle={{ backgroundColor: "#16151f" }}
              activeTabStyle={{ backgroundColor: "#16151f" }}
              textStyle={{ color: "#f4f4f4", fontFamily: "Poppins-Regular" }}
              activeTextStyle={{
                color: "#f4f4f4",
                fontFamily: "Poppins-Regular",
              }}
            >
              <TabTrending />
            </Tab>
            <Tab
              style={{ backgroundColor: "#f4f4f4" }}
              heading="Technology"
              tabStyle={{ backgroundColor: "#16151f" }}
              activeTabStyle={{ backgroundColor: "#16151f" }}
              textStyle={{ color: "#f4f4f4", fontFamily: "Poppins-Regular" }}
              activeTextStyle={{
                color: "#f4f4f4",
                fontFamily: "Poppins-Regular",
              }}
            >
              <TabTech />
            </Tab>
            <Tab
              style={{ backgroundColor: "#f4f4f4" }}
              heading="Sports & Fitness"
              tabStyle={{ backgroundColor: "#16151f" }}
              activeTabStyle={{ backgroundColor: "#16151f" }}
              textStyle={{ color: "#f4f4f4", fontFamily: "Poppins-Regular" }}
              activeTextStyle={{
                color: "#f4f4f4",
                fontFamily: "Poppins-Regular",
              }}
            >
              <TabSports />
            </Tab>
            <Tab
              style={{ backgroundColor: "#f4f4f4" }}
              heading="Politics"
              tabStyle={{ backgroundColor: "#16151f" }}
              activeTabStyle={{ backgroundColor: "#16151f" }}
              textStyle={{ color: "#f4f4f4", fontFamily: "Poppins-Regular" }}
              activeTextStyle={{
                color: "#f4f4f4",
                fontFamily: "Poppins-Regular",
              }}
            >
              <TabPolitics />
            </Tab>
            <Tab
              style={{ backgroundColor: "#f4f4f4" }}
              heading="Business"
              tabStyle={{ backgroundColor: "#16151f" }}
              activeTabStyle={{ backgroundColor: "#16151f" }}
              textStyle={{ color: "#f4f4f4", fontFamily: "Poppins-Regular" }}
              activeTextStyle={{
                color: "#f4f4f4",
                fontFamily: "Poppins-Regular",
              }}
            >
              <TabBusiness />
            </Tab>
            <Tab
              style={{ backgroundColor: "#f4f4f4" }}
              heading="Entertainment"
              tabStyle={{ backgroundColor: "#16151f" }}
              activeTabStyle={{ backgroundColor: "#16151f" }}
              textStyle={{ color: "#f4f4f4", fontFamily: "Poppins-Regular" }}
              activeTextStyle={{
                color: "#f4f4f4",
                fontFamily: "Poppins-Regular",
              }}
            >
              <TabEntertainment />
            </Tab>
          </Tabs>
        </Container>
      );
    } else {
      return <AppLoading />;
    }
  }
}
