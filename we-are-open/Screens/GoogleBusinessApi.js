import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import firebase from "firebase";
import { Card, Button, Icon } from "react-native-elements";
//import { GoogleSignin, GoogleSigninButton } from "react-native-google-signin";

export default class GoogleBusinessApi extends React.Component {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2f2d30",
    flex: 1
  },
  color: {
    backgroundColor: "#2f2d30"
  },

  input: {
    margin: 8,
    height: 40,
    borderColor: "rgba(92, 99,216, 1)",
    borderWidth: 2,
    borderRadius: 5
  },

  input_paswd: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1
  },

  submitButton: {
    padding: 1,
    margin: 15,
    height: 40
  },
  submitButtonText: {
    color: "white"
  }
});
