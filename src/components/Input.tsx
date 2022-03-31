import React, {FC} from 'react';
import { View, TextInput, Dimensions, StyleSheet, KeyboardTypeOptions } from 'react-native';

interface Props {
    placeholder: string;
    onChangeText: (value: string) => void;
    secureText?: boolean;
    keyboardType?: KeyboardTypeOptions | undefined;
    maxLength: number;
}

const Input : FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={props.placeholder} onChangeText={props.onChangeText} secureTextEntry={props.secureText || false} keyboardType={props.keyboardType} maxLength={props.maxLength}/>
        </View>
    )
}

const { width, height} = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        width: width / 1.1,
        alignSelf: 'center',
        backgroundColor: '#e3e3e3',
        borderRadius: 5,
        marginVertical: 10    
    },
    input: {
        padding: 15
    }
})


export default Input;

