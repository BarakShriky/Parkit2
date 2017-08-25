import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, ActivityIndicator, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Header, Button } from './common';

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LAT_DELTA = 0.0122;
const LON_DELTA = LAT_DELTA * ASPECT_RATIO;

class MapScreen extends Component {

    constructor() {
        super();
        this.state = {
            region: {
                latitude: null,
                longitude: null,
                latitudeDelta: null,
                longitudeDelta: null
            },
            parkingSpot: []
        }
    }

    componentDidMount() {
        this.setLocation()

        this.watchID = navigator.geolocation.watchPosition((position) => {
    
            const newRegion = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: LAT_DELTA,
                longitudeDelta: LON_DELTA
            };

            this.setState({region: newRegion})
            debugger;
            if (this.state.region.latitude - 32.1137375 > 0 ){
                Alert.alert("Congratulations, did you get the parking?")
            }
        })
    }

    calcDelta(lat, lon, accuracy){
        const oneDgreeOfLongitudInMeters = 111.32
        const circumference = (40075 / 360)

        const latDelta = accuracy * (1 / (Math.cos(lat) * circumference))
        const lonDelta = (accuracy / oneDgreeOfLongitudInMeters)

        this.setState({
            region: {
                latitude: lat,
                longitude: lon,
                latitudeDelta: LAT_DELTA,
                longitudeDelta: LON_DELTA
            }
        })
    }

    setLocation() {
        navigator.geolocation. getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude
                const lon = position.coords.longitude
                const accuracy = position.coords.accuracy
                this.calcDelta(lat, lon, accuracy)
            }
        );
    }
    
    searchForSpot() {
        Alert.alert("Searching for a parking spot!")
        const parkingSpots = [];
        var markCordinats = {
            latitude: 32.1137375,
            longitude: 34.840225
        }
        parkingSpots.push(
            <MapView.Marker
                key="1"
                coordinate={markCordinats}
                title="Park here!"
                description="Your perfect parking place"
            />
        )
        this.setState({ parkingSpot: parkingSpots });

    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    {this.state.region.latitude ? 
                        <MapView
                            provider={MapView.PROVIDER_GOOGLE}
                            style={ styles.map }
                            initialRegion={ this.state.region }
                            showsUserLocation={true}
                            followsUserLocation={true}
                        >
                            {this.state.parkingSpot}
                        </MapView> : 
                        <Text style={ styles.noService }>
                            Please turn on your location service
                        </Text>
                }
                </View>
                <Button onPress={ () => this.searchForSpot() }>ParkIt!</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flex: 1
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '80%',
      width: '100%'

    },
    map: {
      height: '95%',
      width: '95%'
    },
    noService: {
        fontSize: 20
    }
  });
  
export default MapScreen;
