import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './common';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import RouterComponent from './Routes';

const store = configureStore();
import { Text, View } from 'react-native';
import LoginPage from './login/LoginPage';

class App extends Component {
    constructor(props) {
        super(props);
      }

    render() {
    return (
        <Provider store={store}>
            <RouterComponent/>
        </Provider>
    );
        return (
            <View> 
                <LoginPage />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: 100,
      width: 100
    },
  });
  

export default App;
