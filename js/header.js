import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class Header extends React.Component {
	state = {
		spinVal: new Animated.Value(0),
    overlayOpacity: new Animated.Value(0),
    topBarSpin: new Animated.Value(0),
    topBarDown: new Animated.Value(6),
    midBarWidth: new Animated.Value(30),
    midBarBottom: new Animated.Value(6),
    midBarHeight: new Animated.Value(2),
    bottomBarSpin: new Animated.Value(0),
    buttonLeft: new Animated.Value(0),
    menuOpen: false,
    showOverlay: false,
    circleTop: new Animated.Value(-30),
    circleOpen: false
  };

  render() {
  	const spinMenu = this.state.spinVal.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '90deg'],
    });
    const spinTopBar = this.state.topBarSpin.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '-45deg'],
    });
    const spinBottomBar = this.state.bottomBarSpin.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '45deg'],
    });
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.header, {transform: [{rotate: spinMenu}]}]}>
          <Animated.View style={{marginLeft: this.state.buttonLeft}}>
            <TouchableOpacity style={styles.menuButton} activeOpacity={0.8} onPress={() => this.spinMenu()}>
              <Animated.View style={[styles.topBar, {
                transform: [{rotate: spinTopBar}],
                marginBottom: this.state.topBarDown
              }]}>
              </Animated.View>
              <Animated.View style={[styles.midBar, {
                width: this.state.midBarWidth,
                marginBottom: this.state.midBarBottom,
                height: this.state.midBarHeight
              }]}>
              </Animated.View>
              <Animated.View style={[styles.bottomBar, {
                transform: [{rotate: spinBottomBar}]
              }]}>
              </Animated.View>
            </TouchableOpacity>
          </Animated.View>
          <Text style={styles.headerTitle}>HOME</Text>
          <View style={styles.headerOptions}>
            <View style={styles.optionsContainer}>
              <TouchableOpacity activeOpacity={0.8} style={styles.optionRow}>
                <View style={styles.optionBullet}></View>
                <Text style={styles.option}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.optionRow}>
                <View style={styles.optionBullet}></View>
                <Text style={styles.option}>Shop</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.optionRow}>
                <View style={styles.optionBullet}></View>
                <Text style={styles.option}>Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.optionRow}>
                <View style={styles.optionBullet}></View>
                <Text style={styles.option}>Account</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.optionRow}>
                <View style={styles.optionBullet}></View>
                <Text style={styles.option}>Logout</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.optionRow}>
                <View style={styles.optionBullet}></View>
                <Text style={styles.option}>Other</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.optionRow}>
                <View style={styles.optionBullet}></View>
                <Text style={styles.option}>Other</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
        {this.state.showOverlay &&
          <Animated.View style={[styles.appOverlay, {opacity: this.state.overlayOpacity}]}>
            <TouchableOpacity style={styles.dismissOverlay} activeOpacity={1} onPress={() => this.spinMenu()}>
            </TouchableOpacity>
          </Animated.View>
        }
      </View>
    );
  }

  spinMenu() {
    if(this.state.menuOpen)
    {
      Animated.parallel([
        Animated.timing(
          this.state.spinVal,
          {
            toValue: 0,
            duration: 400,
            easing: Easing.out((t) => t*t*t*t)
          }
        ),
        Animated.timing(
          this.state.overlayOpacity,
          {
            toValue: 0,
            duration: 400,
            easing: Easing.out((t) => t*t*t*t)
          }
        ),
        Animated.timing(
          this.state.topBarSpin,
          {
            toValue: 0,
            duration: 400,
            easing: Easing.out((t) => t*t*t*t)
          }
        ),
        Animated.timing(
          this.state.topBarDown,
          {
            toValue: 6,
            duration: 400,
            easing: Easing.out((t) => t*t*t*t)
          }
        ),
        Animated.timing(
          this.state.midBarWidth,
          {
            toValue: 30,
            duration: 400,
            easing: Easing.out((t) => t*t*t*t)
          }
        ),
        Animated.timing(
          this.state.midBarBottom,
          {
            toValue: 6,
            duration: 400,
            easing: Easing.out((t) => t*t*t*t)
          }
        ),
        Animated.timing(
          this.state.midBarHeight,
          {
            toValue: 2,
            duration: 400,
            easing: Easing.out((t) => t*t*t*t)
          }
        ),
        Animated.timing(
          this.state.bottomBarSpin,
          {
            toValue: 0,
            duration: 400,
            easing: Easing.out((t) => t*t*t*t)
          }
        ),
        Animated.timing(
          this.state.buttonLeft,
          {
            toValue: 0,
            duration: 400,
            easing: Easing.out((t) => t*t*t*t)
          }
        )
      ]).start(() => {
          this.setState({menuOpen: false, showOverlay: false});
      });
    }
    else
    {
      this.setState({showOverlay: true});
      Animated.parallel([
        Animated.timing(
          this.state.spinVal,
          {
            toValue: 1,
            duration: 400,
            easing: Easing.out((t) => t*t*t*t)
          }
        ),
        Animated.timing(
          this.state.overlayOpacity,
          {
            toValue: 1,
            duration: 400,
            easing: Easing.out((t) => t*t*t*t)
          }
        ),
        Animated.timing(
          this.state.topBarSpin,
          {
            toValue: 1,
            duration: 400,
            easing: Easing.out((t) => t*t*t*t)
          }
        ),
        Animated.timing(
          this.state.topBarDown,
          {
            toValue: -1,
            duration: 400,
            easing: Easing.out((t) => t*t*t*t)
          }
        ),
        Animated.timing(
          this.state.midBarWidth,
          {
            toValue: 0,
            duration: 400,
            easing: Easing.out((t) => t*t*t*t)
          }
        ),
        Animated.timing(
          this.state.midBarBottom,
          {
            toValue: 0,
            duration: 400,
            easing: Easing.out((t) => t*t*t*t)
          }
        ),
        Animated.timing(
          this.state.midBarHeight,
          {
            toValue: 0,
            duration: 400,
            easing: Easing.out((t) => t*t*t*t)
          }
        ),
        Animated.timing(
          this.state.bottomBarSpin,
          {
            toValue: 1,
            duration: 400,
            easing: Easing.out((t) => t*t*t*t)
          }
        ),
        Animated.timing(
          this.state.buttonLeft,
          {
            toValue: 20,
            duration: 400,
            easing: Easing.out((t) => t*t*t*t)
          }
        )
      ]).start(() => {
          this.setState({menuOpen: true});
      });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
	header: {
    paddingTop: 15,
    height: 60,
    width: deviceWidth*2 - 60,
    backgroundColor: '#372c2d',
    position: 'absolute',
    top: 0,
    right: 0,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
    shadowOffset:{  width: 0,  height: 2,  },
    shadowRadius: 2,
    shadowColor: 'grey',
    shadowOpacity: 0.7,
  },
  headerTitle: {
    position: 'absolute',
    color: '#ffffff',
    right: 60,
    width: deviceWidth - 120,
    textAlign: 'center',
    fontSize: 18,
    bottom: 12,
    fontFamily: 'Gotham-Bold',
  },
  menuButton: {
    height: 60,
    width: 60,
    padding: 15,
    paddingTop: 20,
    paddingRight: 20,
    alignItems: 'center',
  },
  topBar: {
    width: 30,
    height: 2,
    borderRadius: 2,
    backgroundColor: '#ffffff',
  },
  midBar: {
    height: 2,
    borderRadius: 2,
    backgroundColor: '#ffffff',
  },
  bottomBar: {
    width: 30,
    height: 2,
    borderRadius: 2,
    backgroundColor: '#ffffff',
  },
  headerOptions: {
    position: 'absolute',
    bottom: 59,
    paddingBottom: deviceWidth/5,
    right: 0,
    height: deviceWidth,
    width: deviceWidth,
    backgroundColor: '#372C2D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsContainer: {
    transform: [{
      rotate: '-90deg',
    }],
    alignItems: 'flex-start',
    width: deviceWidth,
    marginLeft: 25,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionBullet: {
    backgroundColor: '#65777E',
    height: 12,
    width: 12,
    marginRight: 20,
    borderRadius: 10,
  },
  option: {
    color: '#ffffff',
    fontSize: 18,
    lineHeight: 18,
    fontFamily: 'Gotham-Light',
  },
  appOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  dismissOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  pageHeaderText: {
    fontSize: 18,
    fontFamily: 'Gotham-Light',
  },
});

export default Header;