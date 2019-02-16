import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  Animated,
  Easing,
  Image,
  PanResponder
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Ionicon from 'react-native-vector-icons/dist/Ionicons';

import AntIcon from 'react-native-vector-icons/dist/AntDesign';

import gVal from './globalvalues';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

type Props = {};
class Home extends React.Component {
  state = {
    username: '',
    password: '',
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1),
  };

  render() {
    
    return (
      <Animated.View style={[styles.container, {transform: [{scale: this.state.scale}], opacity: this.state.opacity}]}>
        <KeyboardAvoidingView behavior={'position'}>
          <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
            <LinearGradient
              style={styles.gradient}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              colors={[gVal.p1, gVal.p2, gVal.p3]}
            >
              <View style={styles.titleSection}>
                <Ionicon name={'md-bonfire'} size={80} color={gVal.p5}/>
                <Text style={styles.logoText}>
                  AppName
                </Text>
              </View>
              <View style={styles.inputSection}>
                <View style={styles.inputContainer}>
                  <AntIcon style={styles.inputIcon} name={'user'} size={24} color={gVal.p5}/>
                  <TextInput
                    placeholder="Username"
                    placeholderTextColor={gVal.p5}
                    style={styles.input}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <AntIcon style={styles.inputIcon} name={'lock'} size={24} color={gVal.p5}/>
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor={gVal.p5}
                    style={styles.input}
                  />
                </View>
                <TouchableOpacity onPress={() => this.signIn()} style={styles.signInButton}>
                  <Text style={styles.signInText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.forgotButton}>
                  <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomSection}>
                <TouchableOpacity style={styles.signUpButton}>
                  <Text style={styles.signUpText}>Create Account</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </ScrollView>
        </KeyboardAvoidingView>
      </Animated.View>
    );
  }

  signIn() {
    Animated.parallel([
      Animated.timing(
        this.state.scale,
        {
          toValue: 1.1,
          duration: 200,
          Easing: Easing.out(Easing.quad())
        }
      ),
      Animated.timing(
        this.state.opacity,
        {
          toValue: 0,
          duration: 200,
          Easing: Easing.out(Easing.quad())
        }
      )
    ]).start();
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  gradient: {
    height: deviceHeight,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  titleSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 4,
  },
  inputSection: {
    flex: 3,
  },
  bottomSection: {
    flex: 1,
  },
  logoText: {
    marginLeft: 15,
    fontSize: 36,
    color: gVal.p5,
    fontFamily: 'Gotham-Light',
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: gVal.p5,
    paddingBottom: 8,
    margin: 12,
    width: deviceWidth/1.6,
  },
  inputIcon: {
    flex: 1,
  },
  input: {
    flex: 6,
    fontFamily: 'Gotham-Light',
    fontSize: 18,
    color: gVal.p5,
  },
  signInButton: {
    backgroundColor: gVal.p5,
    borderRadius: 30,
    margin: 12,
    padding: 12,
    alignItems: 'center',
    elevation: 1,
  },
  signInText: {
    fontFamily: 'Gotham-Light',
    fontSize: 18,
    color: gVal.p1,
  },
  forgotButton: {
    alignItems: 'center',
    padding: 5,
  },
  forgotText: {
    fontFamily: 'Gotham-Light',
    fontSize: 14,
    color: gVal.p5
  },
  signUpButton: {
    width: deviceWidth/1.6,
    borderColor: gVal.p5,
    borderWidth: 1.5,
    borderRadius: 30,
    margin: 12,
    padding: 12,
    alignItems: 'center',    
  },
  signUpText: {
    fontFamily: 'Gotham-Light',
    fontSize: 18,
    color: gVal.p5
  },
});

export default Home;