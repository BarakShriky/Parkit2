import React from 'react';
import { Text } from 'react-native';
import { Actions, Scene, Router} from 'react-native-router-flux';
import MapScreen from './MapScreen';
import { Header } from './common/Header';
import LoginPage from './login/LoginPage';

const scenes = Actions.create(
    <Scene key='root'>
        <Scene key='auth'>
            <Scene key='login' component={LoginPage} initial/>
        </Scene>
        <Scene key='app'>
        <Scene 
            leftTitle='Menu'
            onLeft = {() =>Actions.menu()}// replace in Parkit component
            key='map_screen'
            component={MapScreen}
            title='Parkit'/>
        </Scene>
         
    </Scene>
);

const RouterComponent = () => {
    return (
        <Router scenes={scenes} sceneStyle={{paddingTop: 65}}/>
    );
};

export default RouterComponent;