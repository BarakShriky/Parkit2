import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { Header } from './common';

class App extends Component {
    render() {
        return (
            <View>
                <Header txt="shriky" />
                <MapView
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            />
          </View>
        );
    }
}

export default App;
