import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import App from './src/components/App';
import configureStore from './src/store/configureStore';

const store = configureStore();
//store.dispatch(loadCourses());


export default class Parkit extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

// const styles = StyleSheet.create({
  
// });

AppRegistry.registerComponent('Parkit', () => Parkit);

