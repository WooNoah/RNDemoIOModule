/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Text, View, Animated } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
// import (./FadeInView);
// import FadeInView from './FadeInView';
import SettingPage from './SettingPage';
import HomeScreen from './HomeScreen';

// const FadeInViewInstance = <FadeInView />;
// const SettingPageInstance = new SettingPage();
// const HomeScreenInstance = new HomeScreen();

// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Home',
//   };
//
//   render () {
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//
//       </View>
//     );
//   }
// }

// class SesttingPage extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return(
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text>Setting Page</Text>
//       </View>
//     );
//   }
// }

const AppNavigator = createStackNavigator(
  {
    Home: {
        screen: HomeScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

const SettingStack = createStackNavigator({
  SettingPage: SettingPage,
});

const RootStack = createBottomTabNavigator (
  {
    Root: AppNavigator,
    Setting: SettingStack,
  },
);

export default createAppContainer(RootStack);
