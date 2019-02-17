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

import Header from './header';

import Signin from './signin';

import Home from './home';

import BubbleMenu from './bubblemenu';

import DragMenu from './dragmenu';

import DeckSwiper from './deckswiper';

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
    }
  },
  config
);

const App = createAppContainer(AppStack);

export default App;
