import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
  Easing,
  PanResponder
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

type Props = {};
var bottom = 80;
var newBottom = 0;
var reset = 0;
var TOP = deviceHeight - 150;
var BOTTOM = 80;
var MIDDLE = deviceHeight/2 - 100;
var betweenBottomAndMiddle = (MIDDLE + BOTTOM)/2;
var betweenMiddleAndTop = (TOP + MIDDLE)/2;

class DragMenu extends React.Component {
  state = {
    barMargin: new Animated.Value(BOTTOM),
    menuHeight: new Animated.Value(BOTTOM),
  };

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gesture) => {
             
        //this.state.translation.setOffset(this.state.translation._value)
      },

      /*onPanResponderMove: Animated.event([
        null, {dy: this.state.translation}
      ]),*/

      onPanResponderMove: (event, gesture) => {
        newBottom = bottom - gesture.dy;
        if(newBottom > BOTTOM && newBottom <= TOP)
        {
          this.state.barMargin.setValue(newBottom);
          this.state.menuHeight.setValue(newBottom);
        }
        else if(newBottom < BOTTOM)
        {
          //Bounce (works)
          //this.state.translation.setValue(bottom - Math.pow(bottom, 0.75) + Math.pow(gesture.dy, 0.75));
          //Hard stop
          this.state.barMargin.setValue(BOTTOM);
        }
        else if(newBottom > TOP)
        {

          //Bounce (almost there)
          //this.state.translation.setValue(-(TOP - bottom) - Math.pow(-gesture.dy, 0.75) + Math.pow((TOP), 0.75) - Math.pow(bottom, 0.75));
          //Hard stop
          this.state.barMargin.setValue(TOP);
          this.state.menuHeight.setValue(TOP);
        }
      },

      onPanResponderRelease: (e, gesture) => {
        if(newBottom > BOTTOM && newBottom < MIDDLE)
        {
          if(gesture.vy <= -0.2)
          {
            this.animateMenu(MIDDLE);
          }
          else if(gesture.vy > 0.2)
          {
            this.animateMenu(BOTTOM);
          }
          else if(newBottom > betweenBottomAndMiddle)
          {
            this.animateMenu(MIDDLE);
          }
          else if(newBottom <= betweenBottomAndMiddle)
          {
            this.animateMenu(BOTTOM);
          }
        }
        else if(newBottom > MIDDLE && newBottom < TOP)
        {
          if(gesture.vy <= -0.2)
          {
            this.animateMenu(TOP);
          }
          else if(gesture.vy >= 0.2)
          {
            this.animateMenu(MIDDLE);
          }
          else if(newBottom > betweenMiddleAndTop)
          {
            this.animateMenu(TOP);
          }
          else if(newBottom <= betweenMiddleAndTop)
          {
            this.animateMenu(MIDDLE);
          }
        }
        else if(newBottom <= BOTTOM)
        {
          this.state.menuHeight.setValue(BOTTOM);
          this.state.barMargin.setValue(BOTTOM);
          bottom = BOTTOM;
        }
        else if(newBottom >= TOP)
        {
          this.state.menuHeight.setValue(TOP);
          this.state.barMargin.setValue(TOP);
          bottom = TOP;
        }
        else
        {
          bottom = bottom - gesture.dy;
        }
        this.state.barMargin.flattenOffset();
        this.state.menuHeight.flattenOffset();
      }
    });
  }

  render() {
    let translateY = this.state.barMargin;
    let barStyle = {marginBottom: translateY}
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.barView, barStyle]}
        >
          <View
            ref='draggableView'
            style={styles.draggableBar}
            {...this.panResponder.panHandlers}
          >
          
          </View>
        </Animated.View>
        <Animated.View style={[styles.menuView, {
          height: this.state.menuHeight
        }]}>
          <ScrollView>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            <Text>Text</Text>
            
          </ScrollView>
        </Animated.View>
      </View>
    );
  }

  animateMenu(position) {
    Animated.parallel([
      Animated.timing(
        this.state.barMargin,
        {
          toValue: position,
          duration: 150,
          easing: Easing.out(Easing.quad)
        }
      ),
      Animated.timing(
        this.state.menuHeight,
        {
          toValue: position,
          duration: 150,
          easing: Easing.out(Easing.quad)
        }
      )
    ]).start(() => {bottom = position;});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  barView: {
    height: 60,
    width: deviceWidth,
    position: 'absolute',
    bottom: 0,
  },
  draggableBar: {
    height: 60,
    width: deviceWidth,
    backgroundColor: 'red',
    zIndex: 2,
  },
  menuView: {
    width: deviceWidth,
    backgroundColor: 'yellow',
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
  },
});

export default DragMenu;