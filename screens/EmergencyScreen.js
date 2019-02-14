/*Example to make a call from the React Native App*/
import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import call from 'react-native-phone-call';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Emergency Rental Page',
  };
  call = () => {
    //handler to make a call
    const args = {
      number: '7136617077',
      prompt: false,
    };

    call(args).catch(console.error);
  };
  render() {
    return (
      <View style={styles.container}>
        <Button title="Call Us Now" onPress={this.call} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C3DEE2',
  },
});
