import React, { FC, useState, useEffect} from 'react';
import { View, Text, StyleSheet} from 'react-native';


const Google: FC = () => {
    return(
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Google;