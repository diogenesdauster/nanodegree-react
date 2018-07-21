import React from "react";
import { View, Text, StyleSheet, Slider } from "react-native";
import AddEntry from "./components/AddEntry";
import { createStore } from "redux";
import { Provider } from "react-redux";
import recuder from "./recuders";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(recuder)}>
        <View>
          <AddEntry />
        </View>
      </Provider>
    );
  }
}
