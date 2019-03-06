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

var cardTiming = 1200;

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
            easing: Easing.out((t) => t*t*t*t*t*t*t*t)
          }
        ),
        Animated.timing(
          this.state.opacity1,
          {
            toValue: 1,
            duration: cardTiming,
            easing: Easing.out((t) => t*t*t*t*t*t*t*t)
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
            easing: Easing.out((t) => t*t*t*t*t*t*t*t)
          }
        ),
        Animated.timing(
          this.state.opacity2,
          {
            toValue: 1,
            duration: cardTiming,
            easing: Easing.out((t) => t*t*t*t*t*t*t*t)
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
            easing: Easing.out((t) => t*t*t*t*t*t*t*t)
          }
        ),
        Animated.timing(
          this.state.opacity3,
          {
            toValue: 1,
            duration: cardTiming,
            easing: Easing.out((t) => t*t*t*t*t*t*t*t)
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
            easing: Easing.out((t) => t*t*t*t*t*t*t*t)
          }
        ),
        Animated.timing(
          this.state.opacity4,
          {
            toValue: 1,
            duration: cardTiming,
            easing: Easing.out((t) => t*t*t*t*t*t*t*t)
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
            easing: Easing.out((t) => t*t*t*t*t*t*t*t)
          }
        ),
        Animated.timing(
          this.state.opacity5,
          {
            toValue: 1,
            duration: cardTiming,
            easing: Easing.out((t) => t*t*t*t*t*t*t*t)
          }
        )
      ]).start(() => {

      });
    }, 800);
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
      )
    ]).start();
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(
          this.state.translateSide,
          {
            toValue: 0,
            duration: 400,
            easing: Easing.out((t) => t*t*t*t*t*t*t*t)
          }
        ),
        Animated.timing(
          this.state.overlayOpacity,
          {
            toValue: 0.3,
            duration: 400,
            easing: Easing.out((t) => t*t*t*t*t*t*t*t)
          }
        )
      ]).start();
    }, 100);
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
      )
    ]).start();
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(
          this.state.rotateY,
          {
            toValue: 0,
            duration: 400,
            easing: Easing.out((t) => t*t*t*t*t*t*t*t)
          }
        ),
        Animated.timing(
          this.state.sideScale,
          {
            toValue: 1,
            duratin: 400,
            easing: Easing.out((t) => t*t*t*t*t*t*t*t)
          }
        ),
        Animated.timing(
          this.state.translateMain,
          {
            toValue: 0,
            duratin: 400,
            easing: Easing.out((t) => t*t*t*t*t*t*t*t)
          }
        )
      ]).start(() => {
        this.setState({overlayShow: false});
      });
    }, 100);
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
          colors={[gVal.p4.h, gVal.p3.h, gVal.p2.h]}
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
              colors={[gVal.p4.h, gVal.p3.h, gVal.p2.h]}
            >
              <View style={styles.header}>
                <View style={styles.headerTextView}>
                  <Text style={styles.headerText}>Home</Text>
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
    color: '#333333',
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

export default Home;