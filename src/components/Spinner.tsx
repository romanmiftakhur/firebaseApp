import React from 'react';
import { ActivityIndicator, StyleSheet, View} from 'react-native';

const Spinner = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator color="red" size="large" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default Spinner;
