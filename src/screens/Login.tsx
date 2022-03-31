import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import React, { FC, ReactNode, useContext, useEffect, useState } from 'react';
import { Button, Input } from '../components';
import auth from '@react-native-firebase/auth';

const Login: FC = (props) => {

    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');

    const handleLogin = async() => {
        if( email && password) {
            const user = await auth().signInWithEmailAndPassword(email, password).then(() =>  console.log("User Login"))
        } else {
            Alert.alert("Missing Fields");
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Login Screen</Text>
                <Input placeholder='Email' onChangeText={(value) => setEmail(value)} keyboardType='email-address' maxLength={128}/>
                <Input placeholder='Password' onChangeText={(value) => setPassword(value)} secureText={true} maxLength={225}/>
                <Button onPress={handleLogin} title='Submit' />
            </View>
            <View style={styles.register}>
                <Text style={{ marginHorizontal: 10}}>Don't Have an Account?</Text>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => props.navigation.navigate('Register')}
                >
                    <Text style={{ color: 'lightskyblue'}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginVertical: 10}}>
                <Button title='Login With Phone' onPress={() => props.navigation.navigate('Phone')}/>
            </View>
            <View style={{ marginVertical: 10 }}>
                <Button title='Login With Google' onPress={() => props.navigation.navigate('Google')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black'
    },
    register: {
        flexDirection: 'row',
        marginTop: 10
    },
    txt: {
        fontSize: 14,
        color: '#fff'
    }
})

export default Login;