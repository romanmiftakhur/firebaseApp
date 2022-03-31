import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from '../screens/Home';
import Phone from '../screens/Phone';
import Google from '../screens/Google';
import OTP from '../screens/Otp';

const Stack = createStackNavigator();

export const AuthStack = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='Login'
                component={Login}
            />
            <Stack.Screen
                name='Register'
                component={Signup}
            />
            <Stack.Screen
                name='Phone'
                component={Phone}
            />
            <Stack.Screen
                name='Google'
                component={Google}
            />
            <Stack.Screen
                name='OTP'
                component={OTP}
            />
        </Stack.Navigator>
    );
};

export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
    )
}



