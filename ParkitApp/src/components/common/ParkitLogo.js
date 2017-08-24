import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ParkitLogo = () => {
    return (
        <View style={styles.container}> 
            <Image
                source={require('./../../assets/images/ParkitLogo.png')}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: 100
    }
});

export default ParkitLogo;