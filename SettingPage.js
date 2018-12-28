import React,{Component} from 'react';
import {Text, View} from 'react-native';

class SesttingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Setting Page</Text>
      </View>
    );
  }
}

export default SesttingPage;
