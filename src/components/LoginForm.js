import * as React from 'react';
import {View, Button, Text, TextInput, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {login} from '../actions/LoginActions';

class LoginForm extends React.Component {
  state = {
    organizationID: '',
  };

  onClickLogin = async () => {
    await this.props.lgIn(this.state.organizationID.toLowerCase());
    if (this.props.loggedIn) {
      console.log(this.props.loggedIn);
      this.props.navigation.navigate('Main');
    }
  };

  render() {
    return (
      <View style={styles.centeredContainer}>
        <View style={styles.loginFormContainer}>
          <Text>Enter in your organization ID!{'\n'}</Text>
          <TextInput
            style={styles.input}
            placeholder="Organization ID"
            value={this.state.organizationID}
            onChangeText={(text) => this.setState({organizationID: text})}
          />
          <Button title="Submit" onPress={this.onClickLogin} />
          <Text>{this.props.errorMessage}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const {navigation} = ownProps;
  const {errorMessage, loggedIn} = state.login;
  return {navigation, loggedIn, errorMessage};
};
export default connect(mapStateToProps, {
  lgIn: login,
})(LoginForm);

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    textAlign: 'center',
    marginBottom: 10,
  },
  loginFormContainer: {
    width: 300,
    height: 200,
    backgroundColor: '#9eeaff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
