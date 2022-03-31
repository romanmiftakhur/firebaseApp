import React, { FC, useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Button, Input } from '../components';


const Phone: FC = (props) => {

    const [ number, setNumber ] = useState('');
    const [ confirm, setConfirm] = useState(null);

    const handleNumber = async() => {
        const confirmation = await auth().signInWithPhoneNumber('+62'+number);
        console.log("confirmation", confirmation);
        if (confirmation) {
            setConfirm(confirmation);
            props.navigation.navigate('OTP', { 'confirm': confirmation })
        }
        console.log(number);
    };


    return(
        <View style={styles.container}>
            <Text>Login With Phone</Text>
            <Input placeholder='Number Phone' onChangeText={(value) => setNumber(value)} keyboardType="number-pad" maxLength={12}/>
            <Button title='submit' onPress={handleNumber}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Phone;