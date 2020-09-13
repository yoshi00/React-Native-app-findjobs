import React from 'react';
import { Component } from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux'

import Login from './components/Login/Index'
import SignupUser from './components/SignupUser/Index'

export default class Routes extends Component{
    render(){
        return(
            <Router>
                <Stack>
                    <Scene key="login" component={Login} title="Login"/>
                    <Scene key="signupUser" component={SignupUser} title="User"/>
                </Stack>
            </Router>
        )
    }
}