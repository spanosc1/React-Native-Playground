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

class BubbleMenu extends React.Component {
	state = {
		//Starting animated value should be exactly half the height/width of the button
    circleTop: new Animated.Value(-30),
    circleOpen: false,
  };
  render() {
  	return (
	  	<View style={styles.box}>
	  		{/*Center button*/}
	      <TouchableOpacity style={{
	        backgroundColor: 'gray',
	        justifyContent: 'center',
	        alignItems: 'center',
	        height: 70,
	        width: 70,
	        borderRadius: 35,
	        zIndex: 10,
	      }} onPress={() => {
	        if(this.state.circleOpen)
	        {
	        	//Animate close
	          Animated.timing(
	            this.state.circleTop,
	            {
	              toValue: -30,
	              duration: 300,
	              easing: Easing.out((t) => t*t*t*t)
	            }
	          ).start(() => {
	            this.setState({circleOpen: false});
	          });
	        }
	        else
	        {
	        	//Animate open. toValue is the distance the button will move away from the center
	          Animated.timing(
	            this.state.circleTop,
	            {
	              toValue: -150,
	              duration: 300,
	              easing: Easing.out((t) => t*t*t*t)
	            }
	          ).start(() => {
	            this.setState({circleOpen: true});
	          });
	        }
	      }}>
	      </TouchableOpacity>
	      <View style={[styles.boxinner, {transform: [{rotate: '0deg'}]}]}>
	        <Animated.View style={[styles.circle, {top: this.state.circleTop}]}>
	          <TouchableOpacity style={{height: 60,width: 60, borderRadius: 30, backgroundColor: 'yellow'}}>
	          </TouchableOpacity>
	        </Animated.View>
	      </View>
	      <View style={[styles.boxinner, {transform: [{rotate: '60deg'}]}]}>
	        <Animated.View style={[styles.circle, {top: this.state.circleTop}]}>
	        <TouchableOpacity style={{height: 60,width: 60, borderRadius: 30, backgroundColor: 'yellow'}}>
	          </TouchableOpacity>
	        </Animated.View>
	      </View>
	      <View style={[styles.boxinner, {transform: [{rotate: '120deg'}]}]}>
	        <Animated.View style={[styles.circle, {top: this.state.circleTop}]}>
	        <TouchableOpacity style={{height: 60,width: 60, borderRadius: 30, backgroundColor: 'yellow'}}>
	          </TouchableOpacity>
	        </Animated.View>
	      </View>
	      <View style={[styles.boxinner, {transform: [{rotate: '180deg'}]}]}>
	        <Animated.View style={[styles.circle, {top: this.state.circleTop}]}>
	        <TouchableOpacity style={{height: 60,width: 60, borderRadius: 30, backgroundColor: 'yellow'}}>
	          </TouchableOpacity>
	        </Animated.View>
	      </View>
	      <View style={[styles.boxinner, {transform: [{rotate: '240deg'}]}]}>
	        <Animated.View style={[styles.circle, {top: this.state.circleTop}]}>
	        <TouchableOpacity style={{height: 60,width: 60, borderRadius: 30, backgroundColor: 'yellow'}}>
	          </TouchableOpacity>
	        </Animated.View>
	      </View>
	      <View style={[styles.boxinner, {transform: [{rotate: '300deg'}]}]}>
	        <Animated.View style={[styles.circle, {top: this.state.circleTop}]}>
	        <TouchableOpacity style={{height: 60,width: 60, borderRadius: 30, backgroundColor: 'yellow'}}>
	          </TouchableOpacity>
	        </Animated.View>
	      </View>
	    </View>
	  )
  }
}

const styles = StyleSheet.create({
	box: {
		//Dimensions of containing square
    height: deviceWidth,
    width: deviceWidth,
    //Background color of container, make this transparent
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: deviceWidth/2,
  },
  boxinner: {
    height: 0,
    width: 0,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    //This needs to be half of the height and width of the box
    top: deviceWidth/2,
    right: deviceWidth/2,
  },
  circle: {
    position: 'absolute',
    //Dimensions of the buttons
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'green',
  },
});

export default BubbleMenu;