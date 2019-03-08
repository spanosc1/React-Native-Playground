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

var buttonDelay = 150;

type Props = {};
class Home2 extends React.Component {
  state = {
    scale: new Animated.Value(1.1),
    opacity: new Animated.Value(0),

    buttonScale1: new Animated.Value(0.3),
    buttonScale2: new Animated.Value(0.3),
    buttonScale3: new Animated.Value(0.3),
    buttonScale4: new Animated.Value(0.3),
    buttonScale5: new Animated.Value(0.3),
    buttonScale6: new Animated.Value(0.3),
    buttonScale7: new Animated.Value(0.3),
    buttonScale8: new Animated.Value(0.3),
    buttonScale9: new Animated.Value(0.3),

    buttonOpacity1: new Animated.Value(0),
    buttonOpacity2: new Animated.Value(0),
    buttonOpacity3: new Animated.Value(0),
    buttonOpacity4: new Animated.Value(0),
    buttonOpacity5: new Animated.Value(0),
    buttonOpacity6: new Animated.Value(0),
    buttonOpacity7: new Animated.Value(0),
    buttonOpacity8: new Animated.Value(0),
    buttonOpacity9: new Animated.Value(0),

    translateMain: new Animated.Value(0),
    rotateY: new Animated.Value(0),
    sideScale: new Animated.Value(1),
    translateSide: new Animated.Value(deviceWidth*4/5 + 60),
    overlayOpacity: new Animated.Value(0),

    overlayShow: false,
  };

  componentDidMount() {
    Animated.parallel([
      Animated.timing(
        this.state.scale,
        {
          toValue: 1.0,
          duration: 500,
          //easing: Easing.out((t) => t*t*t*t)
        }
      ),
      Animated.timing(
        this.state.opacity,
        {
          toValue: 1,
          duration: 500,
          //easing: Easing.out((t) => t*t*t*t)
        }
      ),
      Animated.timing(
        this.state.buttonScale1,
        {
          toValue: 1,
          delay: 400,
          duration: 600,
          easing: Easing.elastic()
        }
      ),
      Animated.timing(
        this.state.buttonOpacity1,
        {
          toValue: 1,
          delay: 400,
          duration: 600,
          easing: Easing.elastic()
        }
      ),
      Animated.timing(
        this.state.buttonScale2,
        {
          toValue: 1,
          delay: 400 + (1 * buttonDelay),
          duration: 600,
          easing: Easing.elastic()
        }
      ),
      Animated.timing(
        this.state.buttonOpacity2,
        {
          toValue: 1,
          delay: 400 + (1 * buttonDelay),
          duration: 600,
          easing: Easing.elastic()
        }
      ),
      Animated.timing(
        this.state.buttonScale3,
        {
          toValue: 1,
          delay: 400 + (2 * buttonDelay),
          duration: 600,
          easing: Easing.elastic()
        }
      ),
      Animated.timing(
        this.state.buttonOpacity3,
        {
          toValue: 1,
          delay: 400 + (2 * buttonDelay),
          duration: 600,
          easing: Easing.elastic()
        }
      ),
      Animated.timing(
        this.state.buttonScale4,
        {
          toValue: 1,
          delay: 400 + (3 * buttonDelay),
          duration: 600,
          easing: Easing.elastic()
        }
      ),
      Animated.timing(
        this.state.buttonOpacity4,
        {
          toValue: 1,
          delay: 400 + (3 * buttonDelay),
          duration: 600,
          easing: Easing.elastic()
        }
      ),
      Animated.timing(
        this.state.buttonScale5,
        {
          toValue: 1,
          delay: 400 + (4 * buttonDelay),
          duration: 600,
          easing: Easing.elastic()
        }
      ),
      Animated.timing(
        this.state.buttonOpacity5,
        {
          toValue: 1,
          delay: 400 + (4 * buttonDelay),
          duration: 600,
          easing: Easing.elastic()
        }
      ),
      Animated.timing(
        this.state.buttonScale6,
        {
          toValue: 1,
          delay: 400 + (5 * buttonDelay),
          duration: 600,
          easing: Easing.elastic()
        }
      ),
      Animated.timing(
        this.state.buttonOpacity6,
        {
          toValue: 1,
          delay: 400 + (5 * buttonDelay),
          duration: 600,
          easing: Easing.elastic()
        }
      ),
      Animated.timing(
        this.state.buttonScale7,
        {
          toValue: 1,
          delay: 400 + (6 * buttonDelay),
          duration: 600,
          easing: Easing.elastic()
        }
      ),
      Animated.timing(
        this.state.buttonOpacity7,
        {
          toValue: 1,
          delay: 400 + (6 * buttonDelay),
          duration: 600,
          easing: Easing.elastic()
        }
      ),
      Animated.timing(
        this.state.buttonScale8,
        {
          toValue: 1,
          delay: 400 + (7 * buttonDelay),
          duration: 600,
          easing: Easing.elastic()
        }
      ),
      Animated.timing(
        this.state.buttonOpacity8,
        {
          toValue: 1,
          delay: 400 + (7 * buttonDelay),
          duration: 600,
          easing: Easing.elastic()
        }
      ),
      Animated.timing(
        this.state.buttonScale9,
        {
          toValue: 1,
          delay: 400 + (8 * buttonDelay),
          duration: 600,
          easing: Easing.elastic()
        }
      ),
      Animated.timing(
        this.state.buttonOpacity9,
        {
          toValue: 1,
          delay: 400 + (8 * buttonDelay),
          duration: 600,
          easing: Easing.elastic()
        }
      ),
    ]).start(() => {

    });
  }

