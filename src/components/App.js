import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  render() {
    console.log("Props", this.props);
    return <div>Hello World !!</div>;
  }
}

function mapStateToProps(calender) {
  const dayOrder = [
    "sunday",
    "monday",
    "tueday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];

  return {
    calender: dayOrder.map(day => ({
      day,
      meals: Object.keys(calender[day]).reduce((meals, meal) => {
        meals[day] = calender[day][meal] ? calender[day][meal] : null;
        return meals;
      }, {})
    }))
  };
}

export default connect(mapStateToProps)(App);
