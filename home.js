import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing,
  Image,
  PanResponder
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

var image = require('./img/ke7_master.jpg');

type Props = {};
class Home extends React.Component {
  state = {
    
  };

  render() {
    
    return (
      <View style={styles.container}>
        <LinearGradient
          style={styles.gradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#60BDFD', '#9578FF', '#C556FF']}
        >
          <View style={styles.headerRow}>
            <Text style={styles.headerTitle}>Product</Text>
            <View style={styles.headerMenuButton}>
              <View style={styles.bar1}>
              </View>
              <View style={styles.bar2}>
              </View>
              <View style={styles.bar3}>
              </View>
            </View>
          </View>
        </LinearGradient>
        <View style={styles.card}>
          <Image style={styles.image} source={image}/>
          <Text style={styles.productTitle}>KE7 Earbuds & In Ear Headphones</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  gradient: {
    height: deviceHeight/2.8,
    width: deviceWidth,
  },
  headerRow: {
    paddingTop: 12,
    paddingLeft: 25,
    paddingRight: 25,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: 'Gotham-Light',
    color: '#ffffff',
    fontSize: 20,
  },
  headerMenuButton: {
    height: 40,
    width: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  bar1: {
    backgroundColor: '#ffffff',
    height: 2,
    width: 18,
    marginTop: 3,
    marginBottom: 3,
  },
  bar2: {
    backgroundColor: '#ffffff',
    height: 2,
    width: 14,
    marginTop: 3,
    marginBottom: 3,
  },
  bar3: {
    backgroundColor: '#ffffff',
    height: 2,
    width: 22,
    marginTop: 3,
    marginBottom: 3,
  },
  card: {
    minHeight: deviceHeight/2.5,
    width: deviceWidth - 50,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    position: 'absolute',
    top: 70,
    borderRadius: 3,
  },
  image: {
    height: deviceHeight/2.5,
    width: deviceWidth - 50,
  },
  productTitle: {
    margin: 15,
    fontSize: 20,
    fontFamily: 'Gotham-Light',
  }
});

export default Home;