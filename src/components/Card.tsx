import React, { FC, ReactNode} from 'react';
import { View, StyleSheet, Dimensions} from 'react-native';

interface Props {
    children: ReactNode;
}

const Card: FC<Props> = (props) => {
    return(
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const { width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        width: width / 1.05,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 5,
        marginVertical: 4,
        alignSelf: 'center'
    }
});

export default Card;