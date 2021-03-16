import {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import * as React from 'react';
export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/sensus.png')}
          style={styles.headerImage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    resizeMode: 'center',
    height: 125,
    width: 125,
  },
});
