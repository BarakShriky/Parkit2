import React from 'react';
import { Text } from 'react-native';
import { Actions, Scene, Router} from 'react-native-router-flux';
import MapView from 'react-native-maps';
import { Header } from './common/Header';
import LoginPage from './login/LoginPage';

const scenes = Actions.create(
    <Scene key='root'>
        <Scene key='login' component={LoginPage} title='Please Login' initial/>
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