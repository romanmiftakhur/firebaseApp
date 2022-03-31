import React, { FC, useState, useEffect} from 'react';
import { View, Text, StyleSheet, ToastAndroid} from 'react-native';
import { Button, Input } from '../components';

const OTP: FC = (props) => {

    const [ number, setNumber] = useState('');
    const confirm = props.navigation.getParam('confirm');

    const OtpVerify = async() => {
        try {
            let data = await confirm.confirm(number);
            console.log("data", data);
            props.navigation.navigate("Home");
        } catch (error) {
            console.log(error);
            ToastAndroid.show('Invalid Code.', ToastAndroid.SHORT);
        }
    }

    return(
        <View style={styles.container}>
            <Text>Login With Phone</Text>
            <Input placeholder='Number Phone' onChangeText={(value) => setNumber(value)} keyboardType="number-pad" maxLength={12} />
            <Button title='submit' onPress={OtpVerify} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default OTP;