  animateMenuIn() {
    this.setState({overlayShow: true});
    Animated.parallel([
      Animated.timing(
        this.state.rotateY,
        {
          toValue: 1,
          duration: 400,
          easing: Easing.out((t) => t*t*t*t*t*t*t*t)
        }
      ),
      Animated.timing(
        this.state.sideScale,
        {
          toValue: 0.9,
          duration: 400,
          easing: Easing.out((t) => t*t*t*t*t*t*t*t)
        }
      ),
      Animated.timing(
        this.state.translateMain,
        {
          toValue: -30,
          duration: 400,
          easing: Easing.out((t) => t*t*t*t*t*t*t*t)
        }
      ),
      Animated.timing(
        this.state.translateSide,
        {
          toValue: 0,
          delay: 100,
          duration: 400,
          easing: Easing.out((t) => t*t*t*t*t*t*t*t)
        }
      ),
      Animated.timing(
        this.state.overlayOpacity,
        {
          toValue: 0.3,
          delay: 100,
          duration: 400,
          easing: Easing.out((t) => t*t*t*t*t*t*t*t)
        }
      )
    ]).start();
  }

  animateMenuOut() {
    Animated.parallel([
      Animated.timing(
        this.state.translateSide,
        {
          toValue: deviceWidth*4/5 + 30,
          duration: 400,
          easing: Easing.out((t) => t*t*t*t*t*t*t*t)
        }
      ),
      Animated.timing(
        this.state.overlayOpacity,
        {
          toValue: 0,
          duration: 400,
          easing: Easing.out((t) => t*t*t*t*t*t*t*t)
        }
      ),
      Animated.timing(
        this.state.rotateY,
        {
          toValue: 0,
          delay: 100,
          duration: 400,
          easing: Easing.out((t) => t*t*t*t*t*t*t*t)
        }
      ),
      Animated.timing(
        this.state.sideScale,
        {
          toValue: 1,
          delay: 100,
          duratin: 400,
          easing: Easing.out((t) => t*t*t*t*t*t*t*t)
        }
      ),
      Animated.timing(
        this.state.translateMain,
        {
          toValue: 0,
          delay: 100,
          duratin: 400,
          easing: Easing.out((t) => t*t*t*t*t*t*t*t)
        }
      )
    ]).start(() => {
      this.setState({overlayShow: false});
    });
  }

