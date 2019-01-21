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
  ScrollView,
  PanResponder,
  FlatList,
  Animated,
  Easing,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
var directionChosen = '';
var viewLayout = {};

class DeckSwiper extends React.Component {
  state = {
    cards: [
      {
        title: 'one',
      },
      {
        title: 'two',
      },
    ],
    itemTranslateX: new Animated.Value(0),
    itemTranslateY: new Animated.Value(0),
    behindItemScale: new Animated.Value(0.95),
    itemRotate: new Animated.Value(0),
    yes: new Animated.Value(0),
    no: new Animated.Value(0),
    scrollEnabled: true,
  };

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gesture) => {
        directionChosen = '';
      },

      onPanResponderMove: (event, gesture) => {
        if(directionChosen == '')
        {
          if(Math.abs(gesture.dx) > Math.abs(gesture.dy))
          {
            directionChosen = 'x';
            this.setState({scrollEnabled: false});
          }
          else
          {
            directionChosen = 'y';
            this.setState({scrollEnabled: true});
          }
        }
        if(gesture.dx > 0)
        {
          this.state.no.setValue(0);
          this.state.yes.setValue(gesture.dx);
        }
        else
        {
          this.state.yes.setValue(0);
          this.state.no.setValue(gesture.dx);
        }
        if(directionChosen == 'x')
        {
          this.state.itemTranslateX.setValue(gesture.dx);
          this.state.itemRotate.setValue(gesture.dx);
        }
      },

      onPanResponderRelease: (e, gesture) => {
        this.state.yes.setValue(0);
        this.state.no.setValue(0);
        this.setState({scrollEnabled: true});
        if(directionChosen == 'x')
        {
          if(gesture.dx < -deviceWidth/3)
          {
            this.swipeLeft();
          }
          else if(gesture.dx > deviceWidth/3)
          {
            this.swipeRight();
          }
          else
          {
            this.animateBackX();
          }
        }
        else if(directionChosen == 'y')
        {
          this.animateBackY();
        }
        directionChosen = '';
        this.state.itemTranslateX.flattenOffset();
        this.state.itemTranslateY.flattenOffset();
        this.state.itemRotate.flattenOffset();
        this.state.yes.flattenOffset();
        this.state.no.flattenOffset();
      }
    });
  }

  swipeLeft() {
    Animated.parallel([
      Animated.timing(
        this.state.itemTranslateX,
        {
          toValue: -500,
          duration: 200,
          easing: Easing.quad
        }
      ),
      Animated.timing(
        this.state.itemRotate,
        {
          toValue: -500,
          duration: 200,
          easing: Easing.quad
        }
      ),
      Animated.timing(
        this.state.behindItemScale,
        {
          toValue: 1,
          duration: 300,
          easing: Easing.elastic()
        }
      )
    ]).start(() => {
      var cards = this.state.cards;
      cards.splice(0,1);
      cards.push({title: 'extra', index: 1});
      this.state.itemTranslateX.setValue(0);
      this.state.itemRotate.setValue(0);
      this.state.behindItemScale.setValue(0.95);
      this.listView.scrollTo({y: 0, animated: false});
      this.setState({cards: cards});
    });
  }

  swipeRight() {
    Animated.parallel([
      Animated.timing(
        this.state.itemTranslateX,
        {
          toValue: 500,
          duration: 200,
          easing: Easing.quad
        }
      ),
      Animated.timing(
        this.state.itemRotate,
        {
          toValue: 500,
          duration: 200,
          easing: Easing.quad
        }
      ),
      Animated.timing(
        this.state.behindItemScale,
        {
          toValue: 1,
          duration: 200,
          easing: Easing.elastic()
        }
      )
    ]).start(() => {
      var cards = this.state.cards;
      cards.splice(0,1);
      cards.push({title: 'extra', index: 1});
      this.state.itemTranslateX.setValue(0);
      this.state.itemRotate.setValue(0);
      this.state.behindItemScale.setValue(0.95);
      this.listView.scrollTo({y: 0, animated: false});
      this.setState({cards: cards});
    });
  }

  animateBackX() {
    Animated.parallel([
      Animated.timing(
        this.state.itemTranslateX,
        {
          toValue: 0,
          duration: 200,
          easing: Easing.out(Easing.quad)
        }
      ),
      Animated.timing(
        this.state.itemRotate,
        {
          toValue: 0,
          duration: 200,
          easing: Easing.out(Easing.quad)
        }
      )
    ]).start();
  }

  animateBackY() {
    Animated.parallel([
      Animated.timing(
        this.state.itemTranslateX,
        {
          toValue: 0,
          duration: 200,
          easing: Easing.out(Easing.quad)
        }
      ),
      Animated.timing(
        this.state.itemRotate,
        {
          toValue: 0,
          duration: 200,
          easing: Easing.out(Easing.quad)
        }
      )
    ]).start();
  }

  render() {
    const itemRotate = this.state.itemRotate.interpolate({
      inputRange: [-500, 500],
      outputRange: ['-20deg', '20deg'],
    });
    const yes = this.state.yes.interpolate({
      inputRange: [0, 150],
      outputRange: [0, 1],
    });
    const no = this.state.no.interpolate({
      inputRange: [-150, 0],
      outputRange: [1, 0],
    });
    return (
      <View style={styles.container}>
        {
          this.state.cards.map((item, index) => 
            <ScrollView
              ref={index == 0 ? ref => this.listView = ref : 'none'}
              style={[styles.scrollView, {
                position: index == 0 ? null : 'absolute',
                zIndex: index == 0 ? 3 : 2
              }]}
              showsVerticalScrollIndicator={false}
              bounces={false}
              scrollEnabled={this.state.scrollEnabled}
            >
              <Animated.View
                ref='draggableView'
                onLayout={(event) => viewLayout = event.nativeEvent.layout}
                style={[styles.panItem, index == 0 ? {
                  transform: [
                    {translateX: this.state.itemTranslateX},
                    {translateY: this.state.itemTranslateY},
                    {rotateZ: itemRotate},
                  ]
                } : {
                  transform: [
                    {scaleX: this.state.behindItemScale},
                    {scaleY: this.state.behindItemScale},
                  ]
                }]}
                {...this.panResponder.panHandlers}
              >
                <Text style={{fontSize: 30, margin: 60}}>
                  {item.title}
                </Text>
                <Animated.Text style={{fontSize: 30, position: 'absolute', top: 20, left: 20, opacity: index == 0 ? yes : 0}}>
                  Yes
                </Animated.Text>
                <Animated.Text style={{fontSize: 30, position: 'absolute', top: 20, right: 20, opacity: index == 0 ? no : 0}}>
                  No
                </Animated.Text>
              </Animated.View>
            </ScrollView>
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scrollView: {
    width: deviceWidth,
    zIndex: 3,
  },
  panItem: {
    height: deviceHeight*1.5,
    margin: 15,
    borderWidth: 1,
    borderColor: '#777777',
    borderRadius: 15,
    backgroundColor: '#cccccc',
  },

});

export default DeckSwiper;