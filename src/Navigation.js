import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {View} from 'react-native';

const Stack = createStackNavigator();
export default class Navigator extends React.Component {
  render() {
    if (this.state.checkedPersistence) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="" headerMode="none" />
        </NavigationContainer>
      );
    } else {
      return <View />;
    }
  }
}