  render() {
    const rotateY = this.state.rotateY.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '20deg']
    });
    return (
      <Animated.View style={[styles.container, {
        transform: [
          { scale: this.state.scale },
        ],
        opacity: this.state.opacity
      }]}>
        <LinearGradient 
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={[gVal.p5.h, gVal.p5.h]}
          style={styles.container}
        >
          {this.state.overlayShow &&
            <Animated.View style={{zIndex: 9998, position: 'absolute', opacity: this.state.overlayOpacity, backgroundColor: '#333333'}}>
              <TouchableOpacity onPress={() => this.animateMenuOut()} activeOpacity={0.3} style={{height: deviceHeight, width: deviceWidth}}>
              </TouchableOpacity>
            </Animated.View>
          }
          <Animated.View style={[styles.container, {
            transform: [
              { scale: this.state.sideScale },
              { perspective: 1000 },
              { translateX: this.state.translateMain },
              { rotateY: rotateY },
            ]
          }]}>
            <LinearGradient
              style={styles.gradient}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              colors={[gVal.p1.h, gVal.p2.h, gVal.p3.h]}
            >
              <View style={{alignItems: 'center', transform: [{scaleX: 0.5}]}}>
                <View style={styles.header}>
                  <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Profile</Text>
                  </View>
                  <TouchableOpacity onPress={() => this.animateMenuIn()} style={styles.barsContainer}>
                    <View style={styles.bar1}>
                    </View>
                    <View style={styles.bar2}>
                    </View>
                    <View style={styles.bar3}>
                    </View>
                  </TouchableOpacity>
                </View>
                <Text style={{fontSize: 70, bottom: -110, left: 22, color: gVal.p5.h, fontFamily: 'Gotham-Light'}}>
                  54{'\u00B0'}<Text style={{fontSize: 30}}>F</Text>
                </Text>
              </View>
            </LinearGradient>
            <View style={styles.contentContainer}>
              <View style={styles.buttonRow}>
                <Animated.View style={[styles.buttonContainer, {opacity: this.state.buttonOpacity1, transform: [{scale: this.state.buttonScale1}]}]}>
                </Animated.View>
                <Animated.View style={[styles.buttonContainer, {opacity: this.state.buttonOpacity2, transform: [{scale: this.state.buttonScale2}]}]}>
                </Animated.View>
                <Animated.View style={[styles.buttonContainer, {opacity: this.state.buttonOpacity3, transform: [{scale: this.state.buttonScale3}]}]}>
                </Animated.View>
              </View>
              <View style={styles.buttonRow}>
                <Animated.View style={[styles.buttonContainer, {opacity: this.state.buttonOpacity4, transform: [{scale: this.state.buttonScale4}]}]}>
                </Animated.View>
                <Animated.View style={[styles.buttonContainer, {opacity: this.state.buttonOpacity5, transform: [{scale: this.state.buttonScale5}]}]}>
                </Animated.View>
                <Animated.View style={[styles.buttonContainer, {opacity: this.state.buttonOpacity6, transform: [{scale: this.state.buttonScale6}]}]}>
                </Animated.View>
              </View>
              <View style={styles.buttonRow}>
                <Animated.View style={[styles.buttonContainer, {opacity: this.state.buttonOpacity7, transform: [{scale: this.state.buttonScale7}]}]}>
                </Animated.View>
                <Animated.View style={[styles.buttonContainer, {opacity: this.state.buttonOpacity8, transform: [{scale: this.state.buttonScale8}]}]}>
                </Animated.View>
                <Animated.View style={[styles.buttonContainer, {opacity: this.state.buttonOpacity9, transform: [{scale: this.state.buttonScale9}]}]}>
                </Animated.View>
              </View>
            </View>
          </Animated.View>
          <Animated.View style={[styles.sideMenu, {transform: [{translateX: this.state.translateSide}]}]}>
            <LinearGradient 
              style={styles.sideGradient}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              colors={[gVal.p3.h, gVal.p2.h, gVal.p1.h]}
            >
            </LinearGradient>
          </Animated.View>
        </LinearGradient>
      </Animated.View>
    );
  }
}

//backgroundColor: 'rgba('+gVal.p1.r+','+gVal.p1.g+','+gVal.p1.b+',0.7)'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    top: 100,
    height: 80,
    width: deviceWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTextView: {
    justifyContent: 'flex-end',
    padding: 15,
  },
  headerText: {
    fontFamily: 'Gotham-Light',
    fontSize: 20,
    color: gVal.p5.h,
  },
  barsContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 15,
  },
  bar1: {
    width: 18,
    height: 2,
    borderRadius: 1,
    backgroundColor: gVal.p5.h,
    marginBottom: 5,
  },
  bar2: {
    width: 14,
    height: 2,
    borderRadius: 1,
    backgroundColor: gVal.p5.h,
    marginBottom: 5,
  },
  bar3: {
    width: 22,
    height: 2,
    borderRadius: 1,
    backgroundColor: gVal.p5.h,
  },
  footer: {
    height: 80,
    width: deviceWidth,
  },
  gradient: {
    marginTop: -100,
    height: deviceHeight/3,
    width: deviceWidth,
    borderBottomLeftRadius: deviceWidth,
    borderBottomRightRadius: deviceWidth,
    transform: [
      {scaleX: 2}
    ]
  },
  contentContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
  },
  buttonRow: {
    flexDirection: 'row',
    width: deviceWidth - 80,
    justifyContent: 'space-between',
    marginTop: 40,
    marginBottom: 40,
  },
  buttonContainer: {
    backgroundColor: gVal.p4.h,
    height: 90,
    width: 90,
    borderRadius: 50,
  },
  sideMenu: {
    height: deviceHeight,
    width: deviceWidth*4/5,
    backgroundColor: gVal.p5.h,
    position: 'absolute',
    right: 0,
    shadowOffset:{  width: -30,  height: 0,  },
    shadowRadius: 30,
    shadowColor: 'black',
    shadowOpacity: 0.6,
    zIndex: 9999,
  },
  sideGradient: {
    height: deviceHeight/3,
    width: deviceWidth*4/5,
  },
});

export default Home2;