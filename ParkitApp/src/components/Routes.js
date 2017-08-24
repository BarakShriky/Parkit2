import React from 'react';
import { Text } from 'react-native';
import { Actions, Scene, Router} from 'react-native-router-flux';
// import LoginPage from './components/Login';
import MapView from 'react-native-maps';
import { Header } from './common/Header';
import { Card } from './common/Card'


const scenes = Actions.create(
    <Scene key='root'>
        <Scene key='login' component={Header} title='Please Login' initial/>
         <Scene 
            rightTitle='Parkit'
            onRight = {() => console.log('right!!')}// replace in Parkit component
            key='Card'
            component={Card}
            title='Parkit'/>
    </Scene>
);

const RouterComponent = () => {
    return (
        <Router scenes={scenes} sceneStyle={{paddingTop: 65}}/>
    );
};

export default RouterComponent;