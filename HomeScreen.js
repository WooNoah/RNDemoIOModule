import React, {Component} from 'react';
import {
  Text,
  View,
} from 'react-native';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}

export default HomeScreen;
