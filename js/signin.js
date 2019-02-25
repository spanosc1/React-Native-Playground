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

import LottieView from 'lottie-react-native';

import Ionicon from 'react-native-vector-icons/dist/Ionicons';

import AntIcon from 'react-native-vector-icons/dist/AntDesign';

import gVal from './globalvalues';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const loading = require('./../img/animation-w200-h200.json');

type Props = {};
class Signin extends React.Component {
  state = {
    username: '',
    password: '',
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1),
    loadingScale: new Animated.Value(0.3),
    loadingOpacity: new Animated.Value(0),
    buttonScale: new Animated.Value(1),
    buttonShadow: new Animated.Value(6),
    buttonShadowOpacity: new Animated.Value(0.2),
  };

  componentDidMount() {
    
  }

  render() {
    
    return (
      <Animated.View style={[styles.container, {transform: [{scale: this.state.scale}], opacity: this.state.opacity}]}>
        <KeyboardAvoidingView behavior={'position'}>
          <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
            <LinearGradient
              style={styles.gradient}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              colors={[gVal.p1.h, gVal.p2.h, gVal.p3.h]}
            >
              <View style={styles.titleSection}>
                <Ionicon name={'md-bonfire'} size={80} color={gVal.p5.h}/>
                <Text style={styles.logoText}>
                  AppName
                </Text>
                <Animated.View style={[styles.loadingView, {transform: [{scale: this.state.loadingScale}], opacity: this.state.loadingOpacity}]}>
                  <LottieView
                    style={styles.loading}
                    ref={animation => {
                      this.animation = animation;
                    }}
                    speed={1}
                    source={loading}
                  />
                </Animated.View>
              </View>
              <View style={styles.inputSection}>
                <View style={styles.inputContainer}>
                  <AntIcon style={styles.inputIcon} name={'user'} size={24} color={gVal.p5.h}/>
                  <TextInput
                    placeholder="Username"
                    placeholderTextColor={gVal.p5.h}
                    selectionColor={gVal.p4.h}
                    value={this.state.username}
                    onChangeText={(username) => this.setState({username})}
                    style={styles.input}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <AntIcon style={styles.inputIcon} name={'lock'} size={24} color={gVal.p5.h}/>
                  <TextInput
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor={gVal.p5.h}
                    selectionColor={gVal.p4.h}
                    value={this.state.password}
                    onChangeText={(password) => this.setState({password})}
                    style={styles.input}
                  />
                </View>
                <TouchableOpacity
                  activeOpacity={this.state.username == '' || this.state.password == '' ? 0.9 : 0.7}
                  onPressIn={() => this.animateIn()}
                  onPressOut={() => this.animateOut()}
                  onPress={() => this.signIn()}
                >
                  <Animated.View style={[styles.signInButton, {transform: [{scale: this.state.buttonScale}], shadowRadius: this.state.buttonShadow, shadowOpacity: this.state.buttonShadowOpacity}]}>
                    <Text style={this.state.username == '' || this.state.password == '' ?
                      styles.signInTextInactive : styles.signInTextActive}
                    >
                      Sign In
                    </Text>
                  </Animated.View>
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

  animateIn() {
    Animated.parallel([
      Animated.timing(
        this.state.buttonScale,
        {
          toValue: 0.95,
          duration: 150,
          Easing: Easing.out(Easing.quad())
        }
      ),
      Animated.timing(
        this.state.buttonShadow,
        {
          toValue: 3,
          duration: 150,
          Easing: Easing.out(Easing.quad())
        }
      ),
      Animated.timing(
        this.state.buttonShadowOpacity,
        {
          toValue: 0.4,
          duration: 150,
          Easing: Easing.out(Easing.quad())
        }
      )
    ]).start();
  }

  animateOut() {
    Animated.parallel([
      Animated.timing(
        this.state.buttonScale,
        {
          toValue: 1,
          duration: 150,
          Easing: Easing.out(Easing.bounce())
        }
      ),
      Animated.timing(
        this.state.buttonShadow,
        {
          toValue: 6,
          duration: 150,
          Easing: Easing.out(Easing.bounce())
        }
      ),
      Animated.timing(
        this.state.buttonShadowOpacity,
        {
          toValue: 0.2,
          duration: 150,
          Easing: Easing.out(Easing.quad())
        }
      )
    ]).start();
  }

  signIn() {
    if(this.state.username != '' && this.state.password != '')
    {
      this.animation.play();
      Animated.parallel([
        Animated.timing(
          this.state.loadingScale,
          {
            toValue: 1.0,
            duration: 150,
            Easing: Easing.out(Easing.elastic())
          }
        ),
        Animated.timing(
          this.state.loadingOpacity,
          {
            toValue: 1.0,
            duration: 150,
            Easing: Easing.out(Easing.elastic())
          }
        )
      ]).start();
      setTimeout(() => {
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
        ]).start(() => {
          this.props.navigation.navigate('Home');
        });
      }, 1500);
    }
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
    flex: 5,
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
    color: gVal.p5.h,
    fontFamily: 'Gotham-Light',
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: gVal.p5.h,
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
    color: gVal.p5.h,
  },
  signInButton: {
    backgroundColor: gVal.p5.h,
    borderRadius: 30,
    margin: 12,
    padding: 12,
    alignItems: 'center',
    elevation: 1,
    shadowOffset:{  width: 0,  height: 2,  },
    shadowColor: 'black',
  },
  signInTextInactive: {
    fontFamily: 'Gotham-Light',
    fontSize: 18,
    color: gVal.p4.h,
  },
  signInTextActive: {
    fontFamily: 'Gotham-Light',
    fontSize: 18,
    color: gVal.p1.h,
  },
  forgotButton: {
    alignItems: 'center',
    padding: 5,
  },
  forgotText: {
    fontFamily: 'Gotham-Light',
    fontSize: 14,
    color: gVal.p5.h
  },
  signUpButton: {
    width: deviceWidth/1.6,
    borderColor: gVal.p5.h,
    borderWidth: 1.5,
    borderRadius: 30,
    margin: 12,
    padding: 12,
    alignItems: 'center',    
  },
  signUpText: {
    fontFamily: 'Gotham-Light',
    fontSize: 18,
    color: gVal.p5.h
  },
  loadingView: {
    position: 'absolute',
    bottom: 20,
  },
  loading: {
    height: 70,
    width: 70,
  },
});

export default Signin;