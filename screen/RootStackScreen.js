 
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from './home';
import Login from './login';
import Signup from './signup';
import Forgot from './forgot';
import Dashboard from './dashboard';
import Dashbottom from "./dashbottom";

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Home" component={Home}/>
        <RootStack.Screen name="Login" component={Login}/>
        <RootStack.Screen name="Signup" component={Signup}/>
        <RootStack.Screen name="Forgot" component={Forgot}/>
        <RootStack.Screen name="Dashbottom" component={Dashbottom}/>
    </RootStack.Navigator>
);

export default RootStackScreen;