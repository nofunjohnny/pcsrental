import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import { WebView } from "react-native";

export default class SalesScreen extends React.Component {
  static navigationOptions = {
    title: "Sales"
  };

  render() {
    return (
      <WebView
        source={{ uri: "http://portablecoolingsystems.com/news-blog/" }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
