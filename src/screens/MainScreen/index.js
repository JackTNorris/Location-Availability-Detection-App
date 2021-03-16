import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsScreen from './SettingsScreen';
import HomeScreen from './HomeScreen';
import LocationsScreen from './LocationsScreen';
const Tab = createBottomTabNavigator();

export default class MainScreen extends React.Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{activeTintColor: 'blue'}}>
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({color, size}) => {
              let IconComponent = Ionicons;
              return (
                <IconComponent name={'settings'} size={25} color={color} />
              );
            },
            tabBarOptions: {
              activeTintColor: 'red',
              inactiveTintColor: 'gray',
            },
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => {
              let IconComponent = Ionicons;
              // You can return any component that you like here!
              return <IconComponent name={'home'} size={25} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Locations"
          component={LocationsScreen}
          options={{
            tabBarIcon: ({color, size}) => {
              let IconComponent = Ionicons;
              // You can return any component that you like here!
              return <IconComponent name={'location'} size={25} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    );
  }
}
