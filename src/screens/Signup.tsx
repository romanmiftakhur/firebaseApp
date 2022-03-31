import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useState, FC, useEffect } from 'react'
import { Button, Input } from '../components';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Signup: FC = (props) => {

    const [ username, setUsername] = useState('');
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    
    const handleRegister = async() => {
        if( username && email && password ){
            try {
                const {user} = await auth().createUserWithEmailAndPassword(email, password).then(() => console.log("User Register"));

                if( user ) {
                    await firestore().collection('users').doc(user.uid).set({ username, email, password});
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            Alert.alert(`Error`, `Missing Fields`);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register Screen</Text>
            <View>
                <Input placeholder='Username' onChangeText={(value) => setUsername(value)} keyboardType='default' maxLength={225}/>
                <Input placeholder='Email' onChangeText={(value) => setEmail(value)} keyboardType='email-address' maxLength={128} />
                <Input placeholder='Password' onChangeText={(value) => setPassword(value)} secureText={true} maxLength={225} />
                <Button title='Register' onPress={handleRegister}/>
            </View>
            <View style={styles.register}>
                <Text style={{ marginHorizontal: 10 }}>Already Have an Account?</Text>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => props.navigation.navigate('Login')}
                >
                    <Text style={{ color: 'lightskyblue' }}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'relative'
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
})

export default Signup;