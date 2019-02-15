/*Example to make a call from the React Native App*/
import React from "react";
import { TouchableOpacity, View, StyleSheet, Button, Image } from "react-native";
import call from "react-native-phone-call";

export default class App extends React.Component {
  static navigationOptions = {
    title: "Emergency Rental Page"
  };
  call = () => {
    //handler to make a call
    const args = {
      number: "7136617077",
      prompt: false
    };

    call(args).catch(console.error);
  };
  render() {
    return (
      <View style={styles.container}>
        
        <TouchableOpacity
        style={styles.welcomeImage}
        onPress={this.call}
        ><Image
        source={
          __DEV__
            ? require("../assets/images/hotline.png")
            : require("../assets/images/hotline.png")
        }
        style={styles.welcomeImage}
      /></TouchableOpacity>
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  welcomeImage: {
    width: 366,
    height: 196,

    
  }
});
