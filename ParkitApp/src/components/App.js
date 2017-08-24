import React, { Component } from 'react';
import { Text, View } from 'react-native';
import LoginPage from './login/LoginPage';

class App extends Component {
    render() {
        return (
            <View> 
                <LoginPage />
            </View>
        );
    }
}

export default App;
