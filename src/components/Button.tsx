import React, { FC} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

interface Props {
    title: string,
    onPress:() => void;
}

const Button: FC<Props>= (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Text style={styles.txt}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const { width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 10
    },
    txt: {
        color: 'white'
    }
});

export default Button;