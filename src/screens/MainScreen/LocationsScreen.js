import * as React from 'react';
import {View, Text} from 'react-native';
import LocationsList from '../../components/LocationsList';
export default class LocationsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <LocationsList />
      </View>
    );
  }
}
