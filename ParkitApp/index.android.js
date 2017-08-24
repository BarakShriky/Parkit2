import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import App from './src/components/App';


export default class Parkit extends Component {
  render() {
    return (
      <App/>
    );
  }
}

// const styles = StyleSheet.create({
  
// });

AppRegistry.registerComponent('Parkit', () => Parkit);

