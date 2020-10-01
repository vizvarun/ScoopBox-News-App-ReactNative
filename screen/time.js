import React, { Component } from "react";
import { Text } from "native-base";
import moment from "moment";

class Time extends Component {
  constructor(props) {
    super(props);
    this.date = props.time;
  }

  render() {
    const time = moment(this.date || moment.now()).fromNow();
    return (
      <Text note style={{ marginHorizontal: 10, fontFamily: "Poppins-Light" }}>
        {time}
      </Text>
    );
  }
}

export default Time;