import React, { Component } from 'react';
import * as parkitActions from './../../actions/parkitActions';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import {bindActionCreators} from "redux";
import FBSDK, { LoginManager } from 'react-native-fbsdk';
import ParkitLogo from '../common/ParkitLogo';
import {connect} from "react-redux";

class LoginPage extends Component {
    constructor(props, context){
        super(props, context)

        this.state = {
            login: false
        }

        this._fbAuth = this._fbAuth.bind(this);
        this.logUser = this.logUser.bind(this);
        
    }

    _fbAuth() {
      LoginManager.logInWithReadPermissions(['public_profile']).then(
         function(result) {
            if (result.isCancelled) {
               alert('Login cancelled');
            } else {
               alert('Login success with permissions: '
               +result.grantedPermissions.toString());
            }
         },
         function(error) {
            alert('Login fail with error: ' + error);
         }
      );
   }

   logUser(isLogged) {
        this.props.actions.UserLoggedIn(isLogged);
        this.setState({login: this.props.login});
   }

    render() {
        return (
        <View style={styles.container}>
            <ParkitLogo />
            <Text style={styles.textBox}>App That Solves Your Problem </Text>
            <TouchableOpacity style={styles.content} onPress={this._fbAuth}>
                <Text style={styles.textBoxLogin}>
                    Login With Facebook
                </Text>
            </TouchableOpacity>
        </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        top: 400,
        backgroundColor:'#4267b2',
        width:300,
        paddingTop:3,
        minHeight: 30,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20, 
        borderRadius:1
    },
    textBoxLogin: {
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center',
        fontSize:20,
        marginBottom:10,
    },
    textBox: {
        textAlign:'center',
        fontSize:20,
        marginBottom:10,
        top: 300
    }
});

function mapStateToProps(state, ownProps) {
    return {
        login: state.login
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions : bindActionCreators(parkitActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);