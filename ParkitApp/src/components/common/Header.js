// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
// Make a component
const Header = (props) => {
const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle }>
            <Text style={textStyle}>{props.txt}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        elevation: 4,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

//Make the component available to the other partes of the app
 export { Header }; 
