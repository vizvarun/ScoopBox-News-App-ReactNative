import React, { Component } from "react";
import {
  Text,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
  Header,
  View,
} from "native-base";
import { StyleSheet, StatusBar } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import TimeAgo from "./time";
import ModalComponent from "./modal";

let customFonts = {
  "Poppins-Regular": require("../assets/fonts/Poppins-Regular.otf"),
  "Poppins-Light": require("../assets/fonts/Poppins-Light.otf"),
  "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.otf"),
  "Poppins-Bold": require("../assets/fonts/Poppins-Bold.otf"),
  "Poppins-Medium": require("../assets/fonts/Poppins-Medium.otf"),
  Roboto_medium: require("../assets/fonts/Poppins-Medium.otf"),
};

export default class DataItem extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

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

  handlePress = () => {
    const { url, title } = this.data;
    this.props.onPress({ url, title });
  };

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.news}>
          <StatusBar
            barStyle="default-content"
            hidden={false}
            backgroundColor="#121212"
            translucent={true}
          />
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                style={{ width: 100, height: 100, borderRadius: 10 }}
                source={{
                  uri:
                    this.data.urlToImage != null
                      ? this.data.urlToImage
                      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=",
                }}
              />
            </Left>
            <Body>
              <Text style={styles.title} note numberOfLines={2}>
                {this.data.title}
              </Text>
              <Text style={styles.description} note numberOfLines={2}>
                {this.data.description}
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  marginTop: 8,
                  marginLeft: 0,
                }}
              >
                <Text style={{ fontFamily: "Poppins-Light" }} note>
                  {this.data.source.name}
                </Text>
                <TimeAgo time={this.data.publishedAt} />
              </View>
            </Body>
            <Right>
              <Button
                transparent
                style={styles.view}
                onPress={this.handlePress}
              >
                <Text style={styles.viewtext}>View</Text>
              </Button>
            </Right>
          </ListItem>
        </View>
      );
    } else {
      return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  viewtext: {
    color: "#16151f",
  },
  view: {
    backgroundColor: "#f4f4f4",
    borderRadius: 7,
    marginLeft: 5,
  },
  title: {
    fontFamily: "Poppins-Medium",
    color: "#f4f4f4",
    fontSize: 15,
  },
  description: {
    fontFamily: "Poppins-Light",
    color: "#c4c4c4",
  },
  news: {
    backgroundColor: "#2f2d40",
  },
});
