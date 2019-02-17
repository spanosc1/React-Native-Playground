import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing,
  Image,
  PanResponder
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import gVal from './globalvalues';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

var image = require('./img/ke7_master.jpg');

var cardTiming = 500;

type Props = {};
class Home extends React.Component {
  state = {
    scale: new Animated.Value(1.1),
    opacity: new Animated.Value(0),
    translate1: new Animated.Value(60),
    translate2: new Animated.Value(60),
    translate3: new Animated.Value(60),
    translate4: new Animated.Value(60),
    translate5: new Animated.Value(60),
    opacity1: new Animated.Value(0.0),
    opacity2: new Animated.Value(0.0),
    opacity3: new Animated.Value(0.0),
    opacity4: new Animated.Value(0.0),
    opacity5: new Animated.Value(0.0),
  };

  componentDidMount() {
    Animated.parallel([
      Animated.timing(
        this.state.scale,
        {
          toValue: 1.0,
          duration: 200,
        }
      ),
      Animated.timing(
        this.state.opacity,
        {
          toValue: 1,
          duration: 200,
        }
      )
    ]).start(() => {

    });
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(
          this.state.translate1,
          {
            toValue: 0,
            duration: cardTiming,
            easing: Easing.out(Easing.quad)
          }
        ),
        Animated.timing(
          this.state.opacity1,
          {
            toValue: 1,
            duration: cardTiming,
            easing: Easing.out(Easing.quad)
          }
        )
      ]).start(() => {

      });
    }, 200);
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(
          this.state.translate2,
          {
            toValue: 0,
            duration: cardTiming,
            easing: Easing.out(Easing.quad)
          }
        ),
        Animated.timing(
          this.state.opacity2,
          {
            toValue: 1,
            duration: cardTiming,
            easing: Easing.out(Easing.quad)
          }
        )
      ]).start(() => {

      });
    }, 350);
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(
          this.state.translate3,
          {
            toValue: 0,
            duration: cardTiming,
            easing: Easing.out(Easing.quad)
          }
        ),
        Animated.timing(
          this.state.opacity3,
          {
            toValue: 1,
            duration: cardTiming,
            easing: Easing.out(Easing.quad)
          }
        )
      ]).start(() => {

      });
    }, 500);
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(
          this.state.translate4,
          {
            toValue: 0,
            duration: cardTiming,
            easing: Easing.out(Easing.quad)
          }
        ),
        Animated.timing(
          this.state.opacity4,
          {
            toValue: 1,
            duration: cardTiming,
            easing: Easing.out(Easing.quad)
          }
        )
      ]).start(() => {

      });
    }, 650);
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(
          this.state.translate5,
          {
            toValue: 0,
            duration: cardTiming,
            easing: Easing.out(Easing.quad)
          }
        ),
        Animated.timing(
          this.state.opacity5,
          {
            toValue: 1,
            duration: cardTiming,
            easing: Easing.out(Easing.quad)
          }
        )
      ]).start(() => {

      });
    }, 800);
  }

  render() {
    
    return (
      <Animated.View style={[styles.container, {transform: [{scale: this.state.scale}], opacity: this.state.opacity}]}>
        <LinearGradient
          style={styles.gradient}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={[gVal.p4.h, gVal.p3.h, gVal.p2.h]}
        >
          <View style={styles.header}>
            
          </View>
          <ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
          >
            <Animated.View style={[styles.card, {transform: [{translateY: this.state.translate1}], opacity: this.state.opacity1}]}>
              <Text style={styles.cardTitle}>
                Weather
              </Text>
            </Animated.View>
            <Animated.View style={[styles.card, {transform: [{translateY: this.state.translate2}], opacity: this.state.opacity2}]}>
            </Animated.View>
            <Animated.View style={[styles.card, {transform: [{translateY: this.state.translate3}], opacity: this.state.opacity3}]}>
            </Animated.View>
            <Animated.View style={[styles.card, {transform: [{translateY: this.state.translate4}], opacity: this.state.opacity4}]}>
            </Animated.View>
            <Animated.View style={[styles.card, {transform: [{translateY: this.state.translate5}], opacity: this.state.opacity5}]}>
            </Animated.View>
                        
          </ScrollView>
          <View style={styles.footer}>
            
          </View>
        </LinearGradient>
      </Animated.View>
    );
  }
}

//backgroundColor: 'rgba('+gVal.p1.r+','+gVal.p1.g+','+gVal.p1.b+',0.7)'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  header: {
    height: 80,
    width: deviceWidth,
  },
  footer: {
    height: 80,
    width: deviceWidth,
  },
  gradient: {
    width: deviceWidth,
    paddingBottom: 160,
  },
  card: {
    backgroundColor: 'rgba(240, 248, 255,0.8)',
    minHeight: deviceWidth/2,
    width: deviceWidth - 24,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 6,
    marginBottom: 6,
    borderRadius: 10,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    shadowOffset:{  width: 0,  height: 2,  },
    shadowRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  cardTitle: {
    fontFamily: 'Gotham-Light',
    fontSize: 18,
    color: gVal.p1.h,
  },
});

export default Home;