import React, { Component } from 'react';
import { View } from 'react-native';
import MapScreen from './MapScreen'

class App extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <MapScreen />
            </View>
        );
    }
}


export default App;
