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

var iterator = 0;

class BubbleMenu extends React.Component {
	state = {
		//Starting animated value should be exactly half the height/width of the button
    circleTop: new Animated.Value(-30),
    boxHeight: new Animated.Value(70),
    boxWidth: new Animated.Value(70),
    circleOpen: false,
    items: [1, 2, 3, 4, 5, 6, 7, 8],
    opacity: new Animated.Value(0),
    height: 70,
    width: 70,
  };

  render() {
  	return (
	  	<Animated.View style={[styles.box, {height: this.state.boxHeight, width: this.state.boxWidth}]}>
	  		{/*Center button*/}
	  		<Animated.View style={[styles.background, {opacity: this.state.opacity}]}></Animated.View>
	      <TouchableOpacity activeOpacity={1} style={styles.centerButton} onPress={() => this.animateToMiddle()}>
	      </TouchableOpacity>
	      {this.state.items.map(i => {
	      	var degrees = (360 / this.state.items.length) * iterator;
	      	var innerDegrees = -degrees;
	      	degrees += 'deg';
	      	innerDegrees += 'deg';
	      	iterator ++;
	      	return (
		      	<View key={iterator} style={[styles.boxinner, {transform: [{rotate: degrees}]}]}>
			        <Animated.View style={[styles.circle, {top: this.state.circleTop, transform: [{rotate: innerDegrees}]}]}>
			          <TouchableOpacity style={styles.button}>
			          	<Text>{i}</Text>
			          </TouchableOpacity>
			        </Animated.View>
			      </View>
			    )
	      })}
	    </Animated.View>
	  )
  }

  animateToMiddle() {
  	if(this.state.circleOpen)
  	{
  		this.toggleMenu();
  		setTimeout(() => {
  			Animated.parallel([
		  		Animated.timing(
		  			this.state.boxHeight,
		  			{
		  				toValue: 70,
		  				duration: 400,
		  				easing: Easing.out((t) => t*t*t*t)
		  			}
		  		),
		  		Animated.timing(
		  			this.state.boxWidth,
		  			{
		  				toValue: 70,
		  				duration: 400,
		  				easing: Easing.out((t) => t*t*t*t)
		  			}
		  		),
		  	]).start(() => {

		  	});
  		}, 200);
  	}
  	else
  	{

	  	Animated.parallel([
	  		Animated.timing(
	  			this.state.boxHeight,
	  			{
	  				toValue: deviceHeight,
	  				duration: 400,
	  				easing: Easing.out((t) => t*t*t*t)
	  			}
	  		),
	  		Animated.timing(
	  			this.state.boxWidth,
	  			{
	  				toValue: deviceWidth,
	  				duration: 400,
	  				easing: Easing.out((t) => t*t*t*t)
	  			}
	  		),
	  		
	  	]).start();
	  	setTimeout(() => {
	  		this.toggleMenu();
	  	}, 200);
	  }
  }

  toggleMenu() {
    if(this.state.circleOpen)
    {
    	//Animate close
    	Animated.parallel([
    		Animated.timing(
	  			this.state.opacity,
	  			{
	  				toValue: 0,
	  				duration: 400,
	  				easing: Easing.out((t) => t*t*t*t)
	  			}
	  		),
	  		Animated.timing(
	        this.state.circleTop,
	        {
	          toValue: -30,
	          duration: 300,
	          easing: Easing.out((t) => t*t*t*t)
	        }
	      )
    	]).start(() => {
        this.setState({circleOpen: false});
      });
    }
    else
    {
    	//Animate open. toValue is the distance the button will move away from the center
      Animated.parallel([
    		Animated.timing(
	  			this.state.opacity,
	  			{
	  				toValue: 0.3,
	  				duration: 400,
	  				easing: Easing.out((t) => t*t*t*t)
	  			}
	  		),
	  		Animated.timing(
	        this.state.circleTop,
	        {
	          toValue: -120,
	          duration: 300,
	          easing: Easing.out((t) => t*t*t*t)
	        }
	      )
    	]).start(() => {
        this.setState({circleOpen: true});
      });
    }
    return true;
  }

}

const styles = StyleSheet.create({
	box: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		//Dimensions of containing square
    //Background color of container, make this transparent
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
  },
  centerButton: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 70,
    borderRadius: 35,
    zIndex: 10,
  },
  boxinner: {
    height: 0,
    width: 0,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 9,
    //This needs to be half of the height and width of the box
  },
  circle: {
    position: 'absolute',
    //Dimensions of the buttons
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'green',
  },
  button: {
  	height: 60,
  	width: 60,
  	borderRadius: 30,
  	backgroundColor: 'yellow',
  	justifyContent: 'center',
  	alignItems: 'center',
  },
  background: {
  	backgroundColor: '#000000',
  	zIndex: 8,
  	position: 'absolute',
  	top: 0,
  	right: 0,
  	bottom: 0,
  	left: 0,
  },
});

export default BubbleMenu;