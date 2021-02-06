import * as React from 'react';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunkMiddleWare from 'redux-thunk';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import Header from './components/Header';
import {View, StyleSheet} from 'react-native';
import Navigator from './Navigation';
export default class App extends React.Component {
  componentDidMount() {}

  render() {
    const store = createStore({}, {}, applyMiddleware(ReduxThunkMiddleWare));
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <View style={{flex: 1}}>
            <View style={{flex: 1}}>
              <Header />
            </View>
            <View style={{flex: 8}}>
              <Navigator />
            </View>
          </View>
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
