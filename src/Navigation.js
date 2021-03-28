import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {View} from 'react-native';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import {checkLoginPersistence} from './actions/LoginActions';
const Stack = createStackNavigator();

class Navigator extends React.Component {
  state = {
    isLoggedIn: false,
    checkedPersistence: false,
  };
  async componentDidMount() {
    await this.props.checkLogin();
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      checkedPersistence: true,
    });
  }

  render() {
    return this.state.checkedPersistence ? (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={this.props.loggedIn ? 'Main' : 'Login'}
          headerMode="none">
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    ) : (
      <View />
    );
  }
}

const mapStateToProps = (state) => {
  const {organizationID, loggedIn} = state.login;
  return {organizationID, loggedIn};
};

export default connect(mapStateToProps, {
  checkLogin: checkLoginPersistence,
})(Navigator);
