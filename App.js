/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing,
  PanResponder
} from 'react-native';

import Header from './js/header';

import Signin from './js/signin';

import Home from './js/home';

import Home2 from './js/home2';

import BubbleMenu from './js/bubblemenu';

import DragMenu from './js/dragmenu';

import DeckSwiper from './js/deckswiper';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

const config = {
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0,
    },
  }),
}

const AppStack = createBottomTabNavigator(
  {
    Signin: {
      screen: Signin,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Home2: {
      screen: Home2,
      navigationOptions: {
        tabBarVisible: false
      }
    },
  },
  config
);

const App = createAppContainer(AppStack);

export default App;